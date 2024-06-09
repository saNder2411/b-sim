goog.provide('app.shared.boiler_plant.probes.level.calibration.core');

app.shared.boiler_plant.probes.level.calibration.core.probe_level_calibration = (function (){var G__29579 = (function app$shared$boiler_plant$probes$level$calibration$core$probe_level_calibration_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29582 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var map__29587 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-calibration-level-cal-view","NRR-2-60-calibration-level-cal-view",1904344003)], null));
var map__29587__$1 = cljs.core.__destructure_map(map__29587);
var high_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29587__$1,new cljs.core.Keyword(null,"high-point-by-boiler","high-point-by-boiler",1619736083));
var low_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29587__$1,new cljs.core.Keyword(null,"low-point","low-point",1174360578));
var low_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29587__$1,new cljs.core.Keyword(null,"low-point-by-boiler","low-point-by-boiler",-912758900));
var next_high_point_by_boiler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29587__$1,new cljs.core.Keyword(null,"next-high-point-by-boiler","next-high-point-by-boiler",-2082404481));
var next_real_high_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29587__$1,new cljs.core.Keyword(null,"next-real-high-point","next-real-high-point",600051673));
var real_high_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29587__$1,new cljs.core.Keyword(null,"real-high-point","real-high-point",2141017698));
var G__29597 = helix.core.Fragment;
var G__29598 = ({"children": [(function (){var G__29603 = app.shared.boiler_plant.probes.level.calibration.indicator.level_cal_indicator;
var G__29604 = (function (){var obj29606 = ({"point-by-boiler-level":next_high_point_by_boiler,"w-level":(100),"digit-level":next_real_high_point,"point-pos":"cal.h","opacity":0.5,"fill":"#c83b44"});
return obj29606;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29603,G__29604) : helix.core.jsx.call(null,G__29603,G__29604));
})(),(function (){var G__29611 = app.shared.boiler_plant.probes.level.calibration.indicator.level_cal_indicator;
var G__29612 = (function (){var obj29614 = ({"point-by-boiler-level":high_point_by_boiler,"w-level":(100),"digit-level":real_high_point,"point-pos":"cal.h","opacity":(1),"fill":"#c83b44"});
return obj29614;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29611,G__29612) : helix.core.jsx.call(null,G__29611,G__29612));
})(),(function (){var G__29617 = app.shared.boiler_plant.probes.level.calibration.indicator.level_cal_indicator;
var G__29618 = (function (){var obj29622 = ({"point-by-boiler-level":low_point_by_boiler,"w-level":(0),"digit-level":low_point,"point-pos":"cal.l","opacity":(1),"fill":"#286bb7"});
return obj29622;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29617,G__29618) : helix.core.jsx.call(null,G__29617,G__29618));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29597,G__29598) : helix.core.jsxs.call(null,G__29597,G__29598));
});
if(goog.DEBUG === true){
var G__29628 = G__29579;
(G__29628.displayName = "app.shared.boiler-plant.probes.level.calibration.core/probe-level-calibration");

return G__29628;
} else {
return G__29579;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.probes.level.calibration.core.js.map
