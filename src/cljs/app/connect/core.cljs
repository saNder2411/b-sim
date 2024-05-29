(ns app.connect.core
  (:require [helix.core :refer [defnc <> $]]
            [app.connect.URB-60.core :refer [URB-60]]
            [app.connect.burner-limiter :refer [burner-limiter]]
            [app.connect.pump-limiter :refer [pump-limiter]]
            [app.connect.cond-controller :refer [cond-controller]]
            [app.connect.level-controller :refer [level-controller]]))

(defnc connect-kit []
  (<>
    ($ URB-60)
    ($ burner-limiter)
    ($ pump-limiter)
    ($ cond-controller)
    ($ level-controller)))