(ns app.db.kits.connect.URS-61.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]))

(reg-event-db :change-URS-61
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :high-limiter :controllers "URS 61"] path) value)))
