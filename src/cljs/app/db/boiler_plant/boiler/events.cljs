(ns app.db.boiler-plant.boiler.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :boiler/change
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [kit :boiler-plant :boiler] path) value)))

(reg-event-db :boiler/change-pressure-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [unit (get-in db [kit :boiler-plant :boiler :pressure :unit])
                      converted-value (cond-> value
                                              (= unit "psi") (* 0.06894744825494))]
                  (assoc-in db [kit :boiler :pressure :value] converted-value))))

(reg-event-db :boiler/change-init-sim-output-pressure-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [unit (get-in db [kit :boiler-plant :boiler :pressure :unit])
                      converted-value (cond-> value
                                              (= unit "psi") (* 0.06894744825494))]
                  (assoc-in db [kit :boiler-plant :boiler :init-sim-output :pressure :value] converted-value))))

(reg-event-db :boiler/change-conductivity-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [unit (get-in db [kit :boiler-plant :boiler :conductivity :unit])
                      converted-value (cond-> value
                                              (= unit "ppm") (* 2))]
                  (assoc-in db [kit :boiler-plant :boiler :conductivity :value] converted-value))))

(reg-event-db :boiler/change-init-sim-output-conductivity-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [unit (get-in db [kit :boiler-plant :boiler :conductivity :unit])
                      converted-value (cond-> value
                                              (= unit "ppm") (* 2))]
                  (assoc-in db [kit :boiler-plant :boiler :init-sim-output :conductivity :value] converted-value))))

(reg-event-db :boiler/apply-settings
              (fn [{:keys [kit] :as db} _]
                (let [{:keys [water-level pressure conductivity temperature sludge]} (get-in db [kit :boiler-plant :boiler :init-sim-output])]
                  (-> db
                      (update-in [kit :boiler-plant :boiler :water-level] merge water-level)
                      (update-in [kit :boiler-plant :boiler :pressure] merge pressure)
                      (assoc-in [kit :boiler-plant :boiler :pressure :prev-value] (:value pressure))
                      (update-in [kit :boiler-plant :boiler :conductivity] merge conductivity)
                      (update-in [kit :boiler-plant :boiler :temperature] merge temperature)
                      (update-in [kit :boiler-plant :boiler :sludge] merge sludge)
                      (assoc-in [kit :boiler-plant :boiler :settings-view] false)))))

(reg-event-db :boiler/restore-defaults-settings
              (fn [{:keys [kit] :as db} _]
                (let [default-values (merge defaults/BOILER {:settings-view true})]
                  (assoc-in db [kit :boiler-plant :boiler] default-values))))
