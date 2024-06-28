(ns app.db.burner-subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :burner
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :burner])))

(reg-sub :burner-status
         :<- [:burner]
         (fn [burner _]
           (:status burner)))

(reg-sub :burner-settings
         :<- [:burner]
         (fn [burner _]
           (:settings burner)))

(reg-sub :burner-settings-view
         :<- [:burner-settings]
         (fn [settings _]
           (:view settings)))

(reg-sub :burner-show-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "burner")))


