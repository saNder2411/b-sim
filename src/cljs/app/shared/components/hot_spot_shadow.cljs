(ns app.shared.components.hot-spot-shadow
  (:require [helix.core :refer [defnc $]]))

(defnc hot-spot-shadow []
  ($ "image" {:style  {:isolation "isolate" :opacity 0.5}
              :href   "assets/img/hot-spot-shadow.png"
              :width  60
              :height 60
              :x      17
              :y      17}))
