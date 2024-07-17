goog.provide('app.ui.shared.boiler_plant.boiler.toolbar_panel');

app.ui.shared.boiler_plant.boiler.toolbar_panel.boiler_toolbar_panel = (function (){var G__31367 = (function app$ui$shared$boiler_plant$boiler$toolbar_panel$boiler_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-show-toolbar-panel","boiler-show-toolbar-panel",1953728868)], null));
if(cljs.core.truth_(show_toolbar)){
var G__31414 = helix.core.Fragment;
var G__31415 = ({"children": [(function (){var G__31433 = app.ui.shared.components.toolbar.title;
var G__31434 = (function (){var obj31441 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Steam Boiler"});
return obj31441;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31433,G__31434) : helix.core.jsx.call(null,G__31433,G__31434));
})(),(function (){var G__31459 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31460 = (function (){var obj31464 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__31489 = app.ui.shared.components.toolbar.btn_settings;
var G__31490 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31489,G__31490) : helix.core.jsx.call(null,G__31489,G__31490));
})()});
return obj31464;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31459,G__31460) : helix.core.jsx.call(null,G__31459,G__31460));
})(),(function (){var G__31506 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31507 = (function (){var obj31518 = ({"x":(1174),"y":(54),"children":(function (){var G__31527 = app.ui.shared.components.toolbar.btn_divider;
var G__31528 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31527,G__31528) : helix.core.jsx.call(null,G__31527,G__31528));
})()});
return obj31518;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31506,G__31507) : helix.core.jsx.call(null,G__31506,G__31507));
})(),(function (){var G__31546 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31547 = (function (){var obj31555 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Steam Boiler",new cljs.core.Keyword(null,"text","text",-1790561697),"The steam boiler is a heat exchange system where water is heated to its\u2019 boiling point via combustion of flue gases. The combusted flue gases are blown through a number of tubes submerged in water. On its' path through the tubes heat is transferred to the water. The heat energy supplied to the water evaporates water into steam, that is then taken into piping to be used in specific heating applications."], null)], null));
}),"children":(function (){var G__31581 = app.ui.shared.components.toolbar.btn_info;
var G__31582 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31581,G__31582) : helix.core.jsx.call(null,G__31581,G__31582));
})()});
return obj31555;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31546,G__31547) : helix.core.jsx.call(null,G__31546,G__31547));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31414,G__31415) : helix.core.jsxs.call(null,G__31414,G__31415));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31613 = G__31367;
(G__31613.displayName = "app.ui.shared.boiler-plant.boiler.toolbar-panel/boiler-toolbar-panel");

return G__31613;
} else {
return G__31367;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.boiler.toolbar_panel.js.map
