goog.provide('app.shared.components.controller_led_status');

app.shared.components.controller_led_status.controller_led_status = (function (){var G__29981 = (function app$shared$components$controller_led_status$controller_led_status_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29982 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__29985 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29982,(0),null);
var map__29985__$1 = cljs.core.__destructure_map(map__29985);
var led_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29985__$1,new cljs.core.Keyword(null,"led-path","led-path",-704844767));
var amber = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29985__$1,new cljs.core.Keyword(null,"amber","amber",-1205391175));
var red = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29985__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var green = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29985__$1,new cljs.core.Keyword(null,"green","green",-945526839));

var class$ = (function (){var G__29986 = "led-default";
var G__29986__$1 = (cljs.core.truth_(amber)?[G__29986," led-amber"].join(''):G__29986);
var G__29986__$2 = (cljs.core.truth_(red)?[G__29986__$1," led-red"].join(''):G__29986__$1);
if(cljs.core.truth_(green)){
return [G__29986__$2," led-green"].join('');
} else {
return G__29986__$2;
}
})();
var G__29987 = "path";
var G__29988 = (function (){var obj29990 = ({"className":helix.impl.props.normalize_class(class$),"d":led_path});
return obj29990;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29987,G__29988) : helix.core.jsx.call(null,G__29987,G__29988));
});
if(goog.DEBUG === true){
var G__29991 = G__29981;
(G__29991.displayName = "app.shared.components.controller-led-status/controller-led-status");

return G__29991;
} else {
return G__29981;
}
})();




//# sourceMappingURL=app.shared.components.controller_led_status.js.map
