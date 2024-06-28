goog.provide('app.connect.NRR_2_61_3C.toolbar_panel');

app.connect.NRR_2_61_3C.toolbar_panel.NRR_2_61_3C_toolbar_panel = (function (){var G__66788 = (function app$connect$NRR_2_61_3C$toolbar_panel$NRR_2_61_3C_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__66796 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-3C-show-toolbar","NRR-2-61-3C-show-toolbar",-171433172)], null));
var vec__66817 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66817,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66817,(1),null);
var vec__66820 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66820,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66820,(1),null);
var vec__66823 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66823,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66823,(1),null);
var vec__66826 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66826,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66826,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__66876 = helix.core.Fragment;
var G__66877 = ({"children": [(function (){var G__66896 = app.shared.components.toolbar.title;
var G__66897 = (function (){var obj66927 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj66927;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66896,G__66897) : helix.core.jsx.call(null,G__66896,G__66897));
})(),(function (){var G__66956 = app.shared.components.toolbar.title;
var G__66957 = (function (){var obj66961 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61 3C"});
return obj66961;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66956,G__66957) : helix.core.jsx.call(null,G__66956,G__66957));
})(),(function (){var G__66970 = app.shared.components.toolbar.btn_wrapper;
var G__66971 = (function (){var obj66979 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__66994 = app.shared.components.toolbar.btn_replace;
var G__66995 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66994,G__66995) : helix.core.jsx.call(null,G__66994,G__66995));
})()});
return obj66979;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66970,G__66971) : helix.core.jsx.call(null,G__66970,G__66971));
})(),(function (){var G__67018 = app.shared.components.toolbar.btn_wrapper;
var G__67019 = (function (){var obj67026 = ({"x":(757),"y":(54),"children":(function (){var G__67036 = app.shared.components.toolbar.btn_divider;
var G__67037 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67036,G__67037) : helix.core.jsx.call(null,G__67036,G__67037));
})()});
return obj67026;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67018,G__67019) : helix.core.jsx.call(null,G__67018,G__67019));
})(),(function (){var G__67052 = app.shared.components.toolbar.btn_wrapper;
var G__67053 = (function (){var obj67065 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67081 = app.shared.components.toolbar.btn_error;
var G__67082 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67081,G__67082) : helix.core.jsx.call(null,G__67081,G__67082));
})()});
return obj67065;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67052,G__67053) : helix.core.jsx.call(null,G__67052,G__67053));
})(),(function (){var G__67101 = app.shared.components.toolbar.btn_wrapper;
var G__67103 = (function (){var obj67111 = ({"x":(867),"y":(54),"children":(function (){var G__67121 = app.shared.components.toolbar.btn_divider;
var G__67122 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67121,G__67122) : helix.core.jsx.call(null,G__67121,G__67122));
})()});
return obj67111;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67101,G__67103) : helix.core.jsx.call(null,G__67101,G__67103));
})(),(function (){var G__67142 = app.shared.components.toolbar.switch_panel;
var G__67143 = (function (){var obj67147 = ({"x":(917),"y":(12),"children":[(function (){var G__67152 = app.shared.components.toolbar.switch$;
var G__67153 = (function (){var obj67161 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__67170 = (function (p1__66724_SHARP_){
return cljs.core.not(p1__66724_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__67170) : set_val_1_BANG_.call(null,G__67170));
}),"legend":(1),"inactive":false});
return obj67161;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67152,G__67153) : helix.core.jsx.call(null,G__67152,G__67153));
})(),(function (){var G__67225 = app.shared.components.toolbar.switch$;
var G__67226 = (function (){var obj67234 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__67241 = (function (p1__66726_SHARP_){
return cljs.core.not(p1__66726_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__67241) : set_val_2_BANG_.call(null,G__67241));
}),"legend":(2),"inactive":false});
return obj67234;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67225,G__67226) : helix.core.jsx.call(null,G__67225,G__67226));
})(),(function (){var G__67295 = app.shared.components.toolbar.switch$;
var G__67296 = (function (){var obj67306 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__67311 = (function (p1__66731_SHARP_){
return cljs.core.not(p1__66731_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__67311) : set_val_3_BANG_.call(null,G__67311));
}),"legend":(3),"inactive":false});
return obj67306;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67295,G__67296) : helix.core.jsx.call(null,G__67295,G__67296));
})(),(function (){var G__67333 = app.shared.components.toolbar.switch$;
var G__67334 = (function (){var obj67341 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__67346 = (function (p1__66736_SHARP_){
return cljs.core.not(p1__66736_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__67346) : set_val_4_BANG_.call(null,G__67346));
}),"legend":(4),"inactive":false});
return obj67341;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67333,G__67334) : helix.core.jsx.call(null,G__67333,G__67334));
})()]});
return obj67147;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67142,G__67143) : helix.core.jsxs.call(null,G__67142,G__67143));
})(),(function (){var G__67375 = app.shared.components.toolbar.btn_wrapper;
var G__67377 = (function (){var obj67387 = ({"x":(1064),"y":(54),"children":(function (){var G__67394 = app.shared.components.toolbar.btn_divider;
var G__67395 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67394,G__67395) : helix.core.jsx.call(null,G__67394,G__67395));
})()});
return obj67387;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67375,G__67377) : helix.core.jsx.call(null,G__67375,G__67377));
})(),(function (){var G__67418 = app.shared.components.toolbar.btn_wrapper;
var G__67419 = (function (){var obj67425 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67441 = app.shared.components.toolbar.btn_full_screen;
var G__67443 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67441,G__67443) : helix.core.jsx.call(null,G__67441,G__67443));
})()});
return obj67425;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67418,G__67419) : helix.core.jsx.call(null,G__67418,G__67419));
})(),(function (){var G__67465 = app.shared.components.toolbar.btn_wrapper;
var G__67466 = (function (){var obj67471 = ({"x":(1174),"y":(54),"children":(function (){var G__67476 = app.shared.components.toolbar.btn_divider;
var G__67477 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67476,G__67477) : helix.core.jsx.call(null,G__67476,G__67477));
})()});
return obj67471;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67465,G__67466) : helix.core.jsx.call(null,G__67465,G__67466));
})(),(function (){var G__67502 = app.shared.components.toolbar.btn_wrapper;
var G__67503 = (function (){var obj67515 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__67535 = app.shared.components.toolbar.btn_info;
var G__67536 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67535,G__67536) : helix.core.jsx.call(null,G__67535,G__67536));
})()});
return obj67515;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67502,G__67503) : helix.core.jsx.call(null,G__67502,G__67503));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__66876,G__66877) : helix.core.jsxs.call(null,G__66876,G__66877));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__67565 = G__66788;
(G__67565.displayName = "app.connect.NRR-2-61-3C.toolbar-panel/NRR-2-61-3C-toolbar-panel");

return G__67565;
} else {
return G__66788;
}
})();




//# sourceMappingURL=app.connect.NRR_2_61_3C.toolbar_panel.js.map
