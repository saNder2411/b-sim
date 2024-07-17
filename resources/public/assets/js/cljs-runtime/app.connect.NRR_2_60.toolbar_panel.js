goog.provide('app.connect.NRR_2_60.toolbar_panel');

app.connect.NRR_2_60.toolbar_panel.NRR_2_60_toolbar_panel = (function (){var G__42225 = (function app$connect$NRR_2_60$toolbar_panel$NRR_2_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__42229 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-show-toolbar","NRR-2-60-show-toolbar",-1378612021)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__42242 = helix.core.Fragment;
var G__42243 = ({"children": [(function (){var G__42248 = app.shared.components.toolbar.title;
var G__42249 = (function (){var obj42255 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj42255;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42248,G__42249) : helix.core.jsx.call(null,G__42248,G__42249));
})(),(function (){var G__42262 = app.shared.components.toolbar.title;
var G__42263 = (function (){var obj42265 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60"});
return obj42265;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42262,G__42263) : helix.core.jsx.call(null,G__42262,G__42263));
})(),(function (){var G__42272 = app.shared.components.toolbar.btn_wrapper;
var G__42273 = (function (){var obj42277 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__42286 = app.shared.components.toolbar.btn_replace;
var G__42287 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42286,G__42287) : helix.core.jsx.call(null,G__42286,G__42287));
})()});
return obj42277;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42272,G__42273) : helix.core.jsx.call(null,G__42272,G__42273));
})(),(function (){var G__42295 = app.shared.components.toolbar.btn_wrapper;
var G__42296 = (function (){var obj42298 = ({"x":(648),"y":(54),"children":(function (){var G__42301 = app.shared.components.toolbar.btn_divider;
var G__42302 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42301,G__42302) : helix.core.jsx.call(null,G__42301,G__42302));
})()});
return obj42298;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42295,G__42296) : helix.core.jsx.call(null,G__42295,G__42296));
})(),(function (){var G__42307 = app.shared.components.toolbar.btn_wrapper;
var G__42308 = (function (){var obj42312 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__42313 = app.shared.components.toolbar.btn_error;
var G__42314 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42313,G__42314) : helix.core.jsx.call(null,G__42313,G__42314));
})()});
return obj42312;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42307,G__42308) : helix.core.jsx.call(null,G__42307,G__42308));
})(),(function (){var G__42321 = app.shared.components.toolbar.btn_wrapper;
var G__42322 = (function (){var obj42327 = ({"x":(758),"y":(54),"children":(function (){var G__42328 = app.shared.components.toolbar.btn_divider;
var G__42329 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42328,G__42329) : helix.core.jsx.call(null,G__42328,G__42329));
})()});
return obj42327;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42321,G__42322) : helix.core.jsx.call(null,G__42321,G__42322));
})(),(function (){var G__42334 = app.shared.components.toolbar.switch_panel;
var G__42335 = (function (){var obj42341 = ({"x":(808),"y":(12),"children":[(function (){var G__42346 = app.shared.components.toolbar.switch$;
var G__42347 = (function (){var obj42351 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj42351;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42346,G__42347) : helix.core.jsx.call(null,G__42346,G__42347));
})(),(function (){var G__42361 = app.shared.components.toolbar.switch$;
var G__42362 = (function (){var obj42368 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj42368;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42361,G__42362) : helix.core.jsx.call(null,G__42361,G__42362));
})(),(function (){var G__42375 = app.shared.components.toolbar.switch$;
var G__42376 = (function (){var obj42380 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj42380;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42375,G__42376) : helix.core.jsx.call(null,G__42375,G__42376));
})(),(function (){var G__42387 = app.shared.components.toolbar.switch$;
var G__42388 = (function (){var obj42394 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj42394;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42387,G__42388) : helix.core.jsx.call(null,G__42387,G__42388));
})()]});
return obj42341;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42334,G__42335) : helix.core.jsxs.call(null,G__42334,G__42335));
})(),(function (){var G__42401 = app.shared.components.toolbar.btn_wrapper;
var G__42402 = (function (){var obj42441 = ({"x":(954),"y":(54),"children":(function (){var G__42446 = app.shared.components.toolbar.btn_divider;
var G__42447 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42446,G__42447) : helix.core.jsx.call(null,G__42446,G__42447));
})()});
return obj42441;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42401,G__42402) : helix.core.jsx.call(null,G__42401,G__42402));
})(),(function (){var G__42452 = app.shared.components.toolbar.btn_wrapper;
var G__42453 = (function (){var obj42457 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__42490 = app.shared.components.toolbar.btn_full_screen;
var G__42491 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42490,G__42491) : helix.core.jsx.call(null,G__42490,G__42491));
})()});
return obj42457;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42452,G__42453) : helix.core.jsx.call(null,G__42452,G__42453));
})(),(function (){var G__42492 = app.shared.components.toolbar.btn_wrapper;
var G__42493 = (function (){var obj42495 = ({"x":(1064),"y":(54),"children":(function (){var G__42496 = app.shared.components.toolbar.btn_divider;
var G__42497 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42496,G__42497) : helix.core.jsx.call(null,G__42496,G__42497));
})()});
return obj42495;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42492,G__42493) : helix.core.jsx.call(null,G__42492,G__42493));
})(),(function (){var G__42498 = app.shared.components.toolbar.btn_wrapper;
var G__42499 = (function (){var obj42501 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__42502 = app.shared.components.toolbar.btn_settings;
var G__42503 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42502,G__42503) : helix.core.jsx.call(null,G__42502,G__42503));
})()});
return obj42501;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42498,G__42499) : helix.core.jsx.call(null,G__42498,G__42499));
})(),(function (){var G__42505 = app.shared.components.toolbar.btn_wrapper;
var G__42506 = (function (){var obj42508 = ({"x":(1174),"y":(54),"children":(function (){var G__42512 = app.shared.components.toolbar.btn_divider;
var G__42513 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42512,G__42513) : helix.core.jsx.call(null,G__42512,G__42513));
})()});
return obj42508;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42505,G__42506) : helix.core.jsx.call(null,G__42505,G__42506));
})(),(function (){var G__42514 = app.shared.components.toolbar.btn_wrapper;
var G__42515 = (function (){var obj42517 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__42531 = app.shared.components.toolbar.btn_info;
var G__42532 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42531,G__42532) : helix.core.jsx.call(null,G__42531,G__42532));
})()});
return obj42517;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42514,G__42515) : helix.core.jsx.call(null,G__42514,G__42515));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42242,G__42243) : helix.core.jsxs.call(null,G__42242,G__42243));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__42537 = G__42225;
(G__42537.displayName = "app.connect.NRR-2-60.toolbar-panel/NRR-2-60-toolbar-panel");

return G__42537;
} else {
return G__42225;
}
})();




//# sourceMappingURL=app.connect.NRR_2_60.toolbar_panel.js.map
