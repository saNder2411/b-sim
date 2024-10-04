(ns app.ui.shared.sidebar.control-panel.buttons-panel.show-hide
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.sidebar.control-panel.buttons-panel.layer :refer [btn-layer]]))

(defnc btn-show-hidde []
  (let [show (use-sub [:kit/data-by-path [:general-settings :ctrl-panel-view]])]
    (d/g
      ($ btn-layer {:dl       "M85.317,140.582H84.4A37.494,37.494,0,0,1,46.9,103.089V78.773H122.81V103.09A37.494,37.494,0,0,1,85.317,140.582Z"
                    :dm       "M84.4,139.579a37.164,37.164,0,0,1-37.122-37.121V78.515h75.165v23.943a37.164,37.164,0,0,1-37.122,37.121Z"
                    :dt       "M122.438,78.515v23.943a37.164,37.164,0,0,1-37.122,37.121H84.4a37.164,37.164,0,0,1-37.122-37.121V78.515"
                    :mask-url "url(#btn-pnl-mask-0)"})
      (if show
        (d/path {:fill "#eee" :d "M102.887,93.189A1.571,1.571,0,0,1,104,95.87L85.966,113.9a1.569,1.569,0,0,1-2.22,0L65.714,95.87a1.57,1.57,0,0,1,2.221-2.221L84.856,110.57l16.92-16.921A1.566,1.566,0,0,1,102.887,93.189Z"})
        (d/path {:fill "#eee" :d "M66.825,114.361a1.571,1.571,0,0,1-1.111-2.681L83.745,93.649a1.57,1.57,0,0,1,2.221,0L104,111.68a1.57,1.57,0,1,1-2.22,2.221L84.855,96.98,67.935,113.9A1.565,1.565,0,0,1,66.825,114.361Z"}))

      (d/circle {:class    "touch-area" :cx 85 :cy 109 :r 30
                 :on-click #(dispatch [:kit-data-by-path/change [[:general-settings :ctrl-panel-view] (not show)]])}))))