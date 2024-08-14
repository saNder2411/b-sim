(ns app.ui.kits.connect.converter
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.controller :as controller]
            [app.ui.kits.connect.URW-60.URW-60 :refer [URW-60]]))

(defnc converter []
  (let [level-probe-id (use-sub [:level-probe-id])
        converter-id (use-sub [:converter-controller-id])
        full-screen? (use-sub [:current-converter-data-by-path [:full-screen?]])]
    (if (= level-probe-id "NRGT 26-2")
      (<>
        (case converter-id
          "URW 60" ($ URW-60 {:x "86%" :y "1.6%" :w "5.77%"})
          nil)
        ($ controller/full-screen
           {:show     full-screen?
            :on-close #(dispatch [:change-current-converter [[:full-screen?] false]])}
           (case converter-id
             "URW 60" ($ URW-60 {:x "52%" :y "28%" :w "20%"})
             nil)))
      nil)))
