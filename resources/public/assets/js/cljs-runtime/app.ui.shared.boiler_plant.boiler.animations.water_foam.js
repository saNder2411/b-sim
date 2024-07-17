goog.provide('app.ui.shared.boiler_plant.boiler.animations.water_foam');

app.ui.shared.boiler_plant.boiler.animations.water_foam.animation_water_foam = (function (){var G__33008 = (function app$ui$shared$boiler_plant$boiler$animations$water_foam$animation_water_foam_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33009 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

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
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var y = ((323.11 - (15)) + (((100) - water_level) * (323.7 / (100))));
var G__33012 = "foreignObject";
var G__33013 = (function (){var obj33020 = ({"x":410.5,"y":y,"width":(675),"height":(15),"children":(function (){var G__33021 = "div";
var G__33022 = (function (){var obj33024 = ({"className":helix.impl.props.normalize_class(["water-foam",hide_class].join(''))});
return obj33024;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33021,G__33022) : helix.core.jsx.call(null,G__33021,G__33022));
})()});
return obj33020;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33012,G__33013) : helix.core.jsx.call(null,G__33012,G__33013));
});
if(goog.DEBUG === true){
var G__33033 = G__33008;
(G__33033.displayName = "app.ui.shared.boiler-plant.boiler.animations.water-foam/animation-water-foam");

return G__33033;
} else {
return G__33008;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.boiler.animations.water_foam.js.map
