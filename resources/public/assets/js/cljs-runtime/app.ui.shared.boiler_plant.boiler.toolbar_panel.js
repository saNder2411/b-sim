goog.provide('app.ui.shared.boiler_plant.boiler.toolbar_panel');

app.ui.shared.boiler_plant.boiler.toolbar_panel.boiler_toolbar_panel = (function (){var G__37875 = (function app$ui$shared$boiler_plant$boiler$toolbar_panel$boiler_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37880 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boiler","show-toolbar-panel","boiler/show-toolbar-panel",-1563791153)], null));
if(cljs.core.truth_(show_toolbar)){
var G__37888 = helix.core.Fragment;
var G__37890 = ({"children": [(function (){var G__37936 = app.ui.shared.components.toolbar.title;
var G__37937 = (function (){var obj37946 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Steam Boiler"});
return obj37946;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37936,G__37937) : helix.core.jsx.call(null,G__37936,G__37937));
})(),(function (){var G__37980 = app.ui.shared.components.toolbar.btn_wrapper;
var G__37981 = (function (){var obj37993 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("boiler","change","boiler/change",1606732925),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__38013 = app.ui.shared.components.toolbar.btn_settings;
var G__38014 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38013,G__38014) : helix.core.jsx.call(null,G__38013,G__38014));
})()});
return obj37993;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37980,G__37981) : helix.core.jsx.call(null,G__37980,G__37981));
})(),(function (){var G__38039 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38040 = (function (){var obj38053 = ({"x":(1174),"y":(54),"children":(function (){var G__38068 = app.ui.shared.components.toolbar.btn_divider;
var G__38069 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38068,G__38069) : helix.core.jsx.call(null,G__38068,G__38069));
})()});
return obj38053;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38039,G__38040) : helix.core.jsx.call(null,G__38039,G__38040));
})(),(function (){var G__38093 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38094 = (function (){var obj38108 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Steam Boiler",new cljs.core.Keyword(null,"text","text",-1790561697),"The steam boiler is a heat exchange system where water is heated to its\u2019 boiling point via combustion of flue gases. The combusted flue gases are blown through a number of tubes submerged in water. On its' path through the tubes heat is transferred to the water. The heat energy supplied to the water evaporates water into steam, that is then taken into piping to be used in specific heating applications."], null)], null));
}),"children":(function (){var G__38125 = app.ui.shared.components.toolbar.btn_info;
var G__38126 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38125,G__38126) : helix.core.jsx.call(null,G__38125,G__38126));
})()});
return obj38108;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38093,G__38094) : helix.core.jsx.call(null,G__38093,G__38094));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37888,G__37890) : helix.core.jsxs.call(null,G__37888,G__37890));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38188 = G__37875;
(G__38188.displayName = "app.ui.shared.boiler-plant.boiler.toolbar-panel/boiler-toolbar-panel");

return G__38188;
} else {
return G__37875;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.boiler.toolbar_panel.js.map
