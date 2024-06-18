goog.provide('app.shared.boiler_plant.valves.continuous.toolbar_panel');

app.shared.boiler_plant.valves.continuous.toolbar_panel.valve_continuous_toolbar_panel = (function (){var G__54296 = (function app$shared$boiler_plant$valves$continuous$toolbar_panel$valve_continuous_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__54298 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve-show-toolbar-panel","continuous-valve-show-toolbar-panel",-1191947348)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__54304 = helix.core.Fragment;
var G__54305 = ({"children": [(function (){var G__54306 = app.shared.components.toolbar_title.toolbar_title;
var G__54307 = (function (){var obj54311 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Continuous Blowdown Valve"});
return obj54311;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54306,G__54307) : helix.core.jsx.call(null,G__54306,G__54307));
})(),(function (){var G__54314 = app.shared.sidebar.control_panel.slider.core.slider;
var G__54317 = (function (){var obj54319 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj54319;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54314,G__54317) : helix.core.jsx.call(null,G__54314,G__54317));
})(),(function (){var G__54324 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54325 = (function (){var obj54327 = ({"x":(1064),"y":(54),"children":(function (){var G__54328 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__54329 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54328,G__54329) : helix.core.jsx.call(null,G__54328,G__54329));
})()});
return obj54327;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54324,G__54325) : helix.core.jsx.call(null,G__54324,G__54325));
})(),(function (){var G__54332 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54333 = (function (){var obj54337 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__54340 = app.shared.components.toolbar_btn_settings.toolbar_btn_settings;
var G__54341 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54340,G__54341) : helix.core.jsx.call(null,G__54340,G__54341));
})()});
return obj54337;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54332,G__54333) : helix.core.jsx.call(null,G__54332,G__54333));
})(),(function (){var G__54344 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54345 = (function (){var obj54349 = ({"x":(1174),"y":(54),"children":(function (){var G__54352 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__54353 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54352,G__54353) : helix.core.jsx.call(null,G__54352,G__54353));
})()});
return obj54349;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54344,G__54345) : helix.core.jsx.call(null,G__54344,G__54345));
})(),(function (){var G__54356 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54357 = (function (){var obj54361 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Continuous Blowdown Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__54364 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__54365 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54364,G__54365) : helix.core.jsx.call(null,G__54364,G__54365));
})()});
return obj54361;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54356,G__54357) : helix.core.jsx.call(null,G__54356,G__54357));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__54304,G__54305) : helix.core.jsxs.call(null,G__54304,G__54305));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__54372 = G__54296;
(G__54372.displayName = "app.shared.boiler-plant.valves.continuous.toolbar-panel/valve-continuous-toolbar-panel");

return G__54372;
} else {
return G__54296;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.valves.continuous.toolbar_panel.js.map
