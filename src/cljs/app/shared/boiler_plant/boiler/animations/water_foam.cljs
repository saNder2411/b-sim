(ns app.shared.boiler-plant.boiler.animations.water-foam
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub]]
            [helix.dom :as d]))

(defnc animation-water-foam []
  (let [sim (use-sub [:sim])
        show-foam (use-sub [:show-water-foam])
        show-animation (and (= sim "run") show-foam)
        hide-class (if show-animation "" " hide")
        water-level (use-sub [:kit-data-by-keywords [:boiler :water-level :value]])
        y (+ (- 323.11 15) (* (- 100 water-level) (/ 323.7 100)))]
    ($ "foreignObject" {:x 410.5 :y y :width 675 :height 15}
       (d/div {:class (str "water-foam" hide-class)}))))
