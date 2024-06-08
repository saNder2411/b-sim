goog.provide('app.connect.hot_spots');

app.connect.hot_spots.hot_spots = (function (){var G__33599 = (function app$connect$hot_spots$hot_spots_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_burner_limiter_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-burner-limiter-hot-spot","show-burner-limiter-hot-spot",696177955)], null));
var show_pump_limiter_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-pump-limiter-hot-spot","show-pump-limiter-hot-spot",-671041050)], null));
var show_cond_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-cond-controller-hot-spot","show-cond-controller-hot-spot",1097464332)], null));
var show_level_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-level-controller-hot-spot","show-level-controller-hot-spot",82610673)], null));
var show_converter_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-converter-hot-spot","show-converter-hot-spot",1180150542)], null));
var show_feedwater_valve_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feedwater-valve-hot-spot","show-feedwater-valve-hot-spot",406750489)], null));
var show_feedwater_pump_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feedwater-pump-hot-spot","show-feedwater-pump-hot-spot",1921224522)], null));
var G__33603 = helix.core.Fragment;
var G__33604 = ({"children": [(cljs.core.truth_(show_burner_limiter_hot_spot)?(function (){var G__33605 = app.shared.components.hot_spot.hot_spot;
var G__33606 = (function (){var obj33608 = ({"x":35.6,"y":9.44,"id":"burner-limiter"});
return obj33608;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33605,G__33606) : helix.core.jsx.call(null,G__33605,G__33606));
})():null),(cljs.core.truth_(show_pump_limiter_hot_spot)?(function (){var G__33609 = app.shared.components.hot_spot.hot_spot;
var G__33610 = (function (){var obj33612 = ({"x":49.6,"y":9.44,"id":"pump-limiter"});
return obj33612;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33609,G__33610) : helix.core.jsx.call(null,G__33609,G__33610));
})():null),(cljs.core.truth_(show_cond_controller_hot_spot)?(function (){var G__33613 = app.shared.components.hot_spot.hot_spot;
var G__33614 = (function (){var obj33616 = ({"x":63.6,"y":9.44,"id":"cond-controller"});
return obj33616;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33613,G__33614) : helix.core.jsx.call(null,G__33613,G__33614));
})():null),(cljs.core.truth_(show_level_controller_hot_spot)?(function (){var G__33617 = app.shared.components.hot_spot.hot_spot;
var G__33618 = (function (){var obj33620 = ({"x":77.6,"y":9.44,"id":"level-controller"});
return obj33620;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33617,G__33618) : helix.core.jsx.call(null,G__33617,G__33618));
})():null),(cljs.core.truth_(show_converter_hot_spot)?(function (){var G__33621 = app.shared.components.hot_spot.hot_spot;
var G__33622 = (function (){var obj33624 = ({"x":87.8,"y":(12),"id":"converter"});
return obj33624;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33621,G__33622) : helix.core.jsx.call(null,G__33621,G__33622));
})():null),(function (){var G__33625 = app.shared.components.hot_spot_big.hot_spot_big;
var G__33626 = (function (){var obj33628 = ({"x":38.49,"y":36.22,"id":"boiler"});
return obj33628;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33625,G__33626) : helix.core.jsx.call(null,G__33625,G__33626));
})(),(function (){var G__33629 = app.shared.components.hot_spot.hot_spot;
var G__33630 = (function (){var obj33632 = ({"x":37.8,"y":58.63,"id":"burner"});
return obj33632;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33629,G__33630) : helix.core.jsx.call(null,G__33629,G__33630));
})(),(function (){var G__33633 = app.shared.components.hot_spot.hot_spot;
var G__33634 = (function (){var obj33636 = ({"x":65.17,"y":72.41,"id":"sludge-valve"});
return obj33636;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33633,G__33634) : helix.core.jsx.call(null,G__33633,G__33634));
})(),(function (){var G__33637 = app.shared.components.hot_spot.hot_spot;
var G__33638 = (function (){var obj33640 = ({"x":54.2,"y":(69),"id":"continuous-valve"});
return obj33640;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33637,G__33638) : helix.core.jsx.call(null,G__33637,G__33638));
})(),(cljs.core.truth_(show_feedwater_valve_hot_spot)?(function (){var G__33641 = app.shared.components.hot_spot.hot_spot;
var G__33642 = (function (){var obj33644 = ({"x":84.5,"y":74.5,"id":"feedwater-valve"});
return obj33644;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33641,G__33642) : helix.core.jsx.call(null,G__33641,G__33642));
})():null),(cljs.core.truth_(show_feedwater_pump_hot_spot)?(function (){var G__33645 = app.shared.components.hot_spot.hot_spot;
var G__33646 = (function (){var obj33648 = ({"x":77.5,"y":74.5,"id":"feedwater-pump"});
return obj33648;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33645,G__33646) : helix.core.jsx.call(null,G__33645,G__33646));
})():null),(function (){var G__33649 = app.shared.components.hot_spot.hot_spot;
var G__33650 = (function (){var obj33652 = ({"x":(76),"y":29.6,"id":"level-probe"});
return obj33652;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33649,G__33650) : helix.core.jsx.call(null,G__33649,G__33650));
})(),(function (){var G__33653 = app.shared.components.hot_spot.hot_spot;
var G__33654 = (function (){var obj33656 = ({"x":2.2,"y":(49),"id":"urb"});
return obj33656;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33653,G__33654) : helix.core.jsx.call(null,G__33653,G__33654));
})(),(function (){var G__33657 = app.shared.components.hot_spot.hot_spot;
var G__33658 = (function (){var obj33660 = ({"x":65.65,"y":29.6,"id":"level-low-probe-1"});
return obj33660;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33657,G__33658) : helix.core.jsx.call(null,G__33657,G__33658));
})(),(function (){var G__33661 = app.shared.components.hot_spot.hot_spot;
var G__33662 = (function (){var obj33664 = ({"x":72.1,"y":19.4,"id":"level-low-probe-2"});
return obj33664;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33661,G__33662) : helix.core.jsx.call(null,G__33661,G__33662));
})(),(function (){var G__33665 = app.shared.components.hot_spot.hot_spot;
var G__33666 = (function (){var obj33668 = ({"x":48.8,"y":19.4,"id":"temperature-sensor"});
return obj33668;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33665,G__33666) : helix.core.jsx.call(null,G__33665,G__33666));
})(),(function (){var G__33669 = app.shared.components.hot_spot.hot_spot;
var G__33670 = (function (){var obj33672 = ({"x":69.55,"y":19.4,"id":"level-high-probe"});
return obj33672;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33669,G__33670) : helix.core.jsx.call(null,G__33669,G__33670));
})(),(function (){var G__33673 = app.shared.components.hot_spot.hot_spot;
var G__33674 = (function (){var obj33676 = ({"x":59.56,"y":43.4,"id":"cond-probe"});
return obj33676;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33673,G__33674) : helix.core.jsx.call(null,G__33673,G__33674));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33603,G__33604) : helix.core.jsxs.call(null,G__33603,G__33604));
});
if(goog.DEBUG === true){
var G__33677 = G__33599;
(G__33677.displayName = "app.connect.hot-spots/hot-spots");

return G__33677;
} else {
return G__33599;
}
})();




//# sourceMappingURL=app.connect.hot_spots.js.map
