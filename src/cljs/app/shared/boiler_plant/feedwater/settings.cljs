(ns app.shared.boiler-plant.feedwater.settings
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.modal :as modal]
            [app.shared.components.form :as f]
            [app.units.constants :refer [UNIT-LIMITS]]))

(defnc temperature-init-value []
  (let [value (use-sub [:kit-data-by-keywords [:feedwater :temperature :value]])
        unit (use-sub [:kit-data-by-keywords [:feedwater :temperature :unit]])
        limits (-> UNIT-LIMITS :feed-water-temperature (get unit))
        validate-message (str "Initial temperature value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]
    ($ f/field-row {:label "TEMPERATURE"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:change-feedwater [[:temperature :value] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-feedwater [[:temperature :value] %]])))
                          :&         limits})

       ($ f/select {:data      [{:value "°C" :label "°C"}]
                    :value     unit
                    :on-change #(dispatch [:change-feedwater [[:temperature :unit] %]])}))))

(defnc conductivity-init-value []
  (let [converted-value (use-sub [:feedwater-conductivity-converted-value])
        unit (use-sub [:kit-data-by-keywords [:feedwater :conductivity :unit]])
        limits (-> UNIT-LIMITS :feed-water-conductivity (get unit))
        validate-message (str "Initial conductivity value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]
    ($ f/field-row {:label "CONDUCTIVITY"}
       ($ f/input-number {:value     converted-value
                          :on-change #(dispatch [:change-feedwater-conductivity-value %])
                          :on-blur   (fn [] (f/validate-input-number converted-value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-feedwater-conductivity-value %])))
                          :&         limits})

       ($ f/select {:data      [{:value "µS/cm" :label "µS/cm"} {:value "ppm" :label "ppm"}]
                    :value     unit
                    :on-change #(dispatch [:change-feedwater [[:conductivity :unit] %]])}))))

(defnc sludge-ratio-init-value []
  (let [value (use-sub [:kit-data-by-keywords [:feedwater :sludge-ratio :value]])
        unit (use-sub [:kit-data-by-keywords [:feedwater :sludge-ratio :unit]])
        limits (-> UNIT-LIMITS :feed-water-sludge-ratio (get unit))
        validate-message (str "Initial sludge ratio value must be within following range: [" (:min limits) " - " (:max limits) "] " unit)]
    ($ f/field-row {:label "SLUDGE RATIO"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:change-feedwater [[:sludge-ratio :value] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:change-feedwater [[:sludge-ratio :value] %]])))
                          :&         limits})

       ($ f/select {:data      [{:value "ratio" :label "ratio"}]
                    :value     unit
                    :on-change #(dispatch [:change-feedwater [[:sludge-ratio :unit] %]])}))))

(defnc settings-form []
  (<>
    (d/div {:class "divider"} "specifications")

    ($ temperature-init-value)

    ($ conductivity-init-value)

    ($ sludge-ratio-init-value)))

(defnc feedwater-settings []
  (let [show-settings (use-sub [:kit-data-by-keywords [:feedwater :settings-view]])
        show-settings-form-sim-start-values (use-sub [:show-settings-form-sim-start-values])]
    (when (and show-settings show-settings-form-sim-start-values)
      ($ modal/settings {:title      "Feedwater"
                         :on-default #(dispatch [:restore-defaults-feedwater-settings])
                         :on-done    #(dispatch [:apply-feedwater-settings])}

         ($ settings-form)))))
