goog.provide('app.ui.shared.boiler_plant.valves.sludge.toolbar_panel');

app.ui.shared.boiler_plant.valves.sludge.toolbar_panel.valve_sludge_toolbar_panel = (function (){var G__31244 = (function app$ui$shared$boiler_plant$valves$sludge$toolbar_panel$valve_sludge_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31252 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve-show-toolbar-panel","sludge-valve-show-toolbar-panel",-26377558)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__31261 = helix.core.Fragment;
var G__31262 = ({"children": [(function (){var G__31269 = app.ui.shared.components.toolbar.title;
var G__31270 = (function (){var obj31272 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Bottom Blowdown Valve"});
return obj31272;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31269,G__31270) : helix.core.jsx.call(null,G__31269,G__31270));
})(),(function (){var G__31288 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31289 = (function (){var obj31293 = ({"x":(930),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__31301 = app.ui.shared.components.toolbar.btn_valve_close;
var G__31302 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31301,G__31302) : helix.core.jsx.call(null,G__31301,G__31302));
})()});
return obj31293;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31288,G__31289) : helix.core.jsx.call(null,G__31288,G__31289));
})(),(function (){var G__31320 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31321 = (function (){var obj31333 = ({"x":(1004),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__31348 = app.ui.shared.components.toolbar.btn_valve_open;
var G__31349 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31348,G__31349) : helix.core.jsx.call(null,G__31348,G__31349));
})()});
return obj31333;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31320,G__31321) : helix.core.jsx.call(null,G__31320,G__31321));
})(),(function (){var G__31368 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31369 = (function (){var obj31484 = ({"x":(1064),"y":(54),"children":(function (){var G__31497 = app.ui.shared.components.toolbar.btn_divider;
var G__31498 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31497,G__31498) : helix.core.jsx.call(null,G__31497,G__31498));
})()});
return obj31484;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31368,G__31369) : helix.core.jsx.call(null,G__31368,G__31369));
})(),(function (){var G__31508 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31509 = (function (){var obj31520 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__31536 = app.ui.shared.components.toolbar.btn_settings;
var G__31537 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31536,G__31537) : helix.core.jsx.call(null,G__31536,G__31537));
})()});
return obj31520;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31508,G__31509) : helix.core.jsx.call(null,G__31508,G__31509));
})(),(function (){var G__31550 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31551 = (function (){var obj31560 = ({"x":(1174),"y":(54),"children":(function (){var G__31568 = app.ui.shared.components.toolbar.btn_divider;
var G__31569 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31568,G__31569) : helix.core.jsx.call(null,G__31568,G__31569));
})()});
return obj31560;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31550,G__31551) : helix.core.jsx.call(null,G__31550,G__31551));
})(),(function (){var G__31585 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31586 = (function (){var obj31591 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Bottom Blowdown Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The bottom blowdown valve is an actuator that blows down sludge accumulated on the bottom of the boiler."], null)], null));
}),"children":(function (){var G__31616 = app.ui.shared.components.toolbar.btn_info;
var G__31617 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31616,G__31617) : helix.core.jsx.call(null,G__31616,G__31617));
})()});
return obj31591;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31585,G__31586) : helix.core.jsx.call(null,G__31585,G__31586));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31261,G__31262) : helix.core.jsxs.call(null,G__31261,G__31262));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31662 = G__31244;
(G__31662.displayName = "app.ui.shared.boiler-plant.valves.sludge.toolbar-panel/valve-sludge-toolbar-panel");

return G__31662;
} else {
return G__31244;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.valves.sludge.toolbar_panel.js.map
