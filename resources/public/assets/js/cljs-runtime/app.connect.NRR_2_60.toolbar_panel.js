goog.provide('app.connect.NRR_2_60.toolbar_panel');

app.connect.NRR_2_60.toolbar_panel.NRR_2_60_toolbar_panel = (function (){var G__60682 = (function app$connect$NRR_2_60$toolbar_panel$NRR_2_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-show-toolbar","NRR-2-60-show-toolbar",-1378612021)], null));
var vec__60690 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60690,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60690,(1),null);
var vec__60694 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60694,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60694,(1),null);
var vec__60699 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60699,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60699,(1),null);
var vec__60705 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60705,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60705,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__60715 = helix.core.Fragment;
var G__60717 = ({"children": [(function (){var G__60719 = app.shared.components.toolbar_title.toolbar_title;
var G__60721 = (function (){var obj60725 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj60725;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60719,G__60721) : helix.core.jsx.call(null,G__60719,G__60721));
})(),(function (){var G__60728 = app.shared.components.toolbar_title.toolbar_title;
var G__60729 = (function (){var obj60733 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60"});
return obj60733;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60728,G__60729) : helix.core.jsx.call(null,G__60728,G__60729));
})(),(function (){var G__60736 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60737 = (function (){var obj60741 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60744 = app.shared.components.toolbar_btn_replace.toolbar_btn_replace;
var G__60745 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60744,G__60745) : helix.core.jsx.call(null,G__60744,G__60745));
})()});
return obj60741;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60736,G__60737) : helix.core.jsx.call(null,G__60736,G__60737));
})(),(function (){var G__60748 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60749 = (function (){var obj60753 = ({"x":(757),"y":(54),"children":(function (){var G__60756 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60757 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60756,G__60757) : helix.core.jsx.call(null,G__60756,G__60757));
})()});
return obj60753;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60748,G__60749) : helix.core.jsx.call(null,G__60748,G__60749));
})(),(function (){var G__60760 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60761 = (function (){var obj60765 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60768 = app.shared.components.toolbar_btn_error.toolbar_btn_error;
var G__60769 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60768,G__60769) : helix.core.jsx.call(null,G__60768,G__60769));
})()});
return obj60765;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60760,G__60761) : helix.core.jsx.call(null,G__60760,G__60761));
})(),(function (){var G__60772 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60773 = (function (){var obj60777 = ({"x":(867),"y":(54),"children":(function (){var G__60780 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60781 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60780,G__60781) : helix.core.jsx.call(null,G__60780,G__60781));
})()});
return obj60777;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60772,G__60773) : helix.core.jsx.call(null,G__60772,G__60773));
})(),(function (){var G__60784 = app.shared.components.toolbar_switch_panel.toolbar_switch_panel;
var G__60785 = (function (){var obj60789 = ({"x":(917),"y":(12),"children":[(function (){var G__60792 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60793 = (function (){var obj60797 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__60799 = (function (p1__60672_SHARP_){
return cljs.core.not(p1__60672_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__60799) : set_val_1_BANG_.call(null,G__60799));
}),"legend":(1),"inactive":false});
return obj60797;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60792,G__60793) : helix.core.jsx.call(null,G__60792,G__60793));
})(),(function (){var G__60802 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60803 = (function (){var obj60807 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__60809 = (function (p1__60675_SHARP_){
return cljs.core.not(p1__60675_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__60809) : set_val_2_BANG_.call(null,G__60809));
}),"legend":(2),"inactive":false});
return obj60807;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60802,G__60803) : helix.core.jsx.call(null,G__60802,G__60803));
})(),(function (){var G__60812 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60813 = (function (){var obj60817 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__60819 = (function (p1__60677_SHARP_){
return cljs.core.not(p1__60677_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__60819) : set_val_3_BANG_.call(null,G__60819));
}),"legend":(3),"inactive":false});
return obj60817;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60812,G__60813) : helix.core.jsx.call(null,G__60812,G__60813));
})(),(function (){var G__60822 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60823 = (function (){var obj60827 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__60829 = (function (p1__60679_SHARP_){
return cljs.core.not(p1__60679_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__60829) : set_val_4_BANG_.call(null,G__60829));
}),"legend":(4),"inactive":false});
return obj60827;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60822,G__60823) : helix.core.jsx.call(null,G__60822,G__60823));
})()]});
return obj60789;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60784,G__60785) : helix.core.jsxs.call(null,G__60784,G__60785));
})(),(function (){var G__60832 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60833 = (function (){var obj60837 = ({"x":(1064),"y":(54),"children":(function (){var G__60840 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60841 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60840,G__60841) : helix.core.jsx.call(null,G__60840,G__60841));
})()});
return obj60837;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60832,G__60833) : helix.core.jsx.call(null,G__60832,G__60833));
})(),(function (){var G__60844 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60845 = (function (){var obj60849 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60852 = app.shared.components.toolbar_btn_full_screen.toolbar_btn_full_screen;
var G__60853 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60852,G__60853) : helix.core.jsx.call(null,G__60852,G__60853));
})()});
return obj60849;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60844,G__60845) : helix.core.jsx.call(null,G__60844,G__60845));
})(),(function (){var G__60856 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60857 = (function (){var obj60861 = ({"x":(1174),"y":(54),"children":(function (){var G__60864 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60865 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60864,G__60865) : helix.core.jsx.call(null,G__60864,G__60865));
})()});
return obj60861;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60856,G__60857) : helix.core.jsx.call(null,G__60856,G__60857));
})(),(function (){var G__60870 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60871 = (function (){var obj60873 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__60876 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__60877 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60876,G__60877) : helix.core.jsx.call(null,G__60876,G__60877));
})()});
return obj60873;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60870,G__60871) : helix.core.jsx.call(null,G__60870,G__60871));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60715,G__60717) : helix.core.jsxs.call(null,G__60715,G__60717));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__60879 = G__60682;
(G__60879.displayName = "app.connect.NRR-2-60.toolbar-panel/NRR-2-60-toolbar-panel");

return G__60879;
} else {
return G__60682;
}
})();




//# sourceMappingURL=app.connect.NRR_2_60.toolbar_panel.js.map
