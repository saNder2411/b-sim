(ns app.connect.settings
  (:require [helix.core :refer [defnc <> $]]
            [app.shared.boiler-plant.boiler.settings :refer [boiler-settings]]
            [app.shared.boiler-plant.burner.settings :refer [burner-settings]]
            [app.shared.boiler-plant.valves.continuous.settings :refer [continuous-valve-settings]]
            [app.shared.boiler-plant.valves.sludge.settings :refer [sludge-valve-settings]]
            [app.shared.boiler-plant.valves.feedwater.settings :refer [feedwater-valve-settings]]
            [app.shared.boiler-plant.valves.feedwater-pn.settings :refer [feedwater-valve-pneumatic-settings]]
            [app.shared.boiler-plant.pumps.feedwater.settings :refer [feedwater-pump-settings]]
            [app.shared.boiler-plant.feedwater.settings :refer [feedwater-settings]]))

(defnc settings []
  (<>
    ($ boiler-settings)
    ($ burner-settings)
    ($ continuous-valve-settings)
    ($ sludge-valve-settings)
    ($ feedwater-valve-settings)
    ($ feedwater-valve-pneumatic-settings)
    ($ feedwater-pump-settings)
    ($ feedwater-settings)))