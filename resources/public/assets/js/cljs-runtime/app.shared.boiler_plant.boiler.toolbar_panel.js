goog.provide('app.shared.boiler_plant.boiler.toolbar_panel');

app.shared.boiler_plant.boiler.toolbar_panel.boiler_toolbar_panel = (function (){var G__55447 = (function app$shared$boiler_plant$boiler$toolbar_panel$boiler_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__55455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-show-toolbar-panel","boiler-show-toolbar-panel",1953728868)], null));
if(cljs.core.truth_(show_toolbar)){
var G__55463 = helix.core.Fragment;
var G__55464 = ({"children": [(function (){var G__55468 = app.shared.components.toolbar.title;
var G__55469 = (function (){var obj55475 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Steam Boiler"});
return obj55475;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__55468,G__55469) : helix.core.jsx.call(null,G__55468,G__55469));
})(),(function (){var G__55483 = app.shared.components.toolbar.btn_wrapper;
var G__55484 = (function (){var obj55488 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__55491 = app.shared.components.toolbar.btn_settings;
var G__55492 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__55491,G__55492) : helix.core.jsx.call(null,G__55491,G__55492));
})()});
return obj55488;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__55483,G__55484) : helix.core.jsx.call(null,G__55483,G__55484));
})(),(function (){var G__55495 = app.shared.components.toolbar.btn_wrapper;
var G__55496 = (function (){var obj55499 = ({"x":(1174),"y":(54),"children":(function (){var G__55500 = app.shared.components.toolbar.btn_divider;
var G__55501 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__55500,G__55501) : helix.core.jsx.call(null,G__55500,G__55501));
})()});
return obj55499;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__55495,G__55496) : helix.core.jsx.call(null,G__55495,G__55496));
})(),(function (){var G__55508 = app.shared.components.toolbar.btn_wrapper;
var G__55509 = (function (){var obj55511 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Steam Boiler",new cljs.core.Keyword(null,"text","text",-1790561697),"The steam boiler is a heat exchange system where water is heated to its\u2019 boiling point via combustion of flue gases. The combusted flue gases are blown through a number of tubes submerged in water. On its' path through the tubes heat is transferred to the water. The heat energy supplied to the water evaporates water into steam, that is then taken into piping to be used in specific heating applications."], null)], null));
}),"children":(function (){var G__55515 = app.shared.components.toolbar.btn_info;
var G__55516 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__55515,G__55516) : helix.core.jsx.call(null,G__55515,G__55516));
})()});
return obj55511;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__55508,G__55509) : helix.core.jsx.call(null,G__55508,G__55509));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__55463,G__55464) : helix.core.jsxs.call(null,G__55463,G__55464));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__55518 = G__55447;
(G__55518.displayName = "app.shared.boiler-plant.boiler.toolbar-panel/boiler-toolbar-panel");

return G__55518;
} else {
return G__55447;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.toolbar_panel.js.map
