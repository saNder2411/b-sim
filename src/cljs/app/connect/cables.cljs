(ns app.connect.cables
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [app.connect.cables-controller :refer [controller-cables]]
            [app.connect.cables-probe :refer [probe-cables]]))

(defnc cables []
  (d/svg {:style {:left "28.73%" :top "7.15%" :width "68.3%"} :viewBox "0 0 1311.4 400"}
         ($ controller-cables)
         ($ probe-cables)))
