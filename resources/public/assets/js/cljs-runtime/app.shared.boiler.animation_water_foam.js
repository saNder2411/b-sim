goog.provide('app.shared.boiler.animation_water_foam');

app.shared.boiler.animation_water_foam.water_foam = (function (){var G__43102 = (function app$shared$boiler$animation_water_foam$water_foam_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__43103 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

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
var G__43107 = "foreignObject";
var G__43108 = (function (){var obj43113 = ({"x":410.5,"y":y,"width":(675),"height":(15),"children":(function (){var G__43114 = "div";
var G__43115 = (function (){var obj43117 = ({"className":helix.impl.props.normalize_class(["water-foam",hide_class].join(''))});
return obj43117;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43114,G__43115) : helix.core.jsx.call(null,G__43114,G__43115));
})()});
return obj43113;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43107,G__43108) : helix.core.jsx.call(null,G__43107,G__43108));
});
if(goog.DEBUG === true){
var G__43118 = G__43102;
(G__43118.displayName = "app.shared.boiler.animation-water-foam/water-foam");

return G__43118;
} else {
return G__43102;
}
})();




//# sourceMappingURL=app.shared.boiler.animation_water_foam.js.map
