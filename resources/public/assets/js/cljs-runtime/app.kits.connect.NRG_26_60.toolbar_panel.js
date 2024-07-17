goog.provide('app.kits.connect.NRG_26_60.toolbar_panel');

app.kits.connect.NRG_26_60.toolbar_panel.NRG_26_60_toolbar_panel = (function (){var G__45383 = (function app$kits$connect$NRG_26_60$toolbar_panel$NRG_26_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__45389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRG-26-60-show-toolbar","NRG-26-60-show-toolbar",149526372)], null));
if(cljs.core.truth_(show_toolbar)){
var G__45398 = helix.core.Fragment;
var G__45399 = ({"children": [(function (){var G__45404 = app.shared.components.toolbar.title;
var G__45405 = (function (){var obj45409 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Electrode"});
return obj45409;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45404,G__45405) : helix.core.jsx.call(null,G__45404,G__45405));
})(),(function (){var G__45416 = app.shared.components.toolbar.title;
var G__45417 = (function (){var obj45421 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRG 26-60"});
return obj45421;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45416,G__45417) : helix.core.jsx.call(null,G__45416,G__45417));
})(),(function (){var G__45426 = app.shared.components.toolbar.btn_wrapper;
var G__45427 = (function (){var obj45431 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__45438 = app.shared.components.toolbar.btn_replace;
var G__45439 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45438,G__45439) : helix.core.jsx.call(null,G__45438,G__45439));
})()});
return obj45431;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45426,G__45427) : helix.core.jsx.call(null,G__45426,G__45427));
})(),(function (){var G__45446 = app.shared.components.toolbar.btn_wrapper;
var G__45447 = (function (){var obj45453 = ({"x":(1064),"y":(54),"children":(function (){var G__45456 = app.shared.components.toolbar.btn_divider;
var G__45457 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45456,G__45457) : helix.core.jsx.call(null,G__45456,G__45457));
})()});
return obj45453;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45446,G__45447) : helix.core.jsx.call(null,G__45446,G__45447));
})(),(function (){var G__45462 = app.shared.components.toolbar.btn_wrapper;
var G__45463 = (function (){var obj45469 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__45476 = app.shared.components.toolbar.btn_full_screen;
var G__45477 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45476,G__45477) : helix.core.jsx.call(null,G__45476,G__45477));
})()});
return obj45469;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45462,G__45463) : helix.core.jsx.call(null,G__45462,G__45463));
})(),(function (){var G__45484 = app.shared.components.toolbar.btn_wrapper;
var G__45485 = (function (){var obj45489 = ({"x":(1174),"y":(54),"children":(function (){var G__45494 = app.shared.components.toolbar.btn_divider;
var G__45495 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45494,G__45495) : helix.core.jsx.call(null,G__45494,G__45495));
})()});
return obj45489;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45484,G__45485) : helix.core.jsx.call(null,G__45484,G__45485));
})(),(function (){var G__45502 = app.shared.components.toolbar.btn_wrapper;
var G__45503 = (function (){var obj45508 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"The NRG 26-60 level electrode can be used together with an NRR 2-60/NRR 2-61 level controller to continuously measure the water level in steam boiler and hot water installations or in condensate and feedwater tanks. In combination with the NRR 2-60/NRR 2-61 level controller, the electrode can be used as a level control system with MIN/MAX alarm, for example."], null)], null));
}),"children":(function (){var G__45512 = app.shared.components.toolbar.btn_info;
var G__45513 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45512,G__45513) : helix.core.jsx.call(null,G__45512,G__45513));
})()});
return obj45508;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45502,G__45503) : helix.core.jsx.call(null,G__45502,G__45503));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__45398,G__45399) : helix.core.jsxs.call(null,G__45398,G__45399));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__45516 = G__45383;
(G__45516.displayName = "app.kits.connect.NRG-26-60.toolbar-panel/NRG-26-60-toolbar-panel");

return G__45516;
} else {
return G__45383;
}
})();




//# sourceMappingURL=app.kits.connect.NRG_26_60.toolbar_panel.js.map
