goog.provide('app.ui.shared.boiler_plant.probes.level.highlighting_bg');

app.ui.shared.boiler_plant.probes.level.highlighting_bg.probe_level_highlighting = (function (){var G__40159 = (function app$ui$shared$boiler_plant$probes$level$highlighting_bg$probe_level_highlighting_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40164 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__40167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164,(0),null);
var map__40167__$1 = cljs.core.__destructure_map(map__40167);
var hotspot_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40167__$1,new cljs.core.Keyword(null,"hotspot-id","hotspot-id",1928616945));

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("hotspots","current","hotspots/current",-823207247)], null));
var left_orientation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"low-level-probe-I")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"low-level-probe-II")));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,hotspot_id)){
if(left_orientation){
var G__40234 = helix.core.Fragment;
var G__40235 = ({"children": [(function (){var G__40238 = "image";
var G__40239 = (function (){var obj40243 = ({"style":(function (){var obj40249 = ({"isolation":helix.impl.props.__GT_js("isolate"),"opacity":helix.impl.props.__GT_js(0.8)});
return obj40249;
})(),"href":"assets/img/probe-level-left-highlighting-bg.png","x":3.001,"y":0.396,"width":(71),"height":(111)});
return obj40243;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40238,G__40239) : helix.core.jsx.call(null,G__40238,G__40239));
})(),(function (){var G__40258 = "polygon";
var G__40259 = (function (){var obj40261 = ({"fill":"#061838","points":"49.833 13.344 49.833 18.885 61.243 18.885 61.243 45.747 59.857 45.747 59.857 90.44 58.716 93.7 58.716 98.471 46.197 98.471 46.197 93.7 45.056 90.44 45.056 51.615 15.638 51.615 15.638 13.344"});
return obj40261;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40258,G__40259) : helix.core.jsx.call(null,G__40258,G__40259));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40234,G__40235) : helix.core.jsxs.call(null,G__40234,G__40235));
} else {
var G__40266 = helix.core.Fragment;
var G__40267 = ({"children": [(function (){var G__40269 = "image";
var G__40270 = (function (){var obj40272 = ({"style":(function (){var obj40274 = ({"isolation":helix.impl.props.__GT_js("isolate"),"opacity":helix.impl.props.__GT_js(0.8)});
return obj40274;
})(),"href":"assets/img/probe-level-right-highlighting-bg.png","x":3.382,"y":0.396,"width":(71),"height":(111)});
return obj40272;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40269,G__40270) : helix.core.jsx.call(null,G__40269,G__40270));
})(),(function (){var G__40276 = "polygon";
var G__40277 = (function (){var obj40279 = ({"fill":"#061838","points":"15.638 45.747 15.638 18.885 27.128 18.885 27.128 13.344 61.243 13.344 61.243 51.615 31.824 51.615 31.824 90.44 30.684 93.7 30.684 98.471 18.164 98.471 18.164 93.7 17.023 90.44 17.023 45.747"});
return obj40279;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40276,G__40277) : helix.core.jsx.call(null,G__40276,G__40277));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40266,G__40267) : helix.core.jsxs.call(null,G__40266,G__40267));
}
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__40280 = G__40159;
(G__40280.displayName = "app.ui.shared.boiler-plant.probes.level.highlighting-bg/probe-level-highlighting");

return G__40280;
} else {
return G__40159;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.probes.level.highlighting_bg.js.map
