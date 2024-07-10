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

                       :op-position     5                   ;; %

                       :damper          {:view     true
                                         :unit     "%"
                                         :value    5
                                         :amperage 4}

                       :flow-rate       {:view      true
                                         :unit      "t/h"
                                         :value     3.5
                                         :max-value 35}

                       :transition      {:status      "fixed"
                                         :travel-time {:value 40
                                                       :unit  "s"}}

                       :potentiometer   {:connection  "connected"
                                         :damper      {:closed 16
                                                       :open   32752}

                                         :calibration {:0   16
                                                       :100 32752}}

                       :flushing        {:on       true
                                         :interval 1        ;;hours
                                         :duration 3}       ;; minutes

                       :init-sim-output {:damper     {:value 5}

                                         :transition {:travel-time {:value 40}}}

                       :settings-view   false})
