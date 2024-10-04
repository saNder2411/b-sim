(ns app.ui.shared.sidebar.control-panel.settings
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.modal :as modal]
            [app.ui.shared.components.form :as f]))

(defnc language []
  (let [value (use-sub [:kit/data-by-path [:general-settings :lang]])]
    ($ f/field-row {:label "LANGUAGE"}
       ($ f/select {:data      [{:value "en" :label "English"} {:value "de" :label "German"}]
                    :value     value
                    :on-change #(dispatch [:kit-data-by-path/change [[:general-settings :lang] %]])}))))

(defnc intended-use []
  (let [value (use-sub [:kit/data-by-path [:general-settings :intended-use]])]
    ($ f/field-row {:label "INTENDED USE"}
       ($ f/select {:data      [{:value "training" :label "training"} {:value "demonstration" :label "demonstration"}]
                    :value     value
                    :on-change #(dispatch [:kit-data-by-path/change [[:general-settings :intended-use] %]])}))))

(defnc operation-mode []
  (let [value (use-sub [:kit/data-by-path [:general-settings :operation-mode]])]
    ($ f/field-row {:label "OPERATION MODE"}
       ($ f/select {:data      [{:value "normal" :label "normal"} {:value "standby" :label "standby"}]
                    :value     value
                    :on-change #(dispatch [:kit-data-by-path/change [[:general-settings :operation-mode] %]])}))))

(defnc steam-unit []
  (let [value (use-sub [:kit/data-by-path [:general-settings :steam :unit]])]
    ($ f/field-row {:label "STEAM UNIT"}
       ($ f/select {:data      [{:value "t/h" :label "t/h"} {:value "T/h" :label "T/h"}]
                    :value     value
                    :on-change #(dispatch [:kit-data-by-path/change [[:general-settings :steam :unit] %]])}))))

(defnc flow-rate-unit []
  (let [value (use-sub [:current-feed-actuator/data-by-path [:flow-rate :unit]])]
    ($ f/field-row {:label "FEEDWATER UNIT"}
       ($ f/select {:data      [{:value "t/h" :label "t/h"} {:value "T/h" :label "T/h"}]
                    :value     value
                    :on-change #(dispatch [:current-feed-actuator/change [[:flow-rate :unit] %]])}))))

(defnc settings-form []
  (<>
    ($ language)
    ($ intended-use)
    ($ operation-mode)
    ($ steam-unit)
    ($ flow-rate-unit)))

(defnc general-settings []
  (let [show-settings (use-sub [:kit/data-by-path [:general-settings :view]])]
    (when show-settings
      ($ modal/settings {:title      "General Settings"
                         :on-default #(dispatch [:general-settings/restore-defaults])
                         :on-done    #(dispatch [:kit-data-by-path/change [[:general-settings :view] false]])}

         ($ settings-form)))))
