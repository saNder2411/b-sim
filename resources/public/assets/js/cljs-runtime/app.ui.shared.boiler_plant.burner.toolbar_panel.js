goog.provide('app.ui.shared.boiler_plant.burner.toolbar_panel');

app.ui.shared.boiler_plant.burner.toolbar_panel.burner_toolbar_panel = (function (){var G__37886 = (function app$ui$shared$boiler_plant$burner$toolbar_panel$burner_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37892 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","show-toolbar-panel","burner/show-toolbar-panel",-1549591378)], null));
if(cljs.core.truth_(show_toolbar)){
var G__37900 = helix.core.Fragment;
var G__37901 = ({"children": [(function (){var G__37902 = app.ui.shared.components.toolbar.title;
var G__37903 = (function (){var obj37911 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Burner"});
return obj37911;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37902,G__37903) : helix.core.jsx.call(null,G__37902,G__37903));
})(),(function (){var G__37919 = app.ui.shared.components.toolbar.btn_wrapper;
var G__37921 = (function (){var obj37929 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__37967 = app.ui.shared.components.toolbar.btn_settings;
var G__37968 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37967,G__37968) : helix.core.jsx.call(null,G__37967,G__37968));
})()});
return obj37929;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37919,G__37921) : helix.core.jsx.call(null,G__37919,G__37921));
})(),(function (){var G__37990 = app.ui.shared.components.toolbar.btn_wrapper;
var G__37991 = (function (){var obj38004 = ({"x":(1174),"y":(54),"children":(function (){var G__38025 = app.ui.shared.components.toolbar.btn_divider;
var G__38027 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38025,G__38027) : helix.core.jsx.call(null,G__38025,G__38027));
})()});
return obj38004;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37990,G__37991) : helix.core.jsx.call(null,G__37990,G__37991));
})(),(function (){var G__38056 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38057 = (function (){var obj38071 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Burner",new cljs.core.Keyword(null,"text","text",-1790561697),"The burner is a device where fuel and air are mixed in the correct proportion, blown into a combustion chamber and combusted forming a flame. The main function of the burner is to keep the pressure inside the boiler within a certain desired range."], null)], null));
}),"children":(function (){var G__38095 = app.ui.shared.components.toolbar.btn_info;
var G__38096 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38095,G__38096) : helix.core.jsx.call(null,G__38095,G__38096));
})()});
return obj38071;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38056,G__38057) : helix.core.jsx.call(null,G__38056,G__38057));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37900,G__37901) : helix.core.jsxs.call(null,G__37900,G__37901));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38268 = G__37886;
(G__38268.displayName = "app.ui.shared.boiler-plant.burner.toolbar-panel/burner-toolbar-panel");

return G__38268;
} else {
return G__37886;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.burner.toolbar_panel.js.map
