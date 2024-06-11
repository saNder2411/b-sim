(ns app.shared.boiler-plant.burner.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub]]
            [app.shared.components.toolbar-title :refer [toolbar-title]]
            [app.shared.components.toolbar-btn-wrapper :refer [toolbar-btn-wrapper]]
            [app.shared.components.toolbar-btn-settings :refer [toolbar-btn-settings]]
            [app.shared.components.toolbar-btn-divider :refer [toolbar-btn-divider]]
            [app.shared.components.toolbar-btn-info :refer [toolbar-btn-info]]))


(defnc burner-toolbar-panel []
  (let [show-burner-toolbar (use-sub [:show-burner-toolbar-panel])]
    (when show-burner-toolbar
      (<>
         ($ toolbar-title {:x 85 :y 95 :fill "#efefef" :title "Burner"})

         ($ toolbar-btn-wrapper {:x 1110 :y 54 :on-click (fn [])}
            ($ toolbar-btn-settings))

         ($ toolbar-btn-wrapper {:x 1172 :y 54}
            ($ toolbar-btn-divider))

         ($ toolbar-btn-wrapper {:x 1224 :y 54}
            ($ toolbar-btn-info))))))
