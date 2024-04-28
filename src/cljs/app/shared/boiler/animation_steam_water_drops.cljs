(ns app.shared.boiler.animation-steam-water-drops
  (:require [helix.core :refer [defnc $]]
            [refx.alpha :refer [use-sub]]
            [helix.dom :as d]))

(defnc steam-water-drops []
  (let [sim (use-sub [:sim])
        steam-% (use-sub [:steam-%])
        water-level (use-sub [:water-level])
        show-animation (and (= sim "run") (> water-level 80)) ;; 90
        hide-class (if show-animation "" " hide")]
    ($ "foreignObject" {:x 287 :y 189.73 :width 69 :height 61 :opacity (/ steam-% 100)}
       (d/div {:class (str "steam-water-drops" hide-class)}))))
