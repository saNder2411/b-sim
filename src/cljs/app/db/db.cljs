(ns app.db.db)

(def default-db {:screen   {:w 1920 :h 1080 :scale-f 1 :ratio (/ 16 9)}
                 :kit      "connect"                        ;; "connect"  "module"
                 :user     {:firstname "User" :lastname "Admin"}
                 :sim      "stopped"                        ;; "stopped" "starting" "run" "pause" "stopping"
                 :connect  {:lang                        "en" ;; "en" "de"
                            :intended-use                "training" ;; "training" | "demonstration"
                            :operation-mode              "normal" ;; "normal" "standby"
                            :steam-unit                  "t/h" ;; "t/h" | "T/h"
                            :steam                       35
                            :steam-max                   35
                            :ctrl-panel-view             true
                            :settings-modal-view         false
                            :highlight-hotspots          true
                            :current-hotspot             "none" ;; "boiler" "burner" "valve-sludge" "valve-continuous" "valve-feedwater" "pump-feedwater" "sensor-temperature" "urb" "controller-level" "probe-level" "controller-conductivity" "probe-conductivity" "probe-high-level" "limiter-burner" "limiter-pump" "probe-low-level-1" "probe-low-level-2" "converter"
                            :burner-limiter-id           "URS 60" ;; "none" | "URS 60"
                            :burner-limiter-full-screen  false
                            :pump-limiter-id             "URS 61" ;; "none" | "URS 61"
                            :pump-limiter-full-screen    false
                            :cond-controller-id          "LRR 1-60" ;; "none" | "LRR 1-60"
                            :cond-controller-full-screen false
                            :level-controller-id          "NRR 2-60" ;; "none" | "NRR 2-60" | "NRR 2-60 3C" | "NRR 2-61" |"NRR 2-61 3C"
                            :level-controller-full-screen false
                            :level-probe-id          "NRGT 26-2" ;; "NRG 26-60" | "NRGT 26-2"
                            :level-probe-full-screen false
                            :converter-id "URW 60"
                            :converter-full-screen false}

                 :module   {:lang                "en"       ;; "en" "de"
                            :intended-use        "training" ;; "training" | "demonstration"
                            :operation-mode      "normal"   ;; "normal" "standby"
                            :steam-unit          "t/h"      ;; "t/h" | "T/h"
                            :steam               17.5
                            :steam-max           35
                            :ctrl-panel-view     true
                            :settings-modal-view false
                            :highlight-hotspots  true
                            :current-hotspot     "none"}
                 :boiler   {:water-level   84
                            :pressure      11
                            :prev-pressure 11
                            :conductivity  3000
                            :temperature   100.5
                            :sludge-mass   39.2
                            :init-settings {:water-level       84
                                            :water-level-unit  "%"
                                            :water-level-view  true
                                            :pressure          11
                                            :pressure-unit     "bar"
                                            :pressure-view     true
                                            :conductivity      3000
                                            :conductivity-unit "µS/cm"
                                            :conductivity-view true
                                            :temperature-unit  "°C"
                                            :temperature-view  true
                                            :sludge-mass       39.2
                                            :sludge-mass-unit  "kg"
                                            :sludge-mass-max   80
                                            :volume            55
                                            :volume-unit       "m³"
                                            :settings-view     false}}
                 :burner   {:mode             "auto"
                            :status           "on"
                            :power            0
                            :fuel-consumption 0
                            :init-settings    {:mode                         "auto"
                                               :mode-view                    true
                                               :status                       "on"
                                               :status-view                  true
                                               :power-unit                   "kW"
                                               :power-view                   true
                                               :power-max                    25000
                                               :power-max-unit               "kW"
                                               :fuel-consumption-unit        "nm³/s"
                                               :fuel-consumption-view        true
                                               :fuel-consumption-factor      0.083
                                               :fuel-consumption-factor-unit "nm³/kW*h"
                                               :pressure-on                  11.5
                                               :pressure-off                 12.5
                                               :pressure-unit                "bar"
                                               :heat-transfer                0.9
                                               :heat-transfer-unit           "kJ/kW*s"
                                               :settings-view                false}}
                 :NRR-2-60 {:switch-1               false
                            :switch-2               false
                            :switch-3               false
                            :switch-4               false
                            :fill-or-dis            "fill"
                            :high-level             80
                            :low-level              20
                            :high-level-w           60
                            :low-level-w            40
                            :high-level-off-delay   3
                            :high-level-on-delay    0
                            :low-level-off-delay    3
                            :low-level-on-delay     0
                            :high-level-off-delay-w 3
                            :high-level-on-delay-w  0
                            :low-level-off-delay-w  3
                            :low-level-on-delay-w   0
                            :errors-extra-trigger   []
                            :pi-controller          {}
                            :calibration            {:low-point                        25
                                                     :high-point-by-cal-p              32767
                                                     :cal-p                            100
                                                     :opt-cal-p-from-modal             25
                                                     :low-point-by-boiler              78.23376208
                                                     :high-point-by-boiler             97.86859
                                                     :real-high-point                  32767
                                                     :low-point->probe-value           25
                                                     :high-point-by-cal-p->probe-value 32767
                                                     :cal-p->probe-value               100
                                                     :next-cal-p                       100}}})


