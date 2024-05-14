(ns app.shared.boiler.animation-steam-pops
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub]]
            [helix.dom :as d]))

(defnc steam-pops []
  (let [sim (use-sub [:sim])
        show-animation (= sim "run")
        hide-class (if show-animation "" " hide")]
    (<>
      ($ "foreignObject" {:x 414.71 :y 324 :width 170 :height 88}
         (d/div {:style {:display "flex" :flex-wrap "wrap" :align-items "center" :height 88}}

                (d/div {:class (str "steam-pops" hide-class)})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "8.5s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "7s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "6.5s"}})

                (d/div {:class (str "steam-pops" hide-class)
                        :style {:margin-left 28 :animation-delay "7.7s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "6.2s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "8.5s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "7s"}})

                (d/div {:class (str "steam-pops" hide-class)})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "8.5s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "7s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "6.5s"}})

                (d/div {:class (str "steam-pops" hide-class)
                        :style {:margin-left 28 :animation-delay "7.7s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "6.2s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "8.5s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "7s"}})))

      ($ "foreignObject" {:x 706.71 :y 324 :width 70 :height 88}
         (d/div {:style {:display "flex" :flex-wrap "wrap" :align-items "center" :height 88}}
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:margin-left 28}})

                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "7.7s"}})

                (d/div {:class (str "steam-pops" hide-class)
                        :style {:margin-left 28}})

                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "7.7s"}})))

      ($ "foreignObject" {:x 792.71 :y 324 :width 76 :height 88}
         (d/div {:style {:display "flex" :flex-wrap "wrap" :align-items "center" :height 88}}
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:margin-left 28}})

                (d/div {:class (str "steam-pops" hide-class)
                        :style {:margin-left 14 :animation-delay "7.7s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:margin-left 0 :animation-delay "7.7s"}})

                (d/div {:class (str "steam-pops" hide-class)
                        :style {:margin-left 28}})

                (d/div {:class (str "steam-pops" hide-class)
                        :style {:margin-left 14 :animation-delay "7.7s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:margin-left 0 :animation-delay "7.7s"}})))

      ($ "foreignObject" {:x 894.71 :y 324 :width 188 :height 88}
         (d/div {:style {:display "flex" :flex-wrap "wrap" :align-items "center" :height 88}}

                (d/div {:class (str "steam-pops" hide-class)})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "8.5s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "7s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "6.5s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "8.5s"}})


                (d/div {:class (str "steam-pops" hide-class)
                        :style {:margin-left 28 :animation-delay "7.7s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "6.2s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "8.5s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "7s"}})

                (d/div {:class (str "steam-pops" hide-class)})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "8.5s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "7s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "6.5s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "8.5s"}})

                (d/div {:class (str "steam-pops" hide-class)
                        :style {:margin-left 28 :animation-delay "7.7s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "6.2s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "8.5s"}})
                (d/div {:class (str "steam-pops" hide-class)
                        :style {:animation-delay "7s"}}))))))
