goog.provide('app.shared.boiler_plant.probes.level.highlighting_bg');

app.shared.boiler_plant.probes.level.highlighting_bg.probe_level_highlighting = (function (){var G__29503 = (function app$shared$boiler_plant$probes$level$highlighting_bg$probe_level_highlighting_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29504 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__29507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29504,(0),null);
var map__29507__$1 = cljs.core.__destructure_map(map__29507);
var hotspot_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29507__$1,new cljs.core.Keyword(null,"hotspot-id","hotspot-id",1928616945));

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
var left_orientation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"level-low-probe-1")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"level-low-probe-2")));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,hotspot_id)){
if(left_orientation){
var G__29514 = helix.core.Fragment;
var G__29515 = ({"children": [(function (){var G__29516 = "image";
var G__29517 = (function (){var obj29519 = ({"style":(function (){var obj29523 = ({"isolation":helix.impl.props.__GT_js("isolate"),"opacity":helix.impl.props.__GT_js(0.8)});
return obj29523;
})(),"href":"assets/img/probe-level-left-highlighting-bg.png","x":3.001,"y":0.396,"width":(71),"height":(111)});
return obj29519;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29516,G__29517) : helix.core.jsx.call(null,G__29516,G__29517));
})(),(function (){var G__29528 = "polygon";
var G__29529 = (function (){var obj29533 = ({"fill":"#061838","points":"49.833 13.344 49.833 18.885 61.243 18.885 61.243 45.747 59.857 45.747 59.857 90.44 58.716 93.7 58.716 98.471 46.197 98.471 46.197 93.7 45.056 90.44 45.056 51.615 15.638 51.615 15.638 13.344"});
return obj29533;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29528,G__29529) : helix.core.jsx.call(null,G__29528,G__29529));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29514,G__29515) : helix.core.jsxs.call(null,G__29514,G__29515));
} else {
var G__29538 = helix.core.Fragment;
var G__29539 = ({"children": [(function (){var G__29542 = "image";
var G__29543 = (function (){var obj29547 = ({"style":(function (){var obj29549 = ({"isolation":helix.impl.props.__GT_js("isolate"),"opacity":helix.impl.props.__GT_js(0.8)});
return obj29549;
})(),"href":"assets/img/probe-level-right-highlighting-bg.png","x":3.382,"y":0.396,"width":(71),"height":(111)});
return obj29547;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29542,G__29543) : helix.core.jsx.call(null,G__29542,G__29543));
})(),(function (){var G__29554 = "polygon";
var G__29555 = (function (){var obj29557 = ({"fill":"#061838","points":"15.638 45.747 15.638 18.885 27.128 18.885 27.128 13.344 61.243 13.344 61.243 51.615 31.824 51.615 31.824 90.44 30.684 93.7 30.684 98.471 18.164 98.471 18.164 93.7 17.023 90.44 17.023 45.747"});
return obj29557;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29554,G__29555) : helix.core.jsx.call(null,G__29554,G__29555));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29538,G__29539) : helix.core.jsxs.call(null,G__29538,G__29539));
}
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__29562 = G__29503;
(G__29562.displayName = "app.shared.boiler-plant.probes.level.highlighting-bg/probe-level-highlighting");

return G__29562;
} else {
return G__29503;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.probes.level.highlighting_bg.js.map
