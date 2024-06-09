goog.provide('app.shared.boiler.animations.steam_water_drops');

app.shared.boiler.animations.steam_water_drops.steam_water_drops = (function (){var G__35876 = (function app$shared$boiler$animations$steam_water_drops$steam_water_drops_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__35882 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var steam__PERCENT_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-%","steam-%",259510548)], null));
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && ((water_level > (80))));
var hide_class = ((show_animation)?"":" hide");
var G__35927 = "foreignObject";
var G__35928 = (function (){var obj35946 = ({"x":(287),"y":189.73,"width":(69),"height":(61),"opacity":(steam__PERCENT_ / (100)),"children":(function (){var G__35955 = "div";
var G__35956 = (function (){var obj35962 = ({"className":helix.impl.props.normalize_class(["steam-water-drops",hide_class].join(''))});
return obj35962;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35955,G__35956) : helix.core.jsx.call(null,G__35955,G__35956));
})()});
return obj35946;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35927,G__35928) : helix.core.jsx.call(null,G__35927,G__35928));
});
if(goog.DEBUG === true){
var G__35982 = G__35876;
(G__35982.displayName = "app.shared.boiler.animations.steam-water-drops/steam-water-drops");

return G__35982;
} else {
return G__35876;
}
})();




//# sourceMappingURL=app.shared.boiler.animations.steam_water_drops.js.map
