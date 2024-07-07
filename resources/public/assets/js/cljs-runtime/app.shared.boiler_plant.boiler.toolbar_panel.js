goog.provide('app.shared.boiler_plant.boiler.toolbar_panel');

app.shared.boiler_plant.boiler.toolbar_panel.boiler_toolbar_panel = (function (){var G__33232 = (function app$shared$boiler_plant$boiler$toolbar_panel$boiler_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33239 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-show-toolbar-panel","boiler-show-toolbar-panel",1953728868)], null));
if(cljs.core.truth_(show_toolbar)){
var G__33253 = helix.core.Fragment;
var G__33254 = ({"children": [(function (){var G__33255 = app.shared.components.toolbar.title;
var G__33256 = (function (){var obj33258 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Steam Boiler"});
return obj33258;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33255,G__33256) : helix.core.jsx.call(null,G__33255,G__33256));
})(),(function (){var G__33263 = app.shared.components.toolbar.btn_wrapper;
var G__33264 = (function (){var obj33268 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),true], null)], null));
}),"children":(function (){var G__33274 = app.shared.components.toolbar.btn_settings;
var G__33275 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33274,G__33275) : helix.core.jsx.call(null,G__33274,G__33275));
})()});
return obj33268;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33263,G__33264) : helix.core.jsx.call(null,G__33263,G__33264));
})(),(function (){var G__33276 = app.shared.components.toolbar.btn_wrapper;
var G__33277 = (function (){var obj33281 = ({"x":(1174),"y":(54),"children":(function (){var G__33283 = app.shared.components.toolbar.btn_divider;
var G__33284 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33283,G__33284) : helix.core.jsx.call(null,G__33283,G__33284));
})()});
return obj33281;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33276,G__33277) : helix.core.jsx.call(null,G__33276,G__33277));
})(),(function (){var G__33286 = app.shared.components.toolbar.btn_wrapper;
var G__33287 = (function (){var obj33291 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Steam Boiler",new cljs.core.Keyword(null,"text","text",-1790561697),"The steam boiler is a heat exchange system where water is heated to its\u2019 boiling point via combustion of flue gases. The combusted flue gases are blown through a number of tubes submerged in water. On its' path through the tubes heat is transferred to the water. The heat energy supplied to the water evaporates water into steam, that is then taken into piping to be used in specific heating applications."], null)], null));
}),"children":(function (){var G__33295 = app.shared.components.toolbar.btn_info;
var G__33296 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33295,G__33296) : helix.core.jsx.call(null,G__33295,G__33296));
})()});
return obj33291;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33286,G__33287) : helix.core.jsx.call(null,G__33286,G__33287));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33253,G__33254) : helix.core.jsxs.call(null,G__33253,G__33254));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__33307 = G__33232;
(G__33307.displayName = "app.shared.boiler-plant.boiler.toolbar-panel/boiler-toolbar-panel");

return G__33307;
} else {
return G__33232;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.toolbar_panel.js.map
