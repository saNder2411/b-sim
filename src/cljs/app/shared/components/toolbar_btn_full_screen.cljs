(ns app.shared.components.toolbar-btn-full-screen
  (:require [helix.core :refer [defnc <>]]
            [helix.dom :as d]))

(defnc toolbar-btn-full-screen []
  (d/g {:fill "none" :stroke "#eee" :stroke-linecap "round" :stroke-linejoin "round" :stroke-width 3}
       (d/rect {:x 1.5 :y 1.5 :width 63.2 :height 63.2 :rx 9})
       (d/line {:x1 28.57 :x2 13.8 :y1 28.43 :y2 13.657})
       (d/line {:x1 37.48 :x2 52.25 :y1 28.43 :y2 13.657})
       (d/line {:x1 52.25 :x2 37.48 :y1 52.108 :y2 37.334})
       (d/line {:x1 13.8 :x2 28.57 :y1 52.108 :y2 37.334})
       (d/polyline {:transform "translate(-561.13, -47.479)" :x1 28.57 :x2 13.8 :y1 28.43 :y2 13.657
                    :points    "584.53 61.136 574.93 61.136 574.93 70.739"})
       (d/polyline {:transform "translate(-561.13, -47.479)"
                    :points    "613.38 70.739 613.38 61.136 603.78 61.136"})
       (d/polyline {:transform "translate(-561.13, -47.479)"
                    :points    "603.78 99.587 613.38 99.587 613.38 89.983"})
       (d/polyline {:transform "translate(-561.13, -47.479)"
                    :points    "574.93 89.983 574.93 99.587 584.53 99.587"})))
