(ns app.db.kits.connect.URS-60.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]))

(reg-event-db :URS-60/change
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :low-limiter :controllers "URS 60"] path) value)))
