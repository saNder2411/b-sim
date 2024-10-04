goog.provide('app.ui.shared.boiler_plant.probes.temperature.probe_highlighting_bg');

app.ui.shared.boiler_plant.probes.temperature.probe_highlighting_bg.probe_highlighting_bg = (function (){var G__39880 = (function app$ui$shared$boiler_plant$probes$temperature$probe_highlighting_bg$probe_highlighting_bg_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__39887 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","current","hotspots/current",-823207247)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,"temperature-probe")){
var G__39894 = "polygon";
var G__39895 = (function (){var obj39901 = ({"className":"active-el","fill":"#061838","points":"15.638 45.747, 15.638 18.885, 27.128 18.885, 27.128 13.344, 61.243 13.344, 61.243 51.615, 27.128 51.615, 27.128 45.747"});
return obj39901;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39894,G__39895) : helix.core.jsx.call(null,G__39894,G__39895));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__39903 = G__39880;
(G__39903.displayName = "app.ui.shared.boiler-plant.probes.temperature.probe-highlighting-bg/probe-highlighting-bg");

return G__39903;
} else {
return G__39880;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.probes.temperature.probe_highlighting_bg.js.map
