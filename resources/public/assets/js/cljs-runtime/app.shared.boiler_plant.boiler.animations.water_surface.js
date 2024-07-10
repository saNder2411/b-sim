goog.provide('app.shared.boiler_plant.boiler.animations.water_surface');

app.shared.boiler_plant.boiler.animations.water_surface.animation_water_surface = (function (){var G__55866 = (function app$shared$boiler_plant$boiler$animations$water_surface$animation_water_surface_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__55869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var show_animation = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run");
var hide_class = ((show_animation)?"":" hide");
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var y = ((323.11 - (7)) + (((100) - water_level) * (323.7 / (100))));
var G__55882 = "foreignObject";
var G__55883 = (function (){var obj55887 = ({"x":410.5,"y":y,"width":(675),"height":(15),"children":(function (){var G__55892 = "div";
var G__55893 = (function (){var obj55901 = ({"className":helix.impl.props.normalize_class(["water-surface",hide_class].join(''))});
return obj55901;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__55892,G__55893) : helix.core.jsx.call(null,G__55892,G__55893));
})()});
return obj55887;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__55882,G__55883) : helix.core.jsx.call(null,G__55882,G__55883));
});
if(goog.DEBUG === true){
var G__55918 = G__55866;
(G__55918.displayName = "app.shared.boiler-plant.boiler.animations.water-surface/animation-water-surface");

return G__55918;
} else {
return G__55866;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.animations.water_surface.js.map
