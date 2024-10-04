goog.provide('app.ui.shared.boiler_plant.actuators.feed.pump.toolbar_panel');

app.ui.shared.boiler_plant.actuators.feed.pump.toolbar_panel.feed_pump_toolbar_panel = (function (){var G__38036 = (function app$ui$shared$boiler_plant$actuators$feed$pump$toolbar_panel$feed_pump_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","show-toolbar-panel","feed-pump/show-toolbar-panel",352694057)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__38162 = helix.core.Fragment;
var G__38163 = ({"children": [(function (){var G__38180 = app.ui.shared.components.toolbar.title;
var G__38181 = (function (){var obj38194 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Pump"});
return obj38194;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38180,G__38181) : helix.core.jsx.call(null,G__38180,G__38181));
})(),(function (){var G__38211 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38212 = (function (){var obj38220 = ({"x":(930),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__38238 = app.ui.shared.components.toolbar.btn_valve_close;
var G__38239 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38238,G__38239) : helix.core.jsx.call(null,G__38238,G__38239));
})()});
return obj38220;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38211,G__38212) : helix.core.jsx.call(null,G__38211,G__38212));
})(),(function (){var G__38255 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38256 = (function (){var obj38265 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__38278 = app.ui.shared.components.toolbar.btn_valve_open;
var G__38279 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38278,G__38279) : helix.core.jsx.call(null,G__38278,G__38279));
})()});
return obj38265;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38255,G__38256) : helix.core.jsx.call(null,G__38255,G__38256));
})(),(function (){var G__38292 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38293 = (function (){var obj38301 = ({"x":(1064),"y":(54),"children":(function (){var G__38308 = app.ui.shared.components.toolbar.btn_divider;
var G__38309 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38308,G__38309) : helix.core.jsx.call(null,G__38308,G__38309));
})()});
return obj38301;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38292,G__38293) : helix.core.jsx.call(null,G__38292,G__38293));
})(),(function (){var G__38322 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38324 = (function (){var obj38330 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__38346 = app.ui.shared.components.toolbar.btn_settings;
var G__38347 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38346,G__38347) : helix.core.jsx.call(null,G__38346,G__38347));
})()});
return obj38330;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38322,G__38324) : helix.core.jsx.call(null,G__38322,G__38324));
})(),(function (){var G__38361 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38362 = (function (){var obj38366 = ({"x":(1174),"y":(54),"children":(function (){var G__38372 = app.ui.shared.components.toolbar.btn_divider;
var G__38373 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38372,G__38373) : helix.core.jsx.call(null,G__38372,G__38373));
})()});
return obj38366;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38361,G__38362) : helix.core.jsx.call(null,G__38361,G__38362));
})(),(function (){var G__38434 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38435 = (function (){var obj38437 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Pump",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater pump is an actuator that pumps water into the boiler to keep the water level at the desired value."], null)], null));
}),"children":(function (){var G__38448 = app.ui.shared.components.toolbar.btn_info;
var G__38449 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38448,G__38449) : helix.core.jsx.call(null,G__38448,G__38449));
})()});
return obj38437;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38434,G__38435) : helix.core.jsx.call(null,G__38434,G__38435));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38162,G__38163) : helix.core.jsxs.call(null,G__38162,G__38163));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38452 = G__38036;
(G__38452.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.toolbar-panel/feed-pump-toolbar-panel");

return G__38452;
} else {
return G__38036;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.feed.pump.toolbar_panel.js.map
