(ns app.shared.boiler-plant.valves.continuous.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub]]
            [app.shared.components.toolbar-title :refer [toolbar-title]]
            [app.shared.components.toolbar-btn-wrapper :refer [toolbar-btn-wrapper]]
            [app.shared.components.toolbar-btn-settings :refer [toolbar-btn-settings]]
            [app.shared.components.toolbar-btn-divider :refer [toolbar-btn-divider]]
            [app.shared.components.toolbar-btn-info :refer [toolbar-btn-info]]
            [app.shared.sidebar.control-panel.slider.core :refer [slider]]))


(defnc valve-continuous-toolbar-panel []
  (let [show-continuous-valve-toolbar-panel (use-sub [:show-continuous-valve-toolbar-panel])]
    (when show-continuous-valve-toolbar-panel
      (<>
        ($ toolbar-title {:x 85 :y 95 :fill "#efefef" :title "Continuous Blowdown Valve"})


        ($ slider {:x         739
                   :y         74
                   :z         0.9
                   :max-val   100
                   :v-%       0
                   :next-v-%  0
                   :active    false
                   :value-box {:x 70 :y 0 :width 24 :fraction 0 :unit "%" :fill "transparent"}})

        ($ toolbar-btn-wrapper {:x 1079 :y 54}
           ($ toolbar-btn-divider))

        ($ toolbar-btn-wrapper {:x 1124 :y 54 :on-click (fn [])}
           ($ toolbar-btn-settings))

        ($ toolbar-btn-wrapper {:x 1179 :y 54}
           ($ toolbar-btn-divider))

        ($ toolbar-btn-wrapper {:x 1224 :y 54}
           ($ toolbar-btn-info))))))
