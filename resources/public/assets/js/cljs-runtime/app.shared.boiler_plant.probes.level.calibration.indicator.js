goog.provide('app.shared.boiler_plant.probes.level.calibration.indicator');

app.shared.boiler_plant.probes.level.calibration.indicator.level_cal_indicator = (function (){var G__29509 = (function app$shared$boiler_plant$probes$level$calibration$indicator$level_cal_indicator_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29510 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__29513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29510,(0),null);
var map__29513__$1 = cljs.core.__destructure_map(map__29513);
var point_by_boiler_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29513__$1,new cljs.core.Keyword(null,"point-by-boiler-level","point-by-boiler-level",577526010));
var w_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29513__$1,new cljs.core.Keyword(null,"w-level","w-level",-1364613558));
var digit_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29513__$1,new cljs.core.Keyword(null,"digit-level","digit-level",1610593962));
var point_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29513__$1,new cljs.core.Keyword(null,"point-pos","point-pos",-1946723445));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29513__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29513__$1,new cljs.core.Keyword(null,"fill","fill",883462889));

var y = ((-58) + ((324) * ((1) - (point_by_boiler_level / 100.0))));
var G__29520 = "g";
var G__29521 = (function (){var obj29525 = ({"transform":["translate(0, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"opacity":opacity,"children":[(function (){var G__29526 = "polygon";
var G__29527 = (function (){var obj29531 = ({"fill":fill,"points":"885.2 382.19 892.5 379.8 892.5 384.3"});
return obj29531;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29526,G__29527) : helix.core.jsx.call(null,G__29526,G__29527));
})(),(function (){var G__29534 = "polygon";
var G__29535 = (function (){var obj29537 = ({"fill":"none","stroke":fill,"points":"890,382.2 909,382.2"});
return obj29537;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29534,G__29535) : helix.core.jsx.call(null,G__29534,G__29535));
})(),(function (){var G__29540 = "text";
var G__29541 = (function (){var obj29545 = ({"fill":fill,"x":(914),"y":386.1,"fontSize":"12px","letterSpacing":"0.025em","children":[w_level,(function (){var G__29550 = "tspan";
var G__29551 = (function (){var obj29553 = ({"fontSize":"10px","children":"% "});
return obj29553;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29550,G__29551) : helix.core.jsx.call(null,G__29550,G__29551));
})(),cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([digit_level], 0)),(function (){var G__29558 = "tspan";
var G__29559 = (function (){var obj29561 = ({"fontSize":"10px","children":["d (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(point_pos),")"].join('')});
return obj29561;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29558,G__29559) : helix.core.jsx.call(null,G__29558,G__29559));
})()]});
return obj29545;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29540,G__29541) : helix.core.jsxs.call(null,G__29540,G__29541));
})()]});
return obj29525;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29520,G__29521) : helix.core.jsxs.call(null,G__29520,G__29521));
});
if(goog.DEBUG === true){
var G__29563 = G__29509;
(G__29563.displayName = "app.shared.boiler-plant.probes.level.calibration.indicator/level-cal-indicator");

return G__29563;
} else {
return G__29509;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.probes.level.calibration.indicator.js.map
