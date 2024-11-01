(ns app.ui.kits.connect.cables-controller
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]))

(defnc cables-controller []
  (let [level-probe-id (use-sub [:level/probe-id])
        level-controller-id (use-sub [:level/controller-id])
        cond-controller-id (use-sub [:cond/controller-id])
        high-limiter-id (use-sub [:high-limiter/id])
        low-limiter-id (use-sub [:low-limiter/id])
        has-URW-60 (= level-probe-id "NRGT 26-2")]
    (d/g {:data-desc "CablesController"}
         (d/g {:data-desc "URW-60"}
              (when has-URW-60
                (<>
                  (d/line {:stroke "#d03880" :stroke-width 4 :x1 1128 :y1 20 :x2 1128 :y2 74})

                  (when (not= level-controller-id "none")
                    (d/line {:stroke "#d03880" :stroke-width 4 :x1 1018 :y1 74 :x2 1130 :y2 74}))

                  (when (and (= level-controller-id "none") (not= cond-controller-id "none"))
                    (d/line {:stroke "#d03880" :stroke-width 4 :x1 750 :y1 74 :x2 1130 :y2 74}))

                  (when (and (= level-controller-id "none") (= cond-controller-id "none") (not= high-limiter-id "none"))
                    (d/line {:stroke "#d03880" :stroke-width 4 :x1 480 :y1 74 :x2 1130 :y2 74}))

                  (when (and (= level-controller-id "none") (= cond-controller-id "none") (= high-limiter-id "none") (not= low-limiter-id "none"))
                    (d/line {:stroke "#d03880" :stroke-width 4 :x1 210 :y1 74 :x2 1130 :y2 74}))

                  (when (and (= level-controller-id "none") (= cond-controller-id "none") (= high-limiter-id "none") (= low-limiter-id "none"))
                    (<>
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 10 :y1 127 :x2 1130 :y2 127})
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 1128 :y1 127 :x2 1128 :y2 20}))))))

         (d/g {:data-desc "Level"}
              (when (not= level-controller-id "none")
                (<>
                  (d/line {:stroke "#d03880" :stroke-width 4 :x1 902 :y1 20 :x2 902 :y2 74})

                  (when has-URW-60
                    (d/line {:stroke "#d03880" :stroke-width 4 :x1 1020 :y1 20 :x2 1020 :y2 74}))

                  (when (not= cond-controller-id "none")
                    (d/line {:stroke "#d03880" :stroke-width 4 :x1 750 :y1 74 :x2 904 :y2 74}))

                  (when (and (= cond-controller-id "none") (not= high-limiter-id "none"))
                    (d/line {:stroke "#d03880" :stroke-width 4 :x1 480 :y1 74 :x2 904 :y2 74}))

                  (when (and (= cond-controller-id "none") (= high-limiter-id "none") (not= low-limiter-id "none"))
                    (d/line {:stroke "#d03880" :stroke-width 4 :x1 210 :y1 74 :x2 904 :y2 74}))

                  (when (and (= cond-controller-id "none") (= high-limiter-id "none") (= low-limiter-id "none"))
                    (<>
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 10 :y1 127 :x2 904 :y2 127})
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 902 :y1 127 :x2 902 :y2 20})))

                  (when (not has-URW-60)
                    (<>
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 1018 :y1 20 :x2 1018 :y2 187})
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 1018 :y1 185 :x2 910 :y2 185}))))))

         (d/g {:data-desc "Cond"}
              (when (not= cond-controller-id "none")
                (<>
                  (d/line {:stroke "#d03880" :stroke-width 4 :x1 632 :y1 20 :x2 632 :y2 74})

                  (when (or (not= level-controller-id "none") has-URW-60)
                    (d/line {:stroke "#d03880" :stroke-width 4 :x1 752 :y1 20 :x2 752 :y2 74}))

                  (when (not= high-limiter-id "none")
                    (d/line {:stroke "#d03880" :stroke-width 4 :x1 480 :y1 74 :x2 634 :y2 74}))

                  (when (and (= high-limiter-id "none") (not= low-limiter-id "none"))
                    (d/line {:stroke "#d03880" :stroke-width 4 :x1 210 :y1 74 :x2 634 :y2 74}))

                  (when (and (= high-limiter-id "none") (= low-limiter-id "none"))
                    (<>
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 10 :y1 127 :x2 634 :y2 127})
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 632 :y1 127 :x2 632 :y2 20})))

                  (when (and (= level-controller-id "none") (not has-URW-60))
                    (<>
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 752 :y1 20 :x2 752 :y2 129})
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 752 :y1 127 :x2 910 :y2 127}))))))

         (d/g {:data-desc "PumpLimiter"}
              (when (not= high-limiter-id "none")
                (<>
                  (d/line {:stroke "#d03880" :stroke-width 4 :x1 362 :y1 20 :x2 362 :y2 74})

                  (when (or (not= cond-controller-id "none") (not= level-controller-id "none") has-URW-60)
                    (d/line {:stroke "#d03880" :stroke-width 4 :x1 482 :y1 20 :x2 482 :y2 74}))

                  (when (not= low-limiter-id "none")
                    (d/line {:stroke "#d03880" :stroke-width 4 :x1 210 :y1 74 :x2 364 :y2 74}))

                  (when (= low-limiter-id "none")
                    (<>
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 10 :y1 127 :x2 364 :y2 127})
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 362 :y1 127 :x2 362 :y2 20})))

                  (when (and (= cond-controller-id "none") (= level-controller-id "none") (not has-URW-60))
                    (<>
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 482 :y1 20 :x2 482 :y2 129})
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 482 :y1 127 :x2 910 :y2 127}))))))

         (d/g {:data-desc "BurnerLimiter"}
              (when (not= low-limiter-id "none")
                (<>
                  (d/line {:stroke "#d03880" :stroke-width 4 :x1 10 :y1 127 :x2 94 :y2 127})
                  (d/line {:stroke "#d03880" :stroke-width 4 :x1 92 :y1 127 :x2 92 :y2 20})

                  (when (or (not= high-limiter-id "none") (not= cond-controller-id "none") (not= level-controller-id "none") has-URW-60)
                    (d/line {:stroke "#d03880" :stroke-width 4 :x1 212 :y1 20 :x2 212 :y2 74}))

                  (when (and (= high-limiter-id "none") (= cond-controller-id "none") (= level-controller-id "none") (not has-URW-60))
                    (<>
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 212 :y1 20 :x2 212 :y2 129})
                      (d/line {:stroke "#d03880" :stroke-width 4 :x1 212 :y1 127 :x2 910 :y2 127}))))))

         (when (and (= low-limiter-id "none") (= high-limiter-id "none") (= cond-controller-id "none") (= level-controller-id "none") (not has-URW-60))
           (d/line {:stroke "#d03880" :stroke-width 4 :x1 10 :y1 127 :x2 910 :y2 127})))))
