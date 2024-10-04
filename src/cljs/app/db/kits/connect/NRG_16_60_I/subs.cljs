(ns app.db.kits.connect.NRG-16-60-I.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :NRG-16-60-I/show-toolbar
         :<- [:hotspots/current]
         :<- [:low-level-prop-I/id]
         (fn [[current-hotspot id] _]
           (and (= current-hotspot "low-level-probe-I") (= id "NRG 16-60"))))


