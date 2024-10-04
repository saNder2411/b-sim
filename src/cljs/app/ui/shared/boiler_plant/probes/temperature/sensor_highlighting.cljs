(ns app.ui.shared.boiler-plant.probes.temperature.sensor-highlighting
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]))

(defnc temperature-sensor-highlighting-bg []
  (let [current-hotspot (use-sub [:hotspots/current])]
    (when (= current-hotspot "temperature-probe")
      (<>
        ($ "image" {:style  {:isolation "isolate" :opacity 0.8}
                    :href   "assets/img/sensor-temperature-highlighting-bg.png"
                    :x      2.262
                    :y      1.338
                    :width  87
                    :height 106})
        (d/path {:fill "#061838" :d "m20.341 95.08a5.247 5.247 0 0 1-2.591-0.759 4.691 4.691 0 0 1-2.412-2.788 3.477 3.477 0 0 1 0.213-2.456l6.069-12.712 8.459-14.49-0.322-0.182 4.419-7.54 1.3 0.731 11.807-20.242-1.237-0.7 1.3-2.362-0.459-0.272 2-3.361-2.028-1.136 2.528-4.279-1.114-0.192 1.6-7.986 4.662 0.911a8.641 8.641 0 0 1 5.18-1.523 12.209 12.209 0 0 1 2.179 0.2l0.1 0.021a9.886 9.886 0 0 1 6.306 3.948l4.723 0.878-0.488 3.58 1.642 0.976-0.2 0.346 2.492 1.574-5.588 9.777-2.625-1.657-0.019 0.031-2.013-1.127-2.461 4.266-3.865-2.221-2.062 3.456-0.111-0.065-1.153 2.1-1.37-0.77-11.802 20.237 1.31 0.737-4.422 7.54-0.153-0.086-8.535 14.617-8.28 11.476a3.583 3.583 0 0 1-2.979 1.504z"})))))
