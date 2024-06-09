(ns app.shared.boiler-plant.core
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [app.shared.boiler-plant.boiler.core :refer [boiler]]
            [app.shared.boiler-plant.burner.core :refer [burner]]
            [app.shared.boiler-plant.valves.sludge.core :refer [valve-sludge]]
            [app.shared.boiler-plant.valves.continuous.core :refer [valve-continuous]]
            [app.shared.boiler-plant.valves.feedwater.core :refer [valve-feedwater]]
            [app.shared.boiler-plant.pumps.feedwater.core :refer [pump-feedwater]]
            [app.shared.boiler-plant.probes.temperature.core :refer [probe-temperature]]
            [app.shared.boiler-plant.probes.cond.core :refer [probe-cond]]
            [app.shared.boiler-plant.probes.level.core :refer [probe-level]]
            [app.shared.boiler-plant.probes.level.calibration.core :refer [probe-level-calibration]]))


(defnc boiler-plant []
  (d/svg {:style {:width "68.3%" :left "28.73%" :top "7.15%"} :viewBox "0 0 1311.4 832.68"}
         ($ boiler)
         ($ burner)
         ($ valve-sludge)
         ($ valve-continuous)
         ($ valve-feedwater)
         ($ pump-feedwater)
         ($ probe-temperature)
         ($ probe-cond)
         ($ probe-level {:x 724 :hotspot-id "level-low-probe-1"})
         ($ probe-level {:x 767 :hotspot-id "level-high-probe"})
         ($ probe-level {:x 816 :hotspot-id "level-low-probe-2"})
         ($ probe-level {:x 859 :hotspot-id "level-probe"})
         ($ probe-level-calibration)))
