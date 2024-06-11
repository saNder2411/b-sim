(ns app.shared.sidebar.core
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [app.shared.sidebar.logo :refer [logo]]
            [app.shared.sidebar.user-menu.core :refer [user-menu]]
            [app.shared.sidebar.select-kit.core :refer [select-kit-menu]]
            [app.shared.sidebar.control-panel.core :refer [control-panel]]))

(defnc sidebar []
  (d/svg {:style {:top "0%" :left "0%" :height "100%"} :viewBox "0 0 693.103 1080"}
         (d/defs
           (d/linearGradient {:id "linGrad_Sidebar" :x1 "565.075" :y1 "540" :x2 "693.103" :y2 "540" :gradientUnits "userSpaceOnUse"}
                             (d/stop {:offset "0.028" :stop-color "#061838"})
                             (d/stop {:offset "0.89" :stop-color "#061838" :stop-opacity "0"})))
         (d/rect {:style {:fill "url(#linGrad_Sidebar)" :opacity 0.5} :x "565.075" :width "128.028" :height "1080"})
         (d/rect {:style {:fill "#061838" :opacity 0.6} :x "565.075" :width "4.933" :height "1080"})
         (d/rect {:style {:fill "#ffffff"} :width "561.009" :height "1079.992"})
         (d/rect {:style {:fill "#b1b7bf"} :x "561.009" :width "3.989" :height "1080"})
         ($ logo {:x 38.5 :y 10 :z 0.625 :fill "#0d55a3" :opacity 1})
         ($ logo {:x 38.5 :y 324 :z 2.4 :fill "#0d55a3" :opacity 0.1})
         ($ user-menu {:x 175 :y 0})
         ($ select-kit-menu {:x 54 :y 59})
         ($ control-panel)))