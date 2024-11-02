(ns simulation.level-probe
  (:require [simulation.helpers :as h]
            [simulation.constants :as c]))

(def check-digit-high-point (partial h/check-val-by-range (:min c/LEVEL-PROBE-CALIBRATION-LIMITS) (:max c/LEVEL-PROBE-CALIBRATION-LIMITS)))
(def check-level-% (partial h/check-val-by-range 0 100))

(defn- calc-point-by-boiler [digit]
  (+ (:min c/LEVEL-PROBE-BY-BOILER) (* digit (:%-in-digit c/LEVEL-PROBE-BY-BOILER))))

(defn init! [db-atom {:keys [high-point-by-cal-p cal-p low-point]}]
  (let [real-high-point (check-digit-high-point (* (/ high-point-by-cal-p cal-p) 100))
        low-point-point-by-b (calc-point-by-boiler low-point)
        high-point-by-b (calc-point-by-boiler real-high-point)]
    (swap! db-atom #(-> %
                        (assoc-in [:level :probe :calibration :high-point-by-cal-p] high-point-by-cal-p)
                        (assoc-in [:level :probe :calibration :cal-p] cal-p)
                        (assoc-in [:level :probe :calibration :low-point] low-point)
                        (assoc-in [:level :probe :calibration :real-high-point] real-high-point)
                        (assoc-in [:level :probe :level :low-point-by-boiler] low-point-point-by-b)
                        (assoc-in [:level :probe :level :high-point-by-boiler] high-point-by-b)
                        (assoc-in [:level :probe :level :range] (- high-point-by-b low-point-point-by-b))))))

(defn- update-level-value-% [db]
  (let [boiler-level-% (-> db :boiler :volume :value-%)
        {:keys [low-point-by-boiler range]} (-> db :level :probe :level)
        val-% (/ (* 100 (- boiler-level-% low-point-by-boiler)) range)]
    (assoc-in db [:level :probe :level :value-%] (check-level-% val-%))))

(defn- update-digit-value [db]
  (let [boiler-level-% (-> db :boiler :volume :value-%)
        val (* (- boiler-level-% (:min c/LEVEL-PROBE-BY-BOILER)) (:digit-in-% c/LEVEL-PROBE-BY-BOILER))]
    (assoc-in db [:level :probe :digit :value] val)))

(defn- update-amperage-value [db]
  (let [boiler-level-% (-> db :boiler :volume :value-%)
        {:keys [min max]} (-> db :level :probe :amperage)
        val (+ (* (- boiler-level-% (:min c/LEVEL-PROBE-BY-BOILER)) (:mA-in-% c/LEVEL-PROBE-BY-BOILER)) min)]
    (assoc-in db [:level :probe :amperage :value] (h/check-val-by-range min max val))))


(defn sim-step! [db-atom]
  (swap! db-atom #(-> %
                      update-level-value-%
                      update-digit-value
                      update-amperage-value)))
