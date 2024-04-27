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
              (fn [db [_ new-lang]]
                (assoc db :lang new-lang)))

(reg-event-db :change-operation-mode
              (fn [db [_ new-value]]
                (assoc db :operation-mode new-value)))

(reg-event-db :set-show-ctrl-panel
              (fn [db [_ new-value]]
                (assoc db :show-ctrl-panel new-value)))

(reg-event-db :set-show-general-settings
              (fn [db [_ new-value]]
                (assoc db :show-general-settings new-value)))

(reg-event-db :set-highlight-hotspots
              (fn [db [_ new-value]]
                (assoc db :highlight-hotspots new-value)))

(reg-event-db :open-general-settings
              (fn [db [_ _]]
                (js/console.log "open gen settings" db)
                (assoc db :show-general-settings true :highlight-hotspots false)))

(reg-event-db :reset-sim
              (fn [db [_ _]]
                (js/console.log "reset sim - stop sim and prevent to default all sim modules" db)
                (assoc db :sim "stopped")))

(reg-event-db :change-sim
              (fn [db [_ new-value]]
                (js/console.log "change sim" new-value)
                (assoc db :sim new-value)))

(reg-event-db :change-current-hotspot
              (fn [db [_ new-value]]
                (assoc db :current-hotspot new-value)))
