(ns app.shared.boiler.animation-steam-pops
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub]]
            [helix.dom :as d]))

(defnc steam-pops []
  (let [sim (use-sub [:sim])
        show-animation (= sim "run")
        hide-class (if show-animation "" " hide")]

    (if show-animation
      (<>
        ($ "foreignObject" {:x 414.71 :y 324 :width 170 :height 88}
           (d/div {:style {:display "flex" :flex-wrap "wrap" :align-items "center" :height 88}}

                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "46.5s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "48.5s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "47s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "46.5s"}})

                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:margin-left 28 :animation-delay "37.7s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "36.2s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "38.5s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "37s"}})

                  (d/div {:class (str "steam-pops" hide-class)})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "28.5s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "27s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "26.5s"}})

                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:margin-left 28 :animation-delay "17.7s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "16.2s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "18.5s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "17s"}})))

        ($ "foreignObject" {:x 706.71 :y 324 :width 70 :height 88}
           (d/div {:style {:display "flex" :flex-wrap "wrap" :align-items "center" :height 88}}
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:margin-left 28 :animation-delay "47.7s"}})

                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "37.7s"}})

                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:margin-left 28 :animation-delay "27.7s"}})

                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "17.7s"}})))

        ($ "foreignObject" {:x 792.71 :y 324 :width 76 :height 88}
           (d/div {:style {:display "flex" :flex-wrap "wrap" :align-items "center" :height 88}}
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:margin-left 28 :animation-delay "47.7s"}})

                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:margin-left 14 :animation-delay "37.7s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:margin-left 0 :animation-delay "37.7s"}})

                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:margin-left 28 :animation-delay "27.7s"}})

                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:margin-left 14 :animation-delay "17.7s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:margin-left 0 :animation-delay "17.7s"}})))

        ($ "foreignObject" {:x 894.71 :y 324 :width 188 :height 88}
           (d/div {:style {:display "flex" :flex-wrap "wrap" :align-items "center" :height 88}}

                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "47.7s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "48.5s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "47s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "46.5s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "48.5s"}})


                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:margin-left 28 :animation-delay "37.7s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "36.2s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "38.5s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "37s"}})

                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "27.7s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "28.5s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "27s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "26.5s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "28.7s"}})

                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:margin-left 28 :animation-delay "17.7s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "16.2s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "18.5s"}})
                  (d/div {:class (str "steam-pops" hide-class)
                          :style {:animation-delay "17s"}}))))
      nil)))
