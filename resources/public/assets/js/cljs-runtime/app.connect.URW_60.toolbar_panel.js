goog.provide('app.connect.URW_60.toolbar_panel');

app.connect.URW_60.toolbar_panel.URW_60_toolbar_panel = (function (){var G__66848 = (function app$connect$URW_60$toolbar_panel$URW_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__66871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URW-60-show-toolbar","URW-60-show-toolbar",-935397957)], null));
var vec__66930 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66930,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66930,(1),null);
var vec__66933 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66933,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66933,(1),null);
var vec__66936 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66936,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66936,(1),null);
var vec__66939 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66939,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66939,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__66998 = helix.core.Fragment;
var G__66999 = ({"children": [(function (){var G__67012 = app.shared.components.toolbar.title;
var G__67013 = (function (){var obj67023 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Universal Converter"});
return obj67023;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67012,G__67013) : helix.core.jsx.call(null,G__67012,G__67013));
})(),(function (){var G__67040 = app.shared.components.toolbar.title;
var G__67041 = (function (){var obj67049 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URW 60"});
return obj67049;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67040,G__67041) : helix.core.jsx.call(null,G__67040,G__67041));
})(),(function (){var G__67066 = app.shared.components.toolbar.btn_wrapper;
var G__67067 = (function (){var obj67073 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67085 = app.shared.components.toolbar.btn_replace;
var G__67087 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67085,G__67087) : helix.core.jsx.call(null,G__67085,G__67087));
})()});
return obj67073;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67066,G__67067) : helix.core.jsx.call(null,G__67066,G__67067));
})(),(function (){var G__67108 = app.shared.components.toolbar.btn_wrapper;
var G__67109 = (function (){var obj67118 = ({"x":(867),"y":(54),"children":(function (){var G__67125 = app.shared.components.toolbar.btn_divider;
var G__67126 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67125,G__67126) : helix.core.jsx.call(null,G__67125,G__67126));
})()});
return obj67118;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67108,G__67109) : helix.core.jsx.call(null,G__67108,G__67109));
})(),(function (){var G__67144 = app.shared.components.toolbar.switch_panel;
var G__67145 = (function (){var obj67151 = ({"x":(917),"y":(12),"children":[(function (){var G__67158 = app.shared.components.toolbar.switch$;
var G__67159 = (function (){var obj67169 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__67180 = (function (p1__66730_SHARP_){
return cljs.core.not(p1__66730_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__67180) : set_val_1_BANG_.call(null,G__67180));
}),"legend":(1),"inactive":false});
return obj67169;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67158,G__67159) : helix.core.jsx.call(null,G__67158,G__67159));
})(),(function (){var G__67227 = app.shared.components.toolbar.switch$;
var G__67228 = (function (){var obj67236 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__67243 = (function (p1__66739_SHARP_){
return cljs.core.not(p1__66739_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__67243) : set_val_2_BANG_.call(null,G__67243));
}),"legend":(2),"inactive":false});
return obj67236;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67227,G__67228) : helix.core.jsx.call(null,G__67227,G__67228));
})(),(function (){var G__67301 = app.shared.components.toolbar.switch$;
var G__67302 = (function (){var obj67308 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__67312 = (function (p1__66741_SHARP_){
return cljs.core.not(p1__66741_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__67312) : set_val_3_BANG_.call(null,G__67312));
}),"legend":(3),"inactive":false});
return obj67308;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67301,G__67302) : helix.core.jsx.call(null,G__67301,G__67302));
})(),(function (){var G__67336 = app.shared.components.toolbar.switch$;
var G__67337 = (function (){var obj67345 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__67352 = (function (p1__66742_SHARP_){
return cljs.core.not(p1__66742_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__67352) : set_val_4_BANG_.call(null,G__67352));
}),"legend":(4),"inactive":false});
return obj67345;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67336,G__67337) : helix.core.jsx.call(null,G__67336,G__67337));
})()]});
return obj67151;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67144,G__67145) : helix.core.jsxs.call(null,G__67144,G__67145));
})(),(function (){var G__67380 = app.shared.components.toolbar.btn_wrapper;
var G__67381 = (function (){var obj67400 = ({"x":(1064),"y":(54),"children":(function (){var G__67411 = app.shared.components.toolbar.btn_divider;
var G__67412 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67411,G__67412) : helix.core.jsx.call(null,G__67411,G__67412));
})()});
return obj67400;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67380,G__67381) : helix.core.jsx.call(null,G__67380,G__67381));
})(),(function (){var G__67426 = app.shared.components.toolbar.btn_wrapper;
var G__67427 = (function (){var obj67442 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67463 = app.shared.components.toolbar.btn_full_screen;
var G__67464 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67463,G__67464) : helix.core.jsx.call(null,G__67463,G__67464));
})()});
return obj67442;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67426,G__67427) : helix.core.jsx.call(null,G__67426,G__67427));
})(),(function (){var G__67486 = app.shared.components.toolbar.btn_wrapper;
var G__67487 = (function (){var obj67501 = ({"x":(1174),"y":(54),"children":(function (){var G__67508 = app.shared.components.toolbar.btn_divider;
var G__67509 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67508,G__67509) : helix.core.jsx.call(null,G__67508,G__67509));
})()});
return obj67501;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67486,G__67487) : helix.core.jsx.call(null,G__67486,G__67487));
})(),(function (){var G__67525 = app.shared.components.toolbar.btn_wrapper;
var G__67526 = (function (){var obj67539 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Universal Converter",new cljs.core.Keyword(null,"text","text",-1790561697),"The universal converter converts the analogue 4-20 mA signals from a connected level electrode into CAN bus telegrams. The data are transferred to an ISO 11898 CAN bus via the CANopen protocol. Function tests and failure diagnosis are performed using the URB 60 visual display and operating unit."], null)], null));
}),"children":(function (){var G__67551 = app.shared.components.toolbar.btn_info;
var G__67552 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67551,G__67552) : helix.core.jsx.call(null,G__67551,G__67552));
})()});
return obj67539;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67525,G__67526) : helix.core.jsx.call(null,G__67525,G__67526));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__66998,G__66999) : helix.core.jsxs.call(null,G__66998,G__66999));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__67575 = G__66848;
(G__67575.displayName = "app.connect.URW-60.toolbar-panel/URW-60-toolbar-panel");

return G__67575;
} else {
return G__66848;
}
})();




//# sourceMappingURL=app.connect.URW_60.toolbar_panel.js.map
