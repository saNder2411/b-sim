(ns app.ui.shared.boiler-plant.actuators.feed.pump.settings
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.modal :as modal]
            [app.ui.shared.components.form :as f]
            [app.units.constants :refer [UNIT-LIMITS]]))

(defnc mode-hud-settings []
  (let [value (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :pump :mode :value]])
        view (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :pump :mode :view]])]
    ($ f/field-row {:label "CONTROL MODE"}
       ($ f/select {:data      [{:value "auto" :label "Auto"} {:value "manual" :label "Manual"}]
                    :value     value
                    :on-change #(dispatch [:feed-pump/change [[:mode :value] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:feed-pump/change [[:mode :view] (not view)]])}))))

(defnc performance-hud-settings []
  (let [unit (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :pump :performance :unit]])
        view (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :pump :performance :view]])]
    ($ f/field-row {:label "PERFORMANCE"}
       ($ f/select {:data      [{:value "%" :label "%"}]
                    :value     unit
                    :on-change #(dispatch [:feed-pump/change [[:performance :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:feed-pump/change [[:performance :view] (not view)]])}))))

(defnc rotation-hud-settings []
  (let [unit (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :pump :rotation :unit]])
        view (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :pump :rotation :view]])]
    ($ f/field-row {:label "ROTATIONAL SPEED"}
       ($ f/select {:data      [{:value "rpm" :label "rpm"}]
                    :value     unit
                    :on-change #(dispatch [:feed-pump/change [[:rotation :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:feed-pump/change [[:rotation :view] (not view)]])}))))

(defnc flow-rate-hud-settings []
  (let [unit (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :pump :flow-rate :unit]])
        view (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :pump :flow-rate :view]])]
    ($ f/field-row {:label "FLOW-RATE"}
       ($ f/select {:data      [{:value "t/h" :label "t/h"} {:value "T/h" :label "T/h"}]
                    :value     unit
                    :on-change #(dispatch [:feed-pump/change [[:flow-rate :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:feed-pump/change [[:flow-rate :view] (not view)]])}))))

(defnc performance-init-value []
  (let [value (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :pump :init-sim-output :performance :value]])
        unit (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :pump :performance :unit]])
        limits (-> UNIT-LIMITS :feed-water-pump-performance (get unit))
        validate-message (str "Initial pump performance value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]
    ($ f/field-row {:label "PERFORMANCE"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:feed-pump/change [[:init-sim-output :performance :value] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:feed-pump/change [[:init-sim-output :performance :value] %]])))
                          :&         limits})

       ($ f/select {:data      [{:value "%" :label "%"}]
                    :value     unit
                    :on-change #(dispatch [:feed-pump/change [[:performance :unit] %]])}))))

(defnc rotation-init-max-value []
  (let [value (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :pump :rotation :max]])
        unit (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :pump :rotation :unit]])
        limits (-> UNIT-LIMITS :feed-water-pump-rot-speed (get unit))
        validate-message (str "Initial pump maximum rotational speed value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]
    ($ f/field-row {:label "MAXIMUM ROTATIONAL SPEED"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:feed-pump/change [[:rotation :max] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:feed-pump/change [[:rotation :max] %]])))
                          :&         limits})

       ($ f/select {:data      [{:value "rpm" :label "rpm"}]
                    :value     unit
                    :on-change #(dispatch [:feed-pump/change [[:rotation :unit] %]])}))))

(defnc flow-rate-init-max-value []
  (let [converted-value (use-sub [:feed-pump/flow-rate-converted-max-value])
        unit (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :pump :flow-rate :unit]])
        limits (-> UNIT-LIMITS :feed-water-elect-valve-flow-rate (get unit))
        validate-message (str "Initial flow rate maximum value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]
    ($ f/field-row {:label "MAXIMUM FLOW-RATE"}
       ($ f/input-number {:value     converted-value
                          :on-change #(dispatch [:feed-pump/change-flow-rate-max-value %])
                          :on-blur   (fn [] (f/validate-input-number converted-value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:feed-pump/change-flow-rate-max-value %])))
                          :&         limits})

       ($ f/select {:data      [{:value "t/h" :label "t/h"} {:value "T/h" :label "T/h"}]
                    :value     unit
                    :on-change #(dispatch [:feed-pump/change [[:flow-rate :unit] %]])}))))

(defnc settings-form []
  (let [show-settings-form-sim-start-values (use-sub [:show-settings-form-sim-start-values])]
    (<>
      (d/div {:class "divider" :style {:margin-top 0}} "head-up-display")

      ($ mode-hud-settings)

      ($ performance-hud-settings)

      ($ rotation-hud-settings)

      ($ flow-rate-hud-settings)

      (when show-settings-form-sim-start-values
        (<>
          (d/div {:class "divider"} "simulation start values")

          ($ performance-init-value)

          (d/div {:class "divider"} "specifications")

          ($ rotation-init-max-value)

          ($ flow-rate-init-max-value))))))

(defnc feed-pump-settings []
  (let [show-settings (use-sub [:kit/data-by-path [:boiler-plant :actuators :feed :pump :settings-view]])]
    (when show-settings
      ($ modal/settings {:title      "Feedwater Pump Settings"
                         :on-default #(dispatch [:feed-pump/restore-defaults-settings])
                         :on-done    #(dispatch [:feed-pump/apply-settings])}

         ($ settings-form)))))
