(ns app.db.boiler-plant.actuators.blowdown.continuous-valve.subs
  (:require [refx.alpha :refer [reg-sub]]
            [cljs.pprint :refer [cl-format]]))

(reg-sub :continuous-valve
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :boiler-plant :actuators :blowdown :continuous-valve])))

(reg-sub :continuous-valve/flow-rate-converted-max-value
         :<- [:continuous-valve]
         (fn [continuous-valve _]
           (let [{:keys [unit max]} (:flow-rate continuous-valve)]
             (cond-> max
                     (= unit "T/h") (->> (* 0.984) (cl-format nil "~,2f") js/parseFloat)
                     (= unit "t/h") (->> (cl-format nil "~,2f") js/parseFloat)))))

(reg-sub :continuous-valve/show-toolbar-panel
         :<- [:hotspots/current]
         (fn [current-hotspot _]
           (= current-hotspot "continuous-valve")))


