(ns app.shared.boiler-plant.boiler.animations.steam-jet
  (:require [helix.core :refer [defnc $]]
            [refx.alpha :refer [use-sub]]
            [helix.dom :as d]))

(defnc animation-steam-jet []
  (let [sim (use-sub [:sim])
        steam-% (use-sub [:steam-%])
        show-animation (= sim "run")
        hide-class (if show-animation "" " hide")]
    ($ "foreignObject" {:x 279 :y 57.73 :width 87 :height 192 :opacity (/ steam-% 100)}
       (d/div {:class (str "steam-jet" hide-class)}))))
