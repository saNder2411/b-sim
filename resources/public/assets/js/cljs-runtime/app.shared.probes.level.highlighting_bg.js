goog.provide('app.shared.probes.level.highlighting_bg');

app.shared.probes.level.highlighting_bg.probe_level_highlighting = (function (){var G__38259 = (function app$shared$probes$level$highlighting_bg$probe_level_highlighting_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__38260 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__38263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38260,(0),null);
var map__38263__$1 = cljs.core.__destructure_map(map__38263);
var hotspot_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38263__$1,new cljs.core.Keyword(null,"hotspot-id","hotspot-id",1928616945));

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
var left_orientation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"level-low-probe-1")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"level-low-probe-2")));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,hotspot_id)){
if(left_orientation){
var G__38282 = helix.core.Fragment;
var G__38283 = ({"children": [(function (){var G__38288 = "image";
var G__38289 = (function (){var obj38293 = ({"style":(function (){var obj38295 = ({"isolation":helix.impl.props.__GT_js("isolate"),"opacity":helix.impl.props.__GT_js(0.8)});
return obj38295;
})(),"href":"assets/img/probe-level-left-highlighting-bg.png","x":3.001,"y":0.396,"width":(71),"height":(111)});
return obj38293;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38288,G__38289) : helix.core.jsx.call(null,G__38288,G__38289));
})(),(function (){var G__38301 = "polygon";
var G__38302 = (function (){var obj38306 = ({"fill":"#061838","points":"49.833 13.344 49.833 18.885 61.243 18.885 61.243 45.747 59.857 45.747 59.857 90.44 58.716 93.7 58.716 98.471 46.197 98.471 46.197 93.7 45.056 90.44 45.056 51.615 15.638 51.615 15.638 13.344"});
return obj38306;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38301,G__38302) : helix.core.jsx.call(null,G__38301,G__38302));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38282,G__38283) : helix.core.jsxs.call(null,G__38282,G__38283));
} else {
var G__38309 = helix.core.Fragment;
var G__38310 = ({"children": [(function (){var G__38313 = "image";
var G__38314 = (function (){var obj38318 = ({"style":(function (){var obj38320 = ({"isolation":helix.impl.props.__GT_js("isolate"),"opacity":helix.impl.props.__GT_js(0.8)});
return obj38320;
})(),"href":"assets/img/probe-level-right-highlighting-bg.png","x":3.382,"y":0.396,"width":(71),"height":(111)});
return obj38318;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38313,G__38314) : helix.core.jsx.call(null,G__38313,G__38314));
})(),(function (){var G__38321 = "polygon";
var G__38322 = (function (){var obj38325 = ({"fill":"#061838","points":"15.638 45.747 15.638 18.885 27.128 18.885 27.128 13.344 61.243 13.344 61.243 51.615 31.824 51.615 31.824 90.44 30.684 93.7 30.684 98.471 18.164 98.471 18.164 93.7 17.023 90.44 17.023 45.747"});
return obj38325;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38321,G__38322) : helix.core.jsx.call(null,G__38321,G__38322));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38309,G__38310) : helix.core.jsxs.call(null,G__38309,G__38310));
}
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38326 = G__38259;
(G__38326.displayName = "app.shared.probes.level.highlighting-bg/probe-level-highlighting");

return G__38326;
} else {
return G__38259;
}
})();




//# sourceMappingURL=app.shared.probes.level.highlighting_bg.js.map
