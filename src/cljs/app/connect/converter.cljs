(ns app.connect.converter
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.equipment-full-screen :refer [equipment-full-screen]]
            [app.connect.URW-60.URW-60 :refer [URW-60]]))

(defnc converter []
  (let [level-probe-id (use-sub [:level-probe-id])
        converter-id (use-sub [:converter-id])
        converter-full-screen (use-sub [:converter-full-screen])]
    (if (= level-probe-id "NRGT-26-2")
      (<>
        (case converter-id
          "URW-60" ($ URW-60 {:x "86%" :y "1.6%" :w "5.77%"})
          nil)
        ($ equipment-full-screen
           {:show     converter-full-screen
            :on-close #(dispatch [:change-converter-full-screen false])}
           (case converter-id
             "URW-60" ($ URW-60 {:x "52%" :y "28%" :w "20%"})
             nil)))
      nil)))
