(ns app.db.burner.subs
  (:require [refx.alpha :refer [reg-sub]]
            [cljs.pprint :refer [cl-format]]))

(reg-sub :burner
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :burner])))

(reg-sub :burner-pressure-converted-value-on
         :<- [:burner]
         (fn [burner _]
           (let [{:keys [unit value]} (:pressure burner)]
             (cond-> (:on value)
                     (= unit "psi") (-> (* 14.5037738) Math/round)
                     :default (->> (cl-format nil "~,1f") js/parseFloat)))))

(reg-sub :burner-pressure-converted-value-off
         :<- [:burner]
         (fn [burner _]
           (let [{:keys [unit value]} (:pressure burner)]
             (cond-> (:off value)
                     (= unit "psi") (-> (* 14.5037738) Math/round)
                     :default (->> (cl-format nil "~,1f") js/parseFloat)))))

(reg-sub :burner-power-max-converted-value
         :<- [:burner]
         (fn [burner _]
           (let [{:keys [unit max-value]} (:power burner)]
             (cond-> max-value
                     (= unit "MW") (* 0.001)))))

(reg-sub :burner-power-converted-value
         :<- [:burner]
         (fn [burner _]
           (let [{:keys [unit value]} (:power burner)]
             (cond-> value
                     (= unit "MW") (* 0.001)))))

(reg-sub :burner-fuel-consumption-coeff-converted-value
         :<- [:burner]
         (fn [burner _]
           (let [{:keys [unit value]} (-> burner :fuel-consumption :coeff)]
             (cond-> value
                     (= unit "nm³/kW*s") (->> (* 3600) (cl-format nil "~,1f") js/parseFloat)
                     (= unit "nm³/kW*h") (->> (cl-format nil "~,3f") js/parseFloat)))))

(reg-sub :burner-show-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "burner")))








