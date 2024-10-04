goog.provide('app.ui.shared.components.form');

app.ui.shared.components.form.field_row = (function (){var G__38861 = (function app$ui$shared$components$form$field_row_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38880 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__38885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38880,(0),null);
var map__38885__$1 = cljs.core.__destructure_map(map__38885);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38885__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38885__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__38904 = helix.core.Fragment;
var G__38905 = ({"children": [(function (){var G__38930 = "h6";
var G__38931 = (function (){var obj38937 = ({"className":"title is-6 dialog-label","children":label});
return obj38937;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38930,G__38931) : helix.core.jsx.call(null,G__38930,G__38931));
})(),(function (){var G__38950 = "div";
var G__38951 = (function (){var obj38959 = ({"className":"field has-addons","children":children});
return obj38959;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38950,G__38951) : helix.core.jsx.call(null,G__38950,G__38951));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38904,G__38905) : helix.core.jsxs.call(null,G__38904,G__38905));
});
if(goog.DEBUG === true){
var G__38983 = G__38861;
(G__38983.displayName = "app.ui.shared.components.form/field-row");

return G__38983;
} else {
return G__38861;
}
})();




app.ui.shared.components.form.select = (function (){var G__39118 = (function app$ui$shared$components$form$select_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__39139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__39142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39139,(0),null);
var map__39142__$1 = cljs.core.__destructure_map(map__39142);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39142__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39142__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39142__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));

var G__39169 = "div";
var G__39170 = (function (){var obj39178 = ({"className":"control is-expanded","children":(function (){var G__39186 = "div";
var G__39188 = (function (){var obj39192 = ({"className":"select is-small is-full-width","children":(function (){var G__39204 = "select";
var G__39205 = (function (){var obj39208 = ({"size":(1),"value":helix.impl.props.or_undefined(value),"onChange":(function (p1__39059_SHARP_){
var G__39211 = p1__39059_SHARP_.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__39211) : on_change.call(null,G__39211));
}),"children":cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39080_SHARP_){
var G__39230 = "option";
var G__39231 = (function (){var obj39236 = ({"value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__39080_SHARP_)),"children":new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__39080_SHARP_)});
return obj39236;
})();
var G__39232 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__39080_SHARP_);
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$3 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$3(G__39230,G__39231,G__39232) : helix.core.jsx.call(null,G__39230,G__39231,G__39232));
}),data)});
return obj39208;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39204,G__39205) : helix.core.jsx.call(null,G__39204,G__39205));
})()});
return obj39192;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39186,G__39188) : helix.core.jsx.call(null,G__39186,G__39188));
})()});
return obj39178;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39169,G__39170) : helix.core.jsx.call(null,G__39169,G__39170));
});
if(goog.DEBUG === true){
var G__39263 = G__39118;
(G__39263.displayName = "app.ui.shared.components.form/select");

return G__39263;
} else {
return G__39118;
}
})();




app.ui.shared.components.form.checkbox = (function (){var G__39345 = (function app$ui$shared$components$form$checkbox_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__39356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__39359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39356,(0),null);
var map__39359__$1 = cljs.core.__destructure_map(map__39359);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39359__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39359__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));

var G__39369 = "div";
var G__39370 = (function (){var obj39374 = ({"className":"control","children":(function (){var G__39375 = "svg";
var G__39376 = (function (){var obj39380 = ({"viewBox":"0 0 31.43 20.05","style":(function (){var obj39382 = ({"position":helix.impl.props.__GT_js("relative"),"height":helix.impl.props.__GT_js((20)),"marginLeft":helix.impl.props.__GT_js((15)),"marginTop":helix.impl.props.__GT_js((5))});
return obj39382;
})(),"children":[(cljs.core.truth_(value)?(function (){var G__39388 = helix.core.Fragment;
var G__39389 = ({"children": [(function (){var G__39390 = "path";
var G__39391 = (function (){var obj39393 = ({"fill":"#a1a1a1","d":"M15.71,18.7A18.43,18.43,0,0,1,.43,10.59a1,1,0,0,1,0-1.12A18.45,18.45,0,0,1,31,9.47a1,1,0,0,1,0,1.12A18.45,18.45,0,0,1,15.71,18.7ZM2.48,10A16.45,16.45,0,0,0,15.71,16.7,16.47,16.47,0,0,0,29,10,16.45,16.45,0,0,0,2.48,10Z"});
return obj39393;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39390,G__39391) : helix.core.jsx.call(null,G__39390,G__39391));
})(),(function (){var G__39396 = "path";
var G__39397 = (function (){var obj39399 = ({"fill":"#a1a1a1","d":"M15.71,3.76A6.27,6.27,0,1,0,22,10,6.26,6.26,0,0,0,15.71,3.76Zm2.15,5.81a1.72,1.72,0,1,1,1.71-1.71A1.71,1.71,0,0,1,17.86,9.57Z"});
return obj39399;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39396,G__39397) : helix.core.jsx.call(null,G__39396,G__39397));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39388,G__39389) : helix.core.jsxs.call(null,G__39388,G__39389));
})():(function (){var G__39402 = helix.core.Fragment;
var G__39403 = ({"children": [(function (){var G__39404 = "path";
var G__39405 = (function (){var obj39407 = ({"fill":"#d4d4d3","d":"M31,9.47a18.45,18.45,0,0,0-5.4-5.24L24.15,5.69A16.39,16.39,0,0,1,29,10,16.47,16.47,0,0,1,15.71,16.7a17.24,17.24,0,0,1-2.39-.18l-1.71,1.71a18.61,18.61,0,0,0,4.1.47A18.45,18.45,0,0,0,31,10.59,1,1,0,0,0,31,9.47Z"});
return obj39407;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39404,G__39405) : helix.core.jsx.call(null,G__39404,G__39405));
})(),(function (){var G__39412 = "path";
var G__39413 = (function (){var obj39415 = ({"fill":"#d4d4d3","d":"M15.71,16.29A6.27,6.27,0,0,0,22,10a6.11,6.11,0,0,0-.29-1.88L13.83,16A6.53,6.53,0,0,0,15.71,16.29Z"});
return obj39415;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39412,G__39413) : helix.core.jsx.call(null,G__39412,G__39413));
})(),(function (){var G__39416 = "path";
var G__39417 = (function (){var obj39419 = ({"fill":"#d4d4d3","d":"M24.55,1.19a1,1,0,0,0-1.41,0L21.9,2.43a18.4,18.4,0,0,0-21.47,7,1,1,0,0,0,0,1.12,18.44,18.44,0,0,0,7.12,6.19l-.67.67a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L24.55,2.6A1,1,0,0,0,24.55,1.19ZM2.48,10A16.36,16.36,0,0,1,20.3,4L19.37,5A6.25,6.25,0,0,0,9.45,10a6.13,6.13,0,0,0,1.19,3.65l-1.59,1.6A16.5,16.5,0,0,1,2.48,10Z"});
return obj39419;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39416,G__39417) : helix.core.jsx.call(null,G__39416,G__39417));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39402,G__39403) : helix.core.jsxs.call(null,G__39402,G__39403));
})()),(function (){var G__39424 = "rect";
var G__39425 = (function (){var obj39429 = ({"width":(576),"height":(512),"x":(0),"stroke":"none","fill":"none","cursor":"pointer","onClick":on_change,"y":(0),"pointerEvents":"visibleFill"});
return obj39429;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39424,G__39425) : helix.core.jsx.call(null,G__39424,G__39425));
})()]});
return obj39380;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39375,G__39376) : helix.core.jsxs.call(null,G__39375,G__39376));
})()});
return obj39374;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39369,G__39370) : helix.core.jsx.call(null,G__39369,G__39370));
});
if(goog.DEBUG === true){
var G__39432 = G__39345;
(G__39432.displayName = "app.ui.shared.components.form/checkbox");

return G__39432;
} else {
return G__39345;
}
})();




app.ui.shared.components.form.input_number = (function (){var G__39443 = (function app$ui$shared$components$form$input_number_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__39446 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);
var map__39449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39446,(0),null);
var map__39449__$1 = cljs.core.__destructure_map(map__39449);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"max","max",61366548));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));

var G__39458 = "div";
var G__39459 = (function (){var obj39461 = ({"className":"control","children":(function (){var G__39464 = "input";
var G__39465 = (function (){var obj39469 = ({"className":"input is-small","type":"number","value":helix.impl.props.or_undefined(value),"min":min,"max":max,"step":step,"onChange":(function (p1__39437_SHARP_){
if(cljs.core.empty_QMARK_(p1__39437_SHARP_.target.value)){
return null;
} else {
var G__39472 = parseFloat(p1__39437_SHARP_.target.value);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__39472) : on_change.call(null,G__39472));
}
}),"onBlur":on_blur});
return obj39469;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39464,G__39465) : helix.core.jsx.call(null,G__39464,G__39465));
})()});
return obj39461;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39458,G__39459) : helix.core.jsx.call(null,G__39458,G__39459));
});
if(goog.DEBUG === true){
var G__39474 = G__39443;
(G__39474.displayName = "app.ui.shared.components.form/input-number");

return G__39474;
} else {
return G__39443;
}
})();



app.ui.shared.components.form.validate_input_number = (function app$ui$shared$components$form$validate_input_number(v,min,max,message,dispatch_action){
if((((!(typeof v === 'number'))) || ((v < (0))))){
return (dispatch_action.cljs$core$IFn$_invoke$arity$1 ? dispatch_action.cljs$core$IFn$_invoke$arity$1(min) : dispatch_action.call(null,min));
} else {
if((v < min)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notifications","push","notifications/push",-54901957),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"duration","duration",1444101068),(5000)], null)], null));

return (dispatch_action.cljs$core$IFn$_invoke$arity$1 ? dispatch_action.cljs$core$IFn$_invoke$arity$1(min) : dispatch_action.call(null,min));
} else {
if((v > max)){
refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notifications","push","notifications/push",-54901957),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"duration","duration",1444101068),(5000)], null)], null));

return (dispatch_action.cljs$core$IFn$_invoke$arity$1 ? dispatch_action.cljs$core$IFn$_invoke$arity$1(max) : dispatch_action.call(null,max));
} else {
return v;

}
}
}
});

//# sourceMappingURL=app.ui.shared.components.form.js.map
