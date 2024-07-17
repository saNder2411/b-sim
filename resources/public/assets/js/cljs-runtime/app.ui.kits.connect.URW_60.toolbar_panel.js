goog.provide('app.ui.kits.connect.URW_60.toolbar_panel');

app.ui.kits.connect.URW_60.toolbar_panel.URW_60_toolbar_panel = (function (){var G__30197 = (function app$ui$kits$connect$URW_60$toolbar_panel$URW_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URW-60-show-toolbar","URW-60-show-toolbar",-935397957)], null));
var vec__30254 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30254,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30254,(1),null);
var vec__30257 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30257,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30257,(1),null);
var vec__30260 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30260,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30260,(1),null);
var vec__30263 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30263,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30263,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__30321 = helix.core.Fragment;
var G__30322 = ({"children": [(function (){var G__30338 = app.ui.shared.components.toolbar.title;
var G__30339 = (function (){var obj30374 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Universal Converter"});
return obj30374;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30338,G__30339) : helix.core.jsx.call(null,G__30338,G__30339));
})(),(function (){var G__30386 = app.ui.shared.components.toolbar.title;
var G__30387 = (function (){var obj30389 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URW 60"});
return obj30389;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30386,G__30387) : helix.core.jsx.call(null,G__30386,G__30387));
})(),(function (){var G__30402 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30403 = (function (){var obj30407 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__30416 = app.ui.shared.components.toolbar.btn_replace;
var G__30417 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30416,G__30417) : helix.core.jsx.call(null,G__30416,G__30417));
})()});
return obj30407;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30402,G__30403) : helix.core.jsx.call(null,G__30402,G__30403));
})(),(function (){var G__30500 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30501 = (function (){var obj30506 = ({"x":(867),"y":(54),"children":(function (){var G__30514 = app.ui.shared.components.toolbar.btn_divider;
var G__30515 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30514,G__30515) : helix.core.jsx.call(null,G__30514,G__30515));
})()});
return obj30506;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30500,G__30501) : helix.core.jsx.call(null,G__30500,G__30501));
})(),(function (){var G__30524 = app.ui.shared.components.toolbar.switch_panel;
var G__30525 = (function (){var obj30546 = ({"x":(917),"y":(12),"children":[(function (){var G__30554 = app.ui.shared.components.toolbar.switch$;
var G__30555 = (function (){var obj30559 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__30565 = (function (p1__30141_SHARP_){
return cljs.core.not(p1__30141_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__30565) : set_val_1_BANG_.call(null,G__30565));
}),"legend":(1),"inactive":false});
return obj30559;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30554,G__30555) : helix.core.jsx.call(null,G__30554,G__30555));
})(),(function (){var G__30652 = app.ui.shared.components.toolbar.switch$;
var G__30653 = (function (){var obj30661 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__30690 = (function (p1__30142_SHARP_){
return cljs.core.not(p1__30142_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__30690) : set_val_2_BANG_.call(null,G__30690));
}),"legend":(2),"inactive":false});
return obj30661;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30652,G__30653) : helix.core.jsx.call(null,G__30652,G__30653));
})(),(function (){var G__30784 = app.ui.shared.components.toolbar.switch$;
var G__30785 = (function (){var obj30791 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__30801 = (function (p1__30143_SHARP_){
return cljs.core.not(p1__30143_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__30801) : set_val_3_BANG_.call(null,G__30801));
}),"legend":(3),"inactive":false});
return obj30791;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30784,G__30785) : helix.core.jsx.call(null,G__30784,G__30785));
})(),(function (){var G__30829 = app.ui.shared.components.toolbar.switch$;
var G__30831 = (function (){var obj30842 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__30846 = (function (p1__30144_SHARP_){
return cljs.core.not(p1__30144_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__30846) : set_val_4_BANG_.call(null,G__30846));
}),"legend":(4),"inactive":false});
return obj30842;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30829,G__30831) : helix.core.jsx.call(null,G__30829,G__30831));
})()]});
return obj30546;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30524,G__30525) : helix.core.jsxs.call(null,G__30524,G__30525));
})(),(function (){var G__30870 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30871 = (function (){var obj30875 = ({"x":(1064),"y":(54),"children":(function (){var G__30883 = app.ui.shared.components.toolbar.btn_divider;
var G__30884 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30883,G__30884) : helix.core.jsx.call(null,G__30883,G__30884));
})()});
return obj30875;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30870,G__30871) : helix.core.jsx.call(null,G__30870,G__30871));
})(),(function (){var G__30898 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30899 = (function (){var obj30905 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__30913 = app.ui.shared.components.toolbar.btn_full_screen;
var G__30915 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30913,G__30915) : helix.core.jsx.call(null,G__30913,G__30915));
})()});
return obj30905;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30898,G__30899) : helix.core.jsx.call(null,G__30898,G__30899));
})(),(function (){var G__30931 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30932 = (function (){var obj30934 = ({"x":(1174),"y":(54),"children":(function (){var G__30955 = app.ui.shared.components.toolbar.btn_divider;
var G__30956 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30955,G__30956) : helix.core.jsx.call(null,G__30955,G__30956));
})()});
return obj30934;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30931,G__30932) : helix.core.jsx.call(null,G__30931,G__30932));
})(),(function (){var G__30972 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30973 = (function (){var obj30981 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Universal Converter",new cljs.core.Keyword(null,"text","text",-1790561697),"The universal converter converts the analogue 4-20 mA signals from a connected level electrode into CAN bus telegrams. The data are transferred to an ISO 11898 CAN bus via the CAN open protocol. Function tests and failure diagnosis are performed using the URB 60 visual display and operating unit."], null)], null));
}),"children":(function (){var G__31002 = app.ui.shared.components.toolbar.btn_info;
var G__31003 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31002,G__31003) : helix.core.jsx.call(null,G__31002,G__31003));
})()});
return obj30981;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30972,G__30973) : helix.core.jsx.call(null,G__30972,G__30973));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30321,G__30322) : helix.core.jsxs.call(null,G__30321,G__30322));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31026 = G__30197;
(G__31026.displayName = "app.ui.kits.connect.URW-60.toolbar-panel/URW-60-toolbar-panel");

return G__31026;
} else {
return G__30197;
}
})();




//# sourceMappingURL=app.ui.kits.connect.URW_60.toolbar_panel.js.map
