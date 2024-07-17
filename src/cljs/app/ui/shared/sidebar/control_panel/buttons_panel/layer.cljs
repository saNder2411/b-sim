(ns app.ui.shared.sidebar.control-panel.buttons-panel.layer
  (:require [helix.core :refer [defnc <>]]
            [helix.dom :as d]))

(defnc btn-layer [{:keys [dl dm dt mask-url]}]
  (<>
    (d/path {:fill "#aacddd" :opacity 0.5 :d dl})
    (d/path {:fill "#a6adb8" :d dm})
    (d/path {:style {:mask mask-url} :fill "#808795" :opacity 0.5 :d dm})
    (d/path {:fill "none" :stroke "#31394c" :stroke-miterlimit 10 :opacity 0.25 :d dt})))