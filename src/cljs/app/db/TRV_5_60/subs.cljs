(ns app.db.TRV-5-60.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :TRV-5-60-show-toolbar
         :<- [:current-hotspot]
         :<- [:temperature-probe-id]
         (fn [[current-hotspot temperature-probe-id] _]
           (and (= current-hotspot "temperature-probe") (= temperature-probe-id "TRV 5-60"))))


