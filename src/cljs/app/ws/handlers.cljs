(ns app.ws.handlers)

(defmulti event-handler :id)

(defmethod event-handler :default
  [{:keys [id]}]
  (println "UNHANDLED :id" id))

(defmethod event-handler :chsk/handshake
  [_ _]
  (println "CONNECTION ESTABLISHED!"))

(defmethod event-handler :chsk/ws-ping
  [{:keys [id]}]
  (println id))

(defmethod event-handler :chsk/ws-pong
  [{:keys [id]}]
  (println id))

(defmethod event-handler :chsk/state
  [{:keys [id]} _]
  (println id))

(defmethod event-handler :chsk/recv
  [{:keys [?data]} _]
  (let [[event-type data] ?data]
    (println "Receive msg data:" (pr-str data))
    (println "Receive msg event-type:" (pr-str event-type))))

(defmethod event-handler :sim/loop-data
  [{:keys [id ?data]} _]
  (println id (pr-str ?data)))

(defn event-msg-handler [msg]
  (event-handler msg))