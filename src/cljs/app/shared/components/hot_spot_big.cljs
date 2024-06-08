(ns app.shared.components.hot-spot-big
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]))

(defnc hot-spot-big [{:keys [x y active on-click children]}]
  (d/svg {:style {:width "6.3%" :left (str x "%") :top (str y "%") :border-radius "50%"} :viewBox "0 0 121 121"}
         children
         (d/circle {:fill    "url(#linGradHotspotBig-1)"
                    :opacity 0.5
                    :cx      60.7
                    :cy      60.3
                    :r       29.3})
         (d/circle {:fill              "none"
                    :opacity           0.5
                    :stroke            "#192330"
                    :stroke-width      2
                    :stroke-miterlimit 10
                    :cx                60.7
                    :cy                60.3
                    :r                 29.3})
         (when active
           (<>
             (d/path {:fill "#1cb0ea" :d "m60.706 29.959a30.292 30.292 0 1 1-30.292 30.292 30.326 30.326 0 0 1 30.292-30.292m0-4.941a35.233 35.233 0 1 0 35.232 35.233 35.232 35.232 0 0 0-35.232-35.233z"})
             (d/circle {:fill "#1cb0ea"
                        :cx   60.7
                        :cy   60.3
                        :r    16})
             (d/path {:fill            "none"
                      :d               "M 66.546207,66.09191 54.864093,54.409797 m 11.682817,3e-6 -11.682111,11.682111"
                      :stroke          "#192330"
                      :stroke-width    3.5
                      :stroke-linecap  "round"
                      :stroke-linejoin "round"})))

         (d/circle {:class    "hotspot"
                    :cx       60.7
                    :cy       60.3
                    :r        35
                    :on-click on-click})))
