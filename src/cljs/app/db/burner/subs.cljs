(ns app.db.burner.subs
  (:require [refx.alpha :refer [reg-sub]]
            [cljs.pprint :refer [cl-format]]))

(reg-sub :burner
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :burner])))

(reg-sub :burner-status
         :<- [:burner]
         (fn [burner _]
           (:status burner)))

(reg-sub :burner-settings
         :<- [:burner]
         (fn [burner _]
           (:settings burner)))

(reg-sub :burner-settings-view
         :<- [:burner-settings]
         (fn [settings _]
           (:view settings)))


(reg-sub :burner-settings-pressure-converted-value-on
         :<- [:burner-settings]
         (fn [settings _]
           (let [{:keys [unit value]} (:pressure settings)]
             (cond-> (:on value)
                     (= unit "psi") (-> (* 14.5037738) Math/round)
                     :default (->> (cl-format nil "~,1f") js/parseFloat)))))

(reg-sub :burner-settings-pressure-converted-value-off
         :<- [:burner-settings]
         (fn [settings _]
           (let [{:keys [unit value]} (:pressure settings)]
             (cond-> (:off value)
                     (= unit "psi") (-> (* 14.5037738) Math/round)
                     :default (->> (cl-format nil "~,1f") js/parseFloat)))))

(reg-sub :burner-settings-power-max-converted-value
         :<- [:burner-settings]
         (fn [settings _]
           (let [{:keys [unit value]} (-> settings :power :max)]
             (cond-> value
                     (= unit "MW") (* 0.001)))))

(reg-sub :burner-settings-fuel-consumption-coeff-converted-value
         :<- [:burner-settings]
         (fn [settings _]
           (let [{:keys [unit value]} (-> settings :fuel-consumption :coeff)]
             (cond-> value
                     (= unit "nm³/kW*s") (->> (* 3600) (cl-format nil "~,1f") js/parseFloat)
                     (= unit "nm³/kW*h") (->> (cl-format nil "~,3f") js/parseFloat)))))

(reg-sub :burner-show-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "burner")))








