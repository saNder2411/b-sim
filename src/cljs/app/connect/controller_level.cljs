(ns app.connect.controller-level
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.equipment-placeholder :refer [equipment-placeholder]]
            [app.shared.components.equipment-full-screen :refer [equipment-full-screen]]
            [app.connect.NRR-2-60.NRR-2-60 :refer [NRR-2-60]]
            [app.connect.NRR-2-60-3C.NRR-2-60-3C :refer [NRR-2-60-3C]]
            [app.connect.NRR-2-61.NRR-2-61 :refer [NRR-2-61]]
            [app.connect.NRR-2-61-3C.NRR-2-61-3C :refer [NRR-2-61-3C]]))

(defnc controller-level []
  (let [level-controller-id (use-sub [:level-controller-id])
        level-controller-full-screen (use-sub [:level-controller-full-screen])]
    (<>
      (case level-controller-id
        "none" ($ equipment-placeholder {:x "72%" :y "1.6%" :w "13.5%" :title "Level"})
        "NRR-2-60" ($ NRR-2-60 {:x "72%" :y "1.6%" :w "13.5%"})
        "NRR-2-60-3C" ($ NRR-2-60-3C {:x "72%" :y "1.6%" :w "13.5%"})
        "NRR-2-61" ($ NRR-2-61 {:x "72%" :y "1.6%" :w "13.5%"})
        "NRR-2-61-3C" ($ NRR-2-61-3C {:x "72%" :y "1.6%" :w "13.5%"})
        nil)
      ($ equipment-full-screen
         {:show     level-controller-full-screen
          :on-close #(dispatch [:change-level-controller-full-screen false])}
         (case level-controller-id
           "NRR-2-60" ($ NRR-2-60 {:x "30%" :y "38.85%" :w "40%"})
           "NRR-2-60-3C" ($ NRR-2-60-3C {:x "30%" :y "38.85%" :w "40%"})
           "NRR-2-61" ($ NRR-2-61 {:x "30%" :y "38.85%" :w "40%"})
           "NRR-2-61-3C" ($ NRR-2-61-3C {:x "30%" :y "38.85%" :w "40%"})
           nil)))))