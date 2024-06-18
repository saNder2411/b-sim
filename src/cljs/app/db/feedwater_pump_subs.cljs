(ns app.db.feedwater-pump-subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :feedwater-pump-show-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "feedwater-pump")))


