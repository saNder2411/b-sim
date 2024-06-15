(ns app.db.feedwater-valve-subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :show-feedwater-valve-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "feedwater-valve")))


