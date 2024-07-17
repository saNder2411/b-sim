goog.provide('app.ui.shared.sidebar.select_kit.core');

app.ui.shared.sidebar.select_kit.core.select_kit_menu = (function (){var G__29084 = (function app$ui$shared$sidebar$select_kit$core$select_kit_menu_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29089 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__29092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29089,(0),null);
var map__29092__$1 = cljs.core.__destructure_map(map__29092);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29092__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29092__$1,new cljs.core.Keyword(null,"y","y",-1757859776));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var G__29097 = "g";
var G__29098 = (function (){var obj29109 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"children":[(function (){var G__29127 = app.ui.shared.sidebar.select_kit.btn.select_kit_btn;
var G__29128 = (function (){var obj29133 = ({"x":(0),"y":(0),"label":"SPECTOR","sub-label":"module","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,new cljs.core.Keyword(null,"module","module",1424618191)),"disable":cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),new cljs.core.Keyword(null,"module","module",1424618191)], null));
})});
return obj29133;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29127,G__29128) : helix.core.jsx.call(null,G__29127,G__29128));
})(),(function (){var G__29151 = "path";
var G__29152 = (function (){var obj29160 = ({"fill":"#aaa","d":"M224.3,27.711l5.329-19.008h1.805l-5.316,19.008Z"});
return obj29160;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29151,G__29152) : helix.core.jsx.call(null,G__29151,G__29152));
})(),(function (){var G__29169 = app.ui.shared.sidebar.select_kit.btn.select_kit_btn;
var G__29170 = (function (){var obj29176 = ({"x":(236),"y":(0),"label":"SPECTOR","sub-label":"connect","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,new cljs.core.Keyword(null,"connect","connect",1232828233)),"disable":cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stopped"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-kit","change-kit",2000961860),new cljs.core.Keyword(null,"connect","connect",1232828233)], null));
})});
return obj29176;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29169,G__29170) : helix.core.jsx.call(null,G__29169,G__29170));
})()]});
return obj29109;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29097,G__29098) : helix.core.jsxs.call(null,G__29097,G__29098));
});
if(goog.DEBUG === true){
var G__29204 = G__29084;
(G__29204.displayName = "app.ui.shared.sidebar.select-kit.core/select-kit-menu");

return G__29204;
} else {
return G__29084;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.select_kit.core.js.map
