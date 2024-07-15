(ns app.db.constants)

(def LEVEL-CALIBRATION {:points           {:max-high 32767
                                           :min-high 8191.75}

                        :points-by-boiler {:max               97.86859
                                           :min               78.21877
                                           :max-range         19.64982
                                           :%-in-digital-unit 0.0005996832179}}) ;; one digital value includes 0.0005996832179 percent; 19.64982 % / 32767 digital units