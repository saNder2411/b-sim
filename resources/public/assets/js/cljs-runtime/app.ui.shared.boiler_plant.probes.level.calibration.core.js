goog.provide('app.ui.shared.boiler_plant.probes.level.calibration.core');

app.ui.shared.boiler_plant.probes.level.calibration.core.level_calibration = (function (){var G__41548 = (function app$ui$shared$boiler_plant$probes$level$calibration$core$level_calibration_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41549 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var subs = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boiler","level-calibration-subs","boiler/level-calibration-subs",-2123117149)], null));
var map__41552 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [subs], null));
var map__41552__$1 = cljs.core.__destructure_map(map__41552);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41552__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var points_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41552__$1,new cljs.core.Keyword(null,"points-by-boiler","points-by-boiler",-1670161510));
var G__41553 = helix.core.Fragment;
var G__41554 = ({"children": [(function (){var G__41555 = app.ui.shared.boiler_plant.probes.level.calibration.indicator.level_cal_indicator;
var G__41556 = (function (){var obj41558 = ({"point-by-boiler-level":new cljs.core.Keyword(null,"next-high","next-high",1317668914).cljs$core$IFn$_invoke$arity$1(points_by_boiler),"water-level":(100),"digit-level":new cljs.core.Keyword(null,"next-real-high","next-real-high",-818938067).cljs$core$IFn$_invoke$arity$1(points),"point-pos":"cal.h","opacity":0.5,"fill":"#c83b44"});
return obj41558;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41555,G__41556) : helix.core.jsx.call(null,G__41555,G__41556));
})(),(function (){var G__41559 = app.ui.shared.boiler_plant.probes.level.calibration.indicator.level_cal_indicator;
var G__41560 = (function (){var obj41562 = ({"point-by-boiler-level":new cljs.core.Keyword(null,"high","high",2027297808).cljs$core$IFn$_invoke$arity$1(points_by_boiler),"water-level":(100),"digit-level":new cljs.core.Keyword(null,"real-high","real-high",-141901213).cljs$core$IFn$_invoke$arity$1(points),"point-pos":"cal.h","opacity":(1),"fill":"#c83b44"});
return obj41562;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41559,G__41560) : helix.core.jsx.call(null,G__41559,G__41560));
})(),(function (){var G__41563 = app.ui.shared.boiler_plant.probes.level.calibration.indicator.level_cal_indicator;
var G__41564 = (function (){var obj41566 = ({"point-by-boiler-level":new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(points_by_boiler),"water-level":(0),"digit-level":new cljs.core.Keyword(null,"low","low",-1601362409).cljs$core$IFn$_invoke$arity$1(points),"point-pos":"cal.l","opacity":(1),"fill":"#286bb7"});
return obj41566;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41563,G__41564) : helix.core.jsx.call(null,G__41563,G__41564));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41553,G__41554) : helix.core.jsxs.call(null,G__41553,G__41554));
});
if(goog.DEBUG === true){
var G__41567 = G__41548;
(G__41567.displayName = "app.ui.shared.boiler-plant.probes.level.calibration.core/level-calibration");

return G__41567;
} else {
return G__41548;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.probes.level.calibration.core.js.map
