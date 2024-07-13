goog.provide('app.shared.boiler_plant.valves.feedwater.toolbar_panel');

app.shared.boiler_plant.valves.feedwater.toolbar_panel.valve_feedwater_toolbar_panel = (function (){var G__81247 = (function app$shared$boiler_plant$valves$feedwater$toolbar_panel$valve_feedwater_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__81256 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve-show-toolbar-panel","feedwater-valve-show-toolbar-panel",1796498686)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__81268 = helix.core.Fragment;
var G__81269 = ({"children": [(function (){var G__81280 = app.shared.components.toolbar.title;
var G__81281 = (function (){var obj81289 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Electric Valve"});
return obj81289;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81280,G__81281) : helix.core.jsx.call(null,G__81280,G__81281));
})(),(function (){var G__81302 = app.shared.sidebar.control_panel.slider.core.slider;
var G__81303 = (function (){var obj81309 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj81309;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81302,G__81303) : helix.core.jsx.call(null,G__81302,G__81303));
})(),(function (){var G__81315 = app.shared.components.toolbar.btn_wrapper;
var G__81316 = (function (){var obj81318 = ({"x":(1064),"y":(54),"children":(function (){var G__81321 = app.shared.components.toolbar.btn_divider;
var G__81322 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81321,G__81322) : helix.core.jsx.call(null,G__81321,G__81322));
})()});
return obj81318;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81315,G__81316) : helix.core.jsx.call(null,G__81315,G__81316));
})(),(function (){var G__81330 = app.shared.components.toolbar.btn_wrapper;
var G__81331 = (function (){var obj81333 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__81341 = app.shared.components.toolbar.btn_settings;
var G__81342 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81341,G__81342) : helix.core.jsx.call(null,G__81341,G__81342));
})()});
return obj81333;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81330,G__81331) : helix.core.jsx.call(null,G__81330,G__81331));
})(),(function (){var G__81348 = app.shared.components.toolbar.btn_wrapper;
var G__81349 = (function (){var obj81351 = ({"x":(1174),"y":(54),"children":(function (){var G__81352 = app.shared.components.toolbar.btn_divider;
var G__81353 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81352,G__81353) : helix.core.jsx.call(null,G__81352,G__81353));
})()});
return obj81351;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81348,G__81349) : helix.core.jsx.call(null,G__81348,G__81349));
})(),(function (){var G__81359 = app.shared.components.toolbar.btn_wrapper;
var G__81360 = (function (){var obj81366 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater valve is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__81374 = app.shared.components.toolbar.btn_info;
var G__81375 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81374,G__81375) : helix.core.jsx.call(null,G__81374,G__81375));
})()});
return obj81366;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81359,G__81360) : helix.core.jsx.call(null,G__81359,G__81360));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__81268,G__81269) : helix.core.jsxs.call(null,G__81268,G__81269));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__81388 = G__81247;
(G__81388.displayName = "app.shared.boiler-plant.valves.feedwater.toolbar-panel/valve-feedwater-toolbar-panel");

return G__81388;
} else {
return G__81247;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.valves.feedwater.toolbar_panel.js.map
