(ns app.connect.hot-spots
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.hot-spot :refer [hot-spot]]
            [app.shared.components.hot-spot-shadow :refer [hot-spot-shadow]]
            [app.shared.components.hot-spot-big :refer [hot-spot-big]]
            [app.shared.components.hot-spot-shadow-big :refer [hot-spot-shadow-big]]))

(defnc hot-spots []
  (let [current-hotspot (use-sub [:current-hotspot])
        show-burner-limiter-hot-spot (use-sub [:show-burner-limiter-hot-spot])
        show-pump-limiter-hot-spot (use-sub [:show-pump-limiter-hot-spot])
        show-cond-controller-hot-spot (use-sub [:show-cond-controller-hot-spot])
        show-level-controller-hot-spot (use-sub [:show-level-controller-hot-spot])
        show-converter-hot-spot (use-sub [:show-converter-hot-spot])
        show-feedwater-valve-hot-spot (use-sub [:show-feedwater-valve-hot-spot])
        show-feedwater-pump-hot-spot (use-sub [:show-feedwater-pump-hot-spot])]
    (<>
      (when show-burner-limiter-hot-spot
        ($ hot-spot {:x 35.6 :y 9.44 :active (= current-hotspot "burner-limiter")}
           ($ hot-spot-shadow)))

      (when show-pump-limiter-hot-spot
        ($ hot-spot {:x 49.6 :y 9.44 :active (= current-hotspot "pump-limiter")}
           ($ hot-spot-shadow)))

      (when show-cond-controller-hot-spot
        ($ hot-spot {:x 63.6 :y 9.44 :active (= current-hotspot "cond-controller")}
           ($ hot-spot-shadow)))

      (when show-level-controller-hot-spot
        ($ hot-spot {:x 77.6 :y 9.44 :active (= current-hotspot "level-controller")}
           ($ hot-spot-shadow)))

      (when show-converter-hot-spot
        ($ hot-spot {:x 87.8 :y 12 :active (= current-hotspot "converter")}
           ($ hot-spot-shadow)))

      ($ hot-spot-big {:x 38.49 :y 36.22 :active (= current-hotspot "boiler")}
         ($ hot-spot-shadow-big))

      ($ hot-spot {:x 37.8 :y 58.63 :active (= current-hotspot "burner")}
         ($ hot-spot-shadow))

      ($ hot-spot {:x 65.17 :y 72.41 :active (= current-hotspot "sludge-valve")}
         ($ hot-spot-shadow))

      ($ hot-spot {:x 54.2 :y 69 :active (= current-hotspot "continuous-valve")}
         ($ hot-spot-shadow))

      (when show-feedwater-valve-hot-spot
        ($ hot-spot {:x 84.5 :y 74.5 :active (= current-hotspot "feedwater-valve")}
           ($ hot-spot-shadow)))

      (when show-feedwater-pump-hot-spot
        ($ hot-spot {:x 77.5 :y 74.5 :active (= current-hotspot "feedwater-pump")}
           ($ hot-spot-shadow)))

      ($ hot-spot {:x 76 :y 29.6 :active (= current-hotspot "level-probe")}
         ($ hot-spot-shadow))

      ($ hot-spot {:x 2.2 :y 49 :active (= current-hotspot "urb")}
         ($ hot-spot-shadow))

      ($ hot-spot {:x 65.65 :y 29.6 :active (= current-hotspot "level-low-probe-1")}
         ($ hot-spot-shadow))

      ($ hot-spot {:x 72.1 :y 19.4 :active (= current-hotspot "level-low-probe-2")}
         ($ hot-spot-shadow))

      ($ hot-spot {:x 48.8 :y 19.4 :active (= current-hotspot "temperature-sensor")}
         ($ hot-spot-shadow))

      ($ hot-spot {:x 69.55 :y 19.4 :active (= current-hotspot "level-high-probe")}
         ($ hot-spot-shadow))

      ($ hot-spot {:x 59.56 :y 43.4 :active (= current-hotspot "cond-probe")}
         ($ hot-spot-shadow)))))
