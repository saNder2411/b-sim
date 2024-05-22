goog.provide('app.shared.boiler.probe_level_highlighting');

app.shared.boiler.probe_level_highlighting.probe_level_highlighting = (function (){var G__45227 = (function app$shared$boiler$probe_level_highlighting$probe_level_highlighting_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__45228 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__45231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45228,(0),null);
var map__45231__$1 = cljs.core.__destructure_map(map__45231);
var hotspot_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45231__$1,new cljs.core.Keyword(null,"hotspot-id","hotspot-id",1928616945));

var current_hotspot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-hotspot","current-hotspot",965996237)], null));
var left_orientation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"probe-low-level-1")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hotspot_id,"probe-low-level-2")));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_hotspot,hotspot_id)){
if(left_orientation){
var G__45232 = helix.core.Fragment;
var G__45233 = ({"children": [(function (){var G__45234 = "image";
var G__45235 = (function (){var obj45237 = ({"style":(function (){var obj45239 = ({"isolation":helix.impl.props.__GT_js("isolate"),"opacity":helix.impl.props.__GT_js(0.8)});
return obj45239;
})(),"href":"assets/img/probe-level-left-highlighting-bg.png","x":3.001,"y":0.396,"width":(71),"height":(111)});
return obj45237;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45234,G__45235) : helix.core.jsx.call(null,G__45234,G__45235));
})(),(function (){var G__45240 = "polygon";
var G__45241 = (function (){var obj45243 = ({"fill":"#061838","points":"49.833 13.344 49.833 18.885 61.243 18.885 61.243 45.747 59.857 45.747 59.857 90.44 58.716 93.7 58.716 98.471 46.197 98.471 46.197 93.7 45.056 90.44 45.056 51.615 15.638 51.615 15.638 13.344"});
return obj45243;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45240,G__45241) : helix.core.jsx.call(null,G__45240,G__45241));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__45232,G__45233) : helix.core.jsxs.call(null,G__45232,G__45233));
} else {
var G__45244 = helix.core.Fragment;
var G__45245 = ({"children": [(function (){var G__45246 = "image";
var G__45247 = (function (){var obj45249 = ({"style":(function (){var obj45251 = ({"isolation":helix.impl.props.__GT_js("isolate"),"opacity":helix.impl.props.__GT_js(0.8)});
return obj45251;
})(),"href":"assets/img/probe-level-right-highlighting-bg.png","x":3.382,"y":0.396,"width":(71),"height":(111)});
return obj45249;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45246,G__45247) : helix.core.jsx.call(null,G__45246,G__45247));
})(),(function (){var G__45252 = "polygon";
var G__45253 = (function (){var obj45255 = ({"fill":"#061838","points":"15.638 45.747 15.638 18.885 27.128 18.885 27.128 13.344 61.243 13.344 61.243 51.615 31.824 51.615 31.824 90.44 30.684 93.7 30.684 98.471 18.164 98.471 18.164 93.7 17.023 90.44 17.023 45.747"});
return obj45255;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45252,G__45253) : helix.core.jsx.call(null,G__45252,G__45253));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__45244,G__45245) : helix.core.jsxs.call(null,G__45244,G__45245));
}
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__45256 = G__45227;
(G__45256.displayName = "app.shared.boiler.probe-level-highlighting/probe-level-highlighting");

return G__45256;
} else {
return G__45227;
}
})();




//# sourceMappingURL=app.shared.boiler.probe_level_highlighting.js.map
