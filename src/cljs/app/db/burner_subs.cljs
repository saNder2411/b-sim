(ns app.db.burner-subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :burner
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :burner])))

(reg-sub :burner-status
         :<- [:burner]
         (fn [burner _]
           (:status burner)))

(reg-sub :burner-init-settings
         :<- [:burner]
         (fn [boiler _]
           (:init-settings boiler)))

(reg-sub :show-burner-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "burner")))


