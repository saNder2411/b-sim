goog.provide('app.ui.shared.components.touch_area');

app.ui.shared.components.touch_area.touch_area = (function (){var G__28661 = (function app$ui$shared$components$touch_area$touch_area_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28664 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__28671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28664,(0),null);
var map__28671__$1 = cljs.core.__destructure_map(map__28671);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28671__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28671__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28671__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28671__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28671__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));

var G__28694 = "rect";
var G__28695 = (function (){var obj28711 = ({"x":x,"y":y,"width":w,"height":h,"className":"touch-area","onClick":on_click});
return obj28711;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28694,G__28695) : helix.core.jsx.call(null,G__28694,G__28695));
});
if(goog.DEBUG === true){
var G__28751 = G__28661;
(G__28751.displayName = "app.ui.shared.components.touch-area/touch-area");

return G__28751;
} else {
return G__28661;
}
})();




//# sourceMappingURL=app.ui.shared.components.touch_area.js.map
