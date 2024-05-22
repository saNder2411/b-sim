(ns app.shared.boiler.valve-sludge-highlighting
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]))

(defnc valve-sludge-highlighting-bg []
  (let [current-hotspot (use-sub [:current-hotspot])]
    (when (= current-hotspot "valve-sludge")
      (<>
        ($ "image" {:style  {:isolation "isolate" :opacity 0.8}
                    :href   "assets/img/valve-sludge-highlighting-bg.png"
                    :x      0
                    :y      0.455
                    :width  77
                    :height 110})
        (d/path {:fill "#061838" :d "m31.012 98.14-1.577-3.155a4.056 4.056 0 0 1-3.169 1.524h-0.9a4.063 4.063 0 0 1-4.059-4.058v-19.314a4.064 4.064 0 0 1 4.059-4.059h0.9a4.043 4.043 0 0 1 2.7 1.034v-24.942h-3.337v-8.644a16.6 16.6 0 0 1-6.007-3.416h-3.38a4.064 4.064 0 0 1-4.059-4.06v-2.119a4.063 4.063 0 0 1 4.059-4.058h3.385c3.092-2.945 8.682-4.5 13.906-5.074v-4.543h9.423v4.544c5.226 0.575 10.815 2.131 13.906 5.073h3.385a4.064 4.064 0 0 1 4.06 4.058v2.119a4.171 4.171 0 0 1-0.951 2.635 3.8 3.8 0 0 1-2.933 1.433h-0.247l-0.054-8e-3h-3.222a17.879 17.879 0 0 1-6.2 3.483v8.577h-3.344v25.017a4.047 4.047 0 0 1 2.787-1.109h0.9a4.064 4.064 0 0 1 4.057 4.059v19.314a4.016 4.016 0 0 1-4.059 4.058h-0.9a4.052 4.052 0 0 1-3.172-1.528l-1.735 3.159z"})))))
