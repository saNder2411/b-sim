(ns app.shared.boiler-plant.boiler.animations.water-surface
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub]]
            [helix.dom :as d]))

(defnc animation-water-surface []
  (let [sim (use-sub [:sim])
        show-animation (= sim "run")
        hide-class (if show-animation "" " hide")
        water-level (use-sub [:water-level])
        y (+ (- 323.11 7) (* (- 100 water-level) (/ 323.7 100)))]
    ($ "foreignObject" {:x 410.5 :y y :width 675 :height 15}
       (d/div {:class (str "water-surface" hide-class)}))))
