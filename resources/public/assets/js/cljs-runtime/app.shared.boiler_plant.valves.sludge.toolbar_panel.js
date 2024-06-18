goog.provide('app.shared.boiler_plant.valves.sludge.toolbar_panel');

app.shared.boiler_plant.valves.sludge.toolbar_panel.valve_sludge_toolbar_panel = (function (){var G__54439 = (function app$shared$boiler_plant$valves$sludge$toolbar_panel$valve_sludge_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__54440 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve-show-toolbar-panel","sludge-valve-show-toolbar-panel",-26377558)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__54447 = helix.core.Fragment;
var G__54448 = ({"children": [(function (){var G__54450 = app.shared.components.toolbar_title.toolbar_title;
var G__54452 = (function (){var obj54456 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Bottom Blowdown Valve"});
return obj54456;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54450,G__54452) : helix.core.jsx.call(null,G__54450,G__54452));
})(),(function (){var G__54458 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54459 = (function (){var obj54463 = ({"x":(930),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__54466 = app.shared.components.toolbar_btn_valve_close.toolbar_btn_valve_close;
var G__54467 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54466,G__54467) : helix.core.jsx.call(null,G__54466,G__54467));
})()});
return obj54463;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54458,G__54459) : helix.core.jsx.call(null,G__54458,G__54459));
})(),(function (){var G__54474 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54475 = (function (){var obj54477 = ({"x":(1004),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__54482 = app.shared.components.toolbar_btn_valve_open.toolbar_btn_valve_open;
var G__54483 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54482,G__54483) : helix.core.jsx.call(null,G__54482,G__54483));
})()});
return obj54477;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54474,G__54475) : helix.core.jsx.call(null,G__54474,G__54475));
})(),(function (){var G__54486 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54487 = (function (){var obj54489 = ({"x":(1064),"y":(54),"children":(function (){var G__54492 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__54493 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54492,G__54493) : helix.core.jsx.call(null,G__54492,G__54493));
})()});
return obj54489;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54486,G__54487) : helix.core.jsx.call(null,G__54486,G__54487));
})(),(function (){var G__54498 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54499 = (function (){var obj54501 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__54506 = app.shared.components.toolbar_btn_settings.toolbar_btn_settings;
var G__54507 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54506,G__54507) : helix.core.jsx.call(null,G__54506,G__54507));
})()});
return obj54501;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54498,G__54499) : helix.core.jsx.call(null,G__54498,G__54499));
})(),(function (){var G__54510 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54511 = (function (){var obj54513 = ({"x":(1174),"y":(54),"children":(function (){var G__54514 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__54515 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54514,G__54515) : helix.core.jsx.call(null,G__54514,G__54515));
})()});
return obj54513;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54510,G__54511) : helix.core.jsx.call(null,G__54510,G__54511));
})(),(function (){var G__54517 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54518 = (function (){var obj54520 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Bottom Blowdown Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The bottom blowdown valve is an actuator that blows down sludge accumulated on the bottom of the boiler."], null)], null));
}),"children":(function (){var G__54521 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__54522 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54521,G__54522) : helix.core.jsx.call(null,G__54521,G__54522));
})()});
return obj54520;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54517,G__54518) : helix.core.jsx.call(null,G__54517,G__54518));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__54447,G__54448) : helix.core.jsxs.call(null,G__54447,G__54448));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__54523 = G__54439;
(G__54523.displayName = "app.shared.boiler-plant.valves.sludge.toolbar-panel/valve-sludge-toolbar-panel");

return G__54523;
} else {
return G__54439;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.valves.sludge.toolbar_panel.js.map
