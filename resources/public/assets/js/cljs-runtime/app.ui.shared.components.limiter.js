goog.provide('app.ui.shared.components.limiter');

app.ui.shared.components.limiter.btn_test = (function (){var G__29730 = (function app$ui$shared$components$limiter$btn_test_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29734 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__29737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29734,(0),null);
var map__29737__$1 = cljs.core.__destructure_map(map__29737);
var btn_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29737__$1,new cljs.core.Keyword(null,"btn-path","btn-path",2114496188));
var label_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29737__$1,new cljs.core.Keyword(null,"label-path","label-path",-1669364967));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29737__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var on_mouse_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29737__$1,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
var on_mouse_up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29737__$1,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320));

var class$ = (function (){var G__29750 = "";
if(cljs.core.truth_(active)){
return [G__29750,"start-test-btn"].join('');
} else {
return G__29750;
}
})();
var G__29757 = helix.core.Fragment;
var G__29758 = ({"children": [(function (){var G__29763 = "path";
var G__29764 = (function (){var obj29770 = ({"className":helix.impl.props.normalize_class(class$),"fill":"#0084bc","d":btn_path,"onMouseDown":(cljs.core.truth_(active)?on_mouse_down:null),"onMouseUp":(cljs.core.truth_(active)?on_mouse_up:null)});
return obj29770;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29763,G__29764) : helix.core.jsx.call(null,G__29763,G__29764));
})(),(function (){var G__29781 = "path";
var G__29782 = (function (){var obj29790 = ({"fill":"#e5e6e4","pointerEvents":"none","d":label_path});
return obj29790;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29781,G__29782) : helix.core.jsx.call(null,G__29781,G__29782));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29757,G__29758) : helix.core.jsxs.call(null,G__29757,G__29758));
});
if(goog.DEBUG === true){
var G__29803 = G__29730;
(G__29803.displayName = "app.ui.shared.components.limiter/btn-test");

return G__29803;
} else {
return G__29730;
}
})();




app.ui.shared.components.limiter.led_alarm = (function (){var G__29821 = (function app$ui$shared$components$limiter$led_alarm_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29828 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__29831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29828,(0),null);
var map__29831__$1 = cljs.core.__destructure_map(map__29831);
var led_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29831__$1,new cljs.core.Keyword(null,"led-path","led-path",-704844767));
var red = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29831__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var red_pulse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29831__$1,new cljs.core.Keyword(null,"red-pulse","red-pulse",-1807041928));

var class$ = (function (){var G__29838 = "led-default";
var G__29838__$1 = (cljs.core.truth_(red)?[G__29838," led-red"].join(''):G__29838);
if(cljs.core.truth_(red_pulse)){
return [G__29838__$1," led-red-pulse"].join('');
} else {
return G__29838__$1;
}
})();
var G__29851 = "path";
var G__29852 = (function (){var obj29854 = ({"className":helix.impl.props.normalize_class(class$),"d":led_path});
return obj29854;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29851,G__29852) : helix.core.jsx.call(null,G__29851,G__29852));
});
if(goog.DEBUG === true){
var G__29857 = G__29821;
(G__29857.displayName = "app.ui.shared.components.limiter/led-alarm");

return G__29857;
} else {
return G__29821;
}
})();




app.ui.shared.components.limiter.led_diagnosis = (function (){var G__29870 = (function app$ui$shared$components$limiter$led_diagnosis_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29876 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__29879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29876,(0),null);
var map__29879__$1 = cljs.core.__destructure_map(map__29879);
var led_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29879__$1,new cljs.core.Keyword(null,"led-path","led-path",-704844767));
var label_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29879__$1,new cljs.core.Keyword(null,"label-path","label-path",-1669364967));
var yellow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29879__$1,new cljs.core.Keyword(null,"yellow","yellow",-881035449));
var yellow_pulse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29879__$1,new cljs.core.Keyword(null,"yellow-pulse","yellow-pulse",-500666186));

var class$ = (function (){var G__29894 = "led-default";
var G__29894__$1 = (cljs.core.truth_(yellow)?[G__29894," led-yellow"].join(''):G__29894);
if(cljs.core.truth_(yellow_pulse)){
return [G__29894__$1," led-yellow-pulse"].join('');
} else {
return G__29894__$1;
}
})();
var G__29903 = helix.core.Fragment;
var G__29904 = ({"children": [(function (){var G__29913 = "path";
var G__29914 = (function (){var obj29918 = ({"className":helix.impl.props.normalize_class(class$),"d":led_path});
return obj29918;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29913,G__29914) : helix.core.jsx.call(null,G__29913,G__29914));
})(),(function (){var G__29925 = "path";
var G__29926 = (function (){var obj29930 = ({"fill":"#151616","fillRule":"evenodd","d":label_path});
return obj29930;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29925,G__29926) : helix.core.jsx.call(null,G__29925,G__29926));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29903,G__29904) : helix.core.jsxs.call(null,G__29903,G__29904));
});
if(goog.DEBUG === true){
var G__29942 = G__29870;
(G__29942.displayName = "app.ui.shared.components.limiter/led-diagnosis");

return G__29942;
} else {
return G__29870;
}
})();




app.ui.shared.components.limiter.led_status = (function (){var G__30062 = (function app$ui$shared$components$limiter$led_status_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30063 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__30066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30063,(0),null);
var map__30066__$1 = cljs.core.__destructure_map(map__30066);
var led_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30066__$1,new cljs.core.Keyword(null,"led-path","led-path",-704844767));
var green = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30066__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var green_pulse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30066__$1,new cljs.core.Keyword(null,"green-pulse","green-pulse",-1522567738));
var green_fast_pulse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30066__$1,new cljs.core.Keyword(null,"green-fast-pulse","green-fast-pulse",785225774));

var class$ = (function (){var G__30079 = "led-default";
var G__30079__$1 = (cljs.core.truth_(green)?[G__30079," led-green"].join(''):G__30079);
var G__30079__$2 = (cljs.core.truth_(green_pulse)?[G__30079__$1," led-green-pulse"].join(''):G__30079__$1);
if(cljs.core.truth_(green_fast_pulse)){
return [G__30079__$2," led-green-fast-pulse"].join('');
} else {
return G__30079__$2;
}
})();
var G__30090 = "path";
var G__30091 = (function (){var obj30099 = ({"className":helix.impl.props.normalize_class(class$),"d":led_path});
return obj30099;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30090,G__30091) : helix.core.jsx.call(null,G__30090,G__30091));
});
if(goog.DEBUG === true){
var G__30110 = G__30062;
(G__30110.displayName = "app.ui.shared.components.limiter/led-status");

return G__30110;
} else {
return G__30062;
}
})();




//# sourceMappingURL=app.ui.shared.components.limiter.js.map
