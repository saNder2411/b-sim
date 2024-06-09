(ns app.shared.components.toolbar
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]))

(defnc toolbar [{:keys [title sub-title children]}]
  (d/svg {:width   "70.7%"
          :style   {:left "29.7%" :top "83.8%"}
          :viewBox "0 0 1347.7 172.76"}
         (d/path {:fill "#061838" :d "m87.5 36.544h1172.1a49.852 49.852 0 0 1 49.85 49.852 49.851 49.851 0 0 1-49.851 49.85h-1172.1a49.851 49.851 0 0 1-49.852-49.846 49.851 49.851 0 0 1 49.846-49.856z"})
         (d/path {:fill         "none"
                  :d            "m87.5 36.544h1172.1a49.852 49.852 0 0 1 49.85 49.852 49.851 49.851 0 0 1-49.851 49.85h-1172.1a49.851 49.851 0 0 1-49.852-49.846 49.851 49.851 0 0 1 49.846-49.856z"
                  :stroke       "#0a366a"
                  :stroke-width 0.5})
         (d/text {:x 85 :y (if sub-title 80 95) :fill "#efefef" :font-family "Arial" :font-size 22}
                 title)

         (when sub-title
           (d/text {:x 85 :y 110 :fill "#bcbcbc" :font-family "Arial" :font-size 22}
                   sub-title))
         children))
