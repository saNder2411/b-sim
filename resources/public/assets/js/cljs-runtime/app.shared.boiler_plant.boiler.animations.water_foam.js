goog.provide('app.shared.boiler_plant.boiler.animations.water_foam');

app.shared.boiler_plant.boiler.animations.water_foam.animation_water_foam = (function (){var G__55868 = (function app$shared$boiler_plant$boiler$animations$water_foam$animation_water_foam_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__55872 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

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
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var y = ((323.11 - (15)) + (((100) - water_level) * (323.7 / (100))));
var G__55894 = "foreignObject";
var G__55895 = (function (){var obj55904 = ({"x":410.5,"y":y,"width":(675),"height":(15),"children":(function (){var G__55908 = "div";
var G__55909 = (function (){var obj55911 = ({"className":helix.impl.props.normalize_class(["water-foam",hide_class].join(''))});
return obj55911;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__55908,G__55909) : helix.core.jsx.call(null,G__55908,G__55909));
})()});
return obj55904;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__55894,G__55895) : helix.core.jsx.call(null,G__55894,G__55895));
});
if(goog.DEBUG === true){
var G__55919 = G__55868;
(G__55919.displayName = "app.shared.boiler-plant.boiler.animations.water-foam/animation-water-foam");

return G__55919;
} else {
return G__55868;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.animations.water_foam.js.map
