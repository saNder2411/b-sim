(ns simulation.burner)

(defn state! [db-atom v]
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

(defn- get-next-state [db limit-alarm?]
  (let [p (-> db :boiler :pressure)
        {:keys [state operation switch-points]} (:burner db)]
    (cond
      (= operation "standby") "off"
      limit-alarm? "off"
      (>= p (:off switch-points)) "off"
      (<= p (:on switch-points)) "on"
      :else state)))


(defn sim-step! [db-atom limit-alarm?]
  (if (= (-> @db-atom :burner :mode) "auto")
    (state! db-atom (get-next-state @db-atom limit-alarm?))
    @db-atom))

