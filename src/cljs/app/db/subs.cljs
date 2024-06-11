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

(reg-sub :cond-controller-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :cond-controller-id])))

(reg-sub :cond-controller-full-screen
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :cond-controller-full-screen])))

(reg-sub :level-controller-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :level-controller-id])))

(reg-sub :level-controller-full-screen
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :level-controller-full-screen])))

(reg-sub :level-controller-actuator-type
         (fn [{:keys [kit] :as db} _]
           (let [level-controller-id (get-in db [(keyword kit) :level-controller-id])]
             (get-in db [(keyword level-controller-id) :actuator-type]))))

(reg-sub :level-probe-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :level-probe-id])))

(reg-sub :level-probe-full-screen
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :level-probe-full-screen])))

(reg-sub :converter-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :converter-id])))

(reg-sub :converter-full-screen
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :converter-full-screen])))

(reg-sub :show-burner-limiter-hot-spot
         :<- [:burner-limiter-id]
         :<- [:sim]
         (fn [[burner-limiter-id sim] _]
           (or (not= burner-limiter-id "none") (not= sim "run"))))

(reg-sub :show-pump-limiter-hot-spot
         :<- [:pump-limiter-id]
         :<- [:sim]
         (fn [[pump-limiter-id sim] _]
           (or (not= pump-limiter-id "none") (not= sim "run"))))

(reg-sub :show-cond-controller-hot-spot
         :<- [:cond-controller-id]
         :<- [:sim]
         (fn [[cond-controller-id sim] _]
           (or (not= cond-controller-id "none") (not= sim "run"))))

(reg-sub :show-level-controller-hot-spot
         :<- [:level-controller-id]
         :<- [:sim]
         (fn [[level-controller-id sim] _]
           (or (not= level-controller-id "none") (not= sim "run"))))

(reg-sub :show-converter-hot-spot
         :<- [:level-probe-id]
         (fn [level-probe-id _]
           (= level-probe-id "NRGT-26-2")))

(reg-sub :show-feedwater-valve-hot-spot
         :<- [:level-controller-actuator-type]
         (fn [level-controller-actuator-type _]
           (not= level-controller-actuator-type "FREQUENCY_CONTROLLED_PUMPS")))

(reg-sub :show-feedwater-pump-hot-spot
         :<- [:level-controller-actuator-type]
         (fn [level-controller-actuator-type _]
           (= level-controller-actuator-type "FREQUENCY_CONTROLLED_PUMPS")))

(reg-sub :show-toolbar
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (not= current-hotspot "none")))


