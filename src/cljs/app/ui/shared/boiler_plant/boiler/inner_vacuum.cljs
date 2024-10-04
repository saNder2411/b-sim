(ns app.ui.shared.boiler-plant.boiler.inner-vacuum
  (:require [helix.core :refer [defnc <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]))

(defnc boiler-inner-vacuum []
  (let [water-level (use-sub [:kit/data-by-path [:boiler-plant :boiler :water-level :value]])
        top-height (if (> water-level 42.9)
                     (/ (* 185.86 (- water-level 42.9)) 57.1)
                     0)
        bottom-height (if (< water-level 6.8)
                        (- 22 (/ (* 22 (- 6.8 84)) 6.8))
                        22)
        bottom-rect-h (if (< (- 22 bottom-height) 0) 0 (- 22 bottom-height))]
    (<>
      (d/rect {:fill "url(#boiler-vacuum-top)"
               :x    413.71 :y 323.11 :width 668.49 :height (- 185.86 top-height)})
      (d/rect {:fill "url(#boiler-vacuum-bottom)" :transform "scale(-1)"
               :x    -1081.9 :y (+ -646.37 bottom-height) :width 667.17 :height bottom-rect-h}))))
