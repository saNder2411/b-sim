(ns app.shared.boiler.probe-level-highlighting
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]))

(defnc probe-level-highlighting [{:keys [hotspot-id]}]
  (let [current-hotspot (use-sub [:current-hotspot])
        left-orientation (or (= hotspot-id "level-low-probe-1") (= hotspot-id "level-low-probe-2"))]
    (when (= current-hotspot hotspot-id)
      (if left-orientation
        (<>
          ($ "image" {:style  {:isolation "isolate" :opacity 0.8}
                      :href   "assets/img/probe-level-left-highlighting-bg.png"
                      :x      3.001
                      :y      0.396
                      :width  71
                      :height 111})
          (d/polygon {:fill   "#061838"
                      :points "49.833 13.344 49.833 18.885 61.243 18.885 61.243 45.747 59.857 45.747 59.857 90.44 58.716 93.7 58.716 98.471 46.197 98.471 46.197 93.7 45.056 90.44 45.056 51.615 15.638 51.615 15.638 13.344"}))

        (<>
          ($ "image" {:style  {:isolation "isolate" :opacity 0.8}
                      :href   "assets/img/probe-level-right-highlighting-bg.png"
                      :x      3.382
                      :y      0.396
                      :width  71
                      :height 111})
          (d/polygon {:fill   "#061838"
                      :points "15.638 45.747 15.638 18.885 27.128 18.885 27.128 13.344 61.243 13.344 61.243 51.615 31.824 51.615 31.824 90.44 30.684 93.7 30.684 98.471 18.164 98.471 18.164 93.7 17.023 90.44 17.023 45.747"}))))))
