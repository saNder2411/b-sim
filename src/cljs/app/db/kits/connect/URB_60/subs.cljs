(ns app.db.kits.connect.URB-60.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :URB-60-show-toolbar
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "urb")))


