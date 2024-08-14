(ns app.db.kits.connect.LRR-1-60.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :LRR-1-60
         :<- [:kit-data]
         (fn [{:keys [cond]} _]
           (get-in cond [:controllers "LRR 1-60"])))

(reg-sub :LRR-1-60-show-toolbar
         :<- [:current-hotspot]
         :<- [:cond-controller-id]
         (fn [[current-hotspot id] _]
           (and (= current-hotspot "cond-controller") (= id "LRR 1-60"))))

(reg-sub :LRR-1-60-node-id
         :<- [:LRR-1-60]
         (fn [{:keys [switches]} _]
           (let [switch-1 (get switches 1)
                 switch-2 (get switches 2)]
             (cond
               (and (not switch-1) (not switch-2)) 50
               (and (not switch-1) switch-2) 55
               (and switch-1 (not switch-2)) 70
               (and switch-1 switch-2) 75
               :default 50))))

(reg-sub :LRR-1-60-group
         :<- [:LRR-1-60-node-id]
         (fn [node-id _]
           (let [groups-bi-node-id {50 1 55 2 70 3 75 4}]
             (get groups-bi-node-id node-id))))

(reg-sub :LRR-1-60-baud-rate
         :<- [:LRR-1-60]
         (fn [{:keys [switches]} _]
           (let [switch-3 (get switches 3)]
             (if switch-3 250 50))))


