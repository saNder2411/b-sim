(ns app.ui.kits.connect.URW-60.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [helix.hooks :refer [use-state]]
            [app.ui.shared.components.toolbar :as toolbar]))


(defnc URW-60-toolbar-panel []
  (let [show-toolbar (use-sub [:URW-60-show-toolbar])
        [val-1 set-val-1!] (use-state false)
        [val-2 set-val-2!] (use-state false)
        [val-3 set-val-3!] (use-state false)
        [val-4 set-val-4!] (use-state false)]
    (when show-toolbar
      (<>
        ($ toolbar/title {:x 85 :y 80 :fill "#efefef" :title "Universal Converter"})
        ($ toolbar/title {:x 85 :y 110 :fill "#bcbcbc" :title "URW 60"})

        ($ toolbar/btn-wrapper {:x 807 :y 54 :on-click (fn [])}
           ($ toolbar/btn-replace))

        ($ toolbar/btn-wrapper {:x 867 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/switch-panel {:x 917 :y 12}
           ($ toolbar/switch {:x 0 :value val-1 :on-change (fn [] (set-val-1! #(not %))) :legend 1 :inactive false})
           ($ toolbar/switch {:x 35 :value val-2 :on-change (fn [] (set-val-2! #(not %))) :legend 2 :inactive false})
           ($ toolbar/switch {:x 70 :value val-3 :on-change (fn [] (set-val-3! #(not %))) :legend 3 :inactive false})
           ($ toolbar/switch {:x 105 :value val-4 :on-change (fn [] (set-val-4! #(not %))) :legend 4 :inactive false}))

        ($ toolbar/btn-wrapper {:x 1064 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1114 :y 54 :on-click (fn [])}
           ($ toolbar/btn-full-screen))

        ($ toolbar/btn-wrapper {:x 1174 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:change-modal-info {:title "Universal Converter" :text "The universal converter converts the analogue 4-20 mA signals from a connected level electrode into CAN bus telegrams. The data are transferred to an ISO 11898 CAN bus via the CAN open protocol. Function tests and failure diagnosis are performed using the URB 60 visual display and operating unit."}])}
           ($ toolbar/btn-info))))))
