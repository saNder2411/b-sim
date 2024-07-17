goog.provide('app.ui.kits.connect.NRR_2_61_3C.toolbar_panel');

app.ui.kits.connect.NRR_2_61_3C.toolbar_panel.NRR_2_61_3C_toolbar_panel = (function (){var G__30164 = (function app$ui$kits$connect$NRR_2_61_3C$toolbar_panel$NRR_2_61_3C_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30165 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-3C-show-toolbar","NRR-2-61-3C-show-toolbar",-171433172)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__30169 = helix.core.Fragment;
var G__30170 = ({"children": [(function (){var G__30173 = app.ui.shared.components.toolbar.title;
var G__30174 = (function (){var obj30178 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj30178;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30173,G__30174) : helix.core.jsx.call(null,G__30173,G__30174));
})(),(function (){var G__30183 = app.ui.shared.components.toolbar.title;
var G__30184 = (function (){var obj30188 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61 3C"});
return obj30188;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30183,G__30184) : helix.core.jsx.call(null,G__30183,G__30184));
})(),(function (){var G__30191 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30192 = (function (){var obj30196 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__30200 = app.ui.shared.components.toolbar.btn_replace;
var G__30201 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30200,G__30201) : helix.core.jsx.call(null,G__30200,G__30201));
})()});
return obj30196;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30191,G__30192) : helix.core.jsx.call(null,G__30191,G__30192));
})(),(function (){var G__30202 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30203 = (function (){var obj30207 = ({"x":(648),"y":(54),"children":(function (){var G__30210 = app.ui.shared.components.toolbar.btn_divider;
var G__30211 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30210,G__30211) : helix.core.jsx.call(null,G__30210,G__30211));
})()});
return obj30207;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30202,G__30203) : helix.core.jsx.call(null,G__30202,G__30203));
})(),(function (){var G__30214 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30215 = (function (){var obj30219 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__30249 = app.ui.shared.components.toolbar.btn_error;
var G__30250 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30249,G__30250) : helix.core.jsx.call(null,G__30249,G__30250));
})()});
return obj30219;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30214,G__30215) : helix.core.jsx.call(null,G__30214,G__30215));
})(),(function (){var G__30288 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30289 = (function (){var obj30296 = ({"x":(758),"y":(54),"children":(function (){var G__30306 = app.ui.shared.components.toolbar.btn_divider;
var G__30307 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30306,G__30307) : helix.core.jsx.call(null,G__30306,G__30307));
})()});
return obj30296;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30288,G__30289) : helix.core.jsx.call(null,G__30288,G__30289));
})(),(function (){var G__30323 = app.ui.shared.components.toolbar.switch_panel;
var G__30324 = (function (){var obj30330 = ({"x":(808),"y":(12),"children":[(function (){var G__30335 = app.ui.shared.components.toolbar.switch$;
var G__30336 = (function (){var obj30345 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj30345;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30335,G__30336) : helix.core.jsx.call(null,G__30335,G__30336));
})(),(function (){var G__30390 = app.ui.shared.components.toolbar.switch$;
var G__30392 = (function (){var obj30397 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj30397;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30390,G__30392) : helix.core.jsx.call(null,G__30390,G__30392));
})(),(function (){var G__30410 = app.ui.shared.components.toolbar.switch$;
var G__30411 = (function (){var obj30421 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj30421;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30410,G__30411) : helix.core.jsx.call(null,G__30410,G__30411));
})(),(function (){var G__30432 = app.ui.shared.components.toolbar.switch$;
var G__30433 = (function (){var obj30435 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj30435;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30432,G__30433) : helix.core.jsx.call(null,G__30432,G__30433));
})()]});
return obj30330;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30323,G__30324) : helix.core.jsxs.call(null,G__30323,G__30324));
})(),(function (){var G__30448 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30449 = (function (){var obj30455 = ({"x":(954),"y":(54),"children":(function (){var G__30462 = app.ui.shared.components.toolbar.btn_divider;
var G__30463 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30462,G__30463) : helix.core.jsx.call(null,G__30462,G__30463));
})()});
return obj30455;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30448,G__30449) : helix.core.jsx.call(null,G__30448,G__30449));
})(),(function (){var G__30484 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30485 = (function (){var obj30497 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__30504 = app.ui.shared.components.toolbar.btn_full_screen;
var G__30507 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30504,G__30507) : helix.core.jsx.call(null,G__30504,G__30507));
})()});
return obj30497;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30484,G__30485) : helix.core.jsx.call(null,G__30484,G__30485));
})(),(function (){var G__30520 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30521 = (function (){var obj30523 = ({"x":(1064),"y":(54),"children":(function (){var G__30526 = app.ui.shared.components.toolbar.btn_divider;
var G__30527 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30526,G__30527) : helix.core.jsx.call(null,G__30526,G__30527));
})()});
return obj30523;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30520,G__30521) : helix.core.jsx.call(null,G__30520,G__30521));
})(),(function (){var G__30535 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30536 = (function (){var obj30540 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__30581 = app.ui.shared.components.toolbar.btn_settings;
var G__30582 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30581,G__30582) : helix.core.jsx.call(null,G__30581,G__30582));
})()});
return obj30540;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30535,G__30536) : helix.core.jsx.call(null,G__30535,G__30536));
})(),(function (){var G__30615 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30616 = (function (){var obj30620 = ({"x":(1174),"y":(54),"children":(function (){var G__30626 = app.ui.shared.components.toolbar.btn_divider;
var G__30627 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30626,G__30627) : helix.core.jsx.call(null,G__30626,G__30627));
})()});
return obj30620;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30615,G__30616) : helix.core.jsx.call(null,G__30615,G__30616));
})(),(function (){var G__30637 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30638 = (function (){var obj30643 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__30648 = app.ui.shared.components.toolbar.btn_info;
var G__30649 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30648,G__30649) : helix.core.jsx.call(null,G__30648,G__30649));
})()});
return obj30643;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30637,G__30638) : helix.core.jsx.call(null,G__30637,G__30638));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30169,G__30170) : helix.core.jsxs.call(null,G__30169,G__30170));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__30680 = G__30164;
(G__30680.displayName = "app.ui.kits.connect.NRR-2-61-3C.toolbar-panel/NRR-2-61-3C-toolbar-panel");

return G__30680;
} else {
return G__30164;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_61_3C.toolbar_panel.js.map
