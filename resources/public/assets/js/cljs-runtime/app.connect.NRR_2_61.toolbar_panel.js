goog.provide('app.connect.NRR_2_61.toolbar_panel');

app.connect.NRR_2_61.toolbar_panel.NRR_2_61_toolbar_panel = (function (){var G__42408 = (function app$connect$NRR_2_61$toolbar_panel$NRR_2_61_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__42413 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-show-toolbar","NRR-2-61-show-toolbar",-1427340718)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,":full-screen?",":full-screen?",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__42422 = helix.core.Fragment;
var G__42423 = ({"children": [(function (){var G__42426 = app.shared.components.toolbar.title;
var G__42427 = (function (){var obj42429 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj42429;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42426,G__42427) : helix.core.jsx.call(null,G__42426,G__42427));
})(),(function (){var G__42434 = app.shared.components.toolbar.title;
var G__42435 = (function (){var obj42437 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61"});
return obj42437;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42434,G__42435) : helix.core.jsx.call(null,G__42434,G__42435));
})(),(function (){var G__42444 = app.shared.components.toolbar.btn_wrapper;
var G__42445 = (function (){var obj42451 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__42458 = app.shared.components.toolbar.btn_replace;
var G__42459 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42458,G__42459) : helix.core.jsx.call(null,G__42458,G__42459));
})()});
return obj42451;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42444,G__42445) : helix.core.jsx.call(null,G__42444,G__42445));
})(),(function (){var G__42464 = app.shared.components.toolbar.btn_wrapper;
var G__42465 = (function (){var obj42469 = ({"x":(648),"y":(54),"children":(function (){var G__42472 = app.shared.components.toolbar.btn_divider;
var G__42473 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42472,G__42473) : helix.core.jsx.call(null,G__42472,G__42473));
})()});
return obj42469;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42464,G__42465) : helix.core.jsx.call(null,G__42464,G__42465));
})(),(function (){var G__42476 = app.shared.components.toolbar.btn_wrapper;
var G__42477 = (function (){var obj42479 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__42481 = app.shared.components.toolbar.btn_error;
var G__42482 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42481,G__42482) : helix.core.jsx.call(null,G__42481,G__42482));
})()});
return obj42479;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42476,G__42477) : helix.core.jsx.call(null,G__42476,G__42477));
})(),(function (){var G__42483 = app.shared.components.toolbar.btn_wrapper;
var G__42484 = (function (){var obj42534 = ({"x":(758),"y":(54),"children":(function (){var G__42535 = app.shared.components.toolbar.btn_divider;
var G__42536 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42535,G__42536) : helix.core.jsx.call(null,G__42535,G__42536));
})()});
return obj42534;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42483,G__42484) : helix.core.jsx.call(null,G__42483,G__42484));
})(),(function (){var G__42540 = app.shared.components.toolbar.switch_panel;
var G__42541 = (function (){var obj42545 = ({"x":(808),"y":(12),"children":[(function (){var G__42548 = app.shared.components.toolbar.switch$;
var G__42549 = (function (){var obj42553 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj42553;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42548,G__42549) : helix.core.jsx.call(null,G__42548,G__42549));
})(),(function (){var G__42558 = app.shared.components.toolbar.switch$;
var G__42559 = (function (){var obj42563 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj42563;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42558,G__42559) : helix.core.jsx.call(null,G__42558,G__42559));
})(),(function (){var G__42566 = app.shared.components.toolbar.switch$;
var G__42567 = (function (){var obj42569 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj42569;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42566,G__42567) : helix.core.jsx.call(null,G__42566,G__42567));
})(),(function (){var G__42577 = app.shared.components.toolbar.switch$;
var G__42578 = (function (){var obj42580 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj42580;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42577,G__42578) : helix.core.jsx.call(null,G__42577,G__42578));
})()]});
return obj42545;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42540,G__42541) : helix.core.jsxs.call(null,G__42540,G__42541));
})(),(function (){var G__42584 = app.shared.components.toolbar.btn_wrapper;
var G__42585 = (function (){var obj42587 = ({"x":(954),"y":(54),"children":(function (){var G__42588 = app.shared.components.toolbar.btn_divider;
var G__42589 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42588,G__42589) : helix.core.jsx.call(null,G__42588,G__42589));
})()});
return obj42587;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42584,G__42585) : helix.core.jsx.call(null,G__42584,G__42585));
})(),(function (){var G__42592 = app.shared.components.toolbar.btn_wrapper;
var G__42593 = (function (){var obj42597 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,":full-screen?",":full-screen?",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__42600 = app.shared.components.toolbar.btn_full_screen;
var G__42601 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42600,G__42601) : helix.core.jsx.call(null,G__42600,G__42601));
})()});
return obj42597;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42592,G__42593) : helix.core.jsx.call(null,G__42592,G__42593));
})(),(function (){var G__42606 = app.shared.components.toolbar.btn_wrapper;
var G__42607 = (function (){var obj42609 = ({"x":(1064),"y":(54),"children":(function (){var G__42612 = app.shared.components.toolbar.btn_divider;
var G__42614 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42612,G__42614) : helix.core.jsx.call(null,G__42612,G__42614));
})()});
return obj42609;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42606,G__42607) : helix.core.jsx.call(null,G__42606,G__42607));
})(),(function (){var G__42616 = app.shared.components.toolbar.btn_wrapper;
var G__42617 = (function (){var obj42663 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__42666 = app.shared.components.toolbar.btn_settings;
var G__42667 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42666,G__42667) : helix.core.jsx.call(null,G__42666,G__42667));
})()});
return obj42663;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42616,G__42617) : helix.core.jsx.call(null,G__42616,G__42617));
})(),(function (){var G__42670 = app.shared.components.toolbar.btn_wrapper;
var G__42671 = (function (){var obj42675 = ({"x":(1174),"y":(54),"children":(function (){var G__42678 = app.shared.components.toolbar.btn_divider;
var G__42679 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42678,G__42679) : helix.core.jsx.call(null,G__42678,G__42679));
})()});
return obj42675;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42670,G__42671) : helix.core.jsx.call(null,G__42670,G__42671));
})(),(function (){var G__42682 = app.shared.components.toolbar.btn_wrapper;
var G__42683 = (function (){var obj42691 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__42695 = app.shared.components.toolbar.btn_info;
var G__42696 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42695,G__42696) : helix.core.jsx.call(null,G__42695,G__42696));
})()});
return obj42691;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42682,G__42683) : helix.core.jsx.call(null,G__42682,G__42683));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42422,G__42423) : helix.core.jsxs.call(null,G__42422,G__42423));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__42700 = G__42408;
(G__42700.displayName = "app.connect.NRR-2-61.toolbar-panel/NRR-2-61-toolbar-panel");

return G__42700;
} else {
return G__42408;
}
})();




//# sourceMappingURL=app.connect.NRR_2_61.toolbar_panel.js.map
