goog.provide('app.shared.components.limiter_led_status');

app.shared.components.limiter_led_status.limiter_led_status = (function (){var G__29342 = (function app$shared$components$limiter_led_status$limiter_led_status_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29343 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__29346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29343,(0),null);
var map__29346__$1 = cljs.core.__destructure_map(map__29346);
var led_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29346__$1,new cljs.core.Keyword(null,"led-path","led-path",-704844767));
var green = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29346__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var green_pulse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29346__$1,new cljs.core.Keyword(null,"green-pulse","green-pulse",-1522567738));
var green_fast_pulse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29346__$1,new cljs.core.Keyword(null,"green-fast-pulse","green-fast-pulse",785225774));

var class$ = (function (){var G__29347 = "led-default";
var G__29347__$1 = (cljs.core.truth_(green)?[G__29347," led-green"].join(''):G__29347);
var G__29347__$2 = (cljs.core.truth_(green_pulse)?[G__29347__$1," led-green-pulse"].join(''):G__29347__$1);
if(cljs.core.truth_(green_fast_pulse)){
return [G__29347__$2," led-green-fast-pulse"].join('');
} else {
return G__29347__$2;
}
})();
var G__29348 = "path";
var G__29349 = (function (){var obj29351 = ({"className":helix.impl.props.normalize_class(class$),"d":led_path});
return obj29351;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29348,G__29349) : helix.core.jsx.call(null,G__29348,G__29349));
});
if(goog.DEBUG === true){
var G__29352 = G__29342;
(G__29352.displayName = "app.shared.components.limiter-led-status/limiter-led-status");

return G__29352;
} else {
return G__29342;
}
})();




//# sourceMappingURL=app.shared.components.limiter_led_status.js.map
