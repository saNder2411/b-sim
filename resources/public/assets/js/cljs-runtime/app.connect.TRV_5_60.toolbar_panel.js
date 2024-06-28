goog.provide('app.connect.TRV_5_60.toolbar_panel');

app.connect.TRV_5_60.toolbar_panel.TRV_5_60_toolbar_panel = (function (){var G__66286 = (function app$connect$TRV_5_60$toolbar_panel$TRV_5_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__66287 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TRV-5-60-show-toolbar","TRV-5-60-show-toolbar",-1409913693)], null));
if(cljs.core.truth_(show_toolbar)){
var G__66290 = helix.core.Fragment;
var G__66291 = ({"children": [(function (){var G__66292 = app.shared.components.toolbar.title;
var G__66293 = (function (){var obj66295 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Temperature Sensor"});
return obj66295;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66292,G__66293) : helix.core.jsx.call(null,G__66292,G__66293));
})(),(function (){var G__66296 = app.shared.components.toolbar.title;
var G__66297 = (function (){var obj66299 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"TRV 5-60"});
return obj66299;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66296,G__66297) : helix.core.jsx.call(null,G__66296,G__66297));
})(),(function (){var G__66300 = app.shared.components.toolbar.btn_wrapper;
var G__66301 = (function (){var obj66303 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__66304 = app.shared.components.toolbar.btn_replace;
var G__66305 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66304,G__66305) : helix.core.jsx.call(null,G__66304,G__66305));
})()});
return obj66303;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66300,G__66301) : helix.core.jsx.call(null,G__66300,G__66301));
})(),(function (){var G__66306 = app.shared.components.toolbar.btn_wrapper;
var G__66307 = (function (){var obj66309 = ({"x":(1064),"y":(54),"children":(function (){var G__66310 = app.shared.components.toolbar.btn_divider;
var G__66311 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66310,G__66311) : helix.core.jsx.call(null,G__66310,G__66311));
})()});
return obj66309;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66306,G__66307) : helix.core.jsx.call(null,G__66306,G__66307));
})(),(function (){var G__66312 = app.shared.components.toolbar.btn_wrapper;
var G__66313 = (function (){var obj66315 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__66316 = app.shared.components.toolbar.btn_full_screen;
var G__66317 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66316,G__66317) : helix.core.jsx.call(null,G__66316,G__66317));
})()});
return obj66315;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66312,G__66313) : helix.core.jsx.call(null,G__66312,G__66313));
})(),(function (){var G__66318 = app.shared.components.toolbar.btn_wrapper;
var G__66319 = (function (){var obj66321 = ({"x":(1174),"y":(54),"children":(function (){var G__66322 = app.shared.components.toolbar.btn_divider;
var G__66323 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66322,G__66323) : helix.core.jsx.call(null,G__66322,G__66323));
})()});
return obj66321;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66318,G__66319) : helix.core.jsx.call(null,G__66318,G__66319));
})(),(function (){var G__66324 = app.shared.components.toolbar.btn_wrapper;
var G__66325 = (function (){var obj66327 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Temperature Sensor",new cljs.core.Keyword(null,"text","text",-1790561697),"The TRV 5-60 temperature transmitter has a dedicated TRG 5-6x temperature sensor, the readings of which are recorded and monitored redundantly. The actual temperature is displayed on the temperature transmitter itself, as are any system malfunctions that occur. Setting the limit value The temperature in the transmitter terminal box is continually monitored by a temperature sensor on the PCB. An automatic self-test cyclically monitors the safety and function of the temperature sensor and the measured value acquisition. The data are transferred to the URS 6x safety control unit as a data telegram via the CANopen protocol using a CAN bus to ISO 11898. These data telegrams contain the following information: \u25A0 Actual temperature \u25A0 Sensor alarm if the set \u201CAL.Hi\u201D limit is exceeded \u25A0 Malfunction indications in the event of faults in the electronic unit \u25A0 Excessive temperature in the transmitter terminal box."], null)], null));
}),"children":(function (){var G__66328 = app.shared.components.toolbar.btn_info;
var G__66329 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66328,G__66329) : helix.core.jsx.call(null,G__66328,G__66329));
})()});
return obj66327;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66324,G__66325) : helix.core.jsx.call(null,G__66324,G__66325));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__66290,G__66291) : helix.core.jsxs.call(null,G__66290,G__66291));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__66330 = G__66286;
(G__66330.displayName = "app.connect.TRV-5-60.toolbar-panel/TRV-5-60-toolbar-panel");

return G__66330;
} else {
return G__66286;
}
})();




//# sourceMappingURL=app.connect.TRV_5_60.toolbar_panel.js.map
