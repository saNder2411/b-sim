(ns app.shared.boiler.burner-flame-animation
  (:require [helix.core :refer [defnc $]]
            [helix.hooks :refer [use-state use-effect]]
            [helix.dom :as d]
            [cljs.core.async :refer [<! timeout go]]))


(defnc burner-flame-animation []
  (let [[frame-pos set-frame-pos!] (use-state 0)
        next-shift-pos (if (< frame-pos 2139) 93 -2139)
        run-animation #(go
                         (<! (timeout 125))
                         (set-frame-pos! + next-shift-pos))]
    (use-effect [frame-pos]
                (run-animation))
    (d/div {:style {:width               "600px"
                    :height              "93px"
                    :background-image    "url(assets/img/flame-sprite.png)"
                    :background-size     "600px 2232px"
                    :background-position (str "0px -" frame-pos "px")}})))
