goog.provide('app.ui.kits.connect.NRG_26_60.toolbar_panel');

app.ui.kits.connect.NRG_26_60.toolbar_panel.NRG_26_60_toolbar_panel = (function (){var G__38499 = (function app$ui$kits$connect$NRG_26_60$toolbar_panel$NRG_26_60_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38506 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRG-26-60","show-toolbar","NRG-26-60/show-toolbar",698043696)], null));
if(cljs.core.truth_(show_toolbar)){
var G__38515 = helix.core.Fragment;
var G__38516 = ({"children": [(function (){var G__38517 = app.ui.shared.components.toolbar.title;
var G__38518 = (function (){var obj38520 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Electrode"});
return obj38520;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38517,G__38518) : helix.core.jsx.call(null,G__38517,G__38518));
})(),(function (){var G__38521 = app.ui.shared.components.toolbar.title;
var G__38522 = (function (){var obj38525 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRG 26-60"});
return obj38525;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38521,G__38522) : helix.core.jsx.call(null,G__38521,G__38522));
})(),(function (){var G__38526 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38527 = (function (){var obj38529 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__38530 = app.ui.shared.components.toolbar.btn_replace;
var G__38531 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38530,G__38531) : helix.core.jsx.call(null,G__38530,G__38531));
})()});
return obj38529;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38526,G__38527) : helix.core.jsx.call(null,G__38526,G__38527));
})(),(function (){var G__38532 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38533 = (function (){var obj38535 = ({"x":(1064),"y":(54),"children":(function (){var G__38536 = app.ui.shared.components.toolbar.btn_divider;
var G__38537 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38536,G__38537) : helix.core.jsx.call(null,G__38536,G__38537));
})()});
return obj38535;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38532,G__38533) : helix.core.jsx.call(null,G__38532,G__38533));
})(),(function (){var G__38538 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38539 = (function (){var obj38541 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__38542 = app.ui.shared.components.toolbar.btn_full_screen;
var G__38543 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38542,G__38543) : helix.core.jsx.call(null,G__38542,G__38543));
})()});
return obj38541;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38538,G__38539) : helix.core.jsx.call(null,G__38538,G__38539));
})(),(function (){var G__38544 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38545 = (function (){var obj38547 = ({"x":(1174),"y":(54),"children":(function (){var G__38548 = app.ui.shared.components.toolbar.btn_divider;
var G__38549 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38548,G__38549) : helix.core.jsx.call(null,G__38548,G__38549));
})()});
return obj38547;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38544,G__38545) : helix.core.jsx.call(null,G__38544,G__38545));
})(),(function (){var G__38550 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38551 = (function (){var obj38553 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"The NRG 26-60 level electrode can be used together with an NRR 2-60/NRR 2-61 level controller to continuously measure the water level in steam boiler and hot water installations or in condensate and feedwater tanks. In combination with the NRR 2-60/NRR 2-61 level controller, the electrode can be used as a level control system with MIN/MAX alarm, for example."], null)], null));
}),"children":(function (){var G__38554 = app.ui.shared.components.toolbar.btn_info;
var G__38555 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38554,G__38555) : helix.core.jsx.call(null,G__38554,G__38555));
})()});
return obj38553;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38550,G__38551) : helix.core.jsx.call(null,G__38550,G__38551));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38515,G__38516) : helix.core.jsxs.call(null,G__38515,G__38516));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38556 = G__38499;
(G__38556.displayName = "app.ui.kits.connect.NRG-26-60.toolbar-panel/NRG-26-60-toolbar-panel");

return G__38556;
} else {
return G__38499;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRG_26_60.toolbar_panel.js.map
