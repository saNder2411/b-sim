goog.provide('app.ui.kits.connect.NRR_2_61.toolbar_panel');

app.ui.kits.connect.NRR_2_61.toolbar_panel.NRR_2_61_toolbar_panel = (function (){var G__39961 = (function app$ui$kits$connect$NRR_2_61$toolbar_panel$NRR_2_61_toolbar_panel_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__39967 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-show-toolbar","NRR-2-61-show-toolbar",-1427340718)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__39989 = helix.core.Fragment;
var G__39990 = ({"children": [(function (){var G__39995 = app.ui.shared.components.toolbar.title;
var G__39996 = (function (){var obj40007 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj40007;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39995,G__39996) : helix.core.jsx.call(null,G__39995,G__39996));
})(),(function (){var G__40017 = app.ui.shared.components.toolbar.title;
var G__40018 = (function (){var obj40028 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61"});
return obj40028;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40017,G__40018) : helix.core.jsx.call(null,G__40017,G__40018));
})(),(function (){var G__40037 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40038 = (function (){var obj40045 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__40052 = app.ui.shared.components.toolbar.btn_replace;
var G__40053 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40052,G__40053) : helix.core.jsx.call(null,G__40052,G__40053));
})()});
return obj40045;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40037,G__40038) : helix.core.jsx.call(null,G__40037,G__40038));
})(),(function (){var G__40070 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40071 = (function (){var obj40076 = ({"x":(648),"y":(54),"children":(function (){var G__40081 = app.ui.shared.components.toolbar.btn_divider;
var G__40082 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40081,G__40082) : helix.core.jsx.call(null,G__40081,G__40082));
})()});
return obj40076;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40070,G__40071) : helix.core.jsx.call(null,G__40070,G__40071));
})(),(function (){var G__40099 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40100 = (function (){var obj40106 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__40119 = app.ui.shared.components.toolbar.btn_error;
var G__40120 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40119,G__40120) : helix.core.jsx.call(null,G__40119,G__40120));
})()});
return obj40106;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40099,G__40100) : helix.core.jsx.call(null,G__40099,G__40100));
})(),(function (){var G__40135 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40136 = (function (){var obj40142 = ({"x":(758),"y":(54),"children":(function (){var G__40147 = app.ui.shared.components.toolbar.btn_divider;
var G__40148 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40147,G__40148) : helix.core.jsx.call(null,G__40147,G__40148));
})()});
return obj40142;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40135,G__40136) : helix.core.jsx.call(null,G__40135,G__40136));
})(),(function (){var G__40163 = app.ui.shared.components.toolbar.switch_panel;
var G__40164 = (function (){var obj40172 = ({"x":(808),"y":(12),"children":[(function (){var G__40179 = app.ui.shared.components.toolbar.switch$;
var G__40180 = (function (){var obj40187 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj40187;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40179,G__40180) : helix.core.jsx.call(null,G__40179,G__40180));
})(),(function (){var G__40200 = app.ui.shared.components.toolbar.switch$;
var G__40201 = (function (){var obj40209 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj40209;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40200,G__40201) : helix.core.jsx.call(null,G__40200,G__40201));
})(),(function (){var G__40224 = app.ui.shared.components.toolbar.switch$;
var G__40226 = (function (){var obj40233 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj40233;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40224,G__40226) : helix.core.jsx.call(null,G__40224,G__40226));
})(),(function (){var G__40245 = app.ui.shared.components.toolbar.switch$;
var G__40246 = (function (){var obj40258 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj40258;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40245,G__40246) : helix.core.jsx.call(null,G__40245,G__40246));
})()]});
return obj40172;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40163,G__40164) : helix.core.jsxs.call(null,G__40163,G__40164));
})(),(function (){var G__40277 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40278 = (function (){var obj40284 = ({"x":(954),"y":(54),"children":(function (){var G__40290 = app.ui.shared.components.toolbar.btn_divider;
var G__40291 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40290,G__40291) : helix.core.jsx.call(null,G__40290,G__40291));
})()});
return obj40284;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40277,G__40278) : helix.core.jsx.call(null,G__40277,G__40278));
})(),(function (){var G__40300 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40301 = (function (){var obj40307 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__40317 = app.ui.shared.components.toolbar.btn_full_screen;
var G__40318 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40317,G__40318) : helix.core.jsx.call(null,G__40317,G__40318));
})()});
return obj40307;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40300,G__40301) : helix.core.jsx.call(null,G__40300,G__40301));
})(),(function (){var G__40333 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40334 = (function (){var obj40337 = ({"x":(1064),"y":(54),"children":(function (){var G__40344 = app.ui.shared.components.toolbar.btn_divider;
var G__40345 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40344,G__40345) : helix.core.jsx.call(null,G__40344,G__40345));
})()});
return obj40337;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40333,G__40334) : helix.core.jsx.call(null,G__40333,G__40334));
})(),(function (){var G__40359 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40360 = (function (){var obj40366 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__40375 = app.ui.shared.components.toolbar.btn_settings;
var G__40376 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40375,G__40376) : helix.core.jsx.call(null,G__40375,G__40376));
})()});
return obj40366;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40359,G__40360) : helix.core.jsx.call(null,G__40359,G__40360));
})(),(function (){var G__40390 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40391 = (function (){var obj40393 = ({"x":(1174),"y":(54),"children":(function (){var G__40396 = app.ui.shared.components.toolbar.btn_divider;
var G__40397 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40396,G__40397) : helix.core.jsx.call(null,G__40396,G__40397));
})()});
return obj40393;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40390,G__40391) : helix.core.jsx.call(null,G__40390,G__40391));
})(),(function (){var G__40406 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40407 = (function (){var obj40413 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__40416 = app.ui.shared.components.toolbar.btn_info;
var G__40417 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40416,G__40417) : helix.core.jsx.call(null,G__40416,G__40417));
})()});
return obj40413;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40406,G__40407) : helix.core.jsx.call(null,G__40406,G__40407));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39989,G__39990) : helix.core.jsxs.call(null,G__39989,G__39990));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__40420 = G__39961;
(G__40420.displayName = "app.ui.kits.connect.NRR-2-61.toolbar-panel/NRR-2-61-toolbar-panel");

return G__40420;
} else {
return G__39961;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_61.toolbar_panel.js.map
