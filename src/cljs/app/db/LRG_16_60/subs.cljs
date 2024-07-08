(ns app.db.LRG-16-60.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :LRG-16-60-show-toolbar
         :<- [:current-hotspot]
         :<- [:cond-probe-id]
         (fn [[current-hotspot cond-probe-id] _]
           (and (= current-hotspot "cond-probe") (= cond-probe-id "LRG 16-60"))))


