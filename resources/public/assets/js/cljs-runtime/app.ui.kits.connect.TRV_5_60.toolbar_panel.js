goog.provide('app.ui.kits.connect.TRV_5_60.toolbar_panel');

app.ui.kits.connect.TRV_5_60.toolbar_panel.TRV_5_60_toolbar_panel = (function (){var G__31181 = (function app$ui$kits$connect$TRV_5_60$toolbar_panel$TRV_5_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TRV-5-60-show-toolbar","TRV-5-60-show-toolbar",-1409913693)], null));
if(cljs.core.truth_(show_toolbar)){
var G__31201 = helix.core.Fragment;
var G__31202 = ({"children": [(function (){var G__31207 = app.ui.shared.components.toolbar.title;
var G__31208 = (function (){var obj31327 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Temperature Sensor"});
return obj31327;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31207,G__31208) : helix.core.jsx.call(null,G__31207,G__31208));
})(),(function (){var G__31338 = app.ui.shared.components.toolbar.title;
var G__31339 = (function (){var obj31352 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"TRV 5-60"});
return obj31352;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31338,G__31339) : helix.core.jsx.call(null,G__31338,G__31339));
})(),(function (){var G__31365 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31366 = (function (){var obj31373 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__31395 = app.ui.shared.components.toolbar.btn_replace;
var G__31396 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31395,G__31396) : helix.core.jsx.call(null,G__31395,G__31396));
})()});
return obj31373;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31365,G__31366) : helix.core.jsx.call(null,G__31365,G__31366));
})(),(function (){var G__31416 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31417 = (function (){var obj31428 = ({"x":(1064),"y":(54),"children":(function (){var G__31438 = app.ui.shared.components.toolbar.btn_divider;
var G__31439 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31438,G__31439) : helix.core.jsx.call(null,G__31438,G__31439));
})()});
return obj31428;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31416,G__31417) : helix.core.jsx.call(null,G__31416,G__31417));
})(),(function (){var G__31461 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31462 = (function (){var obj31468 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__31487 = app.ui.shared.components.toolbar.btn_full_screen;
var G__31488 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31487,G__31488) : helix.core.jsx.call(null,G__31487,G__31488));
})()});
return obj31468;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31461,G__31462) : helix.core.jsx.call(null,G__31461,G__31462));
})(),(function (){var G__31501 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31502 = (function (){var obj31511 = ({"x":(1174),"y":(54),"children":(function (){var G__31524 = app.ui.shared.components.toolbar.btn_divider;
var G__31526 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31524,G__31526) : helix.core.jsx.call(null,G__31524,G__31526));
})()});
return obj31511;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31501,G__31502) : helix.core.jsx.call(null,G__31501,G__31502));
})(),(function (){var G__31538 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31539 = (function (){var obj31545 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Temperature Sensor",new cljs.core.Keyword(null,"text","text",-1790561697),"The TRV 5-60 temperature transmitter has a dedicated TRG 5-6x temperature sensor, the readings of which are recorded and monitored redundantly. The actual temperature is displayed on the temperature transmitter itself, as are any system malfunctions that occur. Setting the limit value The temperature in the transmitter terminal box is continually monitored by a temperature sensor on the PCB. An automatic self-test cyclically monitors the safety and function of the temperature sensor and the measured value acquisition. The data are transferred to the URS 6x safety control unit as a data telegram via the CANopen protocol using a CAN bus to ISO 11898. These data telegrams contain the following information: \u25A0 Actual temperature \u25A0 Sensor alarm if the set \u201CAL.Hi\u201D limit is exceeded \u25A0 Malfunction indications in the event of faults in the electronic unit \u25A0 Excessive temperature in the transmitter terminal box."], null)], null));
}),"children":(function (){var G__31561 = app.ui.shared.components.toolbar.btn_info;
var G__31562 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31561,G__31562) : helix.core.jsx.call(null,G__31561,G__31562));
})()});
return obj31545;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31538,G__31539) : helix.core.jsx.call(null,G__31538,G__31539));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31201,G__31202) : helix.core.jsxs.call(null,G__31201,G__31202));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31590 = G__31181;
(G__31590.displayName = "app.ui.kits.connect.TRV-5-60.toolbar-panel/TRV-5-60-toolbar-panel");

return G__31590;
} else {
return G__31181;
}
})();




//# sourceMappingURL=app.ui.kits.connect.TRV_5_60.toolbar_panel.js.map
