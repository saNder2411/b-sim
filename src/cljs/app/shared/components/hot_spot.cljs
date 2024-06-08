(ns app.shared.components.hot-spot
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]))

(defnc hot-spot [{:keys [x y active on-click children]}]
  (d/svg {:style {:width "2.348%" :left (str x "%") :top (str y "%") :border-radius "50%"} :viewBox "25 25 45 45"}
         children
         (d/circle {:fill    "url(#linGradHotspotSmall-1)"
                    :opacity 0.5
                    :cx      47
                    :cy      47
                    :r       16})
         (d/circle {:fill              "none"
                    :opacity           0.5
                    :stroke            "#192330"
                    :stroke-width      2
                    :stroke-miterlimit 10
                    :cx                47
                    :cy                47
                    :r                 16})
         (when active
           (<>
             (d/path {:fill "#1cb0ea" :d "m47.2 30.313a16.7 16.7 0 1 1-16.7 16.7 16.72 16.72 0 0 1 16.7-16.7m0-4.94a21.642 21.642 0 1 0 21.646 21.641 21.641 21.641 0 0 0-21.646-21.641z"})
             (d/circle {:fill "#1cb0ea"
                        :cx   47
                        :cy   47
                        :r    9.6})
             (d/path {:fill            "none"
                      :d               "m50.923 51.228-7.1764-7.1764m7.1764-7.09e-4 -7.1764 7.1764"
                      :stroke          "#192330"
                      :stroke-width    2.5
                      :stroke-linecap  "round"
                      :stroke-linejoin "round"})))

         (d/circle {:class    "hotspot"
                    :cx       47
                    :cy       47
                    :r        21.6
                    :on-click on-click})))
