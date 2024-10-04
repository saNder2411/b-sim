goog.provide('app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.toolbar_panel');

app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.toolbar_panel.continuous_valve_toolbar_panel = (function (){var G__37914 = (function app$ui$shared$boiler_plant$actuators$blowdown$continuous_valve$toolbar_panel$continuous_valve_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37922 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","show-toolbar-panel","continuous-valve/show-toolbar-panel",2116068164)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__37943 = helix.core.Fragment;
var G__37944 = ({"children": [(function (){var G__37952 = app.ui.shared.components.toolbar.title;
var G__37953 = (function (){var obj37960 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Continuous Blowdown Valve"});
return obj37960;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37952,G__37953) : helix.core.jsx.call(null,G__37952,G__37953));
})(),(function (){var G__37974 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__37975 = (function (){var obj37987 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj37987;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37974,G__37975) : helix.core.jsx.call(null,G__37974,G__37975));
})(),(function (){var G__38015 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38016 = (function (){var obj38024 = ({"x":(1064),"y":(54),"children":(function (){var G__38032 = app.ui.shared.components.toolbar.btn_divider;
var G__38033 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38032,G__38033) : helix.core.jsx.call(null,G__38032,G__38033));
})()});
return obj38024;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38015,G__38016) : helix.core.jsx.call(null,G__38015,G__38016));
})(),(function (){var G__38064 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38065 = (function (){var obj38078 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change","continuous-valve/change",-1492217236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__38099 = app.ui.shared.components.toolbar.btn_settings;
var G__38100 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38099,G__38100) : helix.core.jsx.call(null,G__38099,G__38100));
})()});
return obj38078;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38064,G__38065) : helix.core.jsx.call(null,G__38064,G__38065));
})(),(function (){var G__38127 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38128 = (function (){var obj38145 = ({"x":(1174),"y":(54),"children":(function (){var G__38154 = app.ui.shared.components.toolbar.btn_divider;
var G__38155 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38154,G__38155) : helix.core.jsx.call(null,G__38154,G__38155));
})()});
return obj38145;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38127,G__38128) : helix.core.jsx.call(null,G__38127,G__38128));
})(),(function (){var G__38184 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38185 = (function (){var obj38192 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Continuous Blowdown Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__38213 = app.ui.shared.components.toolbar.btn_info;
var G__38214 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38213,G__38214) : helix.core.jsx.call(null,G__38213,G__38214));
})()});
return obj38192;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38184,G__38185) : helix.core.jsx.call(null,G__38184,G__38185));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37943,G__37944) : helix.core.jsxs.call(null,G__37943,G__37944));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38358 = G__37914;
(G__38358.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.continuous-valve.toolbar-panel/continuous-valve-toolbar-panel");

return G__38358;
} else {
return G__37914;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.toolbar_panel.js.map
