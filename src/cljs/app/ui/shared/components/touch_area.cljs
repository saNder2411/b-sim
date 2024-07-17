(ns app.ui.shared.components.touch-area
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]))

(defnc touch-area [{:keys [x y w h on-click]}]
  (d/rect {:x        x
           :y        y
           :width    w
           :height   h
           :class "touch-area"
           :on-click on-click}))
