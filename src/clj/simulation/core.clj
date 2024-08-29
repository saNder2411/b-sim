(ns simulation.core
  (:require [clojure.core.async :refer [<! timeout go]]
            [ws.sente.socket :refer [send!]]))

(def sim-default {:run? false :loop-n 0})

(def sim-connections (atom {}))

(defn sim-loop [uid]
  (go
    (while (get-in @sim-connections [uid :run?])
      (let [data (-> sim-connections
                     (swap! update-in [uid :loop-n] inc)
                     (get-in [uid :loop-n]))]
        (send! uid [:sim/loop-data data])
        (<! (timeout 1000))))))

(defn sim-run [uid]
  (if (get @sim-connections uid)
    (swap! sim-connections assoc-in [uid :run?] true)
    (swap! sim-connections assoc uid (merge sim-default {:run? true})))
  (sim-loop uid))

(defn sim-pause [uid]
  (swap! sim-connections assoc-in [uid :run?] false))

(defn sim-stop [uid]
  (swap! sim-connections assoc uid sim-default))

(defn sim-reset [uid]
  (swap! sim-connections dissoc uid))