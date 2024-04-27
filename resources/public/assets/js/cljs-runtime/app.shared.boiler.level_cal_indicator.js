goog.provide('app.shared.boiler.level_cal_indicator');

app.shared.boiler.level_cal_indicator.level_cal_indicator = (function (){var G__69246 = (function app$shared$boiler$level_cal_indicator$level_cal_indicator_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__69247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);
var map__69250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69247,(0),null);
var map__69250__$1 = cljs.core.__destructure_map(map__69250);
var point_by_boiler_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69250__$1,new cljs.core.Keyword(null,"point-by-boiler-level","point-by-boiler-level",577526010));
var w_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69250__$1,new cljs.core.Keyword(null,"w-level","w-level",-1364613558));
var digit_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69250__$1,new cljs.core.Keyword(null,"digit-level","digit-level",1610593962));
var point_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69250__$1,new cljs.core.Keyword(null,"point-pos","point-pos",-1946723445));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69250__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69250__$1,new cljs.core.Keyword(null,"fill","fill",883462889));

var y = ((-58) + ((324) * ((1) - (point_by_boiler_level / 100.0))));
var G__69251 = "g";
var G__69252 = (function (){var obj69254 = ({"transform":["translate(0, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"opacity":opacity,"children":[(function (){var G__69255 = "polygon";
var G__69256 = (function (){var obj69258 = ({"fill":fill,"points":"885.2 382.19 892.5 379.8 892.5 384.3"});
return obj69258;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__69255,G__69256) : helix.core.jsx.call(null,G__69255,G__69256));
})(),(function (){var G__69259 = "polygon";
var G__69260 = (function (){var obj69262 = ({"fill":"none","stroke":fill,"points":"890,382.2 909,382.2"});
return obj69262;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__69259,G__69260) : helix.core.jsx.call(null,G__69259,G__69260));
})(),(function (){var G__69263 = "text";
var G__69264 = (function (){var obj69266 = ({"fill":fill,"x":(914),"y":386.1,"fontSize":"12px","letterSpacing":"0.025em","children":[w_level,(function (){var G__69267 = "tspan";
var G__69268 = (function (){var obj69270 = ({"fontSize":"10px","children":"% "});
return obj69270;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__69267,G__69268) : helix.core.jsx.call(null,G__69267,G__69268));
})(),cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([digit_level], 0)),(function (){var G__69271 = "tspan";
var G__69272 = (function (){var obj69274 = ({"fontSize":"10px","children":["d ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(point_pos)].join('')});
return obj69274;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__69271,G__69272) : helix.core.jsx.call(null,G__69271,G__69272));
})()]});
return obj69266;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__69263,G__69264) : helix.core.jsxs.call(null,G__69263,G__69264));
})()]});
return obj69254;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__69251,G__69252) : helix.core.jsxs.call(null,G__69251,G__69252));
});
if(goog.DEBUG === true){
var G__69275 = G__69246;
(G__69275.displayName = "app.shared.boiler.level-cal-indicator/level-cal-indicator");

return G__69275;
} else {
return G__69246;
}
})();




//# sourceMappingURL=app.shared.boiler.level_cal_indicator.js.map
