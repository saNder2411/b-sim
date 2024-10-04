(ns app.ui.kits.connect.hot-spots
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub]]
            [app.ui.shared.components.hot-spot :refer [hot-spot hot-spot-big]]))

(defnc hot-spots []
  (let [show-low-limiter-hot-spot (use-sub [:low-limiter/show-hot-spot])
        show-high-limiter-hot-spot (use-sub [:high-limiter/show-hot-spot])
        show-cond-controller-hot-spot (use-sub [:cond-controller/show-hot-spot])
        show-level-controller-hot-spot (use-sub [:level-controller/show-hot-spot])
        show-converter-hot-spot (use-sub [:converter/show-hot-spot])
        show-feed-valve-hot-spot (use-sub [:feed-valve/show-hot-spot])
        show-feed-pump-hot-spot (use-sub [:feed-pump/show-hot-spot])]
    (<>
      (when show-low-limiter-hot-spot
        ($ hot-spot {:x 35.6 :y 9.44 :id "low-limiter"}))

      (when show-high-limiter-hot-spot
        ($ hot-spot {:x 49.6 :y 9.44 :id "limiter-high-level"}))

      (when show-cond-controller-hot-spot
        ($ hot-spot {:x 63.6 :y 9.44 :id "cond-controller"}))

      (when show-level-controller-hot-spot
        ($ hot-spot {:x 77.6 :y 9.44 :id "level-controller"}))

      (when show-converter-hot-spot
        ($ hot-spot {:x 87.8 :y 12 :id "converter"}))

      ($ hot-spot-big {:x 38.49 :y 36.22 :id "boiler"})

      ($ hot-spot {:x 37.8 :y 58.63 :id "burner"})

      ($ hot-spot {:x 65.17 :y 72.41 :id "sludge-valve"})

      ($ hot-spot {:x 54.2 :y 69 :id "continuous-valve"})

      (when show-feed-valve-hot-spot
        ($ hot-spot {:x 84.5 :y 74.5 :id "feed-valve"}))

      (when show-feed-pump-hot-spot
        ($ hot-spot {:x 77.5 :y 74.5 :id "feed-pump"}))

      ($ hot-spot {:x 90 :y 61 :id "feedwater"})

      ($ hot-spot {:x 76 :y 29.6 :id "level-probe"})

      ($ hot-spot {:x 2.2 :y 49 :id "urb"})

      ($ hot-spot {:x 65.65 :y 29.6 :id "low-level-probe-I"})

      ($ hot-spot {:x 72.1 :y 19.4 :id "low-level-probe-II"})

      ($ hot-spot {:x 48.8 :y 19.4 :id "temperature-probe"})

      ($ hot-spot {:x 69.55 :y 19.4 :id "high-level-probe"})

      ($ hot-spot {:x 59.56 :y 43.4 :id "cond-probe"}))))
