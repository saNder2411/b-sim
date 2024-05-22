(ns app.shared.components.equipment-placeholder
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]
            [refx.alpha :refer [use-sub]]))

(defnc equipment-placeholder [{:keys [x y w title]}]
  (let [sim (use-sub [:sim])]
    (when (not (= sim "run"))
      (d/svg {:style   {:width w :left x :top y}
              :viewBox "0 0 246.73 77.616"}
             (d/path {:fill      "#0a1f4b"
                      :fill-rule "evenodd"
                      :d         "m4.359 0.5h238.14a4.1 4.1 0 0 1 3.733 3.83v69.04a3.994 3.994 0 0 1-3.877 3.717l-238 0.029c-1.441 0-3.856-1.437-3.856-3.711v-69.07c0-2.273 2.414-3.835 3.859-3.835z"})
             (d/path {:fill              "none"
                      :stroke            "#0a366a"
                      :stroke-miterlimit 10
                      :d                 "m4.359 0.5h238.14a4.1 4.1 0 0 1 3.733 3.83v69.04a3.994 3.994 0 0 1-3.877 3.717l-238 0.029c-1.441 0-3.856-1.437-3.856-3.711v-69.07c0-2.273 2.414-3.835 3.859-3.835z"})

             (d/text {:fill        "#2e6bb1"
                      :font-size   "18.1px"
                      :font-weight "normal"
                      :text-anchor "middle"}
                     title)))))
