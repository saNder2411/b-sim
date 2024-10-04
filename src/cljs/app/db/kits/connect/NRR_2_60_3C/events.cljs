(ns app.db.kits.connect.NRR-2-60-3C.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :NRR-2-60-3C/change
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :level :controllers "NRR 2-60 3C"] path) value)))

(reg-event-db :NRR-2-60-3C/apply-settings
              (fn [{:keys [kit] :as db} _]
                (assoc-in db [kit :level :controllers "NRR 2-60 3C" :settings-view] false)))

(reg-event-db :NRR-2-60-3C/restore-defaults-settings
              (fn [{:keys [kit] :as db} _]
                (let [default-values (merge defaults/NRR-2-60-3C {:settings-view true})]
                  (assoc-in db [kit :level :controllers "NRR 2-60 3C"] default-values))))
