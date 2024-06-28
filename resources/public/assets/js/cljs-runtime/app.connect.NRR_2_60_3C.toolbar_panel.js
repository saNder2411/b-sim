goog.provide('app.connect.NRR_2_60_3C.toolbar_panel');

app.connect.NRR_2_60_3C.toolbar_panel.NRR_2_60_3C_toolbar_panel = (function (){var G__66816 = (function app$connect$NRR_2_60_3C$toolbar_panel$NRR_2_60_3C_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__66854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-3C-show-toolbar","NRR-2-60-3C-show-toolbar",-897814081)], null));
var vec__66884 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66884,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66884,(1),null);
var vec__66887 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66887,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66887,(1),null);
var vec__66890 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66890,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66890,(1),null);
var vec__66893 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66893,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66893,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__66976 = helix.core.Fragment;
var G__66977 = ({"children": [(function (){var G__66986 = app.shared.components.toolbar.title;
var G__66987 = (function (){var obj67003 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj67003;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66986,G__66987) : helix.core.jsx.call(null,G__66986,G__66987));
})(),(function (){var G__67024 = app.shared.components.toolbar.title;
var G__67027 = (function (){var obj67039 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60 3C"});
return obj67039;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67024,G__67027) : helix.core.jsx.call(null,G__67024,G__67027));
})(),(function (){var G__67060 = app.shared.components.toolbar.btn_wrapper;
var G__67061 = (function (){var obj67077 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67094 = app.shared.components.toolbar.btn_replace;
var G__67095 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67094,G__67095) : helix.core.jsx.call(null,G__67094,G__67095));
})()});
return obj67077;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67060,G__67061) : helix.core.jsx.call(null,G__67060,G__67061));
})(),(function (){var G__67129 = app.shared.components.toolbar.btn_wrapper;
var G__67130 = (function (){var obj67140 = ({"x":(757),"y":(54),"children":(function (){var G__67148 = app.shared.components.toolbar.btn_divider;
var G__67149 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67148,G__67149) : helix.core.jsx.call(null,G__67148,G__67149));
})()});
return obj67140;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67129,G__67130) : helix.core.jsx.call(null,G__67129,G__67130));
})(),(function (){var G__67171 = app.shared.components.toolbar.btn_wrapper;
var G__67172 = (function (){var obj67188 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67231 = app.shared.components.toolbar.btn_error;
var G__67232 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67231,G__67232) : helix.core.jsx.call(null,G__67231,G__67232));
})()});
return obj67188;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67171,G__67172) : helix.core.jsx.call(null,G__67171,G__67172));
})(),(function (){var G__67281 = app.shared.components.toolbar.btn_wrapper;
var G__67282 = (function (){var obj67292 = ({"x":(867),"y":(54),"children":(function (){var G__67303 = app.shared.components.toolbar.btn_divider;
var G__67304 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67303,G__67304) : helix.core.jsx.call(null,G__67303,G__67304));
})()});
return obj67292;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67281,G__67282) : helix.core.jsx.call(null,G__67281,G__67282));
})(),(function (){var G__67313 = app.shared.components.toolbar.switch_panel;
var G__67314 = (function (){var obj67324 = ({"x":(917),"y":(12),"children":[(function (){var G__67329 = app.shared.components.toolbar.switch$;
var G__67330 = (function (){var obj67339 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__67347 = (function (p1__66729_SHARP_){
return cljs.core.not(p1__66729_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__67347) : set_val_1_BANG_.call(null,G__67347));
}),"legend":(1),"inactive":false});
return obj67339;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67329,G__67330) : helix.core.jsx.call(null,G__67329,G__67330));
})(),(function (){var G__67371 = app.shared.components.toolbar.switch$;
var G__67373 = (function (){var obj67385 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__67408 = (function (p1__66734_SHARP_){
return cljs.core.not(p1__66734_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__67408) : set_val_2_BANG_.call(null,G__67408));
}),"legend":(2),"inactive":false});
return obj67385;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67371,G__67373) : helix.core.jsx.call(null,G__67371,G__67373));
})(),(function (){var G__67436 = app.shared.components.toolbar.switch$;
var G__67437 = (function (){var obj67451 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__67467 = (function (p1__66738_SHARP_){
return cljs.core.not(p1__66738_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__67467) : set_val_3_BANG_.call(null,G__67467));
}),"legend":(3),"inactive":false});
return obj67451;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67436,G__67437) : helix.core.jsx.call(null,G__67436,G__67437));
})(),(function (){var G__67504 = app.shared.components.toolbar.switch$;
var G__67505 = (function (){var obj67521 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__67537 = (function (p1__66740_SHARP_){
return cljs.core.not(p1__66740_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__67537) : set_val_4_BANG_.call(null,G__67537));
}),"legend":(4),"inactive":false});
return obj67521;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67504,G__67505) : helix.core.jsx.call(null,G__67504,G__67505));
})()]});
return obj67324;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67313,G__67314) : helix.core.jsxs.call(null,G__67313,G__67314));
})(),(function (){var G__67559 = app.shared.components.toolbar.btn_wrapper;
var G__67560 = (function (){var obj67572 = ({"x":(1064),"y":(54),"children":(function (){var G__67584 = app.shared.components.toolbar.btn_divider;
var G__67585 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67584,G__67585) : helix.core.jsx.call(null,G__67584,G__67585));
})()});
return obj67572;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67559,G__67560) : helix.core.jsx.call(null,G__67559,G__67560));
})(),(function (){var G__67595 = app.shared.components.toolbar.btn_wrapper;
var G__67596 = (function (){var obj67602 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67612 = app.shared.components.toolbar.btn_full_screen;
var G__67613 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67612,G__67613) : helix.core.jsx.call(null,G__67612,G__67613));
})()});
return obj67602;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67595,G__67596) : helix.core.jsx.call(null,G__67595,G__67596));
})(),(function (){var G__67621 = app.shared.components.toolbar.btn_wrapper;
var G__67622 = (function (){var obj67624 = ({"x":(1174),"y":(54),"children":(function (){var G__67631 = app.shared.components.toolbar.btn_divider;
var G__67632 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67631,G__67632) : helix.core.jsx.call(null,G__67631,G__67632));
})()});
return obj67624;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67621,G__67622) : helix.core.jsx.call(null,G__67621,G__67622));
})(),(function (){var G__67635 = app.shared.components.toolbar.btn_wrapper;
var G__67636 = (function (){var obj67643 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__67648 = app.shared.components.toolbar.btn_info;
var G__67649 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67648,G__67649) : helix.core.jsx.call(null,G__67648,G__67649));
})()});
return obj67643;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67635,G__67636) : helix.core.jsx.call(null,G__67635,G__67636));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__66976,G__66977) : helix.core.jsxs.call(null,G__66976,G__66977));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__67656 = G__66816;
(G__67656.displayName = "app.connect.NRR-2-60-3C.toolbar-panel/NRR-2-60-3C-toolbar-panel");

return G__67656;
} else {
return G__66816;
}
})();




//# sourceMappingURL=app.connect.NRR_2_60_3C.toolbar_panel.js.map
