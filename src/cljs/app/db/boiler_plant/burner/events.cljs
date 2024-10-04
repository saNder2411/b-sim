(ns app.db.boiler-plant.burner.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :burner/change
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :boiler-plant :burner] path) value)))

(reg-event-db :burner/change-pressure-value
              (fn [{:keys [kit] :as db} [_ [v-key value]]]
                (let [unit (get-in db [kit :boiler-plant :burner :pressure :unit])
                      converted-value (cond-> value
                                              (= unit "psi") (* 0.06894744825494))]
                  (assoc-in db [kit :boiler-plant :burner :pressure :value v-key] converted-value))))

(reg-event-db :burner/change-power-max-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [unit (get-in db [kit :boiler-plant :burner :power :unit])
                      converted-value (cond-> value
                                              (= unit "MW") (* 1000))]
                  (assoc-in db [kit :boiler-plant :burner :power :max] converted-value))))

(reg-event-db :burner/change-fuel-consumption-coeff-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [unit (get-in db [kit :boiler-plant :burner :fuel-consumption :coeff :unit])
                      converted-value (cond-> value
                                              (= unit "nm³/kW*s") (* 0.00027777777))]
                  (assoc-in db [kit :boiler-plant :burner :fuel-consumption :coeff :value] converted-value))))

(reg-event-db :burner/apply-settings
              (fn [{:keys [kit] :as db} _]
                (let [{:keys [state]} (get-in db [kit :boiler-plant :burner :init-sim-output])]

                  (-> db
                      (update-in [kit :boiler-plant :burner :state] merge state)
                      (assoc-in [kit :boiler-plant :burner :settings-view] false)))))

(reg-event-db :burner/restore-defaults-settings
              (fn [{:keys [kit] :as db} _]
                (let [default-values (merge defaults/BURNER {:settings-view true})]
                  (assoc-in db [kit :boiler-plant :burner] default-values))))
