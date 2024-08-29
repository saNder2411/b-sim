goog.provide('app.ui.shared.sidebar.select_kit.core');

app.ui.shared.sidebar.select_kit.core.select_kit_menu = (function (){var G__39268 = (function app$ui$shared$sidebar$select_kit$core$select_kit_menu_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__39273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);
var map__39282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39273,(0),null);
var map__39282__$1 = cljs.core.__destructure_map(map__39282);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39282__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39282__$1,new cljs.core.Keyword(null,"y","y",-1757859776));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var G__39290 = "g";
var G__39291 = (function (){var obj39312 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"children":[(function (){var G__39322 = app.ui.shared.sidebar.select_kit.btn.select_kit_btn;
var G__39323 = (function (){var obj39326 = ({"x":(0),"y":(0),"label":"SPECTOR","sub-label":"module","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,new cljs.core.Keyword(null,"module","module",1424618191)),"disable":cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stop"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),new cljs.core.Keyword(null,"module","module",1424618191)], null));
})});
return obj39326;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39322,G__39323) : helix.core.jsx.call(null,G__39322,G__39323));
})(),(function (){var G__39339 = "path";
var G__39341 = (function (){var obj39350 = ({"fill":"#aaa","d":"M224.3,27.711l5.329-19.008h1.805l-5.316,19.008Z"});
return obj39350;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39339,G__39341) : helix.core.jsx.call(null,G__39339,G__39341));
})(),(function (){var G__39362 = app.ui.shared.sidebar.select_kit.btn.select_kit_btn;
var G__39363 = (function (){var obj39366 = ({"x":(236),"y":(0),"label":"SPECTOR","sub-label":"connect","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,new cljs.core.Keyword(null,"connect","connect",1232828233)),"disable":cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stop"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),new cljs.core.Keyword(null,"connect","connect",1232828233)], null));
})});
return obj39366;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39362,G__39363) : helix.core.jsx.call(null,G__39362,G__39363));
})()]});
return obj39312;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39290,G__39291) : helix.core.jsxs.call(null,G__39290,G__39291));
});
if(goog.DEBUG === true){
var G__39381 = G__39268;
(G__39381.displayName = "app.ui.shared.sidebar.select-kit.core/select-kit-menu");

return G__39381;
} else {
return G__39268;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.select_kit.core.js.map
