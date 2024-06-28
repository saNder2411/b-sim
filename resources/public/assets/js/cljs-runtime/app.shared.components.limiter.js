goog.provide('app.shared.components.limiter');

app.shared.components.limiter.btn_test = (function (){var G__64894 = (function app$shared$components$limiter$btn_test_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__64895 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__64898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64895,(0),null);
var map__64898__$1 = cljs.core.__destructure_map(map__64898);
var btn_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64898__$1,new cljs.core.Keyword(null,"btn-path","btn-path",2114496188));
var label_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64898__$1,new cljs.core.Keyword(null,"label-path","label-path",-1669364967));
var active = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64898__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var on_mouse_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64898__$1,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470));
var on_mouse_up = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64898__$1,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320));

var class$ = (function (){var G__64899 = "";
if(cljs.core.truth_(active)){
return [G__64899,"start-test-btn"].join('');
} else {
return G__64899;
}
})();
var G__64900 = helix.core.Fragment;
var G__64901 = ({"children": [(function (){var G__64902 = "path";
var G__64903 = (function (){var obj64905 = ({"className":helix.impl.props.normalize_class(class$),"fill":"#0084bc","d":btn_path,"onMouseDown":(cljs.core.truth_(active)?on_mouse_down:null),"onMouseUp":(cljs.core.truth_(active)?on_mouse_up:null)});
return obj64905;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64902,G__64903) : helix.core.jsx.call(null,G__64902,G__64903));
})(),(function (){var G__64906 = "path";
var G__64907 = (function (){var obj64909 = ({"fill":"#e5e6e4","pointerEvents":"none","d":label_path});
return obj64909;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64906,G__64907) : helix.core.jsx.call(null,G__64906,G__64907));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__64900,G__64901) : helix.core.jsxs.call(null,G__64900,G__64901));
});
if(goog.DEBUG === true){
var G__64910 = G__64894;
(G__64910.displayName = "app.shared.components.limiter/btn-test");

return G__64910;
} else {
return G__64894;
}
})();




app.shared.components.limiter.led_alarm = (function (){var G__64912 = (function app$shared$components$limiter$led_alarm_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__64913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__64916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64913,(0),null);
var map__64916__$1 = cljs.core.__destructure_map(map__64916);
var led_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64916__$1,new cljs.core.Keyword(null,"led-path","led-path",-704844767));
var red = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64916__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var red_pulse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64916__$1,new cljs.core.Keyword(null,"red-pulse","red-pulse",-1807041928));

var class$ = (function (){var G__64917 = "led-default";
var G__64917__$1 = (cljs.core.truth_(red)?[G__64917," led-red"].join(''):G__64917);
if(cljs.core.truth_(red_pulse)){
return [G__64917__$1," led-red-pulse"].join('');
} else {
return G__64917__$1;
}
})();
var G__64918 = "path";
var G__64919 = (function (){var obj64921 = ({"className":helix.impl.props.normalize_class(class$),"d":led_path});
return obj64921;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64918,G__64919) : helix.core.jsx.call(null,G__64918,G__64919));
});
if(goog.DEBUG === true){
var G__64922 = G__64912;
(G__64922.displayName = "app.shared.components.limiter/led-alarm");

return G__64922;
} else {
return G__64912;
}
})();




app.shared.components.limiter.led_diagnosis = (function (){var G__64924 = (function app$shared$components$limiter$led_diagnosis_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__64925 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__64928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64925,(0),null);
var map__64928__$1 = cljs.core.__destructure_map(map__64928);
var led_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64928__$1,new cljs.core.Keyword(null,"led-path","led-path",-704844767));
var label_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64928__$1,new cljs.core.Keyword(null,"label-path","label-path",-1669364967));
var yellow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64928__$1,new cljs.core.Keyword(null,"yellow","yellow",-881035449));
var yellow_pulse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64928__$1,new cljs.core.Keyword(null,"yellow-pulse","yellow-pulse",-500666186));

var class$ = (function (){var G__64929 = "led-default";
var G__64929__$1 = (cljs.core.truth_(yellow)?[G__64929," led-yellow"].join(''):G__64929);
if(cljs.core.truth_(yellow_pulse)){
return [G__64929__$1," led-yellow-pulse"].join('');
} else {
return G__64929__$1;
}
})();
var G__64930 = helix.core.Fragment;
var G__64931 = ({"children": [(function (){var G__64932 = "path";
var G__64933 = (function (){var obj64935 = ({"className":helix.impl.props.normalize_class(class$),"d":led_path});
return obj64935;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64932,G__64933) : helix.core.jsx.call(null,G__64932,G__64933));
})(),(function (){var G__64936 = "path";
var G__64937 = (function (){var obj64939 = ({"fill":"#151616","fillRule":"evenodd","d":label_path});
return obj64939;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64936,G__64937) : helix.core.jsx.call(null,G__64936,G__64937));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__64930,G__64931) : helix.core.jsxs.call(null,G__64930,G__64931));
});
if(goog.DEBUG === true){
var G__64940 = G__64924;
(G__64940.displayName = "app.shared.components.limiter/led-diagnosis");

return G__64940;
} else {
return G__64924;
}
})();




app.shared.components.limiter.led_status = (function (){var G__64942 = (function app$shared$components$limiter$led_status_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__64943 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__64946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64943,(0),null);
var map__64946__$1 = cljs.core.__destructure_map(map__64946);
var led_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64946__$1,new cljs.core.Keyword(null,"led-path","led-path",-704844767));
var green = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64946__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var green_pulse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64946__$1,new cljs.core.Keyword(null,"green-pulse","green-pulse",-1522567738));
var green_fast_pulse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64946__$1,new cljs.core.Keyword(null,"green-fast-pulse","green-fast-pulse",785225774));

var class$ = (function (){var G__64947 = "led-default";
var G__64947__$1 = (cljs.core.truth_(green)?[G__64947," led-green"].join(''):G__64947);
var G__64947__$2 = (cljs.core.truth_(green_pulse)?[G__64947__$1," led-green-pulse"].join(''):G__64947__$1);
if(cljs.core.truth_(green_fast_pulse)){
return [G__64947__$2," led-green-fast-pulse"].join('');
} else {
return G__64947__$2;
}
})();
var G__64948 = "path";
var G__64949 = (function (){var obj64951 = ({"className":helix.impl.props.normalize_class(class$),"d":led_path});
return obj64951;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__64948,G__64949) : helix.core.jsx.call(null,G__64948,G__64949));
});
if(goog.DEBUG === true){
var G__64952 = G__64942;
(G__64952.displayName = "app.shared.components.limiter/led-status");

return G__64952;
} else {
return G__64942;
}
})();




//# sourceMappingURL=app.shared.components.limiter.js.map
