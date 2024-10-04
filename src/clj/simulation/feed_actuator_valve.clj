(ns simulation.feed-actuator-valve)

(def mode (atom "auto"))
(def fill-mode (atom "fill"))
(def act-type (atom :electric-valve))

(def travel-time (atom 1))

(def transitioning-state (atom "fixed"))

(def potentiometer (atom {:open      32752
                          :close     16
                          :mixed-up? false}))

(def damper (atom {:actual     0
                   :next       0
                   :digital    16
                   :delta      (/ 100 @travel-time)
                   :step-delay 2}))

(def amperage (atom {:min   4
                     :max   20
                     :value 4}))

(def flow-rate (atom {:t/h  0
                      :kg/h 0
                      :kg/s 0
                      :max  70}))

(defn flow-rate-th-watcher [_key f-atom old new]
  (when (not= (:t/h old) (:t/h new))
    (let [kg-h (* (:t/h new) 1000)]
      (swap! f-atom assoc :kg/h kg-h :kg/s (/ kg-h 3600)))))

(defn flow-rate-max-watcher [_key f-atom old new]
  (when (not= (:max old) (:max new))
    (swap! f-atom assoc :t/h (/ (* (:actual @damper) (:max new)) 100))))

(defn damper-actual-watcher [_k a old new]
  (when (not= (:actual old) (:actual new))
    (swap! flow-rate assoc :t/h (/ (* (:actual new) (:max @flow-rate)) 100))
    (swap! a assoc :digital (-> (- (:open @potentiometer) (:close @potentiometer))
                                (/ 100)
                                (* (:actual new))
                                (+ (:close @potentiometer))))))

(defn damper-next-watcher [_k _a old new]
  (when (not= (:next old) (:next new))
    (swap! amperage assoc :value (-> (- (:max @amperage) (:min @amperage))
                                     (/ 100)
                                     (* (:next new))
                                     (+ (:min @amperage))))))

(defn potentiometer-watcher [_k a old new]
  (when (or (not= (:open old) (:open new)) (not= (:close old) (:close new)))
    (swap! a assoc :mixed-up? (<= (:open new) (:close new)))
    (swap! damper assoc :digital (-> (- (:open new) (:close new))
                                     (/ 100)
                                     (* (:actual @damper))
                                     (+ (:close new))))))

(defn fill-mode-watcher [_k _a old new]
  (when (not= old new)
    (swap! flow-rate assoc
           :t/h (* (:t/h @flow-rate) -1)
           :max (* (:max @flow-rate) -1))))

(defn travel-time-watcher [_k _a old new]
  (when (not= old new)
    (swap! damper assoc :delta (/ 100 new))))

(add-watch flow-rate :flow-rate-th-watcher flow-rate-th-watcher)
(add-watch flow-rate :flow-rate-max-watcher flow-rate-max-watcher)
(add-watch damper :damper-actual-watcher damper-actual-watcher)
(add-watch damper :damper-next-watcher damper-next-watcher)
(add-watch potentiometer :potentiometer-watcher potentiometer-watcher)
(add-watch fill-mode :fill-mode-watcher fill-mode-watcher)
(add-watch travel-time :travel-time-watcher travel-time-watcher)


(defn calc-transitioning-state []
  (let [{:keys [actual next]} @damper
        state (cond
                (< actual next) "opening"
                (> actual next) "closing"
                :else "fixed")]
    (reset! transitioning-state state)))

(defn calc-damper-actual [t]
  (let [{:keys [actual next delta]} @damper
        actual-next-open-v (+ actual delta)
        actual-next-close-v (- actual delta)
        actual-next-v (case t
                        "opening" (if (> actual-next-open-v next) next actual-next-open-v)
                        "closing" (if (< actual-next-close-v next) next actual-next-close-v)
                        next)]
    (swap! damper assoc :actual actual-next-v)))

(defn sim-step [pi-c-next-v-% force-off? force-keep?]
  (let [next-position (cond
                        force-off? 0
                        (or force-keep? (= @mode "manual")) (:next @damper)
                        :else pi-c-next-v-%)]
    (when (not= next-position (:next @damper))
      (if (= @act-type :electric-valve)
        (if (= (:step-delay @damper) 0)
          (swap! damper assoc :next next-position :step-delay 2)
          (swap! damper update :step-delay dec))

        (swap! damper assoc :next next-position)))

    (calc-damper-actual (calc-transitioning-state))))


(comment
  (swap! damper assoc :actual 50)

  (swap! damper assoc :next 52)

  (deref amperage)

  (deref flow-rate)
  (deref damper)

  (swap! potentiometer assoc :close 32752)

  (deref potentiometer)

  (reset! fill-mode "fill")

  (reset! travel-time 1)
  (reset! act-type :pneumatic-valve)
  (sim-step 10 false false)

  (deref transitioning-state)
  )