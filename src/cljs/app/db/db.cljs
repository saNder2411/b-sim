(ns app.db.db
  (:require [app.db.defaults :as defaults]))

(def default-db {:screen  {:w 1920 :h 1080 :scale-f 1 :ratio (/ 16 9)}
                 :user    {:firstname "User" :lastname "Admin"}
                 :kit     :connect                          ;; :connect | :module
                 :connect {:sim              "stopped"      ;; "stopped" "starting" "run" "pause" "stopping"
                           :general-settings defaults/GENERAL-SETTINGS
                           :modal-info       {:title "" :text ""}
                           :notifications    {}

                           :hotspots         {:highlight true
                                              :current   "none"} ;; "boiler" "burner" "sludge-valve" "continuous-valve" "feed-valve" "feed-pump" "feedwater" "temperature-probe" "urb" "level-controller" "level-probe" "cond-controller" "cond-probe" "high-limiter" "high-level-probe" "low-limiter" "low-level-probe-I" "low-level-probe-II" "converter"

                           :system-config    {:low-limiter  {:controller-id "URS 60" ;; "none" | "URS 60"
                                                             :probe-ids     ["NRG 16-60" "NRG 16-60"]}

                                              :high-limiter {:controller-id "URS 61" ;; "none" | "URS 61"
                                                             :probe-ids     ["NRG 16-61"]}

                                              :cond         {:controller-id "LRR 1-60" ;; "none" | "LRR 1-60"
                                                             :probe-ids     ["LRG 16-61"]} ;; "LRG 16-60" | "LRG 16-61"

                                              :level        {:controller-id "NRR 2-60" ;; "none" | "NRR 2-60" | "NRR 2-60 3C" | "NRR 2-61" |"NRR 2-61 3C"
                                                             :probe-ids     ["NRGT 26-2"]} ;; "NRG 26-60" | "NRGT 26-2"

                                              :temperature  {:controller-id "none"
                                                             :probe-ids     ["TRV 5-60"]}

                                              :converter    {:controller-id "URW 60"}}

                           :boiler-plant     {:boiler    defaults/BOILER
                                              :burner    defaults/BURNER

                                              :actuators {:feed     {:electric-valve  defaults/FEEDWATER-VALVE-ELECTRIC
                                                                     :pneumatic-valve defaults/FEEDWATER-VALVE-PNEUMATIC
                                                                     :pump            defaults/FEEDWATER-PUMP}

                                                          :blowdown {:continuous-valve defaults/CONTINUOUS-VALVE
                                                                     :sludge-valve     defaults/SLUDGE-VALVE}}

                                              :feedwater defaults/FEEDWATER}

                           :low-limiter      {:controllers {"URS 60" {:full-screen false}}

                                              :probes      [{"NRG 16-60" {:full-screen false}}
                                                            {"NRG 16-60" {:full-screen false}}]}

                           :high-limiter     {:controllers {"URS 61" {:full-screen false}}

                                              :probes      [{"NRG 16-61" {:full-screen false}}]}

                           :cond             {:controllers {"LRR 1-60" {:full-screen false}}

                                              :probes      [{"LRG 16-60" defaults/LRG-16-60
                                                             "LRG 16-61" defaults/LRG-16-61}]}

                           :level            {:controllers {"NRR 2-60"    defaults/NRR-2-60
                                                            "NRR 2-60 3C" defaults/NRR-2-60-3C
                                                            "NRR 2-61"    defaults/NRR-2-61
                                                            "NRR 2-61 3C" defaults/NRR-2-61-3C}

                                              :probes      [{"NRG 26-60" {:full-screen false}
                                                             "NRGT 26-2" {:full-screen false}}]}

                           :temperature      {:probes [{"TRV 5-60" {}}]}
                           :converter        {:controllers {"URW 60" {:full-screen false}}}}

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