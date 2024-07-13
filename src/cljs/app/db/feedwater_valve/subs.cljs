(ns app.db.feedwater-valve.subs
  (:require [refx.alpha :refer [reg-sub]]
            [cljs.pprint :refer [cl-format]]))

(reg-sub :feedwater-valve
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :feedwater-valve])))

(reg-sub :feedwater-valve-flow-rate-max-converted-value
         :<- [:feedwater-valve]
         (fn [feedwater-valve _]
           (let [{:keys [unit max-value]} (:flow-rate feedwater-valve)]
             (cond-> max-value
                     (= unit "T/h") (->> (* 0.984) (cl-format nil "~,2f") js/parseFloat)
                     (= unit "t/h") (->> (cl-format nil "~,2f") js/parseFloat)))))

(reg-sub :feedwater-valve-show-toolbar-panel
         :<- [:current-hotspot]
         :<- [:level-controller-actuator-type]
         (fn [[current-hotspot  level-controller-actuator-type] _]
           (and (= current-hotspot "feedwater-valve") (= level-controller-actuator-type "ELECTRIC_VALVE"))))


