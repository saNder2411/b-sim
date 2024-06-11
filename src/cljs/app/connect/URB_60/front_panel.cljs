(ns app.connect.URB-60.front-panel
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [app.shared.sidebar.logo :refer [logo]]))

(defnc front-panel []
  (d/svg {:style {:width "28%" :left "0.6%" :top "9.945%"} :viewBox "0 0 356 269"}
         (d/g {:transform "matrix(0,1,-1,0,586.68995,-192.97325)"}
              (d/path {:fill             "#eaebeb"
                       :fill-rule        "evenodd"
                       :stroke           "#000000"
                       :stroke-width     0.5
                       :stroke-linecap   "butt"
                       :stroke-linejoin  "bevel"
                       :stroke-dasharray "none"
                       :d                "m 454.8408,585.5913 -252.965,0 c -1.6994,0 -3.3289,-0.6759 -4.5306,-1.8785 -1.2014,-1.2029 -1.8766,-2.8342 -1.8763,-4.5351 l 0,-341.6922 c -3e-4,-1.7009 0.6749,-3.3322 1.8763,-4.5351 1.2017,-1.2026 2.8312,-1.8785 4.5306,-1.8785 l 252.965,0 c 1.6992,0 3.3287,0.6759 4.5304,1.8785 1.2014,1.2029 1.8766,2.8342 1.8766,4.5351 l 0,341.6922 c 0,1.7009 -0.6752,3.3322 -1.8766,4.5351 -1.2017,1.2026 -2.8312,1.8785 -4.5304,1.8785 z"}))
         ($ logo {:x 49 :y 11.5 :z 0.44 :fill "#32559e" :opacity 1})))
