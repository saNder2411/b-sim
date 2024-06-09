goog.provide('app.shared.boiler_plant.boiler.animations.water_foam');

app.shared.boiler_plant.boiler.animations.water_foam.animation_water_foam = (function (){var G__28455 = (function app$shared$boiler_plant$boiler$animations$water_foam$animation_water_foam_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var show_foam = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-water-foam","show-water-foam",1225501325)], null));
var show_animation = (function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run");
if(and__5043__auto__){
return show_foam;
} else {
return and__5043__auto__;
}
})();
var hide_class = (cljs.core.truth_(show_animation)?"":" hide");
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null));
var y = ((323.11 - (15)) + (((100) - water_level) * (323.7 / (100))));
var G__28549 = "foreignObject";
var G__28550 = (function (){var obj28566 = ({"x":410.5,"y":y,"width":(675),"height":(15),"children":(function (){var G__28585 = "div";
var G__28586 = (function (){var obj28602 = ({"className":helix.impl.props.normalize_class(["water-foam",hide_class].join(''))});
return obj28602;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28585,G__28586) : helix.core.jsx.call(null,G__28585,G__28586));
})()});
return obj28566;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28549,G__28550) : helix.core.jsx.call(null,G__28549,G__28550));
});
if(goog.DEBUG === true){
var G__28704 = G__28455;
(G__28704.displayName = "app.shared.boiler-plant.boiler.animations.water-foam/animation-water-foam");

return G__28704;
} else {
return G__28455;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.animations.water_foam.js.map
