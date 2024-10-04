goog.provide('app.ui.shared.boiler_plant.feedwater.toolbar_panel');

app.ui.shared.boiler_plant.feedwater.toolbar_panel.feedwater_toolbar_panel = (function (){var G__38029 = (function app$ui$shared$boiler_plant$feedwater$toolbar_panel$feedwater_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38045 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feedwater","show-toolbar-panel","feedwater/show-toolbar-panel",-1458460629)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__38087 = helix.core.Fragment;
var G__38088 = ({"children": [(function (){var G__38103 = app.ui.shared.components.toolbar.title;
var G__38104 = (function (){var obj38110 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater"});
return obj38110;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38103,G__38104) : helix.core.jsx.call(null,G__38103,G__38104));
})(),(function (){var G__38129 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38130 = (function (){var obj38147 = ({"x":(1114),"y":(54),"inactive":cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feedwater","change","feedwater/change",-1644588191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__38174 = app.ui.shared.components.toolbar.btn_settings;
var G__38175 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38174,G__38175) : helix.core.jsx.call(null,G__38174,G__38175));
})()});
return obj38147;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38129,G__38130) : helix.core.jsx.call(null,G__38129,G__38130));
})(),(function (){var G__38203 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38204 = (function (){var obj38210 = ({"x":(1174),"y":(54),"children":(function (){var G__38217 = app.ui.shared.components.toolbar.btn_divider;
var G__38218 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38217,G__38218) : helix.core.jsx.call(null,G__38217,G__38218));
})()});
return obj38210;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38203,G__38204) : helix.core.jsx.call(null,G__38203,G__38204));
})(),(function (){var G__38246 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38247 = (function (){var obj38251 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__38262 = app.ui.shared.components.toolbar.btn_info;
var G__38263 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38262,G__38263) : helix.core.jsx.call(null,G__38262,G__38263));
})()});
return obj38251;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38246,G__38247) : helix.core.jsx.call(null,G__38246,G__38247));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38087,G__38088) : helix.core.jsxs.call(null,G__38087,G__38088));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38285 = G__38029;
(G__38285.displayName = "app.ui.shared.boiler-plant.feedwater.toolbar-panel/feedwater-toolbar-panel");

return G__38285;
} else {
return G__38029;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.feedwater.toolbar_panel.js.map
