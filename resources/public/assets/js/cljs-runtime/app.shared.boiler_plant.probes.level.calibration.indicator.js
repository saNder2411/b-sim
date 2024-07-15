goog.provide('app.shared.boiler_plant.probes.level.calibration.indicator');

app.shared.boiler_plant.probes.level.calibration.indicator.level_cal_indicator = (function (){var G__32498 = (function app$shared$boiler_plant$probes$level$calibration$indicator$level_cal_indicator_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32501 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__32504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32501,(0),null);
var map__32504__$1 = cljs.core.__destructure_map(map__32504);
var point_by_boiler_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32504__$1,new cljs.core.Keyword(null,"point-by-boiler-level","point-by-boiler-level",577526010));
var water_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32504__$1,new cljs.core.Keyword(null,"water-level","water-level",-285016653));
var digit_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32504__$1,new cljs.core.Keyword(null,"digit-level","digit-level",1610593962));
var point_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32504__$1,new cljs.core.Keyword(null,"point-pos","point-pos",-1946723445));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32504__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32504__$1,new cljs.core.Keyword(null,"fill","fill",883462889));

var y = ((-58) + ((324) * ((1) - (point_by_boiler_level / 100.0))));
var G__32505 = "g";
var G__32506 = (function (){var obj32508 = ({"transform":["translate(0, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"opacity":opacity,"children":[(function (){var G__32510 = "polygon";
var G__32511 = (function (){var obj32516 = ({"fill":fill,"points":"885.2 382.19 892.5 379.8 892.5 384.3"});
return obj32516;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32510,G__32511) : helix.core.jsx.call(null,G__32510,G__32511));
})(),(function (){var G__32517 = "polygon";
var G__32518 = (function (){var obj32520 = ({"fill":"none","stroke":fill,"points":"890,382.2 909,382.2"});
return obj32520;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32517,G__32518) : helix.core.jsx.call(null,G__32517,G__32518));
})(),(function (){var G__32521 = "text";
var G__32522 = (function (){var obj32524 = ({"fill":fill,"x":(914),"y":386.1,"fontSize":"12px","letterSpacing":"0.025em","children":[water_level,(function (){var G__32525 = "tspan";
var G__32526 = (function (){var obj32528 = ({"fontSize":"10px","children":"% "});
return obj32528;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32525,G__32526) : helix.core.jsx.call(null,G__32525,G__32526));
})(),cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([digit_level], 0)),(function (){var G__32529 = "tspan";
var G__32530 = (function (){var obj32532 = ({"fontSize":"10px","children":["d (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(point_pos),")"].join('')});
return obj32532;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32529,G__32530) : helix.core.jsx.call(null,G__32529,G__32530));
})()]});
return obj32524;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32521,G__32522) : helix.core.jsxs.call(null,G__32521,G__32522));
})()]});
return obj32508;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32505,G__32506) : helix.core.jsxs.call(null,G__32505,G__32506));
});
if(goog.DEBUG === true){
var G__32533 = G__32498;
(G__32533.displayName = "app.shared.boiler-plant.probes.level.calibration.indicator/level-cal-indicator");

return G__32533;
} else {
return G__32498;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.probes.level.calibration.indicator.js.map
