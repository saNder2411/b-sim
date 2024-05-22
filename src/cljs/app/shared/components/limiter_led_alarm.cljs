(ns app.shared.components.limiter-led-alarm
  (:require [helix.core :refer [defnc <>]]
            [helix.dom :as d]))

(defnc limiter-led-alarm [{:keys [led-path red red-pulse]}]
  (let [class (cond-> "led-default"
                      red (str " led-red")
                      red-pulse (str " led-red-pulse"))]
    (d/path {:class class :d led-path})))
