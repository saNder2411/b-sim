(ns app.db.boiler-plant.boiler.subs
  (:require [refx.alpha :refer [reg-sub]]
            [cljs.pprint :refer [cl-format]]))

(reg-sub :boiler
         (fn [{:keys [kit] :as db} _]
           (get-in db [kit :boiler-plant :boiler])))

(reg-sub :boiler/init-sim-output-pressure-converted-value
         :<- [:boiler]
         (fn [boiler _]
           (let [unit (-> boiler :pressure :unit)
                 value (-> boiler :init-sim-output :pressure :value)]
             (cond-> value
                     (= unit "psi") (-> (* 14.5037738) Math/round)
                     :default (->> (cl-format nil "~,1f") js/parseFloat)))))

(reg-sub :boiler/pressure-converted-value
         :<- [:boiler]
         (fn [boiler _]
           (let [{:keys [unit value]} (:pressure boiler)]
             (cond-> value
                     (= unit "psi") (-> (* 14.5037738) Math/round)
                     :default (->> (cl-format nil "~,1f") js/parseFloat)))))

(reg-sub :boiler/conductivity-converted-value
         :<- [:boiler]
         (fn [boiler _]
           (let [{:keys [unit value]} (:conductivity boiler)]
             (cond-> value
                     (= unit "ppm") (-> (* 0.5) Math/round)
                     :default Math/round))))

(reg-sub :boiler/init-sim-output-conductivity-converted-value
         :<- [:boiler]
         (fn [boiler _]
           (let [unit (-> boiler :conductivity :unit)
                 value (-> boiler :init-sim-output :conductivity :value)]
             (cond-> value
                     (= unit "ppm") (-> (* 0.5) Math/round)
                     :default Math/round))))

(reg-sub :boiler/sludge-mass-%
         :<- [:boiler]
         (fn [{:keys [sludge-mass]} _]
           (let [{:keys [value max]} sludge-mass
                 value-% (* 100 (/ value max))]
             (if (< value-% 0) 0 value-%))))

(reg-sub :boiler/sludge-svg-height
         :<- [:boiler/sludge-mass-%]
         (fn [sludge-mass-% _]
           (let [max-svg-height 20.587]
             (* (/ max-svg-height 100) sludge-mass-%))))

(reg-sub :boiler/show-water-foam
         :<- [:boiler]
         (fn [{:keys [pressure conductivity]} _]
           (and (< (- (:value pressure) (:prev-value pressure)) -0.027) (> (:value conductivity) 2500))))

(reg-sub :boiler/show-toolbar-panel
         :<- [:hotspots/current]
         (fn [current-hotspot _]
           (= current-hotspot "boiler")))
