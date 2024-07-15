goog.provide('app.connect.NRR_2_60_3C.toolbar_panel');

app.connect.NRR_2_60_3C.toolbar_panel.NRR_2_60_3C_toolbar_panel = (function (){var G__32226 = (function app$connect$NRR_2_60_3C$toolbar_panel$NRR_2_60_3C_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32227 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-3C-show-toolbar","NRR-2-60-3C-show-toolbar",-897814081)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__32230 = helix.core.Fragment;
var G__32231 = ({"children": [(function (){var G__32232 = app.shared.components.toolbar.title;
var G__32233 = (function (){var obj32235 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj32235;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32232,G__32233) : helix.core.jsx.call(null,G__32232,G__32233));
})(),(function (){var G__32236 = app.shared.components.toolbar.title;
var G__32237 = (function (){var obj32239 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60 3C"});
return obj32239;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32236,G__32237) : helix.core.jsx.call(null,G__32236,G__32237));
})(),(function (){var G__32240 = app.shared.components.toolbar.btn_wrapper;
var G__32241 = (function (){var obj32243 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__32244 = app.shared.components.toolbar.btn_replace;
var G__32245 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32244,G__32245) : helix.core.jsx.call(null,G__32244,G__32245));
})()});
return obj32243;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32240,G__32241) : helix.core.jsx.call(null,G__32240,G__32241));
})(),(function (){var G__32246 = app.shared.components.toolbar.btn_wrapper;
var G__32247 = (function (){var obj32249 = ({"x":(648),"y":(54),"children":(function (){var G__32250 = app.shared.components.toolbar.btn_divider;
var G__32251 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32250,G__32251) : helix.core.jsx.call(null,G__32250,G__32251));
})()});
return obj32249;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32246,G__32247) : helix.core.jsx.call(null,G__32246,G__32247));
})(),(function (){var G__32252 = app.shared.components.toolbar.btn_wrapper;
var G__32253 = (function (){var obj32255 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__32256 = app.shared.components.toolbar.btn_error;
var G__32257 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32256,G__32257) : helix.core.jsx.call(null,G__32256,G__32257));
})()});
return obj32255;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32252,G__32253) : helix.core.jsx.call(null,G__32252,G__32253));
})(),(function (){var G__32258 = app.shared.components.toolbar.btn_wrapper;
var G__32259 = (function (){var obj32261 = ({"x":(758),"y":(54),"children":(function (){var G__32262 = app.shared.components.toolbar.btn_divider;
var G__32263 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32262,G__32263) : helix.core.jsx.call(null,G__32262,G__32263));
})()});
return obj32261;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32258,G__32259) : helix.core.jsx.call(null,G__32258,G__32259));
})(),(function (){var G__32264 = app.shared.components.toolbar.switch_panel;
var G__32265 = (function (){var obj32267 = ({"x":(808),"y":(12),"children":[(function (){var G__32268 = app.shared.components.toolbar.switch$;
var G__32269 = (function (){var obj32271 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj32271;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32268,G__32269) : helix.core.jsx.call(null,G__32268,G__32269));
})(),(function (){var G__32272 = app.shared.components.toolbar.switch$;
var G__32273 = (function (){var obj32275 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj32275;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32272,G__32273) : helix.core.jsx.call(null,G__32272,G__32273));
})(),(function (){var G__32276 = app.shared.components.toolbar.switch$;
var G__32277 = (function (){var obj32279 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj32279;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32276,G__32277) : helix.core.jsx.call(null,G__32276,G__32277));
})(),(function (){var G__32280 = app.shared.components.toolbar.switch$;
var G__32281 = (function (){var obj32283 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj32283;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32280,G__32281) : helix.core.jsx.call(null,G__32280,G__32281));
})()]});
return obj32267;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32264,G__32265) : helix.core.jsxs.call(null,G__32264,G__32265));
})(),(function (){var G__32284 = app.shared.components.toolbar.btn_wrapper;
var G__32285 = (function (){var obj32287 = ({"x":(954),"y":(54),"children":(function (){var G__32288 = app.shared.components.toolbar.btn_divider;
var G__32289 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32288,G__32289) : helix.core.jsx.call(null,G__32288,G__32289));
})()});
return obj32287;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32284,G__32285) : helix.core.jsx.call(null,G__32284,G__32285));
})(),(function (){var G__32290 = app.shared.components.toolbar.btn_wrapper;
var G__32291 = (function (){var obj32293 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__32294 = app.shared.components.toolbar.btn_full_screen;
var G__32295 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32294,G__32295) : helix.core.jsx.call(null,G__32294,G__32295));
})()});
return obj32293;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32290,G__32291) : helix.core.jsx.call(null,G__32290,G__32291));
})(),(function (){var G__32296 = app.shared.components.toolbar.btn_wrapper;
var G__32297 = (function (){var obj32299 = ({"x":(1064),"y":(54),"children":(function (){var G__32300 = app.shared.components.toolbar.btn_divider;
var G__32301 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32300,G__32301) : helix.core.jsx.call(null,G__32300,G__32301));
})()});
return obj32299;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32296,G__32297) : helix.core.jsx.call(null,G__32296,G__32297));
})(),(function (){var G__32302 = app.shared.components.toolbar.btn_wrapper;
var G__32303 = (function (){var obj32305 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__32306 = app.shared.components.toolbar.btn_settings;
var G__32307 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32306,G__32307) : helix.core.jsx.call(null,G__32306,G__32307));
})()});
return obj32305;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32302,G__32303) : helix.core.jsx.call(null,G__32302,G__32303));
})(),(function (){var G__32308 = app.shared.components.toolbar.btn_wrapper;
var G__32309 = (function (){var obj32311 = ({"x":(1174),"y":(54),"children":(function (){var G__32312 = app.shared.components.toolbar.btn_divider;
var G__32313 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32312,G__32313) : helix.core.jsx.call(null,G__32312,G__32313));
})()});
return obj32311;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32308,G__32309) : helix.core.jsx.call(null,G__32308,G__32309));
})(),(function (){var G__32314 = app.shared.components.toolbar.btn_wrapper;
var G__32315 = (function (){var obj32317 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__32318 = app.shared.components.toolbar.btn_info;
var G__32319 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32318,G__32319) : helix.core.jsx.call(null,G__32318,G__32319));
})()});
return obj32317;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32314,G__32315) : helix.core.jsx.call(null,G__32314,G__32315));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32230,G__32231) : helix.core.jsxs.call(null,G__32230,G__32231));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__32320 = G__32226;
(G__32320.displayName = "app.connect.NRR-2-60-3C.toolbar-panel/NRR-2-60-3C-toolbar-panel");

return G__32320;
} else {
return G__32226;
}
})();




//# sourceMappingURL=app.connect.NRR_2_60_3C.toolbar_panel.js.map
