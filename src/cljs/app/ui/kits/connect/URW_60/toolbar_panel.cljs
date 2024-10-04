(ns app.ui.kits.connect.URW-60.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.toolbar :as toolbar]))

(defnc URW-60-toolbar-panel []
  (let [show-toolbar (use-sub [:URW-60/show-toolbar])
        sim (use-sub [:sim])
        inactive (not= "stop" sim)
        full-screen (use-sub [:kit/data-by-path [:converter :controllers "URW 60" :full-screen?]])
        switch-1 (use-sub [:kit/data-by-path [:converter :controllers "URW 60" :switches 1]])
        switch-2 (use-sub [:kit/data-by-path [:converter :controllers "URW 60" :switches 2]])
        switch-3 (use-sub [:kit/data-by-path [:converter :controllers "URW 60" :switches 3]])
        switch-4 (use-sub [:kit/data-by-path [:converter :controllers "URW 60" :switches 4]])]
    (when show-toolbar
      (<>
        ($ toolbar/title {:x 85 :y 80 :fill "#efefef" :title "Universal Converter"})
        ($ toolbar/title {:x 85 :y 110 :fill "#bcbcbc" :title "URW 60"})

        ($ toolbar/btn-wrapper {:x 807 :y 54 :inactive inactive :on-click (fn []) }
           ($ toolbar/btn-replace))

        ($ toolbar/btn-wrapper {:x 867 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/switch-panel {:x 917 :y 12}
           ($ toolbar/switch {:x 0 :value switch-1 :on-change #(dispatch [:URW-60/change [[:switches 1] (not switch-1)]]) :legend 1 :inactive inactive})
           ($ toolbar/switch {:x 35 :value switch-2 :on-change #(dispatch [:URW-60/change [[:switches 2] (not switch-2)]]) :legend 2 :inactive inactive})
           ($ toolbar/switch {:x 70 :value switch-3 :on-change #(dispatch [:URW-60/change [[:switches 3] (not switch-3)]]) :legend 3 :inactive inactive})
           ($ toolbar/switch {:x 105 :value switch-4 :on-change #(dispatch [:URW-60/change [[:switches 4] (not switch-4)]]) :legend 4 :inactive inactive}))

        ($ toolbar/btn-wrapper {:x 1064 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1114 :y 54 :on-click #(dispatch [:URW-60/change [[:full-screen?] (not full-screen)]])}
           ($ toolbar/btn-full-screen))

        ($ toolbar/btn-wrapper {:x 1174 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:modal-info/change {:title "Universal Converter" :text "The universal converter converts the analogue 4-20 mA signals from a connected level electrode into CAN bus telegrams. The data are transferred to an ISO 11898 CAN bus via the CAN open protocol. Function tests and failure diagnosis are performed using the URB 60 visual display and operating unit."}])}
           ($ toolbar/btn-info))))))
