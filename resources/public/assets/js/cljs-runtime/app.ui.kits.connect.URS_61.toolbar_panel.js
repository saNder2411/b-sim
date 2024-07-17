goog.provide('app.ui.kits.connect.URS_61.toolbar_panel');

app.ui.kits.connect.URS_61.toolbar_panel.URS_61_toolbar_panel = (function (){var G__30302 = (function app$ui$kits$connect$URS_61$toolbar_panel$URS_61_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30314 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URS-61-show-toolbar","URS-61-show-toolbar",-707856974)], null));
var vec__30346 = helix.hooks.use_state(true);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30346,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30346,(1),null);
var vec__30349 = helix.hooks.use_state(true);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30349,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30349,(1),null);
var vec__30352 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30352,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30352,(1),null);
var vec__30355 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30355,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30355,(1),null);
var vec__30358 = helix.hooks.use_state(false);
var val_5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30358,(0),null);
var set_val_5_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30358,(1),null);
var vec__30361 = helix.hooks.use_state(false);
var val_6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30361,(0),null);
var set_val_6_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30361,(1),null);
var vec__30364 = helix.hooks.use_state(false);
var val_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30364,(0),null);
var set_val_7_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30364,(1),null);
var vec__30367 = helix.hooks.use_state(false);
var val_8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30367,(0),null);
var set_val_8_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30367,(1),null);
var vec__30370 = helix.hooks.use_state(false);
var val_9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30370,(0),null);
var set_val_9_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30370,(1),null);
var vec__30375 = helix.hooks.use_state(false);
var val_10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30375,(0),null);
var set_val_10_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30375,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__30458 = helix.core.Fragment;
var G__30459 = ({"children": [(function (){var G__30468 = app.ui.shared.components.toolbar.title;
var G__30469 = (function (){var obj30475 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Limiter"});
return obj30475;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30468,G__30469) : helix.core.jsx.call(null,G__30468,G__30469));
})(),(function (){var G__30486 = app.ui.shared.components.toolbar.title;
var G__30487 = (function (){var obj30493 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URS 61"});
return obj30493;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30486,G__30487) : helix.core.jsx.call(null,G__30486,G__30487));
})(),(function (){var G__30502 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30503 = (function (){var obj30509 = ({"x":(597),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__30518 = app.ui.shared.components.toolbar.btn_replace;
var G__30519 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30518,G__30519) : helix.core.jsx.call(null,G__30518,G__30519));
})()});
return obj30509;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30502,G__30503) : helix.core.jsx.call(null,G__30502,G__30503));
})(),(function (){var G__30531 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30532 = (function (){var obj30538 = ({"x":(657),"y":(54),"children":(function (){var G__30541 = app.ui.shared.components.toolbar.btn_divider;
var G__30542 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30541,G__30542) : helix.core.jsx.call(null,G__30541,G__30542));
})()});
return obj30538;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30531,G__30532) : helix.core.jsx.call(null,G__30531,G__30532));
})(),(function (){var G__30556 = app.ui.shared.components.toolbar.switch_panel;
var G__30557 = (function (){var obj30564 = ({"x":(707),"y":(12),"children":[(function (){var G__30566 = app.ui.shared.components.toolbar.switch$;
var G__30567 = (function (){var obj30575 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__30580 = (function (p1__30150_SHARP_){
return cljs.core.not(p1__30150_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__30580) : set_val_1_BANG_.call(null,G__30580));
}),"legend":(1),"inactive":false});
return obj30575;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30566,G__30567) : helix.core.jsx.call(null,G__30566,G__30567));
})(),(function (){var G__30629 = app.ui.shared.components.toolbar.switch$;
var G__30630 = (function (){var obj30636 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__30641 = (function (p1__30151_SHARP_){
return cljs.core.not(p1__30151_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__30641) : set_val_2_BANG_.call(null,G__30641));
}),"legend":(2),"inactive":false});
return obj30636;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30629,G__30630) : helix.core.jsx.call(null,G__30629,G__30630));
})(),(function (){var G__30658 = app.ui.shared.components.toolbar.switch$;
var G__30659 = (function (){var obj30665 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__30670 = (function (p1__30152_SHARP_){
return cljs.core.not(p1__30152_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__30670) : set_val_3_BANG_.call(null,G__30670));
}),"legend":(3),"inactive":false});
return obj30665;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30658,G__30659) : helix.core.jsx.call(null,G__30658,G__30659));
})(),(function (){var G__30686 = app.ui.shared.components.toolbar.switch$;
var G__30687 = (function (){var obj30695 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__30700 = (function (p1__30153_SHARP_){
return cljs.core.not(p1__30153_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__30700) : set_val_4_BANG_.call(null,G__30700));
}),"legend":(4),"inactive":false});
return obj30695;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30686,G__30687) : helix.core.jsx.call(null,G__30686,G__30687));
})(),(function (){var G__30728 = app.ui.shared.components.toolbar.switch$;
var G__30729 = (function (){var obj30735 = ({"x":(140),"value":val_5,"on-change":(function (){
var G__30739 = (function (p1__30154_SHARP_){
return cljs.core.not(p1__30154_SHARP_);
});
return (set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1(G__30739) : set_val_5_BANG_.call(null,G__30739));
}),"legend":(5),"inactive":false});
return obj30735;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30728,G__30729) : helix.core.jsx.call(null,G__30728,G__30729));
})(),(function (){var G__30749 = app.ui.shared.components.toolbar.switch$;
var G__30750 = (function (){var obj30753 = ({"x":(175),"value":val_6,"on-change":(function (){
var G__30788 = (function (p1__30156_SHARP_){
return cljs.core.not(p1__30156_SHARP_);
});
return (set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1(G__30788) : set_val_6_BANG_.call(null,G__30788));
}),"legend":(6),"inactive":false});
return obj30753;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30749,G__30750) : helix.core.jsx.call(null,G__30749,G__30750));
})(),(function (){var G__30816 = app.ui.shared.components.toolbar.switch$;
var G__30817 = (function (){var obj30827 = ({"x":(210),"value":val_7,"on-change":(function (){
var G__30843 = (function (p1__30157_SHARP_){
return cljs.core.not(p1__30157_SHARP_);
});
return (set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1(G__30843) : set_val_7_BANG_.call(null,G__30843));
}),"legend":(7),"inactive":false});
return obj30827;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30816,G__30817) : helix.core.jsx.call(null,G__30816,G__30817));
})(),(function (){var G__30856 = app.ui.shared.components.toolbar.switch$;
var G__30857 = (function (){var obj30863 = ({"x":(245),"value":val_8,"on-change":(function (){
var G__30866 = (function (p1__30158_SHARP_){
return cljs.core.not(p1__30158_SHARP_);
});
return (set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1(G__30866) : set_val_8_BANG_.call(null,G__30866));
}),"legend":(8),"inactive":false});
return obj30863;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30856,G__30857) : helix.core.jsx.call(null,G__30856,G__30857));
})(),(function (){var G__30880 = app.ui.shared.components.toolbar.switch$;
var G__30881 = (function (){var obj30889 = ({"x":(280),"value":val_9,"on-change":(function (){
var G__30897 = (function (p1__30159_SHARP_){
return cljs.core.not(p1__30159_SHARP_);
});
return (set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1(G__30897) : set_val_9_BANG_.call(null,G__30897));
}),"legend":(9),"inactive":false});
return obj30889;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30880,G__30881) : helix.core.jsx.call(null,G__30880,G__30881));
})(),(function (){var G__30912 = app.ui.shared.components.toolbar.switch$;
var G__30914 = (function (){var obj30920 = ({"x":(315),"value":val_10,"on-change":(function (){
var G__30928 = (function (p1__30163_SHARP_){
return cljs.core.not(p1__30163_SHARP_);
});
return (set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1(G__30928) : set_val_10_BANG_.call(null,G__30928));
}),"legend":(10),"inactive":false});
return obj30920;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30912,G__30914) : helix.core.jsx.call(null,G__30912,G__30914));
})()]});
return obj30564;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30556,G__30557) : helix.core.jsxs.call(null,G__30556,G__30557));
})(),(function (){var G__30966 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30967 = (function (){var obj30975 = ({"x":(1064),"y":(54),"children":(function (){var G__30982 = app.ui.shared.components.toolbar.btn_divider;
var G__30983 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30982,G__30983) : helix.core.jsx.call(null,G__30982,G__30983));
})()});
return obj30975;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30966,G__30967) : helix.core.jsx.call(null,G__30966,G__30967));
})(),(function (){var G__30998 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31000 = (function (){var obj31009 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__31020 = app.ui.shared.components.toolbar.btn_full_screen;
var G__31021 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31020,G__31021) : helix.core.jsx.call(null,G__31020,G__31021));
})()});
return obj31009;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30998,G__31000) : helix.core.jsx.call(null,G__30998,G__31000));
})(),(function (){var G__31040 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31041 = (function (){var obj31045 = ({"x":(1174),"y":(54),"children":(function (){var G__31247 = app.ui.shared.components.toolbar.btn_divider;
var G__31248 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31247,G__31248) : helix.core.jsx.call(null,G__31247,G__31248));
})()});
return obj31045;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31040,G__31041) : helix.core.jsx.call(null,G__31040,G__31041));
})(),(function (){var G__31259 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31260 = (function (){var obj31268 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Limiter",new cljs.core.Keyword(null,"text","text",-1790561697),"The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2\u2026, LRG 1\u2026 and TRV 5. The data are transferred via ISO 11898 CAN bus using the CAN open protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: \u25A0 Sensor alarms if the limits are exceeded \u25A0 Fault indications on the occurrence of faults in electronic or mechanical parts \u25A0 Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: \u25A0 Fault in sensors (negative self-test, excessively high temperature in terminal box) \u25A0 Fault in control unit (negative self-test) \u25A0 Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."], null)], null));
}),"children":(function (){var G__31301 = app.ui.shared.components.toolbar.btn_info;
var G__31302 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31301,G__31302) : helix.core.jsx.call(null,G__31301,G__31302));
})()});
return obj31268;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31259,G__31260) : helix.core.jsx.call(null,G__31259,G__31260));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30458,G__30459) : helix.core.jsxs.call(null,G__30458,G__30459));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31391 = G__30302;
(G__31391.displayName = "app.ui.kits.connect.URS-61.toolbar-panel/URS-61-toolbar-panel");

return G__31391;
} else {
return G__30302;
}
})();




//# sourceMappingURL=app.ui.kits.connect.URS_61.toolbar_panel.js.map
