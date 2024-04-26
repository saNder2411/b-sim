(ns app.db.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :kit
         (fn [db _]
           (:kit db)))

(reg-sub :screen-w
         (fn [db _]
           (-> db :screen :w)))

(reg-sub :screen-h
         (fn [db _]
           (-> db :screen :h)))

(reg-sub :screen-scale-f
         (fn [db _]
           (-> db :screen :scale-f)))

(reg-sub :user
         (fn [db _]
           (:user db)))

(reg-sub :user-full-name
         :<- [:user]
         (fn [{:keys [firstname lastname]} _]
           (str firstname " " lastname)))

(reg-sub :sim
         (fn [db _]
           (:sim db)))

(reg-sub :lang
         (fn [db _]
           (:lang db)))

(reg-sub :operation-mode
         (fn [db _]
           (:operation-mode db)))

(reg-sub :show-ctrl-panel
         (fn [db _]
           (:show-ctrl-panel db)))

(reg-sub :show-general-settings
         (fn [db _]
           (:show-general-settings db)))

(reg-sub :highlight-hotspots
         (fn [db _]
           (:highlight-hotspots db)))
