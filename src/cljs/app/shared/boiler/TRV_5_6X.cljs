(ns app.shared.boiler.TRV-5-6X
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]
            [app.shared.boiler.TRV-5-6X-highlighting :refer [TRV-5-6X-highlighting]]))

(defnc TRV-5-6X []
  (let [kit (use-sub [:kit])]
    (when (= kit "connect")
      (d/g {:transform "translate(364, 187)"}
           ($ TRV-5-6X-highlighting)
           (d/polygon {:fill "#2a6bb7" :points "18.638 21.885 18.638 42.747 30.128 42.747 30.128 48.614 58.243 48.614 58.243 16.344 30.128 16.344 30.128 21.885"})
           (d/rect {:fill "#eeefef" :x 35.996 :y 23.597 :width 17.439 :height 17.439})
           (d/rect {:fill "#5e5e5d" :x 37.463 :y 30.116 :width 3.341 :height 4.319})
           (d/rect {:fill "#5e5e5d" :x 41.13 :y 30.116 :width 3.341 :height 4.319})
           (d/rect {:fill "#5e5e5d" :x 44.878 :y 30.116 :width 3.341 :height 4.319})
           (d/rect {:fill "#5e5e5d" :x 48.627 :y 30.116 :width 3.341 :height 4.319})))))
