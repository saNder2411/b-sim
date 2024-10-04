(ns app.ui.kits.connect.limiter-high-level
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.controller :as controller]
            [app.ui.kits.connect.URS-61.URS-61 :refer [URS-61]]))

(defnc limiter-high-level []
  (let [high-limiter-id (use-sub [:high-limiter/id])
        show-full-screen (use-sub [:current-high-limiter/data-by-path [:full-screen?]])]
    (<>
      (case high-limiter-id
        "none" ($ controller/placeholder {:x "44%" :y "1.6%" :w "13.5%" :title "Limiter"})
        "URS 61" ($ URS-61 {:x "44%" :y "1.6%" :w "13.5%"})
        nil)
      ($ controller/full-screen
         {:show     show-full-screen
          :on-close #(dispatch [:current-high-limiter/change [[:full-screen?] false]])}
         (case high-limiter-id
           "URS 61" ($ URS-61 {:x "30%" :y "38.85%" :w "40%"})
           nil)))))
