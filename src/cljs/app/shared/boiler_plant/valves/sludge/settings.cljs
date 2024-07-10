(ns app.shared.boiler-plant.valves.sludge.settings
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.modal :as modal]
            [app.shared.components.form :as f]
            [app.units.constants :refer [UNIT-LIMITS]]))


(defnc mode-hud-settings []
  (let [value (use-sub [:kit-data-by-keywords [:sludge-valve :mode :value]])
        view (use-sub [:kit-data-by-keywords [:sludge-valve :mode :view]])]
    ($ f/field-row {:label "CONTROL MODE"}
       ($ f/select {:data      [{:value "auto" :label "Auto"} {:value "manual" :label "Manual"}]
                    :value     value
                    :on-change #(dispatch [:change-sludge-valve [[:mode :value] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:change-sludge-valve [[:mode :view] (not view)]])}))))

(defnc damper-hud-settings []
  (let [unit (use-sub [:kit-data-by-keywords [:sludge-valve :damper :unit]])
        view (use-sub [:kit-data-by-keywords [:sludge-valve :damper :view]])]
    ($ f/field-row {:label "VALVE STATE"}
       ($ f/select {:data      [{:value "open/close" :label "open/close"}]
                    :value     unit
                    :on-change #(dispatch [:change-sludge-valve [[:damper :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:change-sludge-valve [[:damper :view] (not view)]])}))))

(defnc flow-rate-hud-settings []
  (let [unit (use-sub [:kit-data-by-keywords [:sludge-valve :flow-rate :unit]])
        view (use-sub [:kit-data-by-keywords [:sludge-valve :flow-rate :view]])]
    ($ f/field-row {:label "FLOW-RATE"}
       ($ f/select {:data      [{:value "kg/s" :label "kg/s"}]
                    :value     unit
                    :on-change #(dispatch [:change-sludge-valve [[:flow-rate :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:change-sludge-valve [[:flow-rate :view] (not view)]])}))))

(defnc countdown-hud-settings []
  (let [unit (use-sub [:kit-data-by-keywords [:sludge-valve :countdown :unit]])
        view (use-sub [:kit-data-by-keywords [:sludge-valve :countdown :view]])]
    ($ f/field-row {:label "REMAINING RUNTIME"}
       ($ f/select {:data      [{:value "s" :label "HH:MM:SS"}]
                    :value     unit
                    :on-change #(dispatch [:change-sludge-valve [[:countdown :unit] %]])})
       ($ f/checkbox {:value     view
                      :on-change #(dispatch [:change-sludge-valve [[:countdown :view] (not view)]])}))))


(defnc countdown-init-value []
  (let [converted-value (use-sub [:sludge-valve-init-countdown-converted-value])
        unit (use-sub [:kit-data-by-keywords [:sludge-valve :init-sim-output :countdown :unit]])
        limits (-> UNIT-LIMITS :blowdown-countdown-init-value (get unit))
        validate-message (str "Initial remaining runtime value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "REMAINING RUNTIME"}
       ($ f/input-number {:value     converted-value
                          :on-change #(dispatch [:change-sludge-valve-init-countdown-value %])
                          :on-blur   (fn [] (f/validate-input-number converted-value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-sludge-valve-init-countdown-value %])))
                          :&         limits})

       ($ f/select {:data      [{:value "s" :label "s"} {:value "m" :label "m"}]
                    :value     unit
                    :on-change #(dispatch [:change-sludge-valve [[:init-sim-output :countdown :unit] %]])}))))

(defnc flow-rate-init-max-value []
  (let [value (use-sub [:kit-data-by-keywords [:sludge-valve :flow-rate :max-value]])
        unit (use-sub [:kit-data-by-keywords [:sludge-valve :flow-rate :unit]])
        limits (-> UNIT-LIMITS :flow-rate-kg-s (get unit))
        validate-message (str "Initial flow rate maximum value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]

    ($ f/field-row {:label "MAXIMUM FLOW-RATE"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:change-sludge-valve [[:flow-rate :max-value] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-sludge-valve [[:flow-rate :max-value] %]])))
                          :&         limits})

       ($ f/select {:data      [{:value "kg/s" :label "kg/s"}]
                    :value     unit
                    :on-change #(dispatch [:change-sludge-valve [[:flow-rate :unit] %]])}))))



(defnc settings-form []
  (let [show-settings-form-sim-start-values (use-sub [:show-settings-form-sim-start-values])]
    (<>
      (d/div {:class "divider" :style {:margin-top 0}} "head-up-display")

      ($ mode-hud-settings)

      ($ damper-hud-settings)

      ($ flow-rate-hud-settings)

      ($ countdown-hud-settings)


      (when show-settings-form-sim-start-values
        (<>
          (d/div {:class "divider"} "simulation start values")

          ($ countdown-init-value)

          (d/div {:class "divider"} "specifications")

          ($ flow-rate-init-max-value))))))

(defnc sludge-valve-settings []
  (let [show-settings (use-sub [:kit-data-by-keywords [:sludge-valve :settings-view]])]
    (when show-settings
      ($ modal/settings {:title      "Bottom Blowdown Valve Settings"
                         :on-default #(dispatch [:restore-defaults-sludge-valve-settings])
                         :on-done    #(dispatch [:apply-sludge-valve-settings])}

         ($ settings-form)))))
