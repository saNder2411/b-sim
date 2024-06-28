goog.provide('app.shared.boiler_plant.valves.continuous.toolbar_panel');

app.shared.boiler_plant.valves.continuous.toolbar_panel.valve_continuous_toolbar_panel = (function (){var G__65976 = (function app$shared$boiler_plant$valves$continuous$toolbar_panel$valve_continuous_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65983 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve-show-toolbar-panel","continuous-valve-show-toolbar-panel",-1191947348)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__65986 = helix.core.Fragment;
var G__65989 = ({"children": [(function (){var G__65996 = app.shared.components.toolbar.title;
var G__65997 = (function (){var obj65999 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Continuous Blowdown Valve"});
return obj65999;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65996,G__65997) : helix.core.jsx.call(null,G__65996,G__65997));
})(),(function (){var G__66004 = app.shared.sidebar.control_panel.slider.core.slider;
var G__66005 = (function (){var obj66008 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj66008;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66004,G__66005) : helix.core.jsx.call(null,G__66004,G__66005));
})(),(function (){var G__66016 = app.shared.components.toolbar.btn_wrapper;
var G__66017 = (function (){var obj66019 = ({"x":(1064),"y":(54),"children":(function (){var G__66024 = app.shared.components.toolbar.btn_divider;
var G__66025 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66024,G__66025) : helix.core.jsx.call(null,G__66024,G__66025));
})()});
return obj66019;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66016,G__66017) : helix.core.jsx.call(null,G__66016,G__66017));
})(),(function (){var G__66030 = app.shared.components.toolbar.btn_wrapper;
var G__66031 = (function (){var obj66037 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__66040 = app.shared.components.toolbar.btn_settings;
var G__66041 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66040,G__66041) : helix.core.jsx.call(null,G__66040,G__66041));
})()});
return obj66037;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66030,G__66031) : helix.core.jsx.call(null,G__66030,G__66031));
})(),(function (){var G__66048 = app.shared.components.toolbar.btn_wrapper;
var G__66049 = (function (){var obj66053 = ({"x":(1174),"y":(54),"children":(function (){var G__66058 = app.shared.components.toolbar.btn_divider;
var G__66059 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66058,G__66059) : helix.core.jsx.call(null,G__66058,G__66059));
})()});
return obj66053;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66048,G__66049) : helix.core.jsx.call(null,G__66048,G__66049));
})(),(function (){var G__66062 = app.shared.components.toolbar.btn_wrapper;
var G__66063 = (function (){var obj66067 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Continuous Blowdown Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__66071 = app.shared.components.toolbar.btn_info;
var G__66072 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66071,G__66072) : helix.core.jsx.call(null,G__66071,G__66072));
})()});
return obj66067;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66062,G__66063) : helix.core.jsx.call(null,G__66062,G__66063));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65986,G__65989) : helix.core.jsxs.call(null,G__65986,G__65989));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__66079 = G__65976;
(G__66079.displayName = "app.shared.boiler-plant.valves.continuous.toolbar-panel/valve-continuous-toolbar-panel");

return G__66079;
} else {
return G__65976;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.valves.continuous.toolbar_panel.js.map
