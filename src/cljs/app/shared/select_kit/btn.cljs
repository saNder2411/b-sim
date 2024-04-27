(ns app.shared.select-kit.btn
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]))

(defnc select-kit-btn [{:keys [x y label sub-label active disable on-click]}]
  (d/g {:style {:opacity (if disable 0.5 1)} :transform (str "translate(" x "," y ")")}
       (d/rect {:x     0.41 :y 0.573 :rx 16.974 :width 217.23 :height 33.949
                :style {:filter "drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4))"}
                :fill  (if active "#1cb0ea" "#6f7684")})
       (d/text {:x           109.4 :y 24
                :font-size   "18.667px" :letter-spacing "0.075em"
                :text-anchor "middle"
                :fill        (if active "#eee" "#aaa")}
               label
               (d/tspan {:font-style "italic"} sub-label))
       (d/rect {:x        0.41 :y 0.573 :rx 16.974 :width 217.23 :height 33.949
                :style    {:cursor (if disable "default" "pointer") :pointer-events "visibleFill"}
                :fill     "none"
                :on-click (if disable nil on-click)})))
