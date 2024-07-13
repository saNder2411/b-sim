(ns app.db.defaults)

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

(def FEEDWATER-VALVE {:mode            {:view  true
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
