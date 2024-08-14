goog.provide('app.connect.NRR_2_60_3C.toolbar_panel');

app.connect.NRR_2_60_3C.toolbar_panel.NRR_2_60_3C_toolbar_panel = (function (){var G__42214 = (function app$connect$NRR_2_60_3C$toolbar_panel$NRR_2_60_3C_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__42218 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-3C-show-toolbar","NRR-2-60-3C-show-toolbar",-897814081)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,":full-screen?",":full-screen?",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__42232 = helix.core.Fragment;
var G__42233 = ({"children": [(function (){var G__42236 = app.shared.components.toolbar.title;
var G__42237 = (function (){var obj42241 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj42241;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42236,G__42237) : helix.core.jsx.call(null,G__42236,G__42237));
})(),(function (){var G__42246 = app.shared.components.toolbar.title;
var G__42247 = (function (){var obj42253 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60 3C"});
return obj42253;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42246,G__42247) : helix.core.jsx.call(null,G__42246,G__42247));
})(),(function (){var G__42256 = app.shared.components.toolbar.btn_wrapper;
var G__42257 = (function (){var obj42261 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__42268 = app.shared.components.toolbar.btn_replace;
var G__42269 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42268,G__42269) : helix.core.jsx.call(null,G__42268,G__42269));
})()});
return obj42261;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42256,G__42257) : helix.core.jsx.call(null,G__42256,G__42257));
})(),(function (){var G__42278 = app.shared.components.toolbar.btn_wrapper;
var G__42279 = (function (){var obj42283 = ({"x":(648),"y":(54),"children":(function (){var G__42288 = app.shared.components.toolbar.btn_divider;
var G__42289 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42288,G__42289) : helix.core.jsx.call(null,G__42288,G__42289));
})()});
return obj42283;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42278,G__42279) : helix.core.jsx.call(null,G__42278,G__42279));
})(),(function (){var G__42319 = app.shared.components.toolbar.btn_wrapper;
var G__42320 = (function (){var obj42325 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__42330 = app.shared.components.toolbar.btn_error;
var G__42331 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42330,G__42331) : helix.core.jsx.call(null,G__42330,G__42331));
})()});
return obj42325;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42319,G__42320) : helix.core.jsx.call(null,G__42319,G__42320));
})(),(function (){var G__42338 = app.shared.components.toolbar.btn_wrapper;
var G__42339 = (function (){var obj42345 = ({"x":(758),"y":(54),"children":(function (){var G__42348 = app.shared.components.toolbar.btn_divider;
var G__42349 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42348,G__42349) : helix.core.jsx.call(null,G__42348,G__42349));
})()});
return obj42345;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42338,G__42339) : helix.core.jsx.call(null,G__42338,G__42339));
})(),(function (){var G__42357 = app.shared.components.toolbar.switch_panel;
var G__42358 = (function (){var obj42360 = ({"x":(808),"y":(12),"children":[(function (){var G__42365 = app.shared.components.toolbar.switch$;
var G__42366 = (function (){var obj42370 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj42370;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42365,G__42366) : helix.core.jsx.call(null,G__42365,G__42366));
})(),(function (){var G__42377 = app.shared.components.toolbar.switch$;
var G__42378 = (function (){var obj42384 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj42384;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42377,G__42378) : helix.core.jsx.call(null,G__42377,G__42378));
})(),(function (){var G__42389 = app.shared.components.toolbar.switch$;
var G__42390 = (function (){var obj42396 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj42396;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42389,G__42390) : helix.core.jsx.call(null,G__42389,G__42390));
})(),(function (){var G__42399 = app.shared.components.toolbar.switch$;
var G__42400 = (function (){var obj42404 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj42404;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42399,G__42400) : helix.core.jsx.call(null,G__42399,G__42400));
})()]});
return obj42360;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42357,G__42358) : helix.core.jsxs.call(null,G__42357,G__42358));
})(),(function (){var G__42406 = app.shared.components.toolbar.btn_wrapper;
var G__42407 = (function (){var obj42410 = ({"x":(954),"y":(54),"children":(function (){var G__42411 = app.shared.components.toolbar.btn_divider;
var G__42412 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42411,G__42412) : helix.core.jsx.call(null,G__42411,G__42412));
})()});
return obj42410;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42406,G__42407) : helix.core.jsx.call(null,G__42406,G__42407));
})(),(function (){var G__42416 = app.shared.components.toolbar.btn_wrapper;
var G__42417 = (function (){var obj42419 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,":full-screen?",":full-screen?",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__42420 = app.shared.components.toolbar.btn_full_screen;
var G__42421 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42420,G__42421) : helix.core.jsx.call(null,G__42420,G__42421));
})()});
return obj42419;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42416,G__42417) : helix.core.jsx.call(null,G__42416,G__42417));
})(),(function (){var G__42424 = app.shared.components.toolbar.btn_wrapper;
var G__42425 = (function (){var obj42431 = ({"x":(1064),"y":(54),"children":(function (){var G__42432 = app.shared.components.toolbar.btn_divider;
var G__42433 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42432,G__42433) : helix.core.jsx.call(null,G__42432,G__42433));
})()});
return obj42431;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42424,G__42425) : helix.core.jsx.call(null,G__42424,G__42425));
})(),(function (){var G__42438 = app.shared.components.toolbar.btn_wrapper;
var G__42439 = (function (){var obj42443 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__42448 = app.shared.components.toolbar.btn_settings;
var G__42449 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42448,G__42449) : helix.core.jsx.call(null,G__42448,G__42449));
})()});
return obj42443;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42438,G__42439) : helix.core.jsx.call(null,G__42438,G__42439));
})(),(function (){var G__42454 = app.shared.components.toolbar.btn_wrapper;
var G__42455 = (function (){var obj42461 = ({"x":(1174),"y":(54),"children":(function (){var G__42462 = app.shared.components.toolbar.btn_divider;
var G__42463 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42462,G__42463) : helix.core.jsx.call(null,G__42462,G__42463));
})()});
return obj42461;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42454,G__42455) : helix.core.jsx.call(null,G__42454,G__42455));
})(),(function (){var G__42466 = app.shared.components.toolbar.btn_wrapper;
var G__42467 = (function (){var obj42471 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__42474 = app.shared.components.toolbar.btn_info;
var G__42475 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42474,G__42475) : helix.core.jsx.call(null,G__42474,G__42475));
})()});
return obj42471;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42466,G__42467) : helix.core.jsx.call(null,G__42466,G__42467));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42232,G__42233) : helix.core.jsxs.call(null,G__42232,G__42233));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__42480 = G__42214;
(G__42480.displayName = "app.connect.NRR-2-60-3C.toolbar-panel/NRR-2-60-3C-toolbar-panel");

return G__42480;
} else {
return G__42214;
}
})();




//# sourceMappingURL=app.connect.NRR_2_60_3C.toolbar_panel.js.map
