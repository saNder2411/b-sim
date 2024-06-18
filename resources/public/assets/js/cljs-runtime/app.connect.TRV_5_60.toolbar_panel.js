goog.provide('app.connect.TRV_5_60.toolbar_panel');

app.connect.TRV_5_60.toolbar_panel.TRV_5_60_toolbar_panel = (function (){var G__61587 = (function app$connect$TRV_5_60$toolbar_panel$TRV_5_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__61588 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TRV-5-60-show-toolbar","TRV-5-60-show-toolbar",-1409913693)], null));
if(cljs.core.truth_(show_toolbar)){
var G__61591 = helix.core.Fragment;
var G__61592 = ({"children": [(function (){var G__61593 = app.shared.components.toolbar_title.toolbar_title;
var G__61594 = (function (){var obj61596 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Temperature Sensor"});
return obj61596;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61593,G__61594) : helix.core.jsx.call(null,G__61593,G__61594));
})(),(function (){var G__61597 = app.shared.components.toolbar_title.toolbar_title;
var G__61598 = (function (){var obj61600 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"TRV 5-60"});
return obj61600;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61597,G__61598) : helix.core.jsx.call(null,G__61597,G__61598));
})(),(function (){var G__61601 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__61602 = (function (){var obj61604 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__61605 = app.shared.components.toolbar_btn_replace.toolbar_btn_replace;
var G__61606 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61605,G__61606) : helix.core.jsx.call(null,G__61605,G__61606));
})()});
return obj61604;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61601,G__61602) : helix.core.jsx.call(null,G__61601,G__61602));
})(),(function (){var G__61607 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__61608 = (function (){var obj61610 = ({"x":(1064),"y":(54),"children":(function (){var G__61611 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__61612 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61611,G__61612) : helix.core.jsx.call(null,G__61611,G__61612));
})()});
return obj61610;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61607,G__61608) : helix.core.jsx.call(null,G__61607,G__61608));
})(),(function (){var G__61613 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__61614 = (function (){var obj61616 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__61617 = app.shared.components.toolbar_btn_full_screen.toolbar_btn_full_screen;
var G__61618 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61617,G__61618) : helix.core.jsx.call(null,G__61617,G__61618));
})()});
return obj61616;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61613,G__61614) : helix.core.jsx.call(null,G__61613,G__61614));
})(),(function (){var G__61619 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__61620 = (function (){var obj61622 = ({"x":(1174),"y":(54),"children":(function (){var G__61623 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__61624 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61623,G__61624) : helix.core.jsx.call(null,G__61623,G__61624));
})()});
return obj61622;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61619,G__61620) : helix.core.jsx.call(null,G__61619,G__61620));
})(),(function (){var G__61625 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__61626 = (function (){var obj61628 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Temperature Sensor",new cljs.core.Keyword(null,"text","text",-1790561697),"The TRV 5-60 temperature transmitter has a dedicated TRG 5-6x temperature sensor, the readings of which are recorded and monitored redundantly. The actual temperature is displayed on the temperature transmitter itself, as are any system malfunctions that occur. Setting the limit value The temperature in the transmitter terminal box is continually monitored by a temperature sensor on the PCB. An automatic self-test cyclically monitors the safety and function of the temperature sensor and the measured value acquisition. The data are transferred to the URS 6x safety control unit as a data telegram via the CANopen protocol using a CAN bus to ISO 11898. These data telegrams contain the following information: \u25A0 Actual temperature \u25A0 Sensor alarm if the set \u201CAL.Hi\u201D limit is exceeded \u25A0 Malfunction indications in the event of faults in the electronic unit \u25A0 Excessive temperature in the transmitter terminal box."], null)], null));
}),"children":(function (){var G__61629 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__61630 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61629,G__61630) : helix.core.jsx.call(null,G__61629,G__61630));
})()});
return obj61628;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61625,G__61626) : helix.core.jsx.call(null,G__61625,G__61626));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__61591,G__61592) : helix.core.jsxs.call(null,G__61591,G__61592));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__61631 = G__61587;
(G__61631.displayName = "app.connect.TRV-5-60.toolbar-panel/TRV-5-60-toolbar-panel");

return G__61631;
} else {
return G__61587;
}
})();




//# sourceMappingURL=app.connect.TRV_5_60.toolbar_panel.js.map
