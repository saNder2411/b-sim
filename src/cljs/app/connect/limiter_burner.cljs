(ns app.connect.limiter-burner
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.equipment-placeholder :refer [equipment-placeholder]]
            [app.shared.components.equipment-full-screen :refer [equipment-full-screen]]
            [app.connect.URS-60.URS-60 :refer [URS-60]]))

(defnc burner-limiter []
  (let [burner-limiter-id (use-sub [:burner-limiter-id])
        burner-limiter-full-screen (use-sub [:burner-limiter-full-screen])]
    (<>
      (case burner-limiter-id
        "none" ($ equipment-placeholder {:w "13.5%" :x "30%" :y "1.6%" :title "Limiter"})
        "URS-60" ($ URS-60 {:w "13.5%" :x "30%" :y "1.6%"})
        nil)
      ($ equipment-full-screen
         {:show     burner-limiter-full-screen
          :on-close #(dispatch [:change-burner-limiter-full-screen false])}
         (case burner-limiter-id
           "URS-60" ($ URS-60 {:w "40%" :x "30%" :y "38.85%"})
           nil)))))
