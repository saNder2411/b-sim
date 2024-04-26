(ns app.shared.control-panel.slider
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [cljs.pprint :refer [cl-format]]
            [app.shared.control-panel.slider-hook :refer [use-slider]]))

(def track-length 90)

(defn track-geometry [width]
  {:x 0 :y 3.25 :width width :height 3.5 :rx 1.75 :ry 1.75})

(def knob-geometry {:cx 5 :cy 5 :r 5})

(defn value-box-geometry [x width]
  {:x x :y 0 :width width :height 10 :rx 5 :ry 5})

(defnc value-view [{:keys [x width y active value fraction unit fill]}]
  (d/g {:transform (str "translate(380," y ") scale(3.134)") :opacity (if active 1 0.25)}
       (d/rect {:fill fill :& (value-box-geometry x width)})
       (d/text {:x (+ x 2.3) :y 5.714 :font-size 7 :fill "#eee" :dominant-baseline "middle"}
               (str (cl-format nil (str "~," fraction "f") value) " " unit))))

(defnc slider [{:keys [y title max-val v-% next-v-% active value-box]}]
  (let [[knob-ref track-ref fill-track-ref
         knob-x value-% val-in-unit
         on-knob-down on-track-down on-fill-track-down] (use-slider max-val next-v-% track-length (:r knob-geometry)
                                                                    #(js/console.log "effect-send" (first %) (second %)))]
    (d/g
      (when title
        (d/text {:class "slider-title" :transform (str "translate(67," (- y 10) ") scale(3.134)") :font-size 6}
                title))

      (d/g {:transform (str "translate(67," y ") scale(3.134)") :opacity (if active 1 0.25)}
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

      ($ value-view {:y y :active active :value val-in-unit :& value-box}))))










