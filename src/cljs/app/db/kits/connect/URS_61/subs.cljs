(ns app.db.kits.connect.URS-61.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :URS-61-show-toolbar
         :<- [:current-hotspot]
         :<- [:high-limiter-id]
         (fn [[current-hotspot id] _]
           (and (= current-hotspot "limiter-high-level") (= id "URS 61"))))


