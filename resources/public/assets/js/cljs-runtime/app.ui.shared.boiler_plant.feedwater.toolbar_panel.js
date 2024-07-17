goog.provide('app.ui.shared.boiler_plant.feedwater.toolbar_panel');

app.ui.shared.boiler_plant.feedwater.toolbar_panel.feedwater_toolbar_panel = (function (){var G__31186 = (function app$ui$shared$boiler_plant$feedwater$toolbar_panel$feedwater_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31198 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-show-toolbar-panel","feedwater-show-toolbar-panel",1348116306)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__31212 = helix.core.Fragment;
var G__31213 = ({"children": [(function (){var G__31216 = app.ui.shared.components.toolbar.title;
var G__31217 = (function (){var obj31219 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater"});
return obj31219;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31216,G__31217) : helix.core.jsx.call(null,G__31216,G__31217));
})(),(function (){var G__31221 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31222 = (function (){var obj31224 = ({"x":(1114),"y":(54),"inactive":cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__31232 = app.ui.shared.components.toolbar.btn_settings;
var G__31233 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31232,G__31233) : helix.core.jsx.call(null,G__31232,G__31233));
})()});
return obj31224;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31221,G__31222) : helix.core.jsx.call(null,G__31221,G__31222));
})(),(function (){var G__31237 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31238 = (function (){var obj31243 = ({"x":(1174),"y":(54),"children":(function (){var G__31245 = app.ui.shared.components.toolbar.btn_divider;
var G__31246 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31245,G__31246) : helix.core.jsx.call(null,G__31245,G__31246));
})()});
return obj31243;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31237,G__31238) : helix.core.jsx.call(null,G__31237,G__31238));
})(),(function (){var G__31257 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31258 = (function (){var obj31264 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__31284 = app.ui.shared.components.toolbar.btn_info;
var G__31285 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31284,G__31285) : helix.core.jsx.call(null,G__31284,G__31285));
})()});
return obj31264;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31257,G__31258) : helix.core.jsx.call(null,G__31257,G__31258));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31212,G__31213) : helix.core.jsxs.call(null,G__31212,G__31213));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31317 = G__31186;
(G__31317.displayName = "app.ui.shared.boiler-plant.feedwater.toolbar-panel/feedwater-toolbar-panel");

return G__31317;
} else {
return G__31186;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.feedwater.toolbar_panel.js.map
