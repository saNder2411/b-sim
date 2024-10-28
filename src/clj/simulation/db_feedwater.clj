(ns simulation.db-feedwater
  (:require [simulation.thermodynamics-fn :as t]))

(defn feedwater-temperature! [db-atom v]
  (swap! db-atom #(-> %
                      (assoc-in [:feedwater :temperature] v)
                      (assoc-in [:feedwater :enthalpy] (t/liquid-enthalpy-by-t v)))))



