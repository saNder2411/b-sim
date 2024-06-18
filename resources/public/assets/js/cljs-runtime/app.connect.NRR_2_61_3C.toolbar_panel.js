goog.provide('app.connect.NRR_2_61_3C.toolbar_panel');

app.connect.NRR_2_61_3C.toolbar_panel.NRR_2_61_3C_toolbar_panel = (function (){var G__60421 = (function app$connect$NRR_2_61_3C$toolbar_panel$NRR_2_61_3C_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60422 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-3C-show-toolbar","NRR-2-61-3C-show-toolbar",-171433172)], null));
var vec__60428 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60428,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60428,(1),null);
var vec__60434 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60434,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60434,(1),null);
var vec__60440 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60440,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60440,(1),null);
var vec__60446 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60446,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60446,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__60452 = helix.core.Fragment;
var G__60454 = ({"children": [(function (){var G__60456 = app.shared.components.toolbar_title.toolbar_title;
var G__60458 = (function (){var obj60462 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj60462;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60456,G__60458) : helix.core.jsx.call(null,G__60456,G__60458));
})(),(function (){var G__60464 = app.shared.components.toolbar_title.toolbar_title;
var G__60466 = (function (){var obj60470 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61 3C"});
return obj60470;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60464,G__60466) : helix.core.jsx.call(null,G__60464,G__60466));
})(),(function (){var G__60472 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60475 = (function (){var obj60479 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60482 = app.shared.components.toolbar_btn_replace.toolbar_btn_replace;
var G__60483 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60482,G__60483) : helix.core.jsx.call(null,G__60482,G__60483));
})()});
return obj60479;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60472,G__60475) : helix.core.jsx.call(null,G__60472,G__60475));
})(),(function (){var G__60488 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60489 = (function (){var obj60493 = ({"x":(757),"y":(54),"children":(function (){var G__60494 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60495 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60494,G__60495) : helix.core.jsx.call(null,G__60494,G__60495));
})()});
return obj60493;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60488,G__60489) : helix.core.jsx.call(null,G__60488,G__60489));
})(),(function (){var G__60500 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60501 = (function (){var obj60505 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60510 = app.shared.components.toolbar_btn_error.toolbar_btn_error;
var G__60511 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60510,G__60511) : helix.core.jsx.call(null,G__60510,G__60511));
})()});
return obj60505;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60500,G__60501) : helix.core.jsx.call(null,G__60500,G__60501));
})(),(function (){var G__60514 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60515 = (function (){var obj60519 = ({"x":(867),"y":(54),"children":(function (){var G__60522 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60523 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60522,G__60523) : helix.core.jsx.call(null,G__60522,G__60523));
})()});
return obj60519;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60514,G__60515) : helix.core.jsx.call(null,G__60514,G__60515));
})(),(function (){var G__60528 = app.shared.components.toolbar_switch_panel.toolbar_switch_panel;
var G__60529 = (function (){var obj60531 = ({"x":(917),"y":(12),"children":[(function (){var G__60533 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60534 = (function (){var obj60536 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__60539 = (function (p1__60411_SHARP_){
return cljs.core.not(p1__60411_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__60539) : set_val_1_BANG_.call(null,G__60539));
}),"legend":(1),"inactive":false});
return obj60536;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60533,G__60534) : helix.core.jsx.call(null,G__60533,G__60534));
})(),(function (){var G__60543 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60544 = (function (){var obj60546 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__60549 = (function (p1__60413_SHARP_){
return cljs.core.not(p1__60413_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__60549) : set_val_2_BANG_.call(null,G__60549));
}),"legend":(2),"inactive":false});
return obj60546;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60543,G__60544) : helix.core.jsx.call(null,G__60543,G__60544));
})(),(function (){var G__60553 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60554 = (function (){var obj60556 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__60559 = (function (p1__60415_SHARP_){
return cljs.core.not(p1__60415_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__60559) : set_val_3_BANG_.call(null,G__60559));
}),"legend":(3),"inactive":false});
return obj60556;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60553,G__60554) : helix.core.jsx.call(null,G__60553,G__60554));
})(),(function (){var G__60563 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60564 = (function (){var obj60566 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__60567 = (function (p1__60417_SHARP_){
return cljs.core.not(p1__60417_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__60567) : set_val_4_BANG_.call(null,G__60567));
}),"legend":(4),"inactive":false});
return obj60566;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60563,G__60564) : helix.core.jsx.call(null,G__60563,G__60564));
})()]});
return obj60531;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60528,G__60529) : helix.core.jsxs.call(null,G__60528,G__60529));
})(),(function (){var G__60574 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60575 = (function (){var obj60579 = ({"x":(1064),"y":(54),"children":(function (){var G__60582 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60583 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60582,G__60583) : helix.core.jsx.call(null,G__60582,G__60583));
})()});
return obj60579;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60574,G__60575) : helix.core.jsx.call(null,G__60574,G__60575));
})(),(function (){var G__60586 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60587 = (function (){var obj60589 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60592 = app.shared.components.toolbar_btn_full_screen.toolbar_btn_full_screen;
var G__60593 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60592,G__60593) : helix.core.jsx.call(null,G__60592,G__60593));
})()});
return obj60589;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60586,G__60587) : helix.core.jsx.call(null,G__60586,G__60587));
})(),(function (){var G__60598 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60599 = (function (){var obj60603 = ({"x":(1174),"y":(54),"children":(function (){var G__60606 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60607 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60606,G__60607) : helix.core.jsx.call(null,G__60606,G__60607));
})()});
return obj60603;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60598,G__60599) : helix.core.jsx.call(null,G__60598,G__60599));
})(),(function (){var G__60608 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60609 = (function (){var obj60613 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__60614 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__60615 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60614,G__60615) : helix.core.jsx.call(null,G__60614,G__60615));
})()});
return obj60613;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60608,G__60609) : helix.core.jsx.call(null,G__60608,G__60609));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60452,G__60454) : helix.core.jsxs.call(null,G__60452,G__60454));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__60617 = G__60421;
(G__60617.displayName = "app.connect.NRR-2-61-3C.toolbar-panel/NRR-2-61-3C-toolbar-panel");

return G__60617;
} else {
return G__60421;
}
})();




//# sourceMappingURL=app.connect.NRR_2_61_3C.toolbar_panel.js.map
