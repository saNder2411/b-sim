(ns app.db.kits.connect.URS-60.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :URS-60-show-toolbar
         :<- [:current-hotspot]
         :<- [:low-limiter-id]
         (fn [[current-hotspot id] _]
           (and (= current-hotspot "low-limiter") (= id "URS 60"))))


