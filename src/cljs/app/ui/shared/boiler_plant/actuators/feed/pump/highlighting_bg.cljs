(ns app.ui.shared.boiler-plant.actuators.feed.pump.highlighting-bg
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]))

(defnc feed-pump-highlighting-bg []
  (let [current-hotspot (use-sub [:hotspots/current])]
    (when (= current-hotspot "feed-pump")
      (<>
        ($ "image" {:style  {:isolation "isolate" :opacity 0.8}
                    :href   "assets/img/pump-feedwater-highlighting-bg.png"
                    :x      3.278
                    :y      3.14
                    :width  62
                    :height 63})
        (d/path {:fill "#061838" :d "m34.286 53.263c-0.281 0-0.564-6e-3 -0.847-0.019l-0.015-0.042a18.419 18.419 0 0 1-2.2-0.242h-0.01c-10.583-1.734-15.322-10.512-15.322-18.439s4.737-16.705 15.323-18.445h0.01a18.4 18.4 0 0 1 2.092-0.236l0.016-0.042q0.729-0.058 1.44-0.059c7.056 0 13.392 4.255 16.535 11.1a17.968 17.968 0 0 1-2.32 19.385 18.887 18.887 0 0 1-14.7 7.032z"})))))
