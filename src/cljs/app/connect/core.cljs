(ns app.connect.core
  (:require [helix.core :refer [defnc <> $]]
            [app.connect.URB-60.core :refer [URB-60]]
            [app.connect.burner-limiter :refer [burner-limiter]]))

(defnc connect-kit []
  (<>
    ($ URB-60)
    ($ burner-limiter)))