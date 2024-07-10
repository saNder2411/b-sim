(ns app.db.burner.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-burner
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [(keyword kit) :burner] path) value)))

(reg-event-db :change-burner-pressure-value
              (fn [{:keys [kit] :as db} [_ [v-key value]]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :burner :pressure :unit])
                      converted-value (cond-> value
                                              (= unit "psi") (* 0.06894744825494))]
                  (assoc-in db [kit-kw :burner :pressure :value v-key] converted-value))))

(reg-event-db :change-burner-power-max-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :burner :power :unit])
                      converted-value (cond-> value
                                              (= unit "MW") (* 1000))]
                  (assoc-in db [kit-kw :burner :power :max-value] converted-value))))

(reg-event-db :change-burner-fuel-consumption-coeff-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :burner :fuel-consumption :coeff :unit])
                      converted-value (cond-> value
                                              (= unit "nm³/kW*s") (* 0.00027777777))]
                  (assoc-in db [kit-kw :burner :fuel-consumption :coeff :value] converted-value))))


(reg-event-db :apply-burner-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      {:keys [status]} (get-in db [kit-kw :burner :init-sim-output])]

                  (-> db
                      (update-in [kit-kw :burner :status] merge status)
                      (assoc-in [kit-kw :burner :settings-view] false)))))

(reg-event-db :restore-defaults-burner-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      default-values (merge defaults/BURNER {:settings-view true})]

                  (assoc-in db [kit-kw :burner] default-values))))
