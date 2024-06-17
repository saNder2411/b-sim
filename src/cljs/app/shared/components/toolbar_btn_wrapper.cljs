(ns app.shared.components.toolbar-btn-wrapper
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]))

(defnc toolbar-btn-wrapper [{:keys [x y inactive on-click children]}]
  (d/g {:transform (str "translate(" x ", " y ")")
        :class     (str "toolbar-btn-" (if inactive "inactive" "active"))
        :on-click  (if inactive nil on-click)}
       children))
