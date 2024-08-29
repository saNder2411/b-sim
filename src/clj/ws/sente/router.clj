(ns ws.sente.router
  (:require [reitit.ring :as ring]
            [muuntaja.core :as m]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.middleware.params :refer [wrap-params]]
            [taoensso.sente :as sente]
            [ws.sente.socket :as socket]
            [ws.sente.handlers :refer [event-msg-handler]]))

(defonce socket-server-router (atom nil))

(def http-handler (ring/ring-handler
                    (ring/router
                      ["/ws" {:get  socket/ajax-get-or-ws-handshake-fn
                              :post socket/ajax-post-fn
                              :name ::ws}]
                      {:data {:muuntaja   m/instance
                              :middleware [wrap-params wrap-keyword-params]}})))

(defn stop-socket-server-router! []
  (when-let [stop-fn @socket-server-router]
    (stop-fn)))

(defn start-socket-server-router! []
  (stop-socket-server-router!)
  (reset! socket-server-router (sente/start-server-chsk-router! socket/ch-recv event-msg-handler)))


