goog.provide('app.ui.shared.boiler_plant.burner.toolbar_panel');

app.ui.shared.boiler_plant.burner.toolbar_panel.burner_toolbar_panel = (function (){var G__31239 = (function app$ui$shared$boiler_plant$burner$toolbar_panel$burner_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31247 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-show-toolbar-panel","burner-show-toolbar-panel",-923534479)], null));
if(cljs.core.truth_(show_toolbar)){
var G__31267 = helix.core.Fragment;
var G__31268 = ({"children": [(function (){var G__31273 = app.ui.shared.components.toolbar.title;
var G__31275 = (function (){var obj31287 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Burner"});
return obj31287;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31273,G__31275) : helix.core.jsx.call(null,G__31273,G__31275));
})(),(function (){var G__31297 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31298 = (function (){var obj31308 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__31322 = app.ui.shared.components.toolbar.btn_settings;
var G__31323 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31322,G__31323) : helix.core.jsx.call(null,G__31322,G__31323));
})()});
return obj31308;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31297,G__31298) : helix.core.jsx.call(null,G__31297,G__31298));
})(),(function (){var G__31340 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31341 = (function (){var obj31355 = ({"x":(1174),"y":(54),"children":(function (){var G__31363 = app.ui.shared.components.toolbar.btn_divider;
var G__31364 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31363,G__31364) : helix.core.jsx.call(null,G__31363,G__31364));
})()});
return obj31355;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31340,G__31341) : helix.core.jsx.call(null,G__31340,G__31341));
})(),(function (){var G__31383 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31384 = (function (){var obj31394 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Burner",new cljs.core.Keyword(null,"text","text",-1790561697),"The burner is a device where fuel and air are mixed in the correct proportion, blown into a combustion chamber and combusted forming a flame. The main function of the burner is to keep the pressure inside the boiler within a certain desired range."], null)], null));
}),"children":(function (){var G__31412 = app.ui.shared.components.toolbar.btn_info;
var G__31413 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31412,G__31413) : helix.core.jsx.call(null,G__31412,G__31413));
})()});
return obj31394;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31383,G__31384) : helix.core.jsx.call(null,G__31383,G__31384));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31267,G__31268) : helix.core.jsxs.call(null,G__31267,G__31268));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31456 = G__31239;
(G__31456.displayName = "app.ui.shared.boiler-plant.burner.toolbar-panel/burner-toolbar-panel");

return G__31456;
} else {
return G__31239;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.burner.toolbar_panel.js.map
