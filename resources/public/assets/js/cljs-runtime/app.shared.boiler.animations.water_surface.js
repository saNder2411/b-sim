goog.provide('app.shared.boiler.animations.water_surface');

app.shared.boiler.animations.water_surface.water_surface = (function (){var G__35878 = (function app$shared$boiler$animations$water_surface$water_surface_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__35896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var show_animation = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run");
var hide_class = ((show_animation)?"":" hide");
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null));
var y = ((323.11 - (7)) + (((100) - water_level) * (323.7 / (100))));
var G__35913 = "foreignObject";
var G__35914 = (function (){var obj35922 = ({"x":410.5,"y":y,"width":(675),"height":(15),"children":(function (){var G__35937 = "div";
var G__35938 = (function (){var obj35942 = ({"className":helix.impl.props.normalize_class(["water-surface",hide_class].join(''))});
return obj35942;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35937,G__35938) : helix.core.jsx.call(null,G__35937,G__35938));
})()});
return obj35922;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35913,G__35914) : helix.core.jsx.call(null,G__35913,G__35914));
});
if(goog.DEBUG === true){
var G__35964 = G__35878;
(G__35964.displayName = "app.shared.boiler.animations.water-surface/water-surface");

return G__35964;
} else {
return G__35878;
}
})();




//# sourceMappingURL=app.shared.boiler.animations.water_surface.js.map
