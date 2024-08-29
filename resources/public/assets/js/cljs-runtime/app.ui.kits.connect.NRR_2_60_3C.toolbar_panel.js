goog.provide('app.ui.kits.connect.NRR_2_60_3C.toolbar_panel');

app.ui.kits.connect.NRR_2_60_3C.toolbar_panel.NRR_2_60_3C_toolbar_panel = (function (){var G__39951 = (function app$ui$kits$connect$NRR_2_60_3C$toolbar_panel$NRR_2_60_3C_toolbar_panel_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__39957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-3C-show-toolbar","NRR-2-60-3C-show-toolbar",-897814081)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__39973 = helix.core.Fragment;
var G__39974 = ({"children": [(function (){var G__39977 = app.ui.shared.components.toolbar.title;
var G__39978 = (function (){var obj39983 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj39983;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39977,G__39978) : helix.core.jsx.call(null,G__39977,G__39978));
})(),(function (){var G__39993 = app.ui.shared.components.toolbar.title;
var G__39994 = (function (){var obj40005 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60 3C"});
return obj40005;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39993,G__39994) : helix.core.jsx.call(null,G__39993,G__39994));
})(),(function (){var G__40012 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40013 = (function (){var obj40022 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__40033 = app.ui.shared.components.toolbar.btn_replace;
var G__40034 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40033,G__40034) : helix.core.jsx.call(null,G__40033,G__40034));
})()});
return obj40022;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40012,G__40013) : helix.core.jsx.call(null,G__40012,G__40013));
})(),(function (){var G__40048 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40049 = (function (){var obj40057 = ({"x":(648),"y":(54),"children":(function (){var G__40064 = app.ui.shared.components.toolbar.btn_divider;
var G__40066 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40064,G__40066) : helix.core.jsx.call(null,G__40064,G__40066));
})()});
return obj40057;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40048,G__40049) : helix.core.jsx.call(null,G__40048,G__40049));
})(),(function (){var G__40079 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40080 = (function (){var obj40088 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__40101 = app.ui.shared.components.toolbar.btn_error;
var G__40102 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40101,G__40102) : helix.core.jsx.call(null,G__40101,G__40102));
})()});
return obj40088;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40079,G__40080) : helix.core.jsx.call(null,G__40079,G__40080));
})(),(function (){var G__40116 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40117 = (function (){var obj40126 = ({"x":(758),"y":(54),"children":(function (){var G__40131 = app.ui.shared.components.toolbar.btn_divider;
var G__40132 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40131,G__40132) : helix.core.jsx.call(null,G__40131,G__40132));
})()});
return obj40126;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40116,G__40117) : helix.core.jsx.call(null,G__40116,G__40117));
})(),(function (){var G__40145 = app.ui.shared.components.toolbar.switch_panel;
var G__40146 = (function (){var obj40152 = ({"x":(808),"y":(12),"children":[(function (){var G__40159 = app.ui.shared.components.toolbar.switch$;
var G__40160 = (function (){var obj40166 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj40166;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40159,G__40160) : helix.core.jsx.call(null,G__40159,G__40160));
})(),(function (){var G__40188 = app.ui.shared.components.toolbar.switch$;
var G__40189 = (function (){var obj40191 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj40191;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40188,G__40189) : helix.core.jsx.call(null,G__40188,G__40189));
})(),(function (){var G__40202 = app.ui.shared.components.toolbar.switch$;
var G__40203 = (function (){var obj40211 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj40211;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40202,G__40203) : helix.core.jsx.call(null,G__40202,G__40203));
})(),(function (){var G__40225 = app.ui.shared.components.toolbar.switch$;
var G__40227 = (function (){var obj40232 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj40232;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40225,G__40227) : helix.core.jsx.call(null,G__40225,G__40227));
})()]});
return obj40152;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40145,G__40146) : helix.core.jsxs.call(null,G__40145,G__40146));
})(),(function (){var G__40251 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40252 = (function (){var obj40256 = ({"x":(954),"y":(54),"children":(function (){var G__40260 = app.ui.shared.components.toolbar.btn_divider;
var G__40261 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40260,G__40261) : helix.core.jsx.call(null,G__40260,G__40261));
})()});
return obj40256;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40251,G__40252) : helix.core.jsx.call(null,G__40251,G__40252));
})(),(function (){var G__40271 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40272 = (function (){var obj40281 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__40292 = app.ui.shared.components.toolbar.btn_full_screen;
var G__40293 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40292,G__40293) : helix.core.jsx.call(null,G__40292,G__40293));
})()});
return obj40281;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40271,G__40272) : helix.core.jsx.call(null,G__40271,G__40272));
})(),(function (){var G__40303 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40305 = (function (){var obj40310 = ({"x":(1064),"y":(54),"children":(function (){var G__40312 = app.ui.shared.components.toolbar.btn_divider;
var G__40313 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40312,G__40313) : helix.core.jsx.call(null,G__40312,G__40313));
})()});
return obj40310;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40303,G__40305) : helix.core.jsx.call(null,G__40303,G__40305));
})(),(function (){var G__40323 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40324 = (function (){var obj40335 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__40340 = app.ui.shared.components.toolbar.btn_settings;
var G__40341 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40340,G__40341) : helix.core.jsx.call(null,G__40340,G__40341));
})()});
return obj40335;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40323,G__40324) : helix.core.jsx.call(null,G__40323,G__40324));
})(),(function (){var G__40353 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40354 = (function (){var obj40358 = ({"x":(1174),"y":(54),"children":(function (){var G__40363 = app.ui.shared.components.toolbar.btn_divider;
var G__40364 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40363,G__40364) : helix.core.jsx.call(null,G__40363,G__40364));
})()});
return obj40358;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40353,G__40354) : helix.core.jsx.call(null,G__40353,G__40354));
})(),(function (){var G__40371 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40372 = (function (){var obj40380 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__40388 = app.ui.shared.components.toolbar.btn_info;
var G__40389 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40388,G__40389) : helix.core.jsx.call(null,G__40388,G__40389));
})()});
return obj40380;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40371,G__40372) : helix.core.jsx.call(null,G__40371,G__40372));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39973,G__39974) : helix.core.jsxs.call(null,G__39973,G__39974));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__40405 = G__39951;
(G__40405.displayName = "app.ui.kits.connect.NRR-2-60-3C.toolbar-panel/NRR-2-60-3C-toolbar-panel");

return G__40405;
} else {
return G__39951;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_60_3C.toolbar_panel.js.map
