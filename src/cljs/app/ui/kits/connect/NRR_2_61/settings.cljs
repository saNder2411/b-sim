(ns app.ui.kits.connect.NRR-2-61.settings
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.modal :as modal]
            [app.ui.shared.components.form :as f]))

(defnc actuator-type-init-value []
  (let [actuator-type (use-sub [:kit-data-by-path [:level :controllers "NRR 2-61" :actuator-type]])]
    ($ f/field-row {:label "FEEDWATER ACTUATOR"}
       ($ f/select {:data      [{:value "pump" :label "Pumps"} {:value "pneumatic-valve" :label "Pneumatic Valve"}]
                    :value     (name actuator-type)
                    :on-change #(dispatch [:change-NRR-2-61 [[:actuator-type] (keyword %)]])}))))

(defnc settings-form []
  (<>
    (d/div {:class "divider" :style {:margin-top 0}} "specifications")
    ($ actuator-type-init-value)))

(defnc NRR-2-61-settings []
  (let [show-settings (use-sub [:kit-data-by-path [:level :controllers "NRR 2-61" :settings-view]])
        show-settings-form-sim-start-values (use-sub [:show-settings-form-sim-start-values])]
    (when (and show-settings show-settings-form-sim-start-values)
      ($ modal/settings {:title      "NRR 2-61 Settings"
                         :on-default #(dispatch [:restore-defaults-NRR-2-61-settings])
                         :on-done    #(dispatch [:apply-NRR-2-61-settings])}

         ($ settings-form)))))
