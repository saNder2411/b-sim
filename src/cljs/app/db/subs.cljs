(ns app.db.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :screen
         (fn [db _]
           (:screen db)))

(reg-sub :screen-w
         :<- [:screen]
         (fn [screen _]
           (:w screen)))

(reg-sub :screen-h
         :<- [:screen]
         (fn [screen _]
           (:h screen)))

(reg-sub :screen-scale-f
         :<- [:screen]
         (fn [screen _]
           (:scale-f screen)))

(reg-sub :user
         (fn [db _]
           (:user db)))

(reg-sub :user-full-name
         :<- [:user]
         (fn [{:keys [firstname lastname]} _]
           (str firstname " " lastname)))

(reg-sub :kit
         (fn [db _]
           (:kit db)))

(reg-sub :sim
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :sim])))

(reg-sub :kit-data-by-path
         (fn [{:keys [kit] :as db} [_ path]]
           (get-in db (into [kit] path))))

(reg-sub :show-settings-form-sim-start-values
         (fn [{:keys [kit] :as db} _]
           (let [sim (get-in db [kit :sim])
                 intended-use (get-in db [kit :general-settings :intended-use])]
             (and (= sim "stopped") (not= intended-use "demonstration")))))

(reg-sub :highlight-hotspots
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :hotspots :highlight])))

(reg-sub :current-hotspot
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :hotspots :current])))

(reg-sub :steam-value
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :general-settings :steam :value])))

(reg-sub :steam-max-value
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :general-settings :steam :max-value])))

(reg-sub :steam-%
         :<- [:steam-value]
         :<- [:steam-max-value]
         (fn [[value max-value] _]
           (let [value (* 100 (/ value max-value))]
             (if (< value 0) 0 value))))

(reg-sub :modal-info
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :modal-info])))

(reg-sub :modal-info-show
         :<- [:modal-info]
         (fn [{:keys [title text]} _]
           (or (not (empty? title)) (not (empty? text)))))

(reg-sub :notifications
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :notifications])))

(reg-sub :low-limiter-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :system-config :low-limiter :controller-id])))

(reg-sub :current-low-limiter-data-by-path
         (fn [{:keys [kit] :as db} [_ path]]
           (let [controller-id (get-in db [kit :system-config :low-limiter :controller-id])
                 controller (get-in db [kit :low-limiter :controllers controller-id])]
             (get-in controller path))))

(reg-sub :low-level-prop-I-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :system-config :low-limiter :probe-ids 0])))

(reg-sub :low-level-prop-II-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :system-config :low-limiter :probe-ids 1])))

(reg-sub :high-limiter-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :system-config :high-limiter :controller-id])))

(reg-sub :current-high-limiter-data-by-path
         (fn [{:keys [kit] :as db} [_ path]]
           (let [controller-id (get-in db [kit :system-config :high-limiter :controller-id])
                 controller (get-in db [kit :high-limiter :controllers controller-id])]
             (get-in controller path))))

(reg-sub :high-level-probe-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :system-config :high-limiter :probe-ids 0])))

(reg-sub :cond-controller-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :system-config :cond :controller-id])))

(reg-sub :current-cond-controller-data-by-path
         (fn [{:keys [kit] :as db} [_ path]]
           (let [controller-id (get-in db [kit :system-config :cond :controller-id])
                 controller (get-in db [kit :cond :controllers controller-id])]
             (get-in controller path))))

(reg-sub :cond-probe-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :system-config :cond :probe-ids 0])))

(reg-sub :current-cond-probe-data-by-path
         (fn [{:keys [kit] :as db} [_ path]]
           (let [probe-id (get-in db [kit :system-config :cond :probe-ids 0])
                 probe (get-in db [kit :cond :probes 0 probe-id])]
             (get-in probe path))))

(reg-sub :level-controller-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :system-config :level :controller-id])))

(reg-sub :current-level-controller-data-by-path
         (fn [{:keys [kit] :as db} [_ path]]
           (let [controller-id (get-in db [kit :system-config :level :controller-id])
                 controller (get-in db [kit :level :controllers controller-id])]
             (get-in controller path))))

(reg-sub :current-level-controller-actuator-type
         (fn [{:keys [kit] :as db} _]
           (let [controller-id (get-in db [kit :system-config :level :controller-id])]
             (get-in db [kit :level :controllers controller-id :actuator-type]))))

(reg-sub :level-probe-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :system-config :level :probe-ids 0])))

(reg-sub :current-level-probe-data-by-path
         (fn [{:keys [kit] :as db} [_ path]]
           (let [probe-id (get-in db [kit :system-config :level :probe-ids 0])
                 probe (get-in db [kit :level :probes 0 probe-id])]
             (get-in probe path))))

(reg-sub :temperature-probe-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :system-config :temperature :probe-ids 0])))

(reg-sub :converter-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :system-config :converter :controller-id])))

(reg-sub :current-converter-data-by-path
         (fn [{:keys [kit] :as db} [_ path]]
           (let [controller-id (get-in db [kit :system-config :converter :controller-id])
                 controller (get-in db [kit :converter :controllers controller-id])]
             (get-in controller path))))

(reg-sub :show-low-limiter-hot-spot
         :<- [:low-limiter-id]
         :<- [:sim]
         (fn [[id sim] _]
           (or (not= id "none") (not= sim "run"))))

(reg-sub :show-high-limiter-hot-spot
         :<- [:high-limiter-id]
         :<- [:sim]
         (fn [[id sim] _]
           (or (not= id "none") (not= sim "run"))))

(reg-sub :show-cond-controller-hot-spot
         :<- [:cond-controller-id]
         :<- [:sim]
         (fn [[id sim] _]
           (or (not= id "none") (not= sim "run"))))

(reg-sub :show-level-controller-hot-spot
         :<- [:level-controller-id]
         :<- [:sim]
         (fn [[id sim] _]
           (or (not= id "none") (not= sim "run"))))

(reg-sub :show-converter-hot-spot
         :<- [:level-probe-id]
         (fn [id _]
           (= id "NRGT 26-2")))

(reg-sub :show-feed-valve-hot-spot
         :<- [:current-level-controller-actuator-type]
         (fn [actuator-type _]
           (not= actuator-type :pump)))

(reg-sub :show-feed-pump-hot-spot
         :<- [:current-level-controller-actuator-type]
         (fn [actuator-type _]
           (= actuator-type :pump)))

(reg-sub :show-toolbar
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (not= current-hotspot "none")))

(reg-sub :level-calibration-boiler-view-subs
         :<- [:kit]
         :<- [:level-controller-id]
         (fn [[kit level-controller-id] _]
           (let [controller-id (if (= level-controller-id "none") "NRR 2-60" level-controller-id)]
             (str kit "/" controller-id "/calibration-boiler-view"))))
