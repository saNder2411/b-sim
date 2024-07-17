goog.provide('app.ui.shared.boiler_plant.valves.feedwater.toolbar_panel');

app.ui.shared.boiler_plant.valves.feedwater.toolbar_panel.valve_feedwater_toolbar_panel = (function (){var G__31265 = (function app$ui$shared$boiler_plant$valves$feedwater$toolbar_panel$valve_feedwater_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31278 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve-show-toolbar-panel","feedwater-valve-show-toolbar-panel",1796498686)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__31299 = helix.core.Fragment;
var G__31300 = ({"children": [(function (){var G__31312 = app.ui.shared.components.toolbar.title;
var G__31314 = (function (){var obj31319 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Electric Valve"});
return obj31319;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31312,G__31314) : helix.core.jsx.call(null,G__31312,G__31314));
})(),(function (){var G__31336 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__31337 = (function (){var obj31347 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj31347;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31336,G__31337) : helix.core.jsx.call(null,G__31336,G__31337));
})(),(function (){var G__31370 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31371 = (function (){var obj31486 = ({"x":(1064),"y":(54),"children":(function (){var G__31499 = app.ui.shared.components.toolbar.btn_divider;
var G__31500 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31499,G__31500) : helix.core.jsx.call(null,G__31499,G__31500));
})()});
return obj31486;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31370,G__31371) : helix.core.jsx.call(null,G__31370,G__31371));
})(),(function (){var G__31513 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31514 = (function (){var obj31525 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__31542 = app.ui.shared.components.toolbar.btn_settings;
var G__31543 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31542,G__31543) : helix.core.jsx.call(null,G__31542,G__31543));
})()});
return obj31525;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31513,G__31514) : helix.core.jsx.call(null,G__31513,G__31514));
})(),(function (){var G__31556 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31557 = (function (){var obj31567 = ({"x":(1174),"y":(54),"children":(function (){var G__31572 = app.ui.shared.components.toolbar.btn_divider;
var G__31573 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31572,G__31573) : helix.core.jsx.call(null,G__31572,G__31573));
})()});
return obj31567;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31556,G__31557) : helix.core.jsx.call(null,G__31556,G__31557));
})(),(function (){var G__31594 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31595 = (function (){var obj31601 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater valve is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__31624 = app.ui.shared.components.toolbar.btn_info;
var G__31625 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31624,G__31625) : helix.core.jsx.call(null,G__31624,G__31625));
})()});
return obj31601;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31594,G__31595) : helix.core.jsx.call(null,G__31594,G__31595));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31299,G__31300) : helix.core.jsxs.call(null,G__31299,G__31300));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31652 = G__31265;
(G__31652.displayName = "app.ui.shared.boiler-plant.valves.feedwater.toolbar-panel/valve-feedwater-toolbar-panel");

return G__31652;
} else {
return G__31265;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.valves.feedwater.toolbar_panel.js.map
