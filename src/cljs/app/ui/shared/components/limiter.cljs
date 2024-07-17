(ns app.ui.shared.components.limiter
  (:require [helix.core :refer [defnc <>]]
            [helix.dom :as d]))

(defnc btn-test [{:keys [btn-path label-path active on-mouse-down on-mouse-up]}]
  (let [class (cond-> ""
                      active (str "start-test-btn"))]
    (<>
      (d/path {:class class
               :fill  "#0084bc"
               :d     btn-path
               :on-mouse-down (if active on-mouse-down nil)
               :on-mouse-up (if active on-mouse-up nil)})
      (d/path {:fill "#e5e6e4" :pointer-events "none" :d label-path}))))

(defnc led-alarm [{:keys [led-path red red-pulse]}]
  (let [class (cond-> "led-default"
                      red (str " led-red")
                      red-pulse (str " led-red-pulse"))]
    (d/path {:class class :d led-path})))

(defnc led-diagnosis [{:keys [led-path label-path yellow yellow-pulse]}]
  (let [class (cond-> "led-default"
                      yellow (str " led-yellow")
                      yellow-pulse (str " led-yellow-pulse"))]
    (<>
      (d/path {:class class  :d led-path})
      (d/path {:fill "#151616" :fill-rule "evenodd" :d label-path}))))

(defnc led-status [{:keys [led-path green green-pulse green-fast-pulse]}]
  (let [class (cond-> "led-default"
                      green (str " led-green")
                      green-pulse (str " led-green-pulse")
                      green-fast-pulse (str " led-green-fast-pulse"))]
    (d/path {:class class :d led-path})))
