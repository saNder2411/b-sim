(ns app.shared.boiler.valve-continuous-highlighting
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]))

(defnc valve-continuous-highlighting-bg []
  (let [current-hotspot (use-sub [:current-hotspot])]
    (when (= current-hotspot "valve-continuous")
      (<>
        ($ "image" {:style  {:isolation "isolate" :opacity 0.8}
                    :href   "assets/img/valve-continuous-highlighting-bg.png"
                    :x      3.458
                    :y      0.888
                    :width  66
                    :height 108})
        (d/path {:fill "#061838" :d "m20.544 96.729a4.309 4.309 0 0 1-4.3-4.3v-18.91a4.308 4.308 0 0 1 4.3-4.3h0.977a4.308 4.308 0 0 1 4.3 4.3v1.238h1.986v-0.17a8.761 8.761 0 0 1-1.059-4.327 8.48 8.48 0 0 1 1.059-4.3v-5.46h0.327v-16.414h-1.87v-1.8a3.228 3.228 0 0 1-1.06-2.419v-0.037a4.213 4.213 0 0 1-0.979-2.733v-5.363a3.358 3.358 0 0 1-0.651-1.975v-2.037a3.321 3.321 0 0 1 0.114-0.86 4.382 4.382 0 0 1-0.033-0.526v-8.636a4.445 4.445 0 0 1 4.386-4.386h23.143a4.444 4.444 0 0 1 4.385 4.386v8.638a4.22 4.22 0 0 1-0.1 0.918l0.02 0.061v2.523a3.453 3.453 0 0 1-3.407 3.408h-1.565v3.927a4.443 4.443 0 0 1-4.385 4.384h-0.553a5.8 5.8 0 0 1 0.049 0.749v32.205h1.66v-1.076a4.308 4.308 0 0 1 4.3-4.3h1.059a4.308 4.308 0 0 1 4.3 4.3v18.907a4.308 4.308 0 0 1-4.3 4.3h-1.055a4.308 4.308 0 0 1-4.3-4.3v-1.4h-10.94l-4.179 0.08h-6.266v1.4a4.309 4.309 0 0 1-4.3 4.3z"})))))
