(ns app.shared.boiler.valve-sludge
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [app.shared.boiler.valve-sludge-highlighting :refer [valve-sludge-highlighting-bg]]))

(defnc valve-sludge []
  (d/g {:transform "translate(729.5, 679)"}
       ($ valve-sludge-highlighting-bg)
       (d/path {:fill "#b9b9ba" :d "m61.307 29.051v-2.119a1.079 1.079 0 0 0-1.06-1.06h-4.726c-2.037-2.852-8.231-4.97-15.565-5.3v-4.315h-3.423v4.319c-7.415 0.326-13.527 2.444-15.564 5.3h-4.727a1.079 1.079 0 0 0-1.059 1.06v2.119a1.079 1.079 0 0 0 1.059 1.059h4.727c1.793 2.526 6.763 4.482 12.957 5.134v3.585h8.719v-3.589c6.194-0.571 11.083-2.689 12.957-5.134h4.727c0.489 0.081 0.978-0.489 0.978-1.059"})
       (d/path {:fill "#cfcfd0" :d "m52.1 92.451v-19.314a1.079 1.079 0 0 0-1.059-1.059h-0.9a1.079 1.079 0 0 0-1.059 1.059v6.275l-1.548 0.733v0.082h-1.874v-2.608l-1.141-1.63h-0.162v-33.818h3.343v-3.83h-19.071v3.83h3.341v33.818h-0.245l-0.978 1.63v2.608h-1.874v-0.082l-1.548-0.733v-6.275a1.079 1.079 0 0 0-1.06-1.059h-0.9a1.079 1.079 0 0 0-1.059 1.059v19.314a1.079 1.079 0 0 0 1.059 1.059h0.9a1.079 1.079 0 0 0 1.06-1.059v-6.357l1.548-0.815h3.178v8.231l0.815 1.63h10.594l0.9-1.63v-8.231h3.179l1.548 0.815v6.357a1.079 1.079 0 0 0 1.059 1.059h0.9a1.027 1.027 0 0 0 1.054-1.059"})))