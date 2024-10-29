(ns simulation.feedwater
  (:require [simulation.thermodynamics-fn :as t]))

(defn temperature! [db-atom v]
  (swap! db-atom #(-> %
                      (assoc-in [:feedwater :temperature] v)
                      (assoc-in [:feedwater :enthalpy] (t/liquid-enthalpy-by-t v)))))



