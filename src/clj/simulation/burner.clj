(ns simulation.burner)

(def state (atom "off"))

(def mode (atom "auto"))

(def operation (atom "normal"))

(def switch-points (atom {:off 12.5 :on 11.5}))             ;;"bar"

(def power (atom {:value 0 :max 25000}))                    ;;"kW"

(def fuel-consumption (atom {:value 0 :coeff 0.083}))       ;;"nm³/s"

(def heat-transfer (atom {:value 0 :coeff 0.9}))            ;;"kJ/kW*s"

(defn state-watcher [_key _s-atom old new]
  (when (not= old new)
    (let [[p f h] (cond
                    (= new "on") [(:max @power)
                                  (* (:max @power) (:coeff @fuel-consumption))
                                  (* (:max @power) (:coeff @heat-transfer))]
                    :else [0 0 0])]
      (swap! power assoc :value p)
      (swap! fuel-consumption assoc :value f)
      (swap! heat-transfer assoc :value h))))

(add-watch state :state-watcher state-watcher)

(defn init [data]
  (reset! mode (:mode data))
  (reset! operation (:operation data))
  (reset! switch-points (:switch-points data))
  (swap! power merge (:power data))
  (swap! fuel-consumption merge (:fuel-consumption data))
  (swap! heat-transfer merge (:heat-transfer data))
  (reset! state (:state data)))

(defn sim-step [pressure limit-alarm?]
  (when (= @mode "auto")
    (let [next-state (cond
                       (= @operation "standby") "off"
                       limit-alarm? "off"
                       (>= pressure (:off @switch-points)) "off"
                       (<= pressure (:on @switch-points)) "on"
                       :else "off")]
      (reset! state next-state))))

(defn sim-step-data []
  {:mode             @mode
   :state            @state
   :power            (:value @power)
   :fuel-consumption (:value @fuel-consumption)})

(comment
  (init {:state            "on"
         :mode             "auto"
         :operation        "normal"
         :switch-points    {:off 12.5
                            :on  11.5}
         :power            {:max 25000}
         :fuel-consumption {:coeff 0.083}
         :heat-transfer    {:coeff 0.9}})
  (deref heat-transfer)
  )