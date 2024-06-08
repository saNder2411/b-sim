(ns app.shared.components.hot-spot-shadow-big
  (:require [helix.core :refer [defnc $]]
            [refx.alpha :refer [use-sub]]))

(defnc hot-spot-shadow-big []
  (let [highlight-hotspots (use-sub [:highlight-hotspots])]
    ($ "image" {:class  (if highlight-hotspots "hot-spot-shadow" "hide")
                :href   "assets/img/hot-spot-big-shadow.png"
                :width  121
                :height 121})))
