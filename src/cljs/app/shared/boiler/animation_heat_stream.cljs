(ns app.shared.boiler.animation-heat-stream
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub]]
            [helix.dom :as d]))

(defnc heat-stream []
  (let [sim (use-sub [:sim])
        burner-status (use-sub [:burner-status])
        show-animation (and (= sim "run") (= burner-status "on"))
        hide-class (if show-animation "" " hide")]
    (<>
      ($ "foreignObject" {:x 394 :y 452.4 :width 610 :height 19}
         (d/div {:class (str "heat-stream-btm" hide-class)}))

      ($ "foreignObject" {:x 404 :y 416.4 :width 670 :height 19}
         (d/div {:class (str "heat-stream-top" hide-class)}))

      ($ "foreignObject" {:x 994 :y 448.4 :width 67 :height 130}
         (d/div {:class (str "heat-stream-turn-box-btm" hide-class)}))

      ($ "foreignObject" {:x 322 :y 414 :width 65 :height 65}
         (d/div {:class (str "heat-stream-turn-box-top" hide-class)})))))
