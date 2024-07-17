(ns app.db.boiler-plant.actuators.feed.pump.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-feed-pump
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :boiler-plant :actuators :feed :pump] path) value)))

(reg-event-db :change-feed-pump-flow-rate-max-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [unit (get-in db [kit :boiler-plant :actuators :feed :pump :flow-rate :unit])
                      converted-value (cond-> value
                                              (= unit "T/h") (* 1.016260162601626))]
                  (assoc-in db [kit :boiler-plant :actuators :feed :pump :flow-rate :max-value] converted-value))))

(reg-event-db :apply-feed-pump-settings
              (fn [{:keys [kit] :as db} _]
                (let [{:keys [performance]} (get-in db [kit :boiler-plant :actuators :feed :pump :init-sim-output])]
                  (-> db
                      (update-in [kit :boiler-plant :actuators :feed :pump :performance] merge performance)
                      (assoc-in [kit :boiler-plant :actuators :feed :pump :settings-view] false)))))

(reg-event-db :restore-defaults-feed-pump-settings
              (fn [{:keys [kit] :as db} _]
                (let [default-values (merge defaults/FEEDWATER-PUMP {:settings-view true})]
                  (assoc-in db [kit :boiler-plant :actuators :feed :pump] default-values))))
