(ns app.db.sludge-valve-subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :show-sludge-valve-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "sludge-valve")))


