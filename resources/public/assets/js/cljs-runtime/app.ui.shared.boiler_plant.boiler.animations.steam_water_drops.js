goog.provide('app.ui.shared.boiler_plant.boiler.animations.steam_water_drops');

app.ui.shared.boiler_plant.boiler.animations.steam_water_drops.animation_steam_water_drops = (function (){var G__32933 = (function app$ui$shared$boiler_plant$boiler$animations$steam_water_drops$animation_steam_water_drops_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32938 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var steam__PERCENT_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-%","steam-%",259510548)], null));
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && ((water_level > (90))));
var hide_class = ((show_animation)?"":" hide");
var G__32945 = "foreignObject";
var G__32946 = (function (){var obj32959 = ({"x":(287),"y":189.73,"width":(69),"height":(61),"opacity":(steam__PERCENT_ / (100)),"children":(function (){var G__32962 = "div";
var G__32963 = (function (){var obj32965 = ({"className":helix.impl.props.normalize_class(["steam-water-drops",hide_class].join(''))});
return obj32965;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32962,G__32963) : helix.core.jsx.call(null,G__32962,G__32963));
})()});
return obj32959;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32945,G__32946) : helix.core.jsx.call(null,G__32945,G__32946));
});
if(goog.DEBUG === true){
var G__32972 = G__32933;
(G__32972.displayName = "app.ui.shared.boiler-plant.boiler.animations.steam-water-drops/animation-steam-water-drops");

return G__32972;
} else {
return G__32933;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.boiler.animations.steam_water_drops.js.map
