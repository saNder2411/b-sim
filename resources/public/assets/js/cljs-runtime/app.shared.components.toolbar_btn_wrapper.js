goog.provide('app.shared.components.toolbar_btn_wrapper');

app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper = (function (){var G__32023 = (function app$shared$components$toolbar_btn_wrapper$toolbar_btn_wrapper_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32024 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__32027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32024,(0),null);
var map__32027__$1 = cljs.core.__destructure_map(map__32027);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32027__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32027__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var inactive = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32027__$1,new cljs.core.Keyword(null,"inactive","inactive",-306247616));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32027__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32027__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__32028 = "g";
var G__32029 = (function (){var obj32031 = ({"style":(function (){var obj32033 = ({"transform":helix.impl.props.__GT_js(["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px)"].join(''))});
return obj32033;
})(),"className":helix.impl.props.normalize_class((cljs.core.truth_(inactive)?"inactive":"")),"onClick":(cljs.core.truth_(inactive)?null:on_click),"children":children});
return obj32031;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32028,G__32029) : helix.core.jsx.call(null,G__32028,G__32029));
});
if(goog.DEBUG === true){
var G__32034 = G__32023;
(G__32034.displayName = "app.shared.components.toolbar-btn-wrapper/toolbar-btn-wrapper");

return G__32034;
} else {
return G__32023;
}
})();




//# sourceMappingURL=app.shared.components.toolbar_btn_wrapper.js.map
