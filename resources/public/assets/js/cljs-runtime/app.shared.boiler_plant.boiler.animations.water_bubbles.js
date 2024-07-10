goog.provide('app.shared.boiler_plant.boiler.animations.water_bubbles');

app.shared.boiler_plant.boiler.animations.water_bubbles.animation_water_bubbles = (function (){var G__54261 = (function app$shared$boiler_plant$boiler$animations$water_bubbles$animation_water_bubbles_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__54270 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var burner_status = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(burner_status,"on")));
var hide_class = ((show_animation)?"":" hide");
var G__54289 = "foreignObject";
var G__54290 = (function (){var obj54296 = ({"x":414.71,"y":332.73,"width":(672),"height":(165),"children":(function (){var G__54305 = "div";
var G__54306 = (function (){var obj54316 = ({"style":(function (){var obj54318 = ({"display":helix.impl.props.__GT_js("flex")});
return obj54318;
})(),"children":[(function (){var G__54328 = "div";
var G__54329 = (function (){var obj54333 = ({"className":helix.impl.props.normalize_class(["water-bubbles",hide_class].join(''))});
return obj54333;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54328,G__54329) : helix.core.jsx.call(null,G__54328,G__54329));
})(),(function (){var G__54344 = "div";
var G__54345 = (function (){var obj54349 = ({"className":helix.impl.props.normalize_class(["water-bubbles",hide_class].join('')),"style":(function (){var obj54358 = ({"animationDelay":helix.impl.props.__GT_js("8.5s")});
return obj54358;
})()});
return obj54349;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54344,G__54345) : helix.core.jsx.call(null,G__54344,G__54345));
})(),(function (){var G__54363 = "div";
var G__54364 = (function (){var obj54372 = ({"className":helix.impl.props.normalize_class(["water-bubbles",hide_class].join('')),"style":(function (){var obj54376 = ({"animationDelay":helix.impl.props.__GT_js("7s")});
return obj54376;
})()});
return obj54372;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54363,G__54364) : helix.core.jsx.call(null,G__54363,G__54364));
})(),(function (){var G__54382 = "div";
var G__54383 = (function (){var obj54386 = ({"className":helix.impl.props.normalize_class(["water-bubbles",hide_class].join('')),"style":(function (){var obj54391 = ({"animationDelay":helix.impl.props.__GT_js("6.5s")});
return obj54391;
})()});
return obj54386;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54382,G__54383) : helix.core.jsx.call(null,G__54382,G__54383));
})(),(function (){var G__54402 = "div";
var G__54403 = (function (){var obj54407 = ({"className":helix.impl.props.normalize_class(["water-bubbles",hide_class].join('')),"style":(function (){var obj54414 = ({"animationDelay":helix.impl.props.__GT_js("7.7s")});
return obj54414;
})()});
return obj54407;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54402,G__54403) : helix.core.jsx.call(null,G__54402,G__54403));
})(),(function (){var G__54419 = "div";
var G__54421 = (function (){var obj54426 = ({"className":helix.impl.props.normalize_class(["water-bubbles",hide_class].join('')),"style":(function (){var obj54428 = ({"animationDelay":helix.impl.props.__GT_js("6.2s")});
return obj54428;
})()});
return obj54426;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54419,G__54421) : helix.core.jsx.call(null,G__54419,G__54421));
})()]});
return obj54316;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__54305,G__54306) : helix.core.jsxs.call(null,G__54305,G__54306));
})()});
return obj54296;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54289,G__54290) : helix.core.jsx.call(null,G__54289,G__54290));
});
if(goog.DEBUG === true){
var G__54430 = G__54261;
(G__54430.displayName = "app.shared.boiler-plant.boiler.animations.water-bubbles/animation-water-bubbles");

return G__54430;
} else {
return G__54261;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.animations.water_bubbles.js.map
