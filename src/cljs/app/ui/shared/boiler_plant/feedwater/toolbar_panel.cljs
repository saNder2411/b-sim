(ns app.ui.shared.boiler-plant.feedwater.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.toolbar :as toolbar]))


(defnc feedwater-toolbar-panel []
  (let [show-toolbar-panel (use-sub [:feedwater-show-toolbar-panel])
        sim (use-sub [:sim])]
    (when show-toolbar-panel
      (<>
        ($ toolbar/title {:x 85 :y 95 :fill "#efefef" :title "Feedwater"})

        ($ toolbar/btn-wrapper {:x 1114 :y 54 :inactive (not= "stopped" sim) :on-click #(dispatch [:change-feedwater [[:settings-view] true]])}
           ($ toolbar/btn-settings))

        ($ toolbar/btn-wrapper {:x 1174 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:change-modal-info {:title "Feedwater" :text "The feedwater is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."}])}
           ($ toolbar/btn-info))))))
