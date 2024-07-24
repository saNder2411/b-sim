(ns app.db.kits.connect.URW-60.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]))

(reg-event-db :change-URW-60
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :converter :controllers "URW 60"] path) value)))
