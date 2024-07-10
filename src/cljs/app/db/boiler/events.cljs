(ns app.db.boiler.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-boiler
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [(keyword kit) :boiler] path) value)))

(reg-event-db :change-boiler-pressure-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :boiler :pressure :unit])
                      converted-value (cond-> value
                                              (= unit "psi") (* 0.06894744825494))]
                  (assoc-in db [kit-kw :boiler :pressure :value] converted-value))))

(reg-event-db :change-boiler-init-sim-output-pressure-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :boiler :pressure :unit])
                      converted-value (cond-> value
                                              (= unit "psi") (* 0.06894744825494))]
                  (assoc-in db [kit-kw :boiler :init-sim-output :pressure :value] converted-value))))

(reg-event-db :change-boiler-conductivity-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :boiler :conductivity :unit])
                      converted-value (cond-> value
                                              (= unit "ppm") (* 2))]
                  (assoc-in db [kit-kw :boiler :conductivity :value] converted-value))))

(reg-event-db :change-boiler-init-sim-output-conductivity-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :boiler :conductivity :unit])
                      converted-value (cond-> value
                                              (= unit "ppm") (* 2))]
                  (assoc-in db [kit-kw :boiler :init-sim-output :conductivity :value] converted-value))))

(reg-event-db :apply-boiler-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      {:keys [water-level pressure conductivity temperature sludge-mass]} (get-in db [kit-kw :boiler :init-sim-output])]

                  (-> db
                      (update-in [kit-kw :boiler :water-level] merge water-level)
                      (update-in [kit-kw :boiler :pressure] merge pressure)
                      (assoc-in [kit-kw :boiler :pressure :prev-value] (:value pressure))
                      (update-in [kit-kw :boiler :conductivity] merge conductivity)
                      (update-in [kit-kw :boiler :temperature] merge temperature)
                      (update-in [kit-kw :boiler :sludge-mass] merge sludge-mass)
                      (assoc-in [kit-kw :boiler :settings-view] false)))))

(reg-event-db :restore-defaults-boiler-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      default-values (merge defaults/BOILER {:settings-view true})]

                  (assoc-in db [kit-kw :boiler] default-values))))
