(ns app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.toolbar :as toolbar]))


(defnc sludge-valve-toolbar-panel []
  (let [show-toolbar-panel (use-sub [:sludge-valve-show-toolbar-panel])]
    (when show-toolbar-panel
      (<>
        ($ toolbar/title {:x 85 :y 95 :fill "#efefef" :title "Bottom Blowdown Valve"})

        ($ toolbar/btn-wrapper {:x 930 :y 54 :inactive true :on-click (fn [])}
           ($ toolbar/btn-valve-close))

        ($ toolbar/btn-wrapper {:x 1004 :y 54 :inactive true :on-click (fn [])}
           ($ toolbar/btn-valve-open))

        ($ toolbar/btn-wrapper {:x 1064 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1114 :y 54 :on-click #(dispatch [:change-sludge-valve [[:settings-view] true]])}
           ($ toolbar/btn-settings))

        ($ toolbar/btn-wrapper {:x 1174 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:change-modal-info {:title "Bottom Blowdown Valve"
                                                                                        :text  "The bottom blowdown valve is an actuator that blows down sludge accumulated on the bottom of the boiler."}])}
           ($ toolbar/btn-info))))))
