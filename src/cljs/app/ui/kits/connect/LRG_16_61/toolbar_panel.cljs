(ns app.ui.kits.connect.LRG-16-61.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.toolbar :as toolbar]))


(defnc LRG-16-61-toolbar-panel []
  (let [show-toolbar (use-sub [:LRG-16-61/show-toolbar])
        sim (use-sub [:sim])
        inactive (not= "stop" sim)]
    (when show-toolbar
      (<>
        ($ toolbar/title {:x 85 :y 80 :fill "#efefef" :title "Conductivity Electrode"})
        ($ toolbar/title {:x 85 :y 110 :fill "#bcbcbc" :title "LRG 16-61"})

        ($ toolbar/btn-wrapper {:x 894 :y 54 :on-click (fn []) :inactive inactive}
           ($ toolbar/btn-replace))

        ($ toolbar/btn-wrapper {:x 954 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1004 :y 54 :on-click #(dispatch [:LRG-16-61/change [[:full-screen?] true]])}
           ($ toolbar/btn-full-screen))

        ($ toolbar/btn-wrapper {:x 1064 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1114 :y 54 :on-click #(dispatch [:LRG-16-61/change [[:settings-view] true]])}
           ($ toolbar/btn-settings))

        ($ toolbar/btn-wrapper {:x 1174 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:modal-info/change {:title "Conductivity Electrode" :text "LRG 1x-6x conductivity electrodes are used in combination with the URS 60/URS 61 safety control unit as a conductivity limiter and in combination with an LRR 1-60 control unit as a continuous blowdown regulator in steam boiler systems and hot-water plants."}])}
           ($ toolbar/btn-info))))))
