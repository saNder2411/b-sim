(ns app.connect.core
  (:require [helix.core :refer [defnc <> $]]
            [app.connect.URB-60.core :refer [URB-60]]
            [app.connect.limiter-burner :refer [burner-limiter]]
            [app.connect.limiter-pump :refer [pump-limiter]]
            [app.connect.controller-cond :refer [controller-cond]]
            [app.connect.controller-level :refer [controller-level]]
            [app.connect.converter :refer [converter]]
            [app.connect.hot-spots :refer [hot-spots]]))

(defnc connect-kit []
  (<>
    ($ URB-60)
    ($ burner-limiter)
    ($ pump-limiter)
    ($ controller-cond)
    ($ controller-level)
    ($ converter)
    ($ hot-spots)))