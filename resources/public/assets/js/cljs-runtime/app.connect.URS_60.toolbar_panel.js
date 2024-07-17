goog.provide('app.connect.URS_60.toolbar_panel');

app.connect.URS_60.toolbar_panel.URS_60_toolbar_panel = (function (){var G__43763 = (function app$connect$URS_60$toolbar_panel$URS_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__43774 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URS-60-show-toolbar","URS-60-show-toolbar",-1403693272)], null));
var vec__43798 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43798,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43798,(1),null);
var vec__43803 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43803,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43803,(1),null);
var vec__43806 = helix.hooks.use_state(true);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43806,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43806,(1),null);
var vec__43809 = helix.hooks.use_state(true);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43809,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43809,(1),null);
var vec__43812 = helix.hooks.use_state(true);
var val_5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43812,(0),null);
var set_val_5_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43812,(1),null);
var vec__43815 = helix.hooks.use_state(true);
var val_6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43815,(0),null);
var set_val_6_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43815,(1),null);
var vec__43818 = helix.hooks.use_state(true);
var val_7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43818,(0),null);
var set_val_7_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43818,(1),null);
var vec__43821 = helix.hooks.use_state(true);
var val_8 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43821,(0),null);
var set_val_8_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43821,(1),null);
var vec__43824 = helix.hooks.use_state(true);
var val_9 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43824,(0),null);
var set_val_9_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43824,(1),null);
var vec__43827 = helix.hooks.use_state(true);
var val_10 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43827,(0),null);
var set_val_10_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43827,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__43837 = helix.core.Fragment;
var G__43838 = ({"children": [(function (){var G__43839 = app.shared.components.toolbar.title;
var G__43840 = (function (){var obj43842 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Limiter"});
return obj43842;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43839,G__43840) : helix.core.jsx.call(null,G__43839,G__43840));
})(),(function (){var G__43843 = app.shared.components.toolbar.title;
var G__43844 = (function (){var obj43846 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URS 60"});
return obj43846;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43843,G__43844) : helix.core.jsx.call(null,G__43843,G__43844));
})(),(function (){var G__43847 = app.shared.components.toolbar.btn_wrapper;
var G__43848 = (function (){var obj43850 = ({"x":(597),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__43851 = app.shared.components.toolbar.btn_replace;
var G__43852 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43851,G__43852) : helix.core.jsx.call(null,G__43851,G__43852));
})()});
return obj43850;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43847,G__43848) : helix.core.jsx.call(null,G__43847,G__43848));
})(),(function (){var G__43853 = app.shared.components.toolbar.btn_wrapper;
var G__43854 = (function (){var obj43856 = ({"x":(657),"y":(54),"children":(function (){var G__43857 = app.shared.components.toolbar.btn_divider;
var G__43858 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43857,G__43858) : helix.core.jsx.call(null,G__43857,G__43858));
})()});
return obj43856;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43853,G__43854) : helix.core.jsx.call(null,G__43853,G__43854));
})(),(function (){var G__43859 = app.shared.components.toolbar.switch_panel;
var G__43860 = (function (){var obj43862 = ({"x":(707),"y":(12),"children":[(function (){var G__43863 = app.shared.components.toolbar.switch$;
var G__43864 = (function (){var obj43866 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__43867 = (function (p1__43504_SHARP_){
return cljs.core.not(p1__43504_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__43867) : set_val_1_BANG_.call(null,G__43867));
}),"legend":(1),"inactive":false});
return obj43866;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43863,G__43864) : helix.core.jsx.call(null,G__43863,G__43864));
})(),(function (){var G__43868 = app.shared.components.toolbar.switch$;
var G__43869 = (function (){var obj43871 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__43872 = (function (p1__43508_SHARP_){
return cljs.core.not(p1__43508_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__43872) : set_val_2_BANG_.call(null,G__43872));
}),"legend":(2),"inactive":false});
return obj43871;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43868,G__43869) : helix.core.jsx.call(null,G__43868,G__43869));
})(),(function (){var G__43873 = app.shared.components.toolbar.switch$;
var G__43874 = (function (){var obj43876 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__43878 = (function (p1__43509_SHARP_){
return cljs.core.not(p1__43509_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__43878) : set_val_3_BANG_.call(null,G__43878));
}),"legend":(3),"inactive":false});
return obj43876;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43873,G__43874) : helix.core.jsx.call(null,G__43873,G__43874));
})(),(function (){var G__43884 = app.shared.components.toolbar.switch$;
var G__43885 = (function (){var obj43892 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__43895 = (function (p1__43512_SHARP_){
return cljs.core.not(p1__43512_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__43895) : set_val_4_BANG_.call(null,G__43895));
}),"legend":(4),"inactive":false});
return obj43892;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43884,G__43885) : helix.core.jsx.call(null,G__43884,G__43885));
})(),(function (){var G__43905 = app.shared.components.toolbar.switch$;
var G__43906 = (function (){var obj43910 = ({"x":(140),"value":val_5,"on-change":(function (){
var G__43915 = (function (p1__43513_SHARP_){
return cljs.core.not(p1__43513_SHARP_);
});
return (set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_5_BANG_.cljs$core$IFn$_invoke$arity$1(G__43915) : set_val_5_BANG_.call(null,G__43915));
}),"legend":(5),"inactive":false});
return obj43910;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43905,G__43906) : helix.core.jsx.call(null,G__43905,G__43906));
})(),(function (){var G__43924 = app.shared.components.toolbar.switch$;
var G__43925 = (function (){var obj43929 = ({"x":(175),"value":val_6,"on-change":(function (){
var G__43932 = (function (p1__43514_SHARP_){
return cljs.core.not(p1__43514_SHARP_);
});
return (set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_6_BANG_.cljs$core$IFn$_invoke$arity$1(G__43932) : set_val_6_BANG_.call(null,G__43932));
}),"legend":(6),"inactive":false});
return obj43929;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43924,G__43925) : helix.core.jsx.call(null,G__43924,G__43925));
})(),(function (){var G__43936 = app.shared.components.toolbar.switch$;
var G__43937 = (function (){var obj43941 = ({"x":(210),"value":val_7,"on-change":(function (){
var G__43942 = (function (p1__43515_SHARP_){
return cljs.core.not(p1__43515_SHARP_);
});
return (set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_7_BANG_.cljs$core$IFn$_invoke$arity$1(G__43942) : set_val_7_BANG_.call(null,G__43942));
}),"legend":(7),"inactive":false});
return obj43941;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43936,G__43937) : helix.core.jsx.call(null,G__43936,G__43937));
})(),(function (){var G__43947 = app.shared.components.toolbar.switch$;
var G__43948 = (function (){var obj43952 = ({"x":(245),"value":val_8,"on-change":(function (){
var G__43953 = (function (p1__43516_SHARP_){
return cljs.core.not(p1__43516_SHARP_);
});
return (set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_8_BANG_.cljs$core$IFn$_invoke$arity$1(G__43953) : set_val_8_BANG_.call(null,G__43953));
}),"legend":(8),"inactive":false});
return obj43952;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43947,G__43948) : helix.core.jsx.call(null,G__43947,G__43948));
})(),(function (){var G__43955 = app.shared.components.toolbar.switch$;
var G__43956 = (function (){var obj43958 = ({"x":(280),"value":val_9,"on-change":(function (){
var G__43959 = (function (p1__43517_SHARP_){
return cljs.core.not(p1__43517_SHARP_);
});
return (set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_9_BANG_.cljs$core$IFn$_invoke$arity$1(G__43959) : set_val_9_BANG_.call(null,G__43959));
}),"legend":(9),"inactive":false});
return obj43958;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43955,G__43956) : helix.core.jsx.call(null,G__43955,G__43956));
})(),(function (){var G__43960 = app.shared.components.toolbar.switch$;
var G__43961 = (function (){var obj43963 = ({"x":(315),"value":val_10,"on-change":(function (){
var G__43964 = (function (p1__43518_SHARP_){
return cljs.core.not(p1__43518_SHARP_);
});
return (set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_10_BANG_.cljs$core$IFn$_invoke$arity$1(G__43964) : set_val_10_BANG_.call(null,G__43964));
}),"legend":(10),"inactive":false});
return obj43963;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43960,G__43961) : helix.core.jsx.call(null,G__43960,G__43961));
})()]});
return obj43862;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__43859,G__43860) : helix.core.jsxs.call(null,G__43859,G__43860));
})(),(function (){var G__43965 = app.shared.components.toolbar.btn_wrapper;
var G__43966 = (function (){var obj43968 = ({"x":(1064),"y":(54),"children":(function (){var G__43969 = app.shared.components.toolbar.btn_divider;
var G__43970 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43969,G__43970) : helix.core.jsx.call(null,G__43969,G__43970));
})()});
return obj43968;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43965,G__43966) : helix.core.jsx.call(null,G__43965,G__43966));
})(),(function (){var G__43971 = app.shared.components.toolbar.btn_wrapper;
var G__43972 = (function (){var obj43974 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__43975 = app.shared.components.toolbar.btn_full_screen;
var G__43976 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43975,G__43976) : helix.core.jsx.call(null,G__43975,G__43976));
})()});
return obj43974;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43971,G__43972) : helix.core.jsx.call(null,G__43971,G__43972));
})(),(function (){var G__43977 = app.shared.components.toolbar.btn_wrapper;
var G__43978 = (function (){var obj43980 = ({"x":(1174),"y":(54),"children":(function (){var G__43981 = app.shared.components.toolbar.btn_divider;
var G__43982 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43981,G__43982) : helix.core.jsx.call(null,G__43981,G__43982));
})()});
return obj43980;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43977,G__43978) : helix.core.jsx.call(null,G__43977,G__43978));
})(),(function (){var G__43983 = app.shared.components.toolbar.btn_wrapper;
var G__43984 = (function (){var obj43986 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Limiter",new cljs.core.Keyword(null,"text","text",-1790561697),"The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2\u2026, LRG 1\u2026 and TRV 5. The data are transferred via ISO 11898 CAN bus using the CANopen protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: \u25A0 Sensor alarms if the limits are exceeded \u25A0 Fault indications on the occurrence of faults in electronic or mechanical parts \u25A0 Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: \u25A0 Fault in sensors (negative self-test, excessively high temperature in terminal box) \u25A0 Fault in control unit (negative self-test) \u25A0 Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."], null)], null));
}),"children":(function (){var G__43987 = app.shared.components.toolbar.btn_info;
var G__43988 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43987,G__43988) : helix.core.jsx.call(null,G__43987,G__43988));
})()});
return obj43986;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43983,G__43984) : helix.core.jsx.call(null,G__43983,G__43984));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__43837,G__43838) : helix.core.jsxs.call(null,G__43837,G__43838));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__43989 = G__43763;
(G__43989.displayName = "app.connect.URS-60.toolbar-panel/URS-60-toolbar-panel");

return G__43989;
} else {
return G__43763;
}
})();




//# sourceMappingURL=app.connect.URS_60.toolbar_panel.js.map
