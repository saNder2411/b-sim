(ns app.shared.components.toolbar
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]))

(defnc toolbar [{:keys [children]}]
  (let [show-toolbar (use-sub [:show-toolbar])]
    (d/svg {:width   "70.7%"
            :viewBox "0 0 1347.7 172.76"
            :style   {:left "29.7%" :top "83.8%"}
            :class   (if show-toolbar "" "toolbar-hide")}
           (d/path {:fill         "#0c245b"
                    :stroke       "#2b87e5"
                    :stroke-width 0.5
                    :d            "m87.5 36.544h1172.1a49.852 49.852 0 0 1 49.85 49.852 49.851 49.851 0 0 1-49.851 49.85h-1172.1a49.851 49.851 0 0 1-49.852-49.846 49.851 49.851 0 0 1 49.846-49.856z"})
           children)))
