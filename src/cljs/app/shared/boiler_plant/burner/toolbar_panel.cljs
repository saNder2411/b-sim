(ns app.shared.boiler-plant.burner.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.toolbar :as toolbar]))


(defnc burner-toolbar-panel []
  (let [show-toolbar (use-sub [:burner-show-toolbar-panel])]
    (when show-toolbar
      (<>
         ($ toolbar/title {:x 85 :y 95 :fill "#efefef" :title "Burner"})

         ($ toolbar/btn-wrapper {:x 1114 :y 54 :on-click #(dispatch [:change-burner [[:settings-view] true]])}
            ($ toolbar/btn-settings))

         ($ toolbar/btn-wrapper {:x 1174 :y 54}
            ($ toolbar/btn-divider))

         ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:change-modal-info {:title "Burner" :text "The burner is a device where fuel and air are mixed in the correct proportion, blown into a combustion chamber and combusted forming a flame. The main function of the burner is to keep the pressure inside the boiler within a certain desired range."}])}
            ($ toolbar/btn-info))))))
