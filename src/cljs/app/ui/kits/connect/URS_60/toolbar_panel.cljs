(ns app.ui.kits.connect.URS-60.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.toolbar :as toolbar]))


(defnc URS-60-toolbar-panel []
  (let [show-toolbar (use-sub [:URS-60-show-toolbar])
        sim (use-sub [:sim])
        inactive (not= "stopped" sim)
        full-screen? (use-sub [:kit-data-by-path [:low-limiter :controllers "URS 60" :full-screen?]])
        switch-1 (use-sub [:kit-data-by-path [:low-limiter :controllers "URS 60" :switches 1]])
        switch-2 (use-sub [:kit-data-by-path [:low-limiter :controllers "URS 60" :switches 2]])
        switch-3 (use-sub [:kit-data-by-path [:low-limiter :controllers "URS 60" :switches 3]])
        switch-4 (use-sub [:kit-data-by-path [:low-limiter :controllers "URS 60" :switches 4]])
        switch-5 (use-sub [:kit-data-by-path [:low-limiter :controllers "URS 60" :switches 5]])
        switch-6 (use-sub [:kit-data-by-path [:low-limiter :controllers "URS 60" :switches 6]])
        switch-7 (use-sub [:kit-data-by-path [:low-limiter :controllers "URS 60" :switches 7]])
        switch-8 (use-sub [:kit-data-by-path [:low-limiter :controllers "URS 60" :switches 8]])
        switch-9 (use-sub [:kit-data-by-path [:low-limiter :controllers "URS 60" :switches 9]])
        switch-10 (use-sub [:kit-data-by-path [:low-limiter :controllers "URS 60" :switches 10]])]
    (when show-toolbar
      (<>
        ($ toolbar/title {:x 85 :y 80 :fill "#efefef" :title "Limiter"})
        ($ toolbar/title {:x 85 :y 110 :fill "#bcbcbc" :title "URS 60"})

        ($ toolbar/btn-wrapper {:x 597 :y 54 :on-click (fn [])}
           ($ toolbar/btn-replace))

        ($ toolbar/btn-wrapper {:x 657 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/switch-panel {:x 707 :y 12}
           ($ toolbar/switch {:x 0 :value switch-1 :on-change #(dispatch [:change-URS-60 [[:switches 1] (not switch-1)]]) :legend 1 :inactive inactive})
           ($ toolbar/switch {:x 35 :value switch-2 :on-change #(dispatch [:change-URS-60 [[:switches 2] (not switch-2)]]) :legend 2 :inactive inactive})
           ($ toolbar/switch {:x 70 :value switch-3 :on-change #(dispatch [:change-URS-60 [[:switches 3] (not switch-3)]]) :legend 3 :inactive inactive})
           ($ toolbar/switch {:x 105 :value switch-4 :on-change #(dispatch [:change-URS-60 [[:switches 4] (not switch-4)]]) :legend 4 :inactive inactive})
           ($ toolbar/switch {:x 140 :value switch-5 :on-change #(dispatch [:change-URS-60 [[:switches 5] (not switch-5)]]) :legend 5 :inactive inactive})
           ($ toolbar/switch {:x 175 :value switch-6 :on-change #(dispatch [:change-URS-60 [[:switches 6] (not switch-6)]]) :legend 6 :inactive inactive})
           ($ toolbar/switch {:x 210 :value switch-7 :on-change #(dispatch [:change-URS-60 [[:switches 7] (not switch-7)]]) :legend 7 :inactive inactive})
           ($ toolbar/switch {:x 245 :value switch-8 :on-change #(dispatch [:change-URS-60 [[:switches 8] (not switch-8)]]) :legend 8 :inactive inactive})
           ($ toolbar/switch {:x 280 :value switch-9 :on-change #(dispatch [:change-URS-60 [[:switches 9] (not switch-9)]]) :legend 9 :inactive inactive})
           ($ toolbar/switch {:x 315 :value switch-10 :on-change #(dispatch [:change-URS-60 [[:switches 10] (not switch-10)]]) :legend 10 :inactive inactive}))

        ($ toolbar/btn-wrapper {:x 1064 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1114 :y 54 :on-click #(dispatch [:change-URS-60 [[:full-screen?] (not full-screen?)]])}
           ($ toolbar/btn-full-screen))

        ($ toolbar/btn-wrapper {:x 1174 :y 54}
           ($ toolbar/btn-divider))

        ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:change-modal-info {:title "Limiter" :text "The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2…, LRG 1… and TRV 5. The data are transferred via ISO 11898 CAN bus using the CAN open protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: ■ Sensor alarms if the limits are exceeded ■ Fault indications on the occurrence of faults in electronic or mechanical parts ■ Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: ■ Fault in sensors (negative self-test, excessively high temperature in terminal box) ■ Fault in control unit (negative self-test) ■ Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."}])}
           ($ toolbar/btn-info))))))
