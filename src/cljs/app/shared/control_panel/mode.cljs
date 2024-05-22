(ns app.shared.control-panel.mode
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.control-panel.mode-btn :refer [mode-btn]]))

(defnc operation-mode []
  (let [mode (use-sub [:operation-mode])]
    (<>
      (d/text {:x 66 :y 135 :fill "#eee" :font-size "26px" :letter-spacing "0.025em"} "Operation")

      ($ mode-btn {:x        0
                   :label    "NORMAL"
                   :active   (= mode "normal")
                   :on-click #(dispatch [:change-operation-mode "normal"])})

      (d/path {:fill "#eee" :d "M370.3,136.711l5.329-19.008h1.805l-5.316,19.008Z"})

      ($ mode-btn {:x        136
                   :label    "STANDBY"
                   :active   (= mode "standby")
                   :on-click #(dispatch [:change-operation-mode "standby"])}))))
