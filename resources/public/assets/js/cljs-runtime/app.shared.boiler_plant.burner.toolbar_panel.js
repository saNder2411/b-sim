goog.provide('app.shared.boiler_plant.burner.toolbar_panel');

app.shared.boiler_plant.burner.toolbar_panel.burner_toolbar_panel = (function (){var G__32487 = (function app$shared$boiler_plant$burner$toolbar_panel$burner_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-show-toolbar-panel","burner-show-toolbar-panel",-923534479)], null));
if(cljs.core.truth_(show_toolbar)){
var G__32491 = helix.core.Fragment;
var G__32492 = ({"children": [(function (){var G__32493 = app.shared.components.toolbar.title;
var G__32494 = (function (){var obj32496 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Burner"});
return obj32496;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32493,G__32494) : helix.core.jsx.call(null,G__32493,G__32494));
})(),(function (){var G__32497 = app.shared.components.toolbar.btn_wrapper;
var G__32498 = (function (){var obj32500 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),true], null)], null));
}),"children":(function (){var G__32501 = app.shared.components.toolbar.btn_settings;
var G__32502 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32501,G__32502) : helix.core.jsx.call(null,G__32501,G__32502));
})()});
return obj32500;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32497,G__32498) : helix.core.jsx.call(null,G__32497,G__32498));
})(),(function (){var G__32503 = app.shared.components.toolbar.btn_wrapper;
var G__32504 = (function (){var obj32506 = ({"x":(1174),"y":(54),"children":(function (){var G__32507 = app.shared.components.toolbar.btn_divider;
var G__32508 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32507,G__32508) : helix.core.jsx.call(null,G__32507,G__32508));
})()});
return obj32506;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32503,G__32504) : helix.core.jsx.call(null,G__32503,G__32504));
})(),(function (){var G__32509 = app.shared.components.toolbar.btn_wrapper;
var G__32510 = (function (){var obj32512 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Burner",new cljs.core.Keyword(null,"text","text",-1790561697),"The burner is a device where fuel and air are mixed in the correct proportion, blown into a combustion chamber and combusted forming a flame. The main function of the burner is to keep the pressure inside the boiler within a certain desired range."], null)], null));
}),"children":(function (){var G__32513 = app.shared.components.toolbar.btn_info;
var G__32514 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32513,G__32514) : helix.core.jsx.call(null,G__32513,G__32514));
})()});
return obj32512;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32509,G__32510) : helix.core.jsx.call(null,G__32509,G__32510));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32491,G__32492) : helix.core.jsxs.call(null,G__32491,G__32492));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__32515 = G__32487;
(G__32515.displayName = "app.shared.boiler-plant.burner.toolbar-panel/burner-toolbar-panel");

return G__32515;
} else {
return G__32487;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.burner.toolbar_panel.js.map
