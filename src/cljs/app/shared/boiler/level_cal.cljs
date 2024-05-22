(ns app.shared.boiler.level-cal
  (:require [helix.core :refer [defnc <> $]]
            [refx.alpha :refer [use-sub]]
            [app.shared.boiler.level-cal-indicator :refer [level-cal-indicator]]))

(defnc level-calibration []
  (let [{:keys [high-point-by-boiler low-point low-point-by-boiler
                next-high-point-by-boiler next-real-high-point real-high-point]} (use-sub [:NRR-2-60-calibration-level-cal-view])]
    (<>
      ($ level-cal-indicator {:point-by-boiler-level next-high-point-by-boiler
                              :w-level               100
                              :digit-level           next-real-high-point
                              :point-pos             "cal.h"
                              :opacity               0.5
                              :fill                  "#c83b44"})
      ($ level-cal-indicator {:point-by-boiler-level high-point-by-boiler
                              :w-level               100
                              :digit-level           real-high-point
                              :point-pos             "cal.h"
                              :opacity               1
                              :fill                  "#c83b44"})
      ($ level-cal-indicator {:point-by-boiler-level low-point-by-boiler
                              :w-level               0
                              :digit-level           low-point
                              :point-pos             "cal.l"
                              :opacity               1
                              :fill                  "#286bb7"}))))
