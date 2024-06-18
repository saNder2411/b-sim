goog.provide('app.connect.LRR_1_60.toolbar_panel');

app.connect.LRR_1_60.toolbar_panel.LRR_1_60_toolbar_panel = (function (){var G__60257 = (function app$connect$LRR_1_60$toolbar_panel$LRR_1_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60258 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRR-1-60-show-toolbar","LRR-1-60-show-toolbar",897532328)], null));
var vec__60261 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60261,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60261,(1),null);
var vec__60264 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60264,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60264,(1),null);
var vec__60267 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60267,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60267,(1),null);
var vec__60270 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60270,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60270,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__60273 = helix.core.Fragment;
var G__60274 = ({"children": [(function (){var G__60275 = app.shared.components.toolbar_title.toolbar_title;
var G__60276 = (function (){var obj60278 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Controller"});
return obj60278;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60275,G__60276) : helix.core.jsx.call(null,G__60275,G__60276));
})(),(function (){var G__60279 = app.shared.components.toolbar_title.toolbar_title;
var G__60280 = (function (){var obj60282 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRR 1-60"});
return obj60282;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60279,G__60280) : helix.core.jsx.call(null,G__60279,G__60280));
})(),(function (){var G__60283 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60284 = (function (){var obj60286 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60287 = app.shared.components.toolbar_btn_replace.toolbar_btn_replace;
var G__60288 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60287,G__60288) : helix.core.jsx.call(null,G__60287,G__60288));
})()});
return obj60286;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60283,G__60284) : helix.core.jsx.call(null,G__60283,G__60284));
})(),(function (){var G__60289 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60290 = (function (){var obj60292 = ({"x":(757),"y":(54),"children":(function (){var G__60293 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60294 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60293,G__60294) : helix.core.jsx.call(null,G__60293,G__60294));
})()});
return obj60292;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60289,G__60290) : helix.core.jsx.call(null,G__60289,G__60290));
})(),(function (){var G__60295 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60296 = (function (){var obj60298 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60299 = app.shared.components.toolbar_btn_error.toolbar_btn_error;
var G__60300 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60299,G__60300) : helix.core.jsx.call(null,G__60299,G__60300));
})()});
return obj60298;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60295,G__60296) : helix.core.jsx.call(null,G__60295,G__60296));
})(),(function (){var G__60301 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60302 = (function (){var obj60304 = ({"x":(867),"y":(54),"children":(function (){var G__60305 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60306 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60305,G__60306) : helix.core.jsx.call(null,G__60305,G__60306));
})()});
return obj60304;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60301,G__60302) : helix.core.jsx.call(null,G__60301,G__60302));
})(),(function (){var G__60307 = app.shared.components.toolbar_switch_panel.toolbar_switch_panel;
var G__60308 = (function (){var obj60310 = ({"x":(917),"y":(12),"children":[(function (){var G__60311 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60312 = (function (){var obj60314 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__60315 = (function (p1__60252_SHARP_){
return cljs.core.not(p1__60252_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__60315) : set_val_1_BANG_.call(null,G__60315));
}),"legend":(1),"inactive":false});
return obj60314;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60311,G__60312) : helix.core.jsx.call(null,G__60311,G__60312));
})(),(function (){var G__60316 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60317 = (function (){var obj60319 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__60320 = (function (p1__60253_SHARP_){
return cljs.core.not(p1__60253_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__60320) : set_val_2_BANG_.call(null,G__60320));
}),"legend":(2),"inactive":false});
return obj60319;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60316,G__60317) : helix.core.jsx.call(null,G__60316,G__60317));
})(),(function (){var G__60321 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60322 = (function (){var obj60324 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__60325 = (function (p1__60254_SHARP_){
return cljs.core.not(p1__60254_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__60325) : set_val_3_BANG_.call(null,G__60325));
}),"legend":(3),"inactive":false});
return obj60324;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60321,G__60322) : helix.core.jsx.call(null,G__60321,G__60322));
})(),(function (){var G__60326 = app.shared.components.toolbar_switch.toolbar_switch;
var G__60327 = (function (){var obj60329 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__60330 = (function (p1__60255_SHARP_){
return cljs.core.not(p1__60255_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__60330) : set_val_4_BANG_.call(null,G__60330));
}),"legend":(4),"inactive":false});
return obj60329;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60326,G__60327) : helix.core.jsx.call(null,G__60326,G__60327));
})()]});
return obj60310;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60307,G__60308) : helix.core.jsxs.call(null,G__60307,G__60308));
})(),(function (){var G__60331 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60332 = (function (){var obj60334 = ({"x":(1064),"y":(54),"children":(function (){var G__60335 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60336 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60335,G__60336) : helix.core.jsx.call(null,G__60335,G__60336));
})()});
return obj60334;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60331,G__60332) : helix.core.jsx.call(null,G__60331,G__60332));
})(),(function (){var G__60337 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60338 = (function (){var obj60340 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__60341 = app.shared.components.toolbar_btn_full_screen.toolbar_btn_full_screen;
var G__60342 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60341,G__60342) : helix.core.jsx.call(null,G__60341,G__60342));
})()});
return obj60340;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60337,G__60338) : helix.core.jsx.call(null,G__60337,G__60338));
})(),(function (){var G__60343 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60344 = (function (){var obj60346 = ({"x":(1174),"y":(54),"children":(function (){var G__60347 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__60348 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60347,G__60348) : helix.core.jsx.call(null,G__60347,G__60348));
})()});
return obj60346;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60343,G__60344) : helix.core.jsx.call(null,G__60343,G__60344));
})(),(function (){var G__60349 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__60350 = (function (){var obj60352 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The conductivity controller can be used in conjunction with LRG 16-60, LRG 16-61 and LRG 17- 60 conductivity electrodes as a conductivity controller in pressurised steam and hot-water plants and in condensate and feedwater tanks. The conductivity controller indicates when MAX or MIN conductivity has been reached, opens or closes a continuous blowdown valve and can actuate an intermittent blowdown valve."], null)], null));
}),"children":(function (){var G__60353 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__60354 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60353,G__60354) : helix.core.jsx.call(null,G__60353,G__60354));
})()});
return obj60352;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60349,G__60350) : helix.core.jsx.call(null,G__60349,G__60350));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60273,G__60274) : helix.core.jsxs.call(null,G__60273,G__60274));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__60355 = G__60257;
(G__60355.displayName = "app.connect.LRR-1-60.toolbar-panel/LRR-1-60-toolbar-panel");

return G__60355;
} else {
return G__60257;
}
})();




//# sourceMappingURL=app.connect.LRR_1_60.toolbar_panel.js.map
