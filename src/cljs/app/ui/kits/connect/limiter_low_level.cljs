(ns app.ui.kits.connect.limiter-low-level
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.controller :as controller]
            [app.ui.kits.connect.URS-60.URS-60 :refer [URS-60]]))

(defnc limiter-low-level []
  (let [low-limiter-id (use-sub [:low-limiter-id])
        show-full-screen (use-sub [:current-low-limiter-data-by-path [:full-screen]])]
    (<>
      (case low-limiter-id
        "none" ($ controller/placeholder {:w "13.5%" :x "30%" :y "1.6%" :title "Limiter"})
        "URS 60" ($ URS-60 {:w "13.5%" :x "30%" :y "1.6%"})
        nil)
      ($ controller/full-screen
         {:show     show-full-screen
          :on-close #(dispatch [:change-current-low-limiter [[:full-screen] false]])}
         (case low-limiter-id
           "URS 60" ($ URS-60 {:w "40%" :x "30%" :y "38.85%"})
           nil)))))
