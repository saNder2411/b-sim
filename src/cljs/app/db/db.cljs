(ns app.db.db)

(def default-db {:screen                {:w 1920 :h 1080 :scale-f 1 :ratio (/ 16 9)}
                 :kit                   "connect"
                 :user                  {:firstname "User" :lastname "Admin"}
                 :sim                   "stopped"           ;; "stopped" "starting" "run" "pause" "stopping"
                 :lang                  "en"
                 :operation-mode        "normal"
                 :show-ctrl-panel       true
                 :show-general-settings false
                 :highlight-hotspots    true
                 :current-hotspot       "none"
                 :boiler                {:water-level   84
                                         :pressure      11
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
                                                         :conductivity-unit "uS/cm"
                                                         :conductivity-view true
                                                         :temperature-unit  "degCelsius"
                                                         :temperature-view  true
                                                         :sludge-mass       39.2
                                                         :sludge-mass-unit  "kg"
                                                         :sludge-mass-max   80
                                                         :volume            55
                                                         :volume-unit       "m³"
                                                         :settings-view     false}}
                 :NRR-2-60              {:switch-1               false
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


