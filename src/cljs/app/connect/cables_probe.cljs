(ns app.connect.cables-probe
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]))

(defnc cables-probe []
  (let [level-probe-id (use-sub [:level-probe-id])
        level-controller-id (use-sub [:level-controller-id])
        has-URW-60 (= level-probe-id "NRGT 26-2")]
    (d/g {:data-desc "CablesProbe"}
         (d/line {:stroke "#d03880" :stroke-width 4 :x1 408 :y1 185 :x2 408 :y2 204})
         (d/line {:stroke "#d03880" :stroke-width 4 :x1 406 :y1 185 :x2 652 :y2 185})
         (d/line {:stroke "#4a9aa2" :stroke-width 4 :x1 408 :y1 234 :x2 408 :y2 246})
         (d/line {:stroke "#4a9aa2" :stroke-width 4 :x1 370 :y1 244 :x2 408 :y2 244})
         (d/line {:stroke "#d03880" :stroke-width 4 :x1 650 :y1 185 :x2 650 :y2 398})
         (d/line {:stroke "#d03880" :stroke-width 4 :x1 658 :y1 185 :x2 657 :y2 398})
         (d/line {:stroke "#d03880" :stroke-width 4 :x1 656 :y1 185 :x2 752 :y2 185})
         (d/line {:stroke "#d03880" :stroke-width 4 :x1 750 :y1 185 :x2 750 :y2 204})
         (d/line {:stroke "#d03880" :stroke-width 4 :x1 764 :y1 185 :x2 764 :y2 204})
         (d/line {:stroke "#d03880" :stroke-width 4 :x1 762 :y1 185 :x2 806 :y2 185})
         (d/line {:stroke "#d03880" :stroke-width 4 :x1 804 :y1 185 :x2 804 :y2 204})
         (d/line {:stroke "#d03880" :stroke-width 4 :x1 818 :y1 185 :x2 818 :y2 204})
         (d/line {:stroke "#d03880" :stroke-width 4 :x1 816 :y1 185 :x2 844 :y2 185})
         (d/line {:stroke "#d03880" :stroke-width 4 :x1 842 :y1 185 :x2 842 :y2 204})
         (d/line {:stroke "#d03880" :stroke-width 4 :x1 856 :y1 185 :x2 856 :y2 204})

         (if has-URW-60
           (<>
             (d/line {:stroke "#d03880" :stroke-width 4 :x1 854 :y1 185 :x2 1188 :y2 185})
             (d/line {:stroke "#d03880" :stroke-width 4 :x1 1186 :y1 185 :x2 1186 :y2 20})
             (d/line {:stroke "#4a9aa2" :stroke-width 4 :x1 1210 :y1 2 :x2 1226 :y2 2})
             (d/line {:stroke "#4a9aa2" :stroke-width 4 :x1 1224 :y1 2 :x2 1224 :y2 220})
             (d/line {:stroke "#4a9aa2" :stroke-width 4 :x1 1224 :y1 218 :x2 916 :y2 218}))
           (<>
             (d/line {:stroke "#d03880" :stroke-width 4 :x1 854 :y1 185 :x2 897 :y2 185})
             (d/line {:stroke "#d03880" :stroke-width 4 :x1 895 :y1 185 :x2 895 :y2 204})
             (d/line {:stroke "#d03880" :stroke-width 4 :x1 912 :y1 204 :x2 912 :y2 (if (not= level-controller-id "none") 185 125)}))))))
