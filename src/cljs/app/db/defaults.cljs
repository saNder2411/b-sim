(ns app.db.defaults)

(def BOILER {:water-level   84
             :pressure      11
             :prev-pressure 11
             :conductivity  3000
             :temperature   100.5
             :sludge-mass   39.2
             :settings      {:view         false

                             :water-level  {:value 84
                                            :unit  "%"
                                            :view  true}

                             :pressure     {:value 11
                                            :unit  "bar"
                                            :view  true}

                             :conductivity {:value 3000
                                            :unit  "µS/cm"
                                            :view  true}

                             :temperature  {:value 100.5
                                            :unit  "°C"
                                            :view  true}

                             :sludge-mass  {:value 39.2
                                            :unit  "kg"
                                            :max   80}

                             :volume       {:value 55
                                            :unit  "m³"}}})

(def BURNER {:mode             "auto"
             :status           "on"
             :power            0
             :fuel-consumption 0
             :settings         {:view             false

                                :mode             {:value "auto"
                                                   :view  true}

                                :status           {:value "on"
                                                   :unit  "on/off"
                                                   :view  true}

                                :power            {:unit "kW"
                                                   :view true
                                                   :max  {:value 25000
                                                          :unit  "kW"}}


                                :fuel-consumption {:unit  "nm³/s"
                                                   :view  true
                                                   :coeff {:value 0.083
                                                           :unit  "nm³/kW*h"}}

                                :pressure         {:unit  "bar"
                                                   :value {:on 11.5 :off 12.5}}

                                :heat-transfer    {:value 0.9
                                                   :unit  "kJ/kW*s"}}})
