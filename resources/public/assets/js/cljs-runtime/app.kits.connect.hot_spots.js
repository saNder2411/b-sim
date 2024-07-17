goog.provide('app.kits.connect.hot_spots');

app.kits.connect.hot_spots.hot_spots = (function (){var G__44918 = (function app$kits$connect$hot_spots$hot_spots_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__44922 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_limiter_low_level_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-limiter-low-level-hot-spot","show-limiter-low-level-hot-spot",-1095806557)], null));
var show_limiter_high_level_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-limiter-high-level-hot-spot","show-limiter-high-level-hot-spot",-690662488)], null));
var show_cond_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-cond-controller-hot-spot","show-cond-controller-hot-spot",1097464332)], null));
var show_level_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-level-controller-hot-spot","show-level-controller-hot-spot",82610673)], null));
var show_converter_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-converter-hot-spot","show-converter-hot-spot",1180150542)], null));
var show_feedwater_valve_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feedwater-valve-hot-spot","show-feedwater-valve-hot-spot",406750489)], null));
var show_feedwater_pump_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feedwater-pump-hot-spot","show-feedwater-pump-hot-spot",1921224522)], null));
var G__44932 = helix.core.Fragment;
var G__44933 = ({"children": [(cljs.core.truth_(show_limiter_low_level_hot_spot)?(function (){var G__44936 = app.shared.components.hot_spot.hot_spot;
var G__44937 = (function (){var obj44939 = ({"x":35.6,"y":9.44,"id":"limiter-low-level"});
return obj44939;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44936,G__44937) : helix.core.jsx.call(null,G__44936,G__44937));
})():null),(cljs.core.truth_(show_limiter_high_level_hot_spot)?(function (){var G__44943 = app.shared.components.hot_spot.hot_spot;
var G__44944 = (function (){var obj44947 = ({"x":49.6,"y":9.44,"id":"limiter-high-level"});
return obj44947;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44943,G__44944) : helix.core.jsx.call(null,G__44943,G__44944));
})():null),(cljs.core.truth_(show_cond_controller_hot_spot)?(function (){var G__44955 = app.shared.components.hot_spot.hot_spot;
var G__44956 = (function (){var obj44958 = ({"x":63.6,"y":9.44,"id":"cond-controller"});
return obj44958;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44955,G__44956) : helix.core.jsx.call(null,G__44955,G__44956));
})():null),(cljs.core.truth_(show_level_controller_hot_spot)?(function (){var G__44965 = app.shared.components.hot_spot.hot_spot;
var G__44966 = (function (){var obj44969 = ({"x":77.6,"y":9.44,"id":"level-controller"});
return obj44969;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44965,G__44966) : helix.core.jsx.call(null,G__44965,G__44966));
})():null),(cljs.core.truth_(show_converter_hot_spot)?(function (){var G__44980 = app.shared.components.hot_spot.hot_spot;
var G__44981 = (function (){var obj44987 = ({"x":87.8,"y":(12),"id":"converter"});
return obj44987;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44980,G__44981) : helix.core.jsx.call(null,G__44980,G__44981));
})():null),(function (){var G__44996 = app.shared.components.hot_spot.hot_spot_big;
var G__44997 = (function (){var obj45003 = ({"x":38.49,"y":36.22,"id":"boiler"});
return obj45003;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44996,G__44997) : helix.core.jsx.call(null,G__44996,G__44997));
})(),(function (){var G__45011 = app.shared.components.hot_spot.hot_spot;
var G__45014 = (function (){var obj45019 = ({"x":37.8,"y":58.63,"id":"burner"});
return obj45019;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45011,G__45014) : helix.core.jsx.call(null,G__45011,G__45014));
})(),(function (){var G__45028 = app.shared.components.hot_spot.hot_spot;
var G__45029 = (function (){var obj45039 = ({"x":65.17,"y":72.41,"id":"sludge-valve"});
return obj45039;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45028,G__45029) : helix.core.jsx.call(null,G__45028,G__45029));
})(),(function (){var G__45048 = app.shared.components.hot_spot.hot_spot;
var G__45049 = (function (){var obj45057 = ({"x":54.2,"y":(69),"id":"continuous-valve"});
return obj45057;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45048,G__45049) : helix.core.jsx.call(null,G__45048,G__45049));
})(),(cljs.core.truth_(show_feedwater_valve_hot_spot)?(function (){var G__45070 = app.shared.components.hot_spot.hot_spot;
var G__45073 = (function (){var obj45081 = ({"x":84.5,"y":74.5,"id":"feedwater-valve"});
return obj45081;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45070,G__45073) : helix.core.jsx.call(null,G__45070,G__45073));
})():null),(cljs.core.truth_(show_feedwater_pump_hot_spot)?(function (){var G__45090 = app.shared.components.hot_spot.hot_spot;
var G__45091 = (function (){var obj45099 = ({"x":77.5,"y":74.5,"id":"feedwater-pump"});
return obj45099;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45090,G__45091) : helix.core.jsx.call(null,G__45090,G__45091));
})():null),(function (){var G__45110 = app.shared.components.hot_spot.hot_spot;
var G__45111 = (function (){var obj45119 = ({"x":(90),"y":(61),"id":"feedwater"});
return obj45119;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45110,G__45111) : helix.core.jsx.call(null,G__45110,G__45111));
})(),(function (){var G__45128 = app.shared.components.hot_spot.hot_spot;
var G__45129 = (function (){var obj45133 = ({"x":(76),"y":29.6,"id":"level-probe"});
return obj45133;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45128,G__45129) : helix.core.jsx.call(null,G__45128,G__45129));
})(),(function (){var G__45148 = app.shared.components.hot_spot.hot_spot;
var G__45149 = (function (){var obj45155 = ({"x":2.2,"y":(49),"id":"urb"});
return obj45155;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45148,G__45149) : helix.core.jsx.call(null,G__45148,G__45149));
})(),(function (){var G__45160 = app.shared.components.hot_spot.hot_spot;
var G__45161 = (function (){var obj45167 = ({"x":65.65,"y":29.6,"id":"level-low-probe-I"});
return obj45167;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45160,G__45161) : helix.core.jsx.call(null,G__45160,G__45161));
})(),(function (){var G__45176 = app.shared.components.hot_spot.hot_spot;
var G__45177 = (function (){var obj45181 = ({"x":72.1,"y":19.4,"id":"level-low-probe-II"});
return obj45181;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45176,G__45177) : helix.core.jsx.call(null,G__45176,G__45177));
})(),(function (){var G__45184 = app.shared.components.hot_spot.hot_spot;
var G__45185 = (function (){var obj45189 = ({"x":48.8,"y":19.4,"id":"temperature-probe"});
return obj45189;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45184,G__45185) : helix.core.jsx.call(null,G__45184,G__45185));
})(),(function (){var G__45194 = app.shared.components.hot_spot.hot_spot;
var G__45195 = (function (){var obj45201 = ({"x":69.55,"y":19.4,"id":"level-high-probe"});
return obj45201;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45194,G__45195) : helix.core.jsx.call(null,G__45194,G__45195));
})(),(function (){var G__45202 = app.shared.components.hot_spot.hot_spot;
var G__45203 = (function (){var obj45207 = ({"x":59.56,"y":43.4,"id":"cond-probe"});
return obj45207;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45202,G__45203) : helix.core.jsx.call(null,G__45202,G__45203));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__44932,G__44933) : helix.core.jsxs.call(null,G__44932,G__44933));
});
if(goog.DEBUG === true){
var G__45213 = G__44918;
(G__45213.displayName = "app.kits.connect.hot-spots/hot-spots");

return G__45213;
} else {
return G__44918;
}
})();




//# sourceMappingURL=app.kits.connect.hot_spots.js.map
