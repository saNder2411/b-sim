(ns app.db.kits.connect.NRR-2-61.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :NRR-2-61/change
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :level :controllers "NRR 2-61"] path) value)))

(reg-event-db :NRR-2-61/apply-settings
              (fn [{:keys [kit] :as db} _]
                (assoc-in db [kit :level :controllers "NRR 2-61" :settings-view] false)))

(reg-event-db :NRR-2-61/restore-defaults-settings
              (fn [{:keys [kit] :as db} _]
                (let [default-values (merge defaults/NRR-2-61 {:settings-view true})]
                  (assoc-in db [kit :level :controllers "NRR 2-61"] default-values))))
