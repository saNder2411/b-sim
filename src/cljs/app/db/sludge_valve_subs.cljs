(ns app.db.sludge-valve-subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :sludge-valve-show-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "sludge-valve")))


