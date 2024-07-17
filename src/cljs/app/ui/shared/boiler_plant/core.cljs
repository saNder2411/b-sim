(ns app.ui.shared.boiler-plant.core
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [app.ui.shared.boiler-plant.boiler.core :refer [boiler]]
            [app.ui.shared.boiler-plant.burner.core :refer [burner]]
            [app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.core :refer [sludge-valve]]
            [app.ui.shared.boiler-plant.actuators.blowdown.continuous-valve.core :refer [continuous-valve]]
            [app.ui.shared.boiler-plant.actuators.feed.valve.core :refer [feed-valve]]
            [app.ui.shared.boiler-plant.actuators.feed.pump.core :refer [feed-pump]]
            [app.ui.shared.boiler-plant.probes.temperature.core :refer [temperature-probe]]
            [app.ui.shared.boiler-plant.probes.cond.core :refer [cond-probe]]
            [app.ui.shared.boiler-plant.probes.level.core :refer [level-probe]]
            [app.ui.shared.boiler-plant.probes.level.calibration.core :refer [level-calibration]]))


(defnc boiler-plant []
  (d/svg {:style {:width "68.3%" :left "28.73%" :top "7.15%"} :viewBox "0 0 1311.4 832.68"}
         ($ boiler)
         ($ burner)
         ($ sludge-valve)
         ($ continuous-valve)
         ($ feed-valve)
         ($ feed-pump)
         ($ temperature-probe)
         ($ cond-probe)
         ($ level-probe {:x 724 :hotspot-id "low-level-probe-I"})
         ($ level-probe {:x 767 :hotspot-id "high-level-probe"})
         ($ level-probe {:x 816 :hotspot-id "low-level-probe-II"})
         ($ level-probe {:x 859 :hotspot-id "level-probe"})
         ($ level-calibration)))
