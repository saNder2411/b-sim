(ns app.shared.boiler.highlighting
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]))

(defnc highlighting-bg []
  (let [current-hotspot (use-sub [:current-hotspot])]
    (if (= current-hotspot "boiler")
      (<>
        ($ "image" {:style {:isolation "isolate" :opacity 0.8} :href "assets/img/boiler-highlighting-bg.png"
                    :x     266.57 :y 254.03
                    :width 858 :height 434})
        (d/polygon {:fill "#061838" :points "838.14 276.31 913.26 276.31 913.1 297.96 903.71 297.96 900.92 301.88 900.92 303.52 1101.8 303.52 1101.8 640.82 1101.9 645.82 1101.9 665.4 395.12 665.4 395.12 515.13 289.02 515.13 289.02 303.52 760.61 303.52 760.61 301.76 757.9 297.96 745.99 297.96 746.14 276.31 821.29 276.31 820.99 297.96 811.62 297.96 808.83 301.88 808.83 303.52 852.7 303.52 852.7 301.76 849.99 297.96 837.99 297.96"}))
      nil)))
