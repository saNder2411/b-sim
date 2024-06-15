(ns app.shared.boiler-plant.pumps.feedwater.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub]]
            [app.shared.components.toolbar-title :refer [toolbar-title]]
            [app.shared.components.toolbar-btn-wrapper :refer [toolbar-btn-wrapper]]
            [app.shared.components.toolbar-btn-settings :refer [toolbar-btn-settings]]
            [app.shared.components.toolbar-btn-divider :refer [toolbar-btn-divider]]
            [app.shared.components.toolbar-btn-info :refer [toolbar-btn-info]]
            [app.shared.components.toolbar-btn-valve-open :refer [toolbar-btn-valve-open]]
            [app.shared.components.toolbar-btn-valve-close :refer [toolbar-btn-valve-close]]))


(defnc pump-feedwater-toolbar-panel []
  (let [show-feedwater-pump-toolbar-panel (use-sub [:show-feedwater-pump-toolbar-panel])]
    (when show-feedwater-pump-toolbar-panel
      (<>
         ($ toolbar-title {:x 85 :y 95 :fill "#efefef" :title "Feedwater Pump"})

         ($ toolbar-btn-wrapper {:x 920 :y 54 :inactive true :on-click (fn [])}
            ($ toolbar-btn-valve-close))

         ($ toolbar-btn-wrapper {:x 999 :y 54 :on-click (fn [])}
            ($ toolbar-btn-valve-open))

         ($ toolbar-btn-wrapper {:x 1059 :y 54}
            ($ toolbar-btn-divider))

         ($ toolbar-btn-wrapper {:x 1110 :y 54 :on-click (fn [])}
            ($ toolbar-btn-settings))

         ($ toolbar-btn-wrapper {:x 1172 :y 54}
            ($ toolbar-btn-divider))

         ($ toolbar-btn-wrapper {:x 1224 :y 54}
            ($ toolbar-btn-info))))))
