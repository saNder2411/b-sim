(ns ws.sente.socket
  (:require [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit :refer [get-sch-adapter]]
            [taoensso.sente.packers.transit :as sente-transit]))

(def ch-socket-server (sente/make-channel-socket-server! (get-sch-adapter)
                                                         {:packer        (sente-transit/get-transit-packer)
                                                          :user-id-fn    (fn [ring-req] (:client-id ring-req))
                                                          :csrf-token-fn nil}))

(def send-fn (:send-fn ch-socket-server))
(def connected-uids (:connected-uids ch-socket-server))
(def ajax-get-or-ws-handshake-fn (:ajax-get-or-ws-handshake-fn ch-socket-server))
(def ajax-post-fn (:ajax-post-fn ch-socket-server))
(def ch-recv (:ch-recv ch-socket-server))


(defn send! [uid message]
  (send-fn uid message))

(defn send-to-all! [data]
  (let [uids @connected-uids]
    (doseq [uid (:any uids)]
      (send! uid data))))


