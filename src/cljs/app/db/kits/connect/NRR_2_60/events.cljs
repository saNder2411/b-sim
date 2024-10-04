(ns app.db.kits.connect.NRR-2-60.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :NRR-2-60/change
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :level :controllers "NRR 2-60"] path) value)))

(reg-event-db :NRR-2-60/apply-settings
              (fn [{:keys [kit] :as db} _]
                (assoc-in db [kit :level :controllers "NRR 2-60" :settings-view] false)))

(reg-event-db :NRR-2-60/restore-defaults-settings
              (fn [{:keys [kit] :as db} _]
                (let [default-values (merge defaults/NRR-2-60 {:settings-view true})]
                  (assoc-in db [kit :level :controllers "NRR 2-60"] default-values))))
