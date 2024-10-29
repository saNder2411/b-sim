(ns simulation.feed-pi-controller
  (:require [simulation.helpers :as h]))

(defn mode! [db-atom v]
  (swap! db-atom assoc-in [:actuators :feed :pi-controller :mode] v))

(defn direction! [db-atom v]
  (swap! db-atom assoc-in [:actuators :feed :pi-controller :direction] v))

(defn integration-action-time! [db-atom v]
  (swap! db-atom #(-> %
                      (assoc-in [:actuators :feed :pi-controller :integral-action-time :value] v)
                      (assoc-in [:actuators :feed :pi-controller :integral-action-time :tact] (if (> v 0) (/ 1 v) 0)))))

(defn- update-control-area [db t-point p-band]
  (let [c-area (* (/ t-point 100) p-band)]
    (-> db
        (assoc-in [:actuators :feed :pi-controller :control-area :value] c-area)
        (assoc-in [:actuators :feed :pi-controller :control-area :upper-boundary] (+ t-point c-area))
        (assoc-in [:actuators :feed :pi-controller :control-area :lower-boundary] (- t-point c-area)))))

(defn target-point! [db-atom v]
  (let [p-band (get-in @db-atom [:actuators :feed :pi-controller :proportional-band])]
    (swap! db-atom #(-> %
                        (assoc-in [:actuators :feed :pi-controller :target-point] v)
                        (update-control-area v p-band)))))

(defn proportional-band! [db-atom v]
  (let [t-point (get-in @db-atom [:actuators :feed :pi-controller :target-point])]
    (swap! db-atom #(-> %
                        (assoc-in [:actuators :feed :pi-controller :proportional-band] v)
                        (update-control-area t-point v)))))

(defn x-next! [db-atom v]
  (let [mode (get-in db-atom [:actuators :feed :pi-controller :mode])]
    (if (= mode "manual")
      (swap! db-atom assoc-in [:actuators :feed :pi-controller :x :next] v)
      @db-atom)))

(def range-between-1+1 (partial h/check-val-by-range -1 1))

(defn- get-adjusted-x-by-2-el [db probe-level-%]
  (let [steam-th (get-in db [:boiler :steam :t-h])
        k-factor (get-in db [:actuators :feed :pi-controller :k-factor])
        res (- probe-level-% (* steam-th k-factor))]
    (if (< res 0) 0 res)))

(defn- get-adjusted-x-by-3-el [db probe-level-%]
  (let [steam-th (get-in db [:boiler :steam :t-h])
        feed-fr-th (get-in db [:actuators :feed :flow-rate :t-h])
        k-factor (get-in db [:actuators :feed :pi-controller :k-factor])
        res (if (> steam-th feed-fr-th)
              (- probe-level-% (* (- steam-th feed-fr-th) k-factor))
              probe-level-%)]
    (if (< res 0) 0 res)))

(defn- get-adjusted-x [db probe-level-%]
  (let [c-elements (get-in db [:actuators :feed :pi-controller :c-elements])]
    (case c-elements
      1 probe-level-%
      2 (get-adjusted-x-by-2-el db probe-level-%)
      3 (get-adjusted-x-by-3-el db probe-level-%)
      probe-level-%)))

(defn- update-x-adjusted [db probe-level-%]
  (let [{:keys [upper-boundary lower-boundary]} (get-in db [:actuators :feed :pi-controller :control-area])
        raw-x (get-adjusted-x db probe-level-%)
        adjusted-x (h/check-val-by-range lower-boundary upper-boundary raw-x)]
    (assoc-in db [:actuators :feed :pi-controller :x :adjusted] adjusted-x)))

(defn- update-n-zone-active? [db]
  (let [x (get-in db [:actuators :feed :pi-controller :x :adjusted])
        w (get-in db [:actuators :feed :pi-controller :target-point])
        n-zone (get-in db [:actuators :feed :pi-controller :n-zone])
        nz (* (/ w 100) (:value n-zone))
        nz-half (/ nz 2)
        nz-active? (cond
                     (< x (- w nz)) false
                     (and (< x (- w nz-half)) (> x (- w nz))) (:active? n-zone)
                     (and (< x w) (>= x (- w nz-half))) true
                     (and (> x w) (<= x (+ w nz-half))) true
                     (and (> x (+ w nz-half)) (< x (+ w nz))) (:active? n-zone)
                     (> x (+ w nz)) false
                     :else false)]
    (assoc-in db [:actuators :feed :pi-controller :n-zone :active?] nz-active?)))

(defn- get-x-next [db]
  (let [direction (get-in db [:actuators :feed :pi-controller :direction])
        {:keys [control-area integral-action-time n-zone x]} (get-in db [:actuators :feed :pi-controller])
        {:keys [upper-boundary lower-boundary]} control-area
        xk (h/safe-division (- (:adjusted x) lower-boundary) (- upper-boundary lower-boundary))
        so 0.5
        x (if (:active? n-zone) 0 (- xk so))
        xw (if (= direction "fill") (-' x) x)
        yp (range-between-1+1 (* 2 xw))
        yi (range-between-1+1 (* yp (:tact integral-action-time)))
        y (/ (+ (range-between-1+1 (+ yp yi)) 1) 2)]
    (* y 100)))

(defn- change-x-next [db]
  (let [{:keys [next force-off? force-keep?]} (-> db :actuators :feed :pi-controller :x)
        new-x-next (cond
                     force-off? 0
                     force-keep? next
                     :else (get-x-next db))]
    (assoc-in db [:actuators :feed :pi-controller :x :next] new-x-next)))

(defn- update-x-next [db]
  (if (= (get-in db [:actuators :feed :pi-controller :mode]) "auto")
    (change-x-next db)
    db))

(defn sim-step! [db-atom probe-level-%]
  (swap! db-atom #(-> %
                      (update-x-adjusted probe-level-%)
                      update-n-zone-active?
                      update-x-next)))