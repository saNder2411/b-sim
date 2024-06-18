goog.provide('app.shared.boiler_plant.valves.feedwater.toolbar_panel');

app.shared.boiler_plant.valves.feedwater.toolbar_panel.valve_feedwater_toolbar_panel = (function (){var G__54674 = (function app$shared$boiler_plant$valves$feedwater$toolbar_panel$valve_feedwater_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__54676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve-show-toolbar-panel","feedwater-valve-show-toolbar-panel",1796498686)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__54682 = helix.core.Fragment;
var G__54683 = ({"children": [(function (){var G__54686 = app.shared.components.toolbar_title.toolbar_title;
var G__54687 = (function (){var obj54691 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Valve"});
return obj54691;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54686,G__54687) : helix.core.jsx.call(null,G__54686,G__54687));
})(),(function (){var G__54694 = app.shared.sidebar.control_panel.slider.core.slider;
var G__54695 = (function (){var obj54699 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj54699;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54694,G__54695) : helix.core.jsx.call(null,G__54694,G__54695));
})(),(function (){var G__54702 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54703 = (function (){var obj54707 = ({"x":(1064),"y":(54),"children":(function (){var G__54708 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__54709 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54708,G__54709) : helix.core.jsx.call(null,G__54708,G__54709));
})()});
return obj54707;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54702,G__54703) : helix.core.jsx.call(null,G__54702,G__54703));
})(),(function (){var G__54714 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54715 = (function (){var obj54717 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__54720 = app.shared.components.toolbar_btn_settings.toolbar_btn_settings;
var G__54721 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54720,G__54721) : helix.core.jsx.call(null,G__54720,G__54721));
})()});
return obj54717;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54714,G__54715) : helix.core.jsx.call(null,G__54714,G__54715));
})(),(function (){var G__54724 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54725 = (function (){var obj54729 = ({"x":(1174),"y":(54),"children":(function (){var G__54732 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__54733 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54732,G__54733) : helix.core.jsx.call(null,G__54732,G__54733));
})()});
return obj54729;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54724,G__54725) : helix.core.jsx.call(null,G__54724,G__54725));
})(),(function (){var G__54734 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54735 = (function (){var obj54739 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater valve is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__54742 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__54743 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54742,G__54743) : helix.core.jsx.call(null,G__54742,G__54743));
})()});
return obj54739;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54734,G__54735) : helix.core.jsx.call(null,G__54734,G__54735));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__54682,G__54683) : helix.core.jsxs.call(null,G__54682,G__54683));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__54750 = G__54674;
(G__54750.displayName = "app.shared.boiler-plant.valves.feedwater.toolbar-panel/valve-feedwater-toolbar-panel");

return G__54750;
} else {
return G__54674;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.valves.feedwater.toolbar_panel.js.map
