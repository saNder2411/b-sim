(ns app.db.boiler-plant.feedwater.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-feedwater
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :boiler-plant :feedwater] path) value)))

(reg-event-db :change-feedwater-conductivity-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [unit (get-in db [kit :boiler-plant :feedwater :conductivity :unit])
                      converted-value (cond-> value
                                              (= unit "ppm") (* 2))]
                  (assoc-in db [kit :boiler-plant :feedwater :conductivity :value] converted-value))))

(reg-event-db :apply-feedwater-settings
              (fn [{:keys [kit] :as db} _]
                (assoc-in db [kit :boiler-plant :feedwater :settings-view] false)))

(reg-event-db :restore-defaults-feedwater-settings
              (fn [{:keys [kit] :as db} _]
                (let [default-values (merge defaults/FEEDWATER {:settings-view true})]
                  (assoc-in db [kit :boiler-plant :feedwater] default-values))))
