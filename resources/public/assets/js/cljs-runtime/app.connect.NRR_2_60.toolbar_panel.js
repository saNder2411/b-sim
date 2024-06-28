goog.provide('app.connect.NRR_2_60.toolbar_panel');

app.connect.NRR_2_60.toolbar_panel.NRR_2_60_toolbar_panel = (function (){var G__66829 = (function app$connect$NRR_2_60$toolbar_panel$NRR_2_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__66861 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-show-toolbar","NRR-2-60-show-toolbar",-1378612021)], null));
var vec__66912 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66912,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66912,(1),null);
var vec__66915 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66915,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66915,(1),null);
var vec__66918 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66918,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66918,(1),null);
var vec__66921 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66921,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66921,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__66972 = helix.core.Fragment;
var G__66973 = ({"children": [(function (){var G__66984 = app.shared.components.toolbar.title;
var G__66985 = (function (){var obj66989 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj66989;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66984,G__66985) : helix.core.jsx.call(null,G__66984,G__66985));
})(),(function (){var G__67008 = app.shared.components.toolbar.title;
var G__67009 = (function (){var obj67017 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60"});
return obj67017;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67008,G__67009) : helix.core.jsx.call(null,G__67008,G__67009));
})(),(function (){var G__67042 = app.shared.components.toolbar.btn_wrapper;
var G__67043 = (function (){var obj67051 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67068 = app.shared.components.toolbar.btn_replace;
var G__67071 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67068,G__67071) : helix.core.jsx.call(null,G__67068,G__67071));
})()});
return obj67051;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67042,G__67043) : helix.core.jsx.call(null,G__67042,G__67043));
})(),(function (){var G__67086 = app.shared.components.toolbar.btn_wrapper;
var G__67089 = (function (){var obj67097 = ({"x":(757),"y":(54),"children":(function (){var G__67104 = app.shared.components.toolbar.btn_divider;
var G__67105 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67104,G__67105) : helix.core.jsx.call(null,G__67104,G__67105));
})()});
return obj67097;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67086,G__67089) : helix.core.jsx.call(null,G__67086,G__67089));
})(),(function (){var G__67127 = app.shared.components.toolbar.btn_wrapper;
var G__67128 = (function (){var obj67135 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67154 = app.shared.components.toolbar.btn_error;
var G__67155 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67154,G__67155) : helix.core.jsx.call(null,G__67154,G__67155));
})()});
return obj67135;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67127,G__67128) : helix.core.jsx.call(null,G__67127,G__67128));
})(),(function (){var G__67178 = app.shared.components.toolbar.btn_wrapper;
var G__67179 = (function (){var obj67186 = ({"x":(867),"y":(54),"children":(function (){var G__67207 = app.shared.components.toolbar.btn_divider;
var G__67210 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67207,G__67210) : helix.core.jsx.call(null,G__67207,G__67210));
})()});
return obj67186;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67178,G__67179) : helix.core.jsx.call(null,G__67178,G__67179));
})(),(function (){var G__67239 = app.shared.components.toolbar.switch_panel;
var G__67240 = (function (){var obj67248 = ({"x":(917),"y":(12),"children":[(function (){var G__67283 = app.shared.components.toolbar.switch$;
var G__67284 = (function (){var obj67290 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__67300 = (function (p1__66722_SHARP_){
return cljs.core.not(p1__66722_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__67300) : set_val_1_BANG_.call(null,G__67300));
}),"legend":(1),"inactive":false});
return obj67290;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67283,G__67284) : helix.core.jsx.call(null,G__67283,G__67284));
})(),(function (){var G__67319 = app.shared.components.toolbar.switch$;
var G__67320 = (function (){var obj67328 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__67342 = (function (p1__66728_SHARP_){
return cljs.core.not(p1__66728_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__67342) : set_val_2_BANG_.call(null,G__67342));
}),"legend":(2),"inactive":false});
return obj67328;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67319,G__67320) : helix.core.jsx.call(null,G__67319,G__67320));
})(),(function (){var G__67357 = app.shared.components.toolbar.switch$;
var G__67358 = (function (){var obj67362 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__67370 = (function (p1__66733_SHARP_){
return cljs.core.not(p1__66733_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__67370) : set_val_3_BANG_.call(null,G__67370));
}),"legend":(3),"inactive":false});
return obj67362;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67357,G__67358) : helix.core.jsx.call(null,G__67357,G__67358));
})(),(function (){var G__67390 = app.shared.components.toolbar.switch$;
var G__67391 = (function (){var obj67403 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__67413 = (function (p1__66737_SHARP_){
return cljs.core.not(p1__66737_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__67413) : set_val_4_BANG_.call(null,G__67413));
}),"legend":(4),"inactive":false});
return obj67403;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67390,G__67391) : helix.core.jsx.call(null,G__67390,G__67391));
})()]});
return obj67248;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67239,G__67240) : helix.core.jsxs.call(null,G__67239,G__67240));
})(),(function (){var G__67430 = app.shared.components.toolbar.btn_wrapper;
var G__67431 = (function (){var obj67447 = ({"x":(1064),"y":(54),"children":(function (){var G__67454 = app.shared.components.toolbar.btn_divider;
var G__67455 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67454,G__67455) : helix.core.jsx.call(null,G__67454,G__67455));
})()});
return obj67447;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67430,G__67431) : helix.core.jsx.call(null,G__67430,G__67431));
})(),(function (){var G__67474 = app.shared.components.toolbar.btn_wrapper;
var G__67475 = (function (){var obj67489 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67512 = app.shared.components.toolbar.btn_full_screen;
var G__67513 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67512,G__67513) : helix.core.jsx.call(null,G__67512,G__67513));
})()});
return obj67489;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67474,G__67475) : helix.core.jsx.call(null,G__67474,G__67475));
})(),(function (){var G__67533 = app.shared.components.toolbar.btn_wrapper;
var G__67534 = (function (){var obj67547 = ({"x":(1174),"y":(54),"children":(function (){var G__67553 = app.shared.components.toolbar.btn_divider;
var G__67554 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67553,G__67554) : helix.core.jsx.call(null,G__67553,G__67554));
})()});
return obj67547;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67533,G__67534) : helix.core.jsx.call(null,G__67533,G__67534));
})(),(function (){var G__67570 = app.shared.components.toolbar.btn_wrapper;
var G__67573 = (function (){var obj67582 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__67589 = app.shared.components.toolbar.btn_info;
var G__67590 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67589,G__67590) : helix.core.jsx.call(null,G__67589,G__67590));
})()});
return obj67582;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67570,G__67573) : helix.core.jsx.call(null,G__67570,G__67573));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__66972,G__66973) : helix.core.jsxs.call(null,G__66972,G__66973));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__67603 = G__66829;
(G__67603.displayName = "app.connect.NRR-2-60.toolbar-panel/NRR-2-60-toolbar-panel");

return G__67603;
} else {
return G__66829;
}
})();




//# sourceMappingURL=app.connect.NRR_2_60.toolbar_panel.js.map
