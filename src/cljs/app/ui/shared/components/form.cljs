(ns app.ui.shared.components.form
  (:require [helix.core :refer [defnc <>]]
            [helix.dom :as d]
            [refx.alpha :refer [dispatch]]))

(defnc field-row [{:keys [label children]}]
  (<>
    (d/h6 {:class "title is-6 dialog-label"}
          label)
    (d/div {:class "field has-addons"}
           children)))

(defnc select [{:keys [data value on-change]}]
  (d/div {:class "control is-expanded"}
         (d/div {:class "select is-small is-full-width"}
                (d/select {:size 1 :value value :on-change #(on-change (-> % .-target .-value))}
                          (map #(d/option {:key (:value %) :value (:value %)} (:label %)) data)))))

(defnc checkbox [{:keys [value on-change]}]
  (d/div {:class "control"}
         (d/svg {:viewBox "0 0 31.43 20.05" :style {:position "relative" :height 20 :margin-left 15 :margin-top 5}}
                (if value
                  (<>
                    (d/path {:fill "#a1a1a1" :d "M15.71,18.7A18.43,18.43,0,0,1,.43,10.59a1,1,0,0,1,0-1.12A18.45,18.45,0,0,1,31,9.47a1,1,0,0,1,0,1.12A18.45,18.45,0,0,1,15.71,18.7ZM2.48,10A16.45,16.45,0,0,0,15.71,16.7,16.47,16.47,0,0,0,29,10,16.45,16.45,0,0,0,2.48,10Z"})
                    (d/path {:fill "#a1a1a1" :d "M15.71,3.76A6.27,6.27,0,1,0,22,10,6.26,6.26,0,0,0,15.71,3.76Zm2.15,5.81a1.72,1.72,0,1,1,1.71-1.71A1.71,1.71,0,0,1,17.86,9.57Z"}))
                  (<>
                    (d/path {:fill "#d4d4d3" :d "M31,9.47a18.45,18.45,0,0,0-5.4-5.24L24.15,5.69A16.39,16.39,0,0,1,29,10,16.47,16.47,0,0,1,15.71,16.7a17.24,17.24,0,0,1-2.39-.18l-1.71,1.71a18.61,18.61,0,0,0,4.1.47A18.45,18.45,0,0,0,31,10.59,1,1,0,0,0,31,9.47Z"})
                    (d/path {:fill "#d4d4d3" :d "M15.71,16.29A6.27,6.27,0,0,0,22,10a6.11,6.11,0,0,0-.29-1.88L13.83,16A6.53,6.53,0,0,0,15.71,16.29Z"})
                    (d/path {:fill "#d4d4d3" :d "M24.55,1.19a1,1,0,0,0-1.41,0L21.9,2.43a18.4,18.4,0,0,0-21.47,7,1,1,0,0,0,0,1.12,18.44,18.44,0,0,0,7.12,6.19l-.67.67a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L24.55,2.6A1,1,0,0,0,24.55,1.19ZM2.48,10A16.36,16.36,0,0,1,20.3,4L19.37,5A6.25,6.25,0,0,0,9.45,10a6.13,6.13,0,0,0,1.19,3.65l-1.59,1.6A16.5,16.5,0,0,1,2.48,10Z"})))
                (d/rect {:x              0
                         :y              0
                         :width          576
                         :height         512
                         :fill           "none"
                         :stroke         "none"
                         :cursor         "pointer"
                         :pointer-events "visibleFill"
                         :on-click       on-change}))))


(defnc input-number [{:keys [value min max step on-change on-blur]}]
  (d/div {:class "control"}
         (d/input {:class     "input is-small"
                   :type      "number"
                   :value     value
                   :min       min
                   :max       max
                   :step      step
                   :on-change #(when-not (empty? (-> % .-target .-value))
                                 (on-change (-> % .-target .-value js/parseFloat)))
                   :on-blur on-blur})))


(defn validate-input-number [v min max message dispatch-action]
  (cond
    (or (not (number? v)) (< v 0)) (dispatch-action min)
    (< v min) (do
                (dispatch [:notifications/push {:id (str (random-uuid)) :message message :duration 5000}])
                (dispatch-action min))
    (> v max) (do
                (dispatch [:notifications/push {:id (str (random-uuid)) :message message :duration 5000}])
                (dispatch-action max))
    :default v)
  )


