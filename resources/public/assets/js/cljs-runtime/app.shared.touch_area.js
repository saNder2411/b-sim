goog.provide('app.shared.touch_area');

app.shared.touch_area.touch_area = (function (){var G__36953 = (function app$shared$touch_area$touch_area_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__36955 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__36958 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36955,(0),null);
var map__36958__$1 = cljs.core.__destructure_map(map__36958);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36958__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36958__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36958__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36958__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36958__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));

var G__36959 = "rect";
var G__36960 = (function (){var obj36962 = ({"x":x,"y":y,"width":w,"height":h,"className":"touch-area","onClick":on_click});
return obj36962;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__36959,G__36960) : helix.core.jsx.call(null,G__36959,G__36960));
});
if(goog.DEBUG === true){
var G__36963 = G__36953;
(G__36963.displayName = "app.shared.touch-area/touch-area");

return G__36963;
} else {
return G__36953;
}
})();




//# sourceMappingURL=app.shared.touch_area.js.map
