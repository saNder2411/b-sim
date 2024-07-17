goog.provide('app.kits.connect.URS_61.toolbar_panel');

app.kits.connect.URS_61.toolbar_panel.URS_61_toolbar_panel = (function (){var G__46118 = (function app$kits$connect$URS_61$toolbar_panel$URS_61_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__46124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URS-61-show-toolbar","URS-61-show-toolbar",-707856974)], null));
var vec__46153 = helix.hooks.use_state(true);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46153,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46153,(1),null);
var vec__46156 = helix.hooks.use_state(true);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46156,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46156,(1),null);
var vec__46159 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46159,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46159,(1),null);
var vec__46162 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46162,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46162,(1),null);
var vec__46165 = helix.hooks.use_state(false);
var val_5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46165,(0),null);
var set_val_5_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46165,(1),null);
var vec__46168 = helix.hooks.use_state(false);
var val_6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46168,(0),null);
var set_val_6_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46168,(1),null);
var vec__46171 = helix.hooks.use_state(false);
var val_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46171,(0),null);
var set_val_7_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46171,(1),null);
var vec__46174 = helix.hooks.use_state(false);
var val_8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46174,(0),null);
var set_val_8_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46174,(1),null);
var vec__46177 = helix.hooks.use_state(false);
var val_9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46177,(0),null);
var set_val_9_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46177,(1),null);
var vec__46180 = helix.hooks.use_state(false);
var val_10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46180,(0),null);
var set_val_10_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46180,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__46234 = helix.core.Fragment;
var G__46235 = ({"children": [(function (){var G__46236 = app.shared.components.toolbar.title;
var G__46237 = (function (){var obj46240 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Limiter"});
return obj46240;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46236,G__46237) : helix.core.jsx.call(null,G__46236,G__46237));
})(),(function (){var G__46246 = app.shared.components.toolbar.title;
var G__46247 = (function (){var obj46254 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URS 61"});
return obj46254;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46246,G__46247) : helix.core.jsx.call(null,G__46246,G__46247));
})(),(function (){var G__46273 = app.shared.components.toolbar.btn_wrapper;
var G__46275 = (function (){var obj46282 = ({"x":(597),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__46290 = app.shared.components.toolbar.btn_replace;
var G__46291 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46290,G__46291) : helix.core.jsx.call(null,G__46290,G__46291));
})()});
return obj46282;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46273,G__46275) : helix.core.jsx.call(null,G__46273,G__46275));
})(),(function (){var G__46299 = app.shared.components.toolbar.btn_wrapper;
var G__46300 = (function (){var obj46309 = ({"x":(657),"y":(54),"children":(function (){var G__46311 = app.shared.components.toolbar.btn_divider;
var G__46312 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46311,G__46312) : helix.core.jsx.call(null,G__46311,G__46312));
})()});
return obj46309;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46299,G__46300) : helix.core.jsx.call(null,G__46299,G__46300));
})(),(function (){var G__46316 = app.shared.components.toolbar.switch_panel;
var G__46317 = (function (){var obj46325 = ({"x":(707),"y":(12),"children":[(function (){var G__46331 = app.shared.components.toolbar.switch$;
var G__46332 = (function (){var obj46338 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__46344 = (function (p1__45968_SHARP_){
return cljs.core.not(p1__45968_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__46344) : set_val_1_BANG_.call(null,G__46344));
}),"legend":(1),"inactive":false});
return obj46338;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46331,G__46332) : helix.core.jsx.call(null,G__46331,G__46332));
})(),(function (){var G__46359 = app.shared.components.toolbar.switch$;
var G__46360 = (function (){var obj46364 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__46374 = (function (p1__45971_SHARP_){
return cljs.core.not(p1__45971_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__46374) : set_val_2_BANG_.call(null,G__46374));
}),"legend":(2),"inactive":false});
return obj46364;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46359,G__46360) : helix.core.jsx.call(null,G__46359,G__46360));
})(),(function (){var G__46389 = app.shared.components.toolbar.switch$;
var G__46391 = (function (){var obj46394 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__46403 = (function (p1__45972_SHARP_){
return cljs.core.not(p1__45972_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__46403) : set_val_3_BANG_.call(null,G__46403));
}),"legend":(3),"inactive":false});
return obj46394;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46389,G__46391) : helix.core.jsx.call(null,G__46389,G__46391));
})(),(function (){var G__46414 = app.shared.components.toolbar.switch$;
var G__46415 = (function (){var obj46420 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__46422 = (function (p1__45973_SHARP_){
return cljs.core.not(p1__45973_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__46422) : set_val_4_BANG_.call(null,G__46422));
}),"legend":(4),"inactive":false});
return obj46420;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46414,G__46415) : helix.core.jsx.call(null,G__46414,G__46415));
})(),(function (){var G__46443 = app.shared.components.toolbar.switch$;
var G__46444 = (function (){var obj46448 = ({"x":(140),"value":val_5,"on-change":(function (){
var G__46452 = (function (p1__45976_SHARP_){
return cljs.core.not(p1__45976_SHARP_);
});
return (set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1(G__46452) : set_val_5_BANG_.call(null,G__46452));
}),"legend":(5),"inactive":false});
return obj46448;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46443,G__46444) : helix.core.jsx.call(null,G__46443,G__46444));
})(),(function (){var G__46465 = app.shared.components.toolbar.switch$;
var G__46466 = (function (){var obj46473 = ({"x":(175),"value":val_6,"on-change":(function (){
var G__46478 = (function (p1__45978_SHARP_){
return cljs.core.not(p1__45978_SHARP_);
});
return (set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1(G__46478) : set_val_6_BANG_.call(null,G__46478));
}),"legend":(6),"inactive":false});
return obj46473;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46465,G__46466) : helix.core.jsx.call(null,G__46465,G__46466));
})(),(function (){var G__46489 = app.shared.components.toolbar.switch$;
var G__46490 = (function (){var obj46496 = ({"x":(210),"value":val_7,"on-change":(function (){
var G__46507 = (function (p1__45979_SHARP_){
return cljs.core.not(p1__45979_SHARP_);
});
return (set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1(G__46507) : set_val_7_BANG_.call(null,G__46507));
}),"legend":(7),"inactive":false});
return obj46496;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46489,G__46490) : helix.core.jsx.call(null,G__46489,G__46490));
})(),(function (){var G__46515 = app.shared.components.toolbar.switch$;
var G__46516 = (function (){var obj46520 = ({"x":(245),"value":val_8,"on-change":(function (){
var G__46523 = (function (p1__45982_SHARP_){
return cljs.core.not(p1__45982_SHARP_);
});
return (set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1(G__46523) : set_val_8_BANG_.call(null,G__46523));
}),"legend":(8),"inactive":false});
return obj46520;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46515,G__46516) : helix.core.jsx.call(null,G__46515,G__46516));
})(),(function (){var G__46532 = app.shared.components.toolbar.switch$;
var G__46533 = (function (){var obj46536 = ({"x":(280),"value":val_9,"on-change":(function (){
var G__46541 = (function (p1__45985_SHARP_){
return cljs.core.not(p1__45985_SHARP_);
});
return (set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1(G__46541) : set_val_9_BANG_.call(null,G__46541));
}),"legend":(9),"inactive":false});
return obj46536;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46532,G__46533) : helix.core.jsx.call(null,G__46532,G__46533));
})(),(function (){var G__46544 = app.shared.components.toolbar.switch$;
var G__46545 = (function (){var obj46552 = ({"x":(315),"value":val_10,"on-change":(function (){
var G__46555 = (function (p1__45987_SHARP_){
return cljs.core.not(p1__45987_SHARP_);
});
return (set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1(G__46555) : set_val_10_BANG_.call(null,G__46555));
}),"legend":(10),"inactive":false});
return obj46552;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46544,G__46545) : helix.core.jsx.call(null,G__46544,G__46545));
})()]});
return obj46325;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__46316,G__46317) : helix.core.jsxs.call(null,G__46316,G__46317));
})(),(function (){var G__46562 = app.shared.components.toolbar.btn_wrapper;
var G__46563 = (function (){var obj46570 = ({"x":(1064),"y":(54),"children":(function (){var G__46575 = app.shared.components.toolbar.btn_divider;
var G__46576 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46575,G__46576) : helix.core.jsx.call(null,G__46575,G__46576));
})()});
return obj46570;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46562,G__46563) : helix.core.jsx.call(null,G__46562,G__46563));
})(),(function (){var G__46579 = app.shared.components.toolbar.btn_wrapper;
var G__46580 = (function (){var obj46584 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__46592 = app.shared.components.toolbar.btn_full_screen;
var G__46593 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46592,G__46593) : helix.core.jsx.call(null,G__46592,G__46593));
})()});
return obj46584;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46579,G__46580) : helix.core.jsx.call(null,G__46579,G__46580));
})(),(function (){var G__46602 = app.shared.components.toolbar.btn_wrapper;
var G__46603 = (function (){var obj46607 = ({"x":(1174),"y":(54),"children":(function (){var G__46610 = app.shared.components.toolbar.btn_divider;
var G__46611 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46610,G__46611) : helix.core.jsx.call(null,G__46610,G__46611));
})()});
return obj46607;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46602,G__46603) : helix.core.jsx.call(null,G__46602,G__46603));
})(),(function (){var G__46616 = app.shared.components.toolbar.btn_wrapper;
var G__46617 = (function (){var obj46621 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Limiter",new cljs.core.Keyword(null,"text","text",-1790561697),"The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2\u2026, LRG 1\u2026 and TRV 5. The data are transferred via ISO 11898 CAN bus using the CANopen protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: \u25A0 Sensor alarms if the limits are exceeded \u25A0 Fault indications on the occurrence of faults in electronic or mechanical parts \u25A0 Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: \u25A0 Fault in sensors (negative self-test, excessively high temperature in terminal box) \u25A0 Fault in control unit (negative self-test) \u25A0 Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."], null)], null));
}),"children":(function (){var G__46626 = app.shared.components.toolbar.btn_info;
var G__46627 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46626,G__46627) : helix.core.jsx.call(null,G__46626,G__46627));
})()});
return obj46621;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46616,G__46617) : helix.core.jsx.call(null,G__46616,G__46617));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__46234,G__46235) : helix.core.jsxs.call(null,G__46234,G__46235));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__46630 = G__46118;
(G__46630.displayName = "app.kits.connect.URS-61.toolbar-panel/URS-61-toolbar-panel");

return G__46630;
} else {
return G__46118;
}
})();




//# sourceMappingURL=app.kits.connect.URS_61.toolbar_panel.js.map
