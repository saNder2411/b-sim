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

(reg-event-db :change-lang
              (fn [{:keys [kit] :as db} [_ new-lang]]
                (assoc-in db [(keyword kit) :lang] new-lang)))

(reg-event-db :change-operation-mode
              (fn [{:keys [kit] :as db} [_ new-value]]
                (assoc-in db [(keyword kit) :operation-mode] new-value)))

(reg-event-db :set-ctrl-panel-view
              (fn [{:keys [kit] :as db} [_ new-value]]
                (assoc-in db [(keyword kit) :ctrl-panel-view] new-value)))

(reg-event-db :set-settings-modal-view
              (fn [{:keys [kit] :as db} [_ new-value]]
                (assoc-in db [(keyword kit) :settings-modal-view] new-value)))

(reg-event-db :set-highlight-hotspots
              (fn [{:keys [kit] :as db} [_ new-value]]
                (assoc-in db [(keyword kit) :highlight-hotspots] new-value)))

(reg-event-db :open-general-settings
              (fn [{:keys [kit] :as db} [_ _]]
                (js/console.log "open gen settings" kit)
                (-> db
                    (assoc-in [(keyword kit) :show-general-settings] true)
                    (assoc-in [(keyword kit) :highlight-hotspots] false))))

(reg-event-db :reset-sim
              (fn [db [_ _]]
                (js/console.log "reset sim - stop sim and prevent to default all sim modules" "stopped")
                (assoc db :sim "stopped")))

(reg-event-db :change-sim
              (fn [db [_ new-value]]
                (js/console.log "change sim" new-value)
                (assoc db :sim new-value)))

(reg-event-db :change-current-hotspot
              (fn [{:keys [kit] :as db} [_ new-value]]
                (assoc-in db [(keyword kit) :current-hotspot] new-value)))

