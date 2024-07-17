(ns app.ui.shared.boiler-plant.actuators.feed.pump.core
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [app.ui.shared.boiler-plant.actuators.feed.pump.highlighting-bg :refer [feed-pump-highlighting-bg]]))

(defnc feed-pump []
  (d/g {:transform "translate(938, 762)"}
       ($ feed-pump-highlighting-bg)
       (d/path {:fill "#fff" :d "m50.118 34.52a15.728 15.728 0 1 0-15.728 15.728 15.738 15.738 0 0 0 15.728-15.728"})
       (d/path {:fill "#b9b9ba" :d "m47.51 34.52-15.81-15.483a15.712 15.712 0 0 0 0 30.963z"})
       (d/path {:fill "#b9b9ba" :d "m34.39 18.792h-0.815l16.054 15.728-16.054 15.728h0.815a15.728 15.728 0 1 0 0-31.456z"})))
