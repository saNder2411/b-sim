(ns app.connect.LRG-16-60.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.toolbar :as toolbar]))


(defnc LRG-16-60-toolbar-panel []
  (let [show-toolbar (use-sub [:LRG-16-60-show-toolbar])]
    (when show-toolbar
      (<>
        ($ toolbar/title {:x 85 :y 80 :fill "#efefef" :title "Conductivity Electrode"})
        ($ toolbar/title {:x 85 :y 110 :fill "#bcbcbc" :title "LRG 16-60"})

        ($ toolbar/btn-wrapper {:x 894 :y 54 :on-click (fn [])}
           ($ toolbar/btn-replace))

        ($ toolbar/btn-wrapper {:x 954 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1004 :y 54 :on-click (fn [])}
           ($ toolbar/btn-full-screen))

        ($ toolbar/btn-wrapper {:x 1064 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1114 :y 54 :on-click (fn [])}
           ($ toolbar/btn-settings))

        ($ toolbar/btn-wrapper {:x 1174 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:change-modal-info {:title "Conductivity Electrode" :text "LRG 1x-6x conductivity electrodes are used in combination with the URS 60/URS 61 safety control unit as a conductivity limiter and in combination with an LRR 1-60 control unit as a continuous blowdown regulator in steam boiler systems and hot-water plants."}])}
           ($ toolbar/btn-info))))))