(ns app.ui.kits.connect.URB-60.main-menu
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]))

(defnc main-menu []
  (d/svg {:viewBox "0 0 800 603"}
         (d/defs
           (d/linearGradient {:id "m-lg-top" :x1 "0" :x2 "0" :y1 "0" :y2 "1"}
                             (d/stop {:offset "0%" :stop-color "white" :stop-opacity "0.5"})
                             (d/stop {:offset "15%" :stop-color "white" :stop-opacity "0"})
                             (d/stop {:offset "85%" :stop-color "black" :stop-opacity "0"})
                             (d/stop {:offset "100%" :stop-color "black" :stop-opacity "0.5"}))
           (d/linearGradient {:id "m-lg-right" :x1 "0" :x2 "1" :y1 "0" :y2 "0"}
                             (d/stop {:offset "0%" :stop-color "white" :stop-opacity "0.3"})
                             (d/stop {:offset "15%" :stop-color "white" :stop-opacity "0"})
                             (d/stop {:offset "85%" :stop-color "black" :stop-opacity "0"})
                             (d/stop {:offset "100%" :stop-color "black" :stop-opacity "0.3"}))
           (d/linearGradient {:id "m-lg-btm" :x1 "0" :x2 "0" :y1 "0" :y2 "1"}
                             (d/stop {:offset "0%" :stop-color "white" :stop-opacity "0.3"})
                             (d/stop {:offset "15%" :stop-color "white" :stop-opacity "0"})
                             (d/stop {:offset "85%" :stop-color "black" :stop-opacity "0"})
                             (d/stop {:offset "100%" :stop-color "black" :stop-opacity "0.3"})))

         (d/rect {:width "100%" :height "100%" :rx 5 :ry 5 :fill "#626262"})))
