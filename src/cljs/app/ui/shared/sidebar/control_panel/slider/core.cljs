(ns app.ui.shared.sidebar.control-panel.slider.core
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [cljs.pprint :refer [cl-format]]
            [app.ui.shared.sidebar.control-panel.slider.hook :refer [use-slider]]))

(def track-length 90)

(defn track-geometry [width]
  {:x 0 :y 3.25 :width width :height 3.5 :rx 1.75 :ry 1.75})

(def knob-geometry {:cx 5 :cy 5 :r 5})

(defn value-box-geometry [x width]
  {:x x :y 0 :width width :height 10 :rx 5 :ry 5})

(defnc value-view [{:keys [x width y active value fraction unit fill]}]
  (let [parsed-value (if (= fraction 0)
                       (int value)
                       (cl-format nil (str "~," fraction "f") value))]
    (d/g {:transform (str "translate(" x "," y ") scale(3.134)") :opacity (if active 1 0.25)}
         (d/rect {:fill fill :& (value-box-geometry x width)})
         (d/text {:x (+ x 31.8) :y 5.714 :font-size 7 :fill "#eee" :dominant-baseline "middle" :text-anchor "end"}
                 (str parsed-value " " unit)))))

(defnc slider [{:keys [x y z title max-val v-% next-v-% active value-box]}]
  (let [[knob-ref track-ref fill-track-ref
         knob-x value-% val-in-unit
         on-knob-down on-track-down on-fill-track-down] (use-slider max-val next-v-% track-length (:r knob-geometry)
                                                                    #(js/console.log "effect-send" (first %) (second %)))]
    (d/g {:transform (str "translate(" x "," y ")" " scale(" z ")")}
         (when title
           (d/text {:x 0 :y -8 :class "slider-title" :font-size 20}
                   title))
         ($ value-view {:active active :value val-in-unit :& value-box})

         (d/g {:transform "scale(3.134)" :opacity (if active 1 0.25)}
              (d/rect {:ref             track-ref
                       :fill            "#6f7684"
                       :on-pointer-down (if active on-track-down nil)
                       :&               (track-geometry 100)})

              (d/rect {:ref             fill-track-ref
                       :fill            "#1cb0ea"
                       :on-pointer-down (if active on-fill-track-down nil)
                       :&               (track-geometry value-%)})

              (d/circle {:ref             knob-ref
                         :class           "slider-knob"
                         :transform       (str "translate(" knob-x ")")
                         :on-pointer-down (if active on-knob-down nil)
                         :&               knob-geometry}))

         )))










