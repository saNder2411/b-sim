(ns simulation.db
  (:require [simulation.thermodynamics-fn :as t]))

(def db (atom {:thermodynamics {:saturation-temp-coeff {:c-poly-51 0
                                                        :c-poly-52 0
                                                        :cf-1      0
                                                        :cf-2      0
                                                        :cf-3      0
                                                        :cf-4      0
                                                        :cf-5      0
                                                        :cf-6      0
                                                        :cf-7      0
                                                        :cf-8      0
                                                        :cf-9      0}
                                :denominator           {:ck-1 0
                                                        :ck-2 0
                                                        :ck-3 0
                                                        :ck-4 0
                                                        :ck-5 0
                                                        :ck-6 0}
                                :numerator-d-vw-dt     {:ck-7   0
                                                        :ck-7b  0
                                                        :ck-8   0
                                                        :ck-8b  0
                                                        :ck-9   0
                                                        :ck-9b  0
                                                        :ck-10  0
                                                        :ck-10b 0
                                                        :ck-20b 0
                                                        :ck-21b 0}
                                :numerator-dp-dt       {:ck-11  0
                                                        :ck-11b 0
                                                        :ck-12  0
                                                        :ck-12b 0
                                                        :ck-13  0
                                                        :ck-13b 0
                                                        :ck-22b 0
                                                        :ck-23b 0}
                                :volume-shift          0
                                :pressure-shift        0
                                :temperature           0}
               :boiler         {:steam        {:t-h  17.5
                                               :kg-h 17500
                                               :kg-s 4.861111111
                                               :max  35}
                                :volume       {:value   45.1  ;"m³"
                                               :value-% (* (/ 45.1 55) 100)
                                               :probe-level-% (t/liquid-level-% 45.1 55) ;"%"
                                               :max     55}
                                :pressure     11            ;"bar"
                                :temperature  (t/liquid-temperature 11) ;"°C"
                                :sludge       {:value 39.2  ;"kg"
                                               :max   80}
                                :conductivity 3000}         ; µS/cm

               :feedwater      {:conductivity 500           ; µS/cm
                                :temperature  103           ; °C
                                :enthalpy     (t/liquid-enthalpy-by-t 103) ;kJ/kg saturated liquid enthalpy within T = [90 - 110] °C in kJ/kg
                                :sludge-ratio 0.0003}

               :burner         {:state            "off"     ;; "on" | "off"
                                :mode             "auto"    ;; "auto" | "manual"
                                :operation        "normal"  ;; "normal" | "standby"
                                :switch-points    {:off 12.5 ;;"bar"
                                                   :on  11.5}
                                :power            {:value 0 ;;"kW"
                                                   :max   25000}
                                :fuel-consumption {:value 0 ;;"nm³/s"
                                                   :coeff 0.083}
                                :heat-transfer    {:value 0 ;;"kW"
                                                   :coeff 0.9}} ;;"kJ/kW*s"
               :actuators      {:feed  {:flow-rate     {:t-h  0
                                                        :kg-h 0
                                                        :kg-s 0
                                                        :max  70}
                                        :amperage      {:min   4
                                                        :max   20
                                                        :value 4}
                                        :pi-controller {:mode                 "auto" ;; "auto" | "manual"
                                                        :direction            "fill" ;; "fill" | "discharge"
                                                        :target-point         50
                                                        :c-elements           1
                                                        :k-factor             0.5
                                                        :proportional-band    20
                                                        :integral-action-time {:value 0
                                                                               :tact  0}
                                                        :n-zone               {:value   5
                                                                               :active? true}
                                                        :control-area         {:value          10
                                                                               :upper-boundary 60
                                                                               :lower-boundary 40}
                                                        :x                    {:adjusted    0
                                                                               :next        0
                                                                               :force-off?  false
                                                                               :force-keep? false}}
                                        :valve         {:type          :electric-valve
                                                        :transition    {:state       "fixed" ;; "fixed" | "opening" | "closing"
                                                                        :travel-time 40} ;; sec
                                                        :potentiometer {:open      32752
                                                                        :close     16
                                                                        :mixed-up? false}
                                                        :damper        {:value       0 ;; 0%-100%
                                                                        :pi-c-output 0 ;; pi-c x next value
                                                                        :digital     16
                                                                        :delta       (/ 100 40)
                                                                        :step-delay  2}}}
                                :drain {:flow-rate {:t-h  0
                                                    :kg-h 0
                                                    :kg-s 0
                                                    :max  35}}

                                :blow  {:flow-rate {:t-h  0
                                                    :kg-h 0
                                                    :kg-s 0
                                                    :max  28.8}}}}))
