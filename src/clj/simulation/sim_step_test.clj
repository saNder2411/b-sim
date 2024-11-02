(ns simulation.sim-step-test
  (:require [simulation.db :refer [db]]
            [simulation.feedwater :as feedwater]
            [simulation.thermodynamics :as thermodynamics]
            [simulation.boiler :as boiler]
            [simulation.burner :as burner]
            [simulation.level-probe :as level-probe]
            [simulation.feed-pi-controller :as f-pi-controller]
            [simulation.feed-valve :as f-valve]))

(defn sim-step! [db-atom]
  (thermodynamics/sim-step! db-atom)
  (boiler/sim-step! db-atom)
  (burner/sim-step! db-atom false)
  (level-probe/sim-step! db-atom)
  (f-pi-controller/sim-step! db-atom)
  (f-valve/sim-step! db-atom))

(defn sim-init! [db-atom]
  (feedwater/init! db-atom {:conductivity 500
                            :temperature  103
                            :sludge-ratio 0.0003})
  (boiler/init! db-atom {:steam-th     17.5
                         :pressure     11
                         :volume       {:value 53.30702602097426 :max 55}
                         :sludge       {:value 39.2 :max 80}
                         :conductivity 3000})
  (burner/init! db-atom {:state         "off"
                         :mode          "auto"
                         :operation     "normal"
                         :switch-points {:off 12.5 :on 11.5}
                         :max-power     25000
                         :fuel-coeff    0.083
                         :heat-coeff    0.9})
  (thermodynamics/init! db-atom)
  (level-probe/init! db-atom {:high-point-by-cal-p 8191.75 :cal-p 25 :low-point 25})
  (f-pi-controller/init! db-atom {:mode                 "auto"
                                  :direction            "fill"
                                  :target-point         50
                                  :c-elements           1
                                  :k-factor             0.5
                                  :proportional-band    20
                                  :integral-action-time 0
                                  :n-zone               5
                                  :x-next               0})
  (f-valve/init! db-atom {:max-flow-rate 70
                          :type          :electric-valve
                          :damper        0
                          :travel-time   40
                          :potentiometer {:open 32752 :close 16}}))

(comment
  (sim-init! db)
  (sim-step! db)
  )
