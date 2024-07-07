(ns app.shared.boiler-plant.boiler.settings
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.modal :as modal]
            [app.shared.components.form :as f]
            [app.units.constants :refer [UNIT-LIMITS]]))


(defnc pressure-hud-settings []
  (let [unit (use-sub [:kit-data-by-keywords [:boiler :settings :pressure :unit]])
        view (use-sub [:kit-data-by-keywords [:boiler :settings :pressure :view]])]
    ($ f/field-row {:label "PRESSURE"}
       ($ f/select {:data      [{:value "bar" :label "bar"} {:value "psi" :label "psi"}]
                    :value     unit
                    :on-change #(dispatch [:change-boiler-settings [[:pressure :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:change-boiler-settings [[:pressure :view] (not view)]])}))))

(defnc temperature-hud-settings []
  (let [unit (use-sub [:kit-data-by-keywords [:boiler :settings :temperature :unit]])
        view (use-sub [:kit-data-by-keywords [:boiler :settings :temperature :view]])]
    ($ f/field-row {:label "TEMPERATURE"}
       ($ f/select {:data      [{:value "°C" :label "°C"}]
                    :value     unit
                    :on-change #(dispatch [:change-boiler-settings [[:temperature :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:change-boiler-settings [[:temperature :view] (not view)]])}))))

(defnc water-level-hud-settings []
  (let [unit (use-sub [:kit-data-by-keywords [:boiler :settings :water-level :unit]])
        view (use-sub [:kit-data-by-keywords [:boiler :settings :water-level :view]])]
    ($ f/field-row {:label "WATER LEVEL"}
       ($ f/select {:data      [{:value "%" :label "%"}]
                    :value     unit
                    :on-change #(dispatch [:change-boiler-settings [[:water-level :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:change-boiler-settings [[:water-level :view] (not view)]])}))))

(defnc conductivity-hud-settings []
  (let [unit (use-sub [:kit-data-by-keywords [:boiler :settings :conductivity :unit]])
        view (use-sub [:kit-data-by-keywords [:boiler :settings :conductivity :view]])]
    ($ f/field-row {:label "WATER CONDUCTIVITY"}
       ($ f/select {:data      [{:value "µS/cm" :label "µS/cm"} {:value "ppm" :label "ppm"}]
                    :value     unit
                    :on-change #(dispatch [:change-boiler-settings [[:conductivity :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:change-boiler-settings [[:conductivity :view] (not view)]])}))))

(defnc pressure-init-value []
  (let [converted-value (use-sub [:boiler-settings-pressure-converted-value])
        unit (use-sub [:kit-data-by-keywords [:boiler :settings :pressure :unit]])
        limits (-> UNIT-LIMITS :boiler-pressure (get unit))
        validate-message (str "Initial pressure value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "PRESSURE (ABS)"}
       ($ f/input-number {:value     converted-value
                          :on-change #(dispatch [:change-boiler-settings-pressure-value %])
                          :on-blur   (fn [] (f/validate-input-number converted-value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-boiler-settings-pressure-value %])))
                          :&         limits})
       ($ f/select {:data      [{:value "bar" :label "bar"} {:value "psi" :label "psi"}]
                    :value     unit
                    :on-change #(dispatch [:change-boiler-settings [[:pressure :unit] %]])}))))

(defnc water-level-init-value []
  (let [value (use-sub [:kit-data-by-keywords [:boiler :settings :water-level :value]])
        unit (use-sub [:kit-data-by-keywords [:boiler :settings :water-level :unit]])
        limits (-> UNIT-LIMITS :boiler-water-level (get unit))
        validate-message (str "Initial water level value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "WATER LEVEL"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:change-boiler-settings [[:water-level :value] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-boiler-settings [[:water-level :value] %]])))
                          :&         limits})
       ($ f/select {:data      [{:value "%" :label "%"}]
                    :value     unit
                    :on-change #(dispatch [:change-boiler-settings [[:water-level :unit] %]])}))))


(defnc conductivity-init-value []
  (let [converted-value (use-sub [:boiler-settings-conductivity-converted-value])
        unit (use-sub [:kit-data-by-keywords [:boiler :settings :conductivity :unit]])
        limits (-> UNIT-LIMITS :boiler-conductivity (get unit))
        validate-message (str "Initial water conductivity value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "WATER CONDUCTIVITY"}
       ($ f/input-number {:value     converted-value
                          :on-change #(dispatch [:change-boiler-settings-conductivity-value %])
                          :on-blur   (fn [] (f/validate-input-number converted-value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-boiler-settings-conductivity-value %])))
                          :&         limits})
       ($ f/select {:data      [{:value "µS/cm" :label "µS/cm"} {:value "ppm" :label "ppm"}]
                    :value     unit
                    :on-change #(dispatch [:change-boiler-settings [[:conductivity :unit] %]])}))))

(defnc sludge-mass-init-value []
  (let [value (use-sub [:kit-data-by-keywords [:boiler :settings :sludge-mass :value]])
        unit (use-sub [:kit-data-by-keywords [:boiler :settings :sludge-mass :unit]])
        limits (-> UNIT-LIMITS :boiler-sludge-mass (get unit))
        validate-message (str "Initial sludge mass must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "SLUDGE MASS"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:change-boiler-settings [[:sludge-mass :value] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-boiler-settings [[:sludge-mass :value] %]])))
                          :&         limits})
       ($ f/select {:data      [{:value "kg" :label "kg"}]
                    :value     unit
                    :on-change #(dispatch [:change-boiler-settings [[:sludge-mass :unit] %]])}))))


(defnc volume-init-value []
  (let [value (use-sub [:kit-data-by-keywords [:boiler :settings :volume :value]])
        unit (use-sub [:kit-data-by-keywords [:boiler :settings :volume :unit]])
        limits (-> UNIT-LIMITS :boiler-volume (get unit))
        validate-message (str "Initial total volume must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "TOTAL VOLUME"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:change-boiler-settings [[:volume :value] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-boiler-settings [[:volume :value] %]])))
                          :&         limits})
       ($ f/select {:data      [{:value "m³" :label "m³"}]
                    :value     unit
                    :on-change #(dispatch [:change-boiler-settings [[:volume :unit] %]])}))))

(defnc max-sludge-mass-init-value []
  (let [value (use-sub [:kit-data-by-keywords [:boiler :settings :sludge-mass :max]])
        unit (use-sub [:kit-data-by-keywords [:boiler :settings :sludge-mass :unit]])
        limits (-> UNIT-LIMITS :boiler-sludge-mass (get unit))
        validate-message (str "Initial max visible sludge mass must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "MAX VISIBLE SLUDGE MASS"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:change-boiler-settings [[:sludge-mass :max] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-boiler-settings [[:sludge-mass :max] %]])))
                          :&         limits})
       ($ f/select {:data      [{:value "kg" :label "kg"}]
                    :value     unit
                    :on-change #(dispatch [:change-boiler-settings [[:sludge-mass :unit] %]])}))))


(defnc settings-form []
  (let [show-settings-form-sim-start-values (use-sub [:show-settings-form-sim-start-values])]
    (<>
      (d/div {:class "divider"} "head-up-display")

      ($ pressure-hud-settings)

      ($ temperature-hud-settings)

      ($ water-level-hud-settings)

      ($ conductivity-hud-settings)


      (when show-settings-form-sim-start-values
        (<>
          (d/div {:class "divider"} "simulation start values")

          ($ pressure-init-value)

          ($ water-level-init-value)

          ($ conductivity-init-value)

          ($ sludge-mass-init-value)

          (d/div {:class "divider"} "specifications")

          ($ volume-init-value)

          ($ max-sludge-mass-init-value)
          ))
      )))

(defnc boiler-settings []
  (let [show-settings (use-sub [:boiler-settings-view])]
    (when show-settings
      ($ modal/settings {:title      "Boiler Settings"
                         :on-default #(dispatch [:restore-defaults-boiler-settings])
                         :on-done    #(dispatch [:apply-boiler-settings])}

         ($ settings-form)
         ))))
