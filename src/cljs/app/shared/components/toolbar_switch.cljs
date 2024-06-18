(ns app.shared.components.toolbar-switch
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]))

(defnc toolbar-switch [{:keys [x value on-change legend inactive]}]
  (d/g {:transform (str "translate(" x ", 0)")
        :class     (str "toolbar-btn-" (if inactive "inactive" "active"))
        :on-click  (if inactive nil on-change)}
       (if value
         (d/g {:transform "translate(-10, 4)"}
              (d/polygon {:fill "#eee" :transform "translate(-743.47 -9.882)" :points "785.49 90.299 784.65 81.185 801.52 81.185 800.68 90.299"})
              (d/path {:fill "#c6c6c6" :d "m57.232 72.053-0.7 7.614h-13.826l-0.7-7.614h15.232m1.644-1.5h-18.52l0.979 10.614h16.562z"})
              (d/polygon {:fill "url(#linGradToolbarToggleSwitchDown)" :transform "translate(-743.47 -9.882)" :points "802.34 80.435 801.14 67.373 785.03 67.373 783.82 80.435"})
              (d/path {:fill "#031229" :d "m42.365 38.354h14.5a0.8 0.8 0 0 1 0.8 0.8v18.342h-16.112v-18.338a0.8 0.8 0 0 1 0.8-0.8z"}))
         (d/g {:transform "translate(-52, 4)"}
              (d/polygon {:fill "#eee" :transform "translate(-743.47 -9.882)" :points "826.61 59.492 827.46 50.379 842.65 50.379 843.49 59.492"})
              (d/path {:fill "#c6c6c6" :d "m98.498 41.247 0.7 7.613h-15.231l0.7-7.613h13.827m1.368-1.5h-16.563l-0.979 10.613h18.52z"})
              (d/polygon {:fill "url(#linGradToolbarToggleSwitchUp)" :transform "translate(-743.47 -9.882)" :points "825.79 60.242 827 73.304 843.11 73.304 844.31 60.242"})
              (d/path {:fill "#031229" :d "m98.832 82.56h-14.5a0.8 0.8 0 0 1-0.8-0.8v-18.333h16.11v18.328a0.8 0.8 0 0 1-0.8 0.8z"})))

       (d/text {:x 39.3 :y 106 :fill "#eee" :font-family "Arial" :font-size 16 :font-weight 600 :text-anchor "middle"} legend)))
