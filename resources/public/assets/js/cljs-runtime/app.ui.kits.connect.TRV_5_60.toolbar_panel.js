goog.provide('app.ui.kits.connect.TRV_5_60.toolbar_panel');

app.ui.kits.connect.TRV_5_60.toolbar_panel.TRV_5_60_toolbar_panel = (function (){var G__37940 = (function app$ui$kits$connect$TRV_5_60$toolbar_panel$TRV_5_60_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37956 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("TRV-5-60","show-toolbar","TRV-5-60/show-toolbar",-147558558)], null));
if(cljs.core.truth_(show_toolbar)){
var G__37982 = helix.core.Fragment;
var G__37983 = ({"children": [(function (){var G__37999 = app.ui.shared.components.toolbar.title;
var G__38000 = (function (){var obj38008 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Temperature Sensor"});
return obj38008;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37999,G__38000) : helix.core.jsx.call(null,G__37999,G__38000));
})(),(function (){var G__38026 = app.ui.shared.components.toolbar.title;
var G__38028 = (function (){var obj38035 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"TRV 5-60"});
return obj38035;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38026,G__38028) : helix.core.jsx.call(null,G__38026,G__38028));
})(),(function (){var G__38058 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38060 = (function (){var obj38073 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__38091 = app.ui.shared.components.toolbar.btn_replace;
var G__38092 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38091,G__38092) : helix.core.jsx.call(null,G__38091,G__38092));
})()});
return obj38073;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38058,G__38060) : helix.core.jsx.call(null,G__38058,G__38060));
})(),(function (){var G__38336 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38337 = (function (){var obj38343 = ({"x":(1064),"y":(54),"children":(function (){var G__38350 = app.ui.shared.components.toolbar.btn_divider;
var G__38351 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38350,G__38351) : helix.core.jsx.call(null,G__38350,G__38351));
})()});
return obj38343;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38336,G__38337) : helix.core.jsx.call(null,G__38336,G__38337));
})(),(function (){var G__38359 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38360 = (function (){var obj38364 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__38380 = app.ui.shared.components.toolbar.btn_full_screen;
var G__38381 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38380,G__38381) : helix.core.jsx.call(null,G__38380,G__38381));
})()});
return obj38364;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38359,G__38360) : helix.core.jsx.call(null,G__38359,G__38360));
})(),(function (){var G__38385 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38387 = (function (){var obj38391 = ({"x":(1174),"y":(54),"children":(function (){var G__38394 = app.ui.shared.components.toolbar.btn_divider;
var G__38395 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38394,G__38395) : helix.core.jsx.call(null,G__38394,G__38395));
})()});
return obj38391;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38385,G__38387) : helix.core.jsx.call(null,G__38385,G__38387));
})(),(function (){var G__38407 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38408 = (function (){var obj38412 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Temperature Sensor",new cljs.core.Keyword(null,"text","text",-1790561697),"The TRV 5-60 temperature transmitter has a dedicated TRG 5-6x temperature sensor, the readings of which are recorded and monitored redundantly. The actual temperature is displayed on the temperature transmitter itself, as are any system malfunctions that occur. Setting the limit value The temperature in the transmitter terminal box is continually monitored by a temperature sensor on the PCB. An automatic self-test cyclically monitors the safety and function of the temperature sensor and the measured value acquisition. The data are transferred to the URS 6x safety control unit as a data telegram via the CANopen protocol using a CAN bus to ISO 11898. These data telegrams contain the following information: \u25A0 Actual temperature \u25A0 Sensor alarm if the set \u201CAL.Hi\u201D limit is exceeded \u25A0 Malfunction indications in the event of faults in the electronic unit \u25A0 Excessive temperature in the transmitter terminal box."], null)], null));
}),"children":(function (){var G__38417 = app.ui.shared.components.toolbar.btn_info;
var G__38418 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38417,G__38418) : helix.core.jsx.call(null,G__38417,G__38418));
})()});
return obj38412;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38407,G__38408) : helix.core.jsx.call(null,G__38407,G__38408));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37982,G__37983) : helix.core.jsxs.call(null,G__37982,G__37983));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38427 = G__37940;
(G__38427.displayName = "app.ui.kits.connect.TRV-5-60.toolbar-panel/TRV-5-60-toolbar-panel");

return G__38427;
} else {
return G__37940;
}
})();




//# sourceMappingURL=app.ui.kits.connect.TRV_5_60.toolbar_panel.js.map
