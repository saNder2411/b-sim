(ns app.db.NRR-2-60-subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :NRR-2-60
         (fn [db _]
           (:NRR-2-60 db)))

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

(reg-sub :NRR-2-60-calibration
         :<- [:NRR-2-60]
         (fn [NRR-2-60 _]
           (let [{:keys [high-point-by-cal-p next-cal-p] :as calibration} (:calibration NRR-2-60)
                 next-real-high-point (calc-real-high-point high-point-by-cal-p next-cal-p)
                 next-high-point-by-boiler (+ min-level-by-boiler (* next-real-high-point %-in-digital-unit))]
             (assoc calibration :next-real-high-point next-real-high-point
                                :next-high-point-by-boiler next-high-point-by-boiler))))

(reg-sub :NRR-2-60-calibration-level-cal-view
         :<- [:NRR-2-60-calibration]
         (fn [cal _]
           (dissoc cal
                   :high-point-by-cal-p
                   :cal-p
                   :opt-cal-p-from-modal
                   :low-point->probe-value
                   :high-point-by-cal-p->probe-value
                   :cal-p->probe-value
                   :next-cal-p)))

