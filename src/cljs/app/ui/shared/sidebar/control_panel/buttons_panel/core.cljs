(ns app.ui.shared.sidebar.control-panel.buttons-panel.core
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [app.ui.shared.sidebar.control-panel.buttons-panel.show-hide :refer [btn-show-hidde]]
            [app.ui.shared.sidebar.control-panel.buttons-panel.settings :refer [btn-settings]]
            [app.ui.shared.sidebar.control-panel.buttons-panel.reset :refer [btn-reset]]
            [app.ui.shared.sidebar.control-panel.buttons-panel.run :refer [btn-run]]
            [app.ui.shared.sidebar.control-panel.buttons-panel.defs :refer [buttons-defs]]))

(defnc buttons-panel []
  (d/g {:transform "translate(0,842)"}
       ($ buttons-defs)

       (d/rect {:x 0 :y 78 :width 561 :height 160 :fill "#eceef3"})

       ($ "image" {:width 573 :height 234 :href "assets/img/ctrl-pnl-mask.png"})

       ($ btn-show-hidde)

       ($ btn-settings)

       ($ btn-reset)

       ($ btn-run)))