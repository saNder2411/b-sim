(ns app.ui.kits.connect.URB-60.core
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]
            [app.ui.kits.connect.URB-60.front-panel :refer [front-panel]]
            [app.ui.kits.connect.URB-60.main-menu :refer [main-menu]]))

(defnc URB-60 []
  (let [screen-w (use-sub [:screen-w])]
    (<>
      ($ front-panel)
      (d/div {:class "urb-60-display-wrapper" :style {:height (* 0.15384 screen-w)}}
             ($ main-menu)))))


