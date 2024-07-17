(ns app.ui.kits.connect.URS-60.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [helix.hooks :refer [use-state]]
            [app.ui.shared.components.toolbar :as toolbar]))


(defnc URS-60-toolbar-panel []
  (let [show-toolbar (use-sub [:URS-60-show-toolbar])
        [val-1 set-val-1!] (use-state false)
        [val-2 set-val-2!] (use-state false)
        [val-3 set-val-3!] (use-state true)
        [val-4 set-val-4!] (use-state true)
        [val-5 set-val-5!] (use-state true)
        [val-6 set-val-6!] (use-state true)
        [val-7 set-val-7!] (use-state true)
        [val-8 set-val-8!] (use-state true)
        [val-9 set-val-9!] (use-state true)
        [val-10 set-val-10!] (use-state true)]
    (when show-toolbar
      (<>
        ($ toolbar/title {:x 85 :y 80 :fill "#efefef" :title "Limiter"})
        ($ toolbar/title {:x 85 :y 110 :fill "#bcbcbc" :title "URS 60"})

        ($ toolbar/btn-wrapper {:x 597 :y 54 :on-click (fn [])}
           ($ toolbar/btn-replace))

        ($ toolbar/btn-wrapper {:x 657 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/switch-panel {:x 707 :y 12}
           ($ toolbar/switch {:x 0 :value val-1 :on-change (fn [] (set-val-1! #(not %))) :legend 1 :inactive false})
           ($ toolbar/switch {:x 35 :value val-2 :on-change (fn [] (set-val-2! #(not %))) :legend 2 :inactive false})
           ($ toolbar/switch {:x 70 :value val-3 :on-change (fn [] (set-val-3! #(not %))) :legend 3 :inactive false})
           ($ toolbar/switch {:x 105 :value val-4 :on-change (fn [] (set-val-4! #(not %))) :legend 4 :inactive false})
           ($ toolbar/switch {:x 140 :value val-5 :on-change (fn [] (set-val-5! #(not %))) :legend 5 :inactive false})
           ($ toolbar/switch {:x 175 :value val-6 :on-change (fn [] (set-val-6! #(not %))) :legend 6 :inactive false})
           ($ toolbar/switch {:x 210 :value val-7 :on-change (fn [] (set-val-7! #(not %))) :legend 7 :inactive false})
           ($ toolbar/switch {:x 245 :value val-8 :on-change (fn [] (set-val-8! #(not %))) :legend 8 :inactive false})
           ($ toolbar/switch {:x 280 :value val-9 :on-change (fn [] (set-val-9! #(not %))) :legend 9 :inactive false})
           ($ toolbar/switch {:x 315 :value val-10 :on-change (fn [] (set-val-10! #(not %))) :legend 10 :inactive false}))

        ($ toolbar/btn-wrapper {:x 1064 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1114 :y 54 :on-click (fn [])}
           ($ toolbar/btn-full-screen))

        ($ toolbar/btn-wrapper {:x 1174 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:change-modal-info {:title "Limiter" :text "The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2…, LRG 1… and TRV 5. The data are transferred via ISO 11898 CAN bus using the CAN open protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: ■ Sensor alarms if the limits are exceeded ■ Fault indications on the occurrence of faults in electronic or mechanical parts ■ Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: ■ Fault in sensors (negative self-test, excessively high temperature in terminal box) ■ Fault in control unit (negative self-test) ■ Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."}])}
           ($ toolbar/btn-info))))))
