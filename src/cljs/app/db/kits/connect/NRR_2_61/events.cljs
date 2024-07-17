(ns app.db.kits.connect.NRR-2-61.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-NRR-2-61
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :level :controllers "NRR 2-61"] path) value)))

(reg-event-db :apply-NRR-2-61-settings
              (fn [{:keys [kit] :as db} _]
                (assoc-in db [kit :level :controllers "NRR 2-61" :settings-view] false)))

(reg-event-db :restore-defaults-NRR-2-61-settings
              (fn [{:keys [kit] :as db} _]
                (let [default-values (merge defaults/NRR-2-61 {:settings-view true})]
                  (assoc-in db [kit :level :controllers "NRR 2-61"] default-values))))
