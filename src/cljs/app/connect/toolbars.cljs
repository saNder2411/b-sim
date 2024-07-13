(ns app.connect.toolbars
  (:require [helix.core :refer [defnc $]]
            [app.shared.components.toolbar :refer [toolbar]]
            [app.shared.boiler-plant.boiler.toolbar-panel :refer [boiler-toolbar-panel]]
            [app.shared.boiler-plant.burner.toolbar-panel :refer [burner-toolbar-panel]]
            [app.shared.boiler-plant.valves.continuous.toolbar-panel :refer [valve-continuous-toolbar-panel]]
            [app.shared.boiler-plant.valves.sludge.toolbar-panel :refer [valve-sludge-toolbar-panel]]
            [app.shared.boiler-plant.valves.feedwater.toolbar-panel :refer [valve-feedwater-toolbar-panel]]
            [app.shared.boiler-plant.valves.feedwater-pn.toolbar-panel :refer [valve-feedwater-pneumatic-toolbar-panel]]
            [app.shared.boiler-plant.pumps.feedwater.toolbar-panel :refer [pump-feedwater-toolbar-panel]]
            [app.shared.boiler-plant.feedwater.toolbar-panel :refer [feedwater-toolbar-panel]]
            [app.connect.TRV-5-60.toolbar-panel :refer [TRV-5-60-toolbar-panel]]
            [app.connect.LRG-16-60.toolbar-panel :refer [LRG-16-60-toolbar-panel]]
            [app.connect.LRG-16-61.toolbar-panel :refer [LRG-16-61-toolbar-panel]]
            [app.connect.NRG-16-60-I.toolbar-panel :refer [NRG-16-60-I-toolbar-panel]]
            [app.connect.NRG-16-60-II.toolbar-panel :refer [NRG-16-60-II-toolbar-panel]]
            [app.connect.NRG-16-61.toolbar-panel :refer [NRG-16-61-toolbar-panel]]
            [app.connect.NRG-26-60.toolbar-panel :refer [NRG-26-60-toolbar-panel]]
            [app.connect.NRGT-26-2.toolbar-panel :refer [NRGT-26-2-toolbar-panel]]
            [app.connect.URW-60.toolbar-panel :refer [URW-60-toolbar-panel]]
            [app.connect.NRR-2-60.toolbar-panel :refer [NRR-2-60-toolbar-panel]]
            [app.connect.NRR-2-60-3C.toolbar-panel :refer [NRR-2-60-3C-toolbar-panel]]
            [app.connect.NRR-2-61.toolbar-panel :refer [NRR-2-61-toolbar-panel]]
            [app.connect.NRR-2-61-3C.toolbar-panel :refer [NRR-2-61-3C-toolbar-panel]]
            [app.connect.LRR-1-60.toolbar-panel :refer [LRR-1-60-toolbar-panel]]
            [app.connect.URS-61.toolbar-panel :refer [URS-61-toolbar-panel]]
            [app.connect.URS-60.toolbar-panel :refer [URS-60-toolbar-panel]]
            [app.connect.URB-60.toolbar-panel :refer [URB-60-toolbar-panel]]))


(defnc toolbars []
  ($ toolbar
     ($ boiler-toolbar-panel)
     ($ burner-toolbar-panel)
     ($ valve-continuous-toolbar-panel)
     ($ valve-sludge-toolbar-panel)
     ($ valve-feedwater-toolbar-panel)
     ($ valve-feedwater-pneumatic-toolbar-panel)
     ($ pump-feedwater-toolbar-panel)
     ($ feedwater-toolbar-panel)
     ($ TRV-5-60-toolbar-panel)
     ($ LRG-16-60-toolbar-panel)
     ($ LRG-16-61-toolbar-panel)
     ($ NRG-16-60-I-toolbar-panel)
     ($ NRG-16-60-II-toolbar-panel)
     ($ NRG-16-61-toolbar-panel)
     ($ NRG-26-60-toolbar-panel)
     ($ NRGT-26-2-toolbar-panel)
     ($ URW-60-toolbar-panel)
     ($ NRR-2-60-toolbar-panel)
     ($ NRR-2-60-3C-toolbar-panel)
     ($ NRR-2-61-toolbar-panel)
     ($ NRR-2-61-3C-toolbar-panel)
     ($ LRR-1-60-toolbar-panel)
     ($ URS-61-toolbar-panel)
     ($ URS-60-toolbar-panel)
     ($ URB-60-toolbar-panel)))
