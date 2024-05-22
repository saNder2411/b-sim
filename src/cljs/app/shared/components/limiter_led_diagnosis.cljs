(ns app.shared.components.limiter-led-diagnosis
  (:require [helix.core :refer [defnc <>]]
            [helix.dom :as d]))

(defnc limiter-led-diagnosis [{:keys [led-path label-path yellow yellow-pulse]}]
  (let [class (cond-> "led-default"
                      yellow (str " led-yellow")
                      yellow-pulse (str " led-yellow-pulse"))]
    (<>
      (d/path {:class class  :d led-path})
      (d/path {:fill "#151616" :fill-rule "evenodd" :d label-path}))))
