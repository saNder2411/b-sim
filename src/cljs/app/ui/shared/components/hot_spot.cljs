(ns app.ui.shared.components.hot-spot
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]))

(defnc shadow []
  (let [highlight-hotspots (use-sub [:hotspots/highlight])]
    ($ "image" {:class  (if highlight-hotspots "hot-spot-shadow" "hide")
                :href   "assets/img/hot-spot-shadow.png"
                :width  60
                :height 60
                :x      17
                :y      17})))

(defnc shadow-big []
  (let [highlight-hotspots (use-sub [:hotspots/highlight])]
    ($ "image" {:class  (if highlight-hotspots "hot-spot-shadow" "hide")
                :href   "assets/img/hot-spot-big-shadow.png"
                :width  121
                :height 121})))

(defnc hot-spot [{:keys [x y id]}]
  (let [current-hotspot (use-sub [:hotspots/current])
        active (= current-hotspot id)]
    (d/svg {:style {:width "2.348%" :left (str x "%") :top (str y "%") :border-radius "50%"} :viewBox "25 25 45 45"}
           ($ shadow)
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
                      :on-click #(dispatch [:current-hotspot/change (if active "none" id)])}))))

(defnc hot-spot-big [{:keys [x y id]}]
  (let [current-hotspot (use-sub [:hotspots/current])
        active (= current-hotspot id)]
    (d/svg {:style {:width "6.3%" :left (str x "%") :top (str y "%") :border-radius "50%"} :viewBox "0 0 121 121"}
           ($ shadow-big)
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
                      :on-click #(dispatch [:current-hotspot/change (if active "none" id)])}))))
