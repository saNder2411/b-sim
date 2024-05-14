goog.provide('app.shared.boiler.animation_water_surface');

app.shared.boiler.animation_water_surface.water_surface = (function (){var G__42186 = (function app$shared$boiler$animation_water_surface$water_surface_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__42187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var show_animation = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run");
var hide_class = ((show_animation)?"":" hide");
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null));
var y = ((323.11 - (7)) + (((100) - water_level) * (323.7 / (100))));
var G__42190 = "foreignObject";
var G__42191 = (function (){var obj42193 = ({"x":410.5,"y":y,"width":(675),"height":(15),"children":(function (){var G__42194 = "div";
var G__42195 = (function (){var obj42197 = ({"className":helix.impl.props.normalize_class(["water-surface",hide_class].join(''))});
return obj42197;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42194,G__42195) : helix.core.jsx.call(null,G__42194,G__42195));
})()});
return obj42193;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42190,G__42191) : helix.core.jsx.call(null,G__42190,G__42191));
});
if(goog.DEBUG === true){
var G__42198 = G__42186;
(G__42198.displayName = "app.shared.boiler.animation-water-surface/water-surface");

return G__42198;
} else {
return G__42186;
}
})();




//# sourceMappingURL=app.shared.boiler.animation_water_surface.js.map
