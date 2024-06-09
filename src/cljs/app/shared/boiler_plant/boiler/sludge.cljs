(ns app.shared.boiler-plant.boiler.sludge
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]))


(defnc boiler-sludge []
  (let [sludge-svg-height (use-sub [:sludge-svg-height])]
    (d/rect {:fill "#8c492f" :style {:transform-origin "center" :transform "rotate(180deg)"}
             :x    229.12 :y 186.82 :width 667.75 :height sludge-svg-height})))
