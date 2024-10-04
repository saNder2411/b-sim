goog.provide('app.ui.shared.boiler_plant.boiler.animations.water_foam');

app.ui.shared.boiler_plant.boiler.animations.water_foam.animation_water_foam = (function (){var G__41507 = (function app$ui$shared$boiler_plant$boiler$animations$water_foam$animation_water_foam_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41508 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var show_foam = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boiler","show-water-foam","boiler/show-water-foam",327430060)], null));
var show_animation = (function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run");
if(and__5043__auto__){
return show_foam;
} else {
return and__5043__auto__;
}
})();
var hide_class = (cljs.core.truth_(show_animation)?"":" hide");
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var y = ((323.11 - (15)) + (((100) - water_level) * (323.7 / (100))));
var G__41511 = "foreignObject";
var G__41512 = (function (){var obj41514 = ({"x":410.5,"y":y,"width":(675),"height":(15),"children":(function (){var G__41515 = "div";
var G__41516 = (function (){var obj41518 = ({"className":helix.impl.props.normalize_class(["water-foam",hide_class].join(''))});
return obj41518;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41515,G__41516) : helix.core.jsx.call(null,G__41515,G__41516));
})()});
return obj41514;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41511,G__41512) : helix.core.jsx.call(null,G__41511,G__41512));
});
if(goog.DEBUG === true){
var G__41519 = G__41507;
(G__41519.displayName = "app.ui.shared.boiler-plant.boiler.animations.water-foam/animation-water-foam");

return G__41519;
} else {
return G__41507;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.boiler.animations.water_foam.js.map
