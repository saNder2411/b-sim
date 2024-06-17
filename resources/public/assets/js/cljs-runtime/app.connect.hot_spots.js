goog.provide('app.connect.hot_spots');

app.connect.hot_spots.hot_spots = (function (){var G__43393 = (function app$connect$hot_spots$hot_spots_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__43396 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_limiter_low_level_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-limiter-low-level-hot-spot","show-limiter-low-level-hot-spot",-1095806557)], null));
var show_limiter_high_level_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-limiter-high-level-hot-spot","show-limiter-high-level-hot-spot",-690662488)], null));
var show_cond_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-cond-controller-hot-spot","show-cond-controller-hot-spot",1097464332)], null));
var show_level_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-level-controller-hot-spot","show-level-controller-hot-spot",82610673)], null));
var show_converter_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-converter-hot-spot","show-converter-hot-spot",1180150542)], null));
var show_feedwater_valve_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feedwater-valve-hot-spot","show-feedwater-valve-hot-spot",406750489)], null));
var show_feedwater_pump_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feedwater-pump-hot-spot","show-feedwater-pump-hot-spot",1921224522)], null));
var G__43399 = helix.core.Fragment;
var G__43400 = ({"children": [(cljs.core.truth_(show_limiter_low_level_hot_spot)?(function (){var G__43402 = app.shared.components.hot_spot.hot_spot;
var G__43403 = (function (){var obj43406 = ({"x":35.6,"y":9.44,"id":"limiter-low-level"});
return obj43406;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43402,G__43403) : helix.core.jsx.call(null,G__43402,G__43403));
})():null),(cljs.core.truth_(show_limiter_high_level_hot_spot)?(function (){var G__43407 = app.shared.components.hot_spot.hot_spot;
var G__43408 = (function (){var obj43410 = ({"x":49.6,"y":9.44,"id":"limiter-high-level"});
return obj43410;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43407,G__43408) : helix.core.jsx.call(null,G__43407,G__43408));
})():null),(cljs.core.truth_(show_cond_controller_hot_spot)?(function (){var G__43413 = app.shared.components.hot_spot.hot_spot;
var G__43414 = (function (){var obj43416 = ({"x":63.6,"y":9.44,"id":"cond-controller"});
return obj43416;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43413,G__43414) : helix.core.jsx.call(null,G__43413,G__43414));
})():null),(cljs.core.truth_(show_level_controller_hot_spot)?(function (){var G__43417 = app.shared.components.hot_spot.hot_spot;
var G__43418 = (function (){var obj43422 = ({"x":77.6,"y":9.44,"id":"level-controller"});
return obj43422;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43417,G__43418) : helix.core.jsx.call(null,G__43417,G__43418));
})():null),(cljs.core.truth_(show_converter_hot_spot)?(function (){var G__43423 = app.shared.components.hot_spot.hot_spot;
var G__43424 = (function (){var obj43426 = ({"x":87.8,"y":(12),"id":"converter"});
return obj43426;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43423,G__43424) : helix.core.jsx.call(null,G__43423,G__43424));
})():null),(function (){var G__43428 = app.shared.components.hot_spot_big.hot_spot_big;
var G__43429 = (function (){var obj43432 = ({"x":38.49,"y":36.22,"id":"boiler"});
return obj43432;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43428,G__43429) : helix.core.jsx.call(null,G__43428,G__43429));
})(),(function (){var G__43433 = app.shared.components.hot_spot.hot_spot;
var G__43434 = (function (){var obj43436 = ({"x":37.8,"y":58.63,"id":"burner"});
return obj43436;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43433,G__43434) : helix.core.jsx.call(null,G__43433,G__43434));
})(),(function (){var G__43437 = app.shared.components.hot_spot.hot_spot;
var G__43438 = (function (){var obj43441 = ({"x":65.17,"y":72.41,"id":"sludge-valve"});
return obj43441;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43437,G__43438) : helix.core.jsx.call(null,G__43437,G__43438));
})(),(function (){var G__43443 = app.shared.components.hot_spot.hot_spot;
var G__43444 = (function (){var obj43446 = ({"x":54.2,"y":(69),"id":"continuous-valve"});
return obj43446;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43443,G__43444) : helix.core.jsx.call(null,G__43443,G__43444));
})(),(cljs.core.truth_(show_feedwater_valve_hot_spot)?(function (){var G__43447 = app.shared.components.hot_spot.hot_spot;
var G__43448 = (function (){var obj43451 = ({"x":84.5,"y":74.5,"id":"feedwater-valve"});
return obj43451;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43447,G__43448) : helix.core.jsx.call(null,G__43447,G__43448));
})():null),(cljs.core.truth_(show_feedwater_pump_hot_spot)?(function (){var G__43453 = app.shared.components.hot_spot.hot_spot;
var G__43454 = (function (){var obj43456 = ({"x":77.5,"y":74.5,"id":"feedwater-pump"});
return obj43456;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43453,G__43454) : helix.core.jsx.call(null,G__43453,G__43454));
})():null),(function (){var G__43457 = app.shared.components.hot_spot.hot_spot;
var G__43458 = (function (){var obj43461 = ({"x":(76),"y":29.6,"id":"level-probe"});
return obj43461;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43457,G__43458) : helix.core.jsx.call(null,G__43457,G__43458));
})(),(function (){var G__43463 = app.shared.components.hot_spot.hot_spot;
var G__43464 = (function (){var obj43466 = ({"x":2.2,"y":(49),"id":"urb"});
return obj43466;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43463,G__43464) : helix.core.jsx.call(null,G__43463,G__43464));
})(),(function (){var G__43467 = app.shared.components.hot_spot.hot_spot;
var G__43468 = (function (){var obj43471 = ({"x":65.65,"y":29.6,"id":"level-low-probe-1"});
return obj43471;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43467,G__43468) : helix.core.jsx.call(null,G__43467,G__43468));
})(),(function (){var G__43473 = app.shared.components.hot_spot.hot_spot;
var G__43474 = (function (){var obj43476 = ({"x":72.1,"y":19.4,"id":"level-low-probe-2"});
return obj43476;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43473,G__43474) : helix.core.jsx.call(null,G__43473,G__43474));
})(),(function (){var G__43477 = app.shared.components.hot_spot.hot_spot;
var G__43478 = (function (){var obj43480 = ({"x":48.8,"y":19.4,"id":"temperature-sensor"});
return obj43480;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43477,G__43478) : helix.core.jsx.call(null,G__43477,G__43478));
})(),(function (){var G__43482 = app.shared.components.hot_spot.hot_spot;
var G__43483 = (function (){var obj43485 = ({"x":69.55,"y":19.4,"id":"level-high-probe"});
return obj43485;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43482,G__43483) : helix.core.jsx.call(null,G__43482,G__43483));
})(),(function (){var G__43489 = app.shared.components.hot_spot.hot_spot;
var G__43490 = (function (){var obj43492 = ({"x":59.56,"y":43.4,"id":"cond-probe"});
return obj43492;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43489,G__43490) : helix.core.jsx.call(null,G__43489,G__43490));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__43399,G__43400) : helix.core.jsxs.call(null,G__43399,G__43400));
});
if(goog.DEBUG === true){
var G__43493 = G__43393;
(G__43493.displayName = "app.connect.hot-spots/hot-spots");

return G__43493;
} else {
return G__43393;
}
})();




//# sourceMappingURL=app.connect.hot_spots.js.map
