(ns app.shared.boiler.valve-feedwater-highlighting
  (:require [helix.core :refer [defnc <> $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]))

(defnc valve-feedwater-highlighting-bg []
  (let [current-hotspot (use-sub [:current-hotspot])]
    (when (= current-hotspot "valve-feedwater")
      (<>
        ($ "image" {:style  {:isolation "isolate" :opacity 0.8}
                    :href   "assets/img/valve-feedwater-highlighting-bg.png"
                    :x      5.347
                    :y      1.724
                    :width  67
                    :height 145})
        (d/path {:fill "#061838" :d "m52.169 134.57a4.027 4.027 0 0 1-0.5-0.031h-0.728a4.089 4.089 0 0 1-4.1-3.586h-16.081a4.089 4.089 0 0 1-4.105 3.585h-0.979a4.1 4.1 0 0 1-4.14-4.141v-20.78a4.119 4.119 0 0 1 1.386-3.116v-7.462h1.059v-34.827h-4.563v-6.357h-1.2l1.282-29.06v-0.1a5.287 5.287 0 0 1 5.282-5.282h7.984a5.281 5.281 0 0 1-2.266-4.332 5.353 5.353 0 0 1 5.282-5.278h6.112a5.261 5.261 0 0 1 3 9.6v0.018h8a5.287 5.287 0 0 1 5.282 5.282v0.093l1.367 29.065h-1.366v6.357h-4.564v35.065h1.059v7.312a4.112 4.112 0 0 1 1.467 3.185v20.78a4 4 0 0 1-3.97 4.01z"})))))
