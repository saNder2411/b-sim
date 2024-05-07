(ns app.shared.boiler.level-cal-indicator
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]
            [cljs.pprint :refer [cl-format]]))

(defnc level-cal-indicator [{:keys [point-by-boiler-level w-level digit-level point-pos opacity fill]}]
  (let [y (+ -58 (* 324 (- 1 (/ point-by-boiler-level 100.0))))]

    (d/g {:transform (str "translate(0, " y ")") :opacity opacity}
         (d/polygon {:fill fill :points "885.2 382.19 892.5 379.8 892.5 384.3"})
         (d/polygon {:fill "none" :stroke fill :points "890,382.2 909,382.2"})
         (d/text {:fill fill :x 914 :y 386.1 :font-size "12px" :letter-spacing "0.025em"}
                 w-level
                 (d/tspan {:font-size "10px"} "% ")
                 (cl-format nil "~d" digit-level)
                 (d/tspan {:font-size "10px"} (str "d " point-pos))))))
