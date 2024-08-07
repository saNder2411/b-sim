(ns app.db.kits.connect.LRG-16-60.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :LRG-16-60
         (fn [db _]
           (get-in db [:connect :cond :probes 0 "LRG 16-60"])))

(reg-sub :LRG-16-60-show-toolbar
         :<- [:current-hotspot]
         :<- [:cond-probe-id]
         (fn [[current-hotspot id] _]
           (and (= current-hotspot "cond-probe") (= id "LRG 16-60"))))


