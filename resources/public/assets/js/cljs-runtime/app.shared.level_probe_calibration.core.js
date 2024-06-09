goog.provide('app.shared.level_probe_calibration.core');

app.shared.level_probe_calibration.core.level_probe_calibration = (function (){var G__37137 = (function app$shared$level_probe_calibration$core$level_probe_calibration_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__37138 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var map__37141 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-calibration-level-cal-view","NRR-2-60-calibration-level-cal-view",1904344003)], null));
var map__37141__$1 = cljs.core.__destructure_map(map__37141);
var high_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37141__$1,new cljs.core.Keyword(null,"high-point-by-boiler","high-point-by-boiler",1619736083));
var low_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37141__$1,new cljs.core.Keyword(null,"low-point","low-point",1174360578));
var low_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37141__$1,new cljs.core.Keyword(null,"low-point-by-boiler","low-point-by-boiler",-912758900));
var next_high_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37141__$1,new cljs.core.Keyword(null,"next-high-point-by-boiler","next-high-point-by-boiler",-2082404481));
var next_real_high_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37141__$1,new cljs.core.Keyword(null,"next-real-high-point","next-real-high-point",600051673));
var real_high_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37141__$1,new cljs.core.Keyword(null,"real-high-point","real-high-point",2141017698));
var G__37142 = helix.core.Fragment;
var G__37143 = ({"children": [(function (){var G__37144 = app.shared.level_probe_calibration.indicator.indicator;
var G__37145 = (function (){var obj37147 = ({"point-by-boiler-level":next_high_point_by_boiler,"w-level":(100),"digit-level":next_real_high_point,"point-pos":"cal.h","opacity":0.5,"fill":"#c83b44"});
return obj37147;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37144,G__37145) : helix.core.jsx.call(null,G__37144,G__37145));
})(),(function (){var G__37148 = app.shared.level_probe_calibration.indicator.indicator;
var G__37149 = (function (){var obj37151 = ({"point-by-boiler-level":high_point_by_boiler,"w-level":(100),"digit-level":real_high_point,"point-pos":"cal.h","opacity":(1),"fill":"#c83b44"});
return obj37151;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37148,G__37149) : helix.core.jsx.call(null,G__37148,G__37149));
})(),(function (){var G__37152 = app.shared.level_probe_calibration.indicator.indicator;
var G__37153 = (function (){var obj37155 = ({"point-by-boiler-level":low_point_by_boiler,"w-level":(0),"digit-level":low_point,"point-pos":"cal.l","opacity":(1),"fill":"#286bb7"});
return obj37155;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37152,G__37153) : helix.core.jsx.call(null,G__37152,G__37153));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37142,G__37143) : helix.core.jsxs.call(null,G__37142,G__37143));
});
if(goog.DEBUG === true){
var G__37156 = G__37137;
(G__37156.displayName = "app.shared.level-probe-calibration.core/level-probe-calibration");

return G__37156;
} else {
return G__37137;
}
})();




//# sourceMappingURL=app.shared.level_probe_calibration.core.js.map
