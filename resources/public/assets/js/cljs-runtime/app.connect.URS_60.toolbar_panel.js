goog.provide('app.connect.URS_60.toolbar_panel');

app.connect.URS_60.toolbar_panel.URS_60_toolbar_panel = (function (){var G__67133 = (function app$connect$URS_60$toolbar_panel$URS_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67162 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URS-60-show-toolbar","URS-60-show-toolbar",-1403693272)], null));
var vec__67249 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67249,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67249,(1),null);
var vec__67252 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67252,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67252,(1),null);
var vec__67255 = helix.hooks.use_state(true);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67255,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67255,(1),null);
var vec__67258 = helix.hooks.use_state(true);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67258,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67258,(1),null);
var vec__67261 = helix.hooks.use_state(true);
var val_5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67261,(0),null);
var set_val_5_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67261,(1),null);
var vec__67264 = helix.hooks.use_state(true);
var val_6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67264,(0),null);
var set_val_6_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67264,(1),null);
var vec__67267 = helix.hooks.use_state(true);
var val_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67267,(0),null);
var set_val_7_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67267,(1),null);
var vec__67270 = helix.hooks.use_state(true);
var val_8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67270,(0),null);
var set_val_8_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67270,(1),null);
var vec__67273 = helix.hooks.use_state(true);
var val_9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67273,(0),null);
var set_val_9_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67273,(1),null);
var vec__67276 = helix.hooks.use_state(true);
var val_10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67276,(0),null);
var set_val_10_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67276,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__67368 = helix.core.Fragment;
var G__67369 = ({"children": [(function (){var G__67378 = app.shared.components.toolbar.title;
var G__67379 = (function (){var obj67393 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Limiter"});
return obj67393;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67378,G__67379) : helix.core.jsx.call(null,G__67378,G__67379));
})(),(function (){var G__67414 = app.shared.components.toolbar.title;
var G__67415 = (function (){var obj67423 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URS 60"});
return obj67423;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67414,G__67415) : helix.core.jsx.call(null,G__67414,G__67415));
})(),(function (){var G__67434 = app.shared.components.toolbar.btn_wrapper;
var G__67435 = (function (){var obj67449 = ({"x":(597),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67461 = app.shared.components.toolbar.btn_replace;
var G__67462 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67461,G__67462) : helix.core.jsx.call(null,G__67461,G__67462));
})()});
return obj67449;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67434,G__67435) : helix.core.jsx.call(null,G__67434,G__67435));
})(),(function (){var G__67478 = app.shared.components.toolbar.btn_wrapper;
var G__67479 = (function (){var obj67485 = ({"x":(657),"y":(54),"children":(function (){var G__67496 = app.shared.components.toolbar.btn_divider;
var G__67497 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67496,G__67497) : helix.core.jsx.call(null,G__67496,G__67497));
})()});
return obj67485;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67478,G__67479) : helix.core.jsx.call(null,G__67478,G__67479));
})(),(function (){var G__67516 = app.shared.components.toolbar.switch_panel;
var G__67518 = (function (){var obj67523 = ({"x":(707),"y":(12),"children":[(function (){var G__67529 = app.shared.components.toolbar.switch$;
var G__67530 = (function (){var obj67543 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__67550 = (function (p1__66755_SHARP_){
return cljs.core.not(p1__66755_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__67550) : set_val_1_BANG_.call(null,G__67550));
}),"legend":(1),"inactive":false});
return obj67543;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67529,G__67530) : helix.core.jsx.call(null,G__67529,G__67530));
})(),(function (){var G__67566 = app.shared.components.toolbar.switch$;
var G__67567 = (function (){var obj67578 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__67588 = (function (p1__66760_SHARP_){
return cljs.core.not(p1__66760_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__67588) : set_val_2_BANG_.call(null,G__67588));
}),"legend":(2),"inactive":false});
return obj67578;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67566,G__67567) : helix.core.jsx.call(null,G__67566,G__67567));
})(),(function (){var G__67607 = app.shared.components.toolbar.switch$;
var G__67608 = (function (){var obj67611 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__67618 = (function (p1__66763_SHARP_){
return cljs.core.not(p1__66763_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__67618) : set_val_3_BANG_.call(null,G__67618));
}),"legend":(3),"inactive":false});
return obj67611;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67607,G__67608) : helix.core.jsx.call(null,G__67607,G__67608));
})(),(function (){var G__67625 = app.shared.components.toolbar.switch$;
var G__67626 = (function (){var obj67630 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__67633 = (function (p1__66766_SHARP_){
return cljs.core.not(p1__66766_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__67633) : set_val_4_BANG_.call(null,G__67633));
}),"legend":(4),"inactive":false});
return obj67630;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67625,G__67626) : helix.core.jsx.call(null,G__67625,G__67626));
})(),(function (){var G__67638 = app.shared.components.toolbar.switch$;
var G__67639 = (function (){var obj67645 = ({"x":(140),"value":val_5,"on-change":(function (){
var G__67647 = (function (p1__66767_SHARP_){
return cljs.core.not(p1__66767_SHARP_);
});
return (set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1(G__67647) : set_val_5_BANG_.call(null,G__67647));
}),"legend":(5),"inactive":false});
return obj67645;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67638,G__67639) : helix.core.jsx.call(null,G__67638,G__67639));
})(),(function (){var G__67650 = app.shared.components.toolbar.switch$;
var G__67651 = (function (){var obj67653 = ({"x":(175),"value":val_6,"on-change":(function (){
var G__67659 = (function (p1__66768_SHARP_){
return cljs.core.not(p1__66768_SHARP_);
});
return (set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1(G__67659) : set_val_6_BANG_.call(null,G__67659));
}),"legend":(6),"inactive":false});
return obj67653;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67650,G__67651) : helix.core.jsx.call(null,G__67650,G__67651));
})(),(function (){var G__67661 = app.shared.components.toolbar.switch$;
var G__67662 = (function (){var obj67664 = ({"x":(210),"value":val_7,"on-change":(function (){
var G__67665 = (function (p1__66769_SHARP_){
return cljs.core.not(p1__66769_SHARP_);
});
return (set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1(G__67665) : set_val_7_BANG_.call(null,G__67665));
}),"legend":(7),"inactive":false});
return obj67664;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67661,G__67662) : helix.core.jsx.call(null,G__67661,G__67662));
})(),(function (){var G__67670 = app.shared.components.toolbar.switch$;
var G__67671 = (function (){var obj67673 = ({"x":(245),"value":val_8,"on-change":(function (){
var G__67675 = (function (p1__66771_SHARP_){
return cljs.core.not(p1__66771_SHARP_);
});
return (set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1(G__67675) : set_val_8_BANG_.call(null,G__67675));
}),"legend":(8),"inactive":false});
return obj67673;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67670,G__67671) : helix.core.jsx.call(null,G__67670,G__67671));
})(),(function (){var G__67677 = app.shared.components.toolbar.switch$;
var G__67679 = (function (){var obj67681 = ({"x":(280),"value":val_9,"on-change":(function (){
var G__67684 = (function (p1__66772_SHARP_){
return cljs.core.not(p1__66772_SHARP_);
});
return (set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1(G__67684) : set_val_9_BANG_.call(null,G__67684));
}),"legend":(9),"inactive":false});
return obj67681;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67677,G__67679) : helix.core.jsx.call(null,G__67677,G__67679));
})(),(function (){var G__67686 = app.shared.components.toolbar.switch$;
var G__67687 = (function (){var obj67689 = ({"x":(315),"value":val_10,"on-change":(function (){
var G__67692 = (function (p1__66773_SHARP_){
return cljs.core.not(p1__66773_SHARP_);
});
return (set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1(G__67692) : set_val_10_BANG_.call(null,G__67692));
}),"legend":(10),"inactive":false});
return obj67689;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67686,G__67687) : helix.core.jsx.call(null,G__67686,G__67687));
})()]});
return obj67523;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67516,G__67518) : helix.core.jsxs.call(null,G__67516,G__67518));
})(),(function (){var G__67696 = app.shared.components.toolbar.btn_wrapper;
var G__67697 = (function (){var obj67701 = ({"x":(1064),"y":(54),"children":(function (){var G__67704 = app.shared.components.toolbar.btn_divider;
var G__67705 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67704,G__67705) : helix.core.jsx.call(null,G__67704,G__67705));
})()});
return obj67701;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67696,G__67697) : helix.core.jsx.call(null,G__67696,G__67697));
})(),(function (){var G__67707 = app.shared.components.toolbar.btn_wrapper;
var G__67708 = (function (){var obj67710 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67713 = app.shared.components.toolbar.btn_full_screen;
var G__67714 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67713,G__67714) : helix.core.jsx.call(null,G__67713,G__67714));
})()});
return obj67710;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67707,G__67708) : helix.core.jsx.call(null,G__67707,G__67708));
})(),(function (){var G__67719 = app.shared.components.toolbar.btn_wrapper;
var G__67720 = (function (){var obj67722 = ({"x":(1174),"y":(54),"children":(function (){var G__67725 = app.shared.components.toolbar.btn_divider;
var G__67726 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67725,G__67726) : helix.core.jsx.call(null,G__67725,G__67726));
})()});
return obj67722;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67719,G__67720) : helix.core.jsx.call(null,G__67719,G__67720));
})(),(function (){var G__67731 = app.shared.components.toolbar.btn_wrapper;
var G__67732 = (function (){var obj67734 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Limiter",new cljs.core.Keyword(null,"text","text",-1790561697),"The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2\u2026, LRG 1\u2026 and TRV 5. The data are transferred via ISO 11898 CAN bus using the CANopen protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: \u25A0 Sensor alarms if the limits are exceeded \u25A0 Fault indications on the occurrence of faults in electronic or mechanical parts \u25A0 Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: \u25A0 Fault in sensors (negative self-test, excessively high temperature in terminal box) \u25A0 Fault in control unit (negative self-test) \u25A0 Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."], null)], null));
}),"children":(function (){var G__67737 = app.shared.components.toolbar.btn_info;
var G__67738 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67737,G__67738) : helix.core.jsx.call(null,G__67737,G__67738));
})()});
return obj67734;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67731,G__67732) : helix.core.jsx.call(null,G__67731,G__67732));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67368,G__67369) : helix.core.jsxs.call(null,G__67368,G__67369));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__67745 = G__67133;
(G__67745.displayName = "app.connect.URS-60.toolbar-panel/URS-60-toolbar-panel");

return G__67745;
} else {
return G__67133;
}
})();




//# sourceMappingURL=app.connect.URS_60.toolbar_panel.js.map
