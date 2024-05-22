goog.provide('app.shared.components.touch_area');

app.shared.components.touch_area.touch_area = (function (){var G__29891 = (function app$shared$components$touch_area$touch_area_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29892 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__29895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29892,(0),null);
var map__29895__$1 = cljs.core.__destructure_map(map__29895);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29895__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29895__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29895__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29895__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29895__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));

var G__29896 = "rect";
var G__29897 = (function (){var obj29899 = ({"x":x,"y":y,"width":w,"height":h,"className":"touch-area","onClick":on_click});
return obj29899;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29896,G__29897) : helix.core.jsx.call(null,G__29896,G__29897));
});
if(goog.DEBUG === true){
var G__29900 = G__29891;
(G__29900.displayName = "app.shared.components.touch-area/touch-area");

return G__29900;
} else {
return G__29891;
}
})();




//# sourceMappingURL=app.shared.components.touch_area.js.map
