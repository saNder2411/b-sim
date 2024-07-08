(ns app.db.NRG-16-60-II.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :NRG-16-60-II-show-toolbar
         :<- [:current-hotspot]
         :<- [:low-level-prop-II-id]
         (fn [[current-hotspot low-level-prop-II-id] _]
           (and (= current-hotspot "level-low-probe-II") (= low-level-prop-II-id "NRG 16-60"))))


