(ns app.db.db
  (:require [app.db.defaults :as defaults]))

(def default-db {:screen  {:w 1920 :h 1080 :scale-f 1 :ratio (/ 16 9)}
                 :kit     "connect"                         ;; "connect"  "module"
                 :user    {:firstname "User" :lastname "Admin"}
                 :connect {:sim                   "stopped" ;; "stopped" "starting" "run" "pause" "stopping"
                           :lang                  "en"      ;; "en" "de"
                           :intended-use          "training" ;; "training" | "demonstration"
                           :operation-mode        "normal"  ;; "normal" "standby"
                           :steam-unit            "t/h"     ;; "t/h" | "T/h"
                           :steam                 35
                           :steam-max             35
                           :ctrl-panel-view       true
                           :settings-modal-view   false
                           :highlight-hotspots    true
                           :current-hotspot       "none"    ;; "boiler" "burner" "sludge-valve" "continuous-valve" "feedwater-valve" "feedwater-pump" "feedwater" "temperature-probe" "urb" "level-controller" "level-probe" "cond-controller" "cond-probe" "level-high-probe" "limiter-low-level" "limiter-high-level" "level-low-probe-I" "level-low-probe-II" "converter"
                           :limiter-low-level-id  "URS 60"  ;; "none" | "URS 60"
                           :limiter-high-level-id "URS 61"  ;; "none" | "URS 61"
                           :cond-controller-id    "LRR 1-60" ;; "none" | "LRR 1-60"
                           :cond-probe-id         "LRG 16-61" ;; "LRG 16-60" | "LRG 16-61"
                           :level-controller-id   "NRR 2-60" ;; "none" | "NRR 2-60" | "NRR 2-60 3C" | "NRR 2-61" |"NRR 2-61 3C"
                           :level-probe-id        "NRGT 26-2" ;; "NRG 26-60" | "NRGT 26-2"
                           :low-level-prop-I-id   "NRG 16-60"
                           :low-level-prop-II-id  "NRG 16-60"
                           :high-level-probe-id   "NRG 16-61"
                           :temperature-probe-id  "TRV 5-60"
                           :converter-id          "URW 60"

                           :modal-info            {:title "" :text ""}
                           :notifications         {}

                           :boiler                defaults/BOILER
                           :burner                defaults/BURNER
                           :continuous-valve      defaults/CONTINUOUS-VALVE
                           :sludge-valve          defaults/SLUDGE-VALVE
                           :feedwater             defaults/FEEDWATER
                           :feedwater-valve       defaults/FEEDWATER-VALVE
                           :feedwater-valve-pn    defaults/FEEDWATER-VALVE-PNEUMATIC
                           :feedwater-pump        defaults/FEEDWATER-PUMP

                           :limiter-low-level     {:controllers {"URS 60" {:full-screen false}}

                                                   :probes      [{"NRG 16-60" {:full-screen false}}
                                                                 {"NRG 16-60" {:full-screen false}}]}

                           :limiter-high-level    {:controllers {"URS 61" {:full-screen false}}

                                                   :probes      [{"NRG 16-61" {:full-screen false}}]}

                           :cond                  {:controllers {"LRR 1-60" {:full-screen false}}

                                                   :probes      [{"LRG 16-60" {:full-screen false}
                                                                  "LRG 16-61" {:full-screen false}}]}

                           :level                 {:controllers {"NRR 2-60"    defaults/NRR-2-60
                                                                 "NRR 2-60 3C" defaults/NRR-2-60-3C
                                                                 "NRR 2-61"    defaults/NRR-2-61
                                                                 "NRR 2-61 3C" defaults/NRR-2-61-3C}

                                                   :probes      [{"NRG 26-60" {:full-screen false}
                                                                  "NRGT 26-2" {:full-screen false}}]}

                           :temperature           {:probes [{}]}
                           :converter             {:controllers {"URW 60" {:full-screen false}}}}

                 :module  {:sim                 "stopped"   ;; "stopped" "starting" "run" "pause" "stopping"
                           :lang                "en"        ;; "en" "de"
                           :intended-use        "training"  ;; "training" | "demonstration"
                           :operation-mode      "normal"    ;; "normal" "standby"
                           :steam-unit          "t/h"       ;; "t/h" | "T/h"
                           :steam               17.5
                           :steam-max           35
                           :ctrl-panel-view     true
                           :settings-modal-view false
                           :highlight-hotspots  true
                           :current-hotspot     "none"

                           :boiler              defaults/BOILER
                           :burner              defaults/BURNER
                           :continuous-valve    defaults/CONTINUOUS-VALVE
                           }})