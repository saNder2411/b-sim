(ns app.db.boiler-plant.actuators.blowdown.sludge-valve.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-sludge-valve
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :boiler-plant :actuators :blowdown :sludge-valve] path) value)))

(reg-event-db :change-sludge-valve-init-countdown-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [unit (get-in db [kit :boiler-plant :actuators :blowdown :sludge-valve :init-sim-output :countdown :unit])
                      converted-value (cond-> value
                                              (= unit "m") (* 60))]
                  (assoc-in db [kit :boiler-plant :actuators :blowdown :sludge-valve :init-sim-output :countdown :value] converted-value))))

(reg-event-db :apply-sludge-valve-settings
              (fn [{:keys [kit] :as db} _]
                (let [value (get-in db [kit :boiler-plant :actuators :blowdown :sludge-valve :init-sim-output :countdown :value])]
                  (-> db
                      (assoc-in [kit :boiler-plant :actuators :blowdown :sludge-valve :countdown :value] value)
                      (assoc-in [kit :boiler-plant :actuators :blowdown :sludge-valve :settings-view] false)))))

(reg-event-db :restore-defaults-sludge-valve-settings
              (fn [{:keys [kit] :as db} _]
                (let [default-values (merge defaults/SLUDGE-VALVE {:settings-view true})]
                  (assoc-in db [kit :boiler-plant :actuators :blowdown :sludge-valve] default-values))))
