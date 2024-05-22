goog.provide('app.shared.boiler.level_cal_indicator');

app.shared.boiler.level_cal_indicator.level_cal_indicator = (function (){var G__40879 = (function app$shared$boiler$level_cal_indicator$level_cal_indicator_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__40880 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__40883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40880,(0),null);
var map__40883__$1 = cljs.core.__destructure_map(map__40883);
var point_by_boiler_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40883__$1,new cljs.core.Keyword(null,"point-by-boiler-level","point-by-boiler-level",577526010));
var w_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40883__$1,new cljs.core.Keyword(null,"w-level","w-level",-1364613558));
var digit_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40883__$1,new cljs.core.Keyword(null,"digit-level","digit-level",1610593962));
var point_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40883__$1,new cljs.core.Keyword(null,"point-pos","point-pos",-1946723445));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40883__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40883__$1,new cljs.core.Keyword(null,"fill","fill",883462889));

var y = ((-58) + ((324) * ((1) - (point_by_boiler_level / 100.0))));
var G__40884 = "g";
var G__40885 = (function (){var obj40887 = ({"transform":["translate(0, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"opacity":opacity,"children":[(function (){var G__40888 = "polygon";
var G__40889 = (function (){var obj40891 = ({"fill":fill,"points":"885.2 382.19 892.5 379.8 892.5 384.3"});
return obj40891;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40888,G__40889) : helix.core.jsx.call(null,G__40888,G__40889));
})(),(function (){var G__40892 = "polygon";
var G__40893 = (function (){var obj40895 = ({"fill":"none","stroke":fill,"points":"890,382.2 909,382.2"});
return obj40895;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40892,G__40893) : helix.core.jsx.call(null,G__40892,G__40893));
})(),(function (){var G__40896 = "text";
var G__40897 = (function (){var obj40899 = ({"fill":fill,"x":(914),"y":386.1,"fontSize":"12px","letterSpacing":"0.025em","children":[w_level,(function (){var G__40900 = "tspan";
var G__40901 = (function (){var obj40903 = ({"fontSize":"10px","children":"% "});
return obj40903;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40900,G__40901) : helix.core.jsx.call(null,G__40900,G__40901));
})(),cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([digit_level], 0)),(function (){var G__40904 = "tspan";
var G__40905 = (function (){var obj40907 = ({"fontSize":"10px","children":["d (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(point_pos),")"].join('')});
return obj40907;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40904,G__40905) : helix.core.jsx.call(null,G__40904,G__40905));
})()]});
return obj40899;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40896,G__40897) : helix.core.jsxs.call(null,G__40896,G__40897));
})()]});
return obj40887;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40884,G__40885) : helix.core.jsxs.call(null,G__40884,G__40885));
});
if(goog.DEBUG === true){
var G__40908 = G__40879;
(G__40908.displayName = "app.shared.boiler.level-cal-indicator/level-cal-indicator");

return G__40908;
} else {
return G__40879;
}
})();




//# sourceMappingURL=app.shared.boiler.level_cal_indicator.js.map
