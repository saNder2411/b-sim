goog.provide('app.shared.probes.level.calibration.core');

app.shared.probes.level.calibration.core.probe_level_calibration = (function (){var G__38330 = (function app$shared$probes$level$calibration$core$probe_level_calibration_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__38335 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var map__38340 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-calibration-level-cal-view","NRR-2-60-calibration-level-cal-view",1904344003)], null));
var map__38340__$1 = cljs.core.__destructure_map(map__38340);
var high_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38340__$1,new cljs.core.Keyword(null,"high-point-by-boiler","high-point-by-boiler",1619736083));
var low_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38340__$1,new cljs.core.Keyword(null,"low-point","low-point",1174360578));
var low_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38340__$1,new cljs.core.Keyword(null,"low-point-by-boiler","low-point-by-boiler",-912758900));
var next_high_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38340__$1,new cljs.core.Keyword(null,"next-high-point-by-boiler","next-high-point-by-boiler",-2082404481));
var next_real_high_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38340__$1,new cljs.core.Keyword(null,"next-real-high-point","next-real-high-point",600051673));
var real_high_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38340__$1,new cljs.core.Keyword(null,"real-high-point","real-high-point",2141017698));
var G__38346 = helix.core.Fragment;
var G__38347 = ({"children": [(function (){var G__38348 = app.shared.probes.level.calibration.indicator.indicator;
var G__38349 = (function (){var obj38357 = ({"point-by-boiler-level":next_high_point_by_boiler,"w-level":(100),"digit-level":next_real_high_point,"point-pos":"cal.h","opacity":0.5,"fill":"#c83b44"});
return obj38357;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38348,G__38349) : helix.core.jsx.call(null,G__38348,G__38349));
})(),(function (){var G__38362 = app.shared.probes.level.calibration.indicator.indicator;
var G__38363 = (function (){var obj38367 = ({"point-by-boiler-level":high_point_by_boiler,"w-level":(100),"digit-level":real_high_point,"point-pos":"cal.h","opacity":(1),"fill":"#c83b44"});
return obj38367;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38362,G__38363) : helix.core.jsx.call(null,G__38362,G__38363));
})(),(function (){var G__38370 = app.shared.probes.level.calibration.indicator.indicator;
var G__38371 = (function (){var obj38376 = ({"point-by-boiler-level":low_point_by_boiler,"w-level":(0),"digit-level":low_point,"point-pos":"cal.l","opacity":(1),"fill":"#286bb7"});
return obj38376;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38370,G__38371) : helix.core.jsx.call(null,G__38370,G__38371));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38346,G__38347) : helix.core.jsxs.call(null,G__38346,G__38347));
});
if(goog.DEBUG === true){
var G__38383 = G__38330;
(G__38383.displayName = "app.shared.probes.level.calibration.core/probe-level-calibration");

return G__38383;
} else {
return G__38330;
}
})();




//# sourceMappingURL=app.shared.probes.level.calibration.core.js.map
