(ns app.core
  (:require [goog.dom :as g-dom]
            ["react-dom/client" :as react-dom]
            [helix.core :refer [$]]
            [refx.alpha :as refx]
            [app.db.events]
            [app.db.subs]
            [app.app :refer [app]]))

(refx/dispatch-sync [:initialize-db (.-innerWidth js/window) (.-innerHeight js/window)])

(defonce root (react-dom/createRoot (g-dom/getElement "app")))

(defn render []
  (.render root ($ app)))

(defn ^:dev/after-load clear-cache-and-render! []
  (refx/clear-subscription-cache!)
  (render))

;; start your app with your favorite React renderer

(.render root ($ app))

(defn ^:export init []
  (render))
