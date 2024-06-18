(ns app.shared.components.toolbar-btn-error
  (:require [helix.core :refer [defnc <>]]
            [helix.dom :as d]))

(defnc toolbar-btn-error []
  (d/g {:fill "none" :stroke "#db1d43" :stroke-width 3 :stroke-miterlimit 10}
       (d/circle {:cx 33 :cy 33 :r 31})
       (d/path {:d "m30.577 12.487-16.621 28.789a2.913 2.913 0 0 0 2.524 4.371h33.243a2.913 2.913 0 0 0 2.523-4.371l-16.621-28.789a2.914 2.914 0 0 0-5.047 0l-16.622 28.789a2.913 2.913 0 0 0 2.524 4.371h33.243a2.913 2.913 0 0 0 2.523-4.371l-16.621-28.789a2.914 2.914 0 0 0-5.047 0z"})
       (d/path {:fill "#db1d43" :stroke "none" :d "m33.098 38.467a1.658 1.658 0 0 1 1.241 0.523 1.768 1.768 0 1 1-2.989 1.343v-0.083a1.753 1.753 0 0 1 0.5-1.26 1.657 1.657 0 0 1 1.248-0.523zm1.318-5.543a1.318 1.318 0 0 1-2.635 0v-13.193a1.318 1.318 0 0 1 2.635 0z"})))
