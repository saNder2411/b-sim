(ns app.shared.components.limiter-btn-test
  (:require [helix.core :refer [defnc <>]]
            [helix.dom :as d]))

(defnc limiter-btn-test [{:keys [btn-path label-path active on-mouse-down on-mouse-up]}]
  (let [class (cond-> ""
                      active (str "start-test-btn"))]
    (<>
      (d/path {:class class
               :fill  "#0084bc"
               :d     btn-path
               :on-mouse-down (if active on-mouse-down nil)
               :on-mouse-up (if active on-mouse-up nil)})
      (d/path {:fill "#e5e6e4" :pointer-events "none" :d label-path}))))
