(ns app.db.sludge-valve.events
  (:require [refx.alpha :refer [reg-event-fx reg-event-db]]
            [app.db.defaults :as defaults]))

(reg-event-db :change-sludge-valve
              (fn [{:keys [kit] :as db} [_ [path value]]]
                (assoc-in db (into [(keyword kit) :sludge-valve] path) value)))


(reg-event-db :change-sludge-valve-init-countdown-value
              (fn [{:keys [kit] :as db} [_ value]]
                (let [kit-kw (keyword kit)
                      unit (get-in db [kit-kw :sludge-valve :init-sim-output :countdown :unit])
                      converted-value (cond-> value
                                              (= unit "m") (* 60))]
                  (assoc-in db [kit-kw :sludge-valve :init-sim-output :countdown :value] converted-value))))


(reg-event-db :apply-sludge-valve-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      value (get-in db [kit-kw :sludge-valve :init-sim-output :countdown :value])]
                  (-> db
                      (assoc-in [kit-kw :sludge-valve :countdown :value] value)
                      (assoc-in [kit-kw :sludge-valve :settings-view] false)))))

(reg-event-db :restore-defaults-sludge-valve-settings
              (fn [{:keys [kit] :as db} _]
                (let [kit-kw (keyword kit)
                      default-values (merge defaults/SLUDGE-VALVE {:settings-view true})]
                  (assoc-in db [kit-kw :sludge-valve] default-values))))
