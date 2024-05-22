(ns app.shared.components.equipment-full-screen
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]))

(defnc equipment-full-screen [{:keys [show on-close children]}]
  (let [class (if show "full-screen-mask" "hide")
        on-mask-click (fn [e]
                        (when (= "full-screen-mask" (.-id (.-target e)))
                          (on-close)))]
    (d/div {:class    class
            :id       "full-screen-mask"
            :on-click on-mask-click}
           (d/div {:style {:margin "auto"}}
                  children))))
