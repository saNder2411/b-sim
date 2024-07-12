(ns app.db.continuous-valve.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-continuous-valve
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [(keyword kit) :continuous-valve] path) value)))


(reg-event-db :change-continuous-valve-flow-rate-max-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :continuous-valve :flow-rate :unit])
                      converted-value (cond-> value
                                              (= unit "T/h") (* 1.016260162601626))]
                  (assoc-in db [kit-kw :continuous-valve :flow-rate :max-value] converted-value))))


(reg-event-db :apply-continuous-valve-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      {:keys [damper transition]} (get-in db [kit-kw :continuous-valve :init-sim-output])]
                  (-> db
                      (update-in [kit-kw :continuous-valve :damper] merge damper)
                      (update-in [kit-kw :continuous-valve :transition] merge transition)
                      (assoc-in [kit-kw :continuous-valve :settings-view] false)))))

(reg-event-db :restore-defaults-continuous-valve-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      default-values (merge defaults/CONTINUOUS-VALVE {:settings-view true})]
                  (assoc-in db [kit-kw :continuous-valve] default-values))))
