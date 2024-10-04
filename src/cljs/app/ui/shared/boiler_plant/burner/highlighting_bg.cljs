(ns app.ui.shared.boiler-plant.burner.highlighting-bg
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]))

(defnc burner-highlighting-bg []
  (let [current-hotspot (use-sub [:hotspots/current])]
    (when (= current-hotspot "burner")
      (<>
        ($ "image" {:style  {:isolation "isolate" :opacity 0.8}
                    :href   "assets/img/burner-highlighting-bg.png"
                    :x      4.822
                    :y      2.925
                    :width  201
                    :height 141})
        (d/path {:fill "#061838" :d "m46.991 131.74a31.654 31.654 0 0 1-14.558-9.008v8.318h-15.046v-107.29h15.046v13.381l15.939-13.625h127.35v-3.911h4.627v-4.564h8.97v4.564h4.22v70.866h-4.22v3.748h-8.97v-3.748h-4.627v-5.016l-70.4-11.105-0.368 29.376-0.043 0.241c-0.149 0.84-0.271 1.68-0.393 2.519-1.192 8.176-2.543 17.443-25.575 25.067l-0.452 0.15-31.074 0.168z"})))))
