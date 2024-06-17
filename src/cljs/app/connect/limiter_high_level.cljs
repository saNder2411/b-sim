(ns app.connect.limiter-high-level
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.equipment-placeholder :refer [equipment-placeholder]]
            [app.shared.components.equipment-full-screen :refer [equipment-full-screen]]
            [app.connect.URS-61.URS-61 :refer [URS-61]]))

(defnc limiter-high-level []
  (let [limiter-high-level-id (use-sub [:limiter-high-level-id])
        limiter-high-level-full-screen (use-sub [:limiter-high-level-full-screen])]
    (<>
      (case limiter-high-level-id
        "none" ($ equipment-placeholder {:x "44%" :y "1.6%" :w "13.5%" :title "Limiter"})
        "URS 61" ($ URS-61 {:x "44%" :y "1.6%" :w "13.5%"})
        nil)
      ($ equipment-full-screen
         {:show     limiter-high-level-full-screen
          :on-close #(dispatch [:change-limiter-high-level-full-screen false])}
         (case limiter-high-level-id
           "URS 61" ($ URS-61 {:x "30%" :y "38.85%" :w "40%"})
           nil)))))
