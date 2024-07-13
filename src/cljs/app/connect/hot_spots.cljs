(ns app.connect.hot-spots
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub]]
            [app.shared.components.hot-spot :refer [hot-spot hot-spot-big]]))

(defnc hot-spots []
  (let [show-limiter-low-level-hot-spot (use-sub [:show-limiter-low-level-hot-spot])
        show-limiter-high-level-hot-spot (use-sub [:show-limiter-high-level-hot-spot])
        show-cond-controller-hot-spot (use-sub [:show-cond-controller-hot-spot])
        show-level-controller-hot-spot (use-sub [:show-level-controller-hot-spot])
        show-converter-hot-spot (use-sub [:show-converter-hot-spot])
        show-feedwater-valve-hot-spot (use-sub [:show-feedwater-valve-hot-spot])
        show-feedwater-pump-hot-spot (use-sub [:show-feedwater-pump-hot-spot])]
    (<>
      (when show-limiter-low-level-hot-spot
        ($ hot-spot {:x 35.6 :y 9.44 :id "limiter-low-level"}))

      (when show-limiter-high-level-hot-spot
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

      (when show-feedwater-valve-hot-spot
        ($ hot-spot {:x 84.5 :y 74.5 :id "feedwater-valve"}))

      (when show-feedwater-pump-hot-spot
        ($ hot-spot {:x 77.5 :y 74.5 :id "feedwater-pump"}))

      ($ hot-spot {:x 90 :y 61 :id "feedwater"})

      ($ hot-spot {:x 76 :y 29.6 :id "level-probe"})

      ($ hot-spot {:x 2.2 :y 49 :id "urb"})

      ($ hot-spot {:x 65.65 :y 29.6 :id "level-low-probe-I"})

      ($ hot-spot {:x 72.1 :y 19.4 :id "level-low-probe-II"})

      ($ hot-spot {:x 48.8 :y 19.4 :id "temperature-probe"})

      ($ hot-spot {:x 69.55 :y 19.4 :id "level-high-probe"})

      ($ hot-spot {:x 59.56 :y 43.4 :id "cond-probe"}))))
