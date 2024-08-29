(ns udp.core
  (:require [clojure.string :as string])
  (:import (java.net DatagramSocket InetAddress DatagramPacket)))

(defn create-udp-echo-server
  "Creates a UDP echo server on the given host and port.
   The received message is passed to the handler function and it's echoed back as a response.
   Returns an atom that can be used to start/stop the server later."
  [{:keys [host port handler]}]
  (let [stop-flag (atom false)]
    (future
      (with-open [socket (DatagramSocket. port (InetAddress/getByName host))]
        (println "UDP server started. Listening on port " port)
        (let [buffer (byte-array 1024)]
          (loop []
            (when-not @stop-flag
              (let [request-packet (DatagramPacket. buffer (count buffer))]
                (.receive socket request-packet)
                (let [receive-msg (String. (.getData request-packet) 0 (.getLength request-packet))]
                  (println "Received: " receive-msg)
                  (let [response-msg (handler receive-msg)
                        response-packet (DatagramPacket. (.getBytes response-msg)
                                                         (count response-msg)
                                                         (.getAddress request-packet)
                                                         (.getPort request-packet))]
                    (.send socket response-packet))))
              (recur))))))
    stop-flag))

;; Example usage
(comment
  (let [udn-echo-server (create-udp-echo-server {:host    "0.0.0.0"
                                                 :port    1230
                                                 :handler string/upper-case})]
    (Thread/sleep 10000)
    (println "Stopping UDP server")
    (reset! udn-echo-server true)))
