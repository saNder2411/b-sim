(ns app.db.NRG-16-60-I.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :NRG-16-60-I-show-toolbar
         :<- [:current-hotspot]
         :<- [:low-level-prop-I-id]
         (fn [[current-hotspot low-level-prop-I-id] _]
           (and (= current-hotspot "level-low-probe-I") (= low-level-prop-I-id "NRG 16-60"))))


