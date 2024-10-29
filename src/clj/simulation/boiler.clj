(ns simulation.boiler
  (:require [simulation.thermodynamics-fn :as t]
            [simulation.helpers :as h]))

(defn steam-th! [db-atom th-v]
  (let [kg-h (* th-v 1000)]
    (swap! db-atom #(-> %
                        (assoc-in [:boiler :steam :t-h] th-v)
                        (assoc-in [:boiler :steam :kg-h] kg-h)
                        (assoc-in [:boiler :steam :kg-s] (/ kg-h 3600))))))

(defn- update-pressure [db]
  (let [p-shrift (-> db :thermodynamics :pressure-shift)
        next-p (+ (-> db :boiler :pressure) p-shrift)]
    (-> db
        (assoc-in [:boiler :pressure] next-p)
        (assoc-in [:boiler :temperature] (t/liquid-temperature next-p)))))

(defn- update-volume [db]
  (let [vol-shrift (-> db :thermodynamics :volume-shift)
        {:keys [value max]} (get-in db [:boiler :volume])
        next-value (->> vol-shrift
                        (+ value)
                        (h/check-val-by-range 0 max))]
    (-> db
        (assoc-in [:boiler :volume :value] next-value)
        (assoc-in [:boiler :volume :value-%] (h/calc-%-by-v max next-value))
        (assoc-in [:boiler :volume :probe-level-%] (t/liquid-level-% next-value max)))))

(defn- update-sludge [db]
  (let [feed-kg-s (-> db :actuators :feed :flow-rate :kg-s)
        blow-kg-s (-> db :actuators :blow :flow-rate :kg-s)
        sludge-ratio (-> db :feedwater :sludge-ratio)
        {:keys [value max]} (get-in db [:boiler :sludge])
        next-value (->> sludge-ratio
                        (* feed-kg-s)
                        (#(- % blow-kg-s))
                        (+ value)
                        (h/check-val-by-range 0 max))]
    (assoc-in db [:boiler :sludge :value] next-value)))

(defn- update-conductivity [{:keys [boiler feedwater actuators] :as db}]
  (let [stem-kg-s (-> boiler :steam :kg-s)
        feed-kg-s (-> actuators :feed :flow-rate :kg-s)
        drain-kg-s (-> actuators :drain :flow-rate :kg-s)
        blow-kg-s (-> actuators :blow :flow-rate :kg-s)
        out-water-mass (+ drain-kg-s blow-kg-s)
        {:keys [volume conductivity]} boiler
        water-mass (- (* 1000 (:value volume)) out-water-mass)
        sigma-water-mass (* conductivity water-mass)
        sigma-input-water-mass (* (:conductivity feedwater) feed-kg-s)
        next-conductivity (/ (+ sigma-water-mass sigma-input-water-mass)
                             (- (+ water-mass feed-kg-s) stem-kg-s))]
    (assoc-in db [:boiler :conductivity] next-conductivity)))


(defn sim-step! [db-atom]
  (swap! db-atom #(-> %
                      update-pressure
                      update-volume
                      update-sludge
                      update-conductivity)))

