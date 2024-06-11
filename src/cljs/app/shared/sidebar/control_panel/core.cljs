(ns app.shared.sidebar.control-panel.core
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]
            [app.shared.sidebar.control-panel.lang-flag :refer [lang-flag]]
            [app.shared.sidebar.control-panel.mode.core :refer [operation-mode]]
            [app.shared.sidebar.control-panel.slider.core :refer [slider]]
            [app.shared.sidebar.control-panel.buttons-panel.core :refer [buttons-panel]]))

(defnc control-panel []
  (let [show (use-sub [:ctrl-panel-view])
        y (if show 541 741)]
    (<>
      (d/g {:style {:transform  (str "translateY(" y "px)")
                    :transition "transform 300ms ease-out"}}
           (d/g
             ($ "image" {:width 566 :height 463 :opacity 0.3 :isolation "isolate" :href "assets/img/ctrl-pnl-shadow.png"})
             (d/path {:fill "#989fa9" :isolation "isolate" :d "M517.227,33.873H473.014a15.338,15.338,0,0,0-15.337,15.338v3.894h0V76.087a5.817,5.817,0,0,1-5.817,5.817H61.34a28.252,28.252,0,0,0-28.252,28.252V161.4c0,.014,0,.026,0,.04V429.588h499.48V49.211A15.338,15.338,0,0,0,517.227,33.873Z"})
             (d/path {:fill "#fff" :opacity 0.5 :d "M517.227,33.873a15.338,15.338,0,0,1,15.338,15.338V429.588H33.084V161.435c0-.014,0-.026,0-.04V110.156A28.252,28.252,0,0,1,61.34,81.9H451.859a5.817,5.817,0,0,0,5.817-5.817V53.105h0V49.211a15.338,15.338,0,0,1,15.337-15.338h44.213m0-1H473.014a16.356,16.356,0,0,0-16.337,16.338V76.087a4.823,4.823,0,0,1-4.817,4.817H61.34a29.286,29.286,0,0,0-29.252,29.252v51.171l0,.013,0,.095V430.588h501.48V49.211a16.356,16.356,0,0,0-16.338-16.338Z"}))

           ($ lang-flag)
           ($ operation-mode)

           (d/line {:x1 66.403 :y1 167.444 :x2 498.535 :y2 167.444 :class "ctrl-panel-horizontal-line"})

           ($ slider {:x         66
                      :y         216
                      :title     "STEAM"
                      :max-val   35
                      :v-%       50
                      :next-v-%  50
                      :active    true
                      :value-box {:x 78.7 :y 0 :width 34.14 :fraction 2 :unit "t/h" :fill "#6f7684"}})

           ($ slider {:x         66
                      :y         300
                      :title     "FEEDWATER"
                      :max-val   70
                      :v-%       0
                      :next-v-%  0
                      :active    false
                      :value-box {:x 78.7 :y 0 :width 34.14 :fraction 2 :unit "t/h" :fill "#6f7684"}}))

      ($ buttons-panel))))
