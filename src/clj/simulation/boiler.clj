(ns simulation.boiler
  (:require [simulation.thermodynamics-fn :as t]))

(def steam (atom {:t/h  17.5
                  :kg/h 17500
                  :kg/s 4.861111111}))

(def volume (atom {:value   48                              ;"m³"
                   :value-% (t/liquid-level-% 48 55)        ;"%"
                   :max     55}))

(def pressure (atom 11))                                    ;"bar"

(def temperature (atom (t/liquid-temperature 11)))          ;"°C"

(def sludge (atom {:value 39.2                              ;"kg"
                   :max   80}))

(def conductivity (atom 3000))                              ;"µS/cm"

(defn steam-watcher [_key s-atom old new]
  (when (not= (:t/h old) (:t/h new))
    (let [kg-h (* (:t/h new) 1000)]
      (swap! s-atom assoc :kg/h kg-h :kg/s (/ kg-h 3600)))))

(defn pressure-watcher [_key _a old new]
  (when (not= old new)
    (reset! temperature (t/liquid-temperature new))))

(defn volume-watcher [_key v-atom old new]
  (when (not= (:value old) (:value new))
    (swap! v-atom assoc :value-% (t/liquid-level-% (:value new) (:max new)))))

(add-watch steam :steam-watcher steam-watcher)
(add-watch pressure :pressure-watcher pressure-watcher)
(add-watch volume :volume-watcher volume-watcher)

(defn init [data]
  (swap! steam assoc :t/h (:steam data))
  (reset! pressure (:pressure data))
  (swap! volume assoc :max (:max-volume data))
  (swap! sludge merge (:sludge data))
  (reset! conductivity (:conductivity data)))


(defn sim-step [thermodynamic feedwater flow-rate]
  (let [stem-kg-s (:kg/s @steam)
        feed-flow-rate-kg-s (-> flow-rate :feed :kg/s)
        drain-flow-rate-kg-s (-> flow-rate :drain :kg/s)
        blow-flow-rate-kg-s (-> flow-rate :blow :kg/s)
        out-water-mass (+ drain-flow-rate-kg-s blow-flow-rate-kg-s)
        next-vol-value (->> (:volume-shift thermodynamic)
                            (+ (:value @volume))
                            (t/check-val-by-range 0 (:max @volume)))
        next-sludge-value (->> (:sludge-ratio feedwater)
                               (* feed-flow-rate-kg-s)
                               (#(- % blow-flow-rate-kg-s))
                               (+ (:value @sludge))
                               (t/check-val-by-range 0 (:max @sludge)))
        water-mass (- (* 1000 next-vol-value) out-water-mass)
        sigma-water-mass (* @conductivity water-mass)
        sigma-input-water-mass (* (:conductivity feedwater) feed-flow-rate-kg-s)
        next-conductivity (/ (+ sigma-water-mass sigma-input-water-mass)
                             (- (+ water-mass feed-flow-rate-kg-s) stem-kg-s))]

    (swap! volume assoc :value next-vol-value)
    (swap! pressure + (:pressure-shift thermodynamic))
    #_(reset! temperature (:temperature thermodynamic))
    (swap! sludge assoc :value next-sludge-value)
    (reset! conductivity next-conductivity)))

(defn sim-step-data []
  {:pressure     @pressure
   :temperature  @temperature
   :volume       (:value @volume)
   :volume-%     (:value-% @volume)
   :sludge       (:value @sludge)
   :conductivity @conductivity})

(comment
  (swap! volume assoc :value 49)

  (deref volume)
  )

