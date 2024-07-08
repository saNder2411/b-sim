goog.provide('app.shared.components.form');

app.shared.components.form.field_row = (function (){var G__30826 = (function app$shared$components$form$field_row_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30827 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__30830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30827,(0),null);
var map__30830__$1 = cljs.core.__destructure_map(map__30830);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30830__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30830__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__30831 = helix.core.Fragment;
var G__30832 = ({"children": [(function (){var G__30833 = "h6";
var G__30834 = (function (){var obj30836 = ({"className":"title is-6 dialog-label","children":label});
return obj30836;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30833,G__30834) : helix.core.jsx.call(null,G__30833,G__30834));
})(),(function (){var G__30840 = "div";
var G__30841 = (function (){var obj30846 = ({"className":"field has-addons","children":children});
return obj30846;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30840,G__30841) : helix.core.jsx.call(null,G__30840,G__30841));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30831,G__30832) : helix.core.jsxs.call(null,G__30831,G__30832));
});
if(goog.DEBUG === true){
var G__30847 = G__30826;
(G__30847.displayName = "app.shared.components.form/field-row");

return G__30847;
} else {
return G__30826;
}
})();




app.shared.components.form.select = (function (){var G__30867 = (function app$shared$components$form$select_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30870 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__30874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30870,(0),null);
var map__30874__$1 = cljs.core.__destructure_map(map__30874);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30874__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30874__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30874__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));

var G__30878 = "div";
var G__30879 = (function (){var obj30882 = ({"className":"control is-expanded","children":(function (){var G__30883 = "div";
var G__30884 = (function (){var obj30886 = ({"className":"select is-small is-full-width","children":(function (){var G__30887 = "select";
var G__30888 = (function (){var obj30892 = ({"size":(1),"value":helix.impl.props.or_undefined(value),"onChange":(function (p1__30848_SHARP_){
var G__30894 = p1__30848_SHARP_.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__30894) : on_change.call(null,G__30894));
}),"children":cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30849_SHARP_){
var G__30895 = "option";
var G__30896 = (function (){var obj30899 = ({"value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30849_SHARP_)),"children":new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__30849_SHARP_)});
return obj30899;
})();
var G__30897 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__30849_SHARP_);
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$3 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$3(G__30895,G__30896,G__30897) : helix.core.jsx.call(null,G__30895,G__30896,G__30897));
}),data)});
return obj30892;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30887,G__30888) : helix.core.jsx.call(null,G__30887,G__30888));
})()});
return obj30886;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30883,G__30884) : helix.core.jsx.call(null,G__30883,G__30884));
})()});
return obj30882;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30878,G__30879) : helix.core.jsx.call(null,G__30878,G__30879));
});
if(goog.DEBUG === true){
var G__30900 = G__30867;
(G__30900.displayName = "app.shared.components.form/select");

return G__30900;
} else {
return G__30867;
}
})();




app.shared.components.form.checkbox = (function (){var G__30904 = (function app$shared$components$form$checkbox_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30905 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__30908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30905,(0),null);
var map__30908__$1 = cljs.core.__destructure_map(map__30908);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30908__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30908__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));

var G__30909 = "div";
var G__30910 = (function (){var obj30912 = ({"className":"control","children":(function (){var G__30913 = "svg";
var G__30914 = (function (){var obj30916 = ({"viewBox":"0 0 31.43 20.05","style":(function (){var obj30918 = ({"position":helix.impl.props.__GT_js("relative"),"height":helix.impl.props.__GT_js((20)),"marginLeft":helix.impl.props.__GT_js((15)),"marginTop":helix.impl.props.__GT_js((5))});
return obj30918;
})(),"children":[(cljs.core.truth_(value)?(function (){var G__30919 = helix.core.Fragment;
var G__30920 = ({"children": [(function (){var G__30921 = "path";
var G__30922 = (function (){var obj30924 = ({"fill":"#a1a1a1","d":"M15.71,18.7A18.43,18.43,0,0,1,.43,10.59a1,1,0,0,1,0-1.12A18.45,18.45,0,0,1,31,9.47a1,1,0,0,1,0,1.12A18.45,18.45,0,0,1,15.71,18.7ZM2.48,10A16.45,16.45,0,0,0,15.71,16.7,16.47,16.47,0,0,0,29,10,16.45,16.45,0,0,0,2.48,10Z"});
return obj30924;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30921,G__30922) : helix.core.jsx.call(null,G__30921,G__30922));
})(),(function (){var G__30925 = "path";
var G__30926 = (function (){var obj30928 = ({"fill":"#a1a1a1","d":"M15.71,3.76A6.27,6.27,0,1,0,22,10,6.26,6.26,0,0,0,15.71,3.76Zm2.15,5.81a1.72,1.72,0,1,1,1.71-1.71A1.71,1.71,0,0,1,17.86,9.57Z"});
return obj30928;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30925,G__30926) : helix.core.jsx.call(null,G__30925,G__30926));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30919,G__30920) : helix.core.jsxs.call(null,G__30919,G__30920));
})():(function (){var G__30929 = helix.core.Fragment;
var G__30930 = ({"children": [(function (){var G__30931 = "path";
var G__30932 = (function (){var obj30934 = ({"fill":"#d4d4d3","d":"M31,9.47a18.45,18.45,0,0,0-5.4-5.24L24.15,5.69A16.39,16.39,0,0,1,29,10,16.47,16.47,0,0,1,15.71,16.7a17.24,17.24,0,0,1-2.39-.18l-1.71,1.71a18.61,18.61,0,0,0,4.1.47A18.45,18.45,0,0,0,31,10.59,1,1,0,0,0,31,9.47Z"});
return obj30934;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30931,G__30932) : helix.core.jsx.call(null,G__30931,G__30932));
})(),(function (){var G__30935 = "path";
var G__30936 = (function (){var obj30938 = ({"fill":"#d4d4d3","d":"M15.71,16.29A6.27,6.27,0,0,0,22,10a6.11,6.11,0,0,0-.29-1.88L13.83,16A6.53,6.53,0,0,0,15.71,16.29Z"});
return obj30938;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30935,G__30936) : helix.core.jsx.call(null,G__30935,G__30936));
})(),(function (){var G__30939 = "path";
var G__30940 = (function (){var obj30942 = ({"fill":"#d4d4d3","d":"M24.55,1.19a1,1,0,0,0-1.41,0L21.9,2.43a18.4,18.4,0,0,0-21.47,7,1,1,0,0,0,0,1.12,18.44,18.44,0,0,0,7.12,6.19l-.67.67a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L24.55,2.6A1,1,0,0,0,24.55,1.19ZM2.48,10A16.36,16.36,0,0,1,20.3,4L19.37,5A6.25,6.25,0,0,0,9.45,10a6.13,6.13,0,0,0,1.19,3.65l-1.59,1.6A16.5,16.5,0,0,1,2.48,10Z"});
return obj30942;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30939,G__30940) : helix.core.jsx.call(null,G__30939,G__30940));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30929,G__30930) : helix.core.jsxs.call(null,G__30929,G__30930));
})()),(function (){var G__30943 = "rect";
var G__30944 = (function (){var obj30946 = ({"width":(576),"height":(512),"x":(0),"stroke":"none","fill":"none","cursor":"pointer","onClick":on_change,"y":(0),"pointerEvents":"visibleFill"});
return obj30946;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30943,G__30944) : helix.core.jsx.call(null,G__30943,G__30944));
})()]});
return obj30916;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30913,G__30914) : helix.core.jsxs.call(null,G__30913,G__30914));
})()});
return obj30912;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30909,G__30910) : helix.core.jsx.call(null,G__30909,G__30910));
});
if(goog.DEBUG === true){
var G__30947 = G__30904;
(G__30947.displayName = "app.shared.components.form/checkbox");

return G__30947;
} else {
return G__30904;
}
})();




app.shared.components.form.input_number = (function (){var G__30950 = (function app$shared$components$form$input_number_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30951 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__30954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30951,(0),null);
var map__30954__$1 = cljs.core.__destructure_map(map__30954);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30954__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30954__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30954__$1,new cljs.core.Keyword(null,"max","max",61366548));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30954__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30954__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30954__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));

var G__30955 = "div";
var G__30956 = (function (){var obj30958 = ({"className":"control","children":(function (){var G__30959 = "input";
var G__30960 = (function (){var obj30962 = ({"className":"input is-small","type":"number","value":helix.impl.props.or_undefined(value),"min":min,"max":max,"step":step,"onChange":(function (p1__30948_SHARP_){
if(cljs.core.empty_QMARK_(p1__30948_SHARP_.target.value)){
return null;
} else {
var G__30963 = parseFloat(p1__30948_SHARP_.target.value);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__30963) : on_change.call(null,G__30963));
}
}),"onBlur":on_blur});
return obj30962;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30959,G__30960) : helix.core.jsx.call(null,G__30959,G__30960));
})()});
return obj30958;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30955,G__30956) : helix.core.jsx.call(null,G__30955,G__30956));
});
if(goog.DEBUG === true){
var G__30964 = G__30950;
(G__30964.displayName = "app.shared.components.form/input-number");

return G__30964;
} else {
return G__30950;
}
})();



app.shared.components.form.validate_input_number = (function app$shared$components$form$validate_input_number(v,min,max,message,dispatch_action){
if((((!(typeof v === 'number'))) || ((v < (0))))){
return (dispatch_action.cljs$core$IFn$_invoke$arity$1 ? dispatch_action.cljs$core$IFn$_invoke$arity$1(min) : dispatch_action.call(null,min));
} else {
if((v < min)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"duration","duration",1444101068),(5000)], null)], null));

return (dispatch_action.cljs$core$IFn$_invoke$arity$1 ? dispatch_action.cljs$core$IFn$_invoke$arity$1(min) : dispatch_action.call(null,min));
} else {
if((v > max)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"duration","duration",1444101068),(5000)], null)], null));

return (dispatch_action.cljs$core$IFn$_invoke$arity$1 ? dispatch_action.cljs$core$IFn$_invoke$arity$1(max) : dispatch_action.call(null,max));
} else {
return v;

}
}
}
});

//# sourceMappingURL=app.shared.components.form.js.map
