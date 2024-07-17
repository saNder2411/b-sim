(ns app.db.kits.connect.LRG-16-60.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-LRG-16-60
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :cond :probes 0 "LRG 16-60"] path) value)))

(reg-event-db :apply-LRG-16-60-settings
              (fn [{:keys [kit] :as db} _]
                (assoc-in db [kit :cond :probes 0 "LRG 16-60" :settings-view] false)))

(reg-event-db :restore-defaults-LRG-16-60-settings
              (fn [{:keys [kit] :as db} _]
                (let [default-values (merge defaults/LRG-16-60 {:settings-view true})]
                  (assoc-in db [kit :cond :probes 0 "LRG 16-60"] default-values))))
