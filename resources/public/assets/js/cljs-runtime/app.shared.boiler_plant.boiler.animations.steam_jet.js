goog.provide('app.shared.boiler_plant.boiler.animations.steam_jet');

app.shared.boiler_plant.boiler.animations.steam_jet.animation_steam_jet = (function (){var G__28459 = (function app$shared$boiler_plant$boiler$animations$steam_jet$animation_steam_jet_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28470 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var steam__PERCENT_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-%","steam-%",259510548)], null));
var show_animation = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run");
var hide_class = ((show_animation)?"":" hide");
var G__28519 = "foreignObject";
var G__28520 = (function (){var obj28528 = ({"x":(279),"y":57.73,"width":(87),"height":(192),"opacity":(steam__PERCENT_ / (100)),"children":(function (){var G__28569 = "div";
var G__28570 = (function (){var obj28594 = ({"className":helix.impl.props.normalize_class(["steam-jet",hide_class].join(''))});
return obj28594;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28569,G__28570) : helix.core.jsx.call(null,G__28569,G__28570));
})()});
return obj28528;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28519,G__28520) : helix.core.jsx.call(null,G__28519,G__28520));
});
if(goog.DEBUG === true){
var G__28708 = G__28459;
(G__28708.displayName = "app.shared.boiler-plant.boiler.animations.steam-jet/animation-steam-jet");

return G__28708;
} else {
return G__28459;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.animations.steam_jet.js.map
