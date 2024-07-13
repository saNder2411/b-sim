(ns app.db.feedwater.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :feedwater
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :feedwater])))

(reg-sub :feedwater-conductivity-converted-value
         :<- [:feedwater]
         (fn [feedwater _]
           (let [{:keys [unit value]} (:conductivity feedwater)]
             (cond-> value
                     (= unit "ppm") (-> (* 0.5) Math/round)
                     :default Math/round))))

(reg-sub :feedwater-show-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "feedwater")))


