(ns app.db.boiler-events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]))

(reg-event-db :change-water-level
              (fn [{:keys [kit] :as db} [_ value]]
                (assoc-in db [(keyword kit) :boiler :water-level] value)))
