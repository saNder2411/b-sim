goog.provide('app.connect.URS_60.toolbar_panel');

app.connect.URS_60.toolbar_panel.URS_60_toolbar_panel = (function (){var G__59928 = (function app$connect$URS_60$toolbar_panel$URS_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__59931 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URS-60-show-toolbar","URS-60-show-toolbar",-1403693272)], null));
var vec__59936 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59936,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59936,(1),null);
var vec__59939 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59939,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59939,(1),null);
var vec__59942 = helix.hooks.use_state(true);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59942,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59942,(1),null);
var vec__59945 = helix.hooks.use_state(true);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59945,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59945,(1),null);
var vec__59948 = helix.hooks.use_state(true);
var val_5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59948,(0),null);
var set_val_5_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59948,(1),null);
var vec__59951 = helix.hooks.use_state(true);
var val_6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59951,(0),null);
var set_val_6_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59951,(1),null);
var vec__59954 = helix.hooks.use_state(true);
var val_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59954,(0),null);
var set_val_7_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59954,(1),null);
var vec__59957 = helix.hooks.use_state(true);
var val_8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59957,(0),null);
var set_val_8_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59957,(1),null);
var vec__59960 = helix.hooks.use_state(true);
var val_9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59960,(0),null);
var set_val_9_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59960,(1),null);
var vec__59963 = helix.hooks.use_state(true);
var val_10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59963,(0),null);
var set_val_10_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59963,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__59996 = helix.core.Fragment;
var G__59997 = ({"children": [(function (){var G__59998 = app.shared.components.toolbar_title.toolbar_title;
var G__59999 = (function (){var obj60003 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Limiter"});
return obj60003;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__59998,G__59999) : helix.core.jsx.call(null,G__59998,G__59999));
})(),(function (){var G__60008 = app.shared.components.toolbar_title.toolbar_title;
var G__60009 = (function (){var obj60011 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URS 60"});
return obj60011;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60008,G__60009) : helix.core.jsx.call(null,G__60008,G__60009));
})(),(function (){var G__60016 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60017 = (function (){var obj60019 = ({"x":(597),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60024 = app.shared.components.toolbar_btn_replace.toolbar_btn_replace;
var G__60025 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60024,G__60025) : helix.core.jsx.call(null,G__60024,G__60025));
})()});
return obj60019;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60016,G__60017) : helix.core.jsx.call(null,G__60016,G__60017));
})(),(function (){var G__60028 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60029 = (function (){var obj60031 = ({"x":(657),"y":(54),"children":(function (){var G__60034 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60035 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60034,G__60035) : helix.core.jsx.call(null,G__60034,G__60035));
})()});
return obj60031;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60028,G__60029) : helix.core.jsx.call(null,G__60028,G__60029));
})(),(function (){var G__60040 = app.shared.components.toolbar_switch_panel.toolbar_switch_panel;
var G__60041 = (function (){var obj60043 = ({"x":(707),"y":(12),"children":[(function (){var G__60046 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60047 = (function (){var obj60051 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__60056 = (function (p1__59906_SHARP_){
return cljs.core.not(p1__59906_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__60056) : set_val_1_BANG_.call(null,G__60056));
}),"legend":(1),"inactive":false});
return obj60051;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60046,G__60047) : helix.core.jsx.call(null,G__60046,G__60047));
})(),(function (){var G__60058 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60059 = (function (){var obj60061 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__60064 = (function (p1__59908_SHARP_){
return cljs.core.not(p1__59908_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__60064) : set_val_2_BANG_.call(null,G__60064));
}),"legend":(2),"inactive":false});
return obj60061;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60058,G__60059) : helix.core.jsx.call(null,G__60058,G__60059));
})(),(function (){var G__60068 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60069 = (function (){var obj60071 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__60074 = (function (p1__59910_SHARP_){
return cljs.core.not(p1__59910_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__60074) : set_val_3_BANG_.call(null,G__60074));
}),"legend":(3),"inactive":false});
return obj60071;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60068,G__60069) : helix.core.jsx.call(null,G__60068,G__60069));
})(),(function (){var G__60077 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60078 = (function (){var obj60081 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__60082 = (function (p1__59912_SHARP_){
return cljs.core.not(p1__59912_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__60082) : set_val_4_BANG_.call(null,G__60082));
}),"legend":(4),"inactive":false});
return obj60081;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60077,G__60078) : helix.core.jsx.call(null,G__60077,G__60078));
})(),(function (){var G__60087 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60088 = (function (){var obj60091 = ({"x":(140),"value":val_5,"on-change":(function (){
var G__60092 = (function (p1__59914_SHARP_){
return cljs.core.not(p1__59914_SHARP_);
});
return (set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1(G__60092) : set_val_5_BANG_.call(null,G__60092));
}),"legend":(5),"inactive":false});
return obj60091;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60087,G__60088) : helix.core.jsx.call(null,G__60087,G__60088));
})(),(function (){var G__60097 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60098 = (function (){var obj60101 = ({"x":(175),"value":val_6,"on-change":(function (){
var G__60102 = (function (p1__59916_SHARP_){
return cljs.core.not(p1__59916_SHARP_);
});
return (set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1(G__60102) : set_val_6_BANG_.call(null,G__60102));
}),"legend":(6),"inactive":false});
return obj60101;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60097,G__60098) : helix.core.jsx.call(null,G__60097,G__60098));
})(),(function (){var G__60107 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60108 = (function (){var obj60111 = ({"x":(210),"value":val_7,"on-change":(function (){
var G__60112 = (function (p1__59918_SHARP_){
return cljs.core.not(p1__59918_SHARP_);
});
return (set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1(G__60112) : set_val_7_BANG_.call(null,G__60112));
}),"legend":(7),"inactive":false});
return obj60111;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60107,G__60108) : helix.core.jsx.call(null,G__60107,G__60108));
})(),(function (){var G__60117 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60118 = (function (){var obj60120 = ({"x":(245),"value":val_8,"on-change":(function (){
var G__60122 = (function (p1__59920_SHARP_){
return cljs.core.not(p1__59920_SHARP_);
});
return (set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1(G__60122) : set_val_8_BANG_.call(null,G__60122));
}),"legend":(8),"inactive":false});
return obj60120;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60117,G__60118) : helix.core.jsx.call(null,G__60117,G__60118));
})(),(function (){var G__60127 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60128 = (function (){var obj60130 = ({"x":(280),"value":val_9,"on-change":(function (){
var G__60132 = (function (p1__59922_SHARP_){
return cljs.core.not(p1__59922_SHARP_);
});
return (set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1(G__60132) : set_val_9_BANG_.call(null,G__60132));
}),"legend":(9),"inactive":false});
return obj60130;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60127,G__60128) : helix.core.jsx.call(null,G__60127,G__60128));
})(),(function (){var G__60137 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60138 = (function (){var obj60140 = ({"x":(315),"value":val_10,"on-change":(function (){
var G__60142 = (function (p1__59924_SHARP_){
return cljs.core.not(p1__59924_SHARP_);
});
return (set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1(G__60142) : set_val_10_BANG_.call(null,G__60142));
}),"legend":(10),"inactive":false});
return obj60140;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60137,G__60138) : helix.core.jsx.call(null,G__60137,G__60138));
})()]});
return obj60043;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60040,G__60041) : helix.core.jsxs.call(null,G__60040,G__60041));
})(),(function (){var G__60147 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60148 = (function (){var obj60151 = ({"x":(1064),"y":(54),"children":(function (){var G__60152 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60153 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60152,G__60153) : helix.core.jsx.call(null,G__60152,G__60153));
})()});
return obj60151;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60147,G__60148) : helix.core.jsx.call(null,G__60147,G__60148));
})(),(function (){var G__60156 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60157 = (function (){var obj60159 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60164 = app.shared.components.toolbar_btn_full_screen.toolbar_btn_full_screen;
var G__60165 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60164,G__60165) : helix.core.jsx.call(null,G__60164,G__60165));
})()});
return obj60159;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60156,G__60157) : helix.core.jsx.call(null,G__60156,G__60157));
})(),(function (){var G__60170 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60171 = (function (){var obj60173 = ({"x":(1174),"y":(54),"children":(function (){var G__60176 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60177 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60176,G__60177) : helix.core.jsx.call(null,G__60176,G__60177));
})()});
return obj60173;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60170,G__60171) : helix.core.jsx.call(null,G__60170,G__60171));
})(),(function (){var G__60180 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60181 = (function (){var obj60185 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Limiter",new cljs.core.Keyword(null,"text","text",-1790561697),"The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2\u2026, LRG 1\u2026 and TRV 5. The data are transferred via ISO 11898 CAN bus using the CANopen protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: \u25A0 Sensor alarms if the limits are exceeded \u25A0 Fault indications on the occurrence of faults in electronic or mechanical parts \u25A0 Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: \u25A0 Fault in sensors (negative self-test, excessively high temperature in terminal box) \u25A0 Fault in control unit (negative self-test) \u25A0 Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."], null)], null));
}),"children":(function (){var G__60188 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__60189 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60188,G__60189) : helix.core.jsx.call(null,G__60188,G__60189));
})()});
return obj60185;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60180,G__60181) : helix.core.jsx.call(null,G__60180,G__60181));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__59996,G__59997) : helix.core.jsxs.call(null,G__59996,G__59997));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__60196 = G__59928;
(G__60196.displayName = "app.connect.URS-60.toolbar-panel/URS-60-toolbar-panel");

return G__60196;
} else {
return G__59928;
}
})();




//# sourceMappingURL=app.connect.URS_60.toolbar_panel.js.map
