(ns app.db.kits.connect.LRG-16-60.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :LRG-16-60
         :<- [:kit/data]
         (fn [{:keys [cond]} _]
           (get-in cond [:probes 0 "LRG 16-60"])))

(reg-sub :LRG-16-60/show-toolbar
         :<- [:hotspots/current]
         :<- [:cond/probe-id]
         (fn [[current-hotspot id] _]
           (and (= current-hotspot "cond-probe") (= id "LRG 16-60"))))


