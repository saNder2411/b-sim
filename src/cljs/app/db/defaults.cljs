(ns app.db.defaults)

(def GENERAL-SETTINGS {:lang            "en"                ;; "en" "de"
                       :intended-use    "training"          ;; "training" | "demonstration"
                       :operation-mode  "normal"            ;; "normal" "standby"
                       :steam           {:unit      "t/h"
                                         :value     17.5
                                         :max-value 35}
                       :view            false
                       :ctrl-panel-view true})

(def BOILER {:water-level     {:view  true
                               :unit  "%"
                               :value 84}

             :pressure        {:view       true
                               :unit       "bar"
                               :value      11
                               :prev-value 11}

             :conductivity    {:view  true
                               :unit  "µS/cm"
                               :value 3000}

             :temperature     {:view  true
                               :unit  "°C"
                               :value 100.5}

             :sludge-mass     {:unit      "kg"
                               :value     39.2
                               :max-value 80}

             :volume          {:value 55
                               :unit  "m³"}

             :init-sim-output {:water-level  {:value 84}

                               :pressure     {:value 11}

                               :conductivity {:value 3000}

                               :sludge-mass  {:value 39.2}}
             :settings-view   false})

(def BURNER {:mode             {:view  true
                                :value "auto"}

             :status           {:view  true
                                :unit  "on/off"
                                :value "on"}

             :power            {:view      true
                                :unit      "kW"
                                :value     0
                                :max-value 25000}

             :fuel-consumption {:view  true
                                :unit  "nm³/s"
                                :value 0
                                :coeff {:value 0.083
                                        :unit  "nm³/kW*h"}}

             :pressure         {:unit  "bar"
                                :value {:on 11.5 :off 12.5}}

             :heat-transfer    {:value 0.9
                                :unit  "kJ/kW*s"}

             :init-sim-output  {:status {:value "on"}}

             :settings-view    false})

(def CONTINUOUS-VALVE {:mode            {:view  true
                                         :value "auto"}

                       :damper          {:view        true
                                         :unit        "%"
                                         :value       5
                                         :amperage    4
                                         :op-position 5}

                       :flow-rate       {:view      true
                                         :unit      "t/h"
                                         :value     0
                                         :max-value 35}

                       :transition      {:status      "fixed"
                                         :travel-time {:value 40
                                                       :unit  "s"}}

                       :potentiometer   {:connection  "connected"
                                         :damper      {:unit   "byte"
                                                       :closed 16
                                                       :open   32752}

                                         :calibration {:0   16
                                                       :100 32752}}

                       :flushing        {:on       true
                                         :interval 1        ;;hours
                                         :duration 3}       ;; minutes

                       :init-sim-output {:damper     {:value 5}

                                         :transition {:travel-time {:value 40}}}

                       :settings-view   false})

(def SLUDGE-VALVE {:mode            {:view  true
                                     :value "auto"}

                   :damper          {:view  true
                                     :unit  "open/close"
                                     :value 0}

                   :flow-rate       {:view      true
                                     :unit      "kg/s"
                                     :value     0
                                     :max-value 8}

                   :status          "standby"               ;; "pulse" | "pause" | "standby"

                   :interval        {:unit  "h"
                                     :value 24}

                   :countdown       {:view  true
                                     :unit  "s"
                                     :value 10}

                   :pulse           {:unit     "s"
                                     :duration 5
                                     :count    3
                                     :interval 3}


                   :init-sim-output {:countdown {:unit  "s"
                                                 :value 10}}

                   :settings-view   false})

(def FEEDWATER-VALVE-ELECTRIC {:mode            {:view  true
                                                 :value "auto"}

                               :damper          {:view     true
                                                 :unit     "%"
                                                 :value    0
                                                 :amperage 4}

                               :flow-rate       {:view      true
                                                 :unit      "t/h"
                                                 :value     0
                                                 :max-value 70}

                               :transition      {:status      "fixed"
                                                 :travel-time {:value 40
                                                               :unit  "s"}}

                               :potentiometer   {:connection  "connected"
                                                 :damper      {:unit   "byte"
                                                               :closed 16
                                                               :open   32752}

                                                 :calibration {:0   16
                                                               :100 32752}}

                               :init-sim-output {:damper     {:value 0}

                                                 :transition {:travel-time {:value 40}}}

                               :settings-view   false})

(def FEEDWATER-VALVE-PNEUMATIC {:mode            {:view  true
                                                  :value "auto"}

                                :damper          {:view     true
                                                  :unit     "%"
                                                  :value    0
                                                  :amperage 4}

                                :flow-rate       {:view      true
                                                  :unit      "t/h"
                                                  :value     0
                                                  :max-value 70}

                                :init-sim-output {:damper {:value 0}}

                                :settings-view   false})

(def FEEDWATER-PUMP {:mode            {:view  true
                                       :value "auto"}

                     :performance     {:view     true
                                       :unit     "%"
                                       :value    0
                                       :amperage 4}

                     :rotation        {:view      true
                                       :unit      "rpm"
                                       :value     0
                                       :max-value 1000}

                     :flow-rate       {:view      true
                                       :unit      "t/h"
                                       :value     0
                                       :max-value 70}

                     :threshold       {:on                40
                                       :off               60
                                       :forced-switchover 20}

                     :init-sim-output {:performance {:value 0}}

                     :settings-view   false})

(def FEEDWATER {:temperature   {:unit  "°C"
                                :value 103}

                :conductivity  {:unit  "µS/cm"
                                :value 500}

                :sludge-ratio  {:unit  "ratio"
                                :value 0.0003}

                :settings-view false})

(def LEVEL-CONTROLLER-CALIBRATION {:points           {:low       25
                                                      :high      32767
                                                      :real-high 32767}

                                   :points-by-boiler {:low  78.23376208
                                                      :high 97.86859}

                                   :probe-points     {:low  25
                                                      :high 32767}



                                   :cal-p            {:value        100
                                                      :next-value   100
                                                      :probe-value  100
                                                      :opt-from-sim 25}})

(def LEVEL-CONTROLLER-ALARM-POINTS {:high         {:value 80
                                                   :delay {:off 3 :on 0}}
                                    :high-warning {:value 60
                                                   :delay {:off 3 :on 0}}
                                    :low-warning  {:value 40
                                                   :delay {:off 3 :on 0}}
                                    :low          {:value 20
                                                   :delay {:off 3 :on 0}}})

(def LEVEL-CONTROLLER {:full-screen?         false
                       :switches             {1 false 2 false 3 false 4 false}
                       :settings-view        false
                       :mode                 "fill"
                       :points               LEVEL-CONTROLLER-ALARM-POINTS
                       :actuator-type        :electric-valve ; :electric-valve | :pump | :pneumatic-valve
                       :errors-extra-trigger []
                       :pi-controller        {}
                       :calibration          LEVEL-CONTROLLER-CALIBRATION
                       :urb                  {:op-time          {:value "17 d"
                                                                 :def   "10 d"}
                                              :errors           {:reading false
                                                                 :count   {:error 0
                                                                           :alarm 0}}
                                              :switching-cycles [233, 91, 334, 226]}})

(def COND-CONTROLLER {:full-screen?         false
                      :switches             {1 false 2 false 3 false 4 false}
                      :points               {:max 6000 :min 500}
                      :min-relay-fn         "blowdown"
                      :errors-extra-trigger []
                      :pi-controller        {}
                      :measuring-range      {:lower 0.5 :upper 6000 :s-out 6000}
                      :urb                  {:op-time          {:value "23 d"
                                                                :def   "8 d"}
                                             :errors           {:reading false
                                                                :count   {:error 0
                                                                          :alarm 0}}
                                             :switching-cycles [428, 388, 256, 275]}})

(def NRR-2-60 LEVEL-CONTROLLER)

(def NRR-2-60-3C LEVEL-CONTROLLER)

(def NRR-2-61 (merge LEVEL-CONTROLLER {:actuator-type :pump}))

(def NRR-2-61-3C (merge LEVEL-CONTROLLER {:actuator-type :pump}))

(def LRR-1-60 COND-CONTROLLER)

(def LRG-16-60 {:full-screen?     false
                :settings-view    false

                :correction       {:factor                 1
                                   :temperature-coeff      2.1
                                   :thermometer-connection "connected"}

                :correction-dirty {:factor            1
                                   :temperature-coeff 2.1}

                :output           {:unit  "µS/cm"
                                   :value 0}

                :urb              {:node-id   4
                                   :id        3
                                   :group-id  1
                                   :baud-rate 50
                                   :op-time   {:value "17 d"
                                               :def   "8 d"}
                                   :temp-amb  {:value 30
                                               :max   70}
                                   :errors    {:reading false
                                               :count   {:error 0
                                                         :alarm 0}}}

                :k-factor         3

                :limit-fn         {:value 5000
                                   :alarm "none"}           ;"none" | "warning" | "alarm"

                :s-out            {:value 6000
                                   :min   0.5}

                :filter           {:damping 1
                                   :on      true}

                :triggered-error  "none"
                :error-code       0})

(def LRG-16-61 (merge LRG-16-60 {:s-out {:value 7000
                                         :min   50}}))

(def URW-60 {:full-screen? false
             :switches     {1 false 2 false 3 false 4 false}
             :urb          {:op-time {:value "19 d"
                                      :def   "10 d"}
                            :errors  {:reading false}}})

(def URS-60 {:full-screen?                  false
             :switches                      {1 true 2 true 3 true 4 true 5 true 6 true 7 true 8 true 9 false 10 false}
             :channels                      {1 {:alarm    "none"
                                                :error    "none"
                                                :empty?   false
                                                :crowded? false}
                                             2 {:alarm    "none"
                                                :error    "none"
                                                :empty?   false
                                                :crowded? false}
                                             3 {:alarm    "none"
                                                :error    "none"
                                                :empty?   false
                                                :crowded? false}
                                             4 {:alarm    "none"
                                                :error    "none"
                                                :empty?   false
                                                :crowded? false}}
             :no-active-channel-connection? false
             :error-logs                    []
             :urb                           {:op-time {:value "17 d"
                                                       :def   "8 d"}
                                             :errors  {:reading false
                                                       :count   {:error 0
                                                                 :alarm 0}}}})

(def URS-61 {:full-screen?                  false
             :switches                      {1 true 2 true 3 false 4 false 5 false 6 false 7 false 8 false 9 false 10 false}
             :channels                      {5 {:alarm    "none"
                                                :error    "none"
                                                :empty?   false
                                                :crowded? false}
                                             6 {:alarm    "none"
                                                :error    "none"
                                                :empty?   false
                                                :crowded? false}
                                             7 {:alarm    "none"
                                                :error    "none"
                                                :empty?   false
                                                :crowded? false}
                                             8 {:alarm    "none"
                                                :error    "none"
                                                :empty?   false
                                                :crowded? false}}
             :no-active-channel-connection? false
             :error-logs                    []
             :urb                           {:op-time {:value "17 d"
                                                       :def   "8 d"}
                                             :errors  {:reading false
                                                       :count   {:error 0
                                                                 :alarm 0}}}})