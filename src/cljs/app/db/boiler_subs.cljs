(ns app.db.boiler-subs
  (:require [refx.alpha :refer [reg-sub]]
            [cljs.pprint :refer [cl-format]]))

(reg-sub :boiler
         (fn [{:keys [kit] :as db} _]
           (get-in db [(keyword kit) :boiler])))

(reg-sub :boiler-settings
         :<- [:boiler]
         (fn [boiler _]
           (:settings boiler)))

(reg-sub :boiler-settings-view
         :<- [:boiler-settings]
         (fn [settings _]
           (:view settings)))

(reg-sub :boiler-settings-pressure-converted-value
         :<- [:boiler-settings]
         (fn [settings _]
           (let [{:keys [unit value]} (:pressure settings)]
             (cond-> value
                     (= unit "psi") (-> (* 14.5037738) Math/round)
                     :default (->> (cl-format nil "~,1f") js/parseFloat)))))

(reg-sub :boiler-settings-conductivity-converted-value
         :<- [:boiler-settings]
         (fn [settings _]
           (let [{:keys [unit value]} (:conductivity settings)]
             (cond-> value
                     (= unit "ppm") (-> (* 0.5) Math/round)
                     :default Math/round))))

(reg-sub :water-level
         :<- [:boiler]
         (fn [boiler _]
           (:water-level boiler)))

(reg-sub :sludge-mass
         :<- [:boiler]
         (fn [boiler _]
           (:sludge-mass boiler)))

(reg-sub :sludge-mass-max
         :<- [:boiler-settings]
         (fn [boiler-settings _]
           (get-in boiler-settings [:sludge-mass :max])))

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

(reg-sub :pressure
         :<- [:boiler]
         (fn [boiler _]
           (:pressure boiler)))

(reg-sub :prev-pressure
         :<- [:boiler]
         (fn [boiler _]
           (:prev-pressure boiler)))

(reg-sub :conductivity
         :<- [:boiler]
         (fn [boiler _]
           (:conductivity boiler)))

(reg-sub :show-water-foam
         :<- [:pressure]
         :<- [:prev-pressure]
         :<- [:conductivity]
         (fn [[pressure prev-pressure conductivity] _]
           (and (< (- pressure prev-pressure) -0.027) (> conductivity 2500))))

(reg-sub :boiler-show-toolbar-panel
         :<- [:current-hotspot]
         (fn [current-hotspot _]
           (= current-hotspot "boiler")))
