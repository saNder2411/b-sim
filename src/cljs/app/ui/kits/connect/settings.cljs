(ns app.ui.kits.connect.settings
  (:require [helix.core :refer [defnc <> $]]
            [app.ui.shared.boiler-plant.boiler.settings :refer [boiler-settings]]
            [app.ui.shared.boiler-plant.burner.settings :refer [burner-settings]]
            [app.ui.shared.boiler-plant.actuators.blowdown.continuous-valve.settings :refer [continuous-valve-settings]]
            [app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings :refer [sludge-valve-settings]]
            [app.ui.shared.boiler-plant.actuators.feed.valve.electric.settings :refer [feed-electric-valve-settings]]
            [app.ui.shared.boiler-plant.actuators.feed.valve.pneumatic.settings :refer [feed-pneumatic-valve-settings]]
            [app.ui.shared.boiler-plant.actuators.feed.pump.settings :refer [feed-pump-settings]]
            [app.ui.shared.boiler-plant.feedwater.settings :refer [feedwater-settings]]
            [app.ui.kits.connect.NRR-2-60.settings :refer [NRR-2-60-settings]]
            [app.ui.kits.connect.NRR-2-60-3C.settings :refer [NRR-2-60-3C-settings]]
            [app.ui.kits.connect.NRR-2-61.settings :refer [NRR-2-61-settings]]
            [app.ui.kits.connect.NRR-2-61-3C.settings :refer [NRR-2-61-3C-settings]]
            [app.ui.kits.connect.LRG-16-60.settings :refer [LRG-16-60-settings]]
            [app.ui.kits.connect.LRG-16-61.settings :refer [LRG-16-61-settings]]))

(defnc settings []
  (<>
    ($ boiler-settings)
    ($ burner-settings)
    ($ continuous-valve-settings)
    ($ sludge-valve-settings)
    ($ feed-electric-valve-settings)
    ($ feed-pneumatic-valve-settings)
    ($ feed-pump-settings)
    ($ feedwater-settings)
    ($ NRR-2-60-settings)
    ($ NRR-2-60-3C-settings)
    ($ NRR-2-61-settings)
    ($ NRR-2-61-3C-settings)
    ($ LRG-16-60-settings)
    ($ LRG-16-61-settings)))