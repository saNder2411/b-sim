(ns app.db.LRR-1-60.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :LRR-1-60-show-toolbar
         :<- [:current-hotspot]
         :<- [:cond-controller-id]
         (fn [[current-hotspot cond-controller-id] _]
           (and (= current-hotspot "cond-controller") (= cond-controller-id "LRR 1-60"))))


