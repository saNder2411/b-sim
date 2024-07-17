(ns app.ui.shared.boiler-plant.boiler.linear-gradients
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]))

(defnc boiler-linear-gradients []
  (d/defs
    (d/linearGradient {:id "boiler-vacuum-top" :x1 "748.45" :x2 "748.45" :y1 "329.07" :y2 "498.42" :gradientUnits "userSpaceOnUse"}
                      (d/stop {:stop-color "#dc9f59" :offset "0"})
                      (d/stop {:stop-color "#f4e3b4" :offset ".734"}))
    (d/linearGradient {:id "boiler-vacuum-bottom" :x1 "643.64" :x2 "643.64" :y1 "468.13" :y2 "505.98" :gradientTransform "translate(-1391.9 -1113.2)" :gradientUnits "userSpaceOnUse"}
                      (d/stop {:stop-color "#dc9f59" :offset "0"})
                      (d/stop {:stop-color "#f4e3b4" :offset "1"}))
    (d/linearGradient {:id "boiler-water" :x1 "3375.8" :x2 "3376.6" :y1 "4949.6" :y2 "4949.6" :gradientTransform "matrix(0 -325.52 -325.52 0 1611908 1099510)" :gradientUnits "userSpaceOnUse"}
                      (d/stop {:stop-color "#72c3f8" :offset "0"})
                      (d/stop {:stop-color "#bce0fc" :offset "1"}))
    (d/linearGradient {:id "boiler-furnace-inner-chamber" :x1 "748.29" :x2 "748.29" :y1 "514.24" :y2 "602.44" :gradientUnits "userSpaceOnUse"}
                      (d/stop {:stop-color "#c98138" :offset "0"})
                      (d/stop {:stop-color "#d5944d" :offset ".299"})
                      (d/stop {:stop-color "#dc9f59" :offset ".535"})
                      (d/stop {:stop-color "#d89953" :offset ".695"})
                      (d/stop {:stop-color "#ce8940" :offset ".919"})
                      (d/stop {:stop-color "#c98138" :offset "1"}))
    (d/linearGradient {:id "boiler-link" :x1 "445.84" :x2 "445.84" :y1 "8333.5" :y2 "8131.9" :gradientTransform "translate(0 -7759.7)" :gradientUnits "userSpaceOnUse"}
                      (d/stop {:stop-color "#c83b43" :offset "0"})
                      (d/stop {:stop-color "#c83b43" :offset ".016"})
                      (d/stop {:stop-color "#c84045" :offset ".162"})
                      (d/stop {:stop-color "#ca4e4a" :offset ".308"})
                      (d/stop {:stop-color "#ce6453" :offset ".455"})
                      (d/stop {:stop-color "#d48061" :offset ".603"})
                      (d/stop {:stop-color "#dca074" :offset ".751"})
                      (d/stop {:stop-color "#e7c28b" :offset ".897"})
                      (d/stop {:stop-color "#f1db9e" :offset "1"}))
    (d/linearGradient {:id "boiler-steam-pipe" :x1 "315.86" :x2 "509.35" :y1 "530.26" :y2 "530.26" :gradientTransform "matrix(1,0,0,-1,0,831.89)" :gradientUnits "userSpaceOnUse"}
                      (d/stop {:stop-color "#dc9f59" :offset "0"})
                      (d/stop {:stop-color "#cc5943" :offset ".715"}))
    (d/linearGradient {:id "boiler-flue-gas-pipe-top" :x1 "897.09" :x2 "897.09" :y1 "8333.5" :y2 "8131.9" :href "#boiler-link"})
    (d/linearGradient {:id "boiler-flue-gas-pipe-bottom" :x1 "897.95" :x2 "897.95" :y1 "8333.5" :y2 "8131.9" :href "#boiler-link"})
    (d/linearGradient {:id "boiler-turn-box-flue-gas-pipes" :x1 "899.7" :x2 "899.7" :y1 "8333.5" :y2 "8131.9" :href "#boiler-link"})
    (d/linearGradient {:id "boiler-super-heater-incl-left-piping" :x1 "445.84" :x2 "445.84" :y1 "8333.5" :y2 "8131.9" :gradientTransform "translate(0 -7759.7)" :gradientUnits "userSpaceOnUse" :href "#boiler-link"})))
