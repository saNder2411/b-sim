goog.provide('app.connect.URS_61.toolbar_panel');

app.connect.URS_61.toolbar_panel.URS_61_toolbar_panel = (function (){var G__42697 = (function app$connect$URS_61$toolbar_panel$URS_61_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__42703 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URS-61-show-toolbar","URS-61-show-toolbar",-707856974)], null));
var vec__42725 = helix.hooks.use_state(true);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42725,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42725,(1),null);
var vec__42728 = helix.hooks.use_state(true);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42728,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42728,(1),null);
var vec__42731 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42731,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42731,(1),null);
var vec__42734 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42734,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42734,(1),null);
var vec__42737 = helix.hooks.use_state(false);
var val_5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42737,(0),null);
var set_val_5_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42737,(1),null);
var vec__42740 = helix.hooks.use_state(false);
var val_6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42740,(0),null);
var set_val_6_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42740,(1),null);
var vec__42743 = helix.hooks.use_state(false);
var val_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42743,(0),null);
var set_val_7_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42743,(1),null);
var vec__42746 = helix.hooks.use_state(false);
var val_8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42746,(0),null);
var set_val_8_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42746,(1),null);
var vec__42749 = helix.hooks.use_state(false);
var val_9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42749,(0),null);
var set_val_9_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42749,(1),null);
var vec__42752 = helix.hooks.use_state(false);
var val_10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42752,(0),null);
var set_val_10_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42752,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__42755 = helix.core.Fragment;
var G__42756 = ({"children": [(function (){var G__42758 = app.shared.components.toolbar.title;
var G__42759 = (function (){var obj42763 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Limiter"});
return obj42763;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42758,G__42759) : helix.core.jsx.call(null,G__42758,G__42759));
})(),(function (){var G__42764 = app.shared.components.toolbar.title;
var G__42765 = (function (){var obj42769 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URS 61"});
return obj42769;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42764,G__42765) : helix.core.jsx.call(null,G__42764,G__42765));
})(),(function (){var G__42776 = app.shared.components.toolbar.btn_wrapper;
var G__42777 = (function (){var obj42781 = ({"x":(597),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__42783 = app.shared.components.toolbar.btn_replace;
var G__42784 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42783,G__42784) : helix.core.jsx.call(null,G__42783,G__42784));
})()});
return obj42781;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42776,G__42777) : helix.core.jsx.call(null,G__42776,G__42777));
})(),(function (){var G__42791 = app.shared.components.toolbar.btn_wrapper;
var G__42792 = (function (){var obj42798 = ({"x":(657),"y":(54),"children":(function (){var G__42800 = app.shared.components.toolbar.btn_divider;
var G__42801 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42800,G__42801) : helix.core.jsx.call(null,G__42800,G__42801));
})()});
return obj42798;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42791,G__42792) : helix.core.jsx.call(null,G__42791,G__42792));
})(),(function (){var G__42811 = app.shared.components.toolbar.switch_panel;
var G__42812 = (function (){var obj42818 = ({"x":(707),"y":(12),"children":[(function (){var G__42823 = app.shared.components.toolbar.switch$;
var G__42824 = (function (){var obj42829 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__42833 = (function (p1__42649_SHARP_){
return cljs.core.not(p1__42649_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__42833) : set_val_1_BANG_.call(null,G__42833));
}),"legend":(1),"inactive":false});
return obj42829;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42823,G__42824) : helix.core.jsx.call(null,G__42823,G__42824));
})(),(function (){var G__42841 = app.shared.components.toolbar.switch$;
var G__42842 = (function (){var obj42844 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__42847 = (function (p1__42650_SHARP_){
return cljs.core.not(p1__42650_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__42847) : set_val_2_BANG_.call(null,G__42847));
}),"legend":(2),"inactive":false});
return obj42844;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42841,G__42842) : helix.core.jsx.call(null,G__42841,G__42842));
})(),(function (){var G__42851 = app.shared.components.toolbar.switch$;
var G__42852 = (function (){var obj42856 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__42860 = (function (p1__42651_SHARP_){
return cljs.core.not(p1__42651_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__42860) : set_val_3_BANG_.call(null,G__42860));
}),"legend":(3),"inactive":false});
return obj42856;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42851,G__42852) : helix.core.jsx.call(null,G__42851,G__42852));
})(),(function (){var G__42864 = app.shared.components.toolbar.switch$;
var G__42866 = (function (){var obj42871 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__42970 = (function (p1__42652_SHARP_){
return cljs.core.not(p1__42652_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__42970) : set_val_4_BANG_.call(null,G__42970));
}),"legend":(4),"inactive":false});
return obj42871;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42864,G__42866) : helix.core.jsx.call(null,G__42864,G__42866));
})(),(function (){var G__42980 = app.shared.components.toolbar.switch$;
var G__42981 = (function (){var obj42988 = ({"x":(140),"value":val_5,"on-change":(function (){
var G__42998 = (function (p1__42653_SHARP_){
return cljs.core.not(p1__42653_SHARP_);
});
return (set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1(G__42998) : set_val_5_BANG_.call(null,G__42998));
}),"legend":(5),"inactive":false});
return obj42988;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42980,G__42981) : helix.core.jsx.call(null,G__42980,G__42981));
})(),(function (){var G__43007 = app.shared.components.toolbar.switch$;
var G__43008 = (function (){var obj43012 = ({"x":(175),"value":val_6,"on-change":(function (){
var G__43018 = (function (p1__42654_SHARP_){
return cljs.core.not(p1__42654_SHARP_);
});
return (set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1(G__43018) : set_val_6_BANG_.call(null,G__43018));
}),"legend":(6),"inactive":false});
return obj43012;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43007,G__43008) : helix.core.jsx.call(null,G__43007,G__43008));
})(),(function (){var G__43033 = app.shared.components.toolbar.switch$;
var G__43034 = (function (){var obj43043 = ({"x":(210),"value":val_7,"on-change":(function (){
var G__43051 = (function (p1__42655_SHARP_){
return cljs.core.not(p1__42655_SHARP_);
});
return (set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1(G__43051) : set_val_7_BANG_.call(null,G__43051));
}),"legend":(7),"inactive":false});
return obj43043;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43033,G__43034) : helix.core.jsx.call(null,G__43033,G__43034));
})(),(function (){var G__43067 = app.shared.components.toolbar.switch$;
var G__43068 = (function (){var obj43077 = ({"x":(245),"value":val_8,"on-change":(function (){
var G__43109 = (function (p1__42656_SHARP_){
return cljs.core.not(p1__42656_SHARP_);
});
return (set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1(G__43109) : set_val_8_BANG_.call(null,G__43109));
}),"legend":(8),"inactive":false});
return obj43077;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43067,G__43068) : helix.core.jsx.call(null,G__43067,G__43068));
})(),(function (){var G__43121 = app.shared.components.toolbar.switch$;
var G__43122 = (function (){var obj43129 = ({"x":(280),"value":val_9,"on-change":(function (){
var G__43135 = (function (p1__42657_SHARP_){
return cljs.core.not(p1__42657_SHARP_);
});
return (set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1(G__43135) : set_val_9_BANG_.call(null,G__43135));
}),"legend":(9),"inactive":false});
return obj43129;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43121,G__43122) : helix.core.jsx.call(null,G__43121,G__43122));
})(),(function (){var G__43152 = app.shared.components.toolbar.switch$;
var G__43154 = (function (){var obj43158 = ({"x":(315),"value":val_10,"on-change":(function (){
var G__43164 = (function (p1__42658_SHARP_){
return cljs.core.not(p1__42658_SHARP_);
});
return (set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1(G__43164) : set_val_10_BANG_.call(null,G__43164));
}),"legend":(10),"inactive":false});
return obj43158;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43152,G__43154) : helix.core.jsx.call(null,G__43152,G__43154));
})()]});
return obj42818;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42811,G__42812) : helix.core.jsxs.call(null,G__42811,G__42812));
})(),(function (){var G__43180 = app.shared.components.toolbar.btn_wrapper;
var G__43181 = (function (){var obj43190 = ({"x":(1064),"y":(54),"children":(function (){var G__43197 = app.shared.components.toolbar.btn_divider;
var G__43198 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43197,G__43198) : helix.core.jsx.call(null,G__43197,G__43198));
})()});
return obj43190;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43180,G__43181) : helix.core.jsx.call(null,G__43180,G__43181));
})(),(function (){var G__43203 = app.shared.components.toolbar.btn_wrapper;
var G__43204 = (function (){var obj43209 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__43223 = app.shared.components.toolbar.btn_full_screen;
var G__43224 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43223,G__43224) : helix.core.jsx.call(null,G__43223,G__43224));
})()});
return obj43209;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43203,G__43204) : helix.core.jsx.call(null,G__43203,G__43204));
})(),(function (){var G__43231 = app.shared.components.toolbar.btn_wrapper;
var G__43232 = (function (){var obj43234 = ({"x":(1174),"y":(54),"children":(function (){var G__43237 = app.shared.components.toolbar.btn_divider;
var G__43238 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43237,G__43238) : helix.core.jsx.call(null,G__43237,G__43238));
})()});
return obj43234;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43231,G__43232) : helix.core.jsx.call(null,G__43231,G__43232));
})(),(function (){var G__43244 = app.shared.components.toolbar.btn_wrapper;
var G__43245 = (function (){var obj43249 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Limiter",new cljs.core.Keyword(null,"text","text",-1790561697),"The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2\u2026, LRG 1\u2026 and TRV 5. The data are transferred via ISO 11898 CAN bus using the CANopen protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: \u25A0 Sensor alarms if the limits are exceeded \u25A0 Fault indications on the occurrence of faults in electronic or mechanical parts \u25A0 Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: \u25A0 Fault in sensors (negative self-test, excessively high temperature in terminal box) \u25A0 Fault in control unit (negative self-test) \u25A0 Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."], null)], null));
}),"children":(function (){var G__43254 = app.shared.components.toolbar.btn_info;
var G__43255 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43254,G__43255) : helix.core.jsx.call(null,G__43254,G__43255));
})()});
return obj43249;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43244,G__43245) : helix.core.jsx.call(null,G__43244,G__43245));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42755,G__42756) : helix.core.jsxs.call(null,G__42755,G__42756));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__43259 = G__42697;
(G__43259.displayName = "app.connect.URS-61.toolbar-panel/URS-61-toolbar-panel");

return G__43259;
} else {
return G__42697;
}
})();




//# sourceMappingURL=app.connect.URS_61.toolbar_panel.js.map
