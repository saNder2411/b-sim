goog.provide('app.shared.boiler_plant.pumps.feedwater.toolbar_panel');

app.shared.boiler_plant.pumps.feedwater.toolbar_panel.pump_feedwater_toolbar_panel = (function (){var G__82954 = (function app$shared$boiler_plant$pumps$feedwater$toolbar_panel$pump_feedwater_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__82958 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump-show-toolbar-panel","feedwater-pump-show-toolbar-panel",-123747195)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__82962 = helix.core.Fragment;
var G__82963 = ({"children": [(function (){var G__82964 = app.shared.components.toolbar.title;
var G__82965 = (function (){var obj82967 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Pump"});
return obj82967;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82964,G__82965) : helix.core.jsx.call(null,G__82964,G__82965));
})(),(function (){var G__82968 = app.shared.components.toolbar.btn_wrapper;
var G__82969 = (function (){var obj82971 = ({"x":(930),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__82972 = app.shared.components.toolbar.btn_valve_close;
var G__82973 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82972,G__82973) : helix.core.jsx.call(null,G__82972,G__82973));
})()});
return obj82971;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82968,G__82969) : helix.core.jsx.call(null,G__82968,G__82969));
})(),(function (){var G__82974 = app.shared.components.toolbar.btn_wrapper;
var G__82975 = (function (){var obj82977 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__82978 = app.shared.components.toolbar.btn_valve_open;
var G__82979 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82978,G__82979) : helix.core.jsx.call(null,G__82978,G__82979));
})()});
return obj82977;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82974,G__82975) : helix.core.jsx.call(null,G__82974,G__82975));
})(),(function (){var G__82980 = app.shared.components.toolbar.btn_wrapper;
var G__82981 = (function (){var obj82983 = ({"x":(1064),"y":(54),"children":(function (){var G__82984 = app.shared.components.toolbar.btn_divider;
var G__82985 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82984,G__82985) : helix.core.jsx.call(null,G__82984,G__82985));
})()});
return obj82983;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82980,G__82981) : helix.core.jsx.call(null,G__82980,G__82981));
})(),(function (){var G__82986 = app.shared.components.toolbar.btn_wrapper;
var G__82987 = (function (){var obj82989 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__82990 = app.shared.components.toolbar.btn_settings;
var G__82991 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82990,G__82991) : helix.core.jsx.call(null,G__82990,G__82991));
})()});
return obj82989;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82986,G__82987) : helix.core.jsx.call(null,G__82986,G__82987));
})(),(function (){var G__82992 = app.shared.components.toolbar.btn_wrapper;
var G__82993 = (function (){var obj82995 = ({"x":(1174),"y":(54),"children":(function (){var G__82996 = app.shared.components.toolbar.btn_divider;
var G__82997 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82996,G__82997) : helix.core.jsx.call(null,G__82996,G__82997));
})()});
return obj82995;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82992,G__82993) : helix.core.jsx.call(null,G__82992,G__82993));
})(),(function (){var G__82998 = app.shared.components.toolbar.btn_wrapper;
var G__82999 = (function (){var obj83001 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Pump",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater pump is an actuator that pumps water into the boiler to keep the water level at the desired value."], null)], null));
}),"children":(function (){var G__83002 = app.shared.components.toolbar.btn_info;
var G__83003 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__83002,G__83003) : helix.core.jsx.call(null,G__83002,G__83003));
})()});
return obj83001;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__82998,G__82999) : helix.core.jsx.call(null,G__82998,G__82999));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__82962,G__82963) : helix.core.jsxs.call(null,G__82962,G__82963));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__83004 = G__82954;
(G__83004.displayName = "app.shared.boiler-plant.pumps.feedwater.toolbar-panel/pump-feedwater-toolbar-panel");

return G__83004;
} else {
return G__82954;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.pumps.feedwater.toolbar_panel.js.map
