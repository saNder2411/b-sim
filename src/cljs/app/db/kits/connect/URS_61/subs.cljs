(ns app.db.kits.connect.URS-61.subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :URS-61
         :<- [:kit/data]
         (fn [{:keys [high-limiter]} _]
           (get-in high-limiter [:controllers "URS 61"])))

(reg-sub :URS-61/show-toolbar
         :<- [:hotspots/current]
         :<- [:high-limiter/id]
         (fn [[current-hotspot id] _]
           (and (= current-hotspot "limiter-high-level") (= id "URS 61"))))

(reg-sub :URS-61/channel-5-active?
         :<- [:URS-61]
         (fn [{:keys [switches]} _]
           (and (get switches 1) (get switches 2))))

(reg-sub :URS-61/channel-6-active?
         :<- [:URS-61]
         (fn [{:keys [switches]} _]
           (and (get switches 3) (get switches 4))))

(reg-sub :URS-61/channel-7-active?
         :<- [:URS-61]
         (fn [{:keys [switches]} _]
           (and (get switches 5) (get switches 6))))

(reg-sub :URS-61/channel-8-active?
         :<- [:URS-61]
         (fn [{:keys [switches]} _]
           (and (get switches 7) (get switches 8))))

(reg-sub :URS-61/channel-5-warning?
         :<- [:URS-61]
         (fn [{:keys [channels]} _]
           (and (= (get-in channels [5 :error]) "none") (= (get-in channels [5 :alarm]) "warning"))))

(reg-sub :URS-61/channel-5-alarm?
         :<- [:URS-61]
         (fn [{:keys [channels]} _]
           (or (not= (get-in channels [5 :error]) "none") (= (get-in channels [5 :alarm]) "alarm"))))

(reg-sub :URS-61/channel-6-warning?
         :<- [:URS-61]
         (fn [{:keys [channels]} _]
           (and (= (get-in channels [6 :error]) "none") (= (get-in channels [6 :alarm]) "warning"))))

(reg-sub :URS-61/channel-6-alarm?
         :<- [:URS-61]
         (fn [{:keys [channels]} _]
           (or (not= (get-in channels [6 :error]) "none") (= (get-in channels [6 :alarm]) "alarm"))))

(reg-sub :URS-61/channel-7-warning?
         :<- [:URS-61]
         (fn [{:keys [channels]} _]
           (and (= (get-in channels [7 :error]) "none") (= (get-in channels [7 :alarm]) "warning"))))

(reg-sub :URS-61/channel-7-alarm?
         :<- [:URS-61]
         (fn [{:keys [channels]} _]
           (or (not= (get-in channels [7 :error]) "none") (= (get-in channels [7 :alarm]) "alarm"))))

(reg-sub :URS-61/channel-8-warning?
         :<- [:URS-61]
         (fn [{:keys [channels]} _]
           (and (= (get-in channels [8 :error]) "none") (= (get-in channels [8 :alarm]) "warning"))))

(reg-sub :URS-61/channel-8-alarm?
         :<- [:URS-61]
         (fn [{:keys [channels]} _]
           (or (not= (get-in channels [8 :error]) "none") (= (get-in channels [8 :alarm]) "alarm"))))

(reg-sub :URS-61/diagnose-led-1-active?
         :<- [:URS-61]
         (fn [{:keys [channels]} _]
           (or (not= (get-in channels [5 :error]) "none")
               (not= (get-in channels [6 :error]) "none")
               (not= (get-in channels [7 :error]) "none")
               (not= (get-in channels [8 :error]) "none")
               (get-in channels [5 :empty?])
               (get-in channels [6 :empty?])
               (get-in channels [7 :empty?])
               (get-in channels [8 :empty?])
               (get-in channels [5 :crowded?])
               (get-in channels [6 :crowded?])
               (get-in channels [7 :crowded?])
               (get-in channels [8 :crowded?]))))


