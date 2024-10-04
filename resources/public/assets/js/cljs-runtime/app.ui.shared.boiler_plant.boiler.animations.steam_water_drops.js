goog.provide('app.ui.shared.boiler_plant.boiler.animations.steam_water_drops');

app.ui.shared.boiler_plant.boiler.animations.steam_water_drops.animation_steam_water_drops = (function (){var G__39644 = (function app$ui$shared$boiler_plant$boiler$animations$steam_water_drops$animation_steam_water_drops_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__39645 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var steam__PERCENT_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-%","steam-%",259510548)], null));
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && ((water_level > (90))));
var hide_class = ((show_animation)?"":" hide");
var G__39649 = "foreignObject";
var G__39650 = (function (){var obj39652 = ({"x":(287),"y":189.73,"width":(69),"height":(61),"opacity":(steam__PERCENT_ / (100)),"children":(function (){var G__39653 = "div";
var G__39654 = (function (){var obj39656 = ({"className":helix.impl.props.normalize_class(["steam-water-drops",hide_class].join(''))});
return obj39656;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39653,G__39654) : helix.core.jsx.call(null,G__39653,G__39654));
})()});
return obj39652;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39649,G__39650) : helix.core.jsx.call(null,G__39649,G__39650));
});
if(goog.DEBUG === true){
var G__39665 = G__39644;
(G__39665.displayName = "app.ui.shared.boiler-plant.boiler.animations.steam-water-drops/animation-steam-water-drops");

return G__39665;
} else {
return G__39644;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.boiler.animations.steam_water_drops.js.map
