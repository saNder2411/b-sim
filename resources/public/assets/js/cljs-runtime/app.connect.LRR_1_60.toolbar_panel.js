goog.provide('app.connect.LRR_1_60.toolbar_panel');

app.connect.LRR_1_60.toolbar_panel.LRR_1_60_toolbar_panel = (function (){var G__66851 = (function app$connect$LRR_1_60$toolbar_panel$LRR_1_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__66864 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRR-1-60-show-toolbar","LRR-1-60-show-toolbar",897532328)], null));
var vec__66898 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66898,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66898,(1),null);
var vec__66901 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66901,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66901,(1),null);
var vec__66904 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66904,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66904,(1),null);
var vec__66907 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66907,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66907,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__66996 = helix.core.Fragment;
var G__66997 = ({"children": [(function (){var G__67014 = app.shared.components.toolbar.title;
var G__67015 = (function (){var obj67029 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Controller"});
return obj67029;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67014,G__67015) : helix.core.jsx.call(null,G__67014,G__67015));
})(),(function (){var G__67054 = app.shared.components.toolbar.title;
var G__67055 = (function (){var obj67070 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRR 1-60"});
return obj67070;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67054,G__67055) : helix.core.jsx.call(null,G__67054,G__67055));
})(),(function (){var G__67092 = app.shared.components.toolbar.btn_wrapper;
var G__67093 = (function (){var obj67107 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67136 = app.shared.components.toolbar.btn_replace;
var G__67137 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67136,G__67137) : helix.core.jsx.call(null,G__67136,G__67137));
})()});
return obj67107;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67092,G__67093) : helix.core.jsx.call(null,G__67092,G__67093));
})(),(function (){var G__67165 = app.shared.components.toolbar.btn_wrapper;
var G__67166 = (function (){var obj67176 = ({"x":(757),"y":(54),"children":(function (){var G__67183 = app.shared.components.toolbar.btn_divider;
var G__67184 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67183,G__67184) : helix.core.jsx.call(null,G__67183,G__67184));
})()});
return obj67176;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67165,G__67166) : helix.core.jsx.call(null,G__67165,G__67166));
})(),(function (){var G__67223 = app.shared.components.toolbar.btn_wrapper;
var G__67224 = (function (){var obj67230 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67245 = app.shared.components.toolbar.btn_error;
var G__67246 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67245,G__67246) : helix.core.jsx.call(null,G__67245,G__67246));
})()});
return obj67230;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67223,G__67224) : helix.core.jsx.call(null,G__67223,G__67224));
})(),(function (){var G__67285 = app.shared.components.toolbar.btn_wrapper;
var G__67286 = (function (){var obj67294 = ({"x":(867),"y":(54),"children":(function (){var G__67297 = app.shared.components.toolbar.btn_divider;
var G__67298 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67297,G__67298) : helix.core.jsx.call(null,G__67297,G__67298));
})()});
return obj67294;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67285,G__67286) : helix.core.jsx.call(null,G__67285,G__67286));
})(),(function (){var G__67309 = app.shared.components.toolbar.switch_panel;
var G__67310 = (function (){var obj67318 = ({"x":(917),"y":(12),"children":[(function (){var G__67325 = app.shared.components.toolbar.switch$;
var G__67326 = (function (){var obj67332 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__67343 = (function (p1__66750_SHARP_){
return cljs.core.not(p1__66750_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__67343) : set_val_1_BANG_.call(null,G__67343));
}),"legend":(1),"inactive":false});
return obj67332;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67325,G__67326) : helix.core.jsx.call(null,G__67325,G__67326));
})(),(function (){var G__67359 = app.shared.components.toolbar.switch$;
var G__67360 = (function (){var obj67367 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__67372 = (function (p1__66753_SHARP_){
return cljs.core.not(p1__66753_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__67372) : set_val_2_BANG_.call(null,G__67372));
}),"legend":(2),"inactive":false});
return obj67367;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67359,G__67360) : helix.core.jsx.call(null,G__67359,G__67360));
})(),(function (){var G__67396 = app.shared.components.toolbar.switch$;
var G__67397 = (function (){var obj67407 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__67416 = (function (p1__66756_SHARP_){
return cljs.core.not(p1__66756_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__67416) : set_val_3_BANG_.call(null,G__67416));
}),"legend":(3),"inactive":false});
return obj67407;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67396,G__67397) : helix.core.jsx.call(null,G__67396,G__67397));
})(),(function (){var G__67432 = app.shared.components.toolbar.switch$;
var G__67433 = (function (){var obj67445 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__67458 = (function (p1__66761_SHARP_){
return cljs.core.not(p1__66761_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__67458) : set_val_4_BANG_.call(null,G__67458));
}),"legend":(4),"inactive":false});
return obj67445;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67432,G__67433) : helix.core.jsx.call(null,G__67432,G__67433));
})()]});
return obj67318;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67309,G__67310) : helix.core.jsxs.call(null,G__67309,G__67310));
})(),(function (){var G__67490 = app.shared.components.toolbar.btn_wrapper;
var G__67491 = (function (){var obj67499 = ({"x":(1064),"y":(54),"children":(function (){var G__67517 = app.shared.components.toolbar.btn_divider;
var G__67519 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67517,G__67519) : helix.core.jsx.call(null,G__67517,G__67519));
})()});
return obj67499;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67490,G__67491) : helix.core.jsx.call(null,G__67490,G__67491));
})(),(function (){var G__67531 = app.shared.components.toolbar.btn_wrapper;
var G__67532 = (function (){var obj67545 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67555 = app.shared.components.toolbar.btn_full_screen;
var G__67556 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67555,G__67556) : helix.core.jsx.call(null,G__67555,G__67556));
})()});
return obj67545;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67531,G__67532) : helix.core.jsx.call(null,G__67531,G__67532));
})(),(function (){var G__67568 = app.shared.components.toolbar.btn_wrapper;
var G__67569 = (function (){var obj67580 = ({"x":(1174),"y":(54),"children":(function (){var G__67586 = app.shared.components.toolbar.btn_divider;
var G__67587 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67586,G__67587) : helix.core.jsx.call(null,G__67586,G__67587));
})()});
return obj67580;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67568,G__67569) : helix.core.jsx.call(null,G__67568,G__67569));
})(),(function (){var G__67599 = app.shared.components.toolbar.btn_wrapper;
var G__67600 = (function (){var obj67605 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The conductivity controller can be used in conjunction with LRG 16-60, LRG 16-61 and LRG 17- 60 conductivity electrodes as a conductivity controller in pressurised steam and hot-water plants and in condensate and feedwater tanks. The conductivity controller indicates when MAX or MIN conductivity has been reached, opens or closes a continuous blowdown valve and can actuate an intermittent blowdown valve."], null)], null));
}),"children":(function (){var G__67614 = app.shared.components.toolbar.btn_info;
var G__67615 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67614,G__67615) : helix.core.jsx.call(null,G__67614,G__67615));
})()});
return obj67605;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67599,G__67600) : helix.core.jsx.call(null,G__67599,G__67600));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__66996,G__66997) : helix.core.jsxs.call(null,G__66996,G__66997));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__67628 = G__66851;
(G__67628.displayName = "app.connect.LRR-1-60.toolbar-panel/LRR-1-60-toolbar-panel");

return G__67628;
} else {
return G__66851;
}
})();




//# sourceMappingURL=app.connect.LRR_1_60.toolbar_panel.js.map
