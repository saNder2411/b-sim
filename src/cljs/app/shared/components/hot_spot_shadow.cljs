(ns app.shared.components.hot-spot-shadow
  (:require [helix.core :refer [defnc $]]
            [refx.alpha :refer [use-sub]]))

(defnc hot-spot-shadow []
  (let [highlight-hotspots (use-sub [:highlight-hotspots])]
    ($ "image" {:class  (if highlight-hotspots "hot-spot-shadow" "hide")
                :href   "assets/img/hot-spot-shadow.png"
                :width  60
                :height 60
                :x      17
                :y      17})))
