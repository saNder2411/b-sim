(ns app.connect.toolbars
  (:require [helix.core :refer [defnc $]]
            [app.shared.components.toolbar :refer [toolbar]]
            [app.shared.boiler-plant.boiler.toolbar-panel :refer [boiler-toolbar-panel]]
            [app.shared.boiler-plant.burner.toolbar-panel :refer [burner-toolbar-panel]]))


(defnc toolbars []
  ($ toolbar
     ($ boiler-toolbar-panel)
     ($ burner-toolbar-panel)))
