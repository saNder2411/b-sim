(ns app.db.boiler-plant.actuators.blowdown.continuous-valve.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-continuous-valve
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :boiler-plant :actuators :blowdown :continuous-valve] path) value)))

(reg-event-db :change-continuous-valve-flow-rate-max-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [unit (get-in db [kit :boiler-plant :actuators :blowdown :continuous-valve :flow-rate :unit])
                      converted-value (cond-> value
                                              (= unit "T/h") (* 1.016260162601626))]
                  (assoc-in db [kit :boiler-plant :actuators :blowdown :continuous-valve :flow-rate :max-value] converted-value))))

(reg-event-db :apply-continuous-valve-settings
              (fn [{:keys [kit] :as db} _]
                (let [{:keys [damper transition]} (get-in db [kit :boiler-plant :actuators :blowdown :continuous-valve :init-sim-output])]
                  (-> db
                      (update-in [kit :boiler-plant :actuators :blowdown :continuous-valve :damper] merge damper)
                      (update-in [kit :boiler-plant :actuators :blowdown :continuous-valve :transition] merge transition)
                      (assoc-in [kit :boiler-plant :actuators :blowdown :continuous-valve :settings-view] false)))))

(reg-event-db :restore-defaults-continuous-valve-settings
              (fn [{:keys [kit] :as db} _]
                (let [default-values (merge defaults/CONTINUOUS-VALVE {:settings-view true})]
                  (assoc-in db [kit :boiler-plant :actuators :blowdown :continuous-valve] default-values))))
