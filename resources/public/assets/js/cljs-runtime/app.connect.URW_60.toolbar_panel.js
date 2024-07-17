goog.provide('app.connect.URW_60.toolbar_panel');

app.connect.URW_60.toolbar_panel.URW_60_toolbar_panel = (function (){var G__42127 = (function app$connect$URW_60$toolbar_panel$URW_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__42133 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URW-60-show-toolbar","URW-60-show-toolbar",-935397957)], null));
var vec__42142 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42142,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42142,(1),null);
var vec__42145 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42145,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42145,(1),null);
var vec__42148 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42148,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42148,(1),null);
var vec__42151 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42151,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42151,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__42172 = helix.core.Fragment;
var G__42173 = ({"children": [(function (){var G__42176 = app.shared.components.toolbar.title;
var G__42177 = (function (){var obj42183 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Universal Converter"});
return obj42183;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42176,G__42177) : helix.core.jsx.call(null,G__42176,G__42177));
})(),(function (){var G__42184 = app.shared.components.toolbar.title;
var G__42185 = (function (){var obj42191 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URW 60"});
return obj42191;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42184,G__42185) : helix.core.jsx.call(null,G__42184,G__42185));
})(),(function (){var G__42196 = app.shared.components.toolbar.btn_wrapper;
var G__42197 = (function (){var obj42199 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__42202 = app.shared.components.toolbar.btn_replace;
var G__42203 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42202,G__42203) : helix.core.jsx.call(null,G__42202,G__42203));
})()});
return obj42199;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42196,G__42197) : helix.core.jsx.call(null,G__42196,G__42197));
})(),(function (){var G__42206 = app.shared.components.toolbar.btn_wrapper;
var G__42207 = (function (){var obj42211 = ({"x":(867),"y":(54),"children":(function (){var G__42212 = app.shared.components.toolbar.btn_divider;
var G__42213 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42212,G__42213) : helix.core.jsx.call(null,G__42212,G__42213));
})()});
return obj42211;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42206,G__42207) : helix.core.jsx.call(null,G__42206,G__42207));
})(),(function (){var G__42216 = app.shared.components.toolbar.switch_panel;
var G__42217 = (function (){var obj42222 = ({"x":(917),"y":(12),"children":[(function (){var G__42223 = app.shared.components.toolbar.switch$;
var G__42224 = (function (){var obj42227 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__42228 = (function (p1__42100_SHARP_){
return cljs.core.not(p1__42100_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__42228) : set_val_1_BANG_.call(null,G__42228));
}),"legend":(1),"inactive":false});
return obj42227;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42223,G__42224) : helix.core.jsx.call(null,G__42223,G__42224));
})(),(function (){var G__42280 = app.shared.components.toolbar.switch$;
var G__42281 = (function (){var obj42285 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__42292 = (function (p1__42101_SHARP_){
return cljs.core.not(p1__42101_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__42292) : set_val_2_BANG_.call(null,G__42292));
}),"legend":(2),"inactive":false});
return obj42285;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42280,G__42281) : helix.core.jsx.call(null,G__42280,G__42281));
})(),(function (){var G__42303 = app.shared.components.toolbar.switch$;
var G__42304 = (function (){var obj42306 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__42309 = (function (p1__42102_SHARP_){
return cljs.core.not(p1__42102_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__42309) : set_val_3_BANG_.call(null,G__42309));
}),"legend":(3),"inactive":false});
return obj42306;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42303,G__42304) : helix.core.jsx.call(null,G__42303,G__42304));
})(),(function (){var G__42315 = app.shared.components.toolbar.switch$;
var G__42316 = (function (){var obj42318 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__42323 = (function (p1__42103_SHARP_){
return cljs.core.not(p1__42103_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__42323) : set_val_4_BANG_.call(null,G__42323));
}),"legend":(4),"inactive":false});
return obj42318;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42315,G__42316) : helix.core.jsx.call(null,G__42315,G__42316));
})()]});
return obj42222;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42216,G__42217) : helix.core.jsxs.call(null,G__42216,G__42217));
})(),(function (){var G__42332 = app.shared.components.toolbar.btn_wrapper;
var G__42333 = (function (){var obj42337 = ({"x":(1064),"y":(54),"children":(function (){var G__42342 = app.shared.components.toolbar.btn_divider;
var G__42343 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42342,G__42343) : helix.core.jsx.call(null,G__42342,G__42343));
})()});
return obj42337;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42332,G__42333) : helix.core.jsx.call(null,G__42332,G__42333));
})(),(function (){var G__42353 = app.shared.components.toolbar.btn_wrapper;
var G__42354 = (function (){var obj42356 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__42363 = app.shared.components.toolbar.btn_full_screen;
var G__42364 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42363,G__42364) : helix.core.jsx.call(null,G__42363,G__42364));
})()});
return obj42356;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42353,G__42354) : helix.core.jsx.call(null,G__42353,G__42354));
})(),(function (){var G__42371 = app.shared.components.toolbar.btn_wrapper;
var G__42372 = (function (){var obj42374 = ({"x":(1174),"y":(54),"children":(function (){var G__42381 = app.shared.components.toolbar.btn_divider;
var G__42382 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42381,G__42382) : helix.core.jsx.call(null,G__42381,G__42382));
})()});
return obj42374;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42371,G__42372) : helix.core.jsx.call(null,G__42371,G__42372));
})(),(function (){var G__42385 = app.shared.components.toolbar.btn_wrapper;
var G__42386 = (function (){var obj42392 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Universal Converter",new cljs.core.Keyword(null,"text","text",-1790561697),"The universal converter converts the analogue 4-20 mA signals from a connected level electrode into CAN bus telegrams. The data are transferred to an ISO 11898 CAN bus via the CANopen protocol. Function tests and failure diagnosis are performed using the URB 60 visual display and operating unit."], null)], null));
}),"children":(function (){var G__42397 = app.shared.components.toolbar.btn_info;
var G__42398 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42397,G__42398) : helix.core.jsx.call(null,G__42397,G__42398));
})()});
return obj42392;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42385,G__42386) : helix.core.jsx.call(null,G__42385,G__42386));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42172,G__42173) : helix.core.jsxs.call(null,G__42172,G__42173));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__42405 = G__42127;
(G__42405.displayName = "app.connect.URW-60.toolbar-panel/URW-60-toolbar-panel");

return G__42405;
} else {
return G__42127;
}
})();




//# sourceMappingURL=app.connect.URW_60.toolbar_panel.js.map
