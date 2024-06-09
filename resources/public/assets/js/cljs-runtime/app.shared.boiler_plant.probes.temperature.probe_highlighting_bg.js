goog.provide('app.shared.boiler_plant.probes.temperature.probe_highlighting_bg');

app.shared.boiler_plant.probes.temperature.probe_highlighting_bg.probe_highlighting_bg = (function (){var G__29231 = (function app$shared$boiler_plant$probes$temperature$probe_highlighting_bg$probe_highlighting_bg_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"temperature-sensor")){
var G__29237 = "polygon";
var G__29238 = (function (){var obj29242 = ({"className":"active-el","fill":"#061838","points":"15.638 45.747, 15.638 18.885, 27.128 18.885, 27.128 13.344, 61.243 13.344, 61.243 51.615, 27.128 51.615, 27.128 45.747"});
return obj29242;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29237,G__29238) : helix.core.jsx.call(null,G__29237,G__29238));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__29254 = G__29231;
(G__29254.displayName = "app.shared.boiler-plant.probes.temperature.probe-highlighting-bg/probe-highlighting-bg");

return G__29254;
} else {
return G__29231;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.probes.temperature.probe_highlighting_bg.js.map
