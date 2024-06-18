goog.provide('app.connect.NRR_2_61.toolbar_panel');

app.connect.NRR_2_61.toolbar_panel.NRR_2_61_toolbar_panel = (function (){var G__60420 = (function app$connect$NRR_2_61$toolbar_panel$NRR_2_61_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60423 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-show-toolbar","NRR-2-61-show-toolbar",-1427340718)], null));
var vec__60431 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60431,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60431,(1),null);
var vec__60437 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60437,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60437,(1),null);
var vec__60443 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60443,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60443,(1),null);
var vec__60449 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60449,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60449,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__60453 = helix.core.Fragment;
var G__60455 = ({"children": [(function (){var G__60457 = app.shared.components.toolbar_title.toolbar_title;
var G__60459 = (function (){var obj60463 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj60463;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60457,G__60459) : helix.core.jsx.call(null,G__60457,G__60459));
})(),(function (){var G__60465 = app.shared.components.toolbar_title.toolbar_title;
var G__60467 = (function (){var obj60471 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61"});
return obj60471;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60465,G__60467) : helix.core.jsx.call(null,G__60465,G__60467));
})(),(function (){var G__60473 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60474 = (function (){var obj60477 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60480 = app.shared.components.toolbar_btn_replace.toolbar_btn_replace;
var G__60481 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60480,G__60481) : helix.core.jsx.call(null,G__60480,G__60481));
})()});
return obj60477;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60473,G__60474) : helix.core.jsx.call(null,G__60473,G__60474));
})(),(function (){var G__60484 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60485 = (function (){var obj60487 = ({"x":(757),"y":(54),"children":(function (){var G__60490 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60491 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60490,G__60491) : helix.core.jsx.call(null,G__60490,G__60491));
})()});
return obj60487;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60484,G__60485) : helix.core.jsx.call(null,G__60484,G__60485));
})(),(function (){var G__60496 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60497 = (function (){var obj60499 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60502 = app.shared.components.toolbar_btn_error.toolbar_btn_error;
var G__60503 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60502,G__60503) : helix.core.jsx.call(null,G__60502,G__60503));
})()});
return obj60499;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60496,G__60497) : helix.core.jsx.call(null,G__60496,G__60497));
})(),(function (){var G__60506 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60507 = (function (){var obj60509 = ({"x":(867),"y":(54),"children":(function (){var G__60512 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60513 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60512,G__60513) : helix.core.jsx.call(null,G__60512,G__60513));
})()});
return obj60509;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60506,G__60507) : helix.core.jsx.call(null,G__60506,G__60507));
})(),(function (){var G__60516 = app.shared.components.toolbar_switch_panel.toolbar_switch_panel;
var G__60517 = (function (){var obj60521 = ({"x":(917),"y":(12),"children":[(function (){var G__60524 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60525 = (function (){var obj60527 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__60532 = (function (p1__60410_SHARP_){
return cljs.core.not(p1__60410_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__60532) : set_val_1_BANG_.call(null,G__60532));
}),"legend":(1),"inactive":false});
return obj60527;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60524,G__60525) : helix.core.jsx.call(null,G__60524,G__60525));
})(),(function (){var G__60537 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60538 = (function (){var obj60541 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__60542 = (function (p1__60412_SHARP_){
return cljs.core.not(p1__60412_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__60542) : set_val_2_BANG_.call(null,G__60542));
}),"legend":(2),"inactive":false});
return obj60541;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60537,G__60538) : helix.core.jsx.call(null,G__60537,G__60538));
})(),(function (){var G__60547 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60548 = (function (){var obj60551 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__60552 = (function (p1__60414_SHARP_){
return cljs.core.not(p1__60414_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__60552) : set_val_3_BANG_.call(null,G__60552));
}),"legend":(3),"inactive":false});
return obj60551;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60547,G__60548) : helix.core.jsx.call(null,G__60547,G__60548));
})(),(function (){var G__60557 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60558 = (function (){var obj60561 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__60562 = (function (p1__60416_SHARP_){
return cljs.core.not(p1__60416_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__60562) : set_val_4_BANG_.call(null,G__60562));
}),"legend":(4),"inactive":false});
return obj60561;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60557,G__60558) : helix.core.jsx.call(null,G__60557,G__60558));
})()]});
return obj60521;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60516,G__60517) : helix.core.jsxs.call(null,G__60516,G__60517));
})(),(function (){var G__60568 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60569 = (function (){var obj60571 = ({"x":(1064),"y":(54),"children":(function (){var G__60572 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60573 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60572,G__60573) : helix.core.jsx.call(null,G__60572,G__60573));
})()});
return obj60571;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60568,G__60569) : helix.core.jsx.call(null,G__60568,G__60569));
})(),(function (){var G__60576 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60577 = (function (){var obj60581 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60584 = app.shared.components.toolbar_btn_full_screen.toolbar_btn_full_screen;
var G__60585 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60584,G__60585) : helix.core.jsx.call(null,G__60584,G__60585));
})()});
return obj60581;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60576,G__60577) : helix.core.jsx.call(null,G__60576,G__60577));
})(),(function (){var G__60590 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60591 = (function (){var obj60595 = ({"x":(1174),"y":(54),"children":(function (){var G__60596 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60597 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60596,G__60597) : helix.core.jsx.call(null,G__60596,G__60597));
})()});
return obj60595;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60590,G__60591) : helix.core.jsx.call(null,G__60590,G__60591));
})(),(function (){var G__60600 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60601 = (function (){var obj60605 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__60610 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__60611 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60610,G__60611) : helix.core.jsx.call(null,G__60610,G__60611));
})()});
return obj60605;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60600,G__60601) : helix.core.jsx.call(null,G__60600,G__60601));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60453,G__60455) : helix.core.jsxs.call(null,G__60453,G__60455));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__60616 = G__60420;
(G__60616.displayName = "app.connect.NRR-2-61.toolbar-panel/NRR-2-61-toolbar-panel");

return G__60616;
} else {
return G__60420;
}
})();




//# sourceMappingURL=app.connect.NRR_2_61.toolbar_panel.js.map
