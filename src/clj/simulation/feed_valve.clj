(ns simulation.feed-valve
  (:require [simulation.helpers :as h]))

(defn travel-time! [db-atom v]
  (swap! db-atom #(-> %
                      (assoc-in [:actuators :feed :valve :transition :travel-time] v)
                      (assoc-in [:actuators :feed :valve :damper :delta] (/ 100 v)))))

(defn potentiometer-open! [db-atom v]
  (let [{:keys [close]} (-> @db-atom :actuators :feed :valve :potentiometer)
        damper-v (-> @db-atom :actuators :feed :valve :damper :value)
        digital-v (h/calc-v-by-% close v damper-v)]
    (swap! db-atom #(-> %
                        (assoc-in [:actuators :feed :valve :potentiometer :open] v)
                        (assoc-in [:actuators :feed :valve :potentiometer :mixed-up?] (<= v close))
                        (assoc-in [:actuators :feed :valve :damper :digital] digital-v)))))

(defn potentiometer-close! [db-atom v]
  (let [{:keys [open]} (-> @db-atom :actuators :feed :valve :potentiometer)
        damper-v (-> @db-atom :actuators :feed :valve :damper :value)
        digital-v (h/calc-v-by-% v open damper-v)]
    (swap! db-atom #(-> %
                        (assoc-in [:actuators :feed :valve :potentiometer :close] v)
                        (assoc-in [:actuators :feed :valve :potentiometer :mixed-up?] (<= open v))
                        (assoc-in [:actuators :feed :valve :damper :digital] digital-v)))))

(defn- update-flow-rate-th [db th-v]
  (let [kg-h (* th-v 1000)]
    (-> db
        (assoc-in [:actuators :feed :flow-rate :t-h] th-v)
        (assoc-in [:actuators :feed :flow-rate :kg-h] kg-h)
        (assoc-in [:actuators :feed :flow-rate :kg-s] (/ kg-h 3600)))))

(defn flow-rate-max! [db-atom max-v]
  (let [damper-v (-> @db-atom :actuators :feed :valve :damper :value)
        th-v (h/calc-v-by-% 0 max-v damper-v)]
    (swap! db-atom #(-> %
                        (assoc-in [:actuators :feed :flow-rate :max] max-v)
                        (update-flow-rate-th th-v)))))

(defn- change-damper-pi-c-output [db pi-c-output]
  (let [{:keys [min max]} (-> db :actuators :feed :amperage)]
    (-> db
        (assoc-in [:actuators :feed :valve :damper :pi-c-output] pi-c-output)
        (assoc-in [:actuators :feed :valve :damper :step-delay] 2)
        (assoc-in [:actuators :feed :amperage :value] (h/calc-v-by-% min max pi-c-output)))))

(defn- update-damper-pi-c-output [db]
  (let [pi-c-output (-> db :actuators :feed :valve :damper :pi-c-output)
        pi-c-x-next (-> db :actuators :feed :pi-controller :x :next)
        should-update (not= pi-c-output pi-c-x-next)
        {:keys [type]} (-> db :actuators :feed :valve)
        s-delay (-> db :actuators :feed :valve :damper :step-delay)]
    (cond
      (and should-update (not= type :electric-valve)) (change-damper-pi-c-output db pi-c-x-next)
      (and should-update (= s-delay 0)) (change-damper-pi-c-output db pi-c-x-next)
      (and should-update (not= s-delay 0)) (update-in db [:actuators :feed :valve :damper :step-delay] dec)
      :else db)))

(defn- update-transition-state [db]
  (let [{:keys [value pi-c-output]} (-> db :actuators :feed :valve :damper)
        state (cond
                (< value pi-c-output) "opening"
                (> value pi-c-output) "closing"
                :else "fixed")]
    (assoc-in db [:actuators :feed :valve :transition :state] state)))

(defn- update-damper-value [db]
  (let [t-state (-> db :actuators :feed :valve :transition :state)
        {:keys [value pi-c-output delta]} (-> db :actuators :feed :valve :damper)
        open-v (+ value delta)
        close-v (- value delta)
        damper-v (case t-state
                   "opening" (if (> open-v pi-c-output) pi-c-output open-v)
                   "closing" (if (< close-v pi-c-output) pi-c-output close-v)
                   pi-c-output)
        {:keys [close open]} (-> db :actuators :feed :valve :potentiometer)
        fr-max (-> db :actuators :feed :flow-rate :max)
        digital-v (h/calc-v-by-% close open damper-v)
        th-v (h/calc-v-by-% 0 fr-max damper-v)]
    (-> db
        (assoc-in [:actuators :feed :valve :damper :value] damper-v)
        (assoc-in [:actuators :feed :valve :damper :digital] digital-v)
        (update-flow-rate-th th-v))))


(defn sim-step! [db-atom]
  (swap! db-atom #(-> %
                      update-damper-pi-c-output
                      update-transition-state
                      update-damper-value)))