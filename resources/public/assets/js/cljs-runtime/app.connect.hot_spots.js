goog.provide('app.connect.hot_spots');

app.connect.hot_spots.hot_spots = (function (){var G__64790 = (function app$connect$hot_spots$hot_spots_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__64791 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_limiter_low_level_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-limiter-low-level-hot-spot","show-limiter-low-level-hot-spot",-1095806557)], null));
var show_limiter_high_level_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-limiter-high-level-hot-spot","show-limiter-high-level-hot-spot",-690662488)], null));
var show_cond_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-cond-controller-hot-spot","show-cond-controller-hot-spot",1097464332)], null));
var show_level_controller_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-level-controller-hot-spot","show-level-controller-hot-spot",82610673)], null));
var show_converter_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-converter-hot-spot","show-converter-hot-spot",1180150542)], null));
var show_feedwater_valve_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feedwater-valve-hot-spot","show-feedwater-valve-hot-spot",406750489)], null));
var show_feedwater_pump_hot_spot = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-feedwater-pump-hot-spot","show-feedwater-pump-hot-spot",1921224522)], null));
var G__64794 = helix.core.Fragment;
var G__64795 = ({"children": [(cljs.core.truth_(show_limiter_low_level_hot_spot)?(function (){var G__64796 = app.shared.components.hot_spot.hot_spot;
var G__64797 = (function (){var obj64799 = ({"x":35.6,"y":9.44,"id":"limiter-low-level"});
return obj64799;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64796,G__64797) : helix.core.jsx.call(null,G__64796,G__64797));
})():null),(cljs.core.truth_(show_limiter_high_level_hot_spot)?(function (){var G__64800 = app.shared.components.hot_spot.hot_spot;
var G__64801 = (function (){var obj64803 = ({"x":49.6,"y":9.44,"id":"limiter-high-level"});
return obj64803;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64800,G__64801) : helix.core.jsx.call(null,G__64800,G__64801));
})():null),(cljs.core.truth_(show_cond_controller_hot_spot)?(function (){var G__64804 = app.shared.components.hot_spot.hot_spot;
var G__64805 = (function (){var obj64807 = ({"x":63.6,"y":9.44,"id":"cond-controller"});
return obj64807;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64804,G__64805) : helix.core.jsx.call(null,G__64804,G__64805));
})():null),(cljs.core.truth_(show_level_controller_hot_spot)?(function (){var G__64808 = app.shared.components.hot_spot.hot_spot;
var G__64809 = (function (){var obj64811 = ({"x":77.6,"y":9.44,"id":"level-controller"});
return obj64811;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64808,G__64809) : helix.core.jsx.call(null,G__64808,G__64809));
})():null),(cljs.core.truth_(show_converter_hot_spot)?(function (){var G__64812 = app.shared.components.hot_spot.hot_spot;
var G__64813 = (function (){var obj64815 = ({"x":87.8,"y":(12),"id":"converter"});
return obj64815;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64812,G__64813) : helix.core.jsx.call(null,G__64812,G__64813));
})():null),(function (){var G__64816 = app.shared.components.hot_spot.hot_spot_big;
var G__64817 = (function (){var obj64819 = ({"x":38.49,"y":36.22,"id":"boiler"});
return obj64819;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64816,G__64817) : helix.core.jsx.call(null,G__64816,G__64817));
})(),(function (){var G__64820 = app.shared.components.hot_spot.hot_spot;
var G__64821 = (function (){var obj64823 = ({"x":37.8,"y":58.63,"id":"burner"});
return obj64823;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64820,G__64821) : helix.core.jsx.call(null,G__64820,G__64821));
})(),(function (){var G__64824 = app.shared.components.hot_spot.hot_spot;
var G__64825 = (function (){var obj64827 = ({"x":65.17,"y":72.41,"id":"sludge-valve"});
return obj64827;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64824,G__64825) : helix.core.jsx.call(null,G__64824,G__64825));
})(),(function (){var G__64828 = app.shared.components.hot_spot.hot_spot;
var G__64829 = (function (){var obj64831 = ({"x":54.2,"y":(69),"id":"continuous-valve"});
return obj64831;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64828,G__64829) : helix.core.jsx.call(null,G__64828,G__64829));
})(),(cljs.core.truth_(show_feedwater_valve_hot_spot)?(function (){var G__64832 = app.shared.components.hot_spot.hot_spot;
var G__64833 = (function (){var obj64835 = ({"x":84.5,"y":74.5,"id":"feedwater-valve"});
return obj64835;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64832,G__64833) : helix.core.jsx.call(null,G__64832,G__64833));
})():null),(cljs.core.truth_(show_feedwater_pump_hot_spot)?(function (){var G__64836 = app.shared.components.hot_spot.hot_spot;
var G__64837 = (function (){var obj64839 = ({"x":77.5,"y":74.5,"id":"feedwater-pump"});
return obj64839;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64836,G__64837) : helix.core.jsx.call(null,G__64836,G__64837));
})():null),(function (){var G__64840 = app.shared.components.hot_spot.hot_spot;
var G__64841 = (function (){var obj64843 = ({"x":(76),"y":29.6,"id":"level-probe"});
return obj64843;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64840,G__64841) : helix.core.jsx.call(null,G__64840,G__64841));
})(),(function (){var G__64844 = app.shared.components.hot_spot.hot_spot;
var G__64845 = (function (){var obj64847 = ({"x":2.2,"y":(49),"id":"urb"});
return obj64847;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64844,G__64845) : helix.core.jsx.call(null,G__64844,G__64845));
})(),(function (){var G__64848 = app.shared.components.hot_spot.hot_spot;
var G__64849 = (function (){var obj64851 = ({"x":65.65,"y":29.6,"id":"level-low-probe-I"});
return obj64851;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64848,G__64849) : helix.core.jsx.call(null,G__64848,G__64849));
})(),(function (){var G__64852 = app.shared.components.hot_spot.hot_spot;
var G__64853 = (function (){var obj64855 = ({"x":72.1,"y":19.4,"id":"level-low-probe-II"});
return obj64855;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64852,G__64853) : helix.core.jsx.call(null,G__64852,G__64853));
})(),(function (){var G__64856 = app.shared.components.hot_spot.hot_spot;
var G__64857 = (function (){var obj64859 = ({"x":48.8,"y":19.4,"id":"temperature-probe"});
return obj64859;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64856,G__64857) : helix.core.jsx.call(null,G__64856,G__64857));
})(),(function (){var G__64860 = app.shared.components.hot_spot.hot_spot;
var G__64861 = (function (){var obj64863 = ({"x":69.55,"y":19.4,"id":"level-high-probe"});
return obj64863;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64860,G__64861) : helix.core.jsx.call(null,G__64860,G__64861));
})(),(function (){var G__64864 = app.shared.components.hot_spot.hot_spot;
var G__64865 = (function (){var obj64867 = ({"x":59.56,"y":43.4,"id":"cond-probe"});
return obj64867;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64864,G__64865) : helix.core.jsx.call(null,G__64864,G__64865));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__64794,G__64795) : helix.core.jsxs.call(null,G__64794,G__64795));
});
if(goog.DEBUG === true){
var G__64868 = G__64790;
(G__64868.displayName = "app.connect.hot-spots/hot-spots");

return G__64868;
} else {
return G__64790;
}
})();




//# sourceMappingURL=app.connect.hot_spots.js.map
