(ns app.ui.shared.boiler-plant.actuators.feed.valve.electric.settings
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.modal :as modal]
            [app.ui.shared.components.form :as f]
            [app.units.constants :refer [UNIT-LIMITS]]))


(defnc mode-hud-settings []
  (let [value (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :mode :value]])
        view (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :mode :view]])]
    ($ f/field-row {:label "CONTROL MODE"}
       ($ f/select {:data      [{:value "auto" :label "Auto"} {:value "manual" :label "Manual"}]
                    :value     value
                    :on-change #(dispatch [:feed-electric-valve/change [[:mode :value] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:feed-electric-valve/change [[:mode :view] (not view)]])}))))

(defnc damper-hud-settings []
  (let [unit (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :damper :unit]])
        view (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :damper :view]])]
    ($ f/field-row {:label "VALVE STATE"}
       ($ f/select {:data      [{:value "%" :label "%"}]
                    :value     unit
                    :on-change #(dispatch [:feed-electric-valve/change [[:damper :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:feed-electric-valve/change [[:damper :view] (not view)]])}))))

(defnc flow-rate-hud-settings []
  (let [unit (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :flow-rate :unit]])
        view (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :flow-rate :view]])]
    ($ f/field-row {:label "FLOW-RATE"}
       ($ f/select {:data      [{:value "t/h" :label "t/h"} {:value "T/h" :label "T/h"}]
                    :value     unit
                    :on-change #(dispatch [:feed-electric-valve/change [[:flow-rate :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:feed-electric-valve/change [[:flow-rate :view] (not view)]])}))))

(defnc damper-init-value []
  (let [value (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :init-sim-output :damper :value]])
        unit (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :damper :unit]])
        limits (-> UNIT-LIMITS :feed-water-elect-valve-position (get unit))
        validate-message (str "Initial valve position value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]
    ($ f/field-row {:label "VALVE POSITION"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:feed-electric-valve/change [[:init-sim-output :damper :value] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:feed-electric-valve/change [[:init-sim-output :damper :value] %]])))
                          :&         limits})

       ($ f/select {:data      [{:value "%" :label "%"}]
                    :value     unit
                    :on-change #(dispatch [:feed-electric-valve/change [[:damper :unit] %]])}))))

(defnc flow-rate-init-max-value []
  (let [converted-value (use-sub [:feed-electric-valve/flow-rate-converted-value-max])
        unit (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :flow-rate :unit]])
        limits (-> UNIT-LIMITS :feed-water-elect-valve-flow-rate (get unit))
        validate-message (str "Initial flow rate maximum value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]
    ($ f/field-row {:label "MAXIMUM FLOW-RATE"}
       ($ f/input-number {:value     converted-value
                          :on-change #(dispatch [:feed-electric-valve/change-flow-rate-max-value %])
                          :on-blur   (fn [] (f/validate-input-number converted-value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:feed-electric-valve/change-flow-rate-max-value %])))
                          :&         limits})

       ($ f/select {:data      [{:value "t/h" :label "t/h"} {:value "T/h" :label "T/h"}]
                    :value     unit
                    :on-change #(dispatch [:feed-electric-valve/change [[:flow-rate :unit] %]])}))))

(defnc travel-time-init-value []
  (let [value (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :init-sim-output :transition :travel-time :value]])
        unit (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :transition :travel-time :unit]])
        limits (-> UNIT-LIMITS :feed-water-elect-valve-travel-time (get unit))
        validate-message (str "Initial valve travel time value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]
    ($ f/field-row {:label "VALVE TRAVEL TIME"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:feed-electric-valve/change [[:init-sim-output :transition :travel-time :value] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:feed-electric-valve/change [[:init-sim-output :transition :travel-time :value] %]])))
                          :&         limits})

       ($ f/select {:data      [{:value "s" :label "s"}]
                    :value     unit
                    :on-change #(dispatch [:feed-electric-valve/change [[:transition :travel-time :unit] %]])}))))

(defnc potentiometer-connection-init-value []
  (let [value (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :potentiometer :connection]])]
    ($ f/field-row {:label "FEEDBACK POTENTIOMETER"}
       ($ f/select {:data      [{:value "connected" :label "connected"} {:value "disconnected" :label "disconnected"}]
                    :value     value
                    :on-change #(dispatch [:feed-electric-valve/change [[:potentiometer :connection] %]])}))))

(defnc potentiometer-damper-closed-init-value []
  (let [value (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :potentiometer :damper :closed]])
        unit (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :potentiometer :damper :unit]])
        limits (-> UNIT-LIMITS :feed-water-elect-valve-potentiometer-closed (get unit))
        validate-message (str "Initial potentiometer raw value closed must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]
    ($ f/field-row {:label "POTENTIOMETER RAW VALUE CLOSED"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:feed-electric-valve/change [[:potentiometer :damper :closed] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:feed-electric-valve/change [[:potentiometer :damper :closed] %]])))
                          :&         limits})

       ($ f/select {:data      [{:value "byte" :label "byte"}]
                    :value     unit
                    :on-change #(dispatch [:feed-electric-valve/change [[:potentiometer :damper :unit] %]])}))))

(defnc potentiometer-damper-open-init-value []
  (let [value (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :potentiometer :damper :open]])
        unit (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :potentiometer :damper :unit]])
        limits (-> UNIT-LIMITS :feed-water-elect-valve-potentiometer-open (get unit))
        validate-message (str "Initial potentiometer raw value open must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]
    ($ f/field-row {:label "POTENTIOMETER RAW VALUE OPEN"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:feed-electric-valve/change [[:potentiometer :damper :open] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:feed-electric-valve/change [[:potentiometer :damper :open] %]])))
                          :&         limits})

       ($ f/select {:data      [{:value "byte" :label "byte"}]
                    :value     unit
                    :on-change #(dispatch [:feed-electric-valve/change [[:potentiometer :damper :unit] %]])}))))

(defnc settings-form []
  (let [show-settings-form-sim-start-values (use-sub [:show-settings-form-sim-start-values])]
    (<>
      (d/div {:class "divider" :style {:margin-top 0}} "head-up-display")

      ($ mode-hud-settings)

      ($ damper-hud-settings)

      ($ flow-rate-hud-settings)

      (when show-settings-form-sim-start-values
        (<>
          (d/div {:class "divider"} "simulation start values")

          ($ damper-init-value)

          (d/div {:class "divider"} "specifications")

          ($ flow-rate-init-max-value)

          ($ travel-time-init-value)

          ($ potentiometer-connection-init-value)

          ($ potentiometer-damper-closed-init-value)

          ($ potentiometer-damper-open-init-value))))))

(defnc feed-electric-valve-settings []
  (let [show-settings (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :electric-valve :settings-view]])]
    (when show-settings
      ($ modal/settings {:title      "Feedwater Electric Valve Settings"
                         :on-default #(dispatch [:feed-electric-valve/restore-defaults-settings])
                         :on-done    #(dispatch [:feed-electric-valve/apply-settings])}

         ($ settings-form)))))
