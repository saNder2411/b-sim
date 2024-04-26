(ns app.shared.select-kit-menu
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.select-kit-btn :refer [select-kit-btn]]))

(defnc select-kit-menu []
  (let [kit (use-sub [:kit])
        sim (use-sub [:sim])]
    (d/svg {:style {:width "29.06%" :top "4.4%" :left "0%"} :viewBox "0 0 566 60"}
           ($ select-kit-btn {:x 58
                              :y 12
                              :label "SPECTOR"
                              :sub-label "module"
                              :active (= kit "module")
                              :disable (not (= sim "stopped"))
                              :on-click #(dispatch [:change-kit "module"])})

           (d/path {:fill "#aaa" :d "M282.3,39.711l5.329-19.008h1.805l-5.316,19.008Z"})

           ($ select-kit-btn {:x 294
                              :y 12
                              :label "SPECTOR"
                              :sub-label "connect"
                              :active (= kit "connect")
                              :disable (not (= sim "stopped"))
                              :on-click #(dispatch [:change-kit "connect"])}))))
