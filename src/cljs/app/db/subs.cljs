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
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :sim])))

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

(reg-sub :modal-info
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :modal-info])))

(reg-sub :modal-info-show
         :<- [:modal-info]
         (fn [{:keys [title text]} _]
           (or (not (empty? title)) (not (empty? text)))))

(reg-sub :limiter-low-level-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :limiter-low-level-id])))

(reg-sub :limiter-low-level-full-screen
         (fn [{:keys [kit] :as db} _]
           (let [kit-kw (keyword kit)
                 limiter-low-level-id (get-in db [kit-kw :limiter-low-level-id])]
             (get-in db [kit-kw :limiter-low-level :controllers limiter-low-level-id :full-screen]))))

(reg-sub :low-level-prop-I-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :low-level-prop-I-id])))

(reg-sub :low-level-prop-II-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :low-level-prop-II-id])))

(reg-sub :limiter-high-level-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :limiter-high-level-id])))

(reg-sub :limiter-high-level-full-screen
         (fn [{:keys [kit] :as db} _]
           (let [kit-kw (keyword kit)
                 limiter-high-level-id (get-in db [kit-kw :limiter-high-level-id])]
             (get-in db [kit-kw :limiter-high-level :controllers limiter-high-level-id :full-screen]))))

(reg-sub :high-level-probe-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :high-level-probe-id])))

(reg-sub :temperature-probe-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :temperature-probe-id])))

(reg-sub :cond-controller-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :cond-controller-id])))

(reg-sub :cond-controller-full-screen
         (fn [{:keys [kit] :as db} _]
           (let [kit-kw (keyword kit)
                 cond-controller-id (get-in db [kit-kw :cond-controller-id])]
             (get-in db [kit-kw :cond :controllers cond-controller-id :full-screen]))))

(reg-sub :cond-probe-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :cond-probe-id])))

(reg-sub :cond-probe-full-screen
         (fn [{:keys [kit] :as db} _]
           (let [kit-kw (keyword kit)
                 cond-probe-id (get-in db [kit-kw :cond-probe-id])]
             (get-in db [kit-kw :cond :probes 0 cond-probe-id :full-screen]))))

(reg-sub :level-controller-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :level-controller-id])))

(reg-sub :level-controller-full-screen
         (fn [{:keys [kit] :as db} _]
           (let [kit-kw (keyword kit)
                 level-controller-id (get-in db [kit-kw :level-controller-id])]
             (get-in db [kit-kw :level :controllers level-controller-id :full-screen]))))

(reg-sub :level-controller-actuator-type
         (fn [{:keys [kit] :as db} _]
           (let [kit-kw (keyword kit)
                 level-controller-id (get-in db [kit-kw :level-controller-id])]
             (get-in db [kit-kw :level :controllers level-controller-id :actuator-type]))))

(reg-sub :level-probe-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :level-probe-id])))

(reg-sub :level-probe-full-screen
         (fn [{:keys [kit] :as db} _]
           (let [kit-kw (keyword kit)
                 level-probe-id (get-in db [kit-kw :level-probe-id])]
             (get-in db [kit-kw :level :probes 0 level-probe-id :full-screen]))))

(reg-sub :converter-id
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :converter-id])))

(reg-sub :converter-full-screen
         (fn [{:keys [kit] :as db} _]
           (let [kit-kw (keyword kit)
                 converter-id (get-in db [kit-kw :converter-id])]
             (get-in db [kit-kw :converter :controllers converter-id :full-screen]))))

(reg-sub :show-limiter-low-level-hot-spot
         :<- [:limiter-low-level-id]
         :<- [:sim]
         (fn [[limiter-low-level-id sim] _]
           (or (not= limiter-low-level-id "none") (not= sim "run"))))

(reg-sub :show-limiter-high-level-hot-spot
         :<- [:limiter-high-level-id]
         :<- [:sim]
         (fn [[limiter-high-level-id sim] _]
           (or (not= limiter-high-level-id "none") (not= sim "run"))))

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
           (= level-probe-id "NRGT 26-2")))

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


