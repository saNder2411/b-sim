(ns simulation.sim-step-test
  (:require [simulation.db :refer [db]]
            [simulation.thermodynamics :as thermodynamics]
            [simulation.boiler :as boiler]
            [simulation.burner :as burner]
            [simulation.feed-pi-controller :as f-pi-controller]
            [simulation.feed-valve :as f-valve]))

(defn sim-step! [db probe-level-%]
  (thermodynamics/sim-step! db)
  (boiler/sim-step! db)
  (burner/sim-step! db false)
  (f-pi-controller/sim-step! db probe-level-%)
  (f-valve/sim-step! db))

(comment
  (thermodynamics/init! db)
  (thermodynamics/sim-step! db)
  (boiler/sim-step! db)
  (burner/sim-step! db false)
  (f-pi-controller/sim-step! db 20)
  (f-valve/sim-step! db)
  (sim-step! db 20)

  )
