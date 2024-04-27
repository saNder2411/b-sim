goog.provide('app.shared.boiler.level_cal');

app.shared.boiler.level_cal.level_calibration = (function (){var G__69277 = (function app$shared$boiler$level_cal$level_calibration_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__69278 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var map__69281 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-calibration-level-cal-view","NRR-2-60-calibration-level-cal-view",1904344003)], null));
var map__69281__$1 = cljs.core.__destructure_map(map__69281);
var high_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69281__$1,new cljs.core.Keyword(null,"high-point-by-boiler","high-point-by-boiler",1619736083));
var low_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69281__$1,new cljs.core.Keyword(null,"low-point","low-point",1174360578));
var low_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69281__$1,new cljs.core.Keyword(null,"low-point-by-boiler","low-point-by-boiler",-912758900));
var next_high_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69281__$1,new cljs.core.Keyword(null,"next-high-point-by-boiler","next-high-point-by-boiler",-2082404481));
var next_real_high_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69281__$1,new cljs.core.Keyword(null,"next-real-high-point","next-real-high-point",600051673));
var real_high_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69281__$1,new cljs.core.Keyword(null,"real-high-point","real-high-point",2141017698));
var G__69282 = helix.core.Fragment;
var G__69283 = ({"children": [(function (){var G__69284 = app.shared.boiler.level_cal_indicator.level_cal_indicator;
var G__69285 = (function (){var obj69287 = ({"point-by-boiler-level":next_high_point_by_boiler,"w-level":(100),"digit-level":next_real_high_point,"point-pos":"cal.h","opacity":0.5,"fill":"#c83b44"});
return obj69287;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__69284,G__69285) : helix.core.jsx.call(null,G__69284,G__69285));
})(),(function (){var G__69288 = app.shared.boiler.level_cal_indicator.level_cal_indicator;
var G__69289 = (function (){var obj69291 = ({"point-by-boiler-level":high_point_by_boiler,"w-level":(100),"digit-level":real_high_point,"point-pos":"cal.h","opacity":(1),"fill":"#c83b44"});
return obj69291;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__69288,G__69289) : helix.core.jsx.call(null,G__69288,G__69289));
})(),(function (){var G__69292 = app.shared.boiler.level_cal_indicator.level_cal_indicator;
var G__69293 = (function (){var obj69295 = ({"point-by-boiler-level":low_point_by_boiler,"w-level":(100),"digit-level":low_point,"point-pos":"cal.l","opacity":(1),"fill":"#286bb7"});
return obj69295;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__69292,G__69293) : helix.core.jsx.call(null,G__69292,G__69293));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__69282,G__69283) : helix.core.jsxs.call(null,G__69282,G__69283));
});
if(goog.DEBUG === true){
var G__69296 = G__69277;
(G__69296.displayName = "app.shared.boiler.level-cal/level-calibration");

return G__69296;
} else {
return G__69277;
}
})();




//# sourceMappingURL=app.shared.boiler.level_cal.js.map
