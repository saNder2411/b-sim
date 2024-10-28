(ns simulation.db-burner)

(defn burner-state! [db-atom v]
  (let [{:keys [power fuel-consumption heat-transfer]} (:burner @db-atom)
        [p f h] (cond
                  (= v "on") [(:max power)
                              (* (:max power) (:coeff fuel-consumption))
                              (* (:max power) (:coeff heat-transfer))]
                  :else [0 0 0])]
    (swap! db-atom #(-> %
                        (assoc-in [:burner :state] v)
                        (assoc-in [:burner :power :value] p)
                        (assoc-in [:burner :fuel-consumption :value] f)
                        (assoc-in [:burner :heat-transfer :value] h)))))


(defn burner-sim-step! [db-atom limit-alarm?]
  (when (= (-> @db-atom :burner :mode) "auto")
    (let [p (get-in @db-atom [:boiler :pressure])
          {:keys [operation switch-points]} (:burner @db-atom)
          next-state (cond
                       (= operation "standby") "off"
                       limit-alarm? "off"
                       (>= p (:off switch-points)) "off"
                       (<= p (:on switch-points)) "on"
                       :else "off")]
      (burner-state! db-atom next-state))))