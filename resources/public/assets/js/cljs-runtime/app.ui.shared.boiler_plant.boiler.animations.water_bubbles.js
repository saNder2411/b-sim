goog.provide('app.ui.shared.boiler_plant.boiler.animations.water_bubbles');

app.ui.shared.boiler_plant.boiler.animations.water_bubbles.animation_water_bubbles = (function (){var G__32890 = (function app$ui$shared$boiler_plant$boiler$animations$water_bubbles$animation_water_bubbles_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32891 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var burner_status = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(burner_status,"on")));
var hide_class = ((show_animation)?"":" hide");
var G__32894 = "foreignObject";
var G__32895 = (function (){var obj32897 = ({"x":414.71,"y":332.73,"width":(672),"height":(165),"children":(function (){var G__32898 = "div";
var G__32899 = (function (){var obj32901 = ({"style":(function (){var obj32903 = ({"display":helix.impl.props.__GT_js("flex")});
return obj32903;
})(),"children":[(function (){var G__32904 = "div";
var G__32905 = (function (){var obj32907 = ({"className":helix.impl.props.normalize_class(["water-bubbles",hide_class].join(''))});
return obj32907;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32904,G__32905) : helix.core.jsx.call(null,G__32904,G__32905));
})(),(function (){var G__32908 = "div";
var G__32909 = (function (){var obj32911 = ({"className":helix.impl.props.normalize_class(["water-bubbles",hide_class].join('')),"style":(function (){var obj32913 = ({"animationDelay":helix.impl.props.__GT_js("8.5s")});
return obj32913;
})()});
return obj32911;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32908,G__32909) : helix.core.jsx.call(null,G__32908,G__32909));
})(),(function (){var G__32914 = "div";
var G__32915 = (function (){var obj32917 = ({"className":helix.impl.props.normalize_class(["water-bubbles",hide_class].join('')),"style":(function (){var obj32919 = ({"animationDelay":helix.impl.props.__GT_js("7s")});
return obj32919;
})()});
return obj32917;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32914,G__32915) : helix.core.jsx.call(null,G__32914,G__32915));
})(),(function (){var G__32920 = "div";
var G__32921 = (function (){var obj32923 = ({"className":helix.impl.props.normalize_class(["water-bubbles",hide_class].join('')),"style":(function (){var obj32925 = ({"animationDelay":helix.impl.props.__GT_js("6.5s")});
return obj32925;
})()});
return obj32923;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32920,G__32921) : helix.core.jsx.call(null,G__32920,G__32921));
})(),(function (){var G__32926 = "div";
var G__32927 = (function (){var obj32930 = ({"className":helix.impl.props.normalize_class(["water-bubbles",hide_class].join('')),"style":(function (){var obj32932 = ({"animationDelay":helix.impl.props.__GT_js("7.7s")});
return obj32932;
})()});
return obj32930;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32926,G__32927) : helix.core.jsx.call(null,G__32926,G__32927));
})(),(function (){var G__32934 = "div";
var G__32935 = (function (){var obj32937 = ({"className":helix.impl.props.normalize_class(["water-bubbles",hide_class].join('')),"style":(function (){var obj32942 = ({"animationDelay":helix.impl.props.__GT_js("6.2s")});
return obj32942;
})()});
return obj32937;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32934,G__32935) : helix.core.jsx.call(null,G__32934,G__32935));
})()]});
return obj32901;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32898,G__32899) : helix.core.jsxs.call(null,G__32898,G__32899));
})()});
return obj32897;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32894,G__32895) : helix.core.jsx.call(null,G__32894,G__32895));
});
if(goog.DEBUG === true){
var G__32951 = G__32890;
(G__32951.displayName = "app.ui.shared.boiler-plant.boiler.animations.water-bubbles/animation-water-bubbles");

return G__32951;
} else {
return G__32890;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.boiler.animations.water_bubbles.js.map
