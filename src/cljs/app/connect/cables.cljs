(ns app.connect.cables
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [app.connect.cables-controller :refer [cables-controller]]
            [app.connect.cables-probe :refer [cables-probe]]))

(defnc cables []
  (d/svg {:style {:left "28.73%" :top "7.15%" :width "68.3%"} :viewBox "0 0 1311.4 400"}
         ($ cables-controller)
         ($ cables-probe)))
