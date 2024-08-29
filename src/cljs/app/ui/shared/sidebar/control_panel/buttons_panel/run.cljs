(ns app.ui.shared.sidebar.control-panel.buttons-panel.run
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.sidebar.control-panel.buttons-panel.layer :refer [btn-layer]]
            [cljs.core.async :refer [<! timeout go]]))

(defnc btn-run []
  (let [sim (use-sub [:sim])
        disable (or (= sim "starting") (= sim "stopping"))
        start #(go
                 (dispatch [:change-sim "starting"])
                 (dispatch [:change-current-hotspot "none"])
                 (<! (timeout 6000))
                 (dispatch [:ws/send! [:sim/run]])
                 (dispatch [:change-sim "run"]))
        play #(do
                (dispatch [:ws/send! [:sim/run]])
                (dispatch [:change-sim "run"]))
        pause #(do
                 (dispatch [:ws/send! [:sim/pause]])
                 (dispatch [:change-sim "pause"]))
        start-stop-handler (case sim
                             "stop" start
                             "pause" play
                             "run" pause
                             pause)]
    (d/g
      ($ btn-layer {:dl       "M468.234,188.637H467a50.309,50.309,0,0,1-50.31-50.31V78.861H518.544v59.467A50.31,50.31,0,0,1,468.234,188.637Z"
                    :dm       "M467,187.291a49.868,49.868,0,0,1-49.811-49.81V78.515H518.044v58.966a49.867,49.867,0,0,1-49.811,49.81Z"
                    :dt       "M518.044,78.515v58.966a49.867,49.867,0,0,1-49.811,49.81H467a49.868,49.868,0,0,1-49.811-49.81V78.515"
                    :mask-url "url(#btn-pnl-mask-3)"})

      (d/g {:opacity (if disable 0.25 1)}
           (d/circle {:class  "btn-pnl-stroke"
                      :stroke "#0f40ea"
                      :cx     467.615 :cy 136.862 :r 37.804})

           (if (or (= sim "stop") (= sim "pause") (= sim "stopping"))
             (d/path {:class  "btn-pnl-stroke"
                      :stroke "#0f40ea"
                      :d      "M487.487,134.394,458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a2.979,2.979,0,0,0,0-5.16L458.053,117.4a2.979,2.979,0,0,0-4.469,2.58v33.988a2.98,2.98,0,0,0,4.469,2.58l29.434-16.994a3.117,3.117,0,0,0,.67-4.273C487.952,134.984,487.7,134.727,487.487,134.394Z"})
             (d/rect {:class  "btn-pnl-stroke"
                      :stroke "#0f40ea"
                      :x      448.862 :y 118.108 :width 37.507 :height 37.507 :rx 4.097})))

      (d/circle {:class    (str "touch-area" (if disable " disable" "")) :cx 467.5 :cy 137 :r 40
                 :on-click (if disable nil start-stop-handler)})

      (d/text {:class "btn-pnl-label" :x 467.5 :y 217}
              "Start / Stop"))))