(ns app.db.utils
  (:require [app.db.constants :refer [LEVEL-CALIBRATION]]))

(defn calc-real-high-point [high-point cal-p]
  (let [value (* (/ high-point cal-p) 100)]
    (if (> value (-> LEVEL-CALIBRATION :points :max-high))
      (-> LEVEL-CALIBRATION :points :max-high)
      value)))
