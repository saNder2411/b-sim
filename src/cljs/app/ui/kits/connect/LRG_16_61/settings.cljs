(ns app.ui.kits.connect.LRG-16-61.settings
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.modal :as modal]
            [app.ui.shared.components.form :as f]
            [app.units.constants :refer [UNIT-LIMITS]]))

(defnc correction-dirty-factor []
  (let [value (use-sub [:kit/data-by-path [:cond :probes 0 "LRG 16-61" :correction-dirty :factor]])
        limits (-> UNIT-LIMITS :cond-probe-correction-f (get "factor"))
        validate-message (str "Initial cell constant value must be within following range: [" (:min limits) " - " (:max limits) "] " "factor")]
    ($ f/field-row {:label "CELL CONSTANT"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:LRG-16-61/change [[:correction-dirty :factor] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:LRG-16-61/change [[:correction-dirty :factor] %]])))
                          :&         limits})

       ($ f/select {:data      [{:value "factor" :label "factor"}]
                    :value     "factor"
                    :on-change #(identity %)}))))

(defnc correction-dirty-temp-coeff []
  (let [value (use-sub [:kit/data-by-path [:cond :probes 0 "LRG 16-61" :correction-dirty :temperature-coeff]])
        limits (-> UNIT-LIMITS :cond-probe-temperature-coeff (get "%/°C"))
        validate-message (str "Initial temperature coefficient value must be within following range: [" (:min limits) " - " (:max limits) "] " "%/°C")]
    ($ f/field-row {:label "TEMPERATURE COEFFICIENT"}
       ($ f/input-number {:value     value
                          :on-change #(dispatch [:LRG-16-61/change [[:correction-dirty :temperature-coeff] %]])
                          :on-blur   (fn [] (f/validate-input-number value
                                                                     (:min limits)
                                                                     (:max limits)
                                                                     validate-message
                                                                     #(dispatch [:LRG-16-61/change [[:correction-dirty :temperature-coeff] %]])))
                          :&         limits})

       ($ f/select {:data      [{:value "%/°C" :label "%/°C"}]
                    :value     "%/°C"
                    :on-change #(identity %)}))))

(defnc settings-form []
  (<>
    (d/div {:class "divider" :style {:margin-top 0}} "specifications")

    ($ correction-dirty-factor)

    ($ correction-dirty-temp-coeff)))

(defnc LRG-16-61-settings []
  (let [show-settings (use-sub [:kit/data-by-path [:cond :probes 0 "LRG 16-61" :settings-view]])]
    (when show-settings
      ($ modal/settings {:title      "Dirty Data Settings"
                         :on-default #(dispatch [:LRG-16-61/restore-defaults-settings])
                         :on-done    #(dispatch [:LRG-16-61/apply-settings])}

         ($ settings-form)))))
