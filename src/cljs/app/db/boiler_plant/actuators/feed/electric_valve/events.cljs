(ns app.db.boiler-plant.actuators.feed.electric-valve.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-feed-electric-valve
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :boiler-plant :actuators :feed :electric-valve] path) value)))

(reg-event-db :change-feed-electric-valve-flow-rate-max-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [unit (get-in db [kit :boiler-plant :actuators :feed :electric-valve :flow-rate :unit])
                      converted-value (cond-> value
                                              (= unit "T/h") (* 1.016260162601626))]
                  (assoc-in db [kit :boiler-plant :actuators :feed :electric-valve :flow-rate :max-value] converted-value))))

(reg-event-db :apply-feed-electric-valve-settings
              (fn [{:keys [kit] :as db} _]
                (let [{:keys [damper transition potentiometer]} (get-in db [kit :boiler-plant :actuators :feed :electric-valve :init-sim-output])]
                  (-> db
                      (update-in [kit :boiler-plant :actuators :feed :electric-valve :damper] merge damper)
                      (update-in [kit :boiler-plant :actuators :feed :electric-valve :transition] merge transition)
                      (update-in [kit :boiler-plant :actuators :feed :electric-valve :potentiometer] merge potentiometer)
                      (assoc-in [kit :boiler-plant :actuators :feed :electric-valve :settings-view] false)))))

(reg-event-db :restore-defaults-feed-electric-valve-settings
              (fn [{:keys [kit] :as db} _]
                (let [default-values (merge defaults/FEEDWATER-VALVE-ELECTRIC {:settings-view true})]
                  (assoc-in db [kit :boiler-plant :actuators :feed :electric-valve] default-values))))
