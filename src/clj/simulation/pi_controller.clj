(ns simulation.pi-controller
  (:require [simulation.thermodynamics-fn :refer [check-val-by-range]]))

(def target-point (atom 50))                                ;; x-init, y-init
(def c-elements (atom 1))                                   ;; control elements 1 | 2 | 3
(def k-factor (atom 0.5))                                   ;; for 2 | 3 elements
(def proportional-band (atom 20))                           ;; +-% of set-point
(def integral-action-time (atom 0))                         ;; sec
(def n-zone (atom 5))                                       ;; +-% of set-point
(def n-zone-active? (atom true))

(def ^:private control-area (atom (* (/ @target-point 100) @proportional-band))) ;; +/- xp around w = control area
(def ^:private upper-control-boundary (atom (+ @target-point @control-area)))
(def ^:private lower-control-boundary (atom (- @target-point @control-area)))
(def ^:private integral-action-time-sec (atom 0))           ;; ta = 1 sec

(defn target-point-watcher [_k _a old new]
  (when (not= old new)
    (reset! control-area (* (/ new 100) @proportional-band))))

(defn proportional-band-watcher [_k _a old new]
  (when (not= old new)
    (reset! control-area (* (/ @target-point 100) new))))

(defn control-area-watcher [_k _a old new]
  (when (not= old new)
    (reset! upper-control-boundary (+ @target-point new))
    (reset! lower-control-boundary (- @target-point new))))

(defn integral-action-time-watcher [_k _a old new]
  (when (not= old new)
    (reset! integral-action-time-sec (if (> new 0) (/ 1 new) 0))))

(add-watch target-point :target-point-watcher target-point-watcher)
(add-watch proportional-band :proportional-band proportional-band-watcher)
(add-watch control-area :control-area-watcher control-area-watcher)
(add-watch integral-action-time :integral-action-time-watcher integral-action-time-watcher)

(defn init [data]
  (reset! target-point (:target-point data))
  (reset! c-elements (:c-elements data))
  (reset! k-factor (:k-factor data))
  (reset! proportional-band (:proportional-band data))
  (reset! integral-action-time (:integral-action-time data))
  (reset! n-zone (:n-zone data)))

(defn form-x-2-el [x steam-th]
  (let [res (- x (* steam-th @k-factor))]
    (if (< res 0) 0 res)))

(defn form-x-3-el [x steam-th feed-input-th]
  (let [res (if (> steam-th feed-input-th)
              (- x (* (- steam-th feed-input-th) @k-factor))
              x)]
    (if (< res 0) 0 res)))

(defn form-x [x steam-th feed-input-th]
  (case @c-elements
    1 x
    2 (form-x-2-el x steam-th)
    3 (form-x-3-el x steam-th feed-input-th)
    x))

(defn safe-division [dividend divisor]
  (cond
    (and (= dividend 0) (= divisor 0)) 1
    (and (= dividend 0) (not= divisor 0)) 0
    (and (not= dividend 0) (= divisor 0)) ##Inf
    :else (/ dividend divisor)))

(def range-between-1+1 (partial check-val-by-range -1 1))

(defn set-n-zone-active? [x]
  (let [w @target-point
        nz (* (/ w 100) @n-zone)
        nz-half (/ nz 2)
        nz-active? (cond
                     (< x (- w nz)) false
                     (and (< x (- w nz-half)) (> x (- w nz))) @n-zone-active?
                     (and (< x w) (>= x (- w nz-half))) true
                     (and (> x w) (<= x (+ w nz-half))) true
                     (and (> x (+ w nz-half)) (< x (+ w nz))) @n-zone-active?
                     (> x (+ w nz)) false
                     :else false)]
    (reset! n-zone-active? nz-active?)))

(defn sim-step [probe-level-% steam-th feed-th fill-mode]
  (let [raw-x (form-x probe-level-% steam-th feed-th)
        adjusted-level (check-val-by-range @lower-control-boundary @upper-control-boundary raw-x)
        xk (safe-division (- adjusted-level @lower-control-boundary) (- @upper-control-boundary @lower-control-boundary))
        so 0.5
        nz (set-n-zone-active? adjusted-level)
        x (if nz 0 (- xk so))
        xw (if (= fill-mode "fill") (-' x) x)
        yp (range-between-1+1 (* 2 xw))
        yi (range-between-1+1 (* yp @integral-action-time-sec))
        y (/ (+ (range-between-1+1 (+ yp yi)) 1) 2)
        next-v-% (* y 100)]
    [next-v-% adjusted-level]))


(comment
  (sim-step 50 17 35 "fill")
  )