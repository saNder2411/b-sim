(ns app.shared.boiler-plant.burner.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.toolbar-title :refer [toolbar-title]]
            [app.shared.components.toolbar-btn-wrapper :refer [toolbar-btn-wrapper]]
            [app.shared.components.toolbar-btn-settings :refer [toolbar-btn-settings]]
            [app.shared.components.toolbar-btn-divider :refer [toolbar-btn-divider]]
            [app.shared.components.toolbar-btn-info :refer [toolbar-btn-info]]))


(defnc burner-toolbar-panel []
  (let [show-toolbar (use-sub [:burner-show-toolbar-panel])]
    (when show-toolbar
      (<>
         ($ toolbar-title {:x 85 :y 95 :fill "#efefef" :title "Burner"})

         ($ toolbar-btn-wrapper {:x 1114 :y 54 :on-click (fn [])}
            ($ toolbar-btn-settings))

         ($ toolbar-btn-wrapper {:x 1174 :y 54}
            ($ toolbar-btn-divider))

         ($ toolbar-btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:change-modal-info {:title "Burner" :text "The burner is a device where fuel and air are mixed in the correct proportion, blown into a combustion chamber and combusted forming a flame. The main function of the burner is to keep the pressure inside the boiler within a certain desired range."}])}
            ($ toolbar-btn-info))))))
