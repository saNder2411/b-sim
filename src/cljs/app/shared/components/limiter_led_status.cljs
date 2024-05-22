(ns app.shared.components.limiter-led-status
  (:require [helix.core :refer [defnc <>]]
            [helix.dom :as d]))

(defnc limiter-led-status [{:keys [led-path green green-pulse green-fast-pulse]}]
  (let [class (cond-> "led-default"
                      green (str " led-green")
                      green-pulse (str " led-green-pulse")
                      green-fast-pulse (str " led-green-fast-pulse"))]

    (d/path {:class class :d led-path})))
