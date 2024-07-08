(ns app.db.burner.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-burner-settings
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [(keyword kit) :burner :settings] path) value)))

(reg-event-db :change-burner-settings-pressure-value
              (fn [{:keys [kit] :as db} [_ [v-key value]]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :burner :settings :pressure :unit])
                      converted-value (cond-> value
                                              (= unit "psi") (-> (* 0.06894744825494)))]
                  (assoc-in db [kit-kw :burner :settings :pressure :value v-key] converted-value))))

(reg-event-db :change-burner-settings-power-max-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :burner :settings :power :max :unit])
                      converted-value (cond-> value
                                              (= unit "MW") (-> (* 1000)))]
                  (assoc-in db [kit-kw :burner :settings :power :max :value] converted-value))))

(reg-event-db :change-burner-settings-fuel-consumption-coeff-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :burner :settings :fuel-consumption :coeff :unit])
                      converted-value (cond-> value
                                              (= unit "nm³/kW*s") (-> (* 0.00027777777)))]
                  (assoc-in db [kit-kw :burner :settings :fuel-consumption :coeff :value] converted-value))))


(reg-event-db :apply-burner-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      {:keys [mode status]} (get-in db [kit-kw :burner :settings])]

                  (-> db
                      (assoc-in [kit-kw :burner :mode] (:value mode))
                      (assoc-in [kit-kw :burner :status] (:value status))
                      (assoc-in [kit-kw :burner :settings :view] false)))))

(reg-event-db :restore-defaults-burner-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      default-settings (-> defaults/BURNER
                                           :settings
                                           (merge {:view true}))]

                  (assoc-in db [kit-kw :burner :settings] default-settings))))
