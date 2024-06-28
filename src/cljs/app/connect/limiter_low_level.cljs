(ns app.connect.limiter-low-level
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.controller :as controller]
            [app.connect.URS-60.URS-60 :refer [URS-60]]))

(defnc limiter-low-level []
  (let [limiter-low-level-id (use-sub [:limiter-low-level-id])
        limiter-low-level-full-screen (use-sub [:limiter-low-level-full-screen])]
    (<>
      (case limiter-low-level-id
        "none" ($ controller/placeholder {:w "13.5%" :x "30%" :y "1.6%" :title "Limiter"})
        "URS 60" ($ URS-60 {:w "13.5%" :x "30%" :y "1.6%"})
        nil)
      ($ controller/full-screen
         {:show     limiter-low-level-full-screen
          :on-close #(dispatch [:change-limiter-low-level-full-screen false])}
         (case limiter-low-level-id
           "URS 60" ($ URS-60 {:w "40%" :x "30%" :y "38.85%"})
           nil)))))
