(ns app.db.feedwater-valve-pn.subs
  (:require [refx.alpha :refer [reg-sub]]
            [cljs.pprint :refer [cl-format]]))

(reg-sub :feedwater-valve-pn
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :feedwater-valve-pn])))

(reg-sub :feedwater-valve-pn-flow-rate-max-converted-value
         :<- [:feedwater-valve-pn]
         (fn [{:keys [flow-rate]} _]
           (let [{:keys [unit max-value]} flow-rate]
             (cond-> max-value
                     (= unit "T/h") (->> (* 0.984) (cl-format nil "~,2f") js/parseFloat)
                     (= unit "t/h") (->> (cl-format nil "~,2f") js/parseFloat)))))

(reg-sub :feedwater-valve-pn-show-toolbar-panel
         :<- [:current-hotspot]
         :<- [:level-controller-actuator-type]
         (fn [[current-hotspot level-controller-actuator-type] _]
           (and (= current-hotspot "feedwater-valve") (= level-controller-actuator-type "PNEUMATIC_VALVE"))))



