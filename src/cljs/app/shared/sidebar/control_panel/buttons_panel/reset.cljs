(ns app.shared.sidebar.control-panel.buttons-panel.reset
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.sidebar.control-panel.buttons-panel.layer :refer [btn-layer]]
            [cljs.core.async :refer [<! timeout go]]))

(defnc btn-reset []
  (let [sim (use-sub [:sim])
        disable (or (= sim "starting") (= sim "stopping"))
        stop-and-reset #(go
                          (dispatch [:change-sim "stopping"])
                          (<! (timeout 2000))
                          (dispatch [:reset-sim]))
        reset #(dispatch [:reset-sim])
        reset-handler (case sim
                        "run" stop-and-reset
                        "pause" stop-and-reset
                        reset)]
    (d/g
      ($ btn-layer {:dl          "M317.26,188.637h-1.237a50.31,50.31,0,0,1-50.31-50.31V78.861H367.57v59.467A50.31,50.31,0,0,1,317.26,188.637Z"
                       :dm       "M316.024,187.291a49.867,49.867,0,0,1-49.811-49.81V78.515H367.071v58.966a49.868,49.868,0,0,1-49.811,49.81Z"
                       :dt       "M367.071,78.515v58.966a49.868,49.868,0,0,1-49.811,49.81h-1.236a49.867,49.867,0,0,1-49.811-49.81V78.515"
                       :mask-url "url(#btn-pnl-mask-2)"})

      (d/g {:opacity (if disable 0.25 1)}
           (d/circle {:class  "btn-pnl-stroke"
                      :stroke "#db1d43"
                      :cx     316.642 :cy 136.883 :r 37.804})
           (d/circle {:class  "btn-pnl-stroke"
                      :stroke "#db1d43"
                      :cx     316.642 :cy 136.883 :r 20.804})
           (d/path {:fill   "#db1d43"
                    :stroke "#db1d43"
                    :d      "M 289.837433 132.725815 L 294.871155 141.405945 C 295.028778 141.677811 295.319489 141.84491 295.633759 141.844269 C 295.947998 141.843613 296.238037 141.675323 296.394531 141.402802 L 301.394775 132.702591 C 301.551453 132.430176 301.550873 132.094849 301.393219 131.822998 C 301.235565 131.551132 300.944824 131.384064 300.630585 131.384735 L 290.595642 131.404526 C 290.281311 131.404938 289.991119 131.57309 289.834503 131.845612 C 289.677887 132.118134 289.67865 132.453522 289.836548 132.725311 L 294.871155 141.405945 C 295.028778 141.677811 295.319489 141.84491 295.633759 141.844269 C 295.947998 141.843613 296.238037 141.675323 296.394531 141.402802 L 301.394775 132.702591 C 301.551453 132.430176 301.550873 132.094849 301.393219 131.822998 C 301.235565 131.551132 300.944824 131.384064 300.630585 131.384735 L 290.595642 131.404526 C 290.281403 131.40509 289.991302 131.573273 289.834717 131.845734 C 289.678131 132.118195 289.678833 132.453506 289.836548 132.725311 Z"})
           (d/path {:fill         "none"
                    :stroke       "#db1d43"
                    :stroke-width 2
                    :d            "M 288 145 L 304 145 L 304 143 L 288 143 Z"}))

      (d/circle {:class    (str "touch-area" (if disable " disable" "")) :cx 316.5 :cy 137 :r 40
                 :on-click (if disable nil reset-handler)})

      (d/text {:class "btn-pnl-label" :x 316.5 :y 217}
              "Reset"))))