goog.provide('app.ui.kits.connect.hot_spots');

app.ui.kits.connect.hot_spots.hot_spots = (function (){var G__29604 = (function app$ui$kits$connect$hot_spots$hot_spots_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_low_limiter_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-low-limiter-hot-spot","show-low-limiter-hot-spot",-909061148)], null));
var show_high_limiter_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-high-limiter-hot-spot","show-high-limiter-hot-spot",361134266)], null));
var show_cond_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-cond-controller-hot-spot","show-cond-controller-hot-spot",1097464332)], null));
var show_level_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-level-controller-hot-spot","show-level-controller-hot-spot",82610673)], null));
var show_converter_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-converter-hot-spot","show-converter-hot-spot",1180150542)], null));
var show_feed_valve_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feed-valve-hot-spot","show-feed-valve-hot-spot",-1314233468)], null));
var show_feed_pump_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feed-pump-hot-spot","show-feed-pump-hot-spot",-734197639)], null));
var G__29629 = helix.core.Fragment;
var G__29630 = ({"children": [(cljs.core.truth_(show_low_limiter_hot_spot)?(function (){var G__29631 = app.ui.shared.components.hot_spot.hot_spot;
var G__29632 = (function (){var obj29634 = ({"x":35.6,"y":9.44,"id":"low-limiter"});
return obj29634;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29631,G__29632) : helix.core.jsx.call(null,G__29631,G__29632));
})():null),(cljs.core.truth_(show_high_limiter_hot_spot)?(function (){var G__29642 = app.ui.shared.components.hot_spot.hot_spot;
var G__29643 = (function (){var obj29645 = ({"x":49.6,"y":9.44,"id":"limiter-high-level"});
return obj29645;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29642,G__29643) : helix.core.jsx.call(null,G__29642,G__29643));
})():null),(cljs.core.truth_(show_cond_controller_hot_spot)?(function (){var G__29650 = app.ui.shared.components.hot_spot.hot_spot;
var G__29651 = (function (){var obj29653 = ({"x":63.6,"y":9.44,"id":"cond-controller"});
return obj29653;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29650,G__29651) : helix.core.jsx.call(null,G__29650,G__29651));
})():null),(cljs.core.truth_(show_level_controller_hot_spot)?(function (){var G__29655 = app.ui.shared.components.hot_spot.hot_spot;
var G__29656 = (function (){var obj29660 = ({"x":77.6,"y":9.44,"id":"level-controller"});
return obj29660;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29655,G__29656) : helix.core.jsx.call(null,G__29655,G__29656));
})():null),(cljs.core.truth_(show_converter_hot_spot)?(function (){var G__29666 = app.ui.shared.components.hot_spot.hot_spot;
var G__29667 = (function (){var obj29672 = ({"x":87.8,"y":(12),"id":"converter"});
return obj29672;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29666,G__29667) : helix.core.jsx.call(null,G__29666,G__29667));
})():null),(function (){var G__29677 = app.ui.shared.components.hot_spot.hot_spot_big;
var G__29678 = (function (){var obj29682 = ({"x":38.49,"y":36.22,"id":"boiler"});
return obj29682;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29677,G__29678) : helix.core.jsx.call(null,G__29677,G__29678));
})(),(function (){var G__29685 = app.ui.shared.components.hot_spot.hot_spot;
var G__29686 = (function (){var obj29690 = ({"x":37.8,"y":58.63,"id":"burner"});
return obj29690;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29685,G__29686) : helix.core.jsx.call(null,G__29685,G__29686));
})(),(function (){var G__29695 = app.ui.shared.components.hot_spot.hot_spot;
var G__29696 = (function (){var obj29700 = ({"x":65.17,"y":72.41,"id":"sludge-valve"});
return obj29700;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29695,G__29696) : helix.core.jsx.call(null,G__29695,G__29696));
})(),(function (){var G__29705 = app.ui.shared.components.hot_spot.hot_spot;
var G__29706 = (function (){var obj29713 = ({"x":54.2,"y":(69),"id":"continuous-valve"});
return obj29713;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29705,G__29706) : helix.core.jsx.call(null,G__29705,G__29706));
})(),(cljs.core.truth_(show_feed_valve_hot_spot)?(function (){var G__29720 = app.ui.shared.components.hot_spot.hot_spot;
var G__29721 = (function (){var obj29727 = ({"x":84.5,"y":74.5,"id":"feed-valve"});
return obj29727;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29720,G__29721) : helix.core.jsx.call(null,G__29720,G__29721));
})():null),(cljs.core.truth_(show_feed_pump_hot_spot)?(function (){var G__29736 = app.ui.shared.components.hot_spot.hot_spot;
var G__29737 = (function (){var obj29741 = ({"x":77.5,"y":74.5,"id":"feed-pump"});
return obj29741;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29736,G__29737) : helix.core.jsx.call(null,G__29736,G__29737));
})():null),(function (){var G__29746 = app.ui.shared.components.hot_spot.hot_spot;
var G__29747 = (function (){var obj29749 = ({"x":(90),"y":(61),"id":"feedwater"});
return obj29749;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29746,G__29747) : helix.core.jsx.call(null,G__29746,G__29747));
})(),(function (){var G__29752 = app.ui.shared.components.hot_spot.hot_spot;
var G__29753 = (function (){var obj29757 = ({"x":(76),"y":29.6,"id":"level-probe"});
return obj29757;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29752,G__29753) : helix.core.jsx.call(null,G__29752,G__29753));
})(),(function (){var G__29762 = app.ui.shared.components.hot_spot.hot_spot;
var G__29763 = (function (){var obj29767 = ({"x":2.2,"y":(49),"id":"urb"});
return obj29767;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29762,G__29763) : helix.core.jsx.call(null,G__29762,G__29763));
})(),(function (){var G__29774 = app.ui.shared.components.hot_spot.hot_spot;
var G__29775 = (function (){var obj29779 = ({"x":65.65,"y":29.6,"id":"low-level-probe-I"});
return obj29779;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29774,G__29775) : helix.core.jsx.call(null,G__29774,G__29775));
})(),(function (){var G__29786 = app.ui.shared.components.hot_spot.hot_spot;
var G__29787 = (function (){var obj29790 = ({"x":72.1,"y":19.4,"id":"low-level-probe-II"});
return obj29790;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29786,G__29787) : helix.core.jsx.call(null,G__29786,G__29787));
})(),(function (){var G__29796 = app.ui.shared.components.hot_spot.hot_spot;
var G__29797 = (function (){var obj29800 = ({"x":48.8,"y":19.4,"id":"temperature-probe"});
return obj29800;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29796,G__29797) : helix.core.jsx.call(null,G__29796,G__29797));
})(),(function (){var G__29803 = app.ui.shared.components.hot_spot.hot_spot;
var G__29804 = (function (){var obj29808 = ({"x":69.55,"y":19.4,"id":"high-level-probe"});
return obj29808;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29803,G__29804) : helix.core.jsx.call(null,G__29803,G__29804));
})(),(function (){var G__29813 = app.ui.shared.components.hot_spot.hot_spot;
var G__29814 = (function (){var obj29818 = ({"x":59.56,"y":43.4,"id":"cond-probe"});
return obj29818;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29813,G__29814) : helix.core.jsx.call(null,G__29813,G__29814));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29629,G__29630) : helix.core.jsxs.call(null,G__29629,G__29630));
});
if(goog.DEBUG === true){
var G__29820 = G__29604;
(G__29820.displayName = "app.ui.kits.connect.hot-spots/hot-spots");

return G__29820;
} else {
return G__29604;
}
})();




//# sourceMappingURL=app.ui.kits.connect.hot_spots.js.map
