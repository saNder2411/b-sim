(ns app.connect.pump-limiter
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.equipment-placeholder :refer [equipment-placeholder]]
            [app.shared.components.equipment-full-screen :refer [equipment-full-screen]]
            [app.connect.URS-61.URS-61 :refer [URS-61]]))

(defnc pump-limiter []
  (let [pump-limiter-id (use-sub [:pump-limiter-id])
        pump-limiter-full-screen (use-sub [:pump-limiter-full-screen])]
    (<>
      (case pump-limiter-id
        "none" ($ equipment-placeholder {:x "44%" :y "1.6%" :w "13.5%" :title "Limiter"})
        "URS 61" ($ URS-61 {:x "44%" :y "1.6%" :w "13.5%"})
        nil)
      ($ equipment-full-screen
         {:show     pump-limiter-full-screen
          :on-close #(dispatch [:change-pump-limiter-full-screen false])}
         (case pump-limiter-id
           "URS 61" ($ URS-61 {:x "30%" :y "38.85%" :w "40%"})
           nil)))))
