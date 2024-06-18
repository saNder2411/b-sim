goog.provide('app.shared.boiler_plant.burner.toolbar_panel');

app.shared.boiler_plant.burner.toolbar_panel.burner_toolbar_panel = (function (){var G__54023 = (function app$shared$boiler_plant$burner$toolbar_panel$burner_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__54024 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-show-toolbar-panel","burner-show-toolbar-panel",-923534479)], null));
if(cljs.core.truth_(show_toolbar)){
var G__54027 = helix.core.Fragment;
var G__54028 = ({"children": [(function (){var G__54029 = app.shared.components.toolbar_title.toolbar_title;
var G__54030 = (function (){var obj54032 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Burner"});
return obj54032;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54029,G__54030) : helix.core.jsx.call(null,G__54029,G__54030));
})(),(function (){var G__54033 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54034 = (function (){var obj54036 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__54037 = app.shared.components.toolbar_btn_settings.toolbar_btn_settings;
var G__54038 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54037,G__54038) : helix.core.jsx.call(null,G__54037,G__54038));
})()});
return obj54036;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54033,G__54034) : helix.core.jsx.call(null,G__54033,G__54034));
})(),(function (){var G__54039 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54040 = (function (){var obj54042 = ({"x":(1174),"y":(54),"children":(function (){var G__54043 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__54044 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54043,G__54044) : helix.core.jsx.call(null,G__54043,G__54044));
})()});
return obj54042;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54039,G__54040) : helix.core.jsx.call(null,G__54039,G__54040));
})(),(function (){var G__54045 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__54046 = (function (){var obj54048 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Burner",new cljs.core.Keyword(null,"text","text",-1790561697),"The burner is a device where fuel and air are mixed in the correct proportion, blown into a combustion chamber and combusted forming a flame. The main function of the burner is to keep the pressure inside the boiler within a certain desired range."], null)], null));
}),"children":(function (){var G__54049 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__54050 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54049,G__54050) : helix.core.jsx.call(null,G__54049,G__54050));
})()});
return obj54048;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54045,G__54046) : helix.core.jsx.call(null,G__54045,G__54046));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__54027,G__54028) : helix.core.jsxs.call(null,G__54027,G__54028));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__54051 = G__54023;
(G__54051.displayName = "app.shared.boiler-plant.burner.toolbar-panel/burner-toolbar-panel");

return G__54051;
} else {
return G__54023;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.burner.toolbar_panel.js.map
