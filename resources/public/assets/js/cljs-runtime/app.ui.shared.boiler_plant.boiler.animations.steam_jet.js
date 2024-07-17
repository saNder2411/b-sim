goog.provide('app.ui.shared.boiler_plant.boiler.animations.steam_jet');

app.ui.shared.boiler_plant.boiler.animations.steam_jet.animation_steam_jet = (function (){var G__35021 = (function app$ui$shared$boiler_plant$boiler$animations$steam_jet$animation_steam_jet_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__35027 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var steam__PERCENT_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-%","steam-%",259510548)], null));
var show_animation = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run");
var hide_class = ((show_animation)?"":" hide");
var G__35031 = "foreignObject";
var G__35032 = (function (){var obj35034 = ({"x":(279),"y":57.73,"width":(87),"height":(192),"opacity":(steam__PERCENT_ / (100)),"children":(function (){var G__35037 = "div";
var G__35038 = (function (){var obj35042 = ({"className":helix.impl.props.normalize_class(["steam-jet",hide_class].join(''))});
return obj35042;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35037,G__35038) : helix.core.jsx.call(null,G__35037,G__35038));
})()});
return obj35034;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35031,G__35032) : helix.core.jsx.call(null,G__35031,G__35032));
});
if(goog.DEBUG === true){
var G__35047 = G__35021;
(G__35047.displayName = "app.ui.shared.boiler-plant.boiler.animations.steam-jet/animation-steam-jet");

return G__35047;
} else {
return G__35021;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.boiler.animations.steam_jet.js.map
