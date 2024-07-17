(ns app.ui.shared.sidebar.control-panel.mode.button
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]))

(defnc mode-button [{:keys [x label active on-click]}]
  (d/g {:transform (str "translate(" x ",0)")}
       (d/rect {:x    245.41 :y 109.573 :rx 16.974 :width 121.23 :height 33.949
                :fill (if active "#1cb0ea" "#6f7684")})

       (d/path {:opacity 0.25 :d "M349.665,109.573H262.384a16.973,16.973,0,0,0-16.974,16.972v0h0c0,.307.03.606.046.91a16.959,16.959,0,0,1,16.928-16.065h87.281a16.961,16.961,0,0,1,16.929,16.065c.016-.3.046-.6.046-.91h0a16.975,16.975,0,0,0-16.974-16.974Z"})

       (d/text {:x           306.4 :y 134
                :font-size   "18.667px" :letter-spacing "0.075em"
                :text-anchor "middle"
                :fill        (if active "#eee" "#aaa")}
               label)

       (d/rect {:x        245.41 :y 109.573 :rx 16.974 :width 121.23 :height 33.949
                :class    "touch-area"
                :on-click on-click})))
