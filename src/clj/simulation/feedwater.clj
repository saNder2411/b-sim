(ns simulation.feedwater
  (:require [simulation.thermodynamics-fn :as t]))

(defn temperature! [db-atom v]
  (swap! db-atom #(-> %
                      (assoc-in [:feedwater :temperature] v)
                      (assoc-in [:feedwater :enthalpy] (t/liquid-enthalpy-by-t v)))))

(defn init! [db-atom {:keys [conductivity temperature sludge-ratio]}]
  (swap! db-atom #(-> %
                      (assoc-in [:feedwater :conductivity] conductivity)
                      (assoc-in [:feedwater :sludge-ratio] sludge-ratio)
                      (assoc-in [:feedwater :temperature] temperature)
                      (assoc-in [:feedwater :enthalpy] (t/liquid-enthalpy-by-t temperature)))))



