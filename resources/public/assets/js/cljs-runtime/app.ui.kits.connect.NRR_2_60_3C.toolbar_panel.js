goog.provide('app.ui.kits.connect.NRR_2_60_3C.toolbar_panel');

app.ui.kits.connect.NRR_2_60_3C.toolbar_panel.NRR_2_60_3C_toolbar_panel = (function (){var G__30239 = (function app$ui$kits$connect$NRR_2_60_3C$toolbar_panel$NRR_2_60_3C_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30243 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-3C-show-toolbar","NRR-2-60-3C-show-toolbar",-897814081)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__30274 = helix.core.Fragment;
var G__30275 = ({"children": [(function (){var G__30282 = app.ui.shared.components.toolbar.title;
var G__30283 = (function (){var obj30286 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj30286;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30282,G__30283) : helix.core.jsx.call(null,G__30282,G__30283));
})(),(function (){var G__30292 = app.ui.shared.components.toolbar.title;
var G__30293 = (function (){var obj30298 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60 3C"});
return obj30298;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30292,G__30293) : helix.core.jsx.call(null,G__30292,G__30293));
})(),(function (){var G__30312 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30313 = (function (){var obj30318 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__30327 = app.ui.shared.components.toolbar.btn_replace;
var G__30328 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30327,G__30328) : helix.core.jsx.call(null,G__30327,G__30328));
})()});
return obj30318;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30312,G__30313) : helix.core.jsx.call(null,G__30312,G__30313));
})(),(function (){var G__30342 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30343 = (function (){var obj30385 = ({"x":(648),"y":(54),"children":(function (){var G__30391 = app.ui.shared.components.toolbar.btn_divider;
var G__30393 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30391,G__30393) : helix.core.jsx.call(null,G__30391,G__30393));
})()});
return obj30385;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30342,G__30343) : helix.core.jsx.call(null,G__30342,G__30343));
})(),(function (){var G__30408 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30409 = (function (){var obj30415 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__30430 = app.ui.shared.components.toolbar.btn_error;
var G__30431 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30430,G__30431) : helix.core.jsx.call(null,G__30430,G__30431));
})()});
return obj30415;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30408,G__30409) : helix.core.jsx.call(null,G__30408,G__30409));
})(),(function (){var G__30444 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30445 = (function (){var obj30447 = ({"x":(758),"y":(54),"children":(function (){var G__30452 = app.ui.shared.components.toolbar.btn_divider;
var G__30453 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30452,G__30453) : helix.core.jsx.call(null,G__30452,G__30453));
})()});
return obj30447;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30444,G__30445) : helix.core.jsx.call(null,G__30444,G__30445));
})(),(function (){var G__30464 = app.ui.shared.components.toolbar.switch_panel;
var G__30465 = (function (){var obj30471 = ({"x":(808),"y":(12),"children":[(function (){var G__30480 = app.ui.shared.components.toolbar.switch$;
var G__30481 = (function (){var obj30483 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj30483;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30480,G__30481) : helix.core.jsx.call(null,G__30480,G__30481));
})(),(function (){var G__30512 = app.ui.shared.components.toolbar.switch$;
var G__30513 = (function (){var obj30517 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj30517;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30512,G__30513) : helix.core.jsx.call(null,G__30512,G__30513));
})(),(function (){var G__30529 = app.ui.shared.components.toolbar.switch$;
var G__30530 = (function (){var obj30534 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj30534;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30529,G__30530) : helix.core.jsx.call(null,G__30529,G__30530));
})(),(function (){var G__30547 = app.ui.shared.components.toolbar.switch$;
var G__30548 = (function (){var obj30553 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj30553;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30547,G__30548) : helix.core.jsx.call(null,G__30547,G__30548));
})()]});
return obj30471;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30464,G__30465) : helix.core.jsxs.call(null,G__30464,G__30465));
})(),(function (){var G__30572 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30573 = (function (){var obj30577 = ({"x":(954),"y":(54),"children":(function (){var G__30578 = app.ui.shared.components.toolbar.btn_divider;
var G__30579 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30578,G__30579) : helix.core.jsx.call(null,G__30578,G__30579));
})()});
return obj30577;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30572,G__30573) : helix.core.jsx.call(null,G__30572,G__30573));
})(),(function (){var G__30613 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30614 = (function (){var obj30618 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__30621 = app.ui.shared.components.toolbar.btn_full_screen;
var G__30622 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30621,G__30622) : helix.core.jsx.call(null,G__30621,G__30622));
})()});
return obj30618;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30613,G__30614) : helix.core.jsx.call(null,G__30613,G__30614));
})(),(function (){var G__30633 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30634 = (function (){var obj30640 = ({"x":(1064),"y":(54),"children":(function (){var G__30645 = app.ui.shared.components.toolbar.btn_divider;
var G__30646 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30645,G__30646) : helix.core.jsx.call(null,G__30645,G__30646));
})()});
return obj30640;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30633,G__30634) : helix.core.jsx.call(null,G__30633,G__30634));
})(),(function (){var G__30654 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30655 = (function (){var obj30663 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__30673 = app.ui.shared.components.toolbar.btn_settings;
var G__30674 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30673,G__30674) : helix.core.jsx.call(null,G__30673,G__30674));
})()});
return obj30663;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30654,G__30655) : helix.core.jsx.call(null,G__30654,G__30655));
})(),(function (){var G__30684 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30685 = (function (){var obj30693 = ({"x":(1174),"y":(54),"children":(function (){var G__30698 = app.ui.shared.components.toolbar.btn_divider;
var G__30699 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30698,G__30699) : helix.core.jsx.call(null,G__30698,G__30699));
})()});
return obj30693;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30684,G__30685) : helix.core.jsx.call(null,G__30684,G__30685));
})(),(function (){var G__30741 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30743 = (function (){var obj30746 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__30756 = app.ui.shared.components.toolbar.btn_info;
var G__30757 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30756,G__30757) : helix.core.jsx.call(null,G__30756,G__30757));
})()});
return obj30746;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30741,G__30743) : helix.core.jsx.call(null,G__30741,G__30743));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30274,G__30275) : helix.core.jsxs.call(null,G__30274,G__30275));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__30766 = G__30239;
(G__30766.displayName = "app.ui.kits.connect.NRR-2-60-3C.toolbar-panel/NRR-2-60-3C-toolbar-panel");

return G__30766;
} else {
return G__30239;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_60_3C.toolbar_panel.js.map
