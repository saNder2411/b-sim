goog.provide('app.ui.kits.connect.hot_spots');

app.ui.kits.connect.hot_spots.hot_spots = (function (){var G__37625 = (function app$ui$kits$connect$hot_spots$hot_spots_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37630 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_low_limiter_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("low-limiter","show-hot-spot","low-limiter/show-hot-spot",-1386256895)], null));
var show_high_limiter_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("high-limiter","show-hot-spot","high-limiter/show-hot-spot",-1104250545)], null));
var show_cond_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cond-controller","show-hot-spot","cond-controller/show-hot-spot",867079929)], null));
var show_level_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("level-controller","show-hot-spot","level-controller/show-hot-spot",1550955607)], null));
var show_converter_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("converter","show-hot-spot","converter/show-hot-spot",-680614798)], null));
var show_feed_valve_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-valve","show-hot-spot","feed-valve/show-hot-spot",-1020837517)], null));
var show_feed_pump_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","show-hot-spot","feed-pump/show-hot-spot",122347785)], null));
var G__37634 = helix.core.Fragment;
var G__37635 = ({"children": [(cljs.core.truth_(show_low_limiter_hot_spot)?(function (){var G__37637 = app.ui.shared.components.hot_spot.hot_spot;
var G__37638 = (function (){var obj37640 = ({"x":35.6,"y":9.44,"id":"low-limiter"});
return obj37640;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37637,G__37638) : helix.core.jsx.call(null,G__37637,G__37638));
})():null),(cljs.core.truth_(show_high_limiter_hot_spot)?(function (){var G__37641 = app.ui.shared.components.hot_spot.hot_spot;
var G__37642 = (function (){var obj37645 = ({"x":49.6,"y":9.44,"id":"limiter-high-level"});
return obj37645;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37641,G__37642) : helix.core.jsx.call(null,G__37641,G__37642));
})():null),(cljs.core.truth_(show_cond_controller_hot_spot)?(function (){var G__37649 = app.ui.shared.components.hot_spot.hot_spot;
var G__37650 = (function (){var obj37654 = ({"x":63.6,"y":9.44,"id":"cond-controller"});
return obj37654;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37649,G__37650) : helix.core.jsx.call(null,G__37649,G__37650));
})():null),(cljs.core.truth_(show_level_controller_hot_spot)?(function (){var G__37657 = app.ui.shared.components.hot_spot.hot_spot;
var G__37658 = (function (){var obj37662 = ({"x":77.6,"y":9.44,"id":"level-controller"});
return obj37662;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37657,G__37658) : helix.core.jsx.call(null,G__37657,G__37658));
})():null),(cljs.core.truth_(show_converter_hot_spot)?(function (){var G__37665 = app.ui.shared.components.hot_spot.hot_spot;
var G__37666 = (function (){var obj37670 = ({"x":87.8,"y":(12),"id":"converter"});
return obj37670;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37665,G__37666) : helix.core.jsx.call(null,G__37665,G__37666));
})():null),(function (){var G__37673 = app.ui.shared.components.hot_spot.hot_spot_big;
var G__37674 = (function (){var obj37678 = ({"x":38.49,"y":36.22,"id":"boiler"});
return obj37678;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37673,G__37674) : helix.core.jsx.call(null,G__37673,G__37674));
})(),(function (){var G__37683 = app.ui.shared.components.hot_spot.hot_spot;
var G__37684 = (function (){var obj37688 = ({"x":37.8,"y":58.63,"id":"burner"});
return obj37688;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37683,G__37684) : helix.core.jsx.call(null,G__37683,G__37684));
})(),(function (){var G__37693 = app.ui.shared.components.hot_spot.hot_spot;
var G__37694 = (function (){var obj37696 = ({"x":65.17,"y":72.41,"id":"sludge-valve"});
return obj37696;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37693,G__37694) : helix.core.jsx.call(null,G__37693,G__37694));
})(),(function (){var G__37699 = app.ui.shared.components.hot_spot.hot_spot;
var G__37700 = (function (){var obj37702 = ({"x":54.2,"y":(69),"id":"continuous-valve"});
return obj37702;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37699,G__37700) : helix.core.jsx.call(null,G__37699,G__37700));
})(),(cljs.core.truth_(show_feed_valve_hot_spot)?(function (){var G__37707 = app.ui.shared.components.hot_spot.hot_spot;
var G__37708 = (function (){var obj37713 = ({"x":84.5,"y":74.5,"id":"feed-valve"});
return obj37713;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37707,G__37708) : helix.core.jsx.call(null,G__37707,G__37708));
})():null),(cljs.core.truth_(show_feed_pump_hot_spot)?(function (){var G__37716 = app.ui.shared.components.hot_spot.hot_spot;
var G__37717 = (function (){var obj37721 = ({"x":77.5,"y":74.5,"id":"feed-pump"});
return obj37721;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37716,G__37717) : helix.core.jsx.call(null,G__37716,G__37717));
})():null),(function (){var G__37724 = app.ui.shared.components.hot_spot.hot_spot;
var G__37725 = (function (){var obj37727 = ({"x":(90),"y":(61),"id":"feedwater"});
return obj37727;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37724,G__37725) : helix.core.jsx.call(null,G__37724,G__37725));
})(),(function (){var G__37730 = app.ui.shared.components.hot_spot.hot_spot;
var G__37731 = (function (){var obj37733 = ({"x":(76),"y":29.6,"id":"level-probe"});
return obj37733;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37730,G__37731) : helix.core.jsx.call(null,G__37730,G__37731));
})(),(function (){var G__37736 = app.ui.shared.components.hot_spot.hot_spot;
var G__37737 = (function (){var obj37739 = ({"x":2.2,"y":(49),"id":"urb"});
return obj37739;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37736,G__37737) : helix.core.jsx.call(null,G__37736,G__37737));
})(),(function (){var G__37747 = app.ui.shared.components.hot_spot.hot_spot;
var G__37748 = (function (){var obj37750 = ({"x":65.65,"y":29.6,"id":"low-level-probe-I"});
return obj37750;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37747,G__37748) : helix.core.jsx.call(null,G__37747,G__37748));
})(),(function (){var G__37752 = app.ui.shared.components.hot_spot.hot_spot;
var G__37753 = (function (){var obj37755 = ({"x":72.1,"y":19.4,"id":"low-level-probe-II"});
return obj37755;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37752,G__37753) : helix.core.jsx.call(null,G__37752,G__37753));
})(),(function (){var G__37756 = app.ui.shared.components.hot_spot.hot_spot;
var G__37757 = (function (){var obj37760 = ({"x":48.8,"y":19.4,"id":"temperature-probe"});
return obj37760;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37756,G__37757) : helix.core.jsx.call(null,G__37756,G__37757));
})(),(function (){var G__37761 = app.ui.shared.components.hot_spot.hot_spot;
var G__37762 = (function (){var obj37764 = ({"x":69.55,"y":19.4,"id":"high-level-probe"});
return obj37764;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37761,G__37762) : helix.core.jsx.call(null,G__37761,G__37762));
})(),(function (){var G__37765 = app.ui.shared.components.hot_spot.hot_spot;
var G__37766 = (function (){var obj37768 = ({"x":59.56,"y":43.4,"id":"cond-probe"});
return obj37768;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37765,G__37766) : helix.core.jsx.call(null,G__37765,G__37766));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37634,G__37635) : helix.core.jsxs.call(null,G__37634,G__37635));
});
if(goog.DEBUG === true){
var G__37769 = G__37625;
(G__37769.displayName = "app.ui.kits.connect.hot-spots/hot-spots");

return G__37769;
} else {
return G__37625;
}
})();




//# sourceMappingURL=app.ui.kits.connect.hot_spots.js.map
