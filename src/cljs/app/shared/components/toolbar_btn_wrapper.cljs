(ns app.shared.components.toolbar-btn-wrapper
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]))

(defnc toolbar-btn-wrapper [{:keys [x y inactive on-click children]}]
  (d/g {:style {:transform (str "translate(" x "px, " y "px)")}
        :class     (if inactive "inactive" "")
        :on-click  (if inactive nil on-click)}
       children))
