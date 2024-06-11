(ns app.shared.components.toolbar-title
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]))

(defnc toolbar-title [{:keys [x y fill title]}]
  (d/text {:x x :y y :fill fill :font-family "Arial" :font-size 22}
          title))
