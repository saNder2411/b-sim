(ns app.db.kits.connect.URS-60.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :URS-60
         :<- [:kit/data]
         (fn [{:keys [low-limiter]} _]
           (get-in low-limiter [:controllers "URS 60"])))

(reg-sub :URS-60/show-toolbar
         :<- [:hotspots/current]
         :<- [:low-limiter/id]
         (fn [[current-hotspot id] _]
           (and (= current-hotspot "low-limiter") (= id "URS 60"))))

(reg-sub :URS-60/channel-1-active?
         :<- [:URS-60]
         (fn [{:keys [switches]} _]
           (and (get switches 1) (get switches 2))))

(reg-sub :URS-60/channel-2-active?
         :<- [:URS-60]
         (fn [{:keys [switches]} _]
           (and (get switches 3) (get switches 4))))

(reg-sub :URS-60/channel-3-active?
         :<- [:URS-60]
         (fn [{:keys [switches]} _]
           (and (get switches 5) (get switches 6))))

(reg-sub :URS-60/channel-4-active?
         :<- [:URS-60]
         (fn [{:keys [switches]} _]
           (and (get switches 7) (get switches 8))))

(reg-sub :URS-60/channel-1-warning?
         :<- [:URS-60]
         (fn [{:keys [channels]} _]
           (and (= (get-in channels [1 :error]) "none") (= (get-in channels [1 :alarm]) "warning"))))

(reg-sub :URS-60/channel-1-alarm?
         :<- [:URS-60]
         (fn [{:keys [channels]} _]
           (or (not= (get-in channels [1 :error]) "none") (= (get-in channels [1 :alarm]) "alarm"))))

(reg-sub :URS-60/channel-2-warning?
         :<- [:URS-60]
         (fn [{:keys [channels]} _]
           (and (= (get-in channels [2 :error]) "none") (= (get-in channels [2 :alarm]) "warning"))))

(reg-sub :URS-60/channel-2-alarm?
         :<- [:URS-60]
         (fn [{:keys [channels]} _]
           (or (not= (get-in channels [2 :error]) "none") (= (get-in channels [2 :alarm]) "alarm"))))

(reg-sub :URS-60/channel-3-warning?
         :<- [:URS-60]
         (fn [{:keys [channels]} _]
           (and (= (get-in channels [3 :error]) "none") (= (get-in channels [3 :alarm]) "warning"))))

(reg-sub :URS-60/channel-3-alarm?
         :<- [:URS-60]
         (fn [{:keys [channels]} _]
           (or (not= (get-in channels [3 :error]) "none") (= (get-in channels [3 :alarm]) "alarm"))))

(reg-sub :URS-60/channel-4-warning?
         :<- [:URS-60]
         (fn [{:keys [channels]} _]
           (and (= (get-in channels [4 :error]) "none") (= (get-in channels [4 :alarm]) "warning"))))

(reg-sub :URS-60/channel-4-alarm?
         :<- [:URS-60]
         (fn [{:keys [channels]} _]
           (or (not= (get-in channels [4 :error]) "none") (= (get-in channels [4 :alarm]) "alarm"))))

(reg-sub :URS-60/diagnose-led-1-active?
         :<- [:URS-60]
         (fn [{:keys [channels]} _]
           (or (not= (get-in channels [1 :error]) "none")
               (not= (get-in channels [2 :error]) "none")
               (not= (get-in channels [3 :error]) "none")
               (not= (get-in channels [4 :error]) "none")
               (get-in channels [1 :empty?])
               (get-in channels [2 :empty?])
               (get-in channels [3 :empty?])
               (get-in channels [4 :empty?])
               (get-in channels [1 :crowded?])
               (get-in channels [2 :crowded?])
               (get-in channels [3 :crowded?])
               (get-in channels [4 :crowded?]))))

