(ns app.db.NRG-16-61-subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :NRG-16-61-show-toolbar
         :<- [:current-hotspot]
         :<- [:high-level-probe-id]
         (fn [[current-hotspot high-level-probe-id] _]
           (and (= current-hotspot "level-high-probe") (= high-level-probe-id "NRG 16-61"))))


