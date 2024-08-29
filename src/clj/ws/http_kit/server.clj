(ns ws.http-kit.server
  (:require [org.httpkit.server :as hk-server]
            [clojure.edn :as edn]))

(defonce server-stop-fn (atom nil))

(def channels (atom #{}))

(def messages (atom []))

(defn on-open [ch]
  (swap! channels conj ch))

(defn on-close [ch _status]
  (swap! channels disj ch))

(defn on-receive [ch ws-message]
  (let [message (edn/read-string ws-message)
        response (swap! messages conj message)]
    (if (:errors response)
      (hk-server/send! ch (pr-str response))
      (doseq [ch @channels]
        (hk-server/send! ch (pr-str response))))))

(defn handler [req]
  (hk-server/as-channel req {:on-open    on-open
                             :on-receive on-receive
                             :on-close   on-close}))

(defn stop! []
  (when-let [stop-fn @server-stop-fn]
    (stop-fn :timeout 100)
    (reset! server-stop-fn nil)))

(defn start! [port]
  (stop!)
  (reset! server-stop-fn (hk-server/run-server handler {:port port}))
  (println "Running at port:" (:local-port (meta @server-stop-fn))))


(comment
  (start! 8089)
  (stop!)
  )
