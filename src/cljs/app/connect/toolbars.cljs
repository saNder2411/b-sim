(ns app.connect.toolbars
  (:require [helix.core :refer [defnc $]]
            [app.shared.components.toolbar :refer [toolbar]]
            [app.shared.boiler-plant.boiler.toolbar-panel :refer [boiler-toolbar-panel]]
            [app.shared.boiler-plant.burner.toolbar-panel :refer [burner-toolbar-panel]]
            [app.shared.boiler-plant.valves.continuous.toolbar-panel :refer [valve-continuous-toolbar-panel]]
            [app.shared.boiler-plant.valves.sludge.toolbar-panel :refer [valve-sludge-toolbar-panel]]
            [app.shared.boiler-plant.valves.feedwater.toolbar-panel :refer [valve-feedwater-toolbar-panel]]
            [app.shared.boiler-plant.pumps.feedwater.toolbar-panel :refer [pump-feedwater-toolbar-panel]]))


(defnc toolbars []
  ($ toolbar
     ($ boiler-toolbar-panel)
     ($ burner-toolbar-panel)
     ($ valve-continuous-toolbar-panel)
     ($ valve-sludge-toolbar-panel)
     ($ valve-feedwater-toolbar-panel)
     ($ pump-feedwater-toolbar-panel)))
