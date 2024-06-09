goog.provide('app.shared.probe.level.calibration.core');

app.shared.probe.level.calibration.core.probe_level_calibration = (function (){var G__37958 = (function app$shared$probe$level$calibration$core$probe_level_calibration_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__37960 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var map__37963 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-calibration-level-cal-view","NRR-2-60-calibration-level-cal-view",1904344003)], null));
var map__37963__$1 = cljs.core.__destructure_map(map__37963);
var high_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963__$1,new cljs.core.Keyword(null,"high-point-by-boiler","high-point-by-boiler",1619736083));
var low_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963__$1,new cljs.core.Keyword(null,"low-point","low-point",1174360578));
var low_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963__$1,new cljs.core.Keyword(null,"low-point-by-boiler","low-point-by-boiler",-912758900));
var next_high_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963__$1,new cljs.core.Keyword(null,"next-high-point-by-boiler","next-high-point-by-boiler",-2082404481));
var next_real_high_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963__$1,new cljs.core.Keyword(null,"next-real-high-point","next-real-high-point",600051673));
var real_high_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963__$1,new cljs.core.Keyword(null,"real-high-point","real-high-point",2141017698));
var G__37971 = helix.core.Fragment;
var G__37972 = ({"children": [(function (){var G__37973 = app.shared.probe.level.calibration.indicator.indicator;
var G__37974 = (function (){var obj37978 = ({"point-by-boiler-level":next_high_point_by_boiler,"w-level":(100),"digit-level":next_real_high_point,"point-pos":"cal.h","opacity":0.5,"fill":"#c83b44"});
return obj37978;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37973,G__37974) : helix.core.jsx.call(null,G__37973,G__37974));
})(),(function (){var G__37981 = app.shared.probe.level.calibration.indicator.indicator;
var G__37982 = (function (){var obj37986 = ({"point-by-boiler-level":high_point_by_boiler,"w-level":(100),"digit-level":real_high_point,"point-pos":"cal.h","opacity":(1),"fill":"#c83b44"});
return obj37986;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37981,G__37982) : helix.core.jsx.call(null,G__37981,G__37982));
})(),(function (){var G__37987 = app.shared.probe.level.calibration.indicator.indicator;
var G__37988 = (function (){var obj37992 = ({"point-by-boiler-level":low_point_by_boiler,"w-level":(0),"digit-level":low_point,"point-pos":"cal.l","opacity":(1),"fill":"#286bb7"});
return obj37992;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37987,G__37988) : helix.core.jsx.call(null,G__37987,G__37988));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37971,G__37972) : helix.core.jsxs.call(null,G__37971,G__37972));
});
if(goog.DEBUG === true){
var G__37995 = G__37958;
(G__37995.displayName = "app.shared.probe.level.calibration.core/probe-level-calibration");

return G__37995;
} else {
return G__37958;
}
})();




//# sourceMappingURL=app.shared.probe.level.calibration.core.js.map
