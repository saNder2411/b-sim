goog.provide('app.shared.components.toolbar_btn_wrapper');

app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper = (function (){var G__36433 = (function app$shared$components$toolbar_btn_wrapper$toolbar_btn_wrapper_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__36434 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__36437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36434,(0),null);
var map__36437__$1 = cljs.core.__destructure_map(map__36437);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36437__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36437__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var inactive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36437__$1,new cljs.core.Keyword(null,"inactive","inactive",-306247616));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36437__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36437__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__36438 = "g";
var G__36439 = (function (){var obj36441 = ({"transform":["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join(''),"className":helix.impl.props.normalize_class(["toolbar-btn-",(cljs.core.truth_(inactive)?"inactive":"active")].join('')),"onClick":(cljs.core.truth_(inactive)?null:on_click),"children":children});
return obj36441;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36438,G__36439) : helix.core.jsx.call(null,G__36438,G__36439));
});
if(goog.DEBUG === true){
var G__36442 = G__36433;
(G__36442.displayName = "app.shared.components.toolbar-btn-wrapper/toolbar-btn-wrapper");

return G__36442;
} else {
return G__36433;
}
})();




//# sourceMappingURL=app.shared.components.toolbar_btn_wrapper.js.map
