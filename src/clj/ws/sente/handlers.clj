(ns ws.sente.handlers
  (:require [ws.sente.socket :refer [send-to-all!]]
            [simulation.core :as s]))

(def messages (atom []))

(defmulti event-handle :id)

(defmethod event-handle :default
  [{:keys [id]}]
  (println "UNHANDLED :id" id))

(defmethod event-handle :chsk/ws-ping
  [{:keys [id]}]
  (println id))

(defmethod event-handle :chsk/ws-pong
  [{:keys [id]}]
  (println id))

(defmethod event-handle :chsk/uidport-open
  [msg]
  (println "OPEN :client-id" (:client-id msg)))

(defmethod event-handle :chsk/uidport-close
  [{:keys [uid client-id]}]
  (println "CLOSE :client-id" client-id)
  (s/sim-reset uid))

(defmethod event-handle :sim/run
  [{:keys [uid]}]
  (s/sim-run uid))

(defmethod event-handle :sim/pause
  [{:keys [uid]}]
  (s/sim-pause uid))

(defmethod event-handle :sim/stop
  [{:keys [uid]}]
  (s/sim-stop uid))

(defn event-msg-handler [msg]
  (event-handle msg))
