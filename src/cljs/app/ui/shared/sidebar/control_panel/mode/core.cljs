(ns app.ui.shared.sidebar.control-panel.mode.core
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.sidebar.control-panel.mode.button :refer [mode-button]]))

(defnc operation-mode []
  (let [mode (use-sub [:kit/data-by-path [:general-settings :operation-mode]])]
    (<>
      (d/text {:x 65 :y 135 :fill "#eee" :font-size "26px" :letter-spacing "0.025em"} "Operation")

      ($ mode-button {:x        -4
                      :label    "NORMAL"
                      :active   (= mode "normal")
                      :on-click #(dispatch [:kit-data-by-path/change [[:general-settings :operation-mode] "normal"]])})

      (d/path {:fill "#eee" :d "M366.3,136.711l5.329-19.008h1.805l-5.316,19.008Z"})

      ($ mode-button {:x        132
                      :label    "STANDBY"
                      :active   (= mode "standby")
                      :on-click #(dispatch [:kit-data-by-path/change [[:general-settings :operation-mode] "standby"]])}))))
