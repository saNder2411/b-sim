(ns simulation.thermodynamics
  (:require [simulation.thermodynamics-fn :as t]))

(defn- get-slope-m [t-fn p-low p-high]
  (/ (- (t-fn p-high) (t-fn p-low))
     (- p-high p-low)))

(defn- get-intercept-b [t-fn p slope-m]
  (- (t-fn p) (* slope-m p)))

(defn- get-c-poly-n [t-fn p p-low p-high]
  (let [slop-m (get-slope-m t-fn p-low p-high)
        intercept-b (get-intercept-b t-fn p slop-m)]
    [slop-m intercept-b]))

(defn init! [db-atom]
  (let [pressure (-> @db-atom :boiler :pressure)
        max-volume (-> @db-atom :boiler :volume :max)
        water-enthalpy (-> @db-atom :feedwater :enthalpy)
        p-low (dec pressure)
        p-high (inc pressure)
        [c-poly-11 c-poly-12] (get-c-poly-n t/liquid-density pressure p-low p-high)
        [c-poly-21 c-poly-22] (get-c-poly-n t/steam-density pressure p-low p-high)
        [c-poly-31 c-poly-32] (get-c-poly-n t/liquid-enthalpy pressure p-low p-high)
        [c-poly-41 c-poly-42] (get-c-poly-n t/steam-enthalpy pressure p-low p-high)
        [c-poly-51 c-poly-52] (get-c-poly-n t/liquid-temperature pressure p-low p-high)
        cf-1 (- c-poly-11 c-poly-21)
        cf-2 (- c-poly-12 c-poly-22)
        cf-3 (* c-poly-21 max-volume)
        cf-4 (- (* c-poly-11 c-poly-31) (* c-poly-21 c-poly-41))
        cf-5 (- (+ (* c-poly-12 c-poly-31) (* c-poly-11 c-poly-32))
                (* c-poly-22 c-poly-41)
                (* c-poly-21 c-poly-42))
        cf-6 (- (* c-poly-12 c-poly-32) (* c-poly-22 c-poly-42))
        cf-7 (* cf-4 2)
        cf-8 (* cf-3 c-poly-41 2)
        cf-9 (* max-volume (- (+ (* c-poly-41 c-poly-22) (* c-poly-21 c-poly-42)) 1))]
    (swap! db-atom #(-> %
                        (assoc-in [:thermodynamics :saturation-temp-coeff] {:c-poly-51 c-poly-51
                                                                            :c-poly-52 c-poly-52
                                                                            :cf-1      cf-1
                                                                            :cf-2      cf-2
                                                                            :cf-3      cf-3
                                                                            :cf-4      cf-4
                                                                            :cf-5      cf-5
                                                                            :cf-6      cf-6
                                                                            :cf-7      cf-7
                                                                            :cf-8      cf-8
                                                                            :cf-9      cf-9})
                        (assoc-in [:thermodynamics :denominator] {:ck-1 (* cf-1 (- cf-4 cf-7))
                                                                  :ck-2 (* cf-2 cf-7 -1)
                                                                  :ck-3 (- (* cf-1 cf-6) (* cf-2 cf-5))
                                                                  :ck-4 (- (* cf-3 cf-4) (* cf-1 cf-8))
                                                                  :ck-5 (- (* cf-3 cf-5) (* cf-1 cf-9) (* cf-2 cf-8))
                                                                  :ck-6 (- (* cf-3 cf-6) (* cf-2 cf-9))})
                        (assoc-in [:thermodynamics :numerator-d-vw-dt] {:ck-7   (- cf-7 (* cf-1 c-poly-41))
                                                                        :ck-7b  (- cf-7 (* cf-1 c-poly-31))
                                                                        :ck-8   (- cf-5 (* cf-1 c-poly-42))
                                                                        :ck-8b  (- cf-5 (* cf-1 c-poly-32))
                                                                        :ck-9   (- cf-8 (* cf-3 c-poly-41))
                                                                        :ck-9b  (- cf-8 (* cf-3 c-poly-31))
                                                                        :ck-10  (- cf-9 (* cf-3 c-poly-42))
                                                                        :ck-10b (- cf-9 (* cf-3 c-poly-32))
                                                                        :ck-20b (- (* cf-1 water-enthalpy) cf-5)
                                                                        :ck-21b (- (* cf-3 water-enthalpy) cf-9)})
                        (assoc-in [:thermodynamics :numerator-dp-dt] {:ck-11  (- cf-4 (* cf-1 c-poly-41))
                                                                      :ck-11b (- cf-4 (* cf-1 c-poly-31))
                                                                      :ck-12  (- cf-5 (* cf-2 c-poly-41) (* cf-1 c-poly-42))
                                                                      :ck-12b (- cf-5 (* cf-2 c-poly-31) (* cf-1 c-poly-32))
                                                                      :ck-13  (- cf-6 (* cf-2 c-poly-42))
                                                                      :ck-13b (- cf-6 (* cf-2 c-poly-32))
                                                                      :ck-22b (- (* cf-1 water-enthalpy) cf-5)
                                                                      :ck-23b (- (* cf-2 water-enthalpy) cf-6)})))))

(defn- get-volume-factor [cf-1 cf-2 cf-3 cf-4 volume pressure]
  (let [vol-water-xp (* volume pressure)]
    (-> (* cf-1 vol-water-xp)
        (+ (* cf-2 volume))
        (+ (* cf-3 pressure))
        (+ cf-4))))

(defn- get-pressure-factor [cf-1 cf-2 cf-3 pressure]
  (let [p-square (* pressure pressure)]
    (-> (* cf-1 p-square)
        (+ (* cf-2 pressure))
        (+ cf-3))))

(defn- get-shift [F feed-water-f steam-f out-water-f smoke-gas-f steam-kg-s flow-rate-kg-s heat-transfer-KW]
  (let [out-flow-rate-kg-s (+ (-> flow-rate-kg-s :drain) (-> flow-rate-kg-s :blow))]
    (-> (* feed-water-f (-> flow-rate-kg-s :feed))
        (+ (* steam-f steam-kg-s))
        (+ (* out-water-f out-flow-rate-kg-s))
        (+ (* smoke-gas-f heat-transfer-KW))
        (/ F))))

(defn sim-step! [db-atom]
  (let [pressure (-> @db-atom :boiler :pressure)
        volume (-> @db-atom :boiler :volume :value)
        heat (-> @db-atom :burner :heat-transfer :value)
        steam-kg-s (-> @db-atom :boiler :steam :kg-s)
        flow-rate {:feed  (-> @db-atom :actuators :feed :flow-rate :kg-s)
                   :drain (-> @db-atom :actuators :drain :flow-rate :kg-s)
                   :blow  (-> @db-atom :actuators :blow :flow-rate :kg-s)}
        p-square (* pressure pressure)
        vol-water-xp (* volume pressure)
        {:keys [ck-1 ck-2 ck-3 ck-4 ck-5 ck-6]} (-> @db-atom :thermodynamics :denominator)
        {:keys [c-poly-51 c-poly-52 cf-1 cf-2 cf-3 cf-4 cf-7 cf-8]} (-> @db-atom :thermodynamics :saturation-temp-coeff)
        {:keys [ck-7 ck-8 ck-9 ck-10 ck-7b ck-8b ck-9b ck-10b ck-20b ck-21b]} (-> @db-atom :thermodynamics :numerator-d-vw-dt)
        {:keys [ck-11 ck-11b ck-12 ck-12b ck-13 ck-13b ck-22b ck-23b]} (-> @db-atom :thermodynamics :numerator-dp-dt)
        F (-> (* ck-1 volume volume pressure)
              (+ (* ck-2 vol-water-xp))
              (+ (* ck-3 volume))
              (+ (* ck-4 p-square))
              (+ (* ck-5 pressure))
              (+ ck-6))
        F-feed-water-Vw (get-volume-factor (-' cf-7) ck-20b (-' cf-8) ck-21b volume pressure)
        F-steam-Vw (get-volume-factor ck-7 ck-8 ck-9 ck-10 volume pressure)
        F-out-water-Vw (get-volume-factor ck-7b ck-8b ck-9b ck-10b volume pressure)
        F-smoke-gas-Vw (+ (* cf-1 volume) cf-3)
        vol-shift (get-shift F F-feed-water-Vw F-steam-Vw F-out-water-Vw F-smoke-gas-Vw steam-kg-s flow-rate heat)
        F-feed-water-P (get-pressure-factor (-' cf-4) ck-22b ck-23b pressure)
        F-steam-P (get-pressure-factor ck-11 ck-12 ck-13 pressure)
        F-out-water-P (get-pressure-factor ck-11b ck-12b ck-13b pressure)
        F-smoke-gas-P (+ (* cf-1 pressure) cf-2)
        pressure-shift (get-shift (-' F) F-feed-water-P F-steam-P F-out-water-P F-smoke-gas-P steam-kg-s flow-rate heat)
        temperature (+ (* c-poly-51 (+ pressure pressure-shift))
                       c-poly-52)]
    (swap! db-atom #(-> %
                        (assoc-in [:thermodynamics :volume-shift] vol-shift)
                        (assoc-in [:thermodynamics :pressure-shift] pressure-shift)
                        (assoc-in [:thermodynamics :temperature] temperature)))))



