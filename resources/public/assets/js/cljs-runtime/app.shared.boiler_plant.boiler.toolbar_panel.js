goog.provide('app.shared.boiler_plant.boiler.toolbar_panel');

app.shared.boiler_plant.boiler.toolbar_panel.boiler_toolbar_panel = (function (){var G__53855 = (function app$shared$boiler_plant$boiler$toolbar_panel$boiler_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__53856 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-show-toolbar-panel","boiler-show-toolbar-panel",1953728868)], null));
if(cljs.core.truth_(show_toolbar)){
var G__53859 = helix.core.Fragment;
var G__53860 = ({"children": [(function (){var G__53861 = app.shared.components.toolbar_title.toolbar_title;
var G__53862 = (function (){var obj53864 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Steam Boiler"});
return obj53864;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53861,G__53862) : helix.core.jsx.call(null,G__53861,G__53862));
})(),(function (){var G__53865 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__53866 = (function (){var obj53868 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__53869 = app.shared.components.toolbar_btn_settings.toolbar_btn_settings;
var G__53870 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53869,G__53870) : helix.core.jsx.call(null,G__53869,G__53870));
})()});
return obj53868;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53865,G__53866) : helix.core.jsx.call(null,G__53865,G__53866));
})(),(function (){var G__53871 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__53872 = (function (){var obj53874 = ({"x":(1174),"y":(54),"children":(function (){var G__53875 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__53876 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53875,G__53876) : helix.core.jsx.call(null,G__53875,G__53876));
})()});
return obj53874;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53871,G__53872) : helix.core.jsx.call(null,G__53871,G__53872));
})(),(function (){var G__53877 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__53878 = (function (){var obj53880 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Steam Boiler",new cljs.core.Keyword(null,"text","text",-1790561697),"The steam boiler is a heat exchange system where water is heated to its\u2019 boiling point via combustion of flue gases. The combusted flue gases are blown through a number of tubes submerged in water. On its' path through the tubes heat is transferred to the water. The heat energy supplied to the water evaporates water into steam, that is then taken into piping to be used in specific heating applications."], null)], null));
}),"children":(function (){var G__53881 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__53882 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53881,G__53882) : helix.core.jsx.call(null,G__53881,G__53882));
})()});
return obj53880;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__53877,G__53878) : helix.core.jsx.call(null,G__53877,G__53878));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__53859,G__53860) : helix.core.jsxs.call(null,G__53859,G__53860));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__53883 = G__53855;
(G__53883.displayName = "app.shared.boiler-plant.boiler.toolbar-panel/boiler-toolbar-panel");

return G__53883;
} else {
return G__53855;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.toolbar_panel.js.map
