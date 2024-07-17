(ns app.app
  (:require [helix.core :refer [defnc $]]
            [helix.hooks :refer [use-effect]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.modal :as modal]
            [app.ui.shared.components.notifications :refer [notifications]]
            [app.ui.shared.sidebar.core :refer [sidebar]]
            [app.ui.kits.connect.cables :refer [cables]]
            [app.ui.kits.connect.core :refer [connect-kit]]
            [app.ui.shared.boiler-plant.core :refer [boiler-plant]]))

(defn window-resizing-handler [w]
  (dispatch [:window-resize (.-innerWidth (.-target w)) (.-innerHeight (.-target w))]))

(defnc app []
  (use-effect :once
              (.addEventListener js/window "resize" window-resizing-handler)
              (fn []
                (.removeEventListener js/window "resize" window-resizing-handler)))

  (let [kit (use-sub [:kit])
        w (use-sub [:screen-w])
        h (use-sub [:screen-h])
        scale-f (use-sub [:screen-scale-f])]

    (d/div {:class "kit-wrapper" :style {:width (str w "px") :height (str h "px")}}
           (d/p {:class "version-tag"}
                (d/span {:style {:font-size (str (* 14 scale-f) "px")}} "Version: 1.0"))

           ($ notifications)
           ($ modal/info)

           (when (= kit :connect)
             ($ cables))
           ($ boiler-plant)
           ($ sidebar)
           (case kit
             :connect ($ connect-kit)
             nil))))