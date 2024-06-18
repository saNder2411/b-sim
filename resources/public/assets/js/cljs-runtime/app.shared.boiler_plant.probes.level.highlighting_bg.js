goog.provide('app.shared.boiler_plant.probes.level.highlighting_bg');

app.shared.boiler_plant.probes.level.highlighting_bg.probe_level_highlighting = (function (){var G__51187 = (function app$shared$boiler_plant$probes$level$highlighting_bg$probe_level_highlighting_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__51188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__51191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51188,(0),null);
var map__51191__$1 = cljs.core.__destructure_map(map__51191);
var hotspot_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51191__$1,new cljs.core.Keyword(null,"hotspot-id","hotspot-id",1928616945));

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
var left_orientation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"level-low-probe-I")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"level-low-probe-II")));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,hotspot_id)){
if(left_orientation){
var G__51192 = helix.core.Fragment;
var G__51193 = ({"children": [(function (){var G__51194 = "image";
var G__51195 = (function (){var obj51197 = ({"style":(function (){var obj51199 = ({"isolation":helix.impl.props.__GT_js("isolate"),"opacity":helix.impl.props.__GT_js(0.8)});
return obj51199;
})(),"href":"assets/img/probe-level-left-highlighting-bg.png","x":3.001,"y":0.396,"width":(71),"height":(111)});
return obj51197;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51194,G__51195) : helix.core.jsx.call(null,G__51194,G__51195));
})(),(function (){var G__51200 = "polygon";
var G__51201 = (function (){var obj51203 = ({"fill":"#061838","points":"49.833 13.344 49.833 18.885 61.243 18.885 61.243 45.747 59.857 45.747 59.857 90.44 58.716 93.7 58.716 98.471 46.197 98.471 46.197 93.7 45.056 90.44 45.056 51.615 15.638 51.615 15.638 13.344"});
return obj51203;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51200,G__51201) : helix.core.jsx.call(null,G__51200,G__51201));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__51192,G__51193) : helix.core.jsxs.call(null,G__51192,G__51193));
} else {
var G__51204 = helix.core.Fragment;
var G__51205 = ({"children": [(function (){var G__51206 = "image";
var G__51207 = (function (){var obj51209 = ({"style":(function (){var obj51211 = ({"isolation":helix.impl.props.__GT_js("isolate"),"opacity":helix.impl.props.__GT_js(0.8)});
return obj51211;
})(),"href":"assets/img/probe-level-right-highlighting-bg.png","x":3.382,"y":0.396,"width":(71),"height":(111)});
return obj51209;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51206,G__51207) : helix.core.jsx.call(null,G__51206,G__51207));
})(),(function (){var G__51212 = "polygon";
var G__51213 = (function (){var obj51215 = ({"fill":"#061838","points":"15.638 45.747 15.638 18.885 27.128 18.885 27.128 13.344 61.243 13.344 61.243 51.615 31.824 51.615 31.824 90.44 30.684 93.7 30.684 98.471 18.164 98.471 18.164 93.7 17.023 90.44 17.023 45.747"});
return obj51215;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__51212,G__51213) : helix.core.jsx.call(null,G__51212,G__51213));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__51204,G__51205) : helix.core.jsxs.call(null,G__51204,G__51205));
}
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__51216 = G__51187;
(G__51216.displayName = "app.shared.boiler-plant.probes.level.highlighting-bg/probe-level-highlighting");

return G__51216;
} else {
return G__51187;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.probes.level.highlighting_bg.js.map
