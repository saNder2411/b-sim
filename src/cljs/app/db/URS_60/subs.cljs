(ns app.db.URS-60.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :URS-60-show-toolbar
         :<- [:current-hotspot]
         :<- [:limiter-low-level-id]
         (fn [[current-hotspot limiter-low-level-id] _]
           (and (= current-hotspot "limiter-low-level") (= limiter-low-level-id "URS 60"))))


