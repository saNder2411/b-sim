(ns app.db.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [refx.interceptors :refer [path]]
            [app.db.db :refer [default-db]]))

(defn update-screen! [width height {:keys [ratio] :as screen}]
  (if (<= (/ width height) ratio)
    (assoc screen :w width :h (/ width ratio) :scale-f (/ width 1920))
    (assoc screen :w (* height ratio) :h height :scale-f (/ (* height ratio) 1920))))

(reg-event-fx :initialize-db
              (fn [_ [_ width height]]
                {:db (assoc default-db :screen (update-screen! width height (:screen default-db)))}))

(reg-event-db :window-resize
              [(path :screen)]
              (fn [screen [_ width height]]
                (update-screen! width height screen)))

(reg-event-db :change-kit
              (fn [db [_ new-kit]]
                (assoc db :kit new-kit)))

(reg-event-db :change-sim
              (fn [{:keys [kit] :as db} [_ new-value]]
                (js/console.log "change sim" new-value)
                (assoc-in db [kit :sim] new-value)))

(reg-event-db :reset-sim
              (fn [{:keys [kit] :as db} _]
                (js/console.log "reset sim - stop sim and prevent to default all sim modules" "stopped")
                (assoc-in db [kit :sim] "stopped")))

(reg-event-db :change-kit-data-by-path
              (fn [{:keys [kit] :as db} [_ [path new-value]]]
                (assoc-in db (into [kit] path) new-value)))

(reg-event-db :open-general-settings
              (fn [{:keys [kit] :as db} _]
                (-> db
                    (assoc-in [kit :general-settings :view] true)
                    (assoc-in [kit :hotspots :highlight] false))))

(reg-event-db :change-current-hotspot
              (fn [{:keys [kit] :as db} [_ new-value]]
                (let [kit-kw kit]
                  (-> db
                      (assoc-in [kit-kw :hotspots :highlight] false)
                      (assoc-in [kit-kw :hotspots :current] new-value)))))

(reg-event-db :change-current-low-limiter
              (fn [{:keys [kit] :as db} [_ [path new-value]]]
                (let [id (get-in db [kit :system-config :low-limiter :controller-id])]
                  (assoc-in db (into [kit :low-limiter :controllers id] path) new-value))))

(reg-event-db :change-current-high-limiter
              (fn [{:keys [kit] :as db} [_ [path new-value]]]
                (let [id (get-in db [kit :system-config :high-limiter :controller-id])]
                  (assoc-in db (into [kit :high-limiter :controllers id] path) new-value))))

(reg-event-db :change-current-cond-controller
              (fn [{:keys [kit] :as db} [_ [path new-value]]]
                (let [id (get-in db [kit :system-config :cond :controller-id])]
                  (assoc-in db (into [kit :cond :controllers id] path) new-value))))

(reg-event-db :change-current-level-controller
              (fn [{:keys [kit] :as db} [_ [path new-value]]]
                (let [id (get-in db [kit :system-config :level :controller-id])]
                  (assoc-in db (into [kit :level :controllers id] path) new-value))))

(reg-event-db :change-current-level-probe
              (fn [{:keys [kit] :as db} [_ [path new-value]]]
                (let [id (get-in db [kit :system-config :level :probe-ids 0])]
                  (assoc-in db (into [kit :level :probes 0 id] path) new-value))))

(reg-event-db :change-current-converter
              (fn [{:keys [kit] :as db} [_ [path new-value]]]
                (let [id (get-in db [kit :system-config :converter :controller-id])]
                  (assoc-in db (into [kit :converter :controllers id] path) new-value))))

(reg-event-db :change-modal-info
              (fn [{:keys [kit] :as db} [_ new-value]]
                (assoc-in db [kit :modal-info] new-value)))

(reg-event-db :push-notification
              (fn [{:keys [kit] :as db} [_ {:keys [id] :as notification}]]
                (assoc-in db [kit :notifications id] notification)))

(reg-event-db :delete-notification
              (fn [{:keys [kit] :as db} [_ id]]
                (update-in db [kit :notifications] dissoc id)))

