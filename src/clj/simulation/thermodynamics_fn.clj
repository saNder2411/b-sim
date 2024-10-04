(ns simulation.thermodynamics-fn)

; lookup table "enthalpy" within pAbs = [5 - 19] bar, in kJ/kg
(def steam-enthalpy-table {5  2748.10761465797
                           6  2756.13888953633
                           7  2762.74908276951
                           8  2768.30246466374
                           9  2773.03762307076
                           10 2777.11953768466
                           11 2780.66715581687
                           12 2783.76913310523
                           13 2786.49336124408
                           14 2788.89301400739
                           15 2791.01053629532
                           16 2792.88036361246
                           17 2794.53082854658
                           18 2795.98552994044
                           19 2797.26433711954})

(def liquid-enthalpy-table {5  640.185335363386
                            6  670.501208031547
                            7  697.143360735208
                            8  721.017848419753
                            9  742.724615127352
                            10 762.682844335411
                            11 781.197743111482
                            12 798.498906332948
                            13 814.763690078255
                            14 830.132141646791
                            15 844.716914785588
                            16 858.610072841121
                            17 871.887887946829
                            18 884.614308437095
                            19 896.843516738111})

; lookup table "density" within pAbs = [5 - 19] bar, in kg/m³
(def liquid-density-table {5  915.284343429981
                           6  908.588715394506
                           7  902.555523186486
                           8  897.031659369532
                           9  891.913537144791
                           10 887.127451674779
                           11 882.618888615433
                           12 878.346268567184
                           13 874.277074575669
                           14 870.385343413629
                           15 866.649978362142
                           16 863.053578281849
                           17 859.581602966032
                           18 856.221764323394
                           19 852.963573277854})

; lookup table "temperature" within pAbs = [5 - 19] bar, in °C
(def liquid-temperature-table {5  151.836243876845
                               6  158.832423954485
                               7  164.952752550742
                               8  170.4135108136
                               9  175.357822117013
                               10 179.885632391467
                               11 184.069675677946
                               12 187.9646416213
                               13 191.612758525219
                               14 195.047358251906
                               15 198.295242882414
                               16 201.378308015153
                               17 204.314687536896
                               18 207.119580471877
                               19 209.805860769383})

; lookup table "level"  volume in m³ <-> level in 1/10 %
(def liquid-level-table {0  0
                         1  0.0786
                         2  0.1577
                         3  0.2379
                         4  0.3197
                         5  0.404
                         6  0.4919
                         7  0.5851
                         8  0.687
                         9  0.8054
                         10 1})

(defn check-val-by-range [min max val]
  (cond
    (< val min) min
    (> val max) max
    :else val))

(def check-pressure (partial check-val-by-range 5 19))

(def check-level-raw-% (partial check-val-by-range 0 10))

(defn liquid-enthalpy-by-t [temperature]
  (- (* 4.219 temperature) 2.83))

(defn steam-density [pressure]
  (+ (* 0.49 pressure) 0.251))

(defn float-idx-map-fn [table input-idx]
  (let [min-idx (int input-idx)
        max-idx (inc min-idx)
        next-val-greater? (> (get table max-idx) (get table min-idx))]
    (if next-val-greater?
      (let [min-val (get table min-idx)
            max-val (get table max-idx)]
        (+
          (* (- max-val min-val) (- input-idx min-idx))
          min-val))

      (let [min-val (get table max-idx)
            max-val (get table min-idx)]
        (+
          (/ (* (- max-val min-val) (- input-idx max-idx))
             (- min-idx max-idx))
          min-val)))))

(defn map-table [table input-idx]
  (if (int? input-idx)
    (get table input-idx)
    (float-idx-map-fn table input-idx)))

(defn steam-enthalpy [pressure]
  (->> pressure
       check-pressure
       (map-table steam-enthalpy-table)))

(defn liquid-enthalpy [pressure]
  (->> pressure
       check-pressure
       (map-table liquid-enthalpy-table)))

(defn liquid-density [pressure]
  (->> pressure
       check-pressure
       (map-table liquid-density-table)))

(defn liquid-temperature [pressure]
  (->> pressure
       check-pressure
       (map-table liquid-temperature-table)))

(defn liquid-level-% [volume max-volume]
  (let [h-to-r (->> (* (/ volume max-volume) 10)
                    check-level-raw-%
                    (map-table liquid-level-table))]
    (/ (- (* h-to-r 201) 131) 0.69)))

