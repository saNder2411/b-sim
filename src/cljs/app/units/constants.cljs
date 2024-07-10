(ns app.units.constants)

(def PRESSURE-UNITS [{:value         "bar"
                      :xf-own->base  1
                      :xf-base->own  1
                      :own-fraction  1
                      :base-fraction 1}

                     {:value         "psi"
                      :xf-own->base  0.06894744825494
                      :xf-base->own  14.5038
                      :own-fraction  0
                      :base-fraction 1}])

(def PRESSURE-BASE-UNIT (-> PRESSURE-UNITS (get 0) :value))

(def CONDUCTIVITY-UNITS [{:value         "µS/cm"
                          :xf-own->base  1
                          :xf-base->own  1
                          :own-fraction  0
                          :base-fraction 0}

                         {:value         "ppm"
                          :xf-own->base  2
                          :xf-base->own  0.5
                          :own-fraction  0
                          :base-fraction 0}])

(def CONDUCTIVITY-BASE-UNIT (-> CONDUCTIVITY-UNITS (get 0) :value))

(def TEMPERATURE-UNITS [{:value         "°C"
                         :xf-own->base  1
                         :xf-base->own  1
                         :own-fraction  0
                         :base-fraction 0}])

(def TEMPERATURE-BASE-UNIT (-> TEMPERATURE-UNITS (get 0) :value))

(def MEASUREMENT-UNITS [{:value         "%"
                         :xf-own->base  1
                         :xf-base->own  1
                         :own-fraction  1
                         :base-fraction 1}])

(def MEASUREMENT-BASE-UNIT (-> MEASUREMENT-UNITS (get 0) :value))

(def ROTATION-SPEED-UNITS [{:value         "rpm"
                            :xf-own->base  1
                            :xf-base->own  1
                            :own-fraction  0
                            :base-fraction 0}])

(def MASS-UNITS [{:value         "kg"
                  :xf-own->base  1
                  :xf-base->own  1
                  :own-fraction  1
                  :base-fraction 1}])

(def SLUDGE-MASS-BASE-UNIT (-> MASS-UNITS (get 0) :value))

(def VOLUME-UNITS [{:value         "m³"
                    :xf-own->base  1
                    :xf-base->own  1
                    :own-fraction  1
                    :base-fraction 1}])

(def TOTAL-VOLUME-BASE-UNIT (-> VOLUME-UNITS (get 0) :value))

(def POWER-UNITS [{:value         "kW"
                   :xf-own->base  1
                   :xf-base->own  1
                   :own-fraction  0
                   :base-fraction 0}

                  {:value         "MW"
                   :xf-own->base  1000
                   :xf-base->own  0.001
                   :own-fraction  3
                   :base-fraction 0}])

(def POWER-BASE-UNIT (-> POWER-UNITS (get 0) :value))

(def FUEL-CONSUMPTION-UNITS [{:value         "nm³/s"
                              :xf-own->base  1
                              :xf-base->own  1
                              :own-fraction  0
                              :base-fraction 0}

                             {:value         "hnm³/h"
                              :xf-own->base  277.7777778
                              :xf-base->own  0.0036
                              :own-fraction  2
                              :base-fraction 0}])

(def FUEL-CONSUMPTION-BASE-UNIT (-> FUEL-CONSUMPTION-UNITS (get 0) :value))

(def FUEL-CONSUMPTION-COEFFICIENT-UNITS [{:value         "nm³/kW*h"
                                          :xf-own->base  1
                                          :xf-base->own  1
                                          :own-fraction  3
                                          :base-fraction 3}

                                         {:value         "nm³/kW*s"
                                          :xf-own->base  0.00027777777
                                          :xf-base->own  3600
                                          :own-fraction  1
                                          :base-fraction 3}])

(def FUEL-CONSUMPTION-COEFFICIENT-BASE-UNIT (-> FUEL-CONSUMPTION-COEFFICIENT-UNITS (get 0) :value))

(def HEAT-TRANSFER-COEFFICIENT-UNITS [{:value         "kJ/kW*s"
                                       :xf-own->base  1
                                       :xf-base->own  1
                                       :own-fraction  2
                                       :base-fraction 2}])

(def HEAT-TRANSFER-COEFFICIENT-BASE-UNIT (-> HEAT-TRANSFER-COEFFICIENT-UNITS (get 0) :value))

(def RATIO-UNITS [{:value         "ratio"
                   :xf-own->base  1
                   :xf-base->own  1
                   :own-fraction  0
                   :base-fraction 0}])

(def RATIO-BASE-UNIT (-> RATIO-UNITS (get 0) :value))

(def FLOW-RATE-UNITS [{:value         "t/h"
                       :xf-own->base  1
                       :xf-base->own  1
                       :own-fraction  2
                       :base-fraction 2}

                      {:value         "T/h"
                       :xf-own->base  1.016260162601626
                       :xf-base->own  0.984
                       :own-fraction  2
                       :base-fraction 2}])

(def FLOW-RATE-BASE-UNIT (-> FLOW-RATE-UNITS (get 0) :value))

(def TIME-UNITS [{:value         "ms"
                  :xf-own->base  1
                  :xf-base->own  1
                  :own-fraction  0
                  :base-fraction 0}

                 {:value         "sec"
                  :xf-own->base  1000
                  :xf-base->own  0.001
                  :own-fraction  0
                  :base-fraction 0}

                 {:value         "min"
                  :xf-own->base  60000
                  :xf-base->own  0.00001666666
                  :own-fraction  0
                  :base-fraction 0}

                 {:value         "h"
                  :xf-own->base  3600000
                  :xf-base->own  2.77777778e-7
                  :own-fraction  0
                  :base-fraction 0}])

(def TIME-BASE-UNIT (-> TIME-UNITS (get 0) :value))


(def VALVE-TRAVEL-TIME_UNITS [(-> TIME-UNITS (get 1))])

(def VALVE-TRAVEL-TIME-BASE-UNIT (-> VALVE-TRAVEL-TIME_UNITS (get 0) :value))

(def ACTUATOR-POSITION-UNITS [(-> MEASUREMENT-UNITS (get 0))])

(def ACTUATOR-POSITION-BASE-UNIT (-> ACTUATOR-POSITION-UNITS (get 0) :value))

(def ACTUATOR-PUMP-PERFORMANCE-UNITS [(-> MEASUREMENT-UNITS (get 0))])

(def ACTUATOR-PUMP-PERFORMANCE-BASE-UNIT (-> ACTUATOR-PUMP-PERFORMANCE-UNITS (get 0) :value))

(def POTENTIOMETER-ROW-VALUE-UNITS [{:value         "--"
                                     :xf-own->base  1
                                     :xf-base->own  1
                                     :own-fraction  0
                                     :base-fraction 0}])

(def CORRECTION-FACTOR-UNITS [{:value         "factor"
                               :xf-own->base  1
                               :xf-base->own  1
                               :own-fraction  3
                               :base-fraction 3}])

(def TEMPERATURE-COEFFICIENT-UNITS [{:value         "%/°C"
                                     :xf-own->base  1
                                     :xf-base->own  1
                                     :own-fraction  1
                                     :base-fraction 1}])

(def OPEN-CLOSE-UNITS [{:value         "open/close"
                        :xf-own->base  1
                        :xf-base->own  1
                        :own-fraction  1
                        :base-fraction 1}])

(def FLOW-RATE-ONLY-KG-S-UNITS [{:value         "kg/s"
                                 :xf-own->base  1
                                 :xf-base->own  1
                                 :own-fraction  1
                                 :base-fraction 1}])

(def REMAINING-RUNTIME-COUNTDOWN-UNITS [{:value         "s"
                                         :xf-own->base  1
                                         :xf-base->own  1
                                         :own-fraction  0
                                         :base-fraction 0}

                                        {:value         "m"
                                         :xf-own->base  60
                                         :xf-base->own  0.01666666667
                                         :own-fraction  0
                                         :base-fraction 0}])

(def UNITS-MAP {"bar"      (get PRESSURE-UNITS 0)
                "psi"      (get PRESSURE-UNITS 1)
                "µS/cm"    (get CONDUCTIVITY-UNITS 0)
                "ppm"      (get CONDUCTIVITY-UNITS 1)
                "°C"       (get TEMPERATURE-UNITS 0)
                "%"        (get MEASUREMENT-UNITS 0)
                "kg"       (get MASS-UNITS 0)
                "m³"       (get VOLUME-UNITS 0)
                "kW"       (get POWER-UNITS 0)
                "MW"       (get POWER-UNITS 1)
                "nm³/s"    (get FUEL-CONSUMPTION-UNITS 0)
                "hnm³/h"   (get FUEL-CONSUMPTION-UNITS 1)
                "nm³/kW*h" (get FUEL-CONSUMPTION-COEFFICIENT-UNITS 0)
                "nm³/kW*s" (get FUEL-CONSUMPTION-COEFFICIENT-UNITS 1)
                "kJ/kW*s"  (get HEAT-TRANSFER-COEFFICIENT-UNITS 0)
                "ratio"    (get RATIO-UNITS 0)
                "t/h"      (get FLOW-RATE-UNITS 0)
                "T/h"      (get FLOW-RATE-UNITS 1)
                "sec"      (get TIME-UNITS 1)
                "--"       (get POTENTIOMETER-ROW-VALUE-UNITS 0)
                "rpm"      (get ROTATION-SPEED-UNITS 0)
                "factor"   (get CORRECTION-FACTOR-UNITS 0)
                "%/°C"     (get TEMPERATURE-COEFFICIENT-UNITS 0)
                "s"        (get REMAINING-RUNTIME-COUNTDOWN-UNITS 0)
                "m"        (get REMAINING-RUNTIME-COUNTDOWN-UNITS 1)
                "kg/s"     (get FLOW-RATE-ONLY-KG-S-UNITS 0)})

(def UNIT-LIMITS {:boiler-pressure                             {"bar" {:min 10 :max 14 :step 0.1}
                                                                "psi" {:min 146 :max 203 :step 1}}

                  :boiler-temperature                          {"°C" {:min 1 :max 80 :step 1}}

                  :boiler-water-level                          {"%" {:min 0 :max 100 :step 1}}

                  :boiler-conductivity                         {"µS/cm" {:min 500 :max 6000 :step 10}
                                                                "ppm"   {:min 250 :max 3000 :step 10}}

                  :boiler-sludge-mass                          {"kg" {:min 0 :max 80 :step 1}}

                  :boiler-volume                               {"m³" {:min 50 :max 60 :step 0.5}}

                  :burner-power                                {"kW" {:min 0 :max 1e6 :step 1}
                                                                "MW" {:min 0 :max 1e6 :step 1}}

                  :burner-max-power                            {"kW" {:min 1000 :max 25000 :step 50}
                                                                "MW" {:min 1 :max 25 :step 0.5}}

                  :burner-fuel-consumption                     {"nm³/s"  {:min 0 :max 1e6 :step 1}
                                                                "hnm³/h" {:min 0 :max 1e6 :step 1}}

                  :burner-fuel-consumption-coeff               {"nm³/kW*h" {:min 0.07 :max 0.1 :step 0.001}
                                                                "nm³/kW*s" {:min 252 :max 360 :step 1}}

                  :burner-heat-transfer-coeff                  {"kJ/kW*s" {:min 0.5 :max 0.99 :step 0.01}}

                  :feed-water-temperature                      {"°C" {:min 90 :max 110 :step 1}}

                  :feed-water-conductivity                     {"µS/cm" {:min 170 :max 2000 :step 10}
                                                                "ppm"   {:min 85 :max 1000 :step 5}}

                  :feed-water-sludge-ratio                     {"ratio" {:min 0.0001 :max 0.001 :step 0.0001}}

                  :feed-water-elect-valve-flow-rate            {"t/h" {:min 1 :max 70 :step 1}
                                                                "T/h" {:min 1 :max 68.88 :step 1}}

                  :feed-water-elect-valve-position             {"%" {:min 0 :max 100 :step 1}}

                  :feed-water-elect-valve-travel-time          {"s" {:min 1 :max 600 :step 1}}

                  :feed-water-elect-valve-potentiometer-closed {"--" {:min 16 :max 32752 :step 1}}

                  :feed-water-elect-valve-potentiometer-open   {"--" {:min 16 :max 32752 :step 1}}

                  :feed-water-pump-performance                 {"%" {:min 0 :max 100 :step 1}}

                  :feed-water-pump-rot-speed                   {"rpm" {:min 120 :max 1200 :step 1}}

                  :conductivity-probe-correct-f                {"factor" {:min 0.05 :max 5 :step 0.001}}

                  :conductivity-probe-temperature-coeff        {"%/°C" {:min 0 :max 3 :step 0.1}}

                  :blowdown-countdown-init-value               {"s" {:min 60 :max 86400 :step 1}
                                                                "m" {:min 1 :max 1440 :step 1}}

                  :flow-rate-kg-s                              {"kg/s" {:min 4 :max 12 :step 1}}

                  :blowdown-elect-valve-flow-rate              {"t/h" {:min 1 :max 35 :step 1}
                                                                "T/h" {:min 1 :max 34.44 :step 1}}})





























