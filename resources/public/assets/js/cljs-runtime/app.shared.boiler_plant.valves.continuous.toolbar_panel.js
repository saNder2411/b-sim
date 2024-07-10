goog.provide('app.shared.boiler_plant.valves.continuous.toolbar_panel');

app.shared.boiler_plant.valves.continuous.toolbar_panel.valve_continuous_toolbar_panel = (function (){var G__57470 = (function app$shared$boiler_plant$valves$continuous$toolbar_panel$valve_continuous_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__57471 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve-show-toolbar-panel","continuous-valve-show-toolbar-panel",-1191947348)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__57474 = helix.core.Fragment;
var G__57475 = ({"children": [(function (){var G__57476 = app.shared.components.toolbar.title;
var G__57477 = (function (){var obj57479 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Continuous Blowdown Valve"});
return obj57479;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57476,G__57477) : helix.core.jsx.call(null,G__57476,G__57477));
})(),(function (){var G__57480 = app.shared.sidebar.control_panel.slider.core.slider;
var G__57481 = (function (){var obj57483 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj57483;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57480,G__57481) : helix.core.jsx.call(null,G__57480,G__57481));
})(),(function (){var G__57484 = app.shared.components.toolbar.btn_wrapper;
var G__57485 = (function (){var obj57487 = ({"x":(1064),"y":(54),"children":(function (){var G__57488 = app.shared.components.toolbar.btn_divider;
var G__57489 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57488,G__57489) : helix.core.jsx.call(null,G__57488,G__57489));
})()});
return obj57487;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57484,G__57485) : helix.core.jsx.call(null,G__57484,G__57485));
})(),(function (){var G__57490 = app.shared.components.toolbar.btn_wrapper;
var G__57491 = (function (){var obj57493 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__57494 = app.shared.components.toolbar.btn_settings;
var G__57495 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57494,G__57495) : helix.core.jsx.call(null,G__57494,G__57495));
})()});
return obj57493;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57490,G__57491) : helix.core.jsx.call(null,G__57490,G__57491));
})(),(function (){var G__57496 = app.shared.components.toolbar.btn_wrapper;
var G__57497 = (function (){var obj57499 = ({"x":(1174),"y":(54),"children":(function (){var G__57500 = app.shared.components.toolbar.btn_divider;
var G__57501 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57500,G__57501) : helix.core.jsx.call(null,G__57500,G__57501));
})()});
return obj57499;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57496,G__57497) : helix.core.jsx.call(null,G__57496,G__57497));
})(),(function (){var G__57502 = app.shared.components.toolbar.btn_wrapper;
var G__57503 = (function (){var obj57505 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Continuous Blowdown Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__57506 = app.shared.components.toolbar.btn_info;
var G__57507 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57506,G__57507) : helix.core.jsx.call(null,G__57506,G__57507));
})()});
return obj57505;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__57502,G__57503) : helix.core.jsx.call(null,G__57502,G__57503));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__57474,G__57475) : helix.core.jsxs.call(null,G__57474,G__57475));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__57508 = G__57470;
(G__57508.displayName = "app.shared.boiler-plant.valves.continuous.toolbar-panel/valve-continuous-toolbar-panel");

return G__57508;
} else {
return G__57470;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.valves.continuous.toolbar_panel.js.map
