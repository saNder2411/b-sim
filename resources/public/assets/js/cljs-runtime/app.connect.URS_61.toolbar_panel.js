goog.provide('app.connect.URS_61.toolbar_panel');

app.connect.URS_61.toolbar_panel.URS_61_toolbar_panel = (function (){var G__59929 = (function app$connect$URS_61$toolbar_panel$URS_61_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__59930 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URS-61-show-toolbar","URS-61-show-toolbar",-707856974)], null));
var vec__59966 = helix.hooks.use_state(true);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59966,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59966,(1),null);
var vec__59969 = helix.hooks.use_state(true);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59969,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59969,(1),null);
var vec__59972 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59972,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59972,(1),null);
var vec__59975 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59975,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59975,(1),null);
var vec__59978 = helix.hooks.use_state(false);
var val_5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59978,(0),null);
var set_val_5_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59978,(1),null);
var vec__59981 = helix.hooks.use_state(false);
var val_6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59981,(0),null);
var set_val_6_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59981,(1),null);
var vec__59984 = helix.hooks.use_state(false);
var val_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59984,(0),null);
var set_val_7_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59984,(1),null);
var vec__59987 = helix.hooks.use_state(false);
var val_8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59987,(0),null);
var set_val_8_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59987,(1),null);
var vec__59990 = helix.hooks.use_state(false);
var val_9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59990,(0),null);
var set_val_9_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59990,(1),null);
var vec__59993 = helix.hooks.use_state(false);
var val_10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59993,(0),null);
var set_val_10_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59993,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__60000 = helix.core.Fragment;
var G__60001 = ({"children": [(function (){var G__60004 = app.shared.components.toolbar_title.toolbar_title;
var G__60005 = (function (){var obj60007 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Limiter"});
return obj60007;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60004,G__60005) : helix.core.jsx.call(null,G__60004,G__60005));
})(),(function (){var G__60012 = app.shared.components.toolbar_title.toolbar_title;
var G__60013 = (function (){var obj60015 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URS 61"});
return obj60015;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60012,G__60013) : helix.core.jsx.call(null,G__60012,G__60013));
})(),(function (){var G__60020 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60021 = (function (){var obj60023 = ({"x":(597),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60026 = app.shared.components.toolbar_btn_replace.toolbar_btn_replace;
var G__60027 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60026,G__60027) : helix.core.jsx.call(null,G__60026,G__60027));
})()});
return obj60023;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60020,G__60021) : helix.core.jsx.call(null,G__60020,G__60021));
})(),(function (){var G__60032 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60033 = (function (){var obj60037 = ({"x":(657),"y":(54),"children":(function (){var G__60038 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60039 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60038,G__60039) : helix.core.jsx.call(null,G__60038,G__60039));
})()});
return obj60037;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60032,G__60033) : helix.core.jsx.call(null,G__60032,G__60033));
})(),(function (){var G__60044 = app.shared.components.toolbar_switch_panel.toolbar_switch_panel;
var G__60045 = (function (){var obj60049 = ({"x":(707),"y":(12),"children":[(function (){var G__60052 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60053 = (function (){var obj60055 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__60057 = (function (p1__59907_SHARP_){
return cljs.core.not(p1__59907_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__60057) : set_val_1_BANG_.call(null,G__60057));
}),"legend":(1),"inactive":false});
return obj60055;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60052,G__60053) : helix.core.jsx.call(null,G__60052,G__60053));
})(),(function (){var G__60062 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60063 = (function (){var obj60066 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__60067 = (function (p1__59909_SHARP_){
return cljs.core.not(p1__59909_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__60067) : set_val_2_BANG_.call(null,G__60067));
}),"legend":(2),"inactive":false});
return obj60066;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60062,G__60063) : helix.core.jsx.call(null,G__60062,G__60063));
})(),(function (){var G__60072 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60073 = (function (){var obj60076 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__60079 = (function (p1__59911_SHARP_){
return cljs.core.not(p1__59911_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__60079) : set_val_3_BANG_.call(null,G__60079));
}),"legend":(3),"inactive":false});
return obj60076;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60072,G__60073) : helix.core.jsx.call(null,G__60072,G__60073));
})(),(function (){var G__60083 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60084 = (function (){var obj60086 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__60089 = (function (p1__59913_SHARP_){
return cljs.core.not(p1__59913_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__60089) : set_val_4_BANG_.call(null,G__60089));
}),"legend":(4),"inactive":false});
return obj60086;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60083,G__60084) : helix.core.jsx.call(null,G__60083,G__60084));
})(),(function (){var G__60093 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60094 = (function (){var obj60096 = ({"x":(140),"value":val_5,"on-change":(function (){
var G__60099 = (function (p1__59915_SHARP_){
return cljs.core.not(p1__59915_SHARP_);
});
return (set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1(G__60099) : set_val_5_BANG_.call(null,G__60099));
}),"legend":(5),"inactive":false});
return obj60096;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60093,G__60094) : helix.core.jsx.call(null,G__60093,G__60094));
})(),(function (){var G__60103 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60104 = (function (){var obj60106 = ({"x":(175),"value":val_6,"on-change":(function (){
var G__60109 = (function (p1__59917_SHARP_){
return cljs.core.not(p1__59917_SHARP_);
});
return (set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1(G__60109) : set_val_6_BANG_.call(null,G__60109));
}),"legend":(6),"inactive":false});
return obj60106;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60103,G__60104) : helix.core.jsx.call(null,G__60103,G__60104));
})(),(function (){var G__60113 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60114 = (function (){var obj60116 = ({"x":(210),"value":val_7,"on-change":(function (){
var G__60121 = (function (p1__59919_SHARP_){
return cljs.core.not(p1__59919_SHARP_);
});
return (set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1(G__60121) : set_val_7_BANG_.call(null,G__60121));
}),"legend":(7),"inactive":false});
return obj60116;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60113,G__60114) : helix.core.jsx.call(null,G__60113,G__60114));
})(),(function (){var G__60123 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60124 = (function (){var obj60126 = ({"x":(245),"value":val_8,"on-change":(function (){
var G__60131 = (function (p1__59921_SHARP_){
return cljs.core.not(p1__59921_SHARP_);
});
return (set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1(G__60131) : set_val_8_BANG_.call(null,G__60131));
}),"legend":(8),"inactive":false});
return obj60126;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60123,G__60124) : helix.core.jsx.call(null,G__60123,G__60124));
})(),(function (){var G__60133 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60134 = (function (){var obj60136 = ({"x":(280),"value":val_9,"on-change":(function (){
var G__60141 = (function (p1__59923_SHARP_){
return cljs.core.not(p1__59923_SHARP_);
});
return (set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1(G__60141) : set_val_9_BANG_.call(null,G__60141));
}),"legend":(9),"inactive":false});
return obj60136;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60133,G__60134) : helix.core.jsx.call(null,G__60133,G__60134));
})(),(function (){var G__60143 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60144 = (function (){var obj60146 = ({"x":(315),"value":val_10,"on-change":(function (){
var G__60149 = (function (p1__59925_SHARP_){
return cljs.core.not(p1__59925_SHARP_);
});
return (set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1(G__60149) : set_val_10_BANG_.call(null,G__60149));
}),"legend":(10),"inactive":false});
return obj60146;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60143,G__60144) : helix.core.jsx.call(null,G__60143,G__60144));
})()]});
return obj60049;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60044,G__60045) : helix.core.jsxs.call(null,G__60044,G__60045));
})(),(function (){var G__60154 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60155 = (function (){var obj60161 = ({"x":(1064),"y":(54),"children":(function (){var G__60162 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60163 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60162,G__60163) : helix.core.jsx.call(null,G__60162,G__60163));
})()});
return obj60161;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60154,G__60155) : helix.core.jsx.call(null,G__60154,G__60155));
})(),(function (){var G__60166 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60167 = (function (){var obj60169 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60174 = app.shared.components.toolbar_btn_full_screen.toolbar_btn_full_screen;
var G__60175 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60174,G__60175) : helix.core.jsx.call(null,G__60174,G__60175));
})()});
return obj60169;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60166,G__60167) : helix.core.jsx.call(null,G__60166,G__60167));
})(),(function (){var G__60178 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60179 = (function (){var obj60183 = ({"x":(1174),"y":(54),"children":(function (){var G__60186 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60187 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60186,G__60187) : helix.core.jsx.call(null,G__60186,G__60187));
})()});
return obj60183;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60178,G__60179) : helix.core.jsx.call(null,G__60178,G__60179));
})(),(function (){var G__60190 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60191 = (function (){var obj60193 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Limiter",new cljs.core.Keyword(null,"text","text",-1790561697),"The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2\u2026, LRG 1\u2026 and TRV 5. The data are transferred via ISO 11898 CAN bus using the CANopen protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: \u25A0 Sensor alarms if the limits are exceeded \u25A0 Fault indications on the occurrence of faults in electronic or mechanical parts \u25A0 Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: \u25A0 Fault in sensors (negative self-test, excessively high temperature in terminal box) \u25A0 Fault in control unit (negative self-test) \u25A0 Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."], null)], null));
}),"children":(function (){var G__60194 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__60195 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60194,G__60195) : helix.core.jsx.call(null,G__60194,G__60195));
})()});
return obj60193;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60190,G__60191) : helix.core.jsx.call(null,G__60190,G__60191));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60000,G__60001) : helix.core.jsxs.call(null,G__60000,G__60001));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__60197 = G__59929;
(G__60197.displayName = "app.connect.URS-61.toolbar-panel/URS-61-toolbar-panel");

return G__60197;
} else {
return G__59929;
}
})();




//# sourceMappingURL=app.connect.URS_61.toolbar_panel.js.map
