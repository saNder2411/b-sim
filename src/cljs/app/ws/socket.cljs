(ns app.ws.socket
  (:require [taoensso.sente :as sente]
            [taoensso.sente.packers.transit :as sente-transit]
            [app.ws.handlers :refer [event-msg-handler]]))

(def socket-router (atom nil))

(def ch-chsk (atom nil))
(def chsk-send! (atom nil))

(def config {:type :auto
             :packer (sente-transit/get-transit-packer) ;:edn
             :protocol :http
             :host "localhost"
             :port 8090})

(defn create-client! []
  (let [{:keys [ch-recv send-fn]} (sente/make-channel-socket-client! "/ws" nil config)]
    (reset! ch-chsk ch-recv)
    (reset! chsk-send! send-fn)))

(defn stop-socket-router! []
  (when-let [stop-fn @socket-router]
    (stop-fn)))

(defn start-socket-router! []
  (stop-socket-router!)
  (reset! socket-router (sente/start-client-chsk-router! @ch-chsk event-msg-handler)))

(defn start! []
  (create-client!)
  (start-socket-router!))

(defn send! [event]
  (@chsk-send! event))
