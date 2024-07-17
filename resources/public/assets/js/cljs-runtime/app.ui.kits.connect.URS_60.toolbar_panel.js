goog.provide('app.ui.kits.connect.URS_60.toolbar_panel');

app.ui.kits.connect.URS_60.toolbar_panel.URS_60_toolbar_panel = (function (){var G__30549 = (function app$ui$kits$connect$URS_60$toolbar_panel$URS_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30560 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URS-60-show-toolbar","URS-60-show-toolbar",-1403693272)], null));
var vec__30583 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30583,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30583,(1),null);
var vec__30586 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30586,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30586,(1),null);
var vec__30589 = helix.hooks.use_state(true);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30589,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30589,(1),null);
var vec__30592 = helix.hooks.use_state(true);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30592,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30592,(1),null);
var vec__30595 = helix.hooks.use_state(true);
var val_5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30595,(0),null);
var set_val_5_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30595,(1),null);
var vec__30598 = helix.hooks.use_state(true);
var val_6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30598,(0),null);
var set_val_6_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30598,(1),null);
var vec__30601 = helix.hooks.use_state(true);
var val_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30601,(0),null);
var set_val_7_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30601,(1),null);
var vec__30604 = helix.hooks.use_state(true);
var val_8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30604,(0),null);
var set_val_8_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30604,(1),null);
var vec__30607 = helix.hooks.use_state(true);
var val_9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607,(0),null);
var set_val_9_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607,(1),null);
var vec__30610 = helix.hooks.use_state(true);
var val_10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30610,(0),null);
var set_val_10_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30610,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__30668 = helix.core.Fragment;
var G__30669 = ({"children": [(function (){var G__30671 = app.ui.shared.components.toolbar.title;
var G__30672 = (function (){var obj30676 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Limiter"});
return obj30676;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30671,G__30672) : helix.core.jsx.call(null,G__30671,G__30672));
})(),(function (){var G__30688 = app.ui.shared.components.toolbar.title;
var G__30689 = (function (){var obj30697 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URS 60"});
return obj30697;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30688,G__30689) : helix.core.jsx.call(null,G__30688,G__30689));
})(),(function (){var G__30714 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30715 = (function (){var obj30717 = ({"x":(597),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__30722 = app.ui.shared.components.toolbar.btn_replace;
var G__30723 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30722,G__30723) : helix.core.jsx.call(null,G__30722,G__30723));
})()});
return obj30717;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30714,G__30715) : helix.core.jsx.call(null,G__30714,G__30715));
})(),(function (){var G__30726 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30727 = (function (){var obj30733 = ({"x":(657),"y":(54),"children":(function (){var G__30737 = app.ui.shared.components.toolbar.btn_divider;
var G__30738 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30737,G__30738) : helix.core.jsx.call(null,G__30737,G__30738));
})()});
return obj30733;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30726,G__30727) : helix.core.jsx.call(null,G__30726,G__30727));
})(),(function (){var G__30742 = app.ui.shared.components.toolbar.switch_panel;
var G__30744 = (function (){var obj30748 = ({"x":(707),"y":(12),"children":[(function (){var G__30754 = app.ui.shared.components.toolbar.switch$;
var G__30755 = (function (){var obj30763 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__30765 = (function (p1__30271_SHARP_){
return cljs.core.not(p1__30271_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__30765) : set_val_1_BANG_.call(null,G__30765));
}),"legend":(1),"inactive":false});
return obj30763;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30754,G__30755) : helix.core.jsx.call(null,G__30754,G__30755));
})(),(function (){var G__30774 = app.ui.shared.components.toolbar.switch$;
var G__30776 = (function (){var obj30779 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__30789 = (function (p1__30272_SHARP_){
return cljs.core.not(p1__30272_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__30789) : set_val_2_BANG_.call(null,G__30789));
}),"legend":(2),"inactive":false});
return obj30779;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30774,G__30776) : helix.core.jsx.call(null,G__30774,G__30776));
})(),(function (){var G__30814 = app.ui.shared.components.toolbar.switch$;
var G__30815 = (function (){var obj30823 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__30836 = (function (p1__30273_SHARP_){
return cljs.core.not(p1__30273_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__30836) : set_val_3_BANG_.call(null,G__30836));
}),"legend":(3),"inactive":false});
return obj30823;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30814,G__30815) : helix.core.jsx.call(null,G__30814,G__30815));
})(),(function (){var G__30850 = app.ui.shared.components.toolbar.switch$;
var G__30851 = (function (){var obj30859 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__30865 = (function (p1__30278_SHARP_){
return cljs.core.not(p1__30278_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__30865) : set_val_4_BANG_.call(null,G__30865));
}),"legend":(4),"inactive":false});
return obj30859;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30850,G__30851) : helix.core.jsx.call(null,G__30850,G__30851));
})(),(function (){var G__30877 = app.ui.shared.components.toolbar.switch$;
var G__30878 = (function (){var obj30886 = ({"x":(140),"value":val_5,"on-change":(function (){
var G__30893 = (function (p1__30281_SHARP_){
return cljs.core.not(p1__30281_SHARP_);
});
return (set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1(G__30893) : set_val_5_BANG_.call(null,G__30893));
}),"legend":(5),"inactive":false});
return obj30886;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30877,G__30878) : helix.core.jsx.call(null,G__30877,G__30878));
})(),(function (){var G__30909 = app.ui.shared.components.toolbar.switch$;
var G__30910 = (function (){var obj30917 = ({"x":(175),"value":val_6,"on-change":(function (){
var G__30926 = (function (p1__30284_SHARP_){
return cljs.core.not(p1__30284_SHARP_);
});
return (set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1(G__30926) : set_val_6_BANG_.call(null,G__30926));
}),"legend":(6),"inactive":false});
return obj30917;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30909,G__30910) : helix.core.jsx.call(null,G__30909,G__30910));
})(),(function (){var G__30950 = app.ui.shared.components.toolbar.switch$;
var G__30951 = (function (){var obj30960 = ({"x":(210),"value":val_7,"on-change":(function (){
var G__30965 = (function (p1__30287_SHARP_){
return cljs.core.not(p1__30287_SHARP_);
});
return (set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1(G__30965) : set_val_7_BANG_.call(null,G__30965));
}),"legend":(7),"inactive":false});
return obj30960;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30950,G__30951) : helix.core.jsx.call(null,G__30950,G__30951));
})(),(function (){var G__30992 = app.ui.shared.components.toolbar.switch$;
var G__30994 = (function (){var obj31006 = ({"x":(245),"value":val_8,"on-change":(function (){
var G__31016 = (function (p1__30294_SHARP_){
return cljs.core.not(p1__30294_SHARP_);
});
return (set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1(G__31016) : set_val_8_BANG_.call(null,G__31016));
}),"legend":(8),"inactive":false});
return obj31006;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30992,G__30994) : helix.core.jsx.call(null,G__30992,G__30994));
})(),(function (){var G__31034 = app.ui.shared.components.toolbar.switch$;
var G__31035 = (function (){var obj31043 = ({"x":(280),"value":val_9,"on-change":(function (){
var G__31046 = (function (p1__30299_SHARP_){
return cljs.core.not(p1__30299_SHARP_);
});
return (set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1(G__31046) : set_val_9_BANG_.call(null,G__31046));
}),"legend":(9),"inactive":false});
return obj31043;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31034,G__31035) : helix.core.jsx.call(null,G__31034,G__31035));
})(),(function (){var G__31057 = app.ui.shared.components.toolbar.switch$;
var G__31058 = (function (){var obj31061 = ({"x":(315),"value":val_10,"on-change":(function (){
var G__31064 = (function (p1__30305_SHARP_){
return cljs.core.not(p1__30305_SHARP_);
});
return (set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1(G__31064) : set_val_10_BANG_.call(null,G__31064));
}),"legend":(10),"inactive":false});
return obj31061;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31057,G__31058) : helix.core.jsx.call(null,G__31057,G__31058));
})()]});
return obj30748;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30742,G__30744) : helix.core.jsxs.call(null,G__30742,G__30744));
})(),(function (){var G__31075 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31076 = (function (){var obj31081 = ({"x":(1064),"y":(54),"children":(function (){var G__31088 = app.ui.shared.components.toolbar.btn_divider;
var G__31089 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31088,G__31089) : helix.core.jsx.call(null,G__31088,G__31089));
})()});
return obj31081;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31075,G__31076) : helix.core.jsx.call(null,G__31075,G__31076));
})(),(function (){var G__31093 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31094 = (function (){var obj31101 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__31113 = app.ui.shared.components.toolbar.btn_full_screen;
var G__31114 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31113,G__31114) : helix.core.jsx.call(null,G__31113,G__31114));
})()});
return obj31101;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31093,G__31094) : helix.core.jsx.call(null,G__31093,G__31094));
})(),(function (){var G__31125 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31126 = (function (){var obj31133 = ({"x":(1174),"y":(54),"children":(function (){var G__31140 = app.ui.shared.components.toolbar.btn_divider;
var G__31141 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31140,G__31141) : helix.core.jsx.call(null,G__31140,G__31141));
})()});
return obj31133;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31125,G__31126) : helix.core.jsx.call(null,G__31125,G__31126));
})(),(function (){var G__31157 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31158 = (function (){var obj31164 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Limiter",new cljs.core.Keyword(null,"text","text",-1790561697),"The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2\u2026, LRG 1\u2026 and TRV 5. The data are transferred via ISO 11898 CAN bus using the CAN open protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: \u25A0 Sensor alarms if the limits are exceeded \u25A0 Fault indications on the occurrence of faults in electronic or mechanical parts \u25A0 Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: \u25A0 Fault in sensors (negative self-test, excessively high temperature in terminal box) \u25A0 Fault in control unit (negative self-test) \u25A0 Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."], null)], null));
}),"children":(function (){var G__31188 = app.ui.shared.components.toolbar.btn_info;
var G__31189 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31188,G__31189) : helix.core.jsx.call(null,G__31188,G__31189));
})()});
return obj31164;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31157,G__31158) : helix.core.jsx.call(null,G__31157,G__31158));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30668,G__30669) : helix.core.jsxs.call(null,G__30668,G__30669));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31201 = G__30549;
(G__31201.displayName = "app.ui.kits.connect.URS-60.toolbar-panel/URS-60-toolbar-panel");

return G__31201;
} else {
return G__30549;
}
})();




//# sourceMappingURL=app.ui.kits.connect.URS_60.toolbar_panel.js.map
