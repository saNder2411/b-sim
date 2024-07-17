goog.provide('app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.toolbar_panel');

app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.toolbar_panel.continuous_valve_toolbar_panel = (function (){var G__29825 = (function app$ui$shared$boiler_plant$actuators$blowdown$continuous_valve$toolbar_panel$continuous_valve_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29826 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve-show-toolbar-panel","continuous-valve-show-toolbar-panel",-1191947348)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__29829 = helix.core.Fragment;
var G__29830 = ({"children": [(function (){var G__29831 = app.ui.shared.components.toolbar.title;
var G__29832 = (function (){var obj29839 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Continuous Blowdown Valve"});
return obj29839;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29831,G__29832) : helix.core.jsx.call(null,G__29831,G__29832));
})(),(function (){var G__29852 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__29853 = (function (){var obj29857 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj29857;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29852,G__29853) : helix.core.jsx.call(null,G__29852,G__29853));
})(),(function (){var G__29869 = app.ui.shared.components.toolbar.btn_wrapper;
var G__29870 = (function (){var obj29875 = ({"x":(1064),"y":(54),"children":(function (){var G__29878 = app.ui.shared.components.toolbar.btn_divider;
var G__29879 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29878,G__29879) : helix.core.jsx.call(null,G__29878,G__29879));
})()});
return obj29875;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29869,G__29870) : helix.core.jsx.call(null,G__29869,G__29870));
})(),(function (){var G__29894 = app.ui.shared.components.toolbar.btn_wrapper;
var G__29895 = (function (){var obj29898 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__29906 = app.ui.shared.components.toolbar.btn_settings;
var G__29907 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29906,G__29907) : helix.core.jsx.call(null,G__29906,G__29907));
})()});
return obj29898;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29894,G__29895) : helix.core.jsx.call(null,G__29894,G__29895));
})(),(function (){var G__29923 = app.ui.shared.components.toolbar.btn_wrapper;
var G__29924 = (function (){var obj29928 = ({"x":(1174),"y":(54),"children":(function (){var G__29933 = app.ui.shared.components.toolbar.btn_divider;
var G__29934 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29933,G__29934) : helix.core.jsx.call(null,G__29933,G__29934));
})()});
return obj29928;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29923,G__29924) : helix.core.jsx.call(null,G__29923,G__29924));
})(),(function (){var G__29997 = app.ui.shared.components.toolbar.btn_wrapper;
var G__29998 = (function (){var obj30004 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Continuous Blowdown Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__30019 = app.ui.shared.components.toolbar.btn_info;
var G__30020 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30019,G__30020) : helix.core.jsx.call(null,G__30019,G__30020));
})()});
return obj30004;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29997,G__29998) : helix.core.jsx.call(null,G__29997,G__29998));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29829,G__29830) : helix.core.jsxs.call(null,G__29829,G__29830));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__30056 = G__29825;
(G__30056.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.continuous-valve.toolbar-panel/continuous-valve-toolbar-panel");

return G__30056;
} else {
return G__29825;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.toolbar_panel.js.map
