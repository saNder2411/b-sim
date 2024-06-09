(ns app.shared.boiler-plant.probes.cond.highlighting-bg
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]))

(defnc probe-cond-highlighting-bg []
  (let [current-hotspot (use-sub [:current-hotspot])]
    (when (= current-hotspot "cond-probe")
      (<>
        ($ "image" {:style  {:isolation "isolate" :opacity 0.8}
                    :href   "assets/img/probe-conductivity-highlighting-bg.png"
                    :x      2.155
                    :y      3.291
                    :width  46
                    :height 73})
        (d/polygon {:fill "#061838" :points "33.769 51.986 33.769 63.395 16.013 63.395 16.013 51.986 14.465 51.986 14.465 15.976 35.318 15.976 35.318 51.986"})))))
