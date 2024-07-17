(ns app.ui.shared.boiler-plant.actuators.feed.valve.pneumatic.settings
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.modal :as modal]
            [app.ui.shared.components.form :as f]
            [app.units.constants :refer [UNIT-LIMITS]]))

(defnc mode-hud-settings []
  (let [value (use-sub [:kit-data-by-path [:boiler-plant :actuators :feed :pneumatic-valve :mode :value]])
        view (use-sub [:kit-data-by-path [:boiler-plant :actuators :feed :pneumatic-valve :mode :view]])]
    ($ f/field-row {:label "CONTROL MODE"}
       ($ f/select {:data      [{:value "auto" :label "Auto"} {:value "manual" :label "Manual"}]
                    :value     value
                    :on-change #(dispatch [:change-feed-pneumatic-valve [[:mode :value] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:change-feed-pneumatic-valve [[:mode :view] (not view)]])}))))

(defnc damper-hud-settings []
  (let [unit (use-sub [:kit-data-by-path [:boiler-plant :actuators :feed :pneumatic-valve :damper :unit]])
        view (use-sub [:kit-data-by-path [:boiler-plant :actuators :feed :pneumatic-valve :damper :view]])]
    ($ f/field-row {:label "VALVE STATE"}
       ($ f/select {:data      [{:value "%" :label "%"}]
                    :value     unit
                    :on-change #(dispatch [:change-feed-pneumatic-valve [[:damper :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:change-feed-pneumatic-valve [[:damper :view] (not view)]])}))))

(defnc flow-rate-hud-settings []
  (let [unit (use-sub [:kit-data-by-path [:boiler-plant :actuators :feed :pneumatic-valve :flow-rate :unit]])
        view (use-sub [:kit-data-by-path [:boiler-plant :actuators :feed :pneumatic-valve :flow-rate :view]])]
    ($ f/field-row {:label "FLOW-RATE"}
       ($ f/select {:data      [{:value "t/h" :label "t/h"} {:value "T/h" :label "T/h"}]
                    :value     unit
                    :on-change #(dispatch [:change-feed-pneumatic-valve [[:flow-rate :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:change-feed-pneumatic-valve [[:flow-rate :view] (not view)]])}))))

(defnc damper-init-value []
  (let [value (use-sub [:kit-data-by-path [:boiler-plant :actuators :feed :pneumatic-valve :init-sim-output :damper :value]])
        unit (use-sub [:kit-data-by-path [:boiler-plant :actuators :feed :pneumatic-valve :damper :unit]])
        limits (-> UNIT-LIMITS :feed-water-elect-valve-position (get unit))
        validate-message (str "Initial valve position value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]
    ($ f/field-row {:label "VALVE POSITION"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:change-feed-pneumatic-valve [[:init-sim-output :damper :value] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-feed-pneumatic-valve [[:init-sim-output :damper :value] %]])))
                          :&         limits})

       ($ f/select {:data      [{:value "%" :label "%"}]
                    :value     unit
                    :on-change #(dispatch [:change-feed-pneumatic-valve [[:damper :unit] %]])}))))

(defnc flow-rate-init-max-value []
  (let [converted-value (use-sub [:feed-pneumatic-valve-flow-rate-max-converted-value])
        unit (use-sub [:kit-data-by-path [:boiler-plant :actuators :feed :pneumatic-valve :flow-rate :unit]])
        limits (-> UNIT-LIMITS :feed-water-elect-valve-flow-rate (get unit))
        validate-message (str "Initial flow rate maximum value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]
    ($ f/field-row {:label "MAXIMUM FLOW-RATE"}
       ($ f/input-number {:value     converted-value
                          :on-change #(dispatch [:change-feed-pneumatic-valve-flow-rate-max-value %])
                          :on-blur   (fn [] (f/validate-input-number converted-value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-feed-pneumatic-valve-flow-rate-max-value %])))
                          :&         limits})

       ($ f/select {:data      [{:value "t/h" :label "t/h"} {:value "T/h" :label "T/h"}]
                    :value     unit
                    :on-change #(dispatch [:change-feed-pneumatic-valve [[:flow-rate :unit] %]])}))))

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

          ($ flow-rate-init-max-value))))))

(defnc feed-pneumatic-valve-settings []
  (let [show-settings (use-sub [:kit-data-by-path [:boiler-plant :actuators :feed :pneumatic-valve :settings-view]])]
    (when show-settings
      ($ modal/settings {:title      "Feedwater Pneumatic Valve Settings"
                         :on-default #(dispatch [:restore-defaults-feed-pneumatic-valve-settings])
                         :on-done    #(dispatch [:apply-feed-pneumatic-valve-settings])}

         ($ settings-form)))))
