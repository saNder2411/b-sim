goog.provide('app.connect.NRR_2_60_3C.toolbar_panel');

app.connect.NRR_2_60_3C.toolbar_panel.NRR_2_60_3C_toolbar_panel = (function (){var G__60683 = (function app$connect$NRR_2_60_3C$toolbar_panel$NRR_2_60_3C_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60684 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-3C-show-toolbar","NRR-2-60-3C-show-toolbar",-897814081)], null));
var vec__60693 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60693,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60693,(1),null);
var vec__60702 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60702,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60702,(1),null);
var vec__60708 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60708,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60708,(1),null);
var vec__60711 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60711,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60711,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__60714 = helix.core.Fragment;
var G__60716 = ({"children": [(function (){var G__60718 = app.shared.components.toolbar_title.toolbar_title;
var G__60720 = (function (){var obj60724 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj60724;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60718,G__60720) : helix.core.jsx.call(null,G__60718,G__60720));
})(),(function (){var G__60726 = app.shared.components.toolbar_title.toolbar_title;
var G__60727 = (function (){var obj60731 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60 3C"});
return obj60731;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60726,G__60727) : helix.core.jsx.call(null,G__60726,G__60727));
})(),(function (){var G__60734 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60735 = (function (){var obj60739 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60742 = app.shared.components.toolbar_btn_replace.toolbar_btn_replace;
var G__60743 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60742,G__60743) : helix.core.jsx.call(null,G__60742,G__60743));
})()});
return obj60739;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60734,G__60735) : helix.core.jsx.call(null,G__60734,G__60735));
})(),(function (){var G__60746 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60747 = (function (){var obj60751 = ({"x":(757),"y":(54),"children":(function (){var G__60754 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60755 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60754,G__60755) : helix.core.jsx.call(null,G__60754,G__60755));
})()});
return obj60751;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60746,G__60747) : helix.core.jsx.call(null,G__60746,G__60747));
})(),(function (){var G__60758 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60759 = (function (){var obj60763 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60766 = app.shared.components.toolbar_btn_error.toolbar_btn_error;
var G__60767 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60766,G__60767) : helix.core.jsx.call(null,G__60766,G__60767));
})()});
return obj60763;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60758,G__60759) : helix.core.jsx.call(null,G__60758,G__60759));
})(),(function (){var G__60770 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60771 = (function (){var obj60775 = ({"x":(867),"y":(54),"children":(function (){var G__60778 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60779 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60778,G__60779) : helix.core.jsx.call(null,G__60778,G__60779));
})()});
return obj60775;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60770,G__60771) : helix.core.jsx.call(null,G__60770,G__60771));
})(),(function (){var G__60782 = app.shared.components.toolbar_switch_panel.toolbar_switch_panel;
var G__60783 = (function (){var obj60787 = ({"x":(917),"y":(12),"children":[(function (){var G__60790 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60791 = (function (){var obj60795 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__60798 = (function (p1__60673_SHARP_){
return cljs.core.not(p1__60673_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__60798) : set_val_1_BANG_.call(null,G__60798));
}),"legend":(1),"inactive":false});
return obj60795;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60790,G__60791) : helix.core.jsx.call(null,G__60790,G__60791));
})(),(function (){var G__60800 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60801 = (function (){var obj60805 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__60808 = (function (p1__60674_SHARP_){
return cljs.core.not(p1__60674_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__60808) : set_val_2_BANG_.call(null,G__60808));
}),"legend":(2),"inactive":false});
return obj60805;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60800,G__60801) : helix.core.jsx.call(null,G__60800,G__60801));
})(),(function (){var G__60810 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60811 = (function (){var obj60815 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__60818 = (function (p1__60676_SHARP_){
return cljs.core.not(p1__60676_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__60818) : set_val_3_BANG_.call(null,G__60818));
}),"legend":(3),"inactive":false});
return obj60815;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60810,G__60811) : helix.core.jsx.call(null,G__60810,G__60811));
})(),(function (){var G__60820 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60821 = (function (){var obj60825 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__60828 = (function (p1__60678_SHARP_){
return cljs.core.not(p1__60678_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__60828) : set_val_4_BANG_.call(null,G__60828));
}),"legend":(4),"inactive":false});
return obj60825;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60820,G__60821) : helix.core.jsx.call(null,G__60820,G__60821));
})()]});
return obj60787;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60782,G__60783) : helix.core.jsxs.call(null,G__60782,G__60783));
})(),(function (){var G__60830 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60831 = (function (){var obj60835 = ({"x":(1064),"y":(54),"children":(function (){var G__60838 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60839 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60838,G__60839) : helix.core.jsx.call(null,G__60838,G__60839));
})()});
return obj60835;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60830,G__60831) : helix.core.jsx.call(null,G__60830,G__60831));
})(),(function (){var G__60842 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60843 = (function (){var obj60847 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60850 = app.shared.components.toolbar_btn_full_screen.toolbar_btn_full_screen;
var G__60851 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60850,G__60851) : helix.core.jsx.call(null,G__60850,G__60851));
})()});
return obj60847;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60842,G__60843) : helix.core.jsx.call(null,G__60842,G__60843));
})(),(function (){var G__60854 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60855 = (function (){var obj60859 = ({"x":(1174),"y":(54),"children":(function (){var G__60862 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60863 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60862,G__60863) : helix.core.jsx.call(null,G__60862,G__60863));
})()});
return obj60859;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60854,G__60855) : helix.core.jsx.call(null,G__60854,G__60855));
})(),(function (){var G__60866 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60867 = (function (){var obj60869 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__60874 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__60875 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60874,G__60875) : helix.core.jsx.call(null,G__60874,G__60875));
})()});
return obj60869;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60866,G__60867) : helix.core.jsx.call(null,G__60866,G__60867));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60714,G__60716) : helix.core.jsxs.call(null,G__60714,G__60716));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__60878 = G__60683;
(G__60878.displayName = "app.connect.NRR-2-60-3C.toolbar-panel/NRR-2-60-3C-toolbar-panel");

return G__60878;
} else {
return G__60683;
}
})();




//# sourceMappingURL=app.connect.NRR_2_60_3C.toolbar_panel.js.map
