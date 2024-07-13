(ns app.db.feedwater-pump.subs
  (:require [refx.alpha :refer [reg-sub]]
            [cljs.pprint :refer [cl-format]]))

(reg-sub :feedwater-pump
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :feedwater-pump])))

(reg-sub :feedwater-pump-flow-rate-max-converted-value
         :<- [:feedwater-pump]
         (fn [{:keys [flow-rate]} _]
           (let [{:keys [unit max-value]} flow-rate]
             (cond-> max-value
                     (= unit "T/h") (->> (* 0.984) (cl-format nil "~,2f") js/parseFloat)
                     (= unit "t/h") (->> (cl-format nil "~,2f") js/parseFloat)))))

(reg-sub :feedwater-pump-show-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "feedwater-pump")))


