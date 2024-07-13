(ns app.db.feedwater-pump.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-feedwater-pump
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [(keyword kit) :feedwater-pump] path) value)))

(reg-event-db :change-feedwater-pump-flow-rate-max-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :feedwater-pump :flow-rate :unit])
                      converted-value (cond-> value
                                              (= unit "T/h") (* 1.016260162601626))]
                  (assoc-in db [kit-kw :feedwater-pump :flow-rate :max-value] converted-value))))

(reg-event-db :apply-feedwater-pump-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      {:keys [performance]} (get-in db [kit-kw :feedwater-pump :init-sim-output])]
                  (-> db
                      (update-in [kit-kw :feedwater-pump :performance] merge performance)
                      (assoc-in [kit-kw :feedwater-pump :settings-view] false)))))

(reg-event-db :restore-defaults-feedwater-pump-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      default-values (merge defaults/FEEDWATER-PUMP {:settings-view true})]
                  (assoc-in db [kit-kw :feedwater-pump] default-values))))
