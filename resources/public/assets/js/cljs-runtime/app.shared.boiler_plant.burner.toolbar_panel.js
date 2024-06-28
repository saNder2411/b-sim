goog.provide('app.shared.boiler_plant.burner.toolbar_panel');

app.shared.boiler_plant.burner.toolbar_panel.burner_toolbar_panel = (function (){var G__65974 = (function app$shared$boiler_plant$burner$toolbar_panel$burner_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__65977 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-show-toolbar-panel","burner-show-toolbar-panel",-923534479)], null));
if(cljs.core.truth_(show_toolbar)){
var G__65987 = helix.core.Fragment;
var G__65988 = ({"children": [(function (){var G__65993 = app.shared.components.toolbar.title;
var G__65995 = (function (){var obj66003 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Burner"});
return obj66003;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__65993,G__65995) : helix.core.jsx.call(null,G__65993,G__65995));
})(),(function (){var G__66010 = app.shared.components.toolbar.btn_wrapper;
var G__66011 = (function (){var obj66015 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__66020 = app.shared.components.toolbar.btn_settings;
var G__66021 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66020,G__66021) : helix.core.jsx.call(null,G__66020,G__66021));
})()});
return obj66015;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66010,G__66011) : helix.core.jsx.call(null,G__66010,G__66011));
})(),(function (){var G__66026 = app.shared.components.toolbar.btn_wrapper;
var G__66027 = (function (){var obj66033 = ({"x":(1174),"y":(54),"children":(function (){var G__66038 = app.shared.components.toolbar.btn_divider;
var G__66039 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66038,G__66039) : helix.core.jsx.call(null,G__66038,G__66039));
})()});
return obj66033;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66026,G__66027) : helix.core.jsx.call(null,G__66026,G__66027));
})(),(function (){var G__66044 = app.shared.components.toolbar.btn_wrapper;
var G__66045 = (function (){var obj66047 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Burner",new cljs.core.Keyword(null,"text","text",-1790561697),"The burner is a device where fuel and air are mixed in the correct proportion, blown into a combustion chamber and combusted forming a flame. The main function of the burner is to keep the pressure inside the boiler within a certain desired range."], null)], null));
}),"children":(function (){var G__66056 = app.shared.components.toolbar.btn_info;
var G__66057 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66056,G__66057) : helix.core.jsx.call(null,G__66056,G__66057));
})()});
return obj66047;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66044,G__66045) : helix.core.jsx.call(null,G__66044,G__66045));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__65987,G__65988) : helix.core.jsxs.call(null,G__65987,G__65988));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__66068 = G__65974;
(G__66068.displayName = "app.shared.boiler-plant.burner.toolbar-panel/burner-toolbar-panel");

return G__66068;
} else {
return G__65974;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.burner.toolbar_panel.js.map
