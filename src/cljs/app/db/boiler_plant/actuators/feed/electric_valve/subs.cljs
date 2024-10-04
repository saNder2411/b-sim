(ns app.db.boiler-plant.actuators.feed.electric-valve.subs
  (:require [refx.alpha :refer [reg-sub]]
            [cljs.pprint :refer [cl-format]]))

(reg-sub :feed-electric-valve
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :boiler-plant :actuators :feed :electric-valve])))

(reg-sub :feed-electric-valve/flow-rate-converted-value-max
         :<- [:feed-electric-valve]
         (fn [{:keys [flow-rate]} _]
           (let [{:keys [unit max]} flow-rate]
             (cond-> max
                     (= unit "T/h") (->> (* 0.984) (cl-format nil "~,2f") js/parseFloat)
                     (= unit "t/h") (->> (cl-format nil "~,2f") js/parseFloat)))))

(reg-sub :feed-electric-valve/show-toolbar-panel
         :<- [:hotspots/current]
         :<- [:current-level-controller/actuator-type]
         (fn [[current-hotspot actuator-type] _]
           (and (= current-hotspot "feed-valve") (= actuator-type :electric-valve))))