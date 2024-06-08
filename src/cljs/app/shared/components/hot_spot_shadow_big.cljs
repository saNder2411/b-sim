(ns app.shared.components.hot-spot-shadow-big
  (:require [helix.core :refer [defnc $]]))

(defnc hot-spot-shadow-big []
  ($ "image" {:style  {:isolation "isolate" :opacity 0.5}
              :href   "assets/img/hot-spot-big-shadow.png"
              :width  121
              :height 121}))
