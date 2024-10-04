(ns app.db.kits.connect.LRR-1-60.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]))

(reg-event-db :LRR-1-60/change
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :cond :controllers "LRR 1-60"] path) value)))
