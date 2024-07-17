goog.provide('app.ui.shared.components.form');

app.ui.shared.components.form.field_row = (function (){var G__32273 = (function app$ui$shared$components$form$field_row_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__32295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32292,(0),null);
var map__32295__$1 = cljs.core.__destructure_map(map__32295);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32295__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32295__$1,new cljs.core.Keyword(null,"children","children",-940561982));

var G__32355 = helix.core.Fragment;
var G__32356 = ({"children": [(function (){var G__32380 = "h6";
var G__32381 = (function (){var obj32389 = ({"className":"title is-6 dialog-label","children":label});
return obj32389;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32380,G__32381) : helix.core.jsx.call(null,G__32380,G__32381));
})(),(function (){var G__32398 = "div";
var G__32399 = (function (){var obj32401 = ({"className":"field has-addons","children":children});
return obj32401;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32398,G__32399) : helix.core.jsx.call(null,G__32398,G__32399));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32355,G__32356) : helix.core.jsxs.call(null,G__32355,G__32356));
});
if(goog.DEBUG === true){
var G__32414 = G__32273;
(G__32414.displayName = "app.ui.shared.components.form/field-row");

return G__32414;
} else {
return G__32273;
}
})();




app.ui.shared.components.form.select = (function (){var G__32449 = (function app$ui$shared$components$form$select_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32483 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__32488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32483,(0),null);
var map__32488__$1 = cljs.core.__destructure_map(map__32488);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32488__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32488__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32488__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));

var G__32514 = "div";
var G__32515 = (function (){var obj32520 = ({"className":"control is-expanded","children":(function (){var G__32526 = "div";
var G__32527 = (function (){var obj32535 = ({"className":"select is-small is-full-width","children":(function (){var G__32543 = "select";
var G__32544 = (function (){var obj32552 = ({"size":(1),"value":helix.impl.props.or_undefined(value),"onChange":(function (p1__32427_SHARP_){
var G__32562 = p1__32427_SHARP_.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__32562) : on_change.call(null,G__32562));
}),"children":cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32430_SHARP_){
var G__32586 = "option";
var G__32587 = (function (){var obj32592 = ({"value":helix.impl.props.or_undefined(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__32430_SHARP_)),"children":new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__32430_SHARP_)});
return obj32592;
})();
var G__32588 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__32430_SHARP_);
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$3 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$3(G__32586,G__32587,G__32588) : helix.core.jsx.call(null,G__32586,G__32587,G__32588));
}),data)});
return obj32552;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32543,G__32544) : helix.core.jsx.call(null,G__32543,G__32544));
})()});
return obj32535;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32526,G__32527) : helix.core.jsx.call(null,G__32526,G__32527));
})()});
return obj32520;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32514,G__32515) : helix.core.jsx.call(null,G__32514,G__32515));
});
if(goog.DEBUG === true){
var G__32617 = G__32449;
(G__32617.displayName = "app.ui.shared.components.form/select");

return G__32617;
} else {
return G__32449;
}
})();




app.ui.shared.components.form.checkbox = (function (){var G__32657 = (function app$ui$shared$components$form$checkbox_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32660 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__32663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32660,(0),null);
var map__32663__$1 = cljs.core.__destructure_map(map__32663);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32663__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32663__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));

var G__32672 = "div";
var G__32673 = (function (){var obj32677 = ({"className":"control","children":(function (){var G__32679 = "svg";
var G__32680 = (function (){var obj32684 = ({"viewBox":"0 0 31.43 20.05","style":(function (){var obj32688 = ({"position":helix.impl.props.__GT_js("relative"),"height":helix.impl.props.__GT_js((20)),"marginLeft":helix.impl.props.__GT_js((15)),"marginTop":helix.impl.props.__GT_js((5))});
return obj32688;
})(),"children":[(cljs.core.truth_(value)?(function (){var G__32690 = helix.core.Fragment;
var G__32691 = ({"children": [(function (){var G__32724 = "path";
var G__32725 = (function (){var obj32727 = ({"fill":"#a1a1a1","d":"M15.71,18.7A18.43,18.43,0,0,1,.43,10.59a1,1,0,0,1,0-1.12A18.45,18.45,0,0,1,31,9.47a1,1,0,0,1,0,1.12A18.45,18.45,0,0,1,15.71,18.7ZM2.48,10A16.45,16.45,0,0,0,15.71,16.7,16.47,16.47,0,0,0,29,10,16.45,16.45,0,0,0,2.48,10Z"});
return obj32727;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32724,G__32725) : helix.core.jsx.call(null,G__32724,G__32725));
})(),(function (){var G__32731 = "path";
var G__32732 = (function (){var obj32736 = ({"fill":"#a1a1a1","d":"M15.71,3.76A6.27,6.27,0,1,0,22,10,6.26,6.26,0,0,0,15.71,3.76Zm2.15,5.81a1.72,1.72,0,1,1,1.71-1.71A1.71,1.71,0,0,1,17.86,9.57Z"});
return obj32736;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32731,G__32732) : helix.core.jsx.call(null,G__32731,G__32732));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32690,G__32691) : helix.core.jsxs.call(null,G__32690,G__32691));
})():(function (){var G__32737 = helix.core.Fragment;
var G__32738 = ({"children": [(function (){var G__32741 = "path";
var G__32742 = (function (){var obj32746 = ({"fill":"#d4d4d3","d":"M31,9.47a18.45,18.45,0,0,0-5.4-5.24L24.15,5.69A16.39,16.39,0,0,1,29,10,16.47,16.47,0,0,1,15.71,16.7a17.24,17.24,0,0,1-2.39-.18l-1.71,1.71a18.61,18.61,0,0,0,4.1.47A18.45,18.45,0,0,0,31,10.59,1,1,0,0,0,31,9.47Z"});
return obj32746;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32741,G__32742) : helix.core.jsx.call(null,G__32741,G__32742));
})(),(function (){var G__32748 = "path";
var G__32749 = (function (){var obj32751 = ({"fill":"#d4d4d3","d":"M15.71,16.29A6.27,6.27,0,0,0,22,10a6.11,6.11,0,0,0-.29-1.88L13.83,16A6.53,6.53,0,0,0,15.71,16.29Z"});
return obj32751;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32748,G__32749) : helix.core.jsx.call(null,G__32748,G__32749));
})(),(function (){var G__32752 = "path";
var G__32753 = (function (){var obj32757 = ({"fill":"#d4d4d3","d":"M24.55,1.19a1,1,0,0,0-1.41,0L21.9,2.43a18.4,18.4,0,0,0-21.47,7,1,1,0,0,0,0,1.12,18.44,18.44,0,0,0,7.12,6.19l-.67.67a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L24.55,2.6A1,1,0,0,0,24.55,1.19ZM2.48,10A16.36,16.36,0,0,1,20.3,4L19.37,5A6.25,6.25,0,0,0,9.45,10a6.13,6.13,0,0,0,1.19,3.65l-1.59,1.6A16.5,16.5,0,0,1,2.48,10Z"});
return obj32757;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32752,G__32753) : helix.core.jsx.call(null,G__32752,G__32753));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32737,G__32738) : helix.core.jsxs.call(null,G__32737,G__32738));
})()),(function (){var G__32763 = "rect";
var G__32764 = (function (){var obj32766 = ({"width":(576),"height":(512),"x":(0),"stroke":"none","fill":"none","cursor":"pointer","onClick":on_change,"y":(0),"pointerEvents":"visibleFill"});
return obj32766;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32763,G__32764) : helix.core.jsx.call(null,G__32763,G__32764));
})()]});
return obj32684;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32679,G__32680) : helix.core.jsxs.call(null,G__32679,G__32680));
})()});
return obj32677;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32672,G__32673) : helix.core.jsx.call(null,G__32672,G__32673));
});
if(goog.DEBUG === true){
var G__32771 = G__32657;
(G__32771.displayName = "app.ui.shared.components.form/checkbox");

return G__32771;
} else {
return G__32657;
}
})();




app.ui.shared.components.form.input_number = (function (){var G__32790 = (function app$ui$shared$components$form$input_number_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32797 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);
var map__32800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32797,(0),null);
var map__32800__$1 = cljs.core.__destructure_map(map__32800);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32800__$1,new cljs.core.Keyword(null,"value","value",305978217));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32800__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32800__$1,new cljs.core.Keyword(null,"max","max",61366548));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32800__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32800__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32800__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));

var G__32810 = "div";
var G__32811 = (function (){var obj32813 = ({"className":"control","children":(function (){var G__32816 = "input";
var G__32817 = (function (){var obj32821 = ({"className":"input is-small","type":"number","value":helix.impl.props.or_undefined(value),"min":min,"max":max,"step":step,"onChange":(function (p1__32780_SHARP_){
if(cljs.core.empty_QMARK_(p1__32780_SHARP_.target.value)){
return null;
} else {
var G__32826 = parseFloat(p1__32780_SHARP_.target.value);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__32826) : on_change.call(null,G__32826));
}
}),"onBlur":on_blur});
return obj32821;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32816,G__32817) : helix.core.jsx.call(null,G__32816,G__32817));
})()});
return obj32813;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32810,G__32811) : helix.core.jsx.call(null,G__32810,G__32811));
});
if(goog.DEBUG === true){
var G__32834 = G__32790;
(G__32834.displayName = "app.ui.shared.components.form/input-number");

return G__32834;
} else {
return G__32790;
}
})();



app.ui.shared.components.form.validate_input_number = (function app$ui$shared$components$form$validate_input_number(v,min,max,message,dispatch_action){
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

//# sourceMappingURL=app.ui.shared.components.form.js.map
