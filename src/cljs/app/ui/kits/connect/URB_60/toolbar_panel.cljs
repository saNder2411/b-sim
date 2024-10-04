(ns app.ui.kits.connect.URB-60.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.toolbar :as toolbar]))


(defnc URB-60-toolbar-panel []
  (let [show-toolbar (use-sub [:URB-60/show-toolbar])]
    (when show-toolbar
      (<>
         ($ toolbar/title {:x 85 :y 80 :fill "#efefef" :title "Visual Display and Operating Unit"})
         ($ toolbar/title {:x 85 :y 110 :fill "#bcbcbc" :title "URB 60"})


         ($ toolbar/btn-wrapper {:x 1114 :y 54 :on-click (fn [])}
            ($ toolbar/btn-full-screen))

         ($ toolbar/btn-wrapper {:x 1174 :y 54}
            ($ toolbar/btn-divider))

         ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:modal-info/change {:title "Visual Display and Operating Unit" :text "The URB 60 visual display and operating unit can be used in conjunction with various GESTRA CAN bus units from the SPECTORconnect series. The URB 60 is designed for installation in a control cabinet door or switch panel. It may only be used when correctly installed."}])}
            ($ toolbar/btn-info))))))
