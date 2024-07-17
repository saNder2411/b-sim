(ns app.db.boiler-plant.actuators.feed.pump.subs
  (:require [refx.alpha :refer [reg-sub]]
            [cljs.pprint :refer [cl-format]]))

(reg-sub :feed-pump
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :boiler-plant :actuators :feed :pump])))

(reg-sub :feed-pump-flow-rate-max-converted-value
         :<- [:feed-pump]
         (fn [{:keys [flow-rate]} _]
           (let [{:keys [unit max-value]} flow-rate]
             (cond-> max-value
                     (= unit "T/h") (->> (* 0.984) (cl-format nil "~,2f") js/parseFloat)
                     (= unit "t/h") (->> (cl-format nil "~,2f") js/parseFloat)))))

(reg-sub :feed-pump-show-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "feed-pump")))


