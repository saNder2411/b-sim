(ns app.shared.components.toolbar-btn-replace
  (:require [helix.core :refer [defnc <>]]
            [helix.dom :as d]))

(defnc toolbar-btn-replace []
  (d/g {:fill "none" :stroke "#eee" :stroke-linecap "round" :stroke-linejoin "round" :stroke-width 3}
       (d/circle {:cx 33 :cy 33 :r 31 :stroke-miterlimit 10})
       (d/path {:d "m23.635 23.305h16.465a7.7 7.7 0 0 1 7.7 7.7v6.172"})
       (d/path {:d "m39.507 39.837h-16.462a7.7 7.7 0 0 1-7.7-7.7v-6.168"})
       (d/polyline {:transform "translate(-623.55, -54.854)"
                    :points    "651.78 83.747 646.19 78.159 651.78 72.571"})
       (d/polyline {:transform "translate(-623.55, -54.854)"
                    :points    "658.47 89.103 664.06 94.691 658.47 100.28"})))
