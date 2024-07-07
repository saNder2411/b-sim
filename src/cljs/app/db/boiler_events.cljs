(ns app.db.boiler-events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-boiler-water-level
              (fn [{:keys [kit] :as db} [_ value]]
                (assoc-in db [(keyword kit) :boiler :water-level] value)))

(reg-event-db :change-boiler-settings
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [(keyword kit) :boiler :settings] path) value)))

(reg-event-db :change-boiler-settings-pressure-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :boiler :settings :pressure :unit])
                      converted-value (cond-> value
                                              (= unit "psi") (-> (* 0.06894744825494)))]
                  (assoc-in db [kit-kw :boiler :settings :pressure :value] converted-value))))

(reg-event-db :change-boiler-settings-conductivity-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :boiler :settings :conductivity :unit])
                      converted-value (cond-> value
                                              (= unit "ppm") (-> (* 2)))]
                  (assoc-in db [kit-kw :boiler :settings :conductivity :value] converted-value))))

(reg-event-db :apply-boiler-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      {:keys [water-level pressure conductivity temperature sludge-mass]} (get-in db [kit-kw :boiler :settings])]

                  (-> db
                      (assoc-in [kit-kw :boiler :water-level] (:value water-level))
                      (assoc-in [kit-kw :boiler :pressure] (:value pressure))
                      (assoc-in [kit-kw :boiler :prev-pressure] (:value pressure))
                      (assoc-in [kit-kw :boiler :conductivity] (:value conductivity))
                      (assoc-in [kit-kw :boiler :temperature] (:value temperature))
                      (assoc-in [kit-kw :boiler :sludge-mass] (:value sludge-mass))
                      (assoc-in [kit-kw :boiler :settings :view] false)))))

(reg-event-db :restore-defaults-boiler-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      default-settings (-> defaults/BOILER
                                           :settings
                                           (merge {:view true}))]

                  (assoc-in db [kit-kw :boiler :settings] default-settings))))
