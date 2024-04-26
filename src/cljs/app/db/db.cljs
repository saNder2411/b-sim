(ns app.db.db)

(def default-db {:screen {:w 1920 :h 1080 :scale-f 1 :ratio (/ 16 9)}
                 :kit "connect"
                 :user {:firstname "User" :lastname "Admin"}
                 :sim "stopped"                             ;; "stopped" "starting" "run" "pause" "stopping"
                 :lang "en"
                 :operation-mode "normal"
                 :show-ctrl-panel true
                 :show-general-settings false
                 :highlight-hotspots true})


