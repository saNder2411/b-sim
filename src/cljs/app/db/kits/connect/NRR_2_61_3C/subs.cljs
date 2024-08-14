(ns app.db.kits.connect.NRR-2-61-3C.subs
  (:require [refx.alpha :refer [reg-sub]]
            [app.db.utils :refer [calc-real-high-point]]
            [app.db.constants :refer [LEVEL-CALIBRATION]]))

(reg-sub :NRR-2-61-3C
         :<- [:kit-data]
         (fn [{:keys [level]} _]
           (get-in level [:controllers "NRR 2-61 3C"])))

(reg-sub :NRR-2-61-3C-calibration
         :<- [:NRR-2-61-3C]
         (fn [{:keys [calibration]} _]
           (let [{:keys [points cal-p]} calibration
                 next-real-high (calc-real-high-point (:high points) (:next-value cal-p))
                 next-high-by-boiler (+ (-> LEVEL-CALIBRATION :points-by-boiler :min) (* next-real-high (-> LEVEL-CALIBRATION :points-by-boiler :%-in-digital-unit)))]
             (-> calibration
                 (assoc-in [:points :next-real-high] next-real-high)
                 (assoc-in [:points-by-boiler :next-high] next-high-by-boiler)))))

(reg-sub ":connect/NRR 2-61 3C/calibration-boiler-view"
         :<- [:NRR-2-61-3C-calibration]
         (fn [cal _]
           (select-keys cal [:points :points-by-boiler])))

(reg-sub :NRR-2-61-3C-show-toolbar
         :<- [:current-hotspot]
         :<- [:level-controller-id]
         (fn [[current-hotspot id] _]
           (and (= current-hotspot "level-controller") (= id "NRR 2-61 3C"))))

(reg-sub :NRR-2-61-3C-node-id
         :<- [:NRR-2-61-3C]
         (fn [{:keys [switches]} _]
           (let [switch-1 (get switches 1)
                 switch-2 (get switches 2)]
             (cond
               (and (not switch-1) (not switch-2)) 40
               (and (not switch-1) switch-2) 45
               (and switch-1 (not switch-2)) 60
               (and switch-1 switch-2) 65
               :default 40))))

(reg-sub :NRR-2-61-3C-group
         :<- [:NRR-2-61-3C-node-id]
         (fn [node-id _]
           (let [groups-bi-node-id {40 1 45 2 60 3 65 4}]
             (get groups-bi-node-id node-id))))

(reg-sub :NRR-2-61-3C-baud-rate
         :<- [:NRR-2-61-3C]
         (fn [{:keys [switches]} _]
           (let [switch-3 (get switches 3)]
             (if switch-3 250 50))))