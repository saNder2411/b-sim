(ns app.db.boiler-events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]))

(reg-event-db :change-boiler-water-level
              (fn [{:keys [kit] :as db} [_ value]]
                (assoc-in db [(keyword kit) :boiler :water-level] value)))

(reg-event-db :change-boiler-settings
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [(keyword kit) :boiler :settings] path) value)))

(reg-event-db :change-boiler-settings-form
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [(keyword kit) :boiler :settings-form] path) value)))

(reg-event-db :change-boiler-settings-form-pressure-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :boiler :settings-form :pressure :unit])
                      converted-value (cond-> value
                                              (= unit "psi") (-> (* 0.06894744825494)))]
                  (assoc-in db [kit-kw :boiler :settings-form :pressure :value] converted-value))))

(reg-event-db :change-boiler-settings-form-conductivity-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :boiler :settings-form :conductivity :unit])
                      converted-value (cond-> value
                                              (= unit "ppm") (-> (* 2)))]
                  (assoc-in db [kit-kw :boiler :settings-form :conductivity :value] converted-value))))
