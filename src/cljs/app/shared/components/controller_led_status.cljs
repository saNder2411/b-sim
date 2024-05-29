(ns app.shared.components.controller-led-status
  (:require [helix.core :refer [defnc <>]]
            [helix.dom :as d]))

(defnc controller-led-status [{:keys [led-path amber red green]}]
  (let [class (cond-> "led-default"
                      amber (str " led-amber")
                      red (str " led-red")
                      green (str " led-green"))]
    (d/path {:class class :d led-path})))
