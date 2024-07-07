goog.provide('app.shared.components.form');

app.shared.components.form.field_row = (function (){var G__38151 = (function app$shared$components$form$field_row_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__38152 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__38155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38152,(0),null);
var map__38155__$1 = cljs.core.__destructure_map(map__38155);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38155__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38155__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__38156 = helix.core.Fragment;
var G__38157 = ({"children": [(function (){var G__38158 = "h6";
var G__38159 = (function (){var obj38161 = ({"className":"title is-6 dialog-label","children":label});
return obj38161;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38158,G__38159) : helix.core.jsx.call(null,G__38158,G__38159));
})(),(function (){var G__38162 = "div";
var G__38163 = (function (){var obj38165 = ({"className":"field has-addons","children":children});
return obj38165;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38162,G__38163) : helix.core.jsx.call(null,G__38162,G__38163));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38156,G__38157) : helix.core.jsxs.call(null,G__38156,G__38157));
});
if(goog.DEBUG === true){
var G__38166 = G__38151;
(G__38166.displayName = "app.shared.components.form/field-row");

return G__38166;
} else {
return G__38151;
}
})();




app.shared.components.form.select = (function (){var G__38170 = (function app$shared$components$form$select_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__38171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__38174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38171,(0),null);
var map__38174__$1 = cljs.core.__destructure_map(map__38174);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38174__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38174__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38174__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));

var G__38175 = "div";
var G__38176 = (function (){var obj38178 = ({"className":"control is-expanded","children":(function (){var G__38179 = "div";
var G__38180 = (function (){var obj38182 = ({"className":"select is-small is-full-width","children":(function (){var G__38183 = "select";
var G__38184 = (function (){var obj38186 = ({"size":(1),"value":helix.impl.props.or_undefined(value),"onChange":(function (p1__38167_SHARP_){
var G__38187 = p1__38167_SHARP_.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__38187) : on_change.call(null,G__38187));
}),"children":cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38168_SHARP_){
var G__38188 = "option";
var G__38189 = (function (){var obj38192 = ({"value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__38168_SHARP_)),"children":new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__38168_SHARP_)});
return obj38192;
})();
var G__38190 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__38168_SHARP_);
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$3 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$3(G__38188,G__38189,G__38190) : helix.core.jsx.call(null,G__38188,G__38189,G__38190));
}),data)});
return obj38186;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38183,G__38184) : helix.core.jsx.call(null,G__38183,G__38184));
})()});
return obj38182;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38179,G__38180) : helix.core.jsx.call(null,G__38179,G__38180));
})()});
return obj38178;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38175,G__38176) : helix.core.jsx.call(null,G__38175,G__38176));
});
if(goog.DEBUG === true){
var G__38193 = G__38170;
(G__38193.displayName = "app.shared.components.form/select");

return G__38193;
} else {
return G__38170;
}
})();




app.shared.components.form.checkbox = (function (){var G__38195 = (function app$shared$components$form$checkbox_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__38196 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__38199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38196,(0),null);
var map__38199__$1 = cljs.core.__destructure_map(map__38199);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38199__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38199__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));

var G__38200 = "div";
var G__38201 = (function (){var obj38203 = ({"className":"control","children":(function (){var G__38204 = "svg";
var G__38205 = (function (){var obj38207 = ({"viewBox":"0 0 31.43 20.05","style":(function (){var obj38209 = ({"position":helix.impl.props.__GT_js("relative"),"height":helix.impl.props.__GT_js((20)),"marginLeft":helix.impl.props.__GT_js((15)),"marginTop":helix.impl.props.__GT_js((5))});
return obj38209;
})(),"children":[(cljs.core.truth_(value)?(function (){var G__38210 = helix.core.Fragment;
var G__38211 = ({"children": [(function (){var G__38212 = "path";
var G__38213 = (function (){var obj38215 = ({"fill":"#a1a1a1","d":"M15.71,18.7A18.43,18.43,0,0,1,.43,10.59a1,1,0,0,1,0-1.12A18.45,18.45,0,0,1,31,9.47a1,1,0,0,1,0,1.12A18.45,18.45,0,0,1,15.71,18.7ZM2.48,10A16.45,16.45,0,0,0,15.71,16.7,16.47,16.47,0,0,0,29,10,16.45,16.45,0,0,0,2.48,10Z"});
return obj38215;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38212,G__38213) : helix.core.jsx.call(null,G__38212,G__38213));
})(),(function (){var G__38216 = "path";
var G__38217 = (function (){var obj38219 = ({"fill":"#a1a1a1","d":"M15.71,3.76A6.27,6.27,0,1,0,22,10,6.26,6.26,0,0,0,15.71,3.76Zm2.15,5.81a1.72,1.72,0,1,1,1.71-1.71A1.71,1.71,0,0,1,17.86,9.57Z"});
return obj38219;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38216,G__38217) : helix.core.jsx.call(null,G__38216,G__38217));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38210,G__38211) : helix.core.jsxs.call(null,G__38210,G__38211));
})():(function (){var G__38220 = helix.core.Fragment;
var G__38221 = ({"children": [(function (){var G__38222 = "path";
var G__38223 = (function (){var obj38225 = ({"fill":"#d4d4d3","d":"M31,9.47a18.45,18.45,0,0,0-5.4-5.24L24.15,5.69A16.39,16.39,0,0,1,29,10,16.47,16.47,0,0,1,15.71,16.7a17.24,17.24,0,0,1-2.39-.18l-1.71,1.71a18.61,18.61,0,0,0,4.1.47A18.45,18.45,0,0,0,31,10.59,1,1,0,0,0,31,9.47Z"});
return obj38225;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38222,G__38223) : helix.core.jsx.call(null,G__38222,G__38223));
})(),(function (){var G__38226 = "path";
var G__38227 = (function (){var obj38229 = ({"fill":"#d4d4d3","d":"M15.71,16.29A6.27,6.27,0,0,0,22,10a6.11,6.11,0,0,0-.29-1.88L13.83,16A6.53,6.53,0,0,0,15.71,16.29Z"});
return obj38229;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38226,G__38227) : helix.core.jsx.call(null,G__38226,G__38227));
})(),(function (){var G__38230 = "path";
var G__38231 = (function (){var obj38233 = ({"fill":"#d4d4d3","d":"M24.55,1.19a1,1,0,0,0-1.41,0L21.9,2.43a18.4,18.4,0,0,0-21.47,7,1,1,0,0,0,0,1.12,18.44,18.44,0,0,0,7.12,6.19l-.67.67a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L24.55,2.6A1,1,0,0,0,24.55,1.19ZM2.48,10A16.36,16.36,0,0,1,20.3,4L19.37,5A6.25,6.25,0,0,0,9.45,10a6.13,6.13,0,0,0,1.19,3.65l-1.59,1.6A16.5,16.5,0,0,1,2.48,10Z"});
return obj38233;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38230,G__38231) : helix.core.jsx.call(null,G__38230,G__38231));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38220,G__38221) : helix.core.jsxs.call(null,G__38220,G__38221));
})()),(function (){var G__38234 = "rect";
var G__38235 = (function (){var obj38237 = ({"width":(576),"height":(512),"x":(0),"stroke":"none","fill":"none","cursor":"pointer","onClick":on_change,"y":(0),"pointerEvents":"visibleFill"});
return obj38237;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38234,G__38235) : helix.core.jsx.call(null,G__38234,G__38235));
})()]});
return obj38207;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38204,G__38205) : helix.core.jsxs.call(null,G__38204,G__38205));
})()});
return obj38203;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38200,G__38201) : helix.core.jsx.call(null,G__38200,G__38201));
});
if(goog.DEBUG === true){
var G__38238 = G__38195;
(G__38238.displayName = "app.shared.components.form/checkbox");

return G__38238;
} else {
return G__38195;
}
})();




app.shared.components.form.input_number = (function (){var G__38241 = (function app$shared$components$form$input_number_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__38242 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__38245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38242,(0),null);
var map__38245__$1 = cljs.core.__destructure_map(map__38245);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38245__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38245__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38245__$1,new cljs.core.Keyword(null,"max","max",61366548));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38245__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38245__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38245__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));

var G__38246 = "div";
var G__38247 = (function (){var obj38249 = ({"className":"control","children":(function (){var G__38250 = "input";
var G__38251 = (function (){var obj38253 = ({"className":"input is-small","type":"number","value":helix.impl.props.or_undefined(value),"min":min,"max":max,"step":step,"onChange":(function (p1__38239_SHARP_){
if(cljs.core.empty_QMARK_(p1__38239_SHARP_.target.value)){
return null;
} else {
var G__38254 = parseFloat(p1__38239_SHARP_.target.value);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__38254) : on_change.call(null,G__38254));
}
}),"onBlur":on_blur});
return obj38253;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38250,G__38251) : helix.core.jsx.call(null,G__38250,G__38251));
})()});
return obj38249;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38246,G__38247) : helix.core.jsx.call(null,G__38246,G__38247));
});
if(goog.DEBUG === true){
var G__38255 = G__38241;
(G__38255.displayName = "app.shared.components.form/input-number");

return G__38255;
} else {
return G__38241;
}
})();



app.shared.components.form.debounce_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.shared.components.form.validate_input_number__ = (function app$shared$components$form$validate_input_number__(v,min,max,message){
cljs.core.reset_BANG_(app.shared.components.form.debounce_atom,v);

var c__27277__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27278__auto__ = (function (){var switch__27098__auto__ = (function (state_38303){
var state_val_38304 = (state_38303[(1)]);
if((state_val_38304 === (7))){
var inst_38268 = (v < min);
var state_38303__$1 = state_38303;
if(cljs.core.truth_(inst_38268)){
var statearr_38305_38354 = state_38303__$1;
(statearr_38305_38354[(1)] = (9));

} else {
var statearr_38306_38355 = state_38303__$1;
(statearr_38306_38355[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (1))){
var inst_38256 = cljs.core.async.timeout((2000));
var state_38303__$1 = state_38303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38303__$1,(2),inst_38256);
} else {
if((state_val_38304 === (4))){
var inst_38263 = (v < (0));
var state_38303__$1 = state_38303;
var statearr_38307_38357 = state_38303__$1;
(statearr_38307_38357[(2)] = inst_38263);

(statearr_38307_38357[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (15))){
var state_38303__$1 = state_38303;
var statearr_38308_38358 = state_38303__$1;
(statearr_38308_38358[(2)] = v);

(statearr_38308_38358[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (13))){
var state_38303__$1 = state_38303;
var statearr_38309_38362 = state_38303__$1;
(statearr_38309_38362[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (6))){
var state_38303__$1 = state_38303;
var statearr_38311_38363 = state_38303__$1;
(statearr_38311_38363[(2)] = min);

(statearr_38311_38363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (17))){
var inst_38295 = (state_38303[(2)]);
var state_38303__$1 = state_38303;
var statearr_38312_38366 = state_38303__$1;
(statearr_38312_38366[(2)] = inst_38295);

(statearr_38312_38366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (3))){
var inst_38260 = (state_38303[(7)]);
var state_38303__$1 = state_38303;
var statearr_38313_38369 = state_38303__$1;
(statearr_38313_38369[(2)] = inst_38260);

(statearr_38313_38369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (12))){
var inst_38282 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38283 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"duration","duration",1444101068)];
var inst_38284 = cljs.core.random_uuid();
var inst_38285 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38284);
var inst_38286 = [inst_38285,message,(5000)];
var inst_38287 = cljs.core.PersistentHashMap.fromArrays(inst_38283,inst_38286);
var inst_38288 = [new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),inst_38287];
var inst_38289 = (new cljs.core.PersistentVector(null,2,(5),inst_38282,inst_38288,null));
var inst_38290 = refx.alpha.dispatch(inst_38289);
var state_38303__$1 = (function (){var statearr_38314 = state_38303;
(statearr_38314[(8)] = inst_38290);

return statearr_38314;
})();
var statearr_38315_38374 = state_38303__$1;
(statearr_38315_38374[(2)] = max);

(statearr_38315_38374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (2))){
var inst_38260 = (state_38303[(7)]);
var inst_38258 = (state_38303[(2)]);
var inst_38259 = typeof v === 'number';
var inst_38260__$1 = cljs.core.not(inst_38259);
var state_38303__$1 = (function (){var statearr_38316 = state_38303;
(statearr_38316[(7)] = inst_38260__$1);

(statearr_38316[(9)] = inst_38258);

return statearr_38316;
})();
if(inst_38260__$1){
var statearr_38317_38379 = state_38303__$1;
(statearr_38317_38379[(1)] = (3));

} else {
var statearr_38318_38380 = state_38303__$1;
(statearr_38318_38380[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (11))){
var inst_38299 = (state_38303[(2)]);
var state_38303__$1 = state_38303;
var statearr_38319_38381 = state_38303__$1;
(statearr_38319_38381[(2)] = inst_38299);

(statearr_38319_38381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (9))){
var inst_38270 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38271 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"duration","duration",1444101068)];
var inst_38272 = cljs.core.random_uuid();
var inst_38273 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38272);
var inst_38274 = [inst_38273,message,(5000)];
var inst_38275 = cljs.core.PersistentHashMap.fromArrays(inst_38271,inst_38274);
var inst_38276 = [new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),inst_38275];
var inst_38277 = (new cljs.core.PersistentVector(null,2,(5),inst_38270,inst_38276,null));
var inst_38278 = refx.alpha.dispatch(inst_38277);
var state_38303__$1 = (function (){var statearr_38320 = state_38303;
(statearr_38320[(10)] = inst_38278);

return statearr_38320;
})();
var statearr_38321_38383 = state_38303__$1;
(statearr_38321_38383[(2)] = min);

(statearr_38321_38383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (5))){
var inst_38265 = (state_38303[(2)]);
var state_38303__$1 = state_38303;
if(cljs.core.truth_(inst_38265)){
var statearr_38322_38385 = state_38303__$1;
(statearr_38322_38385[(1)] = (6));

} else {
var statearr_38323_38387 = state_38303__$1;
(statearr_38323_38387[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (14))){
var inst_38297 = (state_38303[(2)]);
var state_38303__$1 = state_38303;
var statearr_38324_38388 = state_38303__$1;
(statearr_38324_38388[(2)] = inst_38297);

(statearr_38324_38388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (16))){
var state_38303__$1 = state_38303;
var statearr_38325_38389 = state_38303__$1;
(statearr_38325_38389[(2)] = null);

(statearr_38325_38389[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (10))){
var inst_38280 = (v > max);
var state_38303__$1 = state_38303;
if(cljs.core.truth_(inst_38280)){
var statearr_38326_38390 = state_38303__$1;
(statearr_38326_38390[(1)] = (12));

} else {
var statearr_38327_38391 = state_38303__$1;
(statearr_38327_38391[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38304 === (8))){
var inst_38301 = (state_38303[(2)]);
var state_38303__$1 = state_38303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38303__$1,inst_38301);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var app$shared$components$form$validate_input_number___$_state_machine__27099__auto__ = null;
var app$shared$components$form$validate_input_number___$_state_machine__27099__auto____0 = (function (){
var statearr_38328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38328[(0)] = app$shared$components$form$validate_input_number___$_state_machine__27099__auto__);

(statearr_38328[(1)] = (1));

return statearr_38328;
});
var app$shared$components$form$validate_input_number___$_state_machine__27099__auto____1 = (function (state_38303){
while(true){
var ret_value__27100__auto__ = (function (){try{while(true){
var result__27101__auto__ = switch__27098__auto__(state_38303);
if(cljs.core.keyword_identical_QMARK_(result__27101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27101__auto__;
}
break;
}
}catch (e38329){var ex__27102__auto__ = e38329;
var statearr_38330_38396 = state_38303;
(statearr_38330_38396[(2)] = ex__27102__auto__);


if(cljs.core.seq((state_38303[(4)]))){
var statearr_38331_38397 = state_38303;
(statearr_38331_38397[(1)] = cljs.core.first((state_38303[(4)])));

} else {
throw ex__27102__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38400 = state_38303;
state_38303 = G__38400;
continue;
} else {
return ret_value__27100__auto__;
}
break;
}
});
app$shared$components$form$validate_input_number___$_state_machine__27099__auto__ = function(state_38303){
switch(arguments.length){
case 0:
return app$shared$components$form$validate_input_number___$_state_machine__27099__auto____0.call(this);
case 1:
return app$shared$components$form$validate_input_number___$_state_machine__27099__auto____1.call(this,state_38303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$shared$components$form$validate_input_number___$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$0 = app$shared$components$form$validate_input_number___$_state_machine__27099__auto____0;
app$shared$components$form$validate_input_number___$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$1 = app$shared$components$form$validate_input_number___$_state_machine__27099__auto____1;
return app$shared$components$form$validate_input_number___$_state_machine__27099__auto__;
})()
})();
var state__27279__auto__ = (function (){var statearr_38332 = f__27278__auto__();
(statearr_38332[(6)] = c__27277__auto__);

return statearr_38332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27279__auto__);
}));

return c__27277__auto__;
});
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
