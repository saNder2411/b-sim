goog.provide('app.ui.shared.boiler_plant.probes.level.calibration.core');

app.ui.shared.boiler_plant.probes.level.calibration.core.level_calibration = (function (){var G__33441 = (function app$ui$shared$boiler_plant$probes$level$calibration$core$level_calibration_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33448 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var subs = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-calibration-boiler-view-subs","level-calibration-boiler-view-subs",-1283277188)], null));
var map__33455 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [subs], null));
var map__33455__$1 = cljs.core.__destructure_map(map__33455);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33455__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var points_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33455__$1,new cljs.core.Keyword(null,"points-by-boiler","points-by-boiler",-1670161510));
var G__33466 = helix.core.Fragment;
var G__33467 = ({"children": [(function (){var G__33472 = app.ui.shared.boiler_plant.probes.level.calibration.indicator.level_cal_indicator;
var G__33473 = (function (){var obj33479 = ({"point-by-boiler-level":new cljs.core.Keyword(null,"next-high","next-high",1317668914).cljs$core$IFn$_invoke$arity$1(points_by_boiler),"water-level":(100),"digit-level":new cljs.core.Keyword(null,"next-real-high","next-real-high",-818938067).cljs$core$IFn$_invoke$arity$1(points),"point-pos":"cal.h","opacity":0.5,"fill":"#c83b44"});
return obj33479;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33472,G__33473) : helix.core.jsx.call(null,G__33472,G__33473));
})(),(function (){var G__33488 = app.ui.shared.boiler_plant.probes.level.calibration.indicator.level_cal_indicator;
var G__33489 = (function (){var obj33493 = ({"point-by-boiler-level":new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(points_by_boiler),"water-level":(100),"digit-level":new cljs.core.Keyword(null,"real-high","real-high",-141901213).cljs$core$IFn$_invoke$arity$1(points),"point-pos":"cal.h","opacity":(1),"fill":"#c83b44"});
return obj33493;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33488,G__33489) : helix.core.jsx.call(null,G__33488,G__33489));
})(),(function (){var G__33500 = app.ui.shared.boiler_plant.probes.level.calibration.indicator.level_cal_indicator;
var G__33501 = (function (){var obj33505 = ({"point-by-boiler-level":new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(points_by_boiler),"water-level":(0),"digit-level":new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(points),"point-pos":"cal.l","opacity":(1),"fill":"#286bb7"});
return obj33505;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33500,G__33501) : helix.core.jsx.call(null,G__33500,G__33501));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33466,G__33467) : helix.core.jsxs.call(null,G__33466,G__33467));
});
if(goog.DEBUG === true){
var G__33516 = G__33441;
(G__33516.displayName = "app.ui.shared.boiler-plant.probes.level.calibration.core/level-calibration");

return G__33516;
} else {
return G__33441;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.probes.level.calibration.core.js.map
