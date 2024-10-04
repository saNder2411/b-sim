goog.provide('app.ui.shared.boiler_plant.boiler.animations.water_surface');

app.ui.shared.boiler_plant.boiler.animations.water_surface.animation_water_surface = (function (){var G__39658 = (function app$ui$shared$boiler_plant$boiler$animations$water_surface$animation_water_surface_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__39659 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var show_animation = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run");
var hide_class = ((show_animation)?"":" hide");
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var y = ((323.11 - (7)) + (((100) - water_level) * (323.7 / (100))));
var G__39666 = "foreignObject";
var G__39667 = (function (){var obj39669 = ({"x":410.5,"y":y,"width":(675),"height":(15),"children":(function (){var G__39670 = "div";
var G__39671 = (function (){var obj39673 = ({"className":helix.impl.props.normalize_class(["water-surface",hide_class].join(''))});
return obj39673;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39670,G__39671) : helix.core.jsx.call(null,G__39670,G__39671));
})()});
return obj39669;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39666,G__39667) : helix.core.jsx.call(null,G__39666,G__39667));
});
if(goog.DEBUG === true){
var G__39682 = G__39658;
(G__39682.displayName = "app.ui.shared.boiler-plant.boiler.animations.water-surface/animation-water-surface");

return G__39682;
} else {
return G__39658;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.boiler.animations.water_surface.js.map
