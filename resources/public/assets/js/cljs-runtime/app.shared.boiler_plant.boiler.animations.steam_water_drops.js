goog.provide('app.shared.boiler_plant.boiler.animations.steam_water_drops');

app.shared.boiler_plant.boiler.animations.steam_water_drops.animation_steam_water_drops = (function (){var G__55865 = (function app$shared$boiler_plant$boiler$animations$steam_water_drops$animation_steam_water_drops_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__55875 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var steam__PERCENT_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-%","steam-%",259510548)], null));
var water_level = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var show_animation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run")) && ((water_level > (80))));
var hide_class = ((show_animation)?"":" hide");
var G__55884 = "foreignObject";
var G__55885 = (function (){var obj55891 = ({"x":(287),"y":189.73,"width":(69),"height":(61),"opacity":(steam__PERCENT_ / (100)),"children":(function (){var G__55898 = "div";
var G__55899 = (function (){var obj55907 = ({"className":helix.impl.props.normalize_class(["steam-water-drops",hide_class].join(''))});
return obj55907;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__55898,G__55899) : helix.core.jsx.call(null,G__55898,G__55899));
})()});
return obj55891;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__55884,G__55885) : helix.core.jsx.call(null,G__55884,G__55885));
});
if(goog.DEBUG === true){
var G__55920 = G__55865;
(G__55920.displayName = "app.shared.boiler-plant.boiler.animations.steam-water-drops/animation-steam-water-drops");

return G__55920;
} else {
return G__55865;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.animations.steam_water_drops.js.map
