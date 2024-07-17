goog.provide('app.ui.shared.boiler_plant.probes.level.highlighting_bg');

app.ui.shared.boiler_plant.probes.level.highlighting_bg.probe_level_highlighting = (function (){var G__33208 = (function app$ui$shared$boiler_plant$probes$level$highlighting_bg$probe_level_highlighting_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__33212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33209,(0),null);
var map__33212__$1 = cljs.core.__destructure_map(map__33212);
var hotspot_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33212__$1,new cljs.core.Keyword(null,"hotspot-id","hotspot-id",1928616945));

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
var left_orientation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"low-level-probe-I")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"low-level-probe-II")));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,hotspot_id)){
if(left_orientation){
var G__33215 = helix.core.Fragment;
var G__33216 = ({"children": [(function (){var G__33220 = "image";
var G__33221 = (function (){var obj33223 = ({"style":(function (){var obj33225 = ({"isolation":helix.impl.props.__GT_js("isolate"),"opacity":helix.impl.props.__GT_js(0.8)});
return obj33225;
})(),"href":"assets/img/probe-level-left-highlighting-bg.png","x":3.001,"y":0.396,"width":(71),"height":(111)});
return obj33223;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33220,G__33221) : helix.core.jsx.call(null,G__33220,G__33221));
})(),(function (){var G__33227 = "polygon";
var G__33228 = (function (){var obj33230 = ({"fill":"#061838","points":"49.833 13.344 49.833 18.885 61.243 18.885 61.243 45.747 59.857 45.747 59.857 90.44 58.716 93.7 58.716 98.471 46.197 98.471 46.197 93.7 45.056 90.44 45.056 51.615 15.638 51.615 15.638 13.344"});
return obj33230;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33227,G__33228) : helix.core.jsx.call(null,G__33227,G__33228));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33215,G__33216) : helix.core.jsxs.call(null,G__33215,G__33216));
} else {
var G__33232 = helix.core.Fragment;
var G__33233 = ({"children": [(function (){var G__33234 = "image";
var G__33235 = (function (){var obj33240 = ({"style":(function (){var obj33242 = ({"isolation":helix.impl.props.__GT_js("isolate"),"opacity":helix.impl.props.__GT_js(0.8)});
return obj33242;
})(),"href":"assets/img/probe-level-right-highlighting-bg.png","x":3.382,"y":0.396,"width":(71),"height":(111)});
return obj33240;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33234,G__33235) : helix.core.jsx.call(null,G__33234,G__33235));
})(),(function (){var G__33247 = "polygon";
var G__33248 = (function (){var obj33250 = ({"fill":"#061838","points":"15.638 45.747 15.638 18.885 27.128 18.885 27.128 13.344 61.243 13.344 61.243 51.615 31.824 51.615 31.824 90.44 30.684 93.7 30.684 98.471 18.164 98.471 18.164 93.7 17.023 90.44 17.023 45.747"});
return obj33250;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33247,G__33248) : helix.core.jsx.call(null,G__33247,G__33248));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33232,G__33233) : helix.core.jsxs.call(null,G__33232,G__33233));
}
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__33255 = G__33208;
(G__33255.displayName = "app.ui.shared.boiler-plant.probes.level.highlighting-bg/probe-level-highlighting");

return G__33255;
} else {
return G__33208;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.probes.level.highlighting_bg.js.map
