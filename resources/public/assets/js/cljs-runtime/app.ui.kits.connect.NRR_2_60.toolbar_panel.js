goog.provide('app.ui.kits.connect.NRR_2_60.toolbar_panel');

app.ui.kits.connect.NRR_2_60.toolbar_panel.NRR_2_60_toolbar_panel = (function (){var G__30155 = (function app$ui$kits$connect$NRR_2_60$toolbar_panel$NRR_2_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30160 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-show-toolbar","NRR-2-60-show-toolbar",-1378612021)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__30171 = helix.core.Fragment;
var G__30172 = ({"children": [(function (){var G__30175 = app.ui.shared.components.toolbar.title;
var G__30176 = (function (){var obj30180 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj30180;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30175,G__30176) : helix.core.jsx.call(null,G__30175,G__30176));
})(),(function (){var G__30181 = app.ui.shared.components.toolbar.title;
var G__30182 = (function (){var obj30186 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60"});
return obj30186;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30181,G__30182) : helix.core.jsx.call(null,G__30181,G__30182));
})(),(function (){var G__30189 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30190 = (function (){var obj30194 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__30198 = app.ui.shared.components.toolbar.btn_replace;
var G__30199 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30198,G__30199) : helix.core.jsx.call(null,G__30198,G__30199));
})()});
return obj30194;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30189,G__30190) : helix.core.jsx.call(null,G__30189,G__30190));
})(),(function (){var G__30204 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30205 = (function (){var obj30209 = ({"x":(648),"y":(54),"children":(function (){var G__30212 = app.ui.shared.components.toolbar.btn_divider;
var G__30213 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30212,G__30213) : helix.core.jsx.call(null,G__30212,G__30213));
})()});
return obj30209;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30204,G__30205) : helix.core.jsx.call(null,G__30204,G__30205));
})(),(function (){var G__30216 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30217 = (function (){var obj30221 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__30222 = app.ui.shared.components.toolbar.btn_error;
var G__30223 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30222,G__30223) : helix.core.jsx.call(null,G__30222,G__30223));
})()});
return obj30221;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30216,G__30217) : helix.core.jsx.call(null,G__30216,G__30217));
})(),(function (){var G__30224 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30225 = (function (){var obj30227 = ({"x":(758),"y":(54),"children":(function (){var G__30228 = app.ui.shared.components.toolbar.btn_divider;
var G__30229 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30228,G__30229) : helix.core.jsx.call(null,G__30228,G__30229));
})()});
return obj30227;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30224,G__30225) : helix.core.jsx.call(null,G__30224,G__30225));
})(),(function (){var G__30230 = app.ui.shared.components.toolbar.switch_panel;
var G__30231 = (function (){var obj30233 = ({"x":(808),"y":(12),"children":[(function (){var G__30234 = app.ui.shared.components.toolbar.switch$;
var G__30235 = (function (){var obj30237 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj30237;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30234,G__30235) : helix.core.jsx.call(null,G__30234,G__30235));
})(),(function (){var G__30238 = app.ui.shared.components.toolbar.switch$;
var G__30240 = (function (){var obj30242 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj30242;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30238,G__30240) : helix.core.jsx.call(null,G__30238,G__30240));
})(),(function (){var G__30252 = app.ui.shared.components.toolbar.switch$;
var G__30253 = (function (){var obj30267 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj30267;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30252,G__30253) : helix.core.jsx.call(null,G__30252,G__30253));
})(),(function (){var G__30276 = app.ui.shared.components.toolbar.switch$;
var G__30277 = (function (){var obj30280 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj30280;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30276,G__30277) : helix.core.jsx.call(null,G__30276,G__30277));
})()]});
return obj30233;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30230,G__30231) : helix.core.jsxs.call(null,G__30230,G__30231));
})(),(function (){var G__30303 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30304 = (function (){var obj30311 = ({"x":(954),"y":(54),"children":(function (){var G__30333 = app.ui.shared.components.toolbar.btn_divider;
var G__30334 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30333,G__30334) : helix.core.jsx.call(null,G__30333,G__30334));
})()});
return obj30311;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30303,G__30304) : helix.core.jsx.call(null,G__30303,G__30304));
})(),(function (){var G__30378 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30379 = (function (){var obj30383 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__30398 = app.ui.shared.components.toolbar.btn_full_screen;
var G__30399 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30398,G__30399) : helix.core.jsx.call(null,G__30398,G__30399));
})()});
return obj30383;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30378,G__30379) : helix.core.jsx.call(null,G__30378,G__30379));
})(),(function (){var G__30422 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30423 = (function (){var obj30425 = ({"x":(1064),"y":(54),"children":(function (){var G__30426 = app.ui.shared.components.toolbar.btn_divider;
var G__30427 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30426,G__30427) : helix.core.jsx.call(null,G__30426,G__30427));
})()});
return obj30425;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30422,G__30423) : helix.core.jsx.call(null,G__30422,G__30423));
})(),(function (){var G__30438 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30439 = (function (){var obj30443 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__30450 = app.ui.shared.components.toolbar.btn_settings;
var G__30451 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30450,G__30451) : helix.core.jsx.call(null,G__30450,G__30451));
})()});
return obj30443;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30438,G__30439) : helix.core.jsx.call(null,G__30438,G__30439));
})(),(function (){var G__30460 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30461 = (function (){var obj30467 = ({"x":(1174),"y":(54),"children":(function (){var G__30476 = app.ui.shared.components.toolbar.btn_divider;
var G__30477 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30476,G__30477) : helix.core.jsx.call(null,G__30476,G__30477));
})()});
return obj30467;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30460,G__30461) : helix.core.jsx.call(null,G__30460,G__30461));
})(),(function (){var G__30490 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30491 = (function (){var obj30499 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__30510 = app.ui.shared.components.toolbar.btn_info;
var G__30511 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30510,G__30511) : helix.core.jsx.call(null,G__30510,G__30511));
})()});
return obj30499;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30490,G__30491) : helix.core.jsx.call(null,G__30490,G__30491));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30171,G__30172) : helix.core.jsxs.call(null,G__30171,G__30172));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__30528 = G__30155;
(G__30528.displayName = "app.ui.kits.connect.NRR-2-60.toolbar-panel/NRR-2-60-toolbar-panel");

return G__30528;
} else {
return G__30155;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_60.toolbar_panel.js.map
