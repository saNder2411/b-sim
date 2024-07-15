(ns app.db.NRR-2-61-3C.subs
  (:require [refx.alpha :refer [reg-sub]]
            [app.db.utils :refer [calc-real-high-point]]
            [app.db.constants :refer [LEVEL-CALIBRATION]]))

(reg-sub :NRR-2-61-3C
         (fn [db _]
           (get-in db [:connect :level :controllers "NRR 2-61 3C"])))

(reg-sub :NRR-2-61-3C-calibration
         :<- [:NRR-2-61-3C]
         (fn [{:keys [calibration]} _]
           (let [{:keys [points cal-p]} calibration
                 next-real-high (calc-real-high-point (:high points) (:next-value cal-p))
                 next-high-by-boiler (+ (-> LEVEL-CALIBRATION :points-by-boiler :min) (* next-real-high (-> LEVEL-CALIBRATION :points-by-boiler :%-in-digital-unit)))]
             (-> calibration
                 (assoc-in [:points :next-real-high] next-real-high)
                 (assoc-in [:points-by-boiler :next-high] next-high-by-boiler)))))

(reg-sub "connect-NRR 2-61 3C-calibration-boiler-view"
         :<- [:NRR-2-61-3C-calibration]
         (fn [cal _]
           (select-keys cal [:points :points-by-boiler])))

(reg-sub :NRR-2-61-3C-show-toolbar
         :<- [:current-hotspot]
         :<- [:level-controller-id]
         (fn [[current-hotspot level-controller-id] _]
           (and (= current-hotspot "level-controller") (= level-controller-id "NRR 2-61 3C"))))
