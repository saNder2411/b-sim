(ns app.db.kits.connect.URW-60.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :URW-60-show-toolbar
         :<- [:current-hotspot]
         :<- [:converter-id]
         (fn [[current-hotspot converter-id] _]
           (and (= current-hotspot "converter") (= converter-id "URW 60"))))


