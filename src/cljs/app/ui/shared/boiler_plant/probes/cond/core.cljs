(ns app.ui.shared.boiler-plant.probes.cond.core
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [app.ui.shared.boiler-plant.probes.cond.highlighting-bg :refer [cond-probe-highlighting-bg]]))

(defnc cond-probe []
  (d/g {:transform "translate(628.5, 376)"}
       ($ cond-probe-highlighting-bg)
       (d/polygon {:fill "none" :stroke "#fff" :stroke-miterlimit 10 :points "17.965 48.487 18.372 48.487 19.513 48.487 19.513 59.488 19.513 59.895 19.92 59.895 29.862 59.895 30.27 59.895 30.27 59.488 30.27 48.487 31.411 48.487 31.818 48.487 31.818 48.079 31.818 19.883 31.818 19.476 31.411 19.476 18.372 19.476 17.965 19.476 17.965 19.883 17.965 48.079"})
       (d/polygon {:fill "#2a6bb7" :points "29.862 59.488 29.862 48.079 31.411 48.079 31.411 19.883 18.372 19.883 18.372 48.079 19.92 48.079 19.92 59.488"})))
