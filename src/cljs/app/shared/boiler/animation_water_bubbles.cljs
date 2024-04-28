(ns app.shared.boiler.animation-water-bubbles
  (:require [helix.core :refer [defnc $]]
            [refx.alpha :refer [use-sub]]
            [helix.dom :as d]))

(defnc water-bubbles []
  (let [sim (use-sub [:sim])
        burner-status (use-sub [:burner-status])
        show-animation (and (= sim "run") (= burner-status "on"))
        hide-class (if show-animation "" " hide")]
    ($ "foreignObject" {:x 414.71 :y 332.73 :width 672 :height 165}
       (d/div {:style {:display "flex"}}
              (d/div {:class (str "water-bubbles" hide-class)})
              (d/div {:class (str "water-bubbles" hide-class)
                      :style {:animation-delay "8.5s"}})
              (d/div {:class (str "water-bubbles" hide-class)
                      :style {:animation-delay "7s"}})
              (d/div {:class (str "water-bubbles" hide-class)
                      :style {:animation-delay "6.5s"}})
              (d/div {:class (str "water-bubbles" hide-class)
                      :style {:animation-delay "7.7s"}})
              (d/div {:class (str "water-bubbles" hide-class)
                      :style {:animation-delay "6.2s"}})))))
