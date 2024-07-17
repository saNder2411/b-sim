goog.provide('app.connect.TRV_5_60.toolbar_panel');

app.connect.TRV_5_60.toolbar_panel.TRV_5_60_toolbar_panel = (function (){var G__43561 = (function app$connect$TRV_5_60$toolbar_panel$TRV_5_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__43584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"TRV-5-60-show-toolbar","TRV-5-60-show-toolbar",-1409913693)], null));
if(cljs.core.truth_(show_toolbar)){
var G__43611 = helix.core.Fragment;
var G__43612 = ({"children": [(function (){var G__43617 = app.shared.components.toolbar.title;
var G__43618 = (function (){var obj43624 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Temperature Sensor"});
return obj43624;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43617,G__43618) : helix.core.jsx.call(null,G__43617,G__43618));
})(),(function (){var G__43638 = app.shared.components.toolbar.title;
var G__43639 = (function (){var obj43647 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"TRV 5-60"});
return obj43647;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43638,G__43639) : helix.core.jsx.call(null,G__43638,G__43639));
})(),(function (){var G__43655 = app.shared.components.toolbar.btn_wrapper;
var G__43656 = (function (){var obj43666 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__43680 = app.shared.components.toolbar.btn_replace;
var G__43681 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43680,G__43681) : helix.core.jsx.call(null,G__43680,G__43681));
})()});
return obj43666;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43655,G__43656) : helix.core.jsx.call(null,G__43655,G__43656));
})(),(function (){var G__43697 = app.shared.components.toolbar.btn_wrapper;
var G__43698 = (function (){var obj43705 = ({"x":(1064),"y":(54),"children":(function (){var G__43714 = app.shared.components.toolbar.btn_divider;
var G__43715 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43714,G__43715) : helix.core.jsx.call(null,G__43714,G__43715));
})()});
return obj43705;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43697,G__43698) : helix.core.jsx.call(null,G__43697,G__43698));
})(),(function (){var G__43728 = app.shared.components.toolbar.btn_wrapper;
var G__43729 = (function (){var obj43737 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__43747 = app.shared.components.toolbar.btn_full_screen;
var G__43748 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43747,G__43748) : helix.core.jsx.call(null,G__43747,G__43748));
})()});
return obj43737;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43728,G__43729) : helix.core.jsx.call(null,G__43728,G__43729));
})(),(function (){var G__43759 = app.shared.components.toolbar.btn_wrapper;
var G__43760 = (function (){var obj43765 = ({"x":(1174),"y":(54),"children":(function (){var G__43767 = app.shared.components.toolbar.btn_divider;
var G__43768 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43767,G__43768) : helix.core.jsx.call(null,G__43767,G__43768));
})()});
return obj43765;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43759,G__43760) : helix.core.jsx.call(null,G__43759,G__43760));
})(),(function (){var G__43783 = app.shared.components.toolbar.btn_wrapper;
var G__43785 = (function (){var obj43789 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Temperature Sensor",new cljs.core.Keyword(null,"text","text",-1790561697),"The TRV 5-60 temperature transmitter has a dedicated TRG 5-6x temperature sensor, the readings of which are recorded and monitored redundantly. The actual temperature is displayed on the temperature transmitter itself, as are any system malfunctions that occur. Setting the limit value The temperature in the transmitter terminal box is continually monitored by a temperature sensor on the PCB. An automatic self-test cyclically monitors the safety and function of the temperature sensor and the measured value acquisition. The data are transferred to the URS 6x safety control unit as a data telegram via the CANopen protocol using a CAN bus to ISO 11898. These data telegrams contain the following information: \u25A0 Actual temperature \u25A0 Sensor alarm if the set \u201CAL.Hi\u201D limit is exceeded \u25A0 Malfunction indications in the event of faults in the electronic unit \u25A0 Excessive temperature in the transmitter terminal box."], null)], null));
}),"children":(function (){var G__43796 = app.shared.components.toolbar.btn_info;
var G__43797 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43796,G__43797) : helix.core.jsx.call(null,G__43796,G__43797));
})()});
return obj43789;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43783,G__43785) : helix.core.jsx.call(null,G__43783,G__43785));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__43611,G__43612) : helix.core.jsxs.call(null,G__43611,G__43612));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__43835 = G__43561;
(G__43835.displayName = "app.connect.TRV-5-60.toolbar-panel/TRV-5-60-toolbar-panel");

return G__43835;
} else {
return G__43561;
}
})();




//# sourceMappingURL=app.connect.TRV_5_60.toolbar_panel.js.map
