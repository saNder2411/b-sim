goog.provide('app.shared.boiler_plant.boiler.toolbar_panel');

app.shared.boiler_plant.boiler.toolbar_panel.boiler_toolbar_panel = (function (){var G__29527 = (function app$shared$boiler_plant$boiler$toolbar_panel$boiler_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-show-toolbar-panel","boiler-show-toolbar-panel",1953728868)], null));
if(cljs.core.truth_(show_toolbar)){
var G__29544 = helix.core.Fragment;
var G__29545 = ({"children": [(function (){var G__29548 = app.shared.components.toolbar.title;
var G__29549 = (function (){var obj29553 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Steam Boiler"});
return obj29553;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29548,G__29549) : helix.core.jsx.call(null,G__29548,G__29549));
})(),(function (){var G__29554 = app.shared.components.toolbar.btn_wrapper;
var G__29555 = (function (){var obj29559 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),true], null)], null));
}),"children":(function (){var G__29564 = app.shared.components.toolbar.btn_settings;
var G__29565 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29564,G__29565) : helix.core.jsx.call(null,G__29564,G__29565));
})()});
return obj29559;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29554,G__29555) : helix.core.jsx.call(null,G__29554,G__29555));
})(),(function (){var G__29579 = app.shared.components.toolbar.btn_wrapper;
var G__29580 = (function (){var obj29584 = ({"x":(1174),"y":(54),"children":(function (){var G__29586 = app.shared.components.toolbar.btn_divider;
var G__29587 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29586,G__29587) : helix.core.jsx.call(null,G__29586,G__29587));
})()});
return obj29584;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29579,G__29580) : helix.core.jsx.call(null,G__29579,G__29580));
})(),(function (){var G__29593 = app.shared.components.toolbar.btn_wrapper;
var G__29594 = (function (){var obj29598 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Steam Boiler",new cljs.core.Keyword(null,"text","text",-1790561697),"The steam boiler is a heat exchange system where water is heated to its\u2019 boiling point via combustion of flue gases. The combusted flue gases are blown through a number of tubes submerged in water. On its' path through the tubes heat is transferred to the water. The heat energy supplied to the water evaporates water into steam, that is then taken into piping to be used in specific heating applications."], null)], null));
}),"children":(function (){var G__29599 = app.shared.components.toolbar.btn_info;
var G__29600 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29599,G__29600) : helix.core.jsx.call(null,G__29599,G__29600));
})()});
return obj29598;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29593,G__29594) : helix.core.jsx.call(null,G__29593,G__29594));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29544,G__29545) : helix.core.jsxs.call(null,G__29544,G__29545));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__29602 = G__29527;
(G__29602.displayName = "app.shared.boiler-plant.boiler.toolbar-panel/boiler-toolbar-panel");

return G__29602;
} else {
return G__29527;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.toolbar_panel.js.map
