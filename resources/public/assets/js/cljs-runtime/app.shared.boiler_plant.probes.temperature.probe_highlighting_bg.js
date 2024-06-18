goog.provide('app.shared.boiler_plant.probes.temperature.probe_highlighting_bg');

app.shared.boiler_plant.probes.temperature.probe_highlighting_bg.probe_highlighting_bg = (function (){var G__51095 = (function app$shared$boiler_plant$probes$temperature$probe_highlighting_bg$probe_highlighting_bg_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__51096 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"temperature-probe")){
var G__51099 = "polygon";
var G__51100 = (function (){var obj51102 = ({"className":"active-el","fill":"#061838","points":"15.638 45.747, 15.638 18.885, 27.128 18.885, 27.128 13.344, 61.243 13.344, 61.243 51.615, 27.128 51.615, 27.128 45.747"});
return obj51102;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51099,G__51100) : helix.core.jsx.call(null,G__51099,G__51100));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__51103 = G__51095;
(G__51103.displayName = "app.shared.boiler-plant.probes.temperature.probe-highlighting-bg/probe-highlighting-bg");

return G__51103;
} else {
return G__51095;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.probes.temperature.probe_highlighting_bg.js.map
