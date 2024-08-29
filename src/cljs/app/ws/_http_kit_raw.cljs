(ns app.ws._http-kit-raw
  (:require [cljs.reader :as edn]))

(defonce channel (atom nil))

(defn connect! [url receive-handle]
  (if-let [ch (js/WebSocket. url)]
    (do
      (js/console.log "Connected!")
      (set! (.-onmessage ch) #(->> %
                                   .-data
                                   edn/read-string
                                   receive-handle))
      (reset! channel ch))
    (throw (ex-info "Websocket Connection Failed!" {:url url}))))

(defn send-message! [msg]
  (if-let [chan @channel]
    (.send chan (pr-str msg))
    (throw (ex-info "Couldn't send message, channel isn't open!" {:message msg}))))
