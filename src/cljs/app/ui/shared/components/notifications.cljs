(ns app.ui.shared.components.notifications
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [helix.hooks :refer [use-state use-effect]]
            [refx.alpha :refer [use-sub dispatch]]
            [cljs.core.async :refer [<! timeout go]]))

(defnc notification [{:keys [id message duration]}]
  (let [[hide-class set-hide-class!] (use-state "")
        delete #(go
                  (<! (timeout (if duration (+ duration 500) 3500)))
                  (set-hide-class! " hide")
                  (<! (timeout 1000))
                  (dispatch [:notifications/delete id]))]
    (use-effect :once
                (delete))
    (d/div {:class (str "notification" hide-class)}
           message)))


(defnc notifications []
  (let [notifications (use-sub [:notifications])]
    (d/div {:class "notifications"}
           (map (fn [[id n]]
                  ($ notification {:key id :id id :& n})) notifications))))


