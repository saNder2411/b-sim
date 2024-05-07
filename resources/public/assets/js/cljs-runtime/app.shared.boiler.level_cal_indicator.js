goog.provide('app.shared.boiler.level_cal_indicator');

app.shared.boiler.level_cal_indicator.level_cal_indicator = (function (){var G__97341 = (function app$shared$boiler$level_cal_indicator$level_cal_indicator_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__97342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);
var map__97345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__97342,(0),null);
var map__97345__$1 = cljs.core.__destructure_map(map__97345);
var point_by_boiler_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97345__$1,new cljs.core.Keyword(null,"point-by-boiler-level","point-by-boiler-level",577526010));
var w_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97345__$1,new cljs.core.Keyword(null,"w-level","w-level",-1364613558));
var digit_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97345__$1,new cljs.core.Keyword(null,"digit-level","digit-level",1610593962));
var point_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97345__$1,new cljs.core.Keyword(null,"point-pos","point-pos",-1946723445));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97345__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97345__$1,new cljs.core.Keyword(null,"fill","fill",883462889));

var y = ((-58) + ((324) * ((1) - (point_by_boiler_level / 100.0))));
var G__97346 = "g";
var G__97347 = (function (){var obj97349 = ({"transform":["translate(0, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"opacity":opacity,"children":[(function (){var G__97350 = "polygon";
var G__97351 = (function (){var obj97353 = ({"fill":fill,"points":"885.2 382.19 892.5 379.8 892.5 384.3"});
return obj97353;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__97350,G__97351) : helix.core.jsx.call(null,G__97350,G__97351));
})(),(function (){var G__97354 = "polygon";
var G__97355 = (function (){var obj97357 = ({"fill":"none","stroke":fill,"points":"890,382.2 909,382.2"});
return obj97357;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__97354,G__97355) : helix.core.jsx.call(null,G__97354,G__97355));
})(),(function (){var G__97358 = "text";
var G__97359 = (function (){var obj97361 = ({"fill":fill,"x":(914),"y":386.1,"fontSize":"12px","letterSpacing":"0.025em","children":[w_level,(function (){var G__97362 = "tspan";
var G__97363 = (function (){var obj97365 = ({"fontSize":"10px","children":"% "});
return obj97365;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__97362,G__97363) : helix.core.jsx.call(null,G__97362,G__97363));
})(),cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([digit_level], 0)),(function (){var G__97366 = "tspan";
var G__97367 = (function (){var obj97369 = ({"fontSize":"10px","children":["d ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(point_pos)].join('')});
return obj97369;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__97366,G__97367) : helix.core.jsx.call(null,G__97366,G__97367));
})()]});
return obj97361;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__97358,G__97359) : helix.core.jsxs.call(null,G__97358,G__97359));
})()]});
return obj97349;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__97346,G__97347) : helix.core.jsxs.call(null,G__97346,G__97347));
});
if(goog.DEBUG === true){
var G__97370 = G__97341;
(G__97370.displayName = "app.shared.boiler.level-cal-indicator/level-cal-indicator");

return G__97370;
} else {
return G__97341;
}
})();




//# sourceMappingURL=app.shared.boiler.level_cal_indicator.js.map
