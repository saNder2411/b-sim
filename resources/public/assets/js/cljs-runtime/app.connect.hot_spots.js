goog.provide('app.connect.hot_spots');

app.connect.hot_spots.hot_spots = (function (){var G__79950 = (function app$connect$hot_spots$hot_spots_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__79951 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_limiter_low_level_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-limiter-low-level-hot-spot","show-limiter-low-level-hot-spot",-1095806557)], null));
var show_limiter_high_level_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-limiter-high-level-hot-spot","show-limiter-high-level-hot-spot",-690662488)], null));
var show_cond_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-cond-controller-hot-spot","show-cond-controller-hot-spot",1097464332)], null));
var show_level_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-level-controller-hot-spot","show-level-controller-hot-spot",82610673)], null));
var show_converter_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-converter-hot-spot","show-converter-hot-spot",1180150542)], null));
var show_feedwater_valve_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feedwater-valve-hot-spot","show-feedwater-valve-hot-spot",406750489)], null));
var show_feedwater_pump_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feedwater-pump-hot-spot","show-feedwater-pump-hot-spot",1921224522)], null));
var G__79954 = helix.core.Fragment;
var G__79955 = ({"children": [(cljs.core.truth_(show_limiter_low_level_hot_spot)?(function (){var G__79956 = app.shared.components.hot_spot.hot_spot;
var G__79957 = (function (){var obj79959 = ({"x":35.6,"y":9.44,"id":"limiter-low-level"});
return obj79959;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__79956,G__79957) : helix.core.jsx.call(null,G__79956,G__79957));
})():null),(cljs.core.truth_(show_limiter_high_level_hot_spot)?(function (){var G__79960 = app.shared.components.hot_spot.hot_spot;
var G__79961 = (function (){var obj79963 = ({"x":49.6,"y":9.44,"id":"limiter-high-level"});
return obj79963;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__79960,G__79961) : helix.core.jsx.call(null,G__79960,G__79961));
})():null),(cljs.core.truth_(show_cond_controller_hot_spot)?(function (){var G__79964 = app.shared.components.hot_spot.hot_spot;
var G__79965 = (function (){var obj79967 = ({"x":63.6,"y":9.44,"id":"cond-controller"});
return obj79967;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__79964,G__79965) : helix.core.jsx.call(null,G__79964,G__79965));
})():null),(cljs.core.truth_(show_level_controller_hot_spot)?(function (){var G__79968 = app.shared.components.hot_spot.hot_spot;
var G__79969 = (function (){var obj79971 = ({"x":77.6,"y":9.44,"id":"level-controller"});
return obj79971;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__79968,G__79969) : helix.core.jsx.call(null,G__79968,G__79969));
})():null),(cljs.core.truth_(show_converter_hot_spot)?(function (){var G__79972 = app.shared.components.hot_spot.hot_spot;
var G__79973 = (function (){var obj79975 = ({"x":87.8,"y":(12),"id":"converter"});
return obj79975;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__79972,G__79973) : helix.core.jsx.call(null,G__79972,G__79973));
})():null),(function (){var G__79976 = app.shared.components.hot_spot.hot_spot_big;
var G__79977 = (function (){var obj79979 = ({"x":38.49,"y":36.22,"id":"boiler"});
return obj79979;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__79976,G__79977) : helix.core.jsx.call(null,G__79976,G__79977));
})(),(function (){var G__79980 = app.shared.components.hot_spot.hot_spot;
var G__79981 = (function (){var obj79983 = ({"x":37.8,"y":58.63,"id":"burner"});
return obj79983;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__79980,G__79981) : helix.core.jsx.call(null,G__79980,G__79981));
})(),(function (){var G__79984 = app.shared.components.hot_spot.hot_spot;
var G__79985 = (function (){var obj79987 = ({"x":65.17,"y":72.41,"id":"sludge-valve"});
return obj79987;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__79984,G__79985) : helix.core.jsx.call(null,G__79984,G__79985));
})(),(function (){var G__79988 = app.shared.components.hot_spot.hot_spot;
var G__79989 = (function (){var obj79991 = ({"x":54.2,"y":(69),"id":"continuous-valve"});
return obj79991;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__79988,G__79989) : helix.core.jsx.call(null,G__79988,G__79989));
})(),(cljs.core.truth_(show_feedwater_valve_hot_spot)?(function (){var G__79992 = app.shared.components.hot_spot.hot_spot;
var G__79993 = (function (){var obj79995 = ({"x":84.5,"y":74.5,"id":"feedwater-valve"});
return obj79995;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__79992,G__79993) : helix.core.jsx.call(null,G__79992,G__79993));
})():null),(cljs.core.truth_(show_feedwater_pump_hot_spot)?(function (){var G__79996 = app.shared.components.hot_spot.hot_spot;
var G__79997 = (function (){var obj79999 = ({"x":77.5,"y":74.5,"id":"feedwater-pump"});
return obj79999;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__79996,G__79997) : helix.core.jsx.call(null,G__79996,G__79997));
})():null),(function (){var G__80000 = app.shared.components.hot_spot.hot_spot;
var G__80001 = (function (){var obj80003 = ({"x":(90),"y":(61),"id":"feedwater"});
return obj80003;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80000,G__80001) : helix.core.jsx.call(null,G__80000,G__80001));
})(),(function (){var G__80004 = app.shared.components.hot_spot.hot_spot;
var G__80005 = (function (){var obj80007 = ({"x":(76),"y":29.6,"id":"level-probe"});
return obj80007;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80004,G__80005) : helix.core.jsx.call(null,G__80004,G__80005));
})(),(function (){var G__80008 = app.shared.components.hot_spot.hot_spot;
var G__80009 = (function (){var obj80011 = ({"x":2.2,"y":(49),"id":"urb"});
return obj80011;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80008,G__80009) : helix.core.jsx.call(null,G__80008,G__80009));
})(),(function (){var G__80012 = app.shared.components.hot_spot.hot_spot;
var G__80013 = (function (){var obj80015 = ({"x":65.65,"y":29.6,"id":"level-low-probe-I"});
return obj80015;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80012,G__80013) : helix.core.jsx.call(null,G__80012,G__80013));
})(),(function (){var G__80016 = app.shared.components.hot_spot.hot_spot;
var G__80017 = (function (){var obj80019 = ({"x":72.1,"y":19.4,"id":"level-low-probe-II"});
return obj80019;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80016,G__80017) : helix.core.jsx.call(null,G__80016,G__80017));
})(),(function (){var G__80020 = app.shared.components.hot_spot.hot_spot;
var G__80021 = (function (){var obj80023 = ({"x":48.8,"y":19.4,"id":"temperature-probe"});
return obj80023;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80020,G__80021) : helix.core.jsx.call(null,G__80020,G__80021));
})(),(function (){var G__80024 = app.shared.components.hot_spot.hot_spot;
var G__80025 = (function (){var obj80027 = ({"x":69.55,"y":19.4,"id":"level-high-probe"});
return obj80027;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80024,G__80025) : helix.core.jsx.call(null,G__80024,G__80025));
})(),(function (){var G__80028 = app.shared.components.hot_spot.hot_spot;
var G__80029 = (function (){var obj80031 = ({"x":59.56,"y":43.4,"id":"cond-probe"});
return obj80031;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80028,G__80029) : helix.core.jsx.call(null,G__80028,G__80029));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__79954,G__79955) : helix.core.jsxs.call(null,G__79954,G__79955));
});
if(goog.DEBUG === true){
var G__80032 = G__79950;
(G__80032.displayName = "app.connect.hot-spots/hot-spots");

return G__80032;
} else {
return G__79950;
}
})();




//# sourceMappingURL=app.connect.hot_spots.js.map
