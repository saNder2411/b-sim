(ns app.shared.boiler-plant.burner.settings
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.modal :as modal]
            [app.shared.components.form :as f]
            [app.units.constants :refer [UNIT-LIMITS]]))


(defnc mode-hud-settings []
  (let [value (use-sub [:kit-data-by-keywords [:burner :settings :mode :value]])
        view (use-sub [:kit-data-by-keywords [:burner :settings :mode :view]])]
    ($ f/field-row {:label "CONTROL MODE"}
       ($ f/select {:data      [{:value "auto" :label "Auto"}]
                    :value     value
                    :on-change #(dispatch [:change-burner-settings [[:mode :value] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:change-burner-settings [[:mode :view] (not view)]])}))))

(defnc status-hud-settings []
  (let [unit (use-sub [:kit-data-by-keywords [:burner :settings :status :unit]])
        view (use-sub [:kit-data-by-keywords [:burner :settings :status :view]])]
    ($ f/field-row {:label "BURNER STATE"}
       ($ f/select {:data      [{:value "on/off" :label "on/off"}]
                    :value     unit
                    :on-change #(dispatch [:change-burner-settings [[:status :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:change-burner-settings [[:status :view] (not view)]])}))))

(defnc power-hud-settings []
  (let [unit (use-sub [:kit-data-by-keywords [:burner :settings :power :unit]])
        view (use-sub [:kit-data-by-keywords [:burner :settings :power :view]])]
    ($ f/field-row {:label "POWER"}
       ($ f/select {:data      [{:value "kW" :label "kW"} {:value "MW" :label "MW"}]
                    :value     unit
                    :on-change #(dispatch [:change-burner-settings [[:power :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:change-burner-settings [[:power :view] (not view)]])}))))

(defnc fuel-consumption-hud-settings []
  (let [unit (use-sub [:kit-data-by-keywords [:burner :settings :fuel-consumption :unit]])
        view (use-sub [:kit-data-by-keywords [:burner :settings :fuel-consumption :view]])]

    ($ f/field-row {:label "FUEL CONSUMPTION"}
       ($ f/select {:data      [{:value "nm³/s" :label "nm³/s"} {:value "hnm³/h" :label "hnm³/h"}]
                    :value     unit
                    :on-change #(dispatch [:change-burner-settings [[:fuel-consumption :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:change-burner-settings [[:fuel-consumption :view] (not view)]])}))))


(defnc status-init-value []
  (let [value (use-sub [:kit-data-by-keywords [:burner :settings :status :value]])]
    ($ f/field-row {:label "STATE"}
       ($ f/select {:data      [{:value "on" :label "On"} {:value "off" :label "Off"}]
                    :value     value
                    :on-change #(dispatch [:change-burner-settings [[:status :value] %]])}))))

(defnc pressure-init-value-on []
  (let [converted-value (use-sub [:burner-settings-pressure-converted-value-on])
        unit (use-sub [:kit-data-by-keywords [:burner :settings :pressure :unit]])
        limits (-> UNIT-LIMITS :boiler-pressure (get unit))
        validate-message (str "Initial pressure value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "SWITCH-POINT ON (PRESSURE ABS)"}
       ($ f/input-number {:value     converted-value
                          :on-change #(dispatch [:change-burner-settings-pressure-value [:on %]])
                          :on-blur   (fn [] (f/validate-input-number converted-value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-burner-settings-pressure-value [:on %]])))
                          :&         limits})

       ($ f/select {:data      [{:value "bar" :label "bar"} {:value "psi" :label "psi"}]
                    :value     unit
                    :on-change #(dispatch [:change-burner-settings [[:pressure :unit] %]])}))))


(defnc pressure-init-value-off []
  (let [converted-value (use-sub [:burner-settings-pressure-converted-value-off])
        unit (use-sub [:kit-data-by-keywords [:burner :settings :pressure :unit]])
        limits (-> UNIT-LIMITS :boiler-pressure (get unit))
        validate-message (str "Initial pressure value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "SWITCH-POINT OFF (PRESSURE ABS)"}
       ($ f/input-number {:value     converted-value
                          :on-change #(dispatch [:change-burner-settings-pressure-value [:off %]])
                          :on-blur   (fn [] (f/validate-input-number converted-value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-burner-settings-pressure-value [:off %]])))
                          :&         limits})

       ($ f/select {:data      [{:value "bar" :label "bar"} {:value "psi" :label "psi"}]
                    :value     unit
                    :on-change #(dispatch [:change-burner-settings [[:pressure :unit] %]])}))))


(defnc power-max-init-value []
  (let [converted-value (use-sub [:burner-settings-power-max-converted-value])
        unit (use-sub [:kit-data-by-keywords [:burner :settings :power :max :unit]])
        limits (-> UNIT-LIMITS :burner-max-power (get unit))
        validate-message (str "Initial maximum power value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "MAXIMUM POWER"}
       ($ f/input-number {:value     converted-value
                          :on-change #(dispatch [:change-burner-settings-power-max-value %])
                          :on-blur   (fn [] (f/validate-input-number converted-value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-burner-settings-power-max-value %])))
                          :&         limits})

       ($ f/select {:data      [{:value "kW" :label "kW"} {:value "MW" :label "MW"}]
                    :value     unit
                    :on-change #(dispatch [:change-burner-settings [[:power :max :unit] %]])}))))

(defnc fuel-consumption-coeff-init-value []
  (let [converted-value (use-sub [:burner-settings-fuel-consumption-coeff-converted-value])
        unit (use-sub [:kit-data-by-keywords [:burner :settings :fuel-consumption :coeff :unit]])
        limits (-> UNIT-LIMITS :burner-fuel-consumption-coeff (get unit))
        validate-message (str "Initial fuel consumption coefficient value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "FUEL CONSUMPTION COEFFICIENT"}
       ($ f/input-number {:value     converted-value
                          :on-change #(dispatch [:change-burner-settings-fuel-consumption-coeff-value %])
                          :on-blur   (fn [] (f/validate-input-number converted-value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-burner-settings-fuel-consumption-coeff-value %])))
                          :&         limits})

       ($ f/select {:data      [{:value "nm³/kW*h" :label "nm³/kW*h"} {:value "nm³/kW*s" :label "nm³/kW*s"}]
                    :value     unit
                    :on-change #(dispatch [:change-burner-settings [[:fuel-consumption :coeff :unit] %]])}))))


(defnc heat-transfer-init-value []
  (let [value (use-sub [:kit-data-by-keywords [:burner :settings :heat-transfer :value]])
        unit (use-sub [:kit-data-by-keywords [:burner :settings :heat-transfer :unit]])
        limits (-> UNIT-LIMITS :burner-heat-transfer-coeff (get unit))
        validate-message (str "Initial heat transfer coefficient value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "HEAT TRANSFER COEFFICIENT"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:change-burner-settings [[:heat-transfer :value] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-burner-settings [[:heat-transfer :value] %]])))
                          :&         limits})

       ($ f/select {:data      [{:value "kJ/kW*s" :label "kJ/kW*s"}]
                    :value     unit
                    :on-change #(dispatch [:change-burner-settings [[:heat-transfer :unit] %]])}))))




(defnc settings-form []
  (let [show-settings-form-sim-start-values (use-sub [:show-settings-form-sim-start-values])]
    (<>
      (d/div {:class "divider" :style {:margin-top 0}} "head-up-display")

      ($ mode-hud-settings)

      ($ status-hud-settings)

      ($ power-hud-settings)

      ($ fuel-consumption-hud-settings)


      (when show-settings-form-sim-start-values
        (<>
          (d/div {:class "divider"} "simulation start values")

          ($ status-init-value)

          (d/div {:class "divider"} "specifications")

          ($ pressure-init-value-on)

          ($ pressure-init-value-off)

          ($ power-max-init-value)

          ($ fuel-consumption-coeff-init-value)

          ($ heat-transfer-init-value)))
      )))

(defnc burner-settings []
  (let [show-settings (use-sub [:burner-settings-view])]
    (when show-settings
      ($ modal/settings {:title      "Burner Settings"
                         :on-default #(dispatch [:restore-defaults-burner-settings])
                         :on-done    #(dispatch [:apply-burner-settings])}

         ($ settings-form)
         ))))
