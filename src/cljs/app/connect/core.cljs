(ns app.connect.core
  (:require [helix.core :refer [defnc <> $]]
            [app.connect.URB-60.core :refer [URB-60]]
            [app.connect.limiter-low-level :refer [limiter-low-level]]
            [app.connect.limiter-high-level :refer [limiter-high-level]]
            [app.connect.controller-cond :refer [controller-cond]]
            [app.connect.controller-level :refer [controller-level]]
            [app.connect.converter :refer [converter]]
            [app.connect.hot-spots :refer [hot-spots]]
            [app.connect.toolbars :refer [toolbars]]
            [app.shared.boiler-plant.boiler.settings :refer [boiler-settings]]
            [app.shared.boiler-plant.burner.settings :refer [burner-settings]]))

(defnc connect-kit []
  (<>
    ($ URB-60)
    ($ limiter-low-level)
    ($ limiter-high-level)
    ($ controller-cond)
    ($ controller-level)
    ($ converter)
    ($ hot-spots)
    ($ toolbars)
    ($ boiler-settings)
    ($ burner-settings)))