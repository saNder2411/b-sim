(ns app.db.feedwater-valve-pn.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-feedwater-valve-pn
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [(keyword kit) :feedwater-valve-pn] path) value)))

(reg-event-db :change-feedwater-valve-pn-flow-rate-max-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :feedwater-valve-pn :flow-rate :unit])
                      converted-value (cond-> value
                                              (= unit "T/h") (* 1.016260162601626))]
                  (assoc-in db [kit-kw :feedwater-valve-pn :flow-rate :max-value] converted-value))))

(reg-event-db :apply-feedwater-valve-pn-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      {:keys [damper]} (get-in db [kit-kw :feedwater-valve-pn :init-sim-output])]
                  (-> db
                      (update-in [kit-kw :feedwater-valve-pn :damper] merge damper)
                      (assoc-in [kit-kw :feedwater-valve-pn :settings-view] false)))))

(reg-event-db :restore-defaults-feedwater-valve-pn-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      default-values (merge defaults/FEEDWATER-VALVE-PNEUMATIC {:settings-view true})]
                  (assoc-in db [kit-kw :feedwater-valve-pn] default-values))))
