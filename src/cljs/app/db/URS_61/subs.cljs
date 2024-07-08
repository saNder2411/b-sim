(ns app.db.URS-61.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :URS-61-show-toolbar
         :<- [:current-hotspot]
         :<- [:limiter-high-level-id]
         (fn [[current-hotspot limiter-high-level-id] _]
           (and (= current-hotspot "limiter-high-level") (= limiter-high-level-id "URS 61"))))


