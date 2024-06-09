goog.provide('app.shared.probe.level.calibration.indicator');

app.shared.probe.level.calibration.indicator.indicator = (function (){var G__37909 = (function app$shared$probe$level$calibration$indicator$indicator_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__37914 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__37917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37914,(0),null);
var map__37917__$1 = cljs.core.__destructure_map(map__37917);
var point_by_boiler_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917__$1,new cljs.core.Keyword(null,"point-by-boiler-level","point-by-boiler-level",577526010));
var w_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917__$1,new cljs.core.Keyword(null,"w-level","w-level",-1364613558));
var digit_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917__$1,new cljs.core.Keyword(null,"digit-level","digit-level",1610593962));
var point_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917__$1,new cljs.core.Keyword(null,"point-pos","point-pos",-1946723445));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37917__$1,new cljs.core.Keyword(null,"fill","fill",883462889));

var y = ((-58) + ((324) * ((1) - (point_by_boiler_level / 100.0))));
var G__37924 = "g";
var G__37925 = (function (){var obj37929 = ({"transform":["translate(0, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"opacity":opacity,"children":[(function (){var G__37930 = "polygon";
var G__37931 = (function (){var obj37935 = ({"fill":fill,"points":"885.2 382.19 892.5 379.8 892.5 384.3"});
return obj37935;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37930,G__37931) : helix.core.jsx.call(null,G__37930,G__37931));
})(),(function (){var G__37938 = "polygon";
var G__37939 = (function (){var obj37941 = ({"fill":"none","stroke":fill,"points":"890,382.2 909,382.2"});
return obj37941;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37938,G__37939) : helix.core.jsx.call(null,G__37938,G__37939));
})(),(function (){var G__37942 = "text";
var G__37943 = (function (){var obj37946 = ({"fill":fill,"x":(914),"y":386.1,"fontSize":"12px","letterSpacing":"0.025em","children":[w_level,(function (){var G__37947 = "tspan";
var G__37948 = (function (){var obj37950 = ({"fontSize":"10px","children":"% "});
return obj37950;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37947,G__37948) : helix.core.jsx.call(null,G__37947,G__37948));
})(),cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"~d",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([digit_level], 0)),(function (){var G__37951 = "tspan";
var G__37952 = (function (){var obj37954 = ({"fontSize":"10px","children":["d (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(point_pos),")"].join('')});
return obj37954;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37951,G__37952) : helix.core.jsx.call(null,G__37951,G__37952));
})()]});
return obj37946;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37942,G__37943) : helix.core.jsxs.call(null,G__37942,G__37943));
})()]});
return obj37929;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37924,G__37925) : helix.core.jsxs.call(null,G__37924,G__37925));
});
if(goog.DEBUG === true){
var G__37955 = G__37909;
(G__37955.displayName = "app.shared.probe.level.calibration.indicator/indicator");

return G__37955;
} else {
return G__37909;
}
})();




//# sourceMappingURL=app.shared.probe.level.calibration.indicator.js.map
