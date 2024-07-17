goog.provide('app.ui.shared.boiler_plant.valves.feedwater_pn.toolbar_panel');

app.ui.shared.boiler_plant.valves.feedwater_pn.toolbar_panel.valve_feedwater_pneumatic_toolbar_panel = (function (){var G__31266 = (function app$ui$shared$boiler_plant$valves$feedwater_pn$toolbar_panel$valve_feedwater_pneumatic_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31279 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve-pn-show-toolbar-panel","feedwater-valve-pn-show-toolbar-panel",1716952325)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__31303 = helix.core.Fragment;
var G__31304 = ({"children": [(function (){var G__31311 = app.ui.shared.components.toolbar.title;
var G__31313 = (function (){var obj31331 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Pneumatic Valve"});
return obj31331;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31311,G__31313) : helix.core.jsx.call(null,G__31311,G__31313));
})(),(function (){var G__31342 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__31343 = (function (){var obj31357 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj31357;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31342,G__31343) : helix.core.jsx.call(null,G__31342,G__31343));
})(),(function (){var G__31377 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31378 = (function (){var obj31386 = ({"x":(1064),"y":(54),"children":(function (){var G__31397 = app.ui.shared.components.toolbar.btn_divider;
var G__31398 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31397,G__31398) : helix.core.jsx.call(null,G__31397,G__31398));
})()});
return obj31386;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31377,G__31378) : helix.core.jsx.call(null,G__31377,G__31378));
})(),(function (){var G__31419 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31420 = (function (){var obj31432 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve-pn","change-feedwater-valve-pn",470650960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__31450 = app.ui.shared.components.toolbar.btn_settings;
var G__31453 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31450,G__31453) : helix.core.jsx.call(null,G__31450,G__31453));
})()});
return obj31432;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31419,G__31420) : helix.core.jsx.call(null,G__31419,G__31420));
})(),(function (){var G__31472 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31473 = (function (){var obj31482 = ({"x":(1174),"y":(54),"children":(function (){var G__31492 = app.ui.shared.components.toolbar.btn_divider;
var G__31494 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31492,G__31494) : helix.core.jsx.call(null,G__31492,G__31494));
})()});
return obj31482;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31472,G__31473) : helix.core.jsx.call(null,G__31472,G__31473));
})(),(function (){var G__31504 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31505 = (function (){var obj31516 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater valve is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__31533 = app.ui.shared.components.toolbar.btn_info;
var G__31535 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31533,G__31535) : helix.core.jsx.call(null,G__31533,G__31535));
})()});
return obj31516;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31504,G__31505) : helix.core.jsx.call(null,G__31504,G__31505));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31303,G__31304) : helix.core.jsxs.call(null,G__31303,G__31304));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31558 = G__31266;
(G__31558.displayName = "app.ui.shared.boiler-plant.valves.feedwater-pn.toolbar-panel/valve-feedwater-pneumatic-toolbar-panel");

return G__31558;
} else {
return G__31266;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.valves.feedwater_pn.toolbar_panel.js.map
