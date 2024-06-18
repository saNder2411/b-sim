(ns app.connect.NRR-2-61-3C.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [helix.hooks :refer [use-state]]
            [app.shared.components.toolbar-title :refer [toolbar-title]]
            [app.shared.components.toolbar-btn-wrapper :refer [toolbar-btn-wrapper]]
            [app.shared.components.toolbar-btn-replace :refer [toolbar-btn-replace]]
            [app.shared.components.toolbar-btn-error :refer [toolbar-btn-error]]
            [app.shared.components.toolbar-btn-full-screen :refer [toolbar-btn-full-screen]]
            [app.shared.components.toolbar-btn-divider :refer [toolbar-btn-divider]]
            [app.shared.components.toolbar-btn-info :refer [toolbar-btn-info]]
            [app.shared.components.toolbar-switch-panel :refer [toolbar-switch-panel]]
            [app.shared.components.toolbar-switch :refer [toolbar-switch]]))


(defnc NRR-2-61-3C-toolbar-panel []
  (let [show-toolbar (use-sub [:NRR-2-61-3C-show-toolbar])
        [val-1 set-val-1!] (use-state false)
        [val-2 set-val-2!] (use-state false)
        [val-3 set-val-3!] (use-state false)
        [val-4 set-val-4!] (use-state false)]
    (when show-toolbar
      (<>
        ($ toolbar-title {:x 85 :y 80 :fill "#efefef" :title "Level Controller"})
        ($ toolbar-title {:x 85 :y 110 :fill "#bcbcbc" :title "NRR 2-61 3C"})

        ($ toolbar-btn-wrapper {:x 697 :y 54 :on-click (fn [])}
           ($ toolbar-btn-replace))

        ($ toolbar-btn-wrapper {:x 757 :y 54}
           ($ toolbar-btn-divider))

        ($ toolbar-btn-wrapper {:x 807 :y 54 :on-click (fn [])}
           ($ toolbar-btn-error))

        ($ toolbar-btn-wrapper {:x 867 :y 54}
           ($ toolbar-btn-divider))

        ($ toolbar-switch-panel {:x 917 :y 12}
           ($ toolbar-switch {:x 0 :value val-1 :on-change (fn [] (set-val-1! #(not %))) :legend 1 :inactive false})
           ($ toolbar-switch {:x 35 :value val-2 :on-change (fn [] (set-val-2! #(not %))) :legend 2 :inactive false})
           ($ toolbar-switch {:x 70 :value val-3 :on-change (fn [] (set-val-3! #(not %))) :legend 3 :inactive false})
           ($ toolbar-switch {:x 105 :value val-4 :on-change (fn [] (set-val-4! #(not %))) :legend 4 :inactive false}))

        ($ toolbar-btn-wrapper {:x 1064 :y 54}
           ($ toolbar-btn-divider))

        ($ toolbar-btn-wrapper {:x 1114 :y 54 :on-click (fn [])}
           ($ toolbar-btn-full-screen))

        ($ toolbar-btn-wrapper {:x 1174 :y 54}
           ($ toolbar-btn-divider))

        ($ toolbar-btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:change-modal-info {:title "Level Controller" :text "The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."}])}
           ($ toolbar-btn-info))))))
