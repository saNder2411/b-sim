(ns app.connect.core
  (:require [helix.core :refer [defnc <> $]]
            [app.connect.urb-60.core :refer [urb-60]]))

(defnc connect-kit []
  (<>
    ($ urb-60)))