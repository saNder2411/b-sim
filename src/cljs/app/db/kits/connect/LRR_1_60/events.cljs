(ns app.db.kits.connect.LRR-1-60.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]))

(reg-event-db :change-LRR-1-60
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :cond :controllers "LRR 1-60"] path) value)))
