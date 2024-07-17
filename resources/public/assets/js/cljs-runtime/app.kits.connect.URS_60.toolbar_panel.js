goog.provide('app.kits.connect.URS_60.toolbar_panel');

app.kits.connect.URS_60.toolbar_panel.URS_60_toolbar_panel = (function (){var G__46135 = (function app$kits$connect$URS_60$toolbar_panel$URS_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__46145 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URS-60-show-toolbar","URS-60-show-toolbar",-1403693272)], null));
var vec__46198 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46198,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46198,(1),null);
var vec__46201 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46201,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46201,(1),null);
var vec__46204 = helix.hooks.use_state(true);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46204,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46204,(1),null);
var vec__46207 = helix.hooks.use_state(true);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46207,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46207,(1),null);
var vec__46210 = helix.hooks.use_state(true);
var val_5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46210,(0),null);
var set_val_5_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46210,(1),null);
var vec__46213 = helix.hooks.use_state(true);
var val_6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46213,(0),null);
var set_val_6_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46213,(1),null);
var vec__46216 = helix.hooks.use_state(true);
var val_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46216,(0),null);
var set_val_7_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46216,(1),null);
var vec__46219 = helix.hooks.use_state(true);
var val_8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46219,(0),null);
var set_val_8_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46219,(1),null);
var vec__46222 = helix.hooks.use_state(true);
var val_9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46222,(0),null);
var set_val_9_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46222,(1),null);
var vec__46225 = helix.hooks.use_state(true);
var val_10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46225,(0),null);
var set_val_10_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46225,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__46257 = helix.core.Fragment;
var G__46259 = ({"children": [(function (){var G__46272 = app.shared.components.toolbar.title;
var G__46274 = (function (){var obj46280 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Limiter"});
return obj46280;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46272,G__46274) : helix.core.jsx.call(null,G__46272,G__46274));
})(),(function (){var G__46288 = app.shared.components.toolbar.title;
var G__46289 = (function (){var obj46296 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URS 60"});
return obj46296;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46288,G__46289) : helix.core.jsx.call(null,G__46288,G__46289));
})(),(function (){var G__46301 = app.shared.components.toolbar.btn_wrapper;
var G__46302 = (function (){var obj46308 = ({"x":(597),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__46314 = app.shared.components.toolbar.btn_replace;
var G__46315 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46314,G__46315) : helix.core.jsx.call(null,G__46314,G__46315));
})()});
return obj46308;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46301,G__46302) : helix.core.jsx.call(null,G__46301,G__46302));
})(),(function (){var G__46322 = app.shared.components.toolbar.btn_wrapper;
var G__46323 = (function (){var obj46330 = ({"x":(657),"y":(54),"children":(function (){var G__46335 = app.shared.components.toolbar.btn_divider;
var G__46336 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46335,G__46336) : helix.core.jsx.call(null,G__46335,G__46336));
})()});
return obj46330;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46322,G__46323) : helix.core.jsx.call(null,G__46322,G__46323));
})(),(function (){var G__46348 = app.shared.components.toolbar.switch_panel;
var G__46349 = (function (){var obj46351 = ({"x":(707),"y":(12),"children":[(function (){var G__46354 = app.shared.components.toolbar.switch$;
var G__46356 = (function (){var obj46358 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__46366 = (function (p1__45998_SHARP_){
return cljs.core.not(p1__45998_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__46366) : set_val_1_BANG_.call(null,G__46366));
}),"legend":(1),"inactive":false});
return obj46358;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46354,G__46356) : helix.core.jsx.call(null,G__46354,G__46356));
})(),(function (){var G__46377 = app.shared.components.toolbar.switch$;
var G__46378 = (function (){var obj46385 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__46392 = (function (p1__46001_SHARP_){
return cljs.core.not(p1__46001_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__46392) : set_val_2_BANG_.call(null,G__46392));
}),"legend":(2),"inactive":false});
return obj46385;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46377,G__46378) : helix.core.jsx.call(null,G__46377,G__46378));
})(),(function (){var G__46404 = app.shared.components.toolbar.switch$;
var G__46405 = (function (){var obj46408 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__46413 = (function (p1__46004_SHARP_){
return cljs.core.not(p1__46004_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__46413) : set_val_3_BANG_.call(null,G__46413));
}),"legend":(3),"inactive":false});
return obj46408;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46404,G__46405) : helix.core.jsx.call(null,G__46404,G__46405));
})(),(function (){var G__46424 = app.shared.components.toolbar.switch$;
var G__46425 = (function (){var obj46430 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__46437 = (function (p1__46005_SHARP_){
return cljs.core.not(p1__46005_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__46437) : set_val_4_BANG_.call(null,G__46437));
}),"legend":(4),"inactive":false});
return obj46430;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46424,G__46425) : helix.core.jsx.call(null,G__46424,G__46425));
})(),(function (){var G__46450 = app.shared.components.toolbar.switch$;
var G__46451 = (function (){var obj46454 = ({"x":(140),"value":val_5,"on-change":(function (){
var G__46462 = (function (p1__46006_SHARP_){
return cljs.core.not(p1__46006_SHARP_);
});
return (set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1(G__46462) : set_val_5_BANG_.call(null,G__46462));
}),"legend":(5),"inactive":false});
return obj46454;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46450,G__46451) : helix.core.jsx.call(null,G__46450,G__46451));
})(),(function (){var G__46475 = app.shared.components.toolbar.switch$;
var G__46476 = (function (){var obj46480 = ({"x":(175),"value":val_6,"on-change":(function (){
var G__46486 = (function (p1__46008_SHARP_){
return cljs.core.not(p1__46008_SHARP_);
});
return (set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1(G__46486) : set_val_6_BANG_.call(null,G__46486));
}),"legend":(6),"inactive":false});
return obj46480;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46475,G__46476) : helix.core.jsx.call(null,G__46475,G__46476));
})(),(function (){var G__46501 = app.shared.components.toolbar.switch$;
var G__46502 = (function (){var obj46509 = ({"x":(210),"value":val_7,"on-change":(function (){
var G__46512 = (function (p1__46011_SHARP_){
return cljs.core.not(p1__46011_SHARP_);
});
return (set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1(G__46512) : set_val_7_BANG_.call(null,G__46512));
}),"legend":(7),"inactive":false});
return obj46509;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46501,G__46502) : helix.core.jsx.call(null,G__46501,G__46502));
})(),(function (){var G__46521 = app.shared.components.toolbar.switch$;
var G__46522 = (function (){var obj46526 = ({"x":(245),"value":val_8,"on-change":(function (){
var G__46531 = (function (p1__46012_SHARP_){
return cljs.core.not(p1__46012_SHARP_);
});
return (set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1(G__46531) : set_val_8_BANG_.call(null,G__46531));
}),"legend":(8),"inactive":false});
return obj46526;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46521,G__46522) : helix.core.jsx.call(null,G__46521,G__46522));
})(),(function (){var G__46537 = app.shared.components.toolbar.switch$;
var G__46538 = (function (){var obj46540 = ({"x":(280),"value":val_9,"on-change":(function (){
var G__46543 = (function (p1__46015_SHARP_){
return cljs.core.not(p1__46015_SHARP_);
});
return (set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1(G__46543) : set_val_9_BANG_.call(null,G__46543));
}),"legend":(9),"inactive":false});
return obj46540;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46537,G__46538) : helix.core.jsx.call(null,G__46537,G__46538));
})(),(function (){var G__46549 = app.shared.components.toolbar.switch$;
var G__46550 = (function (){var obj46554 = ({"x":(315),"value":val_10,"on-change":(function (){
var G__46556 = (function (p1__46016_SHARP_){
return cljs.core.not(p1__46016_SHARP_);
});
return (set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1(G__46556) : set_val_10_BANG_.call(null,G__46556));
}),"legend":(10),"inactive":false});
return obj46554;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46549,G__46550) : helix.core.jsx.call(null,G__46549,G__46550));
})()]});
return obj46351;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__46348,G__46349) : helix.core.jsxs.call(null,G__46348,G__46349));
})(),(function (){var G__46564 = app.shared.components.toolbar.btn_wrapper;
var G__46565 = (function (){var obj46572 = ({"x":(1064),"y":(54),"children":(function (){var G__46577 = app.shared.components.toolbar.btn_divider;
var G__46578 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46577,G__46578) : helix.core.jsx.call(null,G__46577,G__46578));
})()});
return obj46572;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46564,G__46565) : helix.core.jsx.call(null,G__46564,G__46565));
})(),(function (){var G__46581 = app.shared.components.toolbar.btn_wrapper;
var G__46582 = (function (){var obj46587 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__46594 = app.shared.components.toolbar.btn_full_screen;
var G__46595 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46594,G__46595) : helix.core.jsx.call(null,G__46594,G__46595));
})()});
return obj46587;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46581,G__46582) : helix.core.jsx.call(null,G__46581,G__46582));
})(),(function (){var G__46600 = app.shared.components.toolbar.btn_wrapper;
var G__46601 = (function (){var obj46605 = ({"x":(1174),"y":(54),"children":(function (){var G__46608 = app.shared.components.toolbar.btn_divider;
var G__46609 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46608,G__46609) : helix.core.jsx.call(null,G__46608,G__46609));
})()});
return obj46605;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46600,G__46601) : helix.core.jsx.call(null,G__46600,G__46601));
})(),(function (){var G__46612 = app.shared.components.toolbar.btn_wrapper;
var G__46613 = (function (){var obj46615 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Limiter",new cljs.core.Keyword(null,"text","text",-1790561697),"The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2\u2026, LRG 1\u2026 and TRV 5. The data are transferred via ISO 11898 CAN bus using the CANopen protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: \u25A0 Sensor alarms if the limits are exceeded \u25A0 Fault indications on the occurrence of faults in electronic or mechanical parts \u25A0 Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: \u25A0 Fault in sensors (negative self-test, excessively high temperature in terminal box) \u25A0 Fault in control unit (negative self-test) \u25A0 Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."], null)], null));
}),"children":(function (){var G__46622 = app.shared.components.toolbar.btn_info;
var G__46623 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46622,G__46623) : helix.core.jsx.call(null,G__46622,G__46623));
})()});
return obj46615;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__46612,G__46613) : helix.core.jsx.call(null,G__46612,G__46613));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__46257,G__46259) : helix.core.jsxs.call(null,G__46257,G__46259));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__46628 = G__46135;
(G__46628.displayName = "app.kits.connect.URS-60.toolbar-panel/URS-60-toolbar-panel");

return G__46628;
} else {
return G__46135;
}
})();




//# sourceMappingURL=app.kits.connect.URS_60.toolbar_panel.js.map
