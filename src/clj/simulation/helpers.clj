(ns simulation.helpers)

(defn check-val-by-range [min max val]
  (cond
    (< val min) min
    (> val max) max
    :else val))

(defn calc-v-by-% [min max v-in-%]
  (-> (- max min)
      (/ 100)
      (* v-in-%)
      (+ min)))

(defn safe-division [dividend divisor]
  (cond
    (and (= dividend 0) (= divisor 0)) 1
    (and (= dividend 0) (not= divisor 0)) 0
    (and (not= dividend 0) (= divisor 0)) ##Inf
    :else (/ dividend divisor)))