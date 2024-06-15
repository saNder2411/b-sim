(ns app.db.feedwater-pump-subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :show-feedwater-pump-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "feedwater-pump")))


