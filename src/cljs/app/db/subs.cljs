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
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :lang])))

(reg-sub :operation-mode
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :operation-mode])))

(reg-sub :ctrl-panel-view
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :ctrl-panel-view])))

(reg-sub :settings-modal-view
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :settings-modal-view])))

(reg-sub :highlight-hotspots
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :highlight-hotspots])))

(reg-sub :current-hotspot
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :current-hotspot])))

(reg-sub :steam
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :steam])))

(reg-sub :steam-max
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :steam-max])))

(reg-sub :steam-%
         :<- [:steam]
         :<- [:steam-max]
         (fn [[steam steam-max] _]
           (let [value (* 100 (/ steam steam-max))]
             (if (< value 0) 0 value))))

(reg-sub :burner-limiter-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :burner-limiter-id])))

(reg-sub :burner-limiter-full-screen
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :burner-limiter-full-screen])))

(reg-sub :pump-limiter-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :pump-limiter-id])))

(reg-sub :pump-limiter-full-screen
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :pump-limiter-full-screen])))
