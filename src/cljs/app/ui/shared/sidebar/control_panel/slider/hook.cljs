(ns app.ui.shared.sidebar.control-panel.slider.hook
  (:require [helix.hooks :refer [use-state use-ref use-effect use-callback]]))

(defn use-slider [max-val next-v-% t-length knob-r msg-handler]
  (let [knob-ref (use-ref nil)
        track-ref (use-ref nil)
        fill-track-ref (use-ref nil)
        init-knob-x (* (/ t-length 100) next-v-%)
        [knob-x set-knob-x!] (use-state init-knob-x)
        [value-% set-value-%!] (use-state next-v-%)
        [send-message set-send-message!] (use-state false)
        val-in-unit (/ (* knob-x max-val) t-length)

        on-knob-move (fn [e]
                       (.preventDefault e)
                       (let [left-edge-client (+ (.-left (.getBoundingClientRect @track-ref)) knob-r)
                             right-edge-client (- (.-right (.getBoundingClientRect @track-ref)) knob-r)
                             length-by-client (- right-edge-client left-edge-client)
                             svg-factor (/ t-length length-by-client)
                             next-x (* (- (.-clientX e) left-edge-client) svg-factor)
                             next-knob-x (cond
                                           (< next-x 0) 0
                                           (> next-x t-length) t-length
                                           :else next-x)]
                         (set-knob-x! next-knob-x)
                         (set-value-%! (* (/ next-knob-x t-length) 100))))

        on-knob-up (fn [_]
                     (set-send-message! true)
                     (set! (.-onpointermove ^js/Object @knob-ref) nil)
                     (set! (.-onpointerup ^js/Object @knob-ref) nil))

        on-knob-down (fn [e]
                       (.preventDefault e)
                       (.setPointerCapture @knob-ref (.-pointerId e))
                       (set! (.-onpointermove ^js/Object @knob-ref) on-knob-move)
                       (set! (.-onpointerup ^js/Object @knob-ref) on-knob-up))

        on-track-down (fn [e]
                        (on-knob-move e)
                        (on-knob-up e)
                        (set! (.-onpointerdown ^js/Object @track-ref) nil))

        on-fill-track-down (fn [e]
                             (on-knob-move e)
                             (on-knob-up e)
                             (set! (.-onpointerdown ^js/Object @fill-track-ref) nil))]
    (use-effect [value-% val-in-unit send-message]
                (when send-message
                  (msg-handler [value-% val-in-unit])
                  (set-send-message! false)))

    [knob-ref track-ref fill-track-ref
     knob-x value-% val-in-unit
     on-knob-down on-track-down on-fill-track-down]))










