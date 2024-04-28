goog.provide('app.shared.boiler.animation_steam_jet');

app.shared.boiler.animation_steam_jet.steam_jet = (function (){var G__93859 = (function app$shared$boiler$animation_steam_jet$steam_jet_render(props__27565__auto__,maybe_ref__27566__auto__){
var vec__93863 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27565__auto__),maybe_ref__27566__auto__], null);

var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var steam__PERCENT_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"steam-%","steam-%",259510548)], null));
var show_animation = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"run");
var hide_class = ((show_animation)?"":" hide");
var G__93868 = "foreignObject";
var G__93869 = (function (){var obj93873 = ({"x":(279),"y":57.73,"width":(87),"height":(192),"opacity":(steam__PERCENT_ / (100)),"children":(function (){var G__93876 = "div";
var G__93877 = (function (){var obj93881 = ({"className":helix.impl.props.normalize_class(["steam-jet",hide_class].join(''))});
return obj93881;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__93876,G__93877) : helix.core.jsx.call(null,G__93876,G__93877));
})()});
return obj93873;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__93868,G__93869) : helix.core.jsx.call(null,G__93868,G__93869));
});
if(goog.DEBUG === true){
var G__93883 = G__93859;
(G__93883.displayName = "app.shared.boiler.animation-steam-jet/steam-jet");

return G__93883;
} else {
return G__93859;
}
})();




//# sourceMappingURL=app.shared.boiler.animation_steam_jet.js.map
