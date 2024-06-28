goog.provide('app.shared.components.form');

app.shared.components.form.field_row = (function (){var G__29832 = (function app$shared$components$form$field_row_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29833 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__29836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29833,(0),null);
var map__29836__$1 = cljs.core.__destructure_map(map__29836);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29836__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29836__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__29837 = helix.core.Fragment;
var G__29838 = ({"children": [(function (){var G__29839 = "h6";
var G__29840 = (function (){var obj29842 = ({"className":"title is-6 dialog-label","children":label});
return obj29842;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29839,G__29840) : helix.core.jsx.call(null,G__29839,G__29840));
})(),(function (){var G__29843 = "div";
var G__29844 = (function (){var obj29846 = ({"className":"field has-addons","children":children});
return obj29846;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29843,G__29844) : helix.core.jsx.call(null,G__29843,G__29844));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29837,G__29838) : helix.core.jsxs.call(null,G__29837,G__29838));
});
if(goog.DEBUG === true){
var G__29847 = G__29832;
(G__29847.displayName = "app.shared.components.form/field-row");

return G__29847;
} else {
return G__29832;
}
})();




app.shared.components.form.select = (function (){var G__29851 = (function app$shared$components$form$select_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29852 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__29855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29852,(0),null);
var map__29855__$1 = cljs.core.__destructure_map(map__29855);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29855__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29855__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29855__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));

var G__29856 = "div";
var G__29857 = (function (){var obj29859 = ({"className":"control is-expanded","children":(function (){var G__29860 = "div";
var G__29861 = (function (){var obj29863 = ({"className":"select is-small is-full-width","children":(function (){var G__29864 = "select";
var G__29865 = (function (){var obj29867 = ({"size":(1),"value":helix.impl.props.or_undefined(value),"onChange":(function (p1__29848_SHARP_){
var G__29868 = p1__29848_SHARP_.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__29868) : on_change.call(null,G__29868));
}),"children":cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29849_SHARP_){
var G__29869 = "option";
var G__29870 = (function (){var obj29873 = ({"value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29849_SHARP_)),"children":new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__29849_SHARP_)});
return obj29873;
})();
var G__29871 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__29849_SHARP_);
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$3 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$3(G__29869,G__29870,G__29871) : helix.core.jsx.call(null,G__29869,G__29870,G__29871));
}),data)});
return obj29867;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29864,G__29865) : helix.core.jsx.call(null,G__29864,G__29865));
})()});
return obj29863;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29860,G__29861) : helix.core.jsx.call(null,G__29860,G__29861));
})()});
return obj29859;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29856,G__29857) : helix.core.jsx.call(null,G__29856,G__29857));
});
if(goog.DEBUG === true){
var G__29874 = G__29851;
(G__29874.displayName = "app.shared.components.form/select");

return G__29874;
} else {
return G__29851;
}
})();




app.shared.components.form.checkbox = (function (){var G__29876 = (function app$shared$components$form$checkbox_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__29880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29877,(0),null);
var map__29880__$1 = cljs.core.__destructure_map(map__29880);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29880__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29880__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));

var G__29881 = "div";
var G__29882 = (function (){var obj29884 = ({"className":"control","children":(function (){var G__29885 = "svg";
var G__29886 = (function (){var obj29888 = ({"viewBox":"0 0 31.43 20.05","style":(function (){var obj29890 = ({"position":helix.impl.props.__GT_js("relative"),"height":helix.impl.props.__GT_js((20)),"marginLeft":helix.impl.props.__GT_js((15)),"marginTop":helix.impl.props.__GT_js((5))});
return obj29890;
})(),"children":[(cljs.core.truth_(value)?(function (){var G__29891 = helix.core.Fragment;
var G__29892 = ({"children": [(function (){var G__29893 = "path";
var G__29894 = (function (){var obj29896 = ({"fill":"#d4d4d3","d":"M15.71,18.7A18.43,18.43,0,0,1,.43,10.59a1,1,0,0,1,0-1.12A18.45,18.45,0,0,1,31,9.47a1,1,0,0,1,0,1.12A18.45,18.45,0,0,1,15.71,18.7ZM2.48,10A16.45,16.45,0,0,0,15.71,16.7,16.47,16.47,0,0,0,29,10,16.45,16.45,0,0,0,2.48,10Z"});
return obj29896;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29893,G__29894) : helix.core.jsx.call(null,G__29893,G__29894));
})(),(function (){var G__29897 = "path";
var G__29898 = (function (){var obj29900 = ({"fill":"#d4d4d3","d":"M15.71,3.76A6.27,6.27,0,1,0,22,10,6.26,6.26,0,0,0,15.71,3.76Zm2.15,5.81a1.72,1.72,0,1,1,1.71-1.71A1.71,1.71,0,0,1,17.86,9.57Z"});
return obj29900;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29897,G__29898) : helix.core.jsx.call(null,G__29897,G__29898));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29891,G__29892) : helix.core.jsxs.call(null,G__29891,G__29892));
})():(function (){var G__29901 = helix.core.Fragment;
var G__29902 = ({"children": [(function (){var G__29903 = "path";
var G__29904 = (function (){var obj29906 = ({"fill":"#d4d4d3","d":"M31,9.47a18.45,18.45,0,0,0-5.4-5.24L24.15,5.69A16.39,16.39,0,0,1,29,10,16.47,16.47,0,0,1,15.71,16.7a17.24,17.24,0,0,1-2.39-.18l-1.71,1.71a18.61,18.61,0,0,0,4.1.47A18.45,18.45,0,0,0,31,10.59,1,1,0,0,0,31,9.47Z"});
return obj29906;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29903,G__29904) : helix.core.jsx.call(null,G__29903,G__29904));
})(),(function (){var G__29907 = "path";
var G__29908 = (function (){var obj29910 = ({"fill":"#d4d4d3","d":"M15.71,16.29A6.27,6.27,0,0,0,22,10a6.11,6.11,0,0,0-.29-1.88L13.83,16A6.53,6.53,0,0,0,15.71,16.29Z"});
return obj29910;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29907,G__29908) : helix.core.jsx.call(null,G__29907,G__29908));
})(),(function (){var G__29911 = "path";
var G__29912 = (function (){var obj29914 = ({"fill":"#d4d4d3","d":"M24.55,1.19a1,1,0,0,0-1.41,0L21.9,2.43a18.4,18.4,0,0,0-21.47,7,1,1,0,0,0,0,1.12,18.44,18.44,0,0,0,7.12,6.19l-.67.67a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L24.55,2.6A1,1,0,0,0,24.55,1.19ZM2.48,10A16.36,16.36,0,0,1,20.3,4L19.37,5A6.25,6.25,0,0,0,9.45,10a6.13,6.13,0,0,0,1.19,3.65l-1.59,1.6A16.5,16.5,0,0,1,2.48,10Z"});
return obj29914;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29911,G__29912) : helix.core.jsx.call(null,G__29911,G__29912));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29901,G__29902) : helix.core.jsxs.call(null,G__29901,G__29902));
})()),(function (){var G__29915 = "rect";
var G__29916 = (function (){var obj29918 = ({"width":(576),"height":(512),"x":(0),"stroke":"none","fill":"none","cursor":"pointer","onClick":on_change,"y":(0),"pointerEvents":"visibleFill"});
return obj29918;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29915,G__29916) : helix.core.jsx.call(null,G__29915,G__29916));
})()]});
return obj29888;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29885,G__29886) : helix.core.jsxs.call(null,G__29885,G__29886));
})()});
return obj29884;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29881,G__29882) : helix.core.jsx.call(null,G__29881,G__29882));
});
if(goog.DEBUG === true){
var G__29919 = G__29876;
(G__29919.displayName = "app.shared.components.form/checkbox");

return G__29919;
} else {
return G__29876;
}
})();




app.shared.components.form.input_number = (function (){var G__29922 = (function app$shared$components$form$input_number_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29923 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__29926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29923,(0),null);
var map__29926__$1 = cljs.core.__destructure_map(map__29926);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29926__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29926__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29926__$1,new cljs.core.Keyword(null,"max","max",61366548));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29926__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29926__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29926__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));

var G__29927 = "div";
var G__29928 = (function (){var obj29930 = ({"className":"control","children":(function (){var G__29931 = "input";
var G__29932 = (function (){var obj29934 = ({"className":"input is-small","type":"number","value":helix.impl.props.or_undefined(value),"min":min,"max":max,"step":step,"onChange":(function (p1__29920_SHARP_){
if(cljs.core.empty_QMARK_(p1__29920_SHARP_.target.value)){
return null;
} else {
var G__29935 = parseFloat(p1__29920_SHARP_.target.value);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__29935) : on_change.call(null,G__29935));
}
}),"onBlur":on_blur});
return obj29934;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29931,G__29932) : helix.core.jsx.call(null,G__29931,G__29932));
})()});
return obj29930;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29927,G__29928) : helix.core.jsx.call(null,G__29927,G__29928));
});
if(goog.DEBUG === true){
var G__29936 = G__29922;
(G__29936.displayName = "app.shared.components.form/input-number");

return G__29936;
} else {
return G__29922;
}
})();



app.shared.components.form.debounce_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.shared.components.form.validate_input_number__ = (function app$shared$components$form$validate_input_number__(v,min,max,message){
cljs.core.reset_BANG_(app.shared.components.form.debounce_atom,v);

var c__27277__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27278__auto__ = (function (){var switch__27098__auto__ = (function (state_29984){
var state_val_29985 = (state_29984[(1)]);
if((state_val_29985 === (7))){
var inst_29949 = (v < min);
var state_29984__$1 = state_29984;
if(cljs.core.truth_(inst_29949)){
var statearr_29986_30036 = state_29984__$1;
(statearr_29986_30036[(1)] = (9));

} else {
var statearr_29987_30037 = state_29984__$1;
(statearr_29987_30037[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (1))){
var inst_29937 = cljs.core.async.timeout((2000));
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29984__$1,(2),inst_29937);
} else {
if((state_val_29985 === (4))){
var inst_29944 = (v < (0));
var state_29984__$1 = state_29984;
var statearr_29988_30041 = state_29984__$1;
(statearr_29988_30041[(2)] = inst_29944);

(statearr_29988_30041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (15))){
var state_29984__$1 = state_29984;
var statearr_29989_30042 = state_29984__$1;
(statearr_29989_30042[(2)] = v);

(statearr_29989_30042[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (13))){
var state_29984__$1 = state_29984;
var statearr_29990_30043 = state_29984__$1;
(statearr_29990_30043[(1)] = (15));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (6))){
var state_29984__$1 = state_29984;
var statearr_29992_30046 = state_29984__$1;
(statearr_29992_30046[(2)] = min);

(statearr_29992_30046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (17))){
var inst_29976 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_29993_30049 = state_29984__$1;
(statearr_29993_30049[(2)] = inst_29976);

(statearr_29993_30049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (3))){
var inst_29941 = (state_29984[(7)]);
var state_29984__$1 = state_29984;
var statearr_29994_30050 = state_29984__$1;
(statearr_29994_30050[(2)] = inst_29941);

(statearr_29994_30050[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (12))){
var inst_29963 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29964 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"duration","duration",1444101068)];
var inst_29965 = cljs.core.random_uuid();
var inst_29966 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29965);
var inst_29967 = [inst_29966,message,(5000)];
var inst_29968 = cljs.core.PersistentHashMap.fromArrays(inst_29964,inst_29967);
var inst_29969 = [new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),inst_29968];
var inst_29970 = (new cljs.core.PersistentVector(null,2,(5),inst_29963,inst_29969,null));
var inst_29971 = refx.alpha.dispatch(inst_29970);
var state_29984__$1 = (function (){var statearr_29995 = state_29984;
(statearr_29995[(8)] = inst_29971);

return statearr_29995;
})();
var statearr_29996_30055 = state_29984__$1;
(statearr_29996_30055[(2)] = max);

(statearr_29996_30055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (2))){
var inst_29941 = (state_29984[(7)]);
var inst_29939 = (state_29984[(2)]);
var inst_29940 = typeof v === 'number';
var inst_29941__$1 = cljs.core.not(inst_29940);
var state_29984__$1 = (function (){var statearr_29997 = state_29984;
(statearr_29997[(9)] = inst_29939);

(statearr_29997[(7)] = inst_29941__$1);

return statearr_29997;
})();
if(inst_29941__$1){
var statearr_29998_30058 = state_29984__$1;
(statearr_29998_30058[(1)] = (3));

} else {
var statearr_29999_30061 = state_29984__$1;
(statearr_29999_30061[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (11))){
var inst_29980 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30000_30062 = state_29984__$1;
(statearr_30000_30062[(2)] = inst_29980);

(statearr_30000_30062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (9))){
var inst_29951 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29952 = [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"duration","duration",1444101068)];
var inst_29953 = cljs.core.random_uuid();
var inst_29954 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29953);
var inst_29955 = [inst_29954,message,(5000)];
var inst_29956 = cljs.core.PersistentHashMap.fromArrays(inst_29952,inst_29955);
var inst_29957 = [new cljs.core.Keyword(null,"push-notification","push-notification",1138471720),inst_29956];
var inst_29958 = (new cljs.core.PersistentVector(null,2,(5),inst_29951,inst_29957,null));
var inst_29959 = refx.alpha.dispatch(inst_29958);
var state_29984__$1 = (function (){var statearr_30001 = state_29984;
(statearr_30001[(10)] = inst_29959);

return statearr_30001;
})();
var statearr_30002_30064 = state_29984__$1;
(statearr_30002_30064[(2)] = min);

(statearr_30002_30064[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (5))){
var inst_29946 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
if(cljs.core.truth_(inst_29946)){
var statearr_30003_30065 = state_29984__$1;
(statearr_30003_30065[(1)] = (6));

} else {
var statearr_30004_30066 = state_29984__$1;
(statearr_30004_30066[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (14))){
var inst_29978 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30005_30067 = state_29984__$1;
(statearr_30005_30067[(2)] = inst_29978);

(statearr_30005_30067[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (16))){
var state_29984__$1 = state_29984;
var statearr_30006_30069 = state_29984__$1;
(statearr_30006_30069[(2)] = null);

(statearr_30006_30069[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (10))){
var inst_29961 = (v > max);
var state_29984__$1 = state_29984;
if(cljs.core.truth_(inst_29961)){
var statearr_30007_30071 = state_29984__$1;
(statearr_30007_30071[(1)] = (12));

} else {
var statearr_30008_30072 = state_29984__$1;
(statearr_30008_30072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (8))){
var inst_29982 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29984__$1,inst_29982);
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
var statearr_30009 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30009[(0)] = app$shared$components$form$validate_input_number___$_state_machine__27099__auto__);

(statearr_30009[(1)] = (1));

return statearr_30009;
});
var app$shared$components$form$validate_input_number___$_state_machine__27099__auto____1 = (function (state_29984){
while(true){
var ret_value__27100__auto__ = (function (){try{while(true){
var result__27101__auto__ = switch__27098__auto__(state_29984);
if(cljs.core.keyword_identical_QMARK_(result__27101__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27101__auto__;
}
break;
}
}catch (e30010){var ex__27102__auto__ = e30010;
var statearr_30011_30074 = state_29984;
(statearr_30011_30074[(2)] = ex__27102__auto__);


if(cljs.core.seq((state_29984[(4)]))){
var statearr_30012_30075 = state_29984;
(statearr_30012_30075[(1)] = cljs.core.first((state_29984[(4)])));

} else {
throw ex__27102__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27100__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30079 = state_29984;
state_29984 = G__30079;
continue;
} else {
return ret_value__27100__auto__;
}
break;
}
});
app$shared$components$form$validate_input_number___$_state_machine__27099__auto__ = function(state_29984){
switch(arguments.length){
case 0:
return app$shared$components$form$validate_input_number___$_state_machine__27099__auto____0.call(this);
case 1:
return app$shared$components$form$validate_input_number___$_state_machine__27099__auto____1.call(this,state_29984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$shared$components$form$validate_input_number___$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$0 = app$shared$components$form$validate_input_number___$_state_machine__27099__auto____0;
app$shared$components$form$validate_input_number___$_state_machine__27099__auto__.cljs$core$IFn$_invoke$arity$1 = app$shared$components$form$validate_input_number___$_state_machine__27099__auto____1;
return app$shared$components$form$validate_input_number___$_state_machine__27099__auto__;
})()
})();
var state__27279__auto__ = (function (){var statearr_30013 = f__27278__auto__();
(statearr_30013[(6)] = c__27277__auto__);

return statearr_30013;
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
