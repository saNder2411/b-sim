(ns app.shared.components.modal-info
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub dispatch]]))

(defnc modal-info []
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
                                             (d/p {:style {:color "#fff"}}
                                                  text))))

                    (d/footer {:class "modal-card-foot"}
                              (d/button {:class "button is-info" :on-click on-close}
                                        "OK")))))))
