goog.provide('app.kits.connect.URW_60.toolbar_panel');

app.kits.connect.URW_60.toolbar_panel.URW_60_toolbar_panel = (function (){var G__45517 = (function app$kits$connect$URW_60$toolbar_panel$URW_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__45518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URW-60-show-toolbar","URW-60-show-toolbar",-935397957)], null));
var vec__45523 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45523,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45523,(1),null);
var vec__45526 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45526,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45526,(1),null);
var vec__45529 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45529,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45529,(1),null);
var vec__45532 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45532,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45532,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__45538 = helix.core.Fragment;
var G__45539 = ({"children": [(function (){var G__45543 = app.shared.components.toolbar.title;
var G__45544 = (function (){var obj45548 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Universal Converter"});
return obj45548;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45543,G__45544) : helix.core.jsx.call(null,G__45543,G__45544));
})(),(function (){var G__45550 = app.shared.components.toolbar.title;
var G__45552 = (function (){var obj45557 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URW 60"});
return obj45557;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45550,G__45552) : helix.core.jsx.call(null,G__45550,G__45552));
})(),(function (){var G__45560 = app.shared.components.toolbar.btn_wrapper;
var G__45561 = (function (){var obj45566 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__45570 = app.shared.components.toolbar.btn_replace;
var G__45572 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45570,G__45572) : helix.core.jsx.call(null,G__45570,G__45572));
})()});
return obj45566;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45560,G__45561) : helix.core.jsx.call(null,G__45560,G__45561));
})(),(function (){var G__45574 = app.shared.components.toolbar.btn_wrapper;
var G__45576 = (function (){var obj45580 = ({"x":(867),"y":(54),"children":(function (){var G__45583 = app.shared.components.toolbar.btn_divider;
var G__45584 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45583,G__45584) : helix.core.jsx.call(null,G__45583,G__45584));
})()});
return obj45580;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45574,G__45576) : helix.core.jsx.call(null,G__45574,G__45576));
})(),(function (){var G__45591 = app.shared.components.toolbar.switch_panel;
var G__45592 = (function (){var obj45597 = ({"x":(917),"y":(12),"children":[(function (){var G__45600 = app.shared.components.toolbar.switch$;
var G__45601 = (function (){var obj45605 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__45610 = (function (p1__45496_SHARP_){
return cljs.core.not(p1__45496_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__45610) : set_val_1_BANG_.call(null,G__45610));
}),"legend":(1),"inactive":false});
return obj45605;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45600,G__45601) : helix.core.jsx.call(null,G__45600,G__45601));
})(),(function (){var G__45621 = app.shared.components.toolbar.switch$;
var G__45622 = (function (){var obj45624 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__45631 = (function (p1__45497_SHARP_){
return cljs.core.not(p1__45497_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__45631) : set_val_2_BANG_.call(null,G__45631));
}),"legend":(2),"inactive":false});
return obj45624;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45621,G__45622) : helix.core.jsx.call(null,G__45621,G__45622));
})(),(function (){var G__45640 = app.shared.components.toolbar.switch$;
var G__45641 = (function (){var obj45645 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__45650 = (function (p1__45498_SHARP_){
return cljs.core.not(p1__45498_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__45650) : set_val_3_BANG_.call(null,G__45650));
}),"legend":(3),"inactive":false});
return obj45645;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45640,G__45641) : helix.core.jsx.call(null,G__45640,G__45641));
})(),(function (){var G__45657 = app.shared.components.toolbar.switch$;
var G__45658 = (function (){var obj45662 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__45665 = (function (p1__45499_SHARP_){
return cljs.core.not(p1__45499_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__45665) : set_val_4_BANG_.call(null,G__45665));
}),"legend":(4),"inactive":false});
return obj45662;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45657,G__45658) : helix.core.jsx.call(null,G__45657,G__45658));
})()]});
return obj45597;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__45591,G__45592) : helix.core.jsxs.call(null,G__45591,G__45592));
})(),(function (){var G__45676 = app.shared.components.toolbar.btn_wrapper;
var G__45677 = (function (){var obj45679 = ({"x":(1064),"y":(54),"children":(function (){var G__45682 = app.shared.components.toolbar.btn_divider;
var G__45683 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45682,G__45683) : helix.core.jsx.call(null,G__45682,G__45683));
})()});
return obj45679;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45676,G__45677) : helix.core.jsx.call(null,G__45676,G__45677));
})(),(function (){var G__45692 = app.shared.components.toolbar.btn_wrapper;
var G__45693 = (function (){var obj45699 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__45700 = app.shared.components.toolbar.btn_full_screen;
var G__45702 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45700,G__45702) : helix.core.jsx.call(null,G__45700,G__45702));
})()});
return obj45699;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45692,G__45693) : helix.core.jsx.call(null,G__45692,G__45693));
})(),(function (){var G__45710 = app.shared.components.toolbar.btn_wrapper;
var G__45711 = (function (){var obj45713 = ({"x":(1174),"y":(54),"children":(function (){var G__45716 = app.shared.components.toolbar.btn_divider;
var G__45717 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45716,G__45717) : helix.core.jsx.call(null,G__45716,G__45717));
})()});
return obj45713;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45710,G__45711) : helix.core.jsx.call(null,G__45710,G__45711));
})(),(function (){var G__45724 = app.shared.components.toolbar.btn_wrapper;
var G__45725 = (function (){var obj45729 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Universal Converter",new cljs.core.Keyword(null,"text","text",-1790561697),"The universal converter converts the analogue 4-20 mA signals from a connected level electrode into CAN bus telegrams. The data are transferred to an ISO 11898 CAN bus via the CANopen protocol. Function tests and failure diagnosis are performed using the URB 60 visual display and operating unit."], null)], null));
}),"children":(function (){var G__45734 = app.shared.components.toolbar.btn_info;
var G__45735 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45734,G__45735) : helix.core.jsx.call(null,G__45734,G__45735));
})()});
return obj45729;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__45724,G__45725) : helix.core.jsx.call(null,G__45724,G__45725));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__45538,G__45539) : helix.core.jsxs.call(null,G__45538,G__45539));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__45742 = G__45517;
(G__45742.displayName = "app.kits.connect.URW-60.toolbar-panel/URW-60-toolbar-panel");

return G__45742;
} else {
return G__45517;
}
})();




//# sourceMappingURL=app.kits.connect.URW_60.toolbar_panel.js.map
