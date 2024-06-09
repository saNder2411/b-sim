goog.provide('app.shared.boiler_plant.boiler.animations.water_surface');

app.shared.boiler_plant.boiler.animations.water_surface.animation_water_surface = (function (){var G__28461 = (function app$shared$boiler_plant$boiler$animations$water_surface$animation_water_surface_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28467 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var show_animation = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run");
var hide_class = ((show_animation)?"":" hide");
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null));
var y = ((323.11 - (7)) + (((100) - water_level) * (323.7 / (100))));
var G__28556 = "foreignObject";
var G__28558 = (function (){var obj28568 = ({"x":410.5,"y":y,"width":(675),"height":(15),"children":(function (){var G__28583 = "div";
var G__28584 = (function (){var obj28598 = ({"className":helix.impl.props.normalize_class(["water-surface",hide_class].join(''))});
return obj28598;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28583,G__28584) : helix.core.jsx.call(null,G__28583,G__28584));
})()});
return obj28568;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28556,G__28558) : helix.core.jsx.call(null,G__28556,G__28558));
});
if(goog.DEBUG === true){
var G__28700 = G__28461;
(G__28700.displayName = "app.shared.boiler-plant.boiler.animations.water-surface/animation-water-surface");

return G__28700;
} else {
return G__28461;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.animations.water_surface.js.map
