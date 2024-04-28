goog.provide('app.shared.boiler.animation_steam_water_drops');

app.shared.boiler.animation_steam_water_drops.steam_water_drops = (function (){var G__94235 = (function app$shared$boiler$animation_steam_water_drops$steam_water_drops_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__94236 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var steam__PERCENT_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-%","steam-%",259510548)], null));
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && ((water_level > (80))));
var hide_class = ((show_animation)?"":" hide");
var G__94239 = "foreignObject";
var G__94240 = (function (){var obj94242 = ({"x":(287),"y":189.73,"width":(69),"height":(61),"opacity":(steam__PERCENT_ / (100)),"children":(function (){var G__94243 = "div";
var G__94244 = (function (){var obj94246 = ({"className":helix.impl.props.normalize_class(["steam-water-drops",hide_class].join(''))});
return obj94246;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__94243,G__94244) : helix.core.jsx.call(null,G__94243,G__94244));
})()});
return obj94242;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__94239,G__94240) : helix.core.jsx.call(null,G__94239,G__94240));
});
if(goog.DEBUG === true){
var G__94247 = G__94235;
(G__94247.displayName = "app.shared.boiler.animation-steam-water-drops/steam-water-drops");

return G__94247;
} else {
return G__94235;
}
})();




//# sourceMappingURL=app.shared.boiler.animation_steam_water_drops.js.map
