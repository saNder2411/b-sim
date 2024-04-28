(ns app.db.boiler-subs
  (:require [refx.alpha :refer [reg-sub]]))

(reg-sub :boiler
         (fn [db _]
           (:boiler db)))

(reg-sub :boiler-init-settings
         :<- [:boiler]
         (fn [boiler _]
           (:init-settings boiler)))

(reg-sub :water-level
         :<- [:boiler]
         (fn [boiler _]
           (:water-level boiler)))

(reg-sub :sludge-mass
         :<- [:boiler]
         (fn [boiler _]
           (:sludge-mass boiler)))

(reg-sub :sludge-mass-max
         :<- [:boiler-init-settings]
         (fn [boiler-init-settings _]
           (:sludge-mass-max boiler-init-settings)))

(reg-sub :sludge-mass-%
         :<- [:sludge-mass]
         :<- [:sludge-mass-max]
         (fn [[sludge-mass sludge-mass-max] _]
           (let [value (* 100 (/ sludge-mass sludge-mass-max))]
             (if (< value 0) 0 value))))

(reg-sub :sludge-svg-height
         :<- [:sludge-mass-%]
         (fn [sludge-mass-% _]
           (let [max-svg-height 20.587]
             (* (/ max-svg-height 100) sludge-mass-%))))
