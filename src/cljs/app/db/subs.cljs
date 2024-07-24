(ns app.db.subs
  (:require [refx.alpha :refer [reg-sub]]
            [cljs.pprint :refer [cl-format]]))

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

(reg-sub :kit-data
         (fn [{:keys [kit] :as db} _]
           (get db kit)))

(reg-sub :kit-data-by-path
         :<- [:kit-data]
         (fn [kit-data [_ path]]
           (get-in kit-data path)))

(reg-sub :sim
         :<- [:kit-data]
         (fn [{:keys [sim]} _]
           sim))

(reg-sub :modal-info
         :<- [:kit-data]
         (fn [{:keys [modal-info]} _]
           modal-info))

(reg-sub :modal-info-show
         :<- [:modal-info]
         (fn [{:keys [title text]} _]
           (or (not (empty? title)) (not (empty? text)))))

(reg-sub :notifications
         :<- [:kit-data]
         (fn [{:keys [notifications]} _]
           notifications))

(reg-sub :hotspots
         :<- [:kit-data]
         (fn [{:keys [hotspots]} _]
           hotspots))

(reg-sub :highlight-hotspots
         :<- [:hotspots]
         (fn [{:keys [highlight]} _]
           highlight))

(reg-sub :current-hotspot
         :<- [:hotspots]
         (fn [{:keys [current]} _]
           current))

(reg-sub :general-settings
         :<- [:kit-data]
         (fn [{:keys [general-settings]} _]
           general-settings))

(reg-sub :show-settings-form-sim-start-values
         :<- [:sim]
         :<- [:general-settings]
         (fn [[sim general-settings] _]
           (and (= sim "stopped") (not= (:intended-use general-settings) "demonstration"))))

(reg-sub :steam-value
         :<- [:general-settings]
         (fn [{:keys [steam]} _]
           (let [{:keys [unit value]} steam]
             (cond-> value
                     (= unit "T/h") (->> (* 0.984) (cl-format nil "~,2f") js/parseFloat)
                     (= unit "t/h") (->> (cl-format nil "~,2f") js/parseFloat)))))

(reg-sub :steam-max-value
         :<- [:general-settings]
         (fn [{:keys [steam]} _]
           (let [{:keys [unit max-value]} steam]
             (cond-> max-value
                     (= unit "T/h") (->> (* 0.984) (cl-format nil "~,2f") js/parseFloat)
                     (= unit "t/h") (->> (cl-format nil "~,2f") js/parseFloat)))))

(reg-sub :steam-%
         :<- [:steam-value]
         :<- [:steam-max-value]
         (fn [[value max-value] _]
           (let [value (* 100 (/ value max-value))]
             (if (< value 0) 0 value))))

(reg-sub :system-config
         :<- [:kit-data]
         (fn [{:keys [system-config]} _]
           system-config))

(reg-sub :low-limiter-id
         :<- [:system-config]
         (fn [{:keys [low-limiter]} _]
           (:controller-id low-limiter)))

(reg-sub :low-level-prop-I-id
         :<- [:system-config]
         (fn [{:keys [low-limiter]} _]
           (get-in low-limiter [:probe-ids 0])))

(reg-sub :low-level-prop-II-id
         :<- [:system-config]
         (fn [{:keys [low-limiter]} _]
           (get-in low-limiter [:probe-ids 1])))

(reg-sub :high-limiter-id
         :<- [:system-config]
         (fn [{:keys [high-limiter]} _]
           (:controller-id high-limiter)))

(reg-sub :high-level-probe-id
         :<- [:system-config]
         (fn [{:keys [high-limiter]} _]
           (get-in high-limiter [:probe-ids 0])))

(reg-sub :cond-controller-id
         :<- [:system-config]
         (fn [{:keys [cond]} _]
           (:controller-id cond)))

(reg-sub :cond-probe-id
         :<- [:system-config]
         (fn [{:keys [cond]} _]
           (get-in cond [:probe-ids 0])))

(reg-sub :level-controller-id
         :<- [:system-config]
         (fn [{:keys [level]} _]
           (:controller-id level)))

(reg-sub :level-probe-id
         :<- [:system-config]
         (fn [{:keys [level]} _]
           (get-in level [:probe-ids 0])))

(reg-sub :temperature-probe-id
         :<- [:system-config]
         (fn [{:keys [temperature]} _]
           (get-in temperature [:probe-ids 0])))

(reg-sub :converter-controller-id
         :<- [:system-config]
         (fn [{:keys [converter]} _]
           (:controller-id converter)))

(reg-sub :low-limiter-controllers
         :<- [:kit-data]
         (fn [{:keys [low-limiter]} _]
           (:controllers low-limiter)))

(reg-sub :low-limiter-probes
         :<- [:kit-data]
         (fn [{:keys [low-limiter]} _]
           (:probes low-limiter)))

(reg-sub :current-low-limiter-data-by-path
         :<- [:low-limiter-id]
         :<- [:low-limiter-controllers]
         (fn [[id controllers] [_ path]]
           (get-in controllers (into [id] path))))

(reg-sub :high-limiter-controllers
         :<- [:kit-data]
         (fn [{:keys [high-limiter]} _]
           (:controllers high-limiter)))

(reg-sub :high-limiter-probes
         :<- [:kit-data]
         (fn [{:keys [high-limiter]} _]
           (:probes high-limiter)))

(reg-sub :current-high-limiter-data-by-path
         :<- [:high-limiter-id]
         :<- [:high-limiter-controllers]
         (fn [[id controllers] [_ path]]
           (get-in controllers (into [id] path))))

(reg-sub :cond-controllers
         :<- [:kit-data]
         (fn [{:keys [cond]} _]
           (:controllers cond)))

(reg-sub :cond-probes
         :<- [:kit-data]
         (fn [{:keys [cond]} _]
           (:probes cond)))

(reg-sub :current-cond-controller-data-by-path
         :<- [:cond-controller-id]
         :<- [:cond-controllers]
         (fn [[id controllers] [_ path]]
           (get-in controllers (into [id] path))))

(reg-sub :current-cond-probe-data-by-path
         :<- [:cond-probe-id]
         :<- [:cond-probes]
         (fn [[probe-id [probe]] [_ path]]
           (get-in probe (into [probe-id] path))))

(reg-sub :level-controllers
         :<- [:kit-data]
         (fn [{:keys [level]} _]
           (:controllers level)))

(reg-sub :level-probes
         :<- [:kit-data]
         (fn [{:keys [level]} _]
           (:probes level)))

(reg-sub :current-level-controller-data-by-path
         :<- [:level-controller-id]
         :<- [:level-controllers]
         (fn [[id controllers] [_ path]]
           (get-in controllers (into [id] path))))

(reg-sub :current-level-controller-actuator-type
         :<- [:level-controller-id]
         :<- [:level-controllers]
         (fn [[id controllers] _]
           (get-in controllers [id :actuator-type])))

(reg-sub :current-feed-actuator-data-by-path
         :<- [:kit-data]
         :<- [:current-level-controller-actuator-type]
         (fn [[kit-data actuator-type] [_ path]]
           (get-in kit-data (into [:boiler-plant :actuators :feed actuator-type] path))))

(reg-sub :current-level-probe-data-by-path
         :<- [:level-probe-id]
         :<- [:level-probes]
         (fn [[probe-id [probe]] [_ path]]
           (get-in probe (into [probe-id] path))))

(reg-sub :converter-controllers
         :<- [:kit-data]
         (fn [{:keys [converter]} _]
           (:controllers converter)))

(reg-sub :current-converter-data-by-path
         :<- [:converter-controller-id]
         :<- [:converter-controllers]
         (fn [[id controllers] [_ path]]
           (get-in controllers (into [id] path))))

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
