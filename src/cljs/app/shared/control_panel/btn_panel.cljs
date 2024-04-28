(ns app.shared.control-panel.btn-panel
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [app.shared.control-panel.btn-panel-show-hide :refer [show-hidde-btn]]
            [app.shared.control-panel.btn-panel-settings :refer [settings-btn]]
            [app.shared.control-panel.btn-panel-reset :refer [reset-btn]]
            [app.shared.control-panel.btn-panel-run :refer [run-btn]]))

(defnc buttons-panel []
  (d/svg {:style {:width "29.8%" :top "78%" :left "0%"} :viewBox "0 0 573 434"}
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
                        ($ "image" {:width 106 :height 113 :transform "translate(415 76.311)" :href "assets/img/ctrl-pnl-btn-1-mask.png"}))))

         (d/rect {:y 78 :width 561.009 :height 160 :fill "#dee3ed"})

         ($ "image" {:width 573 :height 234 :href "assets/img/ctrl-pnl-mask.png"})

         ($ show-hidde-btn)

         ($ settings-btn)

         ($ reset-btn)

         ($ run-btn)))