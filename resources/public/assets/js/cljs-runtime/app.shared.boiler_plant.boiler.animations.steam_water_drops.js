goog.provide('app.shared.boiler_plant.boiler.animations.steam_water_drops');

app.shared.boiler_plant.boiler.animations.steam_water_drops.animation_steam_water_drops = (function (){var G__28462 = (function app$shared$boiler_plant$boiler$animations$steam_water_drops$animation_steam_water_drops_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28484 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var steam__PERCENT_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-%","steam-%",259510548)], null));
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && ((water_level > (80))));
var hide_class = ((show_animation)?"":" hide");
var G__28555 = "foreignObject";
var G__28557 = (function (){var obj28578 = ({"x":(287),"y":189.73,"width":(69),"height":(61),"opacity":(steam__PERCENT_ / (100)),"children":(function (){var G__28599 = "div";
var G__28600 = (function (){var obj28612 = ({"className":helix.impl.props.normalize_class(["steam-water-drops",hide_class].join(''))});
return obj28612;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28599,G__28600) : helix.core.jsx.call(null,G__28599,G__28600));
})()});
return obj28578;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28555,G__28557) : helix.core.jsx.call(null,G__28555,G__28557));
});
if(goog.DEBUG === true){
var G__28702 = G__28462;
(G__28702.displayName = "app.shared.boiler-plant.boiler.animations.steam-water-drops/animation-steam-water-drops");

return G__28702;
} else {
return G__28462;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.animations.steam_water_drops.js.map
