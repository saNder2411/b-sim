(ns app.ui.kits.connect.core
  (:require [helix.core :refer [defnc <> $]]
            [app.ui.kits.connect.URB-60.core :refer [URB-60]]
            [app.ui.kits.connect.limiter-low-level :refer [limiter-low-level]]
            [app.ui.kits.connect.limiter-high-level :refer [limiter-high-level]]
            [app.ui.kits.connect.controller-cond :refer [controller-cond]]
            [app.ui.kits.connect.controller-level :refer [controller-level]]
            [app.ui.kits.connect.converter :refer [converter]]
            [app.ui.kits.connect.hot-spots :refer [hot-spots]]
            [app.ui.kits.connect.toolbars :refer [toolbars]]
            [app.ui.kits.connect.settings :refer [settings]]))

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
    ($ settings)))