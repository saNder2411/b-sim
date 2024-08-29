(ns ws.sente.server
  (:require [org.httpkit.server :as hk-server]
            [ws.sente.router :as router]))

(defonce server (atom nil))

(defn stop-server! []
  (when-let [stop-fn @server]
    (stop-fn :timeout 100)
    (reset! server nil)))

(defn start-server! [port]
  (stop-server!)
  (reset! server (hk-server/run-server router/http-handler {:port port}))
  (println "Running at port:" (:local-port (meta @server))))

(defn stop! []
  (router/stop-socket-server-router!)
  (stop-server!))

(defn start! []
  (router/start-socket-server-router!)
  (start-server! 8090))

(comment
  (start!)
  (stop!)
  )