goog.provide('app.ui.kits.connect.NRR_2_61_3C.toolbar_panel');

app.ui.kits.connect.NRR_2_61_3C.toolbar_panel.NRR_2_61_3C_toolbar_panel = (function (){var G__39986 = (function app$ui$kits$connect$NRR_2_61_3C$toolbar_panel$NRR_2_61_3C_toolbar_panel_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__39997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-3C-show-toolbar","NRR-2-61-3C-show-toolbar",-171433172)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__40031 = helix.core.Fragment;
var G__40032 = ({"children": [(function (){var G__40041 = app.ui.shared.components.toolbar.title;
var G__40042 = (function (){var obj40047 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj40047;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40041,G__40042) : helix.core.jsx.call(null,G__40041,G__40042));
})(),(function (){var G__40060 = app.ui.shared.components.toolbar.title;
var G__40061 = (function (){var obj40069 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61 3C"});
return obj40069;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40060,G__40061) : helix.core.jsx.call(null,G__40060,G__40061));
})(),(function (){var G__40077 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40078 = (function (){var obj40084 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__40093 = app.ui.shared.components.toolbar.btn_replace;
var G__40094 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40093,G__40094) : helix.core.jsx.call(null,G__40093,G__40094));
})()});
return obj40084;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40077,G__40078) : helix.core.jsx.call(null,G__40077,G__40078));
})(),(function (){var G__40107 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40108 = (function (){var obj40115 = ({"x":(648),"y":(54),"children":(function (){var G__40121 = app.ui.shared.components.toolbar.btn_divider;
var G__40122 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40121,G__40122) : helix.core.jsx.call(null,G__40121,G__40122));
})()});
return obj40115;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40107,G__40108) : helix.core.jsx.call(null,G__40107,G__40108));
})(),(function (){var G__40137 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40138 = (function (){var obj40144 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__40157 = app.ui.shared.components.toolbar.btn_error;
var G__40158 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40157,G__40158) : helix.core.jsx.call(null,G__40157,G__40158));
})()});
return obj40144;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40137,G__40138) : helix.core.jsx.call(null,G__40137,G__40138));
})(),(function (){var G__40169 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40170 = (function (){var obj40178 = ({"x":(758),"y":(54),"children":(function (){var G__40184 = app.ui.shared.components.toolbar.btn_divider;
var G__40185 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40184,G__40185) : helix.core.jsx.call(null,G__40184,G__40185));
})()});
return obj40178;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40169,G__40170) : helix.core.jsx.call(null,G__40169,G__40170));
})(),(function (){var G__40204 = app.ui.shared.components.toolbar.switch_panel;
var G__40205 = (function (){var obj40213 = ({"x":(808),"y":(12),"children":[(function (){var G__40218 = app.ui.shared.components.toolbar.switch$;
var G__40219 = (function (){var obj40223 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj40223;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40218,G__40219) : helix.core.jsx.call(null,G__40218,G__40219));
})(),(function (){var G__40237 = app.ui.shared.components.toolbar.switch$;
var G__40238 = (function (){var obj40244 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj40244;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40237,G__40238) : helix.core.jsx.call(null,G__40237,G__40238));
})(),(function (){var G__40267 = app.ui.shared.components.toolbar.switch$;
var G__40268 = (function (){var obj40276 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj40276;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40267,G__40268) : helix.core.jsx.call(null,G__40267,G__40268));
})(),(function (){var G__40294 = app.ui.shared.components.toolbar.switch$;
var G__40295 = (function (){var obj40299 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj40299;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40294,G__40295) : helix.core.jsx.call(null,G__40294,G__40295));
})()]});
return obj40213;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40204,G__40205) : helix.core.jsxs.call(null,G__40204,G__40205));
})(),(function (){var G__40319 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40320 = (function (){var obj40322 = ({"x":(954),"y":(54),"children":(function (){var G__40328 = app.ui.shared.components.toolbar.btn_divider;
var G__40329 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40328,G__40329) : helix.core.jsx.call(null,G__40328,G__40329));
})()});
return obj40322;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40319,G__40320) : helix.core.jsx.call(null,G__40319,G__40320));
})(),(function (){var G__40342 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40343 = (function (){var obj40347 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__40361 = app.ui.shared.components.toolbar.btn_full_screen;
var G__40362 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40361,G__40362) : helix.core.jsx.call(null,G__40361,G__40362));
})()});
return obj40347;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40342,G__40343) : helix.core.jsx.call(null,G__40342,G__40343));
})(),(function (){var G__40369 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40370 = (function (){var obj40374 = ({"x":(1064),"y":(54),"children":(function (){var G__40384 = app.ui.shared.components.toolbar.btn_divider;
var G__40385 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40384,G__40385) : helix.core.jsx.call(null,G__40384,G__40385));
})()});
return obj40374;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40369,G__40370) : helix.core.jsx.call(null,G__40369,G__40370));
})(),(function (){var G__40394 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40395 = (function (){var obj40399 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__40408 = app.ui.shared.components.toolbar.btn_settings;
var G__40409 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40408,G__40409) : helix.core.jsx.call(null,G__40408,G__40409));
})()});
return obj40399;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40394,G__40395) : helix.core.jsx.call(null,G__40394,G__40395));
})(),(function (){var G__40414 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40415 = (function (){var obj40422 = ({"x":(1174),"y":(54),"children":(function (){var G__40424 = app.ui.shared.components.toolbar.btn_divider;
var G__40425 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40424,G__40425) : helix.core.jsx.call(null,G__40424,G__40425));
})()});
return obj40422;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40414,G__40415) : helix.core.jsx.call(null,G__40414,G__40415));
})(),(function (){var G__40426 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40427 = (function (){var obj40429 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__40430 = app.ui.shared.components.toolbar.btn_info;
var G__40431 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40430,G__40431) : helix.core.jsx.call(null,G__40430,G__40431));
})()});
return obj40429;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40426,G__40427) : helix.core.jsx.call(null,G__40426,G__40427));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40031,G__40032) : helix.core.jsxs.call(null,G__40031,G__40032));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__40437 = G__39986;
(G__40437.displayName = "app.ui.kits.connect.NRR-2-61-3C.toolbar-panel/NRR-2-61-3C-toolbar-panel");

return G__40437;
} else {
return G__39986;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_61_3C.toolbar_panel.js.map
