(ns app.ui.shared.boiler-plant.actuators.feed.pump.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.toolbar :as toolbar]))


(defnc feed-pump-toolbar-panel []
  (let [show-toolbar-panel (use-sub [:feed-pump/show-toolbar-panel])]
    (when show-toolbar-panel
      (<>
         ($ toolbar/title {:x 85 :y 95 :fill "#efefef" :title "Feedwater Pump"})

         ($ toolbar/btn-wrapper {:x 930 :y 54 :inactive true :on-click (fn [])}
            ($ toolbar/btn-valve-close))

         ($ toolbar/btn-wrapper {:x 1004 :y 54 :on-click (fn [])}
            ($ toolbar/btn-valve-open))

         ($ toolbar/btn-wrapper {:x 1064 :y 54}
            ($ toolbar/btn-divider))

         ($ toolbar/btn-wrapper {:x 1114 :y 54 :on-click #(dispatch [:feed-pump/change [[:settings-view] true]])}
            ($ toolbar/btn-settings))

         ($ toolbar/btn-wrapper {:x 1174 :y 54}
            ($ toolbar/btn-divider))

         ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:modal-info/change {:title "Feedwater Pump" :text "The feedwater pump is an actuator that pumps water into the boiler to keep the water level at the desired value."}])}
            ($ toolbar/btn-info))))))
