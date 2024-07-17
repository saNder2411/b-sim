goog.provide('app.connect.hot_spots');

app.connect.hot_spots.hot_spots = (function (){var G__41642 = (function app$connect$hot_spots$hot_spots_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__41645 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_limiter_low_level_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-limiter-low-level-hot-spot","show-limiter-low-level-hot-spot",-1095806557)], null));
var show_limiter_high_level_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-limiter-high-level-hot-spot","show-limiter-high-level-hot-spot",-690662488)], null));
var show_cond_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-cond-controller-hot-spot","show-cond-controller-hot-spot",1097464332)], null));
var show_level_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-level-controller-hot-spot","show-level-controller-hot-spot",82610673)], null));
var show_converter_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-converter-hot-spot","show-converter-hot-spot",1180150542)], null));
var show_feedwater_valve_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feedwater-valve-hot-spot","show-feedwater-valve-hot-spot",406750489)], null));
var show_feedwater_pump_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feedwater-pump-hot-spot","show-feedwater-pump-hot-spot",1921224522)], null));
var G__41655 = helix.core.Fragment;
var G__41656 = ({"children": [(cljs.core.truth_(show_limiter_low_level_hot_spot)?(function (){var G__41660 = app.shared.components.hot_spot.hot_spot;
var G__41661 = (function (){var obj41666 = ({"x":35.6,"y":9.44,"id":"limiter-low-level"});
return obj41666;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41660,G__41661) : helix.core.jsx.call(null,G__41660,G__41661));
})():null),(cljs.core.truth_(show_limiter_high_level_hot_spot)?(function (){var G__41672 = app.shared.components.hot_spot.hot_spot;
var G__41673 = (function (){var obj41679 = ({"x":49.6,"y":9.44,"id":"limiter-high-level"});
return obj41679;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41672,G__41673) : helix.core.jsx.call(null,G__41672,G__41673));
})():null),(cljs.core.truth_(show_cond_controller_hot_spot)?(function (){var G__41686 = app.shared.components.hot_spot.hot_spot;
var G__41687 = (function (){var obj41691 = ({"x":63.6,"y":9.44,"id":"cond-controller"});
return obj41691;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41686,G__41687) : helix.core.jsx.call(null,G__41686,G__41687));
})():null),(cljs.core.truth_(show_level_controller_hot_spot)?(function (){var G__41697 = app.shared.components.hot_spot.hot_spot;
var G__41698 = (function (){var obj41703 = ({"x":77.6,"y":9.44,"id":"level-controller"});
return obj41703;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41697,G__41698) : helix.core.jsx.call(null,G__41697,G__41698));
})():null),(cljs.core.truth_(show_converter_hot_spot)?(function (){var G__41707 = app.shared.components.hot_spot.hot_spot;
var G__41708 = (function (){var obj41718 = ({"x":87.8,"y":(12),"id":"converter"});
return obj41718;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41707,G__41708) : helix.core.jsx.call(null,G__41707,G__41708));
})():null),(function (){var G__41721 = app.shared.components.hot_spot.hot_spot_big;
var G__41722 = (function (){var obj41728 = ({"x":38.49,"y":36.22,"id":"boiler"});
return obj41728;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41721,G__41722) : helix.core.jsx.call(null,G__41721,G__41722));
})(),(function (){var G__41739 = app.shared.components.hot_spot.hot_spot;
var G__41740 = (function (){var obj41748 = ({"x":37.8,"y":58.63,"id":"burner"});
return obj41748;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41739,G__41740) : helix.core.jsx.call(null,G__41739,G__41740));
})(),(function (){var G__41755 = app.shared.components.hot_spot.hot_spot;
var G__41756 = (function (){var obj41776 = ({"x":65.17,"y":72.41,"id":"sludge-valve"});
return obj41776;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41755,G__41756) : helix.core.jsx.call(null,G__41755,G__41756));
})(),(function (){var G__41781 = app.shared.components.hot_spot.hot_spot;
var G__41782 = (function (){var obj41788 = ({"x":54.2,"y":(69),"id":"continuous-valve"});
return obj41788;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41781,G__41782) : helix.core.jsx.call(null,G__41781,G__41782));
})(),(cljs.core.truth_(show_feedwater_valve_hot_spot)?(function (){var G__41797 = app.shared.components.hot_spot.hot_spot;
var G__41798 = (function (){var obj41802 = ({"x":84.5,"y":74.5,"id":"feedwater-valve"});
return obj41802;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41797,G__41798) : helix.core.jsx.call(null,G__41797,G__41798));
})():null),(cljs.core.truth_(show_feedwater_pump_hot_spot)?(function (){var G__41810 = app.shared.components.hot_spot.hot_spot;
var G__41811 = (function (){var obj41815 = ({"x":77.5,"y":74.5,"id":"feedwater-pump"});
return obj41815;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41810,G__41811) : helix.core.jsx.call(null,G__41810,G__41811));
})():null),(function (){var G__41820 = app.shared.components.hot_spot.hot_spot;
var G__41821 = (function (){var obj41823 = ({"x":(90),"y":(61),"id":"feedwater"});
return obj41823;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41820,G__41821) : helix.core.jsx.call(null,G__41820,G__41821));
})(),(function (){var G__41830 = app.shared.components.hot_spot.hot_spot;
var G__41831 = (function (){var obj41837 = ({"x":(76),"y":29.6,"id":"level-probe"});
return obj41837;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41830,G__41831) : helix.core.jsx.call(null,G__41830,G__41831));
})(),(function (){var G__41840 = app.shared.components.hot_spot.hot_spot;
var G__41841 = (function (){var obj41845 = ({"x":2.2,"y":(49),"id":"urb"});
return obj41845;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41840,G__41841) : helix.core.jsx.call(null,G__41840,G__41841));
})(),(function (){var G__41850 = app.shared.components.hot_spot.hot_spot;
var G__41851 = (function (){var obj41855 = ({"x":65.65,"y":29.6,"id":"level-low-probe-I"});
return obj41855;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41850,G__41851) : helix.core.jsx.call(null,G__41850,G__41851));
})(),(function (){var G__41858 = app.shared.components.hot_spot.hot_spot;
var G__41859 = (function (){var obj41861 = ({"x":72.1,"y":19.4,"id":"level-low-probe-II"});
return obj41861;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41858,G__41859) : helix.core.jsx.call(null,G__41858,G__41859));
})(),(function (){var G__41866 = app.shared.components.hot_spot.hot_spot;
var G__41867 = (function (){var obj41869 = ({"x":48.8,"y":19.4,"id":"temperature-probe"});
return obj41869;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41866,G__41867) : helix.core.jsx.call(null,G__41866,G__41867));
})(),(function (){var G__41878 = app.shared.components.hot_spot.hot_spot;
var G__41879 = (function (){var obj41902 = ({"x":69.55,"y":19.4,"id":"level-high-probe"});
return obj41902;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41878,G__41879) : helix.core.jsx.call(null,G__41878,G__41879));
})(),(function (){var G__41905 = app.shared.components.hot_spot.hot_spot;
var G__41907 = (function (){var obj41911 = ({"x":59.56,"y":43.4,"id":"cond-probe"});
return obj41911;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41905,G__41907) : helix.core.jsx.call(null,G__41905,G__41907));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41655,G__41656) : helix.core.jsxs.call(null,G__41655,G__41656));
});
if(goog.DEBUG === true){
var G__41914 = G__41642;
(G__41914.displayName = "app.connect.hot-spots/hot-spots");

return G__41914;
} else {
return G__41642;
}
})();




//# sourceMappingURL=app.connect.hot_spots.js.map
