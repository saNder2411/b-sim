(ns app.ui.shared.boiler-plant.boiler.toolbar-panel
  (:require [helix.core :refer [defnc $ <>]]
            [refx.alpha :refer [use-sub dispatch]]
            [app.ui.shared.components.toolbar :as toolbar]))


(defnc boiler-toolbar-panel []
  (let [show-toolbar (use-sub [:boiler/show-toolbar-panel])]
    (when show-toolbar
      (<>
         ($ toolbar/title {:x 85 :y 95 :fill "#efefef" :title "Steam Boiler"})

         ($ toolbar/btn-wrapper {:x 1114 :y 54 :on-click #(dispatch [:boiler/change [[:settings-view] true]])}
            ($ toolbar/btn-settings))

         ($ toolbar/btn-wrapper {:x 1174 :y 54}
            ($ toolbar/btn-divider))

         ($ toolbar/btn-wrapper {:x 1224 :y 54 :on-click #(dispatch [:modal-info/change {:title "Steam Boiler" :text "The steam boiler is a heat exchange system where water is heated to its’ boiling point via combustion of flue gases. The combusted flue gases are blown through a number of tubes submerged in water. On its' path through the tubes heat is transferred to the water. The heat energy supplied to the water evaporates water into steam, that is then taken into piping to be used in specific heating applications."}])}
            ($ toolbar/btn-info))))))
