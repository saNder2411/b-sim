goog.provide('app.shared.boiler.level_cal');

app.shared.boiler.level_cal.level_calibration = (function (){var G__40910 = (function app$shared$boiler$level_cal$level_calibration_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__40911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var map__40914 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-calibration-level-cal-view","NRR-2-60-calibration-level-cal-view",1904344003)], null));
var map__40914__$1 = cljs.core.__destructure_map(map__40914);
var high_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40914__$1,new cljs.core.Keyword(null,"high-point-by-boiler","high-point-by-boiler",1619736083));
var low_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40914__$1,new cljs.core.Keyword(null,"low-point","low-point",1174360578));
var low_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40914__$1,new cljs.core.Keyword(null,"low-point-by-boiler","low-point-by-boiler",-912758900));
var next_high_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40914__$1,new cljs.core.Keyword(null,"next-high-point-by-boiler","next-high-point-by-boiler",-2082404481));
var next_real_high_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40914__$1,new cljs.core.Keyword(null,"next-real-high-point","next-real-high-point",600051673));
var real_high_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40914__$1,new cljs.core.Keyword(null,"real-high-point","real-high-point",2141017698));
var G__40915 = helix.core.Fragment;
var G__40916 = ({"children": [(function (){var G__40917 = app.shared.boiler.level_cal_indicator.level_cal_indicator;
var G__40918 = (function (){var obj40920 = ({"point-by-boiler-level":next_high_point_by_boiler,"w-level":(100),"digit-level":next_real_high_point,"point-pos":"cal.h","opacity":0.5,"fill":"#c83b44"});
return obj40920;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40917,G__40918) : helix.core.jsx.call(null,G__40917,G__40918));
})(),(function (){var G__40921 = app.shared.boiler.level_cal_indicator.level_cal_indicator;
var G__40922 = (function (){var obj40924 = ({"point-by-boiler-level":high_point_by_boiler,"w-level":(100),"digit-level":real_high_point,"point-pos":"cal.h","opacity":(1),"fill":"#c83b44"});
return obj40924;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40921,G__40922) : helix.core.jsx.call(null,G__40921,G__40922));
})(),(function (){var G__40925 = app.shared.boiler.level_cal_indicator.level_cal_indicator;
var G__40926 = (function (){var obj40928 = ({"point-by-boiler-level":low_point_by_boiler,"w-level":(0),"digit-level":low_point,"point-pos":"cal.l","opacity":(1),"fill":"#286bb7"});
return obj40928;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40925,G__40926) : helix.core.jsx.call(null,G__40925,G__40926));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40915,G__40916) : helix.core.jsxs.call(null,G__40915,G__40916));
});
if(goog.DEBUG === true){
var G__40929 = G__40910;
(G__40929.displayName = "app.shared.boiler.level-cal/level-calibration");

return G__40929;
} else {
return G__40910;
}
})();




//# sourceMappingURL=app.shared.boiler.level_cal.js.map
