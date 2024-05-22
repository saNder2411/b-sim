(ns app.shared.boiler.burner
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [app.shared.boiler.burner-highlighting :refer [burner-highlighting-bg]]))

(defnc burner []
  (d/g {:transform "translate(209.5, 501.5)"}
       ($ burner-highlighting-bg)
       (d/path {:fill "#b9b9ba" :d "m49.48 26.511h130.38v56.555l-77.5-12.224-0.407 32.6c-1.548 8.72-0.326 17.439-23.958 25.263l-30.152 0.163c-12.548-3.753-19.882-14.021-18.741-24.368l0.163-60.711z"})
       (d/path {:fill "#a8aaaf" :d "m94.463 76.22a31.863 31.863 0 1 1-31.863-31.863 31.857 31.857 0 0 1 31.863 31.863"})
       (d/rect {:fill "#b9b9ba" :x 184.84 :y 22.599 :width 5.704 :height 64.867})
       (d/rect {:fill "#b9b9ba" :x 178.72 :y 22.599 :width 6.03 :height 64.867})
       (d/line {:fill "none" :stroke "#fff" :stroke-width 2.97 :stroke-miterlimit 10 :x1 184.84 :x2 184.84 :y1 18.036 :y2 91.215})
       (d/rect {:fill "#b9b9ba" :x 20.388 :y 26.755 :width 9.045 :height 101.29})))
