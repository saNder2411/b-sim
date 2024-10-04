(ns app.ui.shared.boiler-plant.actuators.blowdown.continuous-valve.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.toolbar :as toolbar]
            [app.ui.shared.sidebar.control-panel.slider.core :refer [slider]]))


(defnc continuous-valve-toolbar-panel []
  (let [show-toolbar-panel (use-sub [:continuous-valve/show-toolbar-panel])]
    (when show-toolbar-panel
      (<>
        ($ toolbar/title {:x 85 :y 95 :fill "#efefef" :title "Continuous Blowdown Valve"})

        ($ slider {:x         719
                   :y         74
                   :z         0.9
                   :max-val   100
                   :v-%       0
                   :next-v-%  0
                   :active    false
                   :value-box {:x 70 :y 0 :width 24 :fraction 0 :unit "%" :fill "transparent"}})

        ($ toolbar/btn-wrapper {:x 1064 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1114 :y 54 :on-click #(dispatch [:continuous-valve/change [[:settings-view] true]])}
           ($ toolbar/btn-settings))

        ($ toolbar/btn-wrapper {:x 1174 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:modal-info/change {:title "Continuous Blowdown Valve" :text "The continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."}])}
           ($ toolbar/btn-info))))))
