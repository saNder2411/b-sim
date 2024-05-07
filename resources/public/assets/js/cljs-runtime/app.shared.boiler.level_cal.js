goog.provide('app.shared.boiler.level_cal');

app.shared.boiler.level_cal.level_calibration = (function (){var G__97372 = (function app$shared$boiler$level_cal$level_calibration_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__97373 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var map__97376 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-calibration-level-cal-view","NRR-2-60-calibration-level-cal-view",1904344003)], null));
var map__97376__$1 = cljs.core.__destructure_map(map__97376);
var high_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97376__$1,new cljs.core.Keyword(null,"high-point-by-boiler","high-point-by-boiler",1619736083));
var low_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97376__$1,new cljs.core.Keyword(null,"low-point","low-point",1174360578));
var low_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97376__$1,new cljs.core.Keyword(null,"low-point-by-boiler","low-point-by-boiler",-912758900));
var next_high_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97376__$1,new cljs.core.Keyword(null,"next-high-point-by-boiler","next-high-point-by-boiler",-2082404481));
var next_real_high_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97376__$1,new cljs.core.Keyword(null,"next-real-high-point","next-real-high-point",600051673));
var real_high_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__97376__$1,new cljs.core.Keyword(null,"real-high-point","real-high-point",2141017698));
var G__97377 = helix.core.Fragment;
var G__97378 = ({"children": [(function (){var G__97379 = app.shared.boiler.level_cal_indicator.level_cal_indicator;
var G__97380 = (function (){var obj97382 = ({"point-by-boiler-level":next_high_point_by_boiler,"w-level":(100),"digit-level":next_real_high_point,"point-pos":"cal.h","opacity":0.5,"fill":"#c83b44"});
return obj97382;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__97379,G__97380) : helix.core.jsx.call(null,G__97379,G__97380));
})(),(function (){var G__97383 = app.shared.boiler.level_cal_indicator.level_cal_indicator;
var G__97384 = (function (){var obj97386 = ({"point-by-boiler-level":high_point_by_boiler,"w-level":(100),"digit-level":real_high_point,"point-pos":"cal.h","opacity":(1),"fill":"#c83b44"});
return obj97386;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__97383,G__97384) : helix.core.jsx.call(null,G__97383,G__97384));
})(),(function (){var G__97387 = app.shared.boiler.level_cal_indicator.level_cal_indicator;
var G__97388 = (function (){var obj97390 = ({"point-by-boiler-level":low_point_by_boiler,"w-level":(100),"digit-level":low_point,"point-pos":"cal.l","opacity":(1),"fill":"#286bb7"});
return obj97390;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__97387,G__97388) : helix.core.jsx.call(null,G__97387,G__97388));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__97377,G__97378) : helix.core.jsxs.call(null,G__97377,G__97378));
});
if(goog.DEBUG === true){
var G__97391 = G__97372;
(G__97391.displayName = "app.shared.boiler.level-cal/level-calibration");

return G__97391;
} else {
return G__97372;
}
})();




//# sourceMappingURL=app.shared.boiler.level_cal.js.map
