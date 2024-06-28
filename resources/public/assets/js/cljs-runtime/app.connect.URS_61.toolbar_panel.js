goog.provide('app.connect.URS_61.toolbar_panel');

app.connect.URS_61.toolbar_panel.URS_61_toolbar_panel = (function (){var G__67091 = (function app$connect$URS_61$toolbar_panel$URS_61_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URS-61-show-toolbar","URS-61-show-toolbar",-707856974)], null));
var vec__67191 = helix.hooks.use_state(true);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67191,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67191,(1),null);
var vec__67194 = helix.hooks.use_state(true);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67194,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67194,(1),null);
var vec__67197 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67197,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67197,(1),null);
var vec__67200 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67200,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67200,(1),null);
var vec__67203 = helix.hooks.use_state(false);
var val_5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67203,(0),null);
var set_val_5_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67203,(1),null);
var vec__67206 = helix.hooks.use_state(false);
var val_6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67206,(0),null);
var set_val_6_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67206,(1),null);
var vec__67211 = helix.hooks.use_state(false);
var val_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67211,(0),null);
var set_val_7_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67211,(1),null);
var vec__67214 = helix.hooks.use_state(false);
var val_8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67214,(0),null);
var set_val_8_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67214,(1),null);
var vec__67217 = helix.hooks.use_state(false);
var val_9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67217,(0),null);
var set_val_9_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67217,(1),null);
var vec__67220 = helix.hooks.use_state(false);
var val_10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67220,(0),null);
var set_val_10_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67220,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__67348 = helix.core.Fragment;
var G__67349 = ({"children": [(function (){var G__67355 = app.shared.components.toolbar.title;
var G__67356 = (function (){var obj67364 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Limiter"});
return obj67364;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67355,G__67356) : helix.core.jsx.call(null,G__67355,G__67356));
})(),(function (){var G__67374 = app.shared.components.toolbar.title;
var G__67376 = (function (){var obj67389 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URS 61"});
return obj67389;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67374,G__67376) : helix.core.jsx.call(null,G__67374,G__67376));
})(),(function (){var G__67404 = app.shared.components.toolbar.btn_wrapper;
var G__67405 = (function (){var obj67410 = ({"x":(597),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67420 = app.shared.components.toolbar.btn_replace;
var G__67421 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67420,G__67421) : helix.core.jsx.call(null,G__67420,G__67421));
})()});
return obj67410;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67404,G__67405) : helix.core.jsx.call(null,G__67404,G__67405));
})(),(function (){var G__67428 = app.shared.components.toolbar.btn_wrapper;
var G__67429 = (function (){var obj67439 = ({"x":(657),"y":(54),"children":(function (){var G__67452 = app.shared.components.toolbar.btn_divider;
var G__67453 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67452,G__67453) : helix.core.jsx.call(null,G__67452,G__67453));
})()});
return obj67439;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67428,G__67429) : helix.core.jsx.call(null,G__67428,G__67429));
})(),(function (){var G__67472 = app.shared.components.toolbar.switch_panel;
var G__67473 = (function (){var obj67481 = ({"x":(707),"y":(12),"children":[(function (){var G__67494 = app.shared.components.toolbar.switch$;
var G__67495 = (function (){var obj67507 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__67524 = (function (p1__66743_SHARP_){
return cljs.core.not(p1__66743_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__67524) : set_val_1_BANG_.call(null,G__67524));
}),"legend":(1),"inactive":false});
return obj67507;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67494,G__67495) : helix.core.jsx.call(null,G__67494,G__67495));
})(),(function (){var G__67557 = app.shared.components.toolbar.switch$;
var G__67558 = (function (){var obj67562 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__67583 = (function (p1__66747_SHARP_){
return cljs.core.not(p1__66747_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__67583) : set_val_2_BANG_.call(null,G__67583));
}),"legend":(2),"inactive":false});
return obj67562;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67557,G__67558) : helix.core.jsx.call(null,G__67557,G__67558));
})(),(function (){var G__67593 = app.shared.components.toolbar.switch$;
var G__67594 = (function (){var obj67598 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__67606 = (function (p1__66751_SHARP_){
return cljs.core.not(p1__66751_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__67606) : set_val_3_BANG_.call(null,G__67606));
}),"legend":(3),"inactive":false});
return obj67598;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67593,G__67594) : helix.core.jsx.call(null,G__67593,G__67594));
})(),(function (){var G__67616 = app.shared.components.toolbar.switch$;
var G__67617 = (function (){var obj67620 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__67627 = (function (p1__66752_SHARP_){
return cljs.core.not(p1__66752_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__67627) : set_val_4_BANG_.call(null,G__67627));
}),"legend":(4),"inactive":false});
return obj67620;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67616,G__67617) : helix.core.jsx.call(null,G__67616,G__67617));
})(),(function (){var G__67634 = app.shared.components.toolbar.switch$;
var G__67637 = (function (){var obj67642 = ({"x":(140),"value":val_5,"on-change":(function (){
var G__67646 = (function (p1__66754_SHARP_){
return cljs.core.not(p1__66754_SHARP_);
});
return (set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1(G__67646) : set_val_5_BANG_.call(null,G__67646));
}),"legend":(5),"inactive":false});
return obj67642;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67634,G__67637) : helix.core.jsx.call(null,G__67634,G__67637));
})(),(function (){var G__67654 = app.shared.components.toolbar.switch$;
var G__67655 = (function (){var obj67658 = ({"x":(175),"value":val_6,"on-change":(function (){
var G__67660 = (function (p1__66757_SHARP_){
return cljs.core.not(p1__66757_SHARP_);
});
return (set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1(G__67660) : set_val_6_BANG_.call(null,G__67660));
}),"legend":(6),"inactive":false});
return obj67658;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67654,G__67655) : helix.core.jsx.call(null,G__67654,G__67655));
})(),(function (){var G__67666 = app.shared.components.toolbar.switch$;
var G__67667 = (function (){var obj67669 = ({"x":(210),"value":val_7,"on-change":(function (){
var G__67674 = (function (p1__66759_SHARP_){
return cljs.core.not(p1__66759_SHARP_);
});
return (set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1(G__67674) : set_val_7_BANG_.call(null,G__67674));
}),"legend":(7),"inactive":false});
return obj67669;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67666,G__67667) : helix.core.jsx.call(null,G__67666,G__67667));
})(),(function (){var G__67676 = app.shared.components.toolbar.switch$;
var G__67678 = (function (){var obj67683 = ({"x":(245),"value":val_8,"on-change":(function (){
var G__67685 = (function (p1__66762_SHARP_){
return cljs.core.not(p1__66762_SHARP_);
});
return (set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1(G__67685) : set_val_8_BANG_.call(null,G__67685));
}),"legend":(8),"inactive":false});
return obj67683;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67676,G__67678) : helix.core.jsx.call(null,G__67676,G__67678));
})(),(function (){var G__67690 = app.shared.components.toolbar.switch$;
var G__67691 = (function (){var obj67694 = ({"x":(280),"value":val_9,"on-change":(function (){
var G__67695 = (function (p1__66764_SHARP_){
return cljs.core.not(p1__66764_SHARP_);
});
return (set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1(G__67695) : set_val_9_BANG_.call(null,G__67695));
}),"legend":(9),"inactive":false});
return obj67694;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67690,G__67691) : helix.core.jsx.call(null,G__67690,G__67691));
})(),(function (){var G__67698 = app.shared.components.toolbar.switch$;
var G__67699 = (function (){var obj67703 = ({"x":(315),"value":val_10,"on-change":(function (){
var G__67706 = (function (p1__66765_SHARP_){
return cljs.core.not(p1__66765_SHARP_);
});
return (set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1(G__67706) : set_val_10_BANG_.call(null,G__67706));
}),"legend":(10),"inactive":false});
return obj67703;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67698,G__67699) : helix.core.jsx.call(null,G__67698,G__67699));
})()]});
return obj67481;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67472,G__67473) : helix.core.jsxs.call(null,G__67472,G__67473));
})(),(function (){var G__67711 = app.shared.components.toolbar.btn_wrapper;
var G__67712 = (function (){var obj67716 = ({"x":(1064),"y":(54),"children":(function (){var G__67717 = app.shared.components.toolbar.btn_divider;
var G__67718 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67717,G__67718) : helix.core.jsx.call(null,G__67717,G__67718));
})()});
return obj67716;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67711,G__67712) : helix.core.jsx.call(null,G__67711,G__67712));
})(),(function (){var G__67723 = app.shared.components.toolbar.btn_wrapper;
var G__67724 = (function (){var obj67728 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67729 = app.shared.components.toolbar.btn_full_screen;
var G__67730 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67729,G__67730) : helix.core.jsx.call(null,G__67729,G__67730));
})()});
return obj67728;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67723,G__67724) : helix.core.jsx.call(null,G__67723,G__67724));
})(),(function (){var G__67735 = app.shared.components.toolbar.btn_wrapper;
var G__67736 = (function (){var obj67740 = ({"x":(1174),"y":(54),"children":(function (){var G__67741 = app.shared.components.toolbar.btn_divider;
var G__67742 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67741,G__67742) : helix.core.jsx.call(null,G__67741,G__67742));
})()});
return obj67740;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67735,G__67736) : helix.core.jsx.call(null,G__67735,G__67736));
})(),(function (){var G__67743 = app.shared.components.toolbar.btn_wrapper;
var G__67744 = (function (){var obj67747 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Limiter",new cljs.core.Keyword(null,"text","text",-1790561697),"The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2\u2026, LRG 1\u2026 and TRV 5. The data are transferred via ISO 11898 CAN bus using the CANopen protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: \u25A0 Sensor alarms if the limits are exceeded \u25A0 Fault indications on the occurrence of faults in electronic or mechanical parts \u25A0 Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: \u25A0 Fault in sensors (negative self-test, excessively high temperature in terminal box) \u25A0 Fault in control unit (negative self-test) \u25A0 Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."], null)], null));
}),"children":(function (){var G__67748 = app.shared.components.toolbar.btn_info;
var G__67749 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67748,G__67749) : helix.core.jsx.call(null,G__67748,G__67749));
})()});
return obj67747;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67743,G__67744) : helix.core.jsx.call(null,G__67743,G__67744));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67348,G__67349) : helix.core.jsxs.call(null,G__67348,G__67349));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__67750 = G__67091;
(G__67750.displayName = "app.connect.URS-61.toolbar-panel/URS-61-toolbar-panel");

return G__67750;
} else {
return G__67091;
}
})();




//# sourceMappingURL=app.connect.URS_61.toolbar_panel.js.map
