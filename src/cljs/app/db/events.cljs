(ns app.db.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db dispatch]]
            [refx.interceptors :refer [path]]
            [app.db.db :refer [default-db]]
            [app.db.defaults :as defaults]
            [app.ws.socket :as socket]))

(defn update-screen! [width height {:keys [ratio] :as screen}]
  (if (<= (/ width height) ratio)
    (assoc screen :w width :h (/ width ratio) :scale-f (/ width 1920))
    (assoc screen :w (* height ratio) :h height :scale-f (/ (* height ratio) 1920))))

(reg-event-fx :db/initialize
              (fn [_ [_ width height]]
                {:db (assoc default-db :screen (update-screen! width height (:screen default-db)))}))

(reg-event-db :screen/resize
              [(path :screen)]
              (fn [screen [_ width height]]
                (update-screen! width height screen)))

(reg-event-db :ws/connected
              (fn [db [_ value]]
                (assoc-in db [:ws :connected] value)))

(reg-event-db :ws/connect
              (fn [_ _]
                (socket/start!)
                (dispatch [:ws/connected true])))

(reg-event-db :ws/send!
              (fn [db [_ event]]
                (socket/send! event)
                db))

(reg-event-db :kit/change
              (fn [db [_ new-kit]]
                (assoc db :kit new-kit)))

(reg-event-db :sim/change
              (fn [{:keys [kit] :as db} [_ new-value]]
                (js/console.log "change sim" new-value)
                (assoc-in db [kit :sim] new-value)))

(reg-event-db :sim/reset
              (fn [{:keys [kit] :as db} _]
                (js/console.log "reset sim - stop sim and prevent to default all sim modules" "stop")
                (assoc-in db [kit :sim] "stop")))

(reg-event-db :kit-data-by-path/change
              (fn [{:keys [kit] :as db} [_ [path new-value]]]
                (assoc-in db (into [kit] path) new-value)))

(reg-event-db :general-settings/open
              (fn [{:keys [kit] :as db} _]
                (-> db
                    (assoc-in [kit :general-settings :view] true)
                    (assoc-in [kit :hotspots :highlight] false))))

(reg-event-db :steam-value/change
              (fn [{:keys [kit] :as db} [_ value]]
                (let [unit (get-in db [kit :general-settings :steam :unit])
                      converted-value (cond-> value
                                              (= unit "T/h") (* 1.016260162601626))]
                  (assoc-in db [kit :general-settings :steam :value] converted-value))))

(reg-event-db :general-settings/restore-defaults
              (fn [{:keys [kit] :as db} _]
                (let [controller-id (get-in db [kit :system-config :level :controller-id])
                      actuator-type (get-in db [kit :level :controllers controller-id :actuator-type])
                      default-values (merge defaults/GENERAL-SETTINGS {:view true})]
                  (-> db
                      (assoc-in [kit :boiler-plant :actuators :feed actuator-type :flow-rate :unit] "t/h")
                      (assoc-in [kit :general-settings] default-values)))))

(reg-event-db :current-hotspot/change
              (fn [{:keys [kit] :as db} [_ new-value]]
                (let [kit-kw kit]
                  (-> db
                      (assoc-in [kit-kw :hotspots :highlight] false)
                      (assoc-in [kit-kw :hotspots :current] new-value)))))

(reg-event-db :current-low-limiter/change
              (fn [{:keys [kit] :as db} [_ [path new-value]]]
                (let [id (get-in db [kit :system-config :low-limiter :controller-id])]
                  (assoc-in db (into [kit :low-limiter :controllers id] path) new-value))))

(reg-event-db :current-high-limiter/change
              (fn [{:keys [kit] :as db} [_ [path new-value]]]
                (let [id (get-in db [kit :system-config :high-limiter :controller-id])]
                  (assoc-in db (into [kit :high-limiter :controllers id] path) new-value))))

(reg-event-db :current-cond-controller/change
              (fn [{:keys [kit] :as db} [_ [path new-value]]]
                (let [id (get-in db [kit :system-config :cond :controller-id])]
                  (assoc-in db (into [kit :cond :controllers id] path) new-value))))

(reg-event-db :current-level-controller/change
              (fn [{:keys [kit] :as db} [_ [path new-value]]]
                (let [id (get-in db [kit :system-config :level :controller-id])]
                  (assoc-in db (into [kit :level :controllers id] path) new-value))))

(reg-event-db :current-feed-actuator/change
              (fn [{:keys [kit] :as db} [_ [path new-value]]]
                (let [controller-id (get-in db [kit :system-config :level :controller-id])
                      actuator-type (get-in db [kit :level :controllers controller-id :actuator-type])]
                  (assoc-in db (into [kit :boiler-plant :actuators :feed actuator-type] path) new-value))))

(reg-event-db :current-level-probe/change
              (fn [{:keys [kit] :as db} [_ [path new-value]]]
                (let [id (get-in db [kit :system-config :level :probe-ids 0])]
                  (assoc-in db (into [kit :level :probes 0 id] path) new-value))))

(reg-event-db :current-converter/change
              (fn [{:keys [kit] :as db} [_ [path new-value]]]
                (let [id (get-in db [kit :system-config :converter :controller-id])]
                  (assoc-in db (into [kit :converter :controllers id] path) new-value))))

(reg-event-db :modal-info/change
              (fn [{:keys [kit] :as db} [_ new-value]]
                (assoc-in db [kit :modal-info] new-value)))

(reg-event-db :notifications/push
              (fn [{:keys [kit] :as db} [_ {:keys [id] :as notification}]]
                (assoc-in db [kit :notifications id] notification)))

(reg-event-db :notifications/delete
              (fn [{:keys [kit] :as db} [_ id]]
                (update-in db [kit :notifications] dissoc id)))

