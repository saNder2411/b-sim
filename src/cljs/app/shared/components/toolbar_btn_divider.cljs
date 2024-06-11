(ns app.shared.components.toolbar-btn-divider
  (:require [helix.core :refer [defnc <>]]
            [helix.dom :as d]))

(defnc toolbar-btn-divider []
  (<>
    (d/line {:x1 23 :x2 23 :y1 9 :y2 60 :fill "none" :stroke "#0f4477" :stroke-width 2 :stroke-miterlimit 10})
    (d/line {:x1 33 :x2 33 :y1 9 :y2 60 :fill "none" :stroke "#0f4477" :stroke-width 2 :stroke-miterlimit 10})))
