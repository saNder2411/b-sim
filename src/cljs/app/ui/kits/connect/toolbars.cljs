(ns app.ui.kits.connect.toolbars
  (:require [helix.core :refer [defnc $]]
            [app.ui.shared.components.toolbar :refer [toolbar]]
            [app.ui.shared.boiler-plant.boiler.toolbar-panel :refer [boiler-toolbar-panel]]
            [app.ui.shared.boiler-plant.burner.toolbar-panel :refer [burner-toolbar-panel]]
            [app.ui.shared.boiler-plant.actuators.blowdown.continuous-valve.toolbar-panel :refer [continuous-valve-toolbar-panel]]
            [app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.toolbar-panel :refer [sludge-valve-toolbar-panel]]
            [app.ui.shared.boiler-plant.actuators.feed.valve.electric.toolbar-panel :refer [feed-electric-valve-toolbar-panel]]
            [app.ui.shared.boiler-plant.actuators.feed.valve.pneumatic.toolbar-panel :refer [feed-pneumatic-valve-toolbar-panel]]
            [app.ui.shared.boiler-plant.actuators.feed.pump.toolbar-panel :refer [feed-pump-toolbar-panel]]
            [app.ui.shared.boiler-plant.feedwater.toolbar-panel :refer [feedwater-toolbar-panel]]
            [app.ui.kits.connect.TRV-5-60.toolbar-panel :refer [TRV-5-60-toolbar-panel]]
            [app.ui.kits.connect.LRG-16-60.toolbar-panel :refer [LRG-16-60-toolbar-panel]]
            [app.ui.kits.connect.LRG-16-61.toolbar-panel :refer [LRG-16-61-toolbar-panel]]
            [app.ui.kits.connect.NRG-16-60-I.toolbar-panel :refer [NRG-16-60-I-toolbar-panel]]
            [app.ui.kits.connect.NRG-16-60-II.toolbar-panel :refer [NRG-16-60-II-toolbar-panel]]
            [app.ui.kits.connect.NRG-16-61.toolbar-panel :refer [NRG-16-61-toolbar-panel]]
            [app.ui.kits.connect.NRG-26-60.toolbar-panel :refer [NRG-26-60-toolbar-panel]]
            [app.ui.kits.connect.NRGT-26-2.toolbar-panel :refer [NRGT-26-2-toolbar-panel]]
            [app.ui.kits.connect.URW-60.toolbar-panel :refer [URW-60-toolbar-panel]]
            [app.ui.kits.connect.NRR-2-60.toolbar-panel :refer [NRR-2-60-toolbar-panel]]
            [app.ui.kits.connect.NRR-2-60-3C.toolbar-panel :refer [NRR-2-60-3C-toolbar-panel]]
            [app.ui.kits.connect.NRR-2-61.toolbar-panel :refer [NRR-2-61-toolbar-panel]]
            [app.ui.kits.connect.NRR-2-61-3C.toolbar-panel :refer [NRR-2-61-3C-toolbar-panel]]
            [app.ui.kits.connect.LRR-1-60.toolbar-panel :refer [LRR-1-60-toolbar-panel]]
            [app.ui.kits.connect.URS-61.toolbar-panel :refer [URS-61-toolbar-panel]]
            [app.ui.kits.connect.URS-60.toolbar-panel :refer [URS-60-toolbar-panel]]
            [app.ui.kits.connect.URB-60.toolbar-panel :refer [URB-60-toolbar-panel]]))


(defnc toolbars []
  ($ toolbar
     ($ boiler-toolbar-panel)
     ($ burner-toolbar-panel)
     ($ continuous-valve-toolbar-panel)
     ($ sludge-valve-toolbar-panel)
     ($ feed-electric-valve-toolbar-panel)
     ($ feed-pneumatic-valve-toolbar-panel)
     ($ feed-pump-toolbar-panel)
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
