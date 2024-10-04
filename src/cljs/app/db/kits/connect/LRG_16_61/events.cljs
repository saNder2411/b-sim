(ns app.db.kits.connect.LRG-16-61.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :LRG-16-61/change
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :cond :probes 0 "LRG 16-61"] path) value)))

(reg-event-db :LRG-16-61/apply-settings
              (fn [{:keys [kit] :as db} _]
                (assoc-in db [kit :cond :probes 0 "LRG 16-61" :settings-view] false)))

(reg-event-db :LRG-16-61/restore-defaults-settings
              (fn [{:keys [kit] :as db} _]
                (let [
                      default-values (merge defaults/LRG-16-61 {:settings-view true})]
                  (assoc-in db [kit :cond :probes 0 "LRG 16-61"] default-values))))
