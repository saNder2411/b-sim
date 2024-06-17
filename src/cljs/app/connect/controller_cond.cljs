(ns app.connect.controller-cond
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.equipment-placeholder :refer [equipment-placeholder]]
            [app.shared.components.equipment-full-screen :refer [equipment-full-screen]]
            [app.connect.LRR-1-60.LRR-1-60 :refer [LRR-1-60]]))

(defnc controller-cond []
  (let [cond-controller-id (use-sub [:cond-controller-id])
        cond-controller-full-screen (use-sub [:cond-controller-full-screen])]
    (<>
      (case cond-controller-id
        "none" ($ equipment-placeholder {:x "58%" :y "1.6%" :w "13.5%" :title "Conductivity"})
        "LRR 1-60" ($ LRR-1-60 {:x "58%" :y "1.6%" :w "13.5%"})
        nil)
      ($ equipment-full-screen
         {:show     cond-controller-full-screen
          :on-close #(dispatch [:change-cond-controller-full-screen false])}
         (case cond-controller-id
           "LRR 1-60" ($ LRR-1-60 {:x "30%" :y "38.85%" :w "40%"})
           nil)))))
