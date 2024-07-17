(ns app.db.boiler-plant.actuators.feed.pneumatic-valve.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-feed-pneumatic-valve
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :boiler-plant :actuators :feed :pneumatic-valve] path) value)))

(reg-event-db :change-feed-pneumatic-valve-flow-rate-max-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [unit (get-in db [kit :boiler-plant :actuators :feed :pneumatic-valve :flow-rate :unit])
                      converted-value (cond-> value
                                              (= unit "T/h") (* 1.016260162601626))]
                  (assoc-in db [kit :boiler-plant :actuators :feed :pneumatic-valve :flow-rate :max-value] converted-value))))

(reg-event-db :apply-feed-pneumatic-valve-settings
              (fn [{:keys [kit] :as db} _]
                (let [{:keys [damper]} (get-in db [kit :boiler-plant :actuators :feed :pneumatic-valve :init-sim-output])]
                  (-> db
                      (update-in [kit :boiler-plant :actuators :feed :pneumatic-valve :damper] merge damper)
                      (assoc-in [kit :boiler-plant :actuators :feed :pneumatic-valve :settings-view] false)))))

(reg-event-db :restore-defaults-feed-pneumatic-valve-settings
              (fn [{:keys [kit] :as db} _]
                (let [default-values (merge defaults/FEEDWATER-VALVE-PNEUMATIC {:settings-view true})]
                  (assoc-in db [kit :boiler-plant :actuators :feed :pneumatic-valve] default-values))))
