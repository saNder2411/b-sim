(ns app.core
  (:require [goog.dom :as g-dom]
            ["react-dom/client" :as react-dom]
            [helix.core :refer [$]]
            [refx.alpha :as refx]
            [app.db.subs]
            [app.db.events]
            [app.db.boiler.subs]
            [app.db.boiler.events]
            [app.db.burner.subs]
            [app.db.burner.events]
            [app.db.continuous-valve.subs]
            [app.db.continuous-valve.events]
            [app.db.sludge-valve.subs]
            [app.db.feedwater-valve.subs]
            [app.db.feedwater-pump.subs]
            [app.db.TRV-5-60.subs]
            [app.db.LRG-16-60.subs]
            [app.db.LRG-16-61.subs]
            [app.db.NRG-16-60-I.subs]
            [app.db.NRG-16-60-II.subs]
            [app.db.NRG-16-61.subs]
            [app.db.NRG-26-60.subs]
            [app.db.NRGT-26-2.subs]
            [app.db.NRR-2-60.subs]
            [app.db.NRR-2-60-3C.subs]
            [app.db.NRR-2-61.subs]
            [app.db.NRR-2-61-3C.subs]
            [app.db.LRR-1-60.subs]
            [app.db.URS-60.subs]
            [app.db.URS-61.subs]
            [app.db.URB-60.subs]
            [app.db.URW-60.subs]
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
