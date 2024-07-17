goog.provide('app.kits.connect.TRV_5_60.toolbar_panel');

app.kits.connect.TRV_5_60.toolbar_panel.TRV_5_60_toolbar_panel = (function (){var G__44954 = (function app$kits$connect$TRV_5_60$toolbar_panel$TRV_5_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__44962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TRV-5-60-show-toolbar","TRV-5-60-show-toolbar",-1409913693)], null));
if(cljs.core.truth_(show_toolbar)){
var G__44972 = helix.core.Fragment;
var G__44973 = ({"children": [(function (){var G__44975 = app.shared.components.toolbar.title;
var G__44976 = (function (){var obj44983 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Temperature Sensor"});
return obj44983;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44975,G__44976) : helix.core.jsx.call(null,G__44975,G__44976));
})(),(function (){var G__44992 = app.shared.components.toolbar.title;
var G__44993 = (function (){var obj45000 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"TRV 5-60"});
return obj45000;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44992,G__44993) : helix.core.jsx.call(null,G__44992,G__44993));
})(),(function (){var G__45010 = app.shared.components.toolbar.btn_wrapper;
var G__45013 = (function (){var obj45023 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__45036 = app.shared.components.toolbar.btn_replace;
var G__45037 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45036,G__45037) : helix.core.jsx.call(null,G__45036,G__45037));
})()});
return obj45023;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45010,G__45013) : helix.core.jsx.call(null,G__45010,G__45013));
})(),(function (){var G__45050 = app.shared.components.toolbar.btn_wrapper;
var G__45051 = (function (){var obj45059 = ({"x":(1064),"y":(54),"children":(function (){var G__45066 = app.shared.components.toolbar.btn_divider;
var G__45067 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45066,G__45067) : helix.core.jsx.call(null,G__45066,G__45067));
})()});
return obj45059;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45050,G__45051) : helix.core.jsx.call(null,G__45050,G__45051));
})(),(function (){var G__45082 = app.shared.components.toolbar.btn_wrapper;
var G__45083 = (function (){var obj45087 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__45096 = app.shared.components.toolbar.btn_full_screen;
var G__45097 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45096,G__45097) : helix.core.jsx.call(null,G__45096,G__45097));
})()});
return obj45087;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45082,G__45083) : helix.core.jsx.call(null,G__45082,G__45083));
})(),(function (){var G__45112 = app.shared.components.toolbar.btn_wrapper;
var G__45113 = (function (){var obj45121 = ({"x":(1174),"y":(54),"children":(function (){var G__45124 = app.shared.components.toolbar.btn_divider;
var G__45125 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45124,G__45125) : helix.core.jsx.call(null,G__45124,G__45125));
})()});
return obj45121;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45112,G__45113) : helix.core.jsx.call(null,G__45112,G__45113));
})(),(function (){var G__45140 = app.shared.components.toolbar.btn_wrapper;
var G__45141 = (function (){var obj45145 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Temperature Sensor",new cljs.core.Keyword(null,"text","text",-1790561697),"The TRV 5-60 temperature transmitter has a dedicated TRG 5-6x temperature sensor, the readings of which are recorded and monitored redundantly. The actual temperature is displayed on the temperature transmitter itself, as are any system malfunctions that occur. Setting the limit value The temperature in the transmitter terminal box is continually monitored by a temperature sensor on the PCB. An automatic self-test cyclically monitors the safety and function of the temperature sensor and the measured value acquisition. The data are transferred to the URS 6x safety control unit as a data telegram via the CANopen protocol using a CAN bus to ISO 11898. These data telegrams contain the following information: \u25A0 Actual temperature \u25A0 Sensor alarm if the set \u201CAL.Hi\u201D limit is exceeded \u25A0 Malfunction indications in the event of faults in the electronic unit \u25A0 Excessive temperature in the transmitter terminal box."], null)], null));
}),"children":(function (){var G__45158 = app.shared.components.toolbar.btn_info;
var G__45159 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45158,G__45159) : helix.core.jsx.call(null,G__45158,G__45159));
})()});
return obj45145;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45140,G__45141) : helix.core.jsx.call(null,G__45140,G__45141));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__44972,G__44973) : helix.core.jsxs.call(null,G__44972,G__44973));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__45175 = G__44954;
(G__45175.displayName = "app.kits.connect.TRV-5-60.toolbar-panel/TRV-5-60-toolbar-panel");

return G__45175;
} else {
return G__44954;
}
})();




//# sourceMappingURL=app.kits.connect.TRV_5_60.toolbar_panel.js.map
