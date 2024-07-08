(ns app.db.NRR-2-61.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :NRR-2-61
         (fn [db _]
           (get-in db [:connect :level :controllers "NRR 2-61"])))

(def max-high-point-by-cal-p 32767)
(def min-high-point-by-cal-p 8191.75)

(def min-level-by-boiler 78.21877)                          ;%
(def max-level-by-boiler 97.86859)
(def max-range-by-boiler 19.64982)
(def %-in-digital-unit 0.0005996832179)                     ;; one digital value includes 0.0005996832179 percent; 19.64982 % / 32767 digital units

(defn calc-real-high-point [h-point-by-cal-p cal-p]
  (let [value (* (/ h-point-by-cal-p cal-p) 100)]
    (if (> value max-high-point-by-cal-p)
      max-high-point-by-cal-p
      value)))

(reg-sub :NRR-2-61-calibration
         :<- [:NRR-2-61]
         (fn [NRR-2-61 _]
           (let [{:keys [high-point-by-cal-p next-cal-p] :as calibration} (:calibration NRR-2-61)
                 next-real-high-point (calc-real-high-point high-point-by-cal-p next-cal-p)
                 next-high-point-by-boiler (+ min-level-by-boiler (* next-real-high-point %-in-digital-unit))]
             (assoc calibration :next-real-high-point next-real-high-point
                                :next-high-point-by-boiler next-high-point-by-boiler))))

(reg-sub :NRR-2-61-calibration-level-cal-view
         :<- [:NRR-2-61-calibration]
         (fn [cal _]
           (select-keys cal [:high-point-by-boiler
                             :low-point
                             :low-point-by-boiler
                             :next-high-point-by-boiler
                             :next-real-high-point
                             :real-high-point])))

(reg-sub :NRR-2-61-show-toolbar
         :<- [:current-hotspot]
         :<- [:level-controller-id]
         (fn [[current-hotspot level-controller-id] _]
           (and (= current-hotspot "level-controller") (= level-controller-id "NRR 2-61"))))

