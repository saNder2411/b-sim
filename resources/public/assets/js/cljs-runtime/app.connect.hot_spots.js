goog.provide('app.connect.hot_spots');

app.connect.hot_spots.hot_spots = (function (){var G__31596 = (function app$connect$hot_spots$hot_spots_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31597 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_limiter_low_level_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-limiter-low-level-hot-spot","show-limiter-low-level-hot-spot",-1095806557)], null));
var show_limiter_high_level_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-limiter-high-level-hot-spot","show-limiter-high-level-hot-spot",-690662488)], null));
var show_cond_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-cond-controller-hot-spot","show-cond-controller-hot-spot",1097464332)], null));
var show_level_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-level-controller-hot-spot","show-level-controller-hot-spot",82610673)], null));
var show_converter_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-converter-hot-spot","show-converter-hot-spot",1180150542)], null));
var show_feedwater_valve_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feedwater-valve-hot-spot","show-feedwater-valve-hot-spot",406750489)], null));
var show_feedwater_pump_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feedwater-pump-hot-spot","show-feedwater-pump-hot-spot",1921224522)], null));
var G__31600 = helix.core.Fragment;
var G__31601 = ({"children": [(cljs.core.truth_(show_limiter_low_level_hot_spot)?(function (){var G__31602 = app.shared.components.hot_spot.hot_spot;
var G__31603 = (function (){var obj31605 = ({"x":35.6,"y":9.44,"id":"limiter-low-level"});
return obj31605;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31602,G__31603) : helix.core.jsx.call(null,G__31602,G__31603));
})():null),(cljs.core.truth_(show_limiter_high_level_hot_spot)?(function (){var G__31606 = app.shared.components.hot_spot.hot_spot;
var G__31607 = (function (){var obj31609 = ({"x":49.6,"y":9.44,"id":"limiter-high-level"});
return obj31609;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31606,G__31607) : helix.core.jsx.call(null,G__31606,G__31607));
})():null),(cljs.core.truth_(show_cond_controller_hot_spot)?(function (){var G__31610 = app.shared.components.hot_spot.hot_spot;
var G__31611 = (function (){var obj31613 = ({"x":63.6,"y":9.44,"id":"cond-controller"});
return obj31613;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31610,G__31611) : helix.core.jsx.call(null,G__31610,G__31611));
})():null),(cljs.core.truth_(show_level_controller_hot_spot)?(function (){var G__31614 = app.shared.components.hot_spot.hot_spot;
var G__31615 = (function (){var obj31617 = ({"x":77.6,"y":9.44,"id":"level-controller"});
return obj31617;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31614,G__31615) : helix.core.jsx.call(null,G__31614,G__31615));
})():null),(cljs.core.truth_(show_converter_hot_spot)?(function (){var G__31618 = app.shared.components.hot_spot.hot_spot;
var G__31619 = (function (){var obj31621 = ({"x":87.8,"y":(12),"id":"converter"});
return obj31621;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31618,G__31619) : helix.core.jsx.call(null,G__31618,G__31619));
})():null),(function (){var G__31622 = app.shared.components.hot_spot_big.hot_spot_big;
var G__31623 = (function (){var obj31625 = ({"x":38.49,"y":36.22,"id":"boiler"});
return obj31625;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31622,G__31623) : helix.core.jsx.call(null,G__31622,G__31623));
})(),(function (){var G__31626 = app.shared.components.hot_spot.hot_spot;
var G__31627 = (function (){var obj31629 = ({"x":37.8,"y":58.63,"id":"burner"});
return obj31629;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31626,G__31627) : helix.core.jsx.call(null,G__31626,G__31627));
})(),(function (){var G__31630 = app.shared.components.hot_spot.hot_spot;
var G__31631 = (function (){var obj31633 = ({"x":65.17,"y":72.41,"id":"sludge-valve"});
return obj31633;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31630,G__31631) : helix.core.jsx.call(null,G__31630,G__31631));
})(),(function (){var G__31634 = app.shared.components.hot_spot.hot_spot;
var G__31635 = (function (){var obj31637 = ({"x":54.2,"y":(69),"id":"continuous-valve"});
return obj31637;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31634,G__31635) : helix.core.jsx.call(null,G__31634,G__31635));
})(),(cljs.core.truth_(show_feedwater_valve_hot_spot)?(function (){var G__31638 = app.shared.components.hot_spot.hot_spot;
var G__31639 = (function (){var obj31641 = ({"x":84.5,"y":74.5,"id":"feedwater-valve"});
return obj31641;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31638,G__31639) : helix.core.jsx.call(null,G__31638,G__31639));
})():null),(cljs.core.truth_(show_feedwater_pump_hot_spot)?(function (){var G__31642 = app.shared.components.hot_spot.hot_spot;
var G__31643 = (function (){var obj31645 = ({"x":77.5,"y":74.5,"id":"feedwater-pump"});
return obj31645;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31642,G__31643) : helix.core.jsx.call(null,G__31642,G__31643));
})():null),(function (){var G__31646 = app.shared.components.hot_spot.hot_spot;
var G__31647 = (function (){var obj31649 = ({"x":(76),"y":29.6,"id":"level-probe"});
return obj31649;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31646,G__31647) : helix.core.jsx.call(null,G__31646,G__31647));
})(),(function (){var G__31650 = app.shared.components.hot_spot.hot_spot;
var G__31651 = (function (){var obj31653 = ({"x":2.2,"y":(49),"id":"urb"});
return obj31653;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31650,G__31651) : helix.core.jsx.call(null,G__31650,G__31651));
})(),(function (){var G__31654 = app.shared.components.hot_spot.hot_spot;
var G__31655 = (function (){var obj31657 = ({"x":65.65,"y":29.6,"id":"level-low-probe-I"});
return obj31657;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31654,G__31655) : helix.core.jsx.call(null,G__31654,G__31655));
})(),(function (){var G__31658 = app.shared.components.hot_spot.hot_spot;
var G__31659 = (function (){var obj31661 = ({"x":72.1,"y":19.4,"id":"level-low-probe-II"});
return obj31661;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31658,G__31659) : helix.core.jsx.call(null,G__31658,G__31659));
})(),(function (){var G__31662 = app.shared.components.hot_spot.hot_spot;
var G__31663 = (function (){var obj31665 = ({"x":48.8,"y":19.4,"id":"temperature-probe"});
return obj31665;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31662,G__31663) : helix.core.jsx.call(null,G__31662,G__31663));
})(),(function (){var G__31666 = app.shared.components.hot_spot.hot_spot;
var G__31667 = (function (){var obj31669 = ({"x":69.55,"y":19.4,"id":"level-high-probe"});
return obj31669;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31666,G__31667) : helix.core.jsx.call(null,G__31666,G__31667));
})(),(function (){var G__31670 = app.shared.components.hot_spot.hot_spot;
var G__31671 = (function (){var obj31673 = ({"x":59.56,"y":43.4,"id":"cond-probe"});
return obj31673;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31670,G__31671) : helix.core.jsx.call(null,G__31670,G__31671));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31600,G__31601) : helix.core.jsxs.call(null,G__31600,G__31601));
});
if(goog.DEBUG === true){
var G__31674 = G__31596;
(G__31674.displayName = "app.connect.hot-spots/hot-spots");

return G__31674;
} else {
return G__31596;
}
})();




//# sourceMappingURL=app.connect.hot_spots.js.map
