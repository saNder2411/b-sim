(ns simulation.db
  (:require [simulation.thermodynamics-fn :as t]))

(def db (atom {:boiler    {:steam        {:t/h  17.5
                                          :kg/h 17500
                                          :kg/s 4.861111111}
                           :pressure     11                 ;"bar"
                           :temperature  (t/liquid-temperature 11) ;"°C"
                           :volume       {:value   48       ;"m³"
                                          :value-% (t/liquid-level-% 48 55) ;"%"
                                          :max     55}
                           :sludge       {:value 39.2       ;"kg"
                                          :max   80}
                           :conductivity 3000}              ; µS/cm

               :feedwater {:conductivity 500                ; µS/cm
                           :temperature  103                ; °C
                           :enthalpy     (t/liquid-enthalpy-by-t 103) ;kJ/kg saturated liquid enthalpy within T = [90 - 110] °C in kJ/kg
                           :sludge-ratio 0.0003}

               :burner    {:state            "off"
                           :mode             "auto"
                           :operation        "normal"
                           :switch-points    {:off 12.5
                                              :on  11.5}
                           :power            {:value 0
                                              :max   25000}
                           :fuel-consumption {:value 0
                                              :coeff 0.083}
                           :heat-transfer    {:value 0
                                              :coeff 0.9}}}))

(defn has-changed? [old new path]
  (not= (get-in old path) (get-in new path)))

(defn steam-watcher [_key db-atom old {{:keys [steam]} :boiler :as new}]
  (when (has-changed? old new [:boiler :steam :t/h])
    (let [kg-h (* (:t/h steam) 1000)
          steam! (assoc steam :kg/h kg-h :kg/s (/ kg-h 3600))]
      (swap! db-atom assoc-in [:boiler :steam] steam!))))

(defn pressure-watcher [_key db-atom old {{:keys [pressure]} :boiler :as new}]
  (when (has-changed? old new [:boiler :pressure])
    (swap! db-atom assoc-in [:boiler :temperature] (t/liquid-temperature pressure))))

(defn volume-watcher [_key db-atom old {{:keys [volume]} :boiler :as new}]
  (when (has-changed? old new [:boiler :volume :value])
    (swap! db-atom assoc-in [:boiler :volume :value-%] (t/liquid-level-% (:value volume) (:max volume)))))

(defn burner-state-watcher [_key db-atom old {{:keys [state power fuel-consumption heat-transfer]} :burner :as new}]
  (when (has-changed? old new [:burner :state])
    (let [[p f h] (cond
                    (= state "on") [(:max power)
                                    (* (:max power) (:coeff fuel-consumption))
                                    (* (:max power) (:coeff heat-transfer))]
                    :else [0 0 0])]
      (swap! db-atom #(-> %
                          (assoc-in [:burner :power :value] p)
                          (assoc-in [:burner :fuel-consumption :value] f)
                          (assoc-in [:burner :heat-transfer :value] h))))))


(add-watch db :steam-watcher steam-watcher)
(add-watch db :pressure-watcher pressure-watcher)
(add-watch db :volume-watcher volume-watcher)
(add-watch db :burner-state-watcher burner-state-watcher)

(comment
  (swap! db assoc-in [:burner :state] "on")

  (deref db)
  )





