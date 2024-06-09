goog.provide('app.shared.probes.level.calibration.indicator');

app.shared.probes.level.calibration.indicator.indicator = (function (){var G__38251 = (function app$shared$probes$level$calibration$indicator$indicator_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__38255 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__38258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38255,(0),null);
var map__38258__$1 = cljs.core.__destructure_map(map__38258);
var point_by_boiler_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38258__$1,new cljs.core.Keyword(null,"point-by-boiler-level","point-by-boiler-level",577526010));
var w_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38258__$1,new cljs.core.Keyword(null,"w-level","w-level",-1364613558));
var digit_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38258__$1,new cljs.core.Keyword(null,"digit-level","digit-level",1610593962));
var point_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38258__$1,new cljs.core.Keyword(null,"point-pos","point-pos",-1946723445));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38258__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38258__$1,new cljs.core.Keyword(null,"fill","fill",883462889));

var y = ((-58) + ((324) * ((1) - (point_by_boiler_level / 100.0))));
var G__38268 = "g";
var G__38269 = (function (){var obj38273 = ({"transform":["translate(0, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"opacity":opacity,"children":[(function (){var G__38276 = "polygon";
var G__38277 = (function (){var obj38279 = ({"fill":fill,"points":"885.2 382.19 892.5 379.8 892.5 384.3"});
return obj38279;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38276,G__38277) : helix.core.jsx.call(null,G__38276,G__38277));
})(),(function (){var G__38286 = "polygon";
var G__38287 = (function (){var obj38291 = ({"fill":"none","stroke":fill,"points":"890,382.2 909,382.2"});
return obj38291;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38286,G__38287) : helix.core.jsx.call(null,G__38286,G__38287));
})(),(function (){var G__38296 = "text";
var G__38297 = (function (){var obj38300 = ({"fill":fill,"x":(914),"y":386.1,"fontSize":"12px","letterSpacing":"0.025em","children":[w_level,(function (){var G__38303 = "tspan";
var G__38304 = (function (){var obj38308 = ({"fontSize":"10px","children":"% "});
return obj38308;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38303,G__38304) : helix.core.jsx.call(null,G__38303,G__38304));
})(),cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([digit_level], 0)),(function (){var G__38311 = "tspan";
var G__38312 = (function (){var obj38316 = ({"fontSize":"10px","children":["d (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(point_pos),")"].join('')});
return obj38316;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38311,G__38312) : helix.core.jsx.call(null,G__38311,G__38312));
})()]});
return obj38300;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38296,G__38297) : helix.core.jsxs.call(null,G__38296,G__38297));
})()]});
return obj38273;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38268,G__38269) : helix.core.jsxs.call(null,G__38268,G__38269));
});
if(goog.DEBUG === true){
var G__38323 = G__38251;
(G__38323.displayName = "app.shared.probes.level.calibration.indicator/indicator");

return G__38323;
} else {
return G__38251;
}
})();




//# sourceMappingURL=app.shared.probes.level.calibration.indicator.js.map
