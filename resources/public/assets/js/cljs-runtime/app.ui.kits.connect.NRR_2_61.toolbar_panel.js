goog.provide('app.ui.kits.connect.NRR_2_61.toolbar_panel');

app.ui.kits.connect.NRR_2_61.toolbar_panel.NRR_2_61_toolbar_panel = (function (){var G__30251 = (function app$ui$kits$connect$NRR_2_61$toolbar_panel$NRR_2_61_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30268 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-show-toolbar","NRR-2-61-show-toolbar",-1427340718)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__30290 = helix.core.Fragment;
var G__30291 = ({"children": [(function (){var G__30300 = app.ui.shared.components.toolbar.title;
var G__30301 = (function (){var obj30309 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj30309;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30300,G__30301) : helix.core.jsx.call(null,G__30300,G__30301));
})(),(function (){var G__30319 = app.ui.shared.components.toolbar.title;
var G__30320 = (function (){var obj30326 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61"});
return obj30326;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30319,G__30320) : helix.core.jsx.call(null,G__30319,G__30320));
})(),(function (){var G__30331 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30332 = (function (){var obj30341 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__30380 = app.ui.shared.components.toolbar.btn_replace;
var G__30381 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30380,G__30381) : helix.core.jsx.call(null,G__30380,G__30381));
})()});
return obj30341;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30331,G__30332) : helix.core.jsx.call(null,G__30331,G__30332));
})(),(function (){var G__30394 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30395 = (function (){var obj30401 = ({"x":(648),"y":(54),"children":(function (){var G__30404 = app.ui.shared.components.toolbar.btn_divider;
var G__30405 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30404,G__30405) : helix.core.jsx.call(null,G__30404,G__30405));
})()});
return obj30401;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30394,G__30395) : helix.core.jsx.call(null,G__30394,G__30395));
})(),(function (){var G__30412 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30413 = (function (){var obj30419 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__30428 = app.ui.shared.components.toolbar.btn_error;
var G__30429 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30428,G__30429) : helix.core.jsx.call(null,G__30428,G__30429));
})()});
return obj30419;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30412,G__30413) : helix.core.jsx.call(null,G__30412,G__30413));
})(),(function (){var G__30436 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30437 = (function (){var obj30441 = ({"x":(758),"y":(54),"children":(function (){var G__30456 = app.ui.shared.components.toolbar.btn_divider;
var G__30457 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30456,G__30457) : helix.core.jsx.call(null,G__30456,G__30457));
})()});
return obj30441;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30436,G__30437) : helix.core.jsx.call(null,G__30436,G__30437));
})(),(function (){var G__30472 = app.ui.shared.components.toolbar.switch_panel;
var G__30473 = (function (){var obj30479 = ({"x":(808),"y":(12),"children":[(function (){var G__30488 = app.ui.shared.components.toolbar.switch$;
var G__30489 = (function (){var obj30495 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj30495;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30488,G__30489) : helix.core.jsx.call(null,G__30488,G__30489));
})(),(function (){var G__30543 = app.ui.shared.components.toolbar.switch$;
var G__30544 = (function (){var obj30551 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj30551;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30543,G__30544) : helix.core.jsx.call(null,G__30543,G__30544));
})(),(function (){var G__30568 = app.ui.shared.components.toolbar.switch$;
var G__30569 = (function (){var obj30571 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj30571;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30568,G__30569) : helix.core.jsx.call(null,G__30568,G__30569));
})(),(function (){var G__30624 = app.ui.shared.components.toolbar.switch$;
var G__30625 = (function (){var obj30632 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj30632;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30624,G__30625) : helix.core.jsx.call(null,G__30624,G__30625));
})()]});
return obj30479;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30472,G__30473) : helix.core.jsxs.call(null,G__30472,G__30473));
})(),(function (){var G__30650 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30651 = (function (){var obj30657 = ({"x":(954),"y":(54),"children":(function (){var G__30666 = app.ui.shared.components.toolbar.btn_divider;
var G__30667 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30666,G__30667) : helix.core.jsx.call(null,G__30666,G__30667));
})()});
return obj30657;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30650,G__30651) : helix.core.jsx.call(null,G__30650,G__30651));
})(),(function (){var G__30677 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30678 = (function (){var obj30682 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__30712 = app.ui.shared.components.toolbar.btn_full_screen;
var G__30713 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30712,G__30713) : helix.core.jsx.call(null,G__30712,G__30713));
})()});
return obj30682;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30677,G__30678) : helix.core.jsx.call(null,G__30677,G__30678));
})(),(function (){var G__30718 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30719 = (function (){var obj30721 = ({"x":(1064),"y":(54),"children":(function (){var G__30724 = app.ui.shared.components.toolbar.btn_divider;
var G__30725 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30724,G__30725) : helix.core.jsx.call(null,G__30724,G__30725));
})()});
return obj30721;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30718,G__30719) : helix.core.jsx.call(null,G__30718,G__30719));
})(),(function (){var G__30780 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30781 = (function (){var obj30787 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__30806 = app.ui.shared.components.toolbar.btn_settings;
var G__30807 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30806,G__30807) : helix.core.jsx.call(null,G__30806,G__30807));
})()});
return obj30787;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30780,G__30781) : helix.core.jsx.call(null,G__30780,G__30781));
})(),(function (){var G__30824 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30825 = (function (){var obj30835 = ({"x":(1174),"y":(54),"children":(function (){var G__30844 = app.ui.shared.components.toolbar.btn_divider;
var G__30845 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30844,G__30845) : helix.core.jsx.call(null,G__30844,G__30845));
})()});
return obj30835;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30824,G__30825) : helix.core.jsx.call(null,G__30824,G__30825));
})(),(function (){var G__30852 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30853 = (function (){var obj30861 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__30867 = app.ui.shared.components.toolbar.btn_info;
var G__30868 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30867,G__30868) : helix.core.jsx.call(null,G__30867,G__30868));
})()});
return obj30861;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30852,G__30853) : helix.core.jsx.call(null,G__30852,G__30853));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30290,G__30291) : helix.core.jsxs.call(null,G__30290,G__30291));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__30887 = G__30251;
(G__30887.displayName = "app.ui.kits.connect.NRR-2-61.toolbar-panel/NRR-2-61-toolbar-panel");

return G__30887;
} else {
return G__30251;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_61.toolbar_panel.js.map
