(ns app.db.continuous-valve-subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :show-continuous-valve-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "continuous-valve")))


