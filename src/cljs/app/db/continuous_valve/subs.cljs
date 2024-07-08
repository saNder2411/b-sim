(ns app.db.continuous-valve.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :continuous-valve-show-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "continuous-valve")))


