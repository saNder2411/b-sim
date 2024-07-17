(ns app.db.kits.connect.LRR-1-60.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :LRR-1-60-show-toolbar
         :<- [:current-hotspot]
         :<- [:cond-controller-id]
         (fn [[current-hotspot id] _]
           (and (= current-hotspot "cond-controller") (= id "LRR 1-60"))))


