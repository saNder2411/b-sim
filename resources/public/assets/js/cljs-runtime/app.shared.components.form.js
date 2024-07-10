goog.provide('app.shared.components.form');

app.shared.components.form.field_row = (function (){var G__52124 = (function app$shared$components$form$field_row_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__52125 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__52128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52125,(0),null);
var map__52128__$1 = cljs.core.__destructure_map(map__52128);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52128__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52128__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__52129 = helix.core.Fragment;
var G__52130 = ({"children": [(function (){var G__52131 = "h6";
var G__52132 = (function (){var obj52134 = ({"className":"title is-6 dialog-label","children":label});
return obj52134;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__52131,G__52132) : helix.core.jsx.call(null,G__52131,G__52132));
})(),(function (){var G__52135 = "div";
var G__52136 = (function (){var obj52138 = ({"className":"field has-addons","children":children});
return obj52138;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__52135,G__52136) : helix.core.jsx.call(null,G__52135,G__52136));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__52129,G__52130) : helix.core.jsxs.call(null,G__52129,G__52130));
});
if(goog.DEBUG === true){
var G__52139 = G__52124;
(G__52139.displayName = "app.shared.components.form/field-row");

return G__52139;
} else {
return G__52124;
}
})();




app.shared.components.form.select = (function (){var G__52143 = (function app$shared$components$form$select_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__52144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__52147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52144,(0),null);
var map__52147__$1 = cljs.core.__destructure_map(map__52147);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52147__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52147__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52147__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));

var G__52148 = "div";
var G__52149 = (function (){var obj52151 = ({"className":"control is-expanded","children":(function (){var G__52152 = "div";
var G__52153 = (function (){var obj52155 = ({"className":"select is-small is-full-width","children":(function (){var G__52156 = "select";
var G__52157 = (function (){var obj52159 = ({"size":(1),"value":helix.impl.props.or_undefined(value),"onChange":(function (p1__52140_SHARP_){
var G__52160 = p1__52140_SHARP_.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__52160) : on_change.call(null,G__52160));
}),"children":cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__52141_SHARP_){
var G__52161 = "option";
var G__52162 = (function (){var obj52165 = ({"value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__52141_SHARP_)),"children":new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__52141_SHARP_)});
return obj52165;
})();
var G__52163 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__52141_SHARP_);
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$3 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$3(G__52161,G__52162,G__52163) : helix.core.jsx.call(null,G__52161,G__52162,G__52163));
}),data)});
return obj52159;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__52156,G__52157) : helix.core.jsx.call(null,G__52156,G__52157));
})()});
return obj52155;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__52152,G__52153) : helix.core.jsx.call(null,G__52152,G__52153));
})()});
return obj52151;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__52148,G__52149) : helix.core.jsx.call(null,G__52148,G__52149));
});
if(goog.DEBUG === true){
var G__52166 = G__52143;
(G__52166.displayName = "app.shared.components.form/select");

return G__52166;
} else {
return G__52143;
}
})();




app.shared.components.form.checkbox = (function (){var G__52168 = (function app$shared$components$form$checkbox_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__52169 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__52172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52169,(0),null);
var map__52172__$1 = cljs.core.__destructure_map(map__52172);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52172__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52172__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));

var G__52173 = "div";
var G__52174 = (function (){var obj52176 = ({"className":"control","children":(function (){var G__52177 = "svg";
var G__52178 = (function (){var obj52180 = ({"viewBox":"0 0 31.43 20.05","style":(function (){var obj52182 = ({"position":helix.impl.props.__GT_js("relative"),"height":helix.impl.props.__GT_js((20)),"marginLeft":helix.impl.props.__GT_js((15)),"marginTop":helix.impl.props.__GT_js((5))});
return obj52182;
})(),"children":[(cljs.core.truth_(value)?(function (){var G__52183 = helix.core.Fragment;
var G__52184 = ({"children": [(function (){var G__52185 = "path";
var G__52186 = (function (){var obj52188 = ({"fill":"#a1a1a1","d":"M15.71,18.7A18.43,18.43,0,0,1,.43,10.59a1,1,0,0,1,0-1.12A18.45,18.45,0,0,1,31,9.47a1,1,0,0,1,0,1.12A18.45,18.45,0,0,1,15.71,18.7ZM2.48,10A16.45,16.45,0,0,0,15.71,16.7,16.47,16.47,0,0,0,29,10,16.45,16.45,0,0,0,2.48,10Z"});
return obj52188;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__52185,G__52186) : helix.core.jsx.call(null,G__52185,G__52186));
})(),(function (){var G__52189 = "path";
var G__52190 = (function (){var obj52192 = ({"fill":"#a1a1a1","d":"M15.71,3.76A6.27,6.27,0,1,0,22,10,6.26,6.26,0,0,0,15.71,3.76Zm2.15,5.81a1.72,1.72,0,1,1,1.71-1.71A1.71,1.71,0,0,1,17.86,9.57Z"});
return obj52192;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__52189,G__52190) : helix.core.jsx.call(null,G__52189,G__52190));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__52183,G__52184) : helix.core.jsxs.call(null,G__52183,G__52184));
})():(function (){var G__52193 = helix.core.Fragment;
var G__52194 = ({"children": [(function (){var G__52195 = "path";
var G__52196 = (function (){var obj52198 = ({"fill":"#d4d4d3","d":"M31,9.47a18.45,18.45,0,0,0-5.4-5.24L24.15,5.69A16.39,16.39,0,0,1,29,10,16.47,16.47,0,0,1,15.71,16.7a17.24,17.24,0,0,1-2.39-.18l-1.71,1.71a18.61,18.61,0,0,0,4.1.47A18.45,18.45,0,0,0,31,10.59,1,1,0,0,0,31,9.47Z"});
return obj52198;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__52195,G__52196) : helix.core.jsx.call(null,G__52195,G__52196));
})(),(function (){var G__52199 = "path";
var G__52200 = (function (){var obj52202 = ({"fill":"#d4d4d3","d":"M15.71,16.29A6.27,6.27,0,0,0,22,10a6.11,6.11,0,0,0-.29-1.88L13.83,16A6.53,6.53,0,0,0,15.71,16.29Z"});
return obj52202;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__52199,G__52200) : helix.core.jsx.call(null,G__52199,G__52200));
})(),(function (){var G__52203 = "path";
var G__52204 = (function (){var obj52206 = ({"fill":"#d4d4d3","d":"M24.55,1.19a1,1,0,0,0-1.41,0L21.9,2.43a18.4,18.4,0,0,0-21.47,7,1,1,0,0,0,0,1.12,18.44,18.44,0,0,0,7.12,6.19l-.67.67a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L24.55,2.6A1,1,0,0,0,24.55,1.19ZM2.48,10A16.36,16.36,0,0,1,20.3,4L19.37,5A6.25,6.25,0,0,0,9.45,10a6.13,6.13,0,0,0,1.19,3.65l-1.59,1.6A16.5,16.5,0,0,1,2.48,10Z"});
return obj52206;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__52203,G__52204) : helix.core.jsx.call(null,G__52203,G__52204));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__52193,G__52194) : helix.core.jsxs.call(null,G__52193,G__52194));
})()),(function (){var G__52207 = "rect";
var G__52208 = (function (){var obj52210 = ({"width":(576),"height":(512),"x":(0),"stroke":"none","fill":"none","cursor":"pointer","onClick":on_change,"y":(0),"pointerEvents":"visibleFill"});
return obj52210;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__52207,G__52208) : helix.core.jsx.call(null,G__52207,G__52208));
})()]});
return obj52180;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__52177,G__52178) : helix.core.jsxs.call(null,G__52177,G__52178));
})()});
return obj52176;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__52173,G__52174) : helix.core.jsx.call(null,G__52173,G__52174));
});
if(goog.DEBUG === true){
var G__52211 = G__52168;
(G__52211.displayName = "app.shared.components.form/checkbox");

return G__52211;
} else {
return G__52168;
}
})();




app.shared.components.form.input_number = (function (){var G__52214 = (function app$shared$components$form$input_number_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__52215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__52218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52215,(0),null);
var map__52218__$1 = cljs.core.__destructure_map(map__52218);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,new cljs.core.Keyword(null,"max","max",61366548));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));

var G__52219 = "div";
var G__52220 = (function (){var obj52222 = ({"className":"control","children":(function (){var G__52223 = "input";
var G__52224 = (function (){var obj52226 = ({"className":"input is-small","type":"number","value":helix.impl.props.or_undefined(value),"min":min,"max":max,"step":step,"onChange":(function (p1__52212_SHARP_){
if(cljs.core.empty_QMARK_(p1__52212_SHARP_.target.value)){
return null;
} else {
var G__52227 = parseFloat(p1__52212_SHARP_.target.value);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__52227) : on_change.call(null,G__52227));
}
}),"onBlur":on_blur});
return obj52226;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__52223,G__52224) : helix.core.jsx.call(null,G__52223,G__52224));
})()});
return obj52222;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__52219,G__52220) : helix.core.jsx.call(null,G__52219,G__52220));
});
if(goog.DEBUG === true){
var G__52228 = G__52214;
(G__52228.displayName = "app.shared.components.form/input-number");

return G__52228;
} else {
return G__52214;
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
