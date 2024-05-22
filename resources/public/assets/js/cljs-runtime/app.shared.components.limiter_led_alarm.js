goog.provide('app.shared.components.limiter_led_alarm');

app.shared.components.limiter_led_alarm.limiter_led_alarm = (function (){var G__28754 = (function app$shared$components$limiter_led_alarm$limiter_led_alarm_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__28761 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__28764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28761,(0),null);
var map__28764__$1 = cljs.core.__destructure_map(map__28764);
var led_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28764__$1,new cljs.core.Keyword(null,"led-path","led-path",-704844767));
var red = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28764__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var red_pulse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28764__$1,new cljs.core.Keyword(null,"red-pulse","red-pulse",-1807041928));

var class$ = (function (){var G__28782 = "led-default";
var G__28782__$1 = (cljs.core.truth_(red)?[G__28782," led-red"].join(''):G__28782);
if(cljs.core.truth_(red_pulse)){
return [G__28782__$1," led-red-pulse"].join('');
} else {
return G__28782__$1;
}
})();
var G__28792 = "path";
var G__28793 = (function (){var obj28797 = ({"className":helix.impl.props.normalize_class(class$),"d":led_path});
return obj28797;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__28792,G__28793) : helix.core.jsx.call(null,G__28792,G__28793));
});
if(goog.DEBUG === true){
var G__28820 = G__28754;
(G__28820.displayName = "app.shared.components.limiter-led-alarm/limiter-led-alarm");

return G__28820;
} else {
return G__28754;
}
})();




//# sourceMappingURL=app.shared.components.limiter_led_alarm.js.map
