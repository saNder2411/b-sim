(ns app.db.kits.connect.TRV-5-60.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :TRV-5-60-show-toolbar
         :<- [:current-hotspot]
         :<- [:temperature-probe-id]
         (fn [[current-hotspot id] _]
           (and (= current-hotspot "temperature-probe") (= id "TRV 5-60"))))


