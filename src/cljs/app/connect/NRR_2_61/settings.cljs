(ns app.connect.NRR-2-61.settings
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.shared.components.modal :as modal]
            [app.shared.components.form :as f]))

(defnc actuator-type-init-value []
  (let [actuator-type (use-sub [:kit-data-by-keywords [:level :controllers "NRR 2-61" :actuator-type]])]
    ($ f/field-row {:label "FEEDWATER ACTUATOR"}
       ($ f/select {:data      [{:value "FREQUENCY_CONTROLLED_PUMPS" :label "Pumps"} {:value "PNEUMATIC_VALVE" :label "Pneumatic Valve"}]
                    :value     actuator-type
                    :on-change #(dispatch [:change-NRR-2-61 [[:actuator-type] %]])}))))

(defnc settings-form []
  (<>
    (d/div {:class "divider"} "simulation start values")
    ($ actuator-type-init-value)))

(defnc NRR-2-61-settings []
  (let [show-settings (use-sub [:kit-data-by-keywords [:level :controllers "NRR 2-61" :settings-view]])
        show-settings-form-sim-start-values (use-sub [:show-settings-form-sim-start-values])]
    (when (and show-settings show-settings-form-sim-start-values)
      ($ modal/settings {:title      "NRR 2-61 Settings"
                         :on-default #(dispatch [:restore-defaults-NRR-2-61-settings])
                         :on-done    #(dispatch [:apply-NRR-2-61-settings])}

         ($ settings-form)))))
