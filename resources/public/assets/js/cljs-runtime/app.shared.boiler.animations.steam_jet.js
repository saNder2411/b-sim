goog.provide('app.shared.boiler.animations.steam_jet');

app.shared.boiler.animations.steam_jet.steam_jet = (function (){var G__35877 = (function app$shared$boiler$animations$steam_jet$steam_jet_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__35890 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var steam__PERCENT_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-%","steam-%",259510548)], null));
var show_animation = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run");
var hide_class = ((show_animation)?"":" hide");
var G__35902 = "foreignObject";
var G__35903 = (function (){var obj35905 = ({"x":(279),"y":57.73,"width":(87),"height":(192),"opacity":(steam__PERCENT_ / (100)),"children":(function (){var G__35919 = "div";
var G__35920 = (function (){var obj35934 = ({"className":helix.impl.props.normalize_class(["steam-jet",hide_class].join(''))});
return obj35934;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35919,G__35920) : helix.core.jsx.call(null,G__35919,G__35920));
})()});
return obj35905;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35902,G__35903) : helix.core.jsx.call(null,G__35902,G__35903));
});
if(goog.DEBUG === true){
var G__35971 = G__35877;
(G__35971.displayName = "app.shared.boiler.animations.steam-jet/steam-jet");

return G__35971;
} else {
return G__35877;
}
})();




//# sourceMappingURL=app.shared.boiler.animations.steam_jet.js.map
