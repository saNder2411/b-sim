(ns app.ui.kits.connect.LRR-1-60.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.toolbar :as toolbar]))


(defnc LRR-1-60-toolbar-panel []
  (let [show-toolbar (use-sub [:LRR-1-60/show-toolbar])
        sim (use-sub [:sim])
        inactive (not= "stop" sim)
        full-screen (use-sub [:kit/data-by-path [:cond :controllers "LRR 1-60" :full-screen?]])
        switch-1 (use-sub [:kit/data-by-path [:cond :controllers "LRR 1-60" :switches 1]])
        switch-2 (use-sub [:kit/data-by-path [:cond :controllers "LRR 1-60" :switches 2]])
        switch-3 (use-sub [:kit/data-by-path [:cond :controllers "LRR 1-60" :switches 3]])
        switch-4 (use-sub [:kit/data-by-path [:cond :controllers "LRR 1-60" :switches 4]])]
    (when show-toolbar
      (<>
        ($ toolbar/title {:x 85 :y 80 :fill "#efefef" :title "Conductivity Controller"})
        ($ toolbar/title {:x 85 :y 110 :fill "#bcbcbc" :title "LRR 1-60"})

        ($ toolbar/btn-wrapper {:x 697 :y 54 :on-click (fn [])}
           ($ toolbar/btn-replace))

        ($ toolbar/btn-wrapper {:x 757 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 807 :y 54 :on-click (fn [])}
           ($ toolbar/btn-error))

        ($ toolbar/btn-wrapper {:x 867 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/switch-panel {:x 917 :y 12}
           ($ toolbar/switch {:x 0 :value switch-1 :on-change #(dispatch [:LRR-1-60/change [[:switches 1] (not switch-1)]]) :legend 1 :inactive inactive})
           ($ toolbar/switch {:x 35 :value switch-2 :on-change #(dispatch [:LRR-1-60/change [[:switches 2] (not switch-2)]]) :legend 2 :inactive inactive})
           ($ toolbar/switch {:x 70 :value switch-3 :on-change #(dispatch [:LRR-1-60/change [[:switches 3] (not switch-3)]]) :legend 3 :inactive inactive})
           ($ toolbar/switch {:x 105 :value switch-4 :on-change #(dispatch [:LRR-1-60/change [[:switches 4] (not switch-4)]]) :legend 4 :inactive inactive}))

        ($ toolbar/btn-wrapper {:x 1064 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1114 :y 54 :on-click #(dispatch [:LRR-1-60/change [[:full-screen?] (not full-screen)]])}
           ($ toolbar/btn-full-screen))

        ($ toolbar/btn-wrapper {:x 1174 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:modal-info/change {:title "Conductivity Controller" :text "The conductivity controller can be used in conjunction with LRG 16-60, LRG 16-61 and LRG 17- 60 conductivity electrodes as a conductivity controller in pressurised steam and hot-water plants and in condensate and feedwater tanks. The conductivity controller indicates when MAX or MIN conductivity has been reached, opens or closes a continuous blowdown valve and can actuate an intermittent blowdown valve."}])}
           ($ toolbar/btn-info))))))
