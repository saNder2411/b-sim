(ns simulation.feedwater
  (:require [simulation.thermodynamics-fn :refer [liquid-enthalpy-by-t]]))

(def conductivity (atom 500))                               ; µS/cm
(def temperature (atom 103))                                ; °C
(def enthalpy (atom (liquid-enthalpy-by-t 103)))            ;kJ/kg
(def sludge-ratio (atom 0.0003))

(defn temperature-watcher [_key _atom old new]
  (when (not= old new)
    (reset! enthalpy (liquid-enthalpy-by-t new))))

(add-watch temperature :temperature-watcher temperature-watcher)

(defn init [data]
  (reset! conductivity (:conductivity data))
  (reset! temperature (:temperature data))
  (reset! sludge-ratio (:sludge-ratio data)))

(comment
  (init {:conductivity 500 :temperature 105 :sludge-ratio 0.0002})
  (deref enthalpy)
  )


