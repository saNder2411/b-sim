(ns app.db.feedwater-valve.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-feedwater-valve
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [(keyword kit) :feedwater-valve] path) value)))

(reg-event-db :change-feedwater-valve-flow-rate-max-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :feedwater-valve :flow-rate :unit])
                      converted-value (cond-> value
                                              (= unit "T/h") (* 1.016260162601626))]
                  (assoc-in db [kit-kw :feedwater-valve :flow-rate :max-value] converted-value))))

(reg-event-db :apply-feedwater-valve-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      {:keys [damper transition potentiometer]} (get-in db [kit-kw :feedwater-valve :init-sim-output])]
                  (-> db
                      (update-in [kit-kw :feedwater-valve :damper] merge damper)
                      (update-in [kit-kw :feedwater-valve :transition] merge transition)
                      (update-in [kit-kw :feedwater-valve :potentiometer] merge potentiometer)
                      (assoc-in [kit-kw :feedwater-valve :settings-view] false)))))

(reg-event-db :restore-defaults-feedwater-valve-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      default-values (merge defaults/FEEDWATER-VALVE {:settings-view true})]
                  (assoc-in db [kit-kw :feedwater-valve] default-values))))
