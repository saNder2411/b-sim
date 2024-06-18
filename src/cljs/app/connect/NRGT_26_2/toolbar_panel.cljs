(ns app.connect.NRGT-26-2.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.toolbar-title :refer [toolbar-title]]
            [app.shared.components.toolbar-btn-wrapper :refer [toolbar-btn-wrapper]]
            [app.shared.components.toolbar-btn-replace :refer [toolbar-btn-replace]]
            [app.shared.components.toolbar-btn-full-screen :refer [toolbar-btn-full-screen]]
            [app.shared.components.toolbar-btn-divider :refer [toolbar-btn-divider]]
            [app.shared.components.toolbar-btn-info :refer [toolbar-btn-info]]))


(defnc NRGT-26-2-toolbar-panel []
  (let [show-toolbar (use-sub [:NRGT-26-2-show-toolbar])]
    (when show-toolbar
      (<>
        ($ toolbar-title {:x 85 :y 80 :fill "#efefef" :title "Level Transmitter"})
        ($ toolbar-title {:x 85 :y 110 :fill "#bcbcbc" :title "NRGT 26-2"})

        ($ toolbar-btn-wrapper {:x 1004 :y 54 :on-click (fn [])}
           ($ toolbar-btn-replace))

        ($ toolbar-btn-wrapper {:x 1064 :y 54}
           ($ toolbar-btn-divider))

        ($ toolbar-btn-wrapper {:x 1114 :y 54 :on-click (fn [])}
           ($ toolbar-btn-full-screen))

        ($ toolbar-btn-wrapper {:x 1174 :y 54}
           ($ toolbar-btn-divider))

        ($ toolbar-btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:change-modal-info {:title "Level Transmitter" :text "NRGT 26-2 level transmitters can be used to continually measure the water level in pressurised steam and hot-water plants, or in condensate and feedwater tanks. The calibrated measuring range from 0 % to 100 % constitutes the linear profile of the 4-20 mA current output. The transmitter’s secure 4-20 mA actual value output (SIL 2) can be used with a suitable level controller, as a water level controller with MIN/MAX alarm, for example."}])}
           ($ toolbar-btn-info))))))
