(ns app.ui.kits.connect.NRR-2-60.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.toolbar :as toolbar]))


(defnc NRR-2-60-toolbar-panel []
  (let [show-toolbar (use-sub [:NRR-2-60/show-toolbar])
        sim (use-sub [:sim])
        inactive (not= "stop" sim)
        full-screen (use-sub [:kit/data-by-path [:level :controllers "NRR 2-60" :full-screen?]])
        switch-1 (use-sub [:kit/data-by-path [:level :controllers "NRR 2-60" :switches 1]])
        switch-2 (use-sub [:kit/data-by-path [:level :controllers "NRR 2-60" :switches 2]])
        switch-3 (use-sub [:kit/data-by-path [:level :controllers "NRR 2-60" :switches 3]])
        switch-4 (use-sub [:kit/data-by-path [:level :controllers "NRR 2-60" :switches 4]])]
    (when show-toolbar
      (<>
        ($ toolbar/title {:x 85 :y 80 :fill "#efefef" :title "Level Controller"})
        ($ toolbar/title {:x 85 :y 110 :fill "#bcbcbc" :title "NRR 2-60"})

        ($ toolbar/btn-wrapper {:x 588 :y 54 :inactive inactive :on-click (fn [])}
           ($ toolbar/btn-replace))

        ($ toolbar/btn-wrapper {:x 648 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 698 :y 54 :inactive (not inactive) :on-click (fn [])}
           ($ toolbar/btn-error))

        ($ toolbar/btn-wrapper {:x 758 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/switch-panel {:x 808 :y 12}
           ($ toolbar/switch {:x 0 :value switch-1 :on-change #(dispatch [:NRR-2-60/change [[:switches 1] (not switch-1)]]) :legend 1 :inactive inactive})
           ($ toolbar/switch {:x 35 :value switch-2 :on-change #(dispatch [:NRR-2-60/change [[:switches 2] (not switch-2)]]) :legend 2 :inactive inactive})
           ($ toolbar/switch {:x 70 :value switch-3 :on-change #(dispatch [:NRR-2-60/change [[:switches 3] (not switch-3)]]) :legend 3 :inactive inactive})
           ($ toolbar/switch {:x 105 :value switch-4 :on-change #(dispatch [:NRR-2-60/change [[:switches 4] (not switch-4)]]) :legend 4 :inactive inactive}))

        ($ toolbar/btn-wrapper {:x 954 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1004 :y 54 :on-click #(dispatch [:NRR-2-60/change [[:full-screen?] (not full-screen)]])}
           ($ toolbar/btn-full-screen))

        ($ toolbar/btn-wrapper {:x 1064 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1114 :y 54 :inactive inactive :on-click #(dispatch [:NRR-2-60/change [[:settings-view] true]])}
           ($ toolbar/btn-settings))

        ($ toolbar/btn-wrapper {:x 1174 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:modal-info/change {:title "Level Controller" :text "The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."}])}
           ($ toolbar/btn-info))))))
