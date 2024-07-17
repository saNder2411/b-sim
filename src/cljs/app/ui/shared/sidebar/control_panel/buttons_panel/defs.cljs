(ns app.ui.shared.sidebar.control-panel.buttons-panel.defs
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]))

(defnc buttons-defs []
  (d/defs
    ($ "filter" {:id "btn-pnl-clr-filter" :filter-units "userSpaceOnUse" :color-interpolation-filters "sRGB"}
       ($ "feColorMatrix" {:values "-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"}))

    (d/mask {:id "btn-pnl-mask-0" :x 45 :y 76.311 :width 80 :height 66 :maskUnits "userSpaceOnUse"}
            (d/g {:class "btn-pnl-clr-filter"}
                 ($ "image" {:width 80 :height 66 :transform "translate(45 76.311)" :href "assets/img/ctrl-pnl-btn-0-mask..png"})))

    (d/mask {:id "btn-pnl-mask-1" :x 141 :y 76.311 :width 106 :height 113 :maskUnits "userSpaceOnUse"}
            (d/g {:class "btn-pnl-clr-filter"}
                 ($ "image" {:width 106 :height 113 :transform "translate(141 76.311)" :href "assets/img/ctrl-pnl-btn-1-mask.png"})))

    (d/mask {:id "btn-pnl-mask-2" :x 264 :y 76.311 :width 106 :height 113 :maskUnits "userSpaceOnUse"}
            (d/g {:class "btn-pnl-clr-filter"}
                 ($ "image" {:width 106 :height 113 :transform "translate(264 76.311)" :href "assets/img/ctrl-pnl-btn-1-mask.png"})))

    (d/mask {:id "btn-pnl-mask-3" :x 415 :y 76.311 :width 106 :height 113 :maskUnits "userSpaceOnUse"}
            (d/g {:class "btn-pnl-clr-filter"}
                 ($ "image" {:width 106 :height 113 :transform "translate(415 76.311)" :href "assets/img/ctrl-pnl-btn-1-mask.png"})))))