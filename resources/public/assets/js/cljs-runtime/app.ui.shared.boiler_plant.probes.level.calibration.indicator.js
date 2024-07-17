goog.provide('app.ui.shared.boiler_plant.probes.level.calibration.indicator');

app.ui.shared.boiler_plant.probes.level.calibration.indicator.level_cal_indicator = (function (){var G__33267 = (function app$ui$shared$boiler_plant$probes$level$calibration$indicator$level_cal_indicator_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33270 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__33273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33270,(0),null);
var map__33273__$1 = cljs.core.__destructure_map(map__33273);
var point_by_boiler_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33273__$1,new cljs.core.Keyword(null,"point-by-boiler-level","point-by-boiler-level",577526010));
var water_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33273__$1,new cljs.core.Keyword(null,"water-level","water-level",-285016653));
var digit_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33273__$1,new cljs.core.Keyword(null,"digit-level","digit-level",1610593962));
var point_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33273__$1,new cljs.core.Keyword(null,"point-pos","point-pos",-1946723445));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33273__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33273__$1,new cljs.core.Keyword(null,"fill","fill",883462889));

var y = ((-58) + ((324) * ((1) - (point_by_boiler_level / 100.0))));
var G__33284 = "g";
var G__33285 = (function (){var obj33289 = ({"transform":["translate(0, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"opacity":opacity,"children":[(function (){var G__33292 = "polygon";
var G__33293 = (function (){var obj33295 = ({"fill":fill,"points":"885.2 382.19 892.5 379.8 892.5 384.3"});
return obj33295;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33292,G__33293) : helix.core.jsx.call(null,G__33292,G__33293));
})(),(function (){var G__33297 = "polygon";
var G__33298 = (function (){var obj33300 = ({"fill":"none","stroke":fill,"points":"890,382.2 909,382.2"});
return obj33300;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33297,G__33298) : helix.core.jsx.call(null,G__33297,G__33298));
})(),(function (){var G__33301 = "text";
var G__33302 = (function (){var obj33304 = ({"fill":fill,"x":(914),"y":386.1,"fontSize":"12px","letterSpacing":"0.025em","children":[water_level,(function (){var G__33305 = "tspan";
var G__33306 = (function (){var obj33308 = ({"fontSize":"10px","children":"% "});
return obj33308;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33305,G__33306) : helix.core.jsx.call(null,G__33305,G__33306));
})(),cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([digit_level], 0)),(function (){var G__33310 = "tspan";
var G__33311 = (function (){var obj33313 = ({"fontSize":"10px","children":["d (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(point_pos),")"].join('')});
return obj33313;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33310,G__33311) : helix.core.jsx.call(null,G__33310,G__33311));
})()]});
return obj33304;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33301,G__33302) : helix.core.jsxs.call(null,G__33301,G__33302));
})()]});
return obj33289;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33284,G__33285) : helix.core.jsxs.call(null,G__33284,G__33285));
});
if(goog.DEBUG === true){
var G__33321 = G__33267;
(G__33321.displayName = "app.ui.shared.boiler-plant.probes.level.calibration.indicator/level-cal-indicator");

return G__33321;
} else {
return G__33267;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.probes.level.calibration.indicator.js.map
