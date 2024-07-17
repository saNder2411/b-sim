goog.provide('app.ui.shared.boiler_plant.pumps.feedwater.toolbar_panel');

app.ui.shared.boiler_plant.pumps.feedwater.toolbar_panel.pump_feedwater_toolbar_panel = (function (){var G__31162 = (function app$ui$shared$boiler_plant$pumps$feedwater$toolbar_panel$pump_feedwater_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31164 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump-show-toolbar-panel","feedwater-pump-show-toolbar-panel",-123747195)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__31171 = helix.core.Fragment;
var G__31172 = ({"children": [(function (){var G__31175 = app.ui.shared.components.toolbar.title;
var G__31176 = (function (){var obj31178 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Pump"});
return obj31178;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31175,G__31176) : helix.core.jsx.call(null,G__31175,G__31176));
})(),(function (){var G__31184 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31185 = (function (){var obj31193 = ({"x":(930),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__31196 = app.ui.shared.components.toolbar.btn_valve_close;
var G__31197 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31196,G__31197) : helix.core.jsx.call(null,G__31196,G__31197));
})()});
return obj31193;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31184,G__31185) : helix.core.jsx.call(null,G__31184,G__31185));
})(),(function (){var G__31209 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31210 = (function (){var obj31215 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__31225 = app.ui.shared.components.toolbar.btn_valve_open;
var G__31226 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31225,G__31226) : helix.core.jsx.call(null,G__31225,G__31226));
})()});
return obj31215;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31209,G__31210) : helix.core.jsx.call(null,G__31209,G__31210));
})(),(function (){var G__31234 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31235 = (function (){var obj31310 = ({"x":(1064),"y":(54),"children":(function (){var G__31324 = app.ui.shared.components.toolbar.btn_divider;
var G__31325 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31324,G__31325) : helix.core.jsx.call(null,G__31324,G__31325));
})()});
return obj31310;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31234,G__31235) : helix.core.jsx.call(null,G__31234,G__31235));
})(),(function (){var G__31344 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31345 = (function (){var obj31359 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__31379 = app.ui.shared.components.toolbar.btn_settings;
var G__31380 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31379,G__31380) : helix.core.jsx.call(null,G__31379,G__31380));
})()});
return obj31359;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31344,G__31345) : helix.core.jsx.call(null,G__31344,G__31345));
})(),(function (){var G__31403 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31404 = (function (){var obj31409 = ({"x":(1174),"y":(54),"children":(function (){var G__31422 = app.ui.shared.components.toolbar.btn_divider;
var G__31423 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31422,G__31423) : helix.core.jsx.call(null,G__31422,G__31423));
})()});
return obj31409;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31403,G__31404) : helix.core.jsx.call(null,G__31403,G__31404));
})(),(function (){var G__31446 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31447 = (function (){var obj31458 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Pump",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater pump is an actuator that pumps water into the boiler to keep the water level at the desired value."], null)], null));
}),"children":(function (){var G__31477 = app.ui.shared.components.toolbar.btn_info;
var G__31478 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31477,G__31478) : helix.core.jsx.call(null,G__31477,G__31478));
})()});
return obj31458;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31446,G__31447) : helix.core.jsx.call(null,G__31446,G__31447));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31171,G__31172) : helix.core.jsxs.call(null,G__31171,G__31172));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31503 = G__31162;
(G__31503.displayName = "app.ui.shared.boiler-plant.pumps.feedwater.toolbar-panel/pump-feedwater-toolbar-panel");

return G__31503;
} else {
return G__31162;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.pumps.feedwater.toolbar_panel.js.map
