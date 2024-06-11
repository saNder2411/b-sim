goog.provide('app.shared.sidebar.select_kit.core');

app.shared.sidebar.select_kit.core.select_kit_menu = (function (){var G__41496 = (function app$shared$sidebar$select_kit$core$select_kit_menu_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__41497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__41500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41497,(0),null);
var map__41500__$1 = cljs.core.__destructure_map(map__41500);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41500__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41500__$1,new cljs.core.Keyword(null,"y","y",-1757859776));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var G__41501 = "g";
var G__41502 = (function (){var obj41504 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"children":[(function (){var G__41505 = app.shared.sidebar.select_kit.btn.select_kit_btn;
var G__41506 = (function (){var obj41508 = ({"x":(0),"y":(0),"label":"SPECTOR","sub-label":"module","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"module"),"disable":(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped"))),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),"module"], null));
})});
return obj41508;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41505,G__41506) : helix.core.jsx.call(null,G__41505,G__41506));
})(),(function (){var G__41509 = "path";
var G__41510 = (function (){var obj41512 = ({"fill":"#aaa","d":"M224.3,27.711l5.329-19.008h1.805l-5.316,19.008Z"});
return obj41512;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41509,G__41510) : helix.core.jsx.call(null,G__41509,G__41510));
})(),(function (){var G__41513 = app.shared.sidebar.select_kit.btn.select_kit_btn;
var G__41514 = (function (){var obj41516 = ({"x":(236),"y":(0),"label":"SPECTOR","sub-label":"connect","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,"connect"),"disable":(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped"))),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),"connect"], null));
})});
return obj41516;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41513,G__41514) : helix.core.jsx.call(null,G__41513,G__41514));
})()]});
return obj41504;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41501,G__41502) : helix.core.jsxs.call(null,G__41501,G__41502));
});
if(goog.DEBUG === true){
var G__41517 = G__41496;
(G__41517.displayName = "app.shared.sidebar.select-kit.core/select-kit-menu");

return G__41517;
} else {
return G__41496;
}
})();




//# sourceMappingURL=app.shared.sidebar.select_kit.core.js.map
