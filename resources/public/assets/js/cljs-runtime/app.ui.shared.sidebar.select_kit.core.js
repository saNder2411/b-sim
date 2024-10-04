goog.provide('app.ui.shared.sidebar.select_kit.core');

app.ui.shared.sidebar.select_kit.core.select_kit_menu = (function (){var G__36155 = (function app$ui$shared$sidebar$select_kit$core$select_kit_menu_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__36161 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__36164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36161,(0),null);
var map__36164__$1 = cljs.core.__destructure_map(map__36164);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36164__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36164__$1,new cljs.core.Keyword(null,"y","y",-1757859776));

var kit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit","kit",-1785767367)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var G__36182 = "g";
var G__36183 = (function (){var obj36201 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"children":[(function (){var G__36224 = app.ui.shared.sidebar.select_kit.btn.select_kit_btn;
var G__36225 = (function (){var obj36235 = ({"x":(0),"y":(0),"label":"SPECTOR","sub-label":"module","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,new cljs.core.Keyword(null,"module","module",1424618191)),"disable":cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stop"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","change","kit/change",-1163136888),new cljs.core.Keyword(null,"module","module",1424618191)], null));
})});
return obj36235;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36224,G__36225) : helix.core.jsx.call(null,G__36224,G__36225));
})(),(function (){var G__36251 = "path";
var G__36252 = (function (){var obj36256 = ({"fill":"#aaa","d":"M224.3,27.711l5.329-19.008h1.805l-5.316,19.008Z"});
return obj36256;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36251,G__36252) : helix.core.jsx.call(null,G__36251,G__36252));
})(),(function (){var G__36259 = app.ui.shared.sidebar.select_kit.btn.select_kit_btn;
var G__36260 = (function (){var obj36268 = ({"x":(236),"y":(0),"label":"SPECTOR","sub-label":"connect","active":cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(kit,new cljs.core.Keyword(null,"connect","connect",1232828233)),"disable":cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sim,"stop"),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","change","kit/change",-1163136888),new cljs.core.Keyword(null,"connect","connect",1232828233)], null));
})});
return obj36268;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36259,G__36260) : helix.core.jsx.call(null,G__36259,G__36260));
})()]});
return obj36201;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__36182,G__36183) : helix.core.jsxs.call(null,G__36182,G__36183));
});
if(goog.DEBUG === true){
var G__36291 = G__36155;
(G__36291.displayName = "app.ui.shared.sidebar.select-kit.core/select-kit-menu");

return G__36291;
} else {
return G__36155;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.select_kit.core.js.map
