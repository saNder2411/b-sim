(ns app.db.boiler-plant.actuators.blowdown.sludge-valve.subs
  (:require [refx.alpha :refer [reg-sub]]
            [cljs.pprint :refer [cl-format]]))

(reg-sub :sludge-valve
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :boiler-plant :actuators :blowdown :sludge-valve])))

(reg-sub :sludge-valve-init-countdown-converted-value
         :<- [:sludge-valve]
         (fn [{:keys [init-sim-output]} _]
           (let [{:keys [unit value]} (:countdown init-sim-output)]
             (cond-> value
                     (= unit "m") (->> (* 0.01666666667) (cl-format nil "~,2f") js/parseFloat)))))

(reg-sub :sludge-valve-show-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "sludge-valve")))


