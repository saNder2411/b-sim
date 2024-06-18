(ns app.db.NRG-26-60-subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :NRG-26-60-show-toolbar
         :<- [:current-hotspot]
         :<- [:level-probe-id]
         (fn [[current-hotspot level-probe-id] _]
           (and (= current-hotspot "level-probe") (= level-probe-id "NRG 26-60"))))


