goog.provide('app.connect.NRR_2_61.toolbar_panel');

app.connect.NRR_2_61.toolbar_panel.NRR_2_61_toolbar_panel = (function (){var G__66789 = (function app$connect$NRR_2_61$toolbar_panel$NRR_2_61_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__66799 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-show-toolbar","NRR-2-61-show-toolbar",-1427340718)], null));
var vec__66830 = helix.hooks.use_state(false);
var val_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66830,(0),null);
var set_val_1_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66830,(1),null);
var vec__66835 = helix.hooks.use_state(false);
var val_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66835,(0),null);
var set_val_2_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66835,(1),null);
var vec__66838 = helix.hooks.use_state(false);
var val_3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66838,(0),null);
var set_val_3_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66838,(1),null);
var vec__66841 = helix.hooks.use_state(false);
var val_4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66841,(0),null);
var set_val_4_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66841,(1),null);
if(cljs.core.truth_(show_toolbar)){
var G__66924 = helix.core.Fragment;
var G__66925 = ({"children": [(function (){var G__66946 = app.shared.components.toolbar.title;
var G__66947 = (function (){var obj66955 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj66955;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66946,G__66947) : helix.core.jsx.call(null,G__66946,G__66947));
})(),(function (){var G__66964 = app.shared.components.toolbar.title;
var G__66965 = (function (){var obj66975 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61"});
return obj66975;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66964,G__66965) : helix.core.jsx.call(null,G__66964,G__66965));
})(),(function (){var G__67000 = app.shared.components.toolbar.btn_wrapper;
var G__67001 = (function (){var obj67011 = ({"x":(697),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67034 = app.shared.components.toolbar.btn_replace;
var G__67035 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67034,G__67035) : helix.core.jsx.call(null,G__67034,G__67035));
})()});
return obj67011;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67000,G__67001) : helix.core.jsx.call(null,G__67000,G__67001));
})(),(function (){var G__67062 = app.shared.components.toolbar.btn_wrapper;
var G__67064 = (function (){var obj67079 = ({"x":(757),"y":(54),"children":(function (){var G__67088 = app.shared.components.toolbar.btn_divider;
var G__67090 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67088,G__67090) : helix.core.jsx.call(null,G__67088,G__67090));
})()});
return obj67079;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67062,G__67064) : helix.core.jsx.call(null,G__67062,G__67064));
})(),(function (){var G__67119 = app.shared.components.toolbar.btn_wrapper;
var G__67120 = (function (){var obj67132 = ({"x":(807),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67156 = app.shared.components.toolbar.btn_error;
var G__67157 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67156,G__67157) : helix.core.jsx.call(null,G__67156,G__67157));
})()});
return obj67132;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67119,G__67120) : helix.core.jsx.call(null,G__67119,G__67120));
})(),(function (){var G__67173 = app.shared.components.toolbar.btn_wrapper;
var G__67174 = (function (){var obj67182 = ({"x":(867),"y":(54),"children":(function (){var G__67189 = app.shared.components.toolbar.btn_divider;
var G__67190 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67189,G__67190) : helix.core.jsx.call(null,G__67189,G__67190));
})()});
return obj67182;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67173,G__67174) : helix.core.jsx.call(null,G__67173,G__67174));
})(),(function (){var G__67237 = app.shared.components.toolbar.switch_panel;
var G__67238 = (function (){var obj67244 = ({"x":(917),"y":(12),"children":[(function (){var G__67279 = app.shared.components.toolbar.switch$;
var G__67280 = (function (){var obj67288 = ({"x":(0),"value":val_1,"on-change":(function (){
var G__67299 = (function (p1__66723_SHARP_){
return cljs.core.not(p1__66723_SHARP_);
});
return (set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_1_BANG_.cljs$core$IFn$_invoke$arity$1(G__67299) : set_val_1_BANG_.call(null,G__67299));
}),"legend":(1),"inactive":false});
return obj67288;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67279,G__67280) : helix.core.jsx.call(null,G__67279,G__67280));
})(),(function (){var G__67315 = app.shared.components.toolbar.switch$;
var G__67316 = (function (){var obj67322 = ({"x":(35),"value":val_2,"on-change":(function (){
var G__67335 = (function (p1__66727_SHARP_){
return cljs.core.not(p1__66727_SHARP_);
});
return (set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_2_BANG_.cljs$core$IFn$_invoke$arity$1(G__67335) : set_val_2_BANG_.call(null,G__67335));
}),"legend":(2),"inactive":false});
return obj67322;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67315,G__67316) : helix.core.jsx.call(null,G__67315,G__67316));
})(),(function (){var G__67350 = app.shared.components.toolbar.switch$;
var G__67351 = (function (){var obj67354 = ({"x":(70),"value":val_3,"on-change":(function (){
var G__67365 = (function (p1__66732_SHARP_){
return cljs.core.not(p1__66732_SHARP_);
});
return (set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_3_BANG_.cljs$core$IFn$_invoke$arity$1(G__67365) : set_val_3_BANG_.call(null,G__67365));
}),"legend":(3),"inactive":false});
return obj67354;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67350,G__67351) : helix.core.jsx.call(null,G__67350,G__67351));
})(),(function (){var G__67382 = app.shared.components.toolbar.switch$;
var G__67383 = (function (){var obj67401 = ({"x":(105),"value":val_4,"on-change":(function (){
var G__67417 = (function (p1__66735_SHARP_){
return cljs.core.not(p1__66735_SHARP_);
});
return (set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_val_4_BANG_.cljs$core$IFn$_invoke$arity$1(G__67417) : set_val_4_BANG_.call(null,G__67417));
}),"legend":(4),"inactive":false});
return obj67401;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67382,G__67383) : helix.core.jsx.call(null,G__67382,G__67383));
})()]});
return obj67244;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67237,G__67238) : helix.core.jsxs.call(null,G__67237,G__67238));
})(),(function (){var G__67456 = app.shared.components.toolbar.btn_wrapper;
var G__67457 = (function (){var obj67460 = ({"x":(1064),"y":(54),"children":(function (){var G__67468 = app.shared.components.toolbar.btn_divider;
var G__67469 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67468,G__67469) : helix.core.jsx.call(null,G__67468,G__67469));
})()});
return obj67460;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67456,G__67457) : helix.core.jsx.call(null,G__67456,G__67457));
})(),(function (){var G__67482 = app.shared.components.toolbar.btn_wrapper;
var G__67483 = (function (){var obj67493 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67510 = app.shared.components.toolbar.btn_full_screen;
var G__67511 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67510,G__67511) : helix.core.jsx.call(null,G__67510,G__67511));
})()});
return obj67493;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67482,G__67483) : helix.core.jsx.call(null,G__67482,G__67483));
})(),(function (){var G__67527 = app.shared.components.toolbar.btn_wrapper;
var G__67528 = (function (){var obj67541 = ({"x":(1174),"y":(54),"children":(function (){var G__67548 = app.shared.components.toolbar.btn_divider;
var G__67549 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67548,G__67549) : helix.core.jsx.call(null,G__67548,G__67549));
})()});
return obj67541;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67527,G__67528) : helix.core.jsx.call(null,G__67527,G__67528));
})(),(function (){var G__67563 = app.shared.components.toolbar.btn_wrapper;
var G__67564 = (function (){var obj67576 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__67591 = app.shared.components.toolbar.btn_info;
var G__67592 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67591,G__67592) : helix.core.jsx.call(null,G__67591,G__67592));
})()});
return obj67576;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67563,G__67564) : helix.core.jsx.call(null,G__67563,G__67564));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__66924,G__66925) : helix.core.jsxs.call(null,G__66924,G__66925));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__67609 = G__66789;
(G__67609.displayName = "app.connect.NRR-2-61.toolbar-panel/NRR-2-61-toolbar-panel");

return G__67609;
} else {
return G__66789;
}
})();




//# sourceMappingURL=app.connect.NRR_2_61.toolbar_panel.js.map
