(ns app.db.kits.connect.NRGT-26-2.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :NRGT-26-2/show-toolbar
         :<- [:hotspots/current]
         :<- [:level/probe-id]
         (fn [[current-hotspot level-probe-id] _]
           (and (= current-hotspot "level-probe") (= level-probe-id "NRGT 26-2"))))


