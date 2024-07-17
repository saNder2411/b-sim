goog.provide('app.ui.shared.boiler_plant.valves.continuous.toolbar_panel');

app.ui.shared.boiler_plant.valves.continuous.toolbar_panel.valve_continuous_toolbar_panel = (function (){var G__31274 = (function app$ui$shared$boiler_plant$valves$continuous$toolbar_panel$valve_continuous_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31294 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve-show-toolbar-panel","continuous-valve-show-toolbar-panel",-1191947348)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__31315 = helix.core.Fragment;
var G__31316 = ({"children": [(function (){var G__31328 = app.ui.shared.components.toolbar.title;
var G__31329 = (function (){var obj31335 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Continuous Blowdown Valve"});
return obj31335;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31328,G__31329) : helix.core.jsx.call(null,G__31328,G__31329));
})(),(function (){var G__31350 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__31353 = (function (){var obj31362 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj31362;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31350,G__31353) : helix.core.jsx.call(null,G__31350,G__31353));
})(),(function (){var G__31381 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31382 = (function (){var obj31388 = ({"x":(1064),"y":(54),"children":(function (){var G__31399 = app.ui.shared.components.toolbar.btn_divider;
var G__31400 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31399,G__31400) : helix.core.jsx.call(null,G__31399,G__31400));
})()});
return obj31388;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31381,G__31382) : helix.core.jsx.call(null,G__31381,G__31382));
})(),(function (){var G__31418 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31421 = (function (){var obj31431 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__31451 = app.ui.shared.components.toolbar.btn_settings;
var G__31452 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31451,G__31452) : helix.core.jsx.call(null,G__31451,G__31452));
})()});
return obj31431;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31418,G__31421) : helix.core.jsx.call(null,G__31418,G__31421));
})(),(function (){var G__31471 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31474 = (function (){var obj31481 = ({"x":(1174),"y":(54),"children":(function (){var G__31491 = app.ui.shared.components.toolbar.btn_divider;
var G__31493 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31491,G__31493) : helix.core.jsx.call(null,G__31491,G__31493));
})()});
return obj31481;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31471,G__31474) : helix.core.jsx.call(null,G__31471,G__31474));
})(),(function (){var G__31552 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31553 = (function (){var obj31564 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Continuous Blowdown Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__31577 = app.ui.shared.components.toolbar.btn_info;
var G__31578 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31577,G__31578) : helix.core.jsx.call(null,G__31577,G__31578));
})()});
return obj31564;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31552,G__31553) : helix.core.jsx.call(null,G__31552,G__31553));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31315,G__31316) : helix.core.jsxs.call(null,G__31315,G__31316));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31610 = G__31274;
(G__31610.displayName = "app.ui.shared.boiler-plant.valves.continuous.toolbar-panel/valve-continuous-toolbar-panel");

return G__31610;
} else {
return G__31274;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.valves.continuous.toolbar_panel.js.map
