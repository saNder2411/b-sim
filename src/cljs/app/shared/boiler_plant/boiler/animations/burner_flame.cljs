(ns app.shared.boiler-plant.boiler.animations.burner-flame
  (:require [helix.core :refer [defnc $]]
            [refx.alpha :refer [use-sub]]
            [helix.dom :as d]))

(defnc animation-burner-flame []
  (let [sim (use-sub [:sim])
        burner-status (use-sub [:burner-status])
        show-animation (and (= sim "run") (= burner-status "on"))
        hide-class (if show-animation "" " hide")]
    ($ "foreignObject" {:x 414.71 :y 514.13 :width 600 :height 93}
       (d/div {:class (str "burner-flame" hide-class)}))))
