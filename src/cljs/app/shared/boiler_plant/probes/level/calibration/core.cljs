(ns app.shared.boiler-plant.probes.level.calibration.core
  (:require [helix.core :refer [defnc <> $]]
            [refx.alpha :refer [use-sub]]
            [app.shared.boiler-plant.probes.level.calibration.indicator :refer [level-cal-indicator]]))

(defnc probe-level-calibration []
  (let [subs (use-sub [:level-probe-calibration-boiler-view-subs])
        {:keys [points points-by-boiler]} (use-sub [subs])]
    (<>
      ($ level-cal-indicator {:point-by-boiler-level (:next-high points-by-boiler)
                              :water-level           100
                              :digit-level           (:next-real-high points)
                              :point-pos             "cal.h"
                              :opacity               0.5
                              :fill                  "#c83b44"})
      ($ level-cal-indicator {:point-by-boiler-level (:high points-by-boiler)
                              :water-level           100
                              :digit-level           (:real-high points)
                              :point-pos             "cal.h"
                              :opacity               1
                              :fill                  "#c83b44"})
      ($ level-cal-indicator {:point-by-boiler-level (:low points-by-boiler)
                              :water-level           0
                              :digit-level           (:low points)
                              :point-pos             "cal.l"
                              :opacity               1
                              :fill                  "#286bb7"}))))
