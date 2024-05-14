(ns app.core
  (:require [goog.dom :as g-dom]
            ["react-dom/client" :as react-dom]
            [helix.core :refer [$]]
            [refx.alpha :as refx]
            [app.db.events]
            [app.db.subs]
            [app.db.boiler-events]
            [app.db.boiler-subs]
            [app.db.burner-subs]
            [app.db.NRR-2-60-subs]
            [app.app :refer [app]]))

(refx/dispatch-sync [:initialize-db (.-innerWidth js/window) (.-innerHeight js/window)])

(defonce root (react-dom/createRoot (g-dom/getElement "app")))

(defn render []
  (.render root ($ app)))

(defn ^:dev/after-load clear-cache-and-render! []
  (refx/clear-subscription-cache!)
  (render))

(defn ^:export init []
  (render))
