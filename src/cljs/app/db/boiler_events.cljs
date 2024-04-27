(ns app.db.boiler-events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [refx.interceptors :refer [path]]))

(reg-event-db :change-water-level
              [(path :boiler)]
              (fn [boiler [_ value]]
                (assoc boiler :water-level value)))
