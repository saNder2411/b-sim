(ns app.ui.shared.sidebar.select-kit.core
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.sidebar.select-kit.btn :refer [select-kit-btn]]))

(defnc select-kit-menu [{:keys [x y]}]
  (let [kit (use-sub [:kit])
        sim (use-sub [:sim])]
    (d/g {:transform (str "translate(" x ", " y ")")}
         ($ select-kit-btn {:x         0
                            :y         0
                            :label     "SPECTOR"
                            :sub-label "module"
                            :active    (= kit :module)
                            :disable   (not= sim "stop")
                            :on-click  #(dispatch [:change-kit :module])})

         (d/path {:fill "#aaa" :d "M224.3,27.711l5.329-19.008h1.805l-5.316,19.008Z"})

         ($ select-kit-btn {:x         236
                            :y         0
                            :label     "SPECTOR"
                            :sub-label "connect"
                            :active    (= kit :connect)
                            :disable   (not= sim "stop")
                            :on-click  #(dispatch [:change-kit :connect])}))))
