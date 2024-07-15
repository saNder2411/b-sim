goog.provide('app.shared.boiler_plant.probes.level.calibration.core');

app.shared.boiler_plant.probes.level.calibration.core.probe_level_calibration = (function (){var G__33050 = (function app$shared$boiler_plant$probes$level$calibration$core$probe_level_calibration_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33053 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var subs = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level-probe-calibration-boiler-view-subs","level-probe-calibration-boiler-view-subs",-1042484753)], null));
var map__33056 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [subs], null));
var map__33056__$1 = cljs.core.__destructure_map(map__33056);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33056__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var points_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33056__$1,new cljs.core.Keyword(null,"points-by-boiler","points-by-boiler",-1670161510));
var G__33058 = helix.core.Fragment;
var G__33059 = ({"children": [(function (){var G__33060 = app.shared.boiler_plant.probes.level.calibration.indicator.level_cal_indicator;
var G__33061 = (function (){var obj33063 = ({"point-by-boiler-level":new cljs.core.Keyword(null,"next-high","next-high",1317668914).cljs$core$IFn$_invoke$arity$1(points_by_boiler),"water-level":(100),"digit-level":new cljs.core.Keyword(null,"next-real-high","next-real-high",-818938067).cljs$core$IFn$_invoke$arity$1(points),"point-pos":"cal.h","opacity":0.5,"fill":"#c83b44"});
return obj33063;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33060,G__33061) : helix.core.jsx.call(null,G__33060,G__33061));
})(),(function (){var G__33064 = app.shared.boiler_plant.probes.level.calibration.indicator.level_cal_indicator;
var G__33065 = (function (){var obj33067 = ({"point-by-boiler-level":new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(points_by_boiler),"water-level":(100),"digit-level":new cljs.core.Keyword(null,"real-high","real-high",-141901213).cljs$core$IFn$_invoke$arity$1(points),"point-pos":"cal.h","opacity":(1),"fill":"#c83b44"});
return obj33067;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33064,G__33065) : helix.core.jsx.call(null,G__33064,G__33065));
})(),(function (){var G__33068 = app.shared.boiler_plant.probes.level.calibration.indicator.level_cal_indicator;
var G__33069 = (function (){var obj33072 = ({"point-by-boiler-level":new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(points_by_boiler),"water-level":(0),"digit-level":new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(points),"point-pos":"cal.l","opacity":(1),"fill":"#286bb7"});
return obj33072;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33068,G__33069) : helix.core.jsx.call(null,G__33068,G__33069));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33058,G__33059) : helix.core.jsxs.call(null,G__33058,G__33059));
});
if(goog.DEBUG === true){
var G__33076 = G__33050;
(G__33076.displayName = "app.shared.boiler-plant.probes.level.calibration.core/probe-level-calibration");

return G__33076;
} else {
return G__33050;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.probes.level.calibration.core.js.map
