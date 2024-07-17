(ns app.ui.shared.boiler-plant.probes.temperature.probe-highlighting-bg
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]))

(defnc probe-highlighting-bg []
  (let [current-hotspot (use-sub [:current-hotspot])]
    (when (= current-hotspot "temperature-probe")
      (d/polygon {:class  "active-el"
                  :fill   "#061838"
                  :points "15.638 45.747, 15.638 18.885, 27.128 18.885, 27.128 13.344, 61.243 13.344, 61.243 51.615, 27.128 51.615, 27.128 45.747"}))))
