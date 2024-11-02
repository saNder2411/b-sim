(ns simulation.constants)

(def LEVEL-PROBE-BY-BOILER {:min        78.21877
                            :max        97.86859
                            :max-range  19.64982
                            :%-in-digit 0.0005996832179     ;;one digital value includes 0.0005996832179 percent; 19.64982 % / 32767 digital units
                            :digit-in-% 1667.547082         ;;ne percent includes 1667.547082 digital value 32767 / 19.64982 %
                            :mA-in-%    0.8142568227})      ;;one percent includes 0.8142568227 mA  20 - 4 / 19.64982 %


(def LEVEL-PROBE-CALIBRATION-LIMITS {:min 8191.75
                                     :max 32767})           ;;max electrode digital value