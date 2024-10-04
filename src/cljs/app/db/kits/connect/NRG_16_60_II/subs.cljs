(ns app.db.kits.connect.NRG-16-60-II.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :NRG-16-60-II/show-toolbar
         :<- [:hotspots/current]
         :<- [:low-level-prop-II/id]
         (fn [[current-hotspot id] _]
           (and (= current-hotspot "low-level-probe-II") (= id "NRG 16-60"))))


