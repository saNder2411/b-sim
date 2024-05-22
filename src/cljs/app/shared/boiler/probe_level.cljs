(ns app.shared.boiler.probe-level
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [app.shared.boiler.probe-level-highlighting :refer [probe-level-highlighting]]))

(defnc probe-level [{:keys [x hotspot-id]}]
  (let [left-orientation (or (= hotspot-id "probe-low-level-1") (= hotspot-id "probe-low-level-2"))]
    (d/g {:transform (str "translate(" x ", 186)")}
         ($ probe-level-highlighting {:hotspot-id hotspot-id})
         (if left-orientation
           (<>
             (d/polygon {:fill "#b9b9ba" :points "49.197 95.472 55.716 95.472 55.716 93.19 56.857 89.93 56.857 42.177 48.056 42.177 48.056 89.93 49.197 93.19"})
             (d/polygon {:fill "#2a6bb7" :points "46.834 42.747 58.243 42.747 58.243 21.885 46.834 21.885 46.834 16.344 18.638 16.344 18.638 48.614 46.834 48.614"})
             (d/rect {:fill "#eeefef" :x 23.446 :y 23.597 :width 17.439 :height 17.439})
             (d/rect {:fill "#5e5e5d" :x 24.913 :y 30.116 :width 3.341 :height 4.319})
             (d/rect {:fill "#5e5e5d" :x 28.661 :y 30.116 :width 3.341 :height 4.319})
             (d/rect {:fill "#5e5e5d" :x 32.41 :y 30.116 :width 3.341 :height 4.319})
             (d/rect {:fill "#5e5e5d" :x 36.159 :y 30.116 :width 3.341 :height 4.319}))

           (<>
             (d/polygon {:fill "#b9b9ba" :points "20.024 89.93 21.164 93.19 21.164 95.472 27.684 95.472 27.684 93.19 28.825 89.93 28.825 42.177 20.024 42.177"})
             (d/polygon {:fill "#2a6bb7" :points "18.638 21.885 18.638 42.747 30.128 42.747 30.128 48.614 58.243 48.614 58.243 16.344 30.128 16.344 30.128 21.885"})
             (d/rect {:fill "#eeefef" :x 35.996 :y 23.597 :width 17.439 :height 17.439})
             (d/rect {:fill "#5e5e5d" :x 37.463 :y 30.116 :width 3.341 :height 4.319})
             (d/rect {:fill "#5e5e5d" :x 41.13 :y 30.116 :width 3.341 :height 4.319})
             (d/rect {:fill "#5e5e5d" :x 44.878 :y 30.116 :width 3.341 :height 4.319})
             (d/rect {:fill "#5e5e5d" :x 48.627 :y 30.116 :width 3.341 :height 4.319}))))))
