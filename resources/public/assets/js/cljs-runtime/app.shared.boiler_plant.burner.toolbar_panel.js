goog.provide('app.shared.boiler_plant.burner.toolbar_panel');

app.shared.boiler_plant.burner.toolbar_panel.burner_toolbar_panel = (function (){var G__54262 = (function app$shared$boiler_plant$burner$toolbar_panel$burner_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__54273 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-show-toolbar-panel","burner-show-toolbar-panel",-923534479)], null));
if(cljs.core.truth_(show_toolbar)){
var G__54278 = helix.core.Fragment;
var G__54279 = ({"children": [(function (){var G__54281 = app.shared.components.toolbar.title;
var G__54282 = (function (){var obj54292 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Burner"});
return obj54292;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54281,G__54282) : helix.core.jsx.call(null,G__54281,G__54282));
})(),(function (){var G__54303 = app.shared.components.toolbar.btn_wrapper;
var G__54304 = (function (){var obj54312 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__54320 = app.shared.components.toolbar.btn_settings;
var G__54321 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54320,G__54321) : helix.core.jsx.call(null,G__54320,G__54321));
})()});
return obj54312;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54303,G__54304) : helix.core.jsx.call(null,G__54303,G__54304));
})(),(function (){var G__54335 = app.shared.components.toolbar.btn_wrapper;
var G__54336 = (function (){var obj54338 = ({"x":(1174),"y":(54),"children":(function (){var G__54342 = app.shared.components.toolbar.btn_divider;
var G__54343 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54342,G__54343) : helix.core.jsx.call(null,G__54342,G__54343));
})()});
return obj54338;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54335,G__54336) : helix.core.jsx.call(null,G__54335,G__54336));
})(),(function (){var G__54353 = app.shared.components.toolbar.btn_wrapper;
var G__54354 = (function (){var obj54360 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Burner",new cljs.core.Keyword(null,"text","text",-1790561697),"The burner is a device where fuel and air are mixed in the correct proportion, blown into a combustion chamber and combusted forming a flame. The main function of the burner is to keep the pressure inside the boiler within a certain desired range."], null)], null));
}),"children":(function (){var G__54367 = app.shared.components.toolbar.btn_info;
var G__54368 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54367,G__54368) : helix.core.jsx.call(null,G__54367,G__54368));
})()});
return obj54360;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__54353,G__54354) : helix.core.jsx.call(null,G__54353,G__54354));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__54278,G__54279) : helix.core.jsxs.call(null,G__54278,G__54279));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__54381 = G__54262;
(G__54381.displayName = "app.shared.boiler-plant.burner.toolbar-panel/burner-toolbar-panel");

return G__54381;
} else {
return G__54262;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.burner.toolbar_panel.js.map
