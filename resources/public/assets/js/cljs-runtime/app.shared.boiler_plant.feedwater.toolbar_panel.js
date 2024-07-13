goog.provide('app.shared.boiler_plant.feedwater.toolbar_panel');

app.shared.boiler_plant.feedwater.toolbar_panel.feedwater_toolbar_panel = (function (){var G__80600 = (function app$shared$boiler_plant$feedwater$toolbar_panel$feedwater_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__80601 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-show-toolbar-panel","feedwater-show-toolbar-panel",1348116306)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__80604 = helix.core.Fragment;
var G__80605 = ({"children": [(function (){var G__80606 = app.shared.components.toolbar.title;
var G__80607 = (function (){var obj80609 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater"});
return obj80609;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80606,G__80607) : helix.core.jsx.call(null,G__80606,G__80607));
})(),(function (){var G__80610 = app.shared.components.toolbar.btn_wrapper;
var G__80611 = (function (){var obj80613 = ({"x":(1114),"y":(54),"inactive":cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__80614 = app.shared.components.toolbar.btn_settings;
var G__80615 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80614,G__80615) : helix.core.jsx.call(null,G__80614,G__80615));
})()});
return obj80613;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80610,G__80611) : helix.core.jsx.call(null,G__80610,G__80611));
})(),(function (){var G__80616 = app.shared.components.toolbar.btn_wrapper;
var G__80617 = (function (){var obj80619 = ({"x":(1174),"y":(54),"children":(function (){var G__80620 = app.shared.components.toolbar.btn_divider;
var G__80621 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80620,G__80621) : helix.core.jsx.call(null,G__80620,G__80621));
})()});
return obj80619;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80616,G__80617) : helix.core.jsx.call(null,G__80616,G__80617));
})(),(function (){var G__80622 = app.shared.components.toolbar.btn_wrapper;
var G__80623 = (function (){var obj80625 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__80626 = app.shared.components.toolbar.btn_info;
var G__80627 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80626,G__80627) : helix.core.jsx.call(null,G__80626,G__80627));
})()});
return obj80625;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80622,G__80623) : helix.core.jsx.call(null,G__80622,G__80623));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__80604,G__80605) : helix.core.jsxs.call(null,G__80604,G__80605));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__80628 = G__80600;
(G__80628.displayName = "app.shared.boiler-plant.feedwater.toolbar-panel/feedwater-toolbar-panel");

return G__80628;
} else {
return G__80600;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.feedwater.toolbar_panel.js.map
