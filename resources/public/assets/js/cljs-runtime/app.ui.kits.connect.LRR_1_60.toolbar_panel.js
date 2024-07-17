goog.provide('app.ui.kits.connect.LRR_1_60.toolbar_panel');

app.ui.kits.connect.LRR_1_60.toolbar_panel.LRR_1_60_toolbar_panel = (function (){var G__31974 = (function app$ui$kits$connect$LRR_1_60$toolbar_panel$LRR_1_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31980 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRR-1-60-show-toolbar","LRR-1-60-show-toolbar",897532328)], null));
var vec__31990 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31990,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31990,(1),null);
var vec__31993 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31993,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31993,(1),null);
var vec__31996 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31996,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31996,(1),null);
var vec__31999 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31999,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31999,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__32094 = helix.core.Fragment;
var G__32095 = ({"children": [(function (){var G__32106 = app.ui.shared.components.toolbar.title;
var G__32109 = (function (){var obj32117 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Controller"});
return obj32117;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32106,G__32109) : helix.core.jsx.call(null,G__32106,G__32109));
})(),(function (){var G__32123 = app.ui.shared.components.toolbar.title;
var G__32124 = (function (){var obj32132 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRR 1-60"});
return obj32132;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32123,G__32124) : helix.core.jsx.call(null,G__32123,G__32124));
})(),(function (){var G__32143 = app.ui.shared.components.toolbar.btn_wrapper;
var G__32144 = (function (){var obj32150 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__32164 = app.ui.shared.components.toolbar.btn_replace;
var G__32165 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32164,G__32165) : helix.core.jsx.call(null,G__32164,G__32165));
})()});
return obj32150;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32143,G__32144) : helix.core.jsx.call(null,G__32143,G__32144));
})(),(function (){var G__32170 = app.ui.shared.components.toolbar.btn_wrapper;
var G__32171 = (function (){var obj32175 = ({"x":(757),"y":(54),"children":(function (){var G__32182 = app.ui.shared.components.toolbar.btn_divider;
var G__32183 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32182,G__32183) : helix.core.jsx.call(null,G__32182,G__32183));
})()});
return obj32175;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32170,G__32171) : helix.core.jsx.call(null,G__32170,G__32171));
})(),(function (){var G__32193 = app.ui.shared.components.toolbar.btn_wrapper;
var G__32194 = (function (){var obj32196 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__32205 = app.ui.shared.components.toolbar.btn_error;
var G__32206 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32205,G__32206) : helix.core.jsx.call(null,G__32205,G__32206));
})()});
return obj32196;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32193,G__32194) : helix.core.jsx.call(null,G__32193,G__32194));
})(),(function (){var G__32218 = app.ui.shared.components.toolbar.btn_wrapper;
var G__32219 = (function (){var obj32223 = ({"x":(867),"y":(54),"children":(function (){var G__32231 = app.ui.shared.components.toolbar.btn_divider;
var G__32232 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32231,G__32232) : helix.core.jsx.call(null,G__32231,G__32232));
})()});
return obj32223;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32218,G__32219) : helix.core.jsx.call(null,G__32218,G__32219));
})(),(function (){var G__32240 = app.ui.shared.components.toolbar.switch_panel;
var G__32241 = (function (){var obj32244 = ({"x":(917),"y":(12),"children":[(function (){var G__32248 = app.ui.shared.components.toolbar.switch$;
var G__32249 = (function (){var obj32256 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__32262 = (function (p1__31928_SHARP_){
return cljs.core.not(p1__31928_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__32262) : set_val_1_BANG_.call(null,G__32262));
}),"legend":(1),"inactive":false});
return obj32256;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32248,G__32249) : helix.core.jsx.call(null,G__32248,G__32249));
})(),(function (){var G__32288 = app.ui.shared.components.toolbar.switch$;
var G__32289 = (function (){var obj32299 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__32310 = (function (p1__31930_SHARP_){
return cljs.core.not(p1__31930_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__32310) : set_val_2_BANG_.call(null,G__32310));
}),"legend":(2),"inactive":false});
return obj32299;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32288,G__32289) : helix.core.jsx.call(null,G__32288,G__32289));
})(),(function (){var G__32363 = app.ui.shared.components.toolbar.switch$;
var G__32364 = (function (){var obj32374 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__32395 = (function (p1__31931_SHARP_){
return cljs.core.not(p1__31931_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__32395) : set_val_3_BANG_.call(null,G__32395));
}),"legend":(3),"inactive":false});
return obj32374;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32363,G__32364) : helix.core.jsx.call(null,G__32363,G__32364));
})(),(function (){var G__32494 = app.ui.shared.components.toolbar.switch$;
var G__32495 = (function (){var obj32501 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__32510 = (function (p1__31932_SHARP_){
return cljs.core.not(p1__31932_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__32510) : set_val_4_BANG_.call(null,G__32510));
}),"legend":(4),"inactive":false});
return obj32501;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32494,G__32495) : helix.core.jsx.call(null,G__32494,G__32495));
})()]});
return obj32244;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32240,G__32241) : helix.core.jsxs.call(null,G__32240,G__32241));
})(),(function (){var G__32559 = app.ui.shared.components.toolbar.btn_wrapper;
var G__32561 = (function (){var obj32566 = ({"x":(1064),"y":(54),"children":(function (){var G__32578 = app.ui.shared.components.toolbar.btn_divider;
var G__32579 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32578,G__32579) : helix.core.jsx.call(null,G__32578,G__32579));
})()});
return obj32566;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32559,G__32561) : helix.core.jsx.call(null,G__32559,G__32561));
})(),(function (){var G__32600 = app.ui.shared.components.toolbar.btn_wrapper;
var G__32601 = (function (){var obj32608 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__32624 = app.ui.shared.components.toolbar.btn_full_screen;
var G__32625 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32624,G__32625) : helix.core.jsx.call(null,G__32624,G__32625));
})()});
return obj32608;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32600,G__32601) : helix.core.jsx.call(null,G__32600,G__32601));
})(),(function (){var G__32636 = app.ui.shared.components.toolbar.btn_wrapper;
var G__32637 = (function (){var obj32641 = ({"x":(1174),"y":(54),"children":(function (){var G__32644 = app.ui.shared.components.toolbar.btn_divider;
var G__32645 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32644,G__32645) : helix.core.jsx.call(null,G__32644,G__32645));
})()});
return obj32641;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32636,G__32637) : helix.core.jsx.call(null,G__32636,G__32637));
})(),(function (){var G__32664 = app.ui.shared.components.toolbar.btn_wrapper;
var G__32665 = (function (){var obj32669 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The conductivity controller can be used in conjunction with LRG 16-60, LRG 16-61 and LRG 17- 60 conductivity electrodes as a conductivity controller in pressurised steam and hot-water plants and in condensate and feedwater tanks. The conductivity controller indicates when MAX or MIN conductivity has been reached, opens or closes a continuous blowdown valve and can actuate an intermittent blowdown valve."], null)], null));
}),"children":(function (){var G__32733 = app.ui.shared.components.toolbar.btn_info;
var G__32734 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32733,G__32734) : helix.core.jsx.call(null,G__32733,G__32734));
})()});
return obj32669;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32664,G__32665) : helix.core.jsx.call(null,G__32664,G__32665));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32094,G__32095) : helix.core.jsxs.call(null,G__32094,G__32095));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__32762 = G__31974;
(G__32762.displayName = "app.ui.kits.connect.LRR-1-60.toolbar-panel/LRR-1-60-toolbar-panel");

return G__32762;
} else {
return G__31974;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRR_1_60.toolbar_panel.js.map
