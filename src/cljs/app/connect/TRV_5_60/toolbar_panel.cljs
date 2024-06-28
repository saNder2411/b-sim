(ns app.connect.TRV-5-60.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.toolbar :as toolbar]))


(defnc TRV-5-60-toolbar-panel []
  (let [show-toolbar (use-sub [:TRV-5-60-show-toolbar])]
    (when show-toolbar
      (<>
         ($ toolbar/title {:x 85 :y 80 :fill "#efefef" :title "Temperature Sensor"})
         ($ toolbar/title {:x 85 :y 110 :fill "#bcbcbc" :title "TRV 5-60"})

         ($ toolbar/btn-wrapper {:x 1004 :y 54 :on-click (fn [])}
            ($ toolbar/btn-replace))

         ($ toolbar/btn-wrapper {:x 1064 :y 54}
            ($ toolbar/btn-divider))

         ($ toolbar/btn-wrapper {:x 1114 :y 54 :on-click (fn [])}
            ($ toolbar/btn-full-screen))

         ($ toolbar/btn-wrapper {:x 1174 :y 54}
            ($ toolbar/btn-divider))

         ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:change-modal-info {:title "Temperature Sensor" :text "The TRV 5-60 temperature transmitter has a dedicated TRG 5-6x temperature sensor, the readings of which are recorded and monitored redundantly. The actual temperature is displayed on the temperature transmitter itself, as are any system malfunctions that occur. Setting the limit value The temperature in the transmitter terminal box is continually monitored by a temperature sensor on the PCB. An automatic self-test cyclically monitors the safety and function of the temperature sensor and the measured value acquisition. The data are transferred to the URS 6x safety control unit as a data telegram via the CANopen protocol using a CAN bus to ISO 11898. These data telegrams contain the following information: ■ Actual temperature ■ Sensor alarm if the set “AL.Hi” limit is exceeded ■ Malfunction indications in the event of faults in the electronic unit ■ Excessive temperature in the transmitter terminal box."}])}
            ($ toolbar/btn-info))))))
