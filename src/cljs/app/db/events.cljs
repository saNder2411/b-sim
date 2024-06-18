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
                (assoc-in db [(keyword kit) :sim] new-value)))

(reg-event-db :reset-sim
              (fn [{:keys [kit] :as db} [_ _]]
                (js/console.log "reset sim - stop sim and prevent to default all sim modules" "stopped")
                (assoc-in db [(keyword kit) :sim] "stopped")))

(reg-event-db :change-lang
              (fn [{:keys [kit] :as db} [_ new-lang]]
                (assoc-in db [(keyword kit) :lang] new-lang)))

(reg-event-db :change-operation-mode
              (fn [{:keys [kit] :as db} [_ new-value]]
                (assoc-in db [(keyword kit) :operation-mode] new-value)))

(reg-event-db :change-ctrl-panel-view
              (fn [{:keys [kit] :as db} [_ new-value]]
                (assoc-in db [(keyword kit) :ctrl-panel-view] new-value)))

(reg-event-db :change-settings-modal-view
              (fn [{:keys [kit] :as db} [_ new-value]]
                (assoc-in db [(keyword kit) :settings-modal-view] new-value)))


(reg-event-db :open-general-settings
              (fn [{:keys [kit] :as db} [_ _]]
                (js/console.log "open gen settings" kit)
                (-> db
                    (assoc-in [(keyword kit) :show-general-settings] true)
                    (assoc-in [(keyword kit) :highlight-hotspots] false))))

(reg-event-db :change-current-hotspot
              (fn [{:keys [kit] :as db} [_ new-value]]
                (let [kit-kw (keyword kit)]
                  (-> db
                      (assoc-in [kit-kw :highlight-hotspots] false)
                      (assoc-in [kit-kw :current-hotspot] new-value)))))

(reg-event-db :change-limiter-low-level-full-screen
              (fn [{:keys [kit] :as db} [_ new-value]]
                (let [kit-kw (keyword kit)
                      limiter-low-level-id (get-in db [kit-kw :limiter-low-level-id])]
                  (assoc-in db [kit-kw :limiter-low-level :controllers limiter-low-level-id :full-screen] new-value))))

(reg-event-db :change-limiter-high-level-full-screen
              (fn [{:keys [kit] :as db} [_ new-value]]
                (let [kit-kw (keyword kit)
                      limiter-high-level-id (get-in db [kit-kw :limiter-high-level-id])]
                  (assoc-in db [kit-kw :limiter-high-level :controllers limiter-high-level-id :full-screen] new-value))))

(reg-event-db :change-cond-controller-full-screen
              (fn [{:keys [kit] :as db} [_ new-value]]
                (let [kit-kw (keyword kit)
                      cond-controller-id (get-in db [kit-kw :cond-controller-id])]
                  (assoc-in db [kit-kw :cond :controllers cond-controller-id :full-screen] new-value))))

(reg-event-db :change-level-controller-full-screen
              (fn [{:keys [kit] :as db} [_ new-value]]
                (let [kit-kw (keyword kit)
                      level-controller-id (get-in db [kit-kw :level-controller-id])]
                  (assoc-in db [kit-kw :level :controllers level-controller-id :full-screen] new-value))))

(reg-event-db :change-level-probe-full-screen
              (fn [{:keys [kit] :as db} [_ new-value]]
                (let [kit-kw (keyword kit)
                      level-probe-id (get-in db [kit-kw :level-probe-id])]
                  (assoc-in db [kit-kw :level :controllers level-probe-id :full-screen] new-value))))

(reg-event-db :change-converter-full-screen
              (fn [{:keys [kit] :as db} [_ new-value]]
                (let [kit-kw (keyword kit)
                      converter-id (get-in db [kit-kw :converter-id])]
                  (assoc-in db [kit-kw :converter :controllers converter-id :full-screen] new-value))))

(reg-event-db :change-modal-info
              (fn [{:keys [kit] :as db} [_ new-value]]
                (assoc-in db [(keyword kit) :modal-info] new-value)))

