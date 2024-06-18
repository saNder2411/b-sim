goog.provide('app.shared.boiler_plant.pumps.feedwater.toolbar_panel');

app.shared.boiler_plant.pumps.feedwater.toolbar_panel.pump_feedwater_toolbar_panel = (function (){var G__54815 = (function app$shared$boiler_plant$pumps$feedwater$toolbar_panel$pump_feedwater_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__54816 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump-show-toolbar-panel","feedwater-pump-show-toolbar-panel",-123747195)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__54819 = helix.core.Fragment;
var G__54820 = ({"children": [(function (){var G__54821 = app.shared.components.toolbar_title.toolbar_title;
var G__54822 = (function (){var obj54824 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Pump"});
return obj54824;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54821,G__54822) : helix.core.jsx.call(null,G__54821,G__54822));
})(),(function (){var G__54825 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54826 = (function (){var obj54828 = ({"x":(930),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__54829 = app.shared.components.toolbar_btn_valve_close.toolbar_btn_valve_close;
var G__54830 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54829,G__54830) : helix.core.jsx.call(null,G__54829,G__54830));
})()});
return obj54828;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54825,G__54826) : helix.core.jsx.call(null,G__54825,G__54826));
})(),(function (){var G__54831 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54832 = (function (){var obj54834 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__54835 = app.shared.components.toolbar_btn_valve_open.toolbar_btn_valve_open;
var G__54836 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54835,G__54836) : helix.core.jsx.call(null,G__54835,G__54836));
})()});
return obj54834;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54831,G__54832) : helix.core.jsx.call(null,G__54831,G__54832));
})(),(function (){var G__54837 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54838 = (function (){var obj54840 = ({"x":(1064),"y":(54),"children":(function (){var G__54841 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__54842 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54841,G__54842) : helix.core.jsx.call(null,G__54841,G__54842));
})()});
return obj54840;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54837,G__54838) : helix.core.jsx.call(null,G__54837,G__54838));
})(),(function (){var G__54843 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54844 = (function (){var obj54846 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__54847 = app.shared.components.toolbar_btn_settings.toolbar_btn_settings;
var G__54848 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54847,G__54848) : helix.core.jsx.call(null,G__54847,G__54848));
})()});
return obj54846;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54843,G__54844) : helix.core.jsx.call(null,G__54843,G__54844));
})(),(function (){var G__54849 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54850 = (function (){var obj54852 = ({"x":(1174),"y":(54),"children":(function (){var G__54853 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__54854 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54853,G__54854) : helix.core.jsx.call(null,G__54853,G__54854));
})()});
return obj54852;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54849,G__54850) : helix.core.jsx.call(null,G__54849,G__54850));
})(),(function (){var G__54855 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54856 = (function (){var obj54858 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Pump",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater pump is an actuator that pumps water into the boiler to keep the water level at the desired value."], null)], null));
}),"children":(function (){var G__54859 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__54860 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54859,G__54860) : helix.core.jsx.call(null,G__54859,G__54860));
})()});
return obj54858;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54855,G__54856) : helix.core.jsx.call(null,G__54855,G__54856));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__54819,G__54820) : helix.core.jsxs.call(null,G__54819,G__54820));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__54861 = G__54815;
(G__54861.displayName = "app.shared.boiler-plant.pumps.feedwater.toolbar-panel/pump-feedwater-toolbar-panel");

return G__54861;
} else {
return G__54815;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.pumps.feedwater.toolbar_panel.js.map
