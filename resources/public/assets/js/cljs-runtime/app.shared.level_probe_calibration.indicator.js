goog.provide('app.shared.level_probe_calibration.indicator');

app.shared.level_probe_calibration.indicator.indicator = (function (){var G__37106 = (function app$shared$level_probe_calibration$indicator$indicator_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__37107 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__37110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37107,(0),null);
var map__37110__$1 = cljs.core.__destructure_map(map__37110);
var point_by_boiler_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37110__$1,new cljs.core.Keyword(null,"point-by-boiler-level","point-by-boiler-level",577526010));
var w_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37110__$1,new cljs.core.Keyword(null,"w-level","w-level",-1364613558));
var digit_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37110__$1,new cljs.core.Keyword(null,"digit-level","digit-level",1610593962));
var point_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37110__$1,new cljs.core.Keyword(null,"point-pos","point-pos",-1946723445));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37110__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37110__$1,new cljs.core.Keyword(null,"fill","fill",883462889));

var y = ((-58) + ((324) * ((1) - (point_by_boiler_level / 100.0))));
var G__37111 = "g";
var G__37112 = (function (){var obj37114 = ({"transform":["translate(0, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"opacity":opacity,"children":[(function (){var G__37115 = "polygon";
var G__37116 = (function (){var obj37118 = ({"fill":fill,"points":"885.2 382.19 892.5 379.8 892.5 384.3"});
return obj37118;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37115,G__37116) : helix.core.jsx.call(null,G__37115,G__37116));
})(),(function (){var G__37119 = "polygon";
var G__37120 = (function (){var obj37122 = ({"fill":"none","stroke":fill,"points":"890,382.2 909,382.2"});
return obj37122;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37119,G__37120) : helix.core.jsx.call(null,G__37119,G__37120));
})(),(function (){var G__37123 = "text";
var G__37124 = (function (){var obj37126 = ({"fill":fill,"x":(914),"y":386.1,"fontSize":"12px","letterSpacing":"0.025em","children":[w_level,(function (){var G__37127 = "tspan";
var G__37128 = (function (){var obj37130 = ({"fontSize":"10px","children":"% "});
return obj37130;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37127,G__37128) : helix.core.jsx.call(null,G__37127,G__37128));
})(),cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([digit_level], 0)),(function (){var G__37131 = "tspan";
var G__37132 = (function (){var obj37134 = ({"fontSize":"10px","children":["d (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(point_pos),")"].join('')});
return obj37134;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37131,G__37132) : helix.core.jsx.call(null,G__37131,G__37132));
})()]});
return obj37126;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37123,G__37124) : helix.core.jsxs.call(null,G__37123,G__37124));
})()]});
return obj37114;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37111,G__37112) : helix.core.jsxs.call(null,G__37111,G__37112));
});
if(goog.DEBUG === true){
var G__37135 = G__37106;
(G__37135.displayName = "app.shared.level-probe-calibration.indicator/indicator");

return G__37135;
} else {
return G__37106;
}
})();




//# sourceMappingURL=app.shared.level_probe_calibration.indicator.js.map
