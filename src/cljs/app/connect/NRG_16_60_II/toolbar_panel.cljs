(ns app.connect.NRG-16-60-II.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.toolbar-title :refer [toolbar-title]]
            [app.shared.components.toolbar-btn-wrapper :refer [toolbar-btn-wrapper]]
            [app.shared.components.toolbar-btn-replace :refer [toolbar-btn-replace]]
            [app.shared.components.toolbar-btn-full-screen :refer [toolbar-btn-full-screen]]
            [app.shared.components.toolbar-btn-divider :refer [toolbar-btn-divider]]
            [app.shared.components.toolbar-btn-error :refer [toolbar-btn-error]]
            [app.shared.components.toolbar-btn-info :refer [toolbar-btn-info]]))


(defnc NRG-16-60-II-toolbar-panel []
  (let [show-toolbar (use-sub [:NRG-16-60-II-show-toolbar])]
    (when show-toolbar
      (<>
        ($ toolbar-title {:x 85 :y 80 :fill "#efefef" :title "Low Water Level Electrode"})
        ($ toolbar-title {:x 85 :y 110 :fill "#bcbcbc" :title "NRG 16-60"})

        ($ toolbar-btn-wrapper {:x 894 :y 54 :on-click (fn [])}
           ($ toolbar-btn-replace))

        ($ toolbar-btn-wrapper {:x 954 :y 54}
           ($ toolbar-btn-divider))

        ($ toolbar-btn-wrapper {:x 1004 :y 54 :on-click (fn [])}
           ($ toolbar-btn-error))

        ($ toolbar-btn-wrapper {:x 1064 :y 54}
           ($ toolbar-btn-divider))

        ($ toolbar-btn-wrapper {:x 1114 :y 54 :on-click (fn [])}
           ($ toolbar-btn-full-screen))

        ($ toolbar-btn-wrapper {:x 1174 :y 54}
           ($ toolbar-btn-divider))

        ($ toolbar-btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:change-modal-info {:title "Low Water Level Electrode" :text "When the water drops below the minimum level, the level electrode is no longer immersed, and the URS 60 / URS 61 safety control unit triggers an alarm. This “Low Water (LW)” switchpoint is determined by the length of the electrode extension. The level electrode monitors itself using the principle of conductive measurement. This means that a leaking or contaminated electrode insulator and/or a fault in the electrical connection also trigger an alarm. The level electrode is installed inside pressurised steam systems, tanks or feed lines in pressurised hot-water plants. A protective tube provided on site keeps it functioning reliably (see page 31 “Installation examples”). An NRG 1x-60 level electrode can be installed in a protective tube or level pot together with an NRG 1x-61 level electrode or continuous GESTRA NRG 26-60 level electrode. If a level electrode is installed in a lockable level pot outside the boiler, the connecting pipes must be flushed regularly. An SRL 6-60 monitoring unit is additionally required to monitor the flushing times and flushing process. If the steam pipe is ≥ 40 mm and the water pipe is ≥ 100mm, installation is regarded as internal. In this case, upstream monitoring of flushing processes is not required. In total, two NRG 1x-60 level electrodes can be operated in conjunction with a URS 60 / URS 61 safety control unit as a water level limiter system. An automatic self-test cyclically monitors the safety and function of the level electrode and measured value recorder. The data are transferred to the URS 60 / URS 61 safety control unit in the form of a Black Channel data telegram using the CANopen protocol via a CAN bus to ISO 11898, and saved there. These data telegrams contain the following information: ■ Alarm indications from the level electrode if water drops below the minimum level ■ Fault indications in the event of faults in electronic or mechanical parts ■ Excessive temperature in the level electrode terminal box."}])}
           ($ toolbar-btn-info))))))
