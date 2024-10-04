(ns app.ui.shared.boiler-plant.boiler.settings
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.modal :as modal]
            [app.ui.shared.components.form :as f]
            [app.units.constants :refer [UNIT-LIMITS]]))


(defnc pressure-hud-settings []
  (let [unit (use-sub [:kit/data-by-path [:boiler-plant :boiler :pressure :unit]])
        view (use-sub [:kit/data-by-path [:boiler-plant :boiler :pressure :view]])]
    ($ f/field-row {:label "PRESSURE"}
       ($ f/select {:data      [{:value "bar" :label "bar"} {:value "psi" :label "psi"}]
                    :value     unit
                    :on-change #(dispatch [:boiler/change [[:pressure :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:boiler/change [[:pressure :view] (not view)]])}))))

(defnc temperature-hud-settings []
  (let [unit (use-sub [:kit/data-by-path [:boiler-plant :boiler :temperature :unit]])
        view (use-sub [:kit/data-by-path [:boiler-plant :boiler :temperature :view]])]
    ($ f/field-row {:label "TEMPERATURE"}
       ($ f/select {:data      [{:value "°C" :label "°C"}]
                    :value     unit
                    :on-change #(dispatch [:boiler/change [[:temperature :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:boiler/change [[:temperature :view] (not view)]])}))))

(defnc water-level-hud-settings []
  (let [unit (use-sub [:kit/data-by-path [:boiler-plant :boiler :water-level :unit]])
        view (use-sub [:kit/data-by-path [:boiler-plant :boiler :water-level :view]])]
    ($ f/field-row {:label "WATER LEVEL"}
       ($ f/select {:data      [{:value "%" :label "%"}]
                    :value     unit
                    :on-change #(dispatch [:boiler/change [[:water-level :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:boiler/change [[:water-level :view] (not view)]])}))))

(defnc conductivity-hud-settings []
  (let [unit (use-sub [:kit/data-by-path [:boiler-plant :boiler :conductivity :unit]])
        view (use-sub [:kit/data-by-path [:boiler-plant :boiler :conductivity :view]])]
    ($ f/field-row {:label "WATER CONDUCTIVITY"}
       ($ f/select {:data      [{:value "µS/cm" :label "µS/cm"} {:value "ppm" :label "ppm"}]
                    :value     unit
                    :on-change #(dispatch [:boiler/change [[:conductivity :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:boiler/change [[:conductivity :view] (not view)]])}))))

(defnc pressure-init-value []
  (let [converted-value (use-sub [:boiler/init-sim-output-pressure-converted-value])
        unit (use-sub [:kit/data-by-path [:boiler-plant :boiler :pressure :unit]])
        limits (-> UNIT-LIMITS :boiler-pressure (get unit))
        validate-message (str "Initial pressure value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "PRESSURE (ABS)"}
       ($ f/input-number {:value     converted-value
                          :on-change #(dispatch [:boiler/change-init-sim-output-pressure-value %])
                          :on-blur   (fn [] (f/validate-input-number converted-value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:boiler/change-init-sim-output-pressure-value %])))
                          :&         limits})
       ($ f/select {:data      [{:value "bar" :label "bar"} {:value "psi" :label "psi"}]
                    :value     unit
                    :on-change #(dispatch [:boiler/change [[:pressure :unit] %]])}))))

(defnc water-level-init-value []
  (let [value (use-sub [:kit/data-by-path [:boiler-plant :boiler :init-sim-output :water-level :value]])
        unit (use-sub [:kit/data-by-path [:boiler-plant :boiler :water-level :unit]])
        limits (-> UNIT-LIMITS :boiler-water-level (get unit))
        validate-message (str "Initial water level value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "WATER LEVEL"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:boiler/change [[:init-sim-output :water-level :value] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:boiler/change [[:init-sim-output :water-level :value] %]])))
                          :&         limits})
       ($ f/select {:data      [{:value "%" :label "%"}]
                    :value     unit
                    :on-change #(dispatch [:boiler/change [[:water-level :unit] %]])}))))


(defnc conductivity-init-value []
  (let [converted-value (use-sub [:boiler/init-sim-output-conductivity-converted-value])
        unit (use-sub [:kit/data-by-path [:boiler-plant :boiler :conductivity :unit]])
        limits (-> UNIT-LIMITS :boiler-conductivity (get unit))
        validate-message (str "Initial water conductivity value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "WATER CONDUCTIVITY"}
       ($ f/input-number {:value     converted-value
                          :on-change #(dispatch [:boiler/change-init-sim-output-conductivity-value %])
                          :on-blur   (fn [] (f/validate-input-number converted-value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:boiler/change-init-sim-output-conductivity-value %])))
                          :&         limits})
       ($ f/select {:data      [{:value "µS/cm" :label "µS/cm"} {:value "ppm" :label "ppm"}]
                    :value     unit
                    :on-change #(dispatch [:boiler/change [[:conductivity :unit] %]])}))))

(defnc sludge-init-value []
  (let [value (use-sub [:kit/data-by-path [:boiler-plant :boiler :init-sim-output :sludge :value]])
        unit (use-sub [:kit/data-by-path [:boiler-plant :boiler :sludge :unit]])
        limits (-> UNIT-LIMITS :boiler-sludge-mass (get unit))
        validate-message (str "Initial sludge mass must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "SLUDGE MASS"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:boiler/change [[:init-sim-output :sludge :value] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:boiler/change [[:init-sim-output :sludge :value] %]])))
                          :&         limits})
       ($ f/select {:data      [{:value "kg" :label "kg"}]
                    :value     unit
                    :on-change #(dispatch [:boiler/change [[:sludge :unit] %]])}))))


(defnc max-volume-init-value []
  (let [value (use-sub [:kit/data-by-path [:boiler-plant :boiler :max-volume :value]])
        unit (use-sub [:kit/data-by-path [:boiler-plant :boiler :max-volume :unit]])
        limits (-> UNIT-LIMITS :boiler-volume (get unit))
        validate-message (str "Initial total volume must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "TOTAL VOLUME"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:boiler/change [[:max-volume :value] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:boiler/change [[:max-volume :value] %]])))
                          :&         limits})
       ($ f/select {:data      [{:value "m³" :label "m³"}]
                    :value     unit
                    :on-change #(dispatch [:boiler/change [[:max-volume :unit] %]])}))))

(defnc max-sludge-init-value []
  (let [value (use-sub [:kit/data-by-path [:boiler-plant :boiler :sludge :max]])
        unit (use-sub [:kit/data-by-path [:boiler-plant :boiler :sludge :unit]])
        limits (-> UNIT-LIMITS :boiler-sludge-mass (get unit))
        validate-message (str "Initial max visible sludge mass must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "MAX VISIBLE SLUDGE MASS"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:boiler/change [[:sludge :max] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:boiler/change [[:sludge :max] %]])))
                          :&         limits})
       ($ f/select {:data      [{:value "kg" :label "kg"}]
                    :value     unit
                    :on-change #(dispatch [:boiler/change [[:sludge :unit] %]])}))))


(defnc settings-form []
  (let [show-settings-form-sim-start-values (use-sub [:show-settings-form-sim-start-values])]
    (<>
      (d/div {:class "divider" :style {:margin-top 0}} "head-up-display")

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

          ($ sludge-init-value)

          (d/div {:class "divider"} "specifications")

          ($ max-volume-init-value)

          ($ max-sludge-init-value)
          ))
      )))

(defnc boiler-settings []
  (let [show-settings (use-sub [:kit/data-by-path [:boiler-plant :boiler :settings-view]])]
    (when show-settings
      ($ modal/settings {:title      "Boiler Settings"
                         :on-default #(dispatch [:boiler/restore-defaults-settings])
                         :on-done    #(dispatch [:boiler/apply-settings])}

         ($ settings-form)))))
