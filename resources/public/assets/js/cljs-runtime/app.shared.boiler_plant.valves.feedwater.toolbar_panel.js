goog.provide('app.shared.boiler_plant.valves.feedwater.toolbar_panel');

app.shared.boiler_plant.valves.feedwater.toolbar_panel.valve_feedwater_toolbar_panel = (function (){var G__71298 = (function app$shared$boiler_plant$valves$feedwater$toolbar_panel$valve_feedwater_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__71299 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve-show-toolbar-panel","feedwater-valve-show-toolbar-panel",1796498686)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__71312 = helix.core.Fragment;
var G__71313 = ({"children": [(function (){var G__71316 = app.shared.components.toolbar.title;
var G__71317 = (function (){var obj71321 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Valve"});
return obj71321;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71316,G__71317) : helix.core.jsx.call(null,G__71316,G__71317));
})(),(function (){var G__71323 = app.shared.sidebar.control_panel.slider.core.slider;
var G__71324 = (function (){var obj71328 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj71328;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71323,G__71324) : helix.core.jsx.call(null,G__71323,G__71324));
})(),(function (){var G__71331 = app.shared.components.toolbar.btn_wrapper;
var G__71332 = (function (){var obj71334 = ({"x":(1064),"y":(54),"children":(function (){var G__71338 = app.shared.components.toolbar.btn_divider;
var G__71339 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71338,G__71339) : helix.core.jsx.call(null,G__71338,G__71339));
})()});
return obj71334;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71331,G__71332) : helix.core.jsx.call(null,G__71331,G__71332));
})(),(function (){var G__71344 = app.shared.components.toolbar.btn_wrapper;
var G__71345 = (function (){var obj71347 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__71351 = app.shared.components.toolbar.btn_settings;
var G__71352 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71351,G__71352) : helix.core.jsx.call(null,G__71351,G__71352));
})()});
return obj71347;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71344,G__71345) : helix.core.jsx.call(null,G__71344,G__71345));
})(),(function (){var G__71353 = app.shared.components.toolbar.btn_wrapper;
var G__71354 = (function (){var obj71356 = ({"x":(1174),"y":(54),"children":(function (){var G__71357 = app.shared.components.toolbar.btn_divider;
var G__71358 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71357,G__71358) : helix.core.jsx.call(null,G__71357,G__71358));
})()});
return obj71356;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71353,G__71354) : helix.core.jsx.call(null,G__71353,G__71354));
})(),(function (){var G__71361 = app.shared.components.toolbar.btn_wrapper;
var G__71362 = (function (){var obj71365 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater valve is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__71370 = app.shared.components.toolbar.btn_info;
var G__71371 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71370,G__71371) : helix.core.jsx.call(null,G__71370,G__71371));
})()});
return obj71365;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__71361,G__71362) : helix.core.jsx.call(null,G__71361,G__71362));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__71312,G__71313) : helix.core.jsxs.call(null,G__71312,G__71313));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__71376 = G__71298;
(G__71376.displayName = "app.shared.boiler-plant.valves.feedwater.toolbar-panel/valve-feedwater-toolbar-panel");

return G__71376;
} else {
return G__71298;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.valves.feedwater.toolbar_panel.js.map
