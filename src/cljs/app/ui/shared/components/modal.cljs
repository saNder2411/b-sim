(ns app.ui.shared.components.modal
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]))

(defnc info []
  (let [show (use-sub [:modal-info-show])
        {:keys [title text]} (use-sub [:modal-info])
        on-close #(dispatch [:change-modal-info {:title "" :text ""}])]
    (when show
      (d/div {:class "modal-overlay" :on-click on-close}
             (d/div {:class "modal-card" :style {:width "44%"}}
                    (d/header {:class "modal-card-head"}
                              (d/p {:class "modal-card-title"}
                                   title))
                    (d/section {:class "modal-card-body"}
                               (d/div {:class "media"}
                                      (d/div {:class "media-content"}
                                             (d/p text))))

                    (d/footer {:class "modal-card-foot"}
                              (d/button {:class "button is-info" :on-click on-close}
                                        "OK")))))))

(defnc settings [{:keys [title on-close on-default on-done children]}]
  (d/div {:class "modal"}
         (d/div {:class "modal-background"})
         (d/div {:class "modal-card" :style {:width 480}}
                (d/header {:class "modal-card-head"}
                          (d/p {:class "modal-card-title"}
                               title)
                          (when on-close
                            (d/button {:class "delete is-medium" :on-click on-close})))

                (d/section {:class "modal-card-body"}
                           children)

                (d/footer {:class "modal-card-foot" :style {:display "flex" :justify-content "space-between" :align-items "center"}}
                          (d/button {:class "button" :on-click on-default}
                                    "Restore Defaults")

                          (d/button {:class "button primary" :on-click on-done}
                                    "Done")))))
