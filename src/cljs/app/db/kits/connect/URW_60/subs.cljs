(ns app.db.kits.connect.URW-60.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :URW-60
         :<- [:kit-data]
         (fn [{:keys [converter]} _]
           (get-in converter [:controllers "URW 60"])))

(reg-sub :URW-60-show-toolbar
         :<- [:current-hotspot]
         :<- [:converter-controller-id]
         (fn [[current-hotspot converter-id] _]
           (and (= current-hotspot "converter") (= converter-id "URW 60"))))

(reg-sub :URW-60-node-id
         :<- [:URW-60]
         (fn [{:keys [switches]} _]
           (let [switch-1 (get switches 1)
                 switch-2 (get switches 2)]
             (cond
               (and (not switch-1) (not switch-2)) 41
               (and (not switch-1) switch-2) 46
               (and switch-1 (not switch-2)) 61
               (and switch-1 switch-2) 66
               :default 41))))

(reg-sub :URW-60-group
         :<- [:URW-60-node-id]
         (fn [node-id _]
           (let [groups-bi-node-id {41 1 46 2 61 3 66 4}]
             (get groups-bi-node-id node-id))))

(reg-sub :URW-60-baud-rate
         :<- [:URW-60]
         (fn [{:keys [switches]} _]
           (let [switch-3 (get switches 3)]
             (if switch-3 250 50))))