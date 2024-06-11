(ns app.shared.components.toolbar-btn-info
  (:require [helix.core :refer [defnc <>]]
            [helix.dom :as d]))

(defnc toolbar-btn-info []
  (<>
    (d/circle {:cx 33 :cy 33 :r 31 :fill "none" :stroke "#14a2b8" :stroke-width 3})
    (d/path {:fill "#14a2b8" :d "m33.26 20.131a1.8 1.8 0 0 1-1.347-0.568 1.95 1.95 0 1 1 3.242-1.644 1.8 1.8 0 0 1 0 0.275 1.9 1.9 0 0 1-0.548 1.369 1.8 1.8 0 0 1-1.347 0.568zm-1.431 6.021a1.432 1.432 0 0 1 2.863 0v19.074a1.432 1.432 0 0 1-2.863 0z"})))
