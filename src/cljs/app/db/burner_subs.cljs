(ns app.db.burner-subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :burner
         (fn [db _]
           (:burner db)))

(reg-sub :burner-status
         :<- [:burner]
         (fn [burner _]
           (:status burner)))

(reg-sub :burner-init-settings
         :<- [:burner]
         (fn [boiler _]
           (:init-settings boiler)))


