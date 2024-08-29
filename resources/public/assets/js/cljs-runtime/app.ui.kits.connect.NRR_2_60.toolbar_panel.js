goog.provide('app.ui.kits.connect.NRR_2_60.toolbar_panel');

app.ui.kits.connect.NRR_2_60.toolbar_panel.NRR_2_60_toolbar_panel = (function (){var G__39956 = (function app$ui$kits$connect$NRR_2_60$toolbar_panel$NRR_2_60_toolbar_panel_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__39962 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-show-toolbar","NRR-2-60-show-toolbar",-1378612021)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__39979 = helix.core.Fragment;
var G__39980 = ({"children": [(function (){var G__39984 = app.ui.shared.components.toolbar.title;
var G__39985 = (function (){var obj39992 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj39992;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39984,G__39985) : helix.core.jsx.call(null,G__39984,G__39985));
})(),(function (){var G__40002 = app.ui.shared.components.toolbar.title;
var G__40003 = (function (){var obj40011 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60"});
return obj40011;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40002,G__40003) : helix.core.jsx.call(null,G__40002,G__40003));
})(),(function (){var G__40019 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40020 = (function (){var obj40026 = ({"x":(588),"y":(54),"inactive":inactive,"on-click":(function (){
return null;
}),"children":(function (){var G__40039 = app.ui.shared.components.toolbar.btn_replace;
var G__40040 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40039,G__40040) : helix.core.jsx.call(null,G__40039,G__40040));
})()});
return obj40026;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40019,G__40020) : helix.core.jsx.call(null,G__40019,G__40020));
})(),(function (){var G__40054 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40055 = (function (){var obj40063 = ({"x":(648),"y":(54),"children":(function (){var G__40072 = app.ui.shared.components.toolbar.btn_divider;
var G__40073 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40072,G__40073) : helix.core.jsx.call(null,G__40072,G__40073));
})()});
return obj40063;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40054,G__40055) : helix.core.jsx.call(null,G__40054,G__40055));
})(),(function (){var G__40089 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40090 = (function (){var obj40096 = ({"x":(698),"y":(54),"inactive":(!(inactive)),"on-click":(function (){
return null;
}),"children":(function (){var G__40112 = app.ui.shared.components.toolbar.btn_error;
var G__40113 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40112,G__40113) : helix.core.jsx.call(null,G__40112,G__40113));
})()});
return obj40096;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40089,G__40090) : helix.core.jsx.call(null,G__40089,G__40090));
})(),(function (){var G__40127 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40128 = (function (){var obj40134 = ({"x":(758),"y":(54),"children":(function (){var G__40139 = app.ui.shared.components.toolbar.btn_divider;
var G__40140 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40139,G__40140) : helix.core.jsx.call(null,G__40139,G__40140));
})()});
return obj40134;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40127,G__40128) : helix.core.jsx.call(null,G__40127,G__40128));
})(),(function (){var G__40155 = app.ui.shared.components.toolbar.switch_panel;
var G__40156 = (function (){var obj40162 = ({"x":(808),"y":(12),"children":[(function (){var G__40167 = app.ui.shared.components.toolbar.switch$;
var G__40168 = (function (){var obj40176 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj40176;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40167,G__40168) : helix.core.jsx.call(null,G__40167,G__40168));
})(),(function (){var G__40192 = app.ui.shared.components.toolbar.switch$;
var G__40193 = (function (){var obj40195 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj40195;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40192,G__40193) : helix.core.jsx.call(null,G__40192,G__40193));
})(),(function (){var G__40214 = app.ui.shared.components.toolbar.switch$;
var G__40215 = (function (){var obj40229 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj40229;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40214,G__40215) : helix.core.jsx.call(null,G__40214,G__40215));
})(),(function (){var G__40241 = app.ui.shared.components.toolbar.switch$;
var G__40242 = (function (){var obj40250 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj40250;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40241,G__40242) : helix.core.jsx.call(null,G__40241,G__40242));
})()]});
return obj40162;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40155,G__40156) : helix.core.jsxs.call(null,G__40155,G__40156));
})(),(function (){var G__40273 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40274 = (function (){var obj40282 = ({"x":(954),"y":(54),"children":(function (){var G__40286 = app.ui.shared.components.toolbar.btn_divider;
var G__40287 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40286,G__40287) : helix.core.jsx.call(null,G__40286,G__40287));
})()});
return obj40282;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40273,G__40274) : helix.core.jsx.call(null,G__40273,G__40274));
})(),(function (){var G__40296 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40297 = (function (){var obj40304 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__40314 = app.ui.shared.components.toolbar.btn_full_screen;
var G__40315 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40314,G__40315) : helix.core.jsx.call(null,G__40314,G__40315));
})()});
return obj40304;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40296,G__40297) : helix.core.jsx.call(null,G__40296,G__40297));
})(),(function (){var G__40325 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40326 = (function (){var obj40331 = ({"x":(1064),"y":(54),"children":(function (){var G__40338 = app.ui.shared.components.toolbar.btn_divider;
var G__40339 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40338,G__40339) : helix.core.jsx.call(null,G__40338,G__40339));
})()});
return obj40331;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40325,G__40326) : helix.core.jsx.call(null,G__40325,G__40326));
})(),(function (){var G__40351 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40352 = (function (){var obj40356 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__40367 = app.ui.shared.components.toolbar.btn_settings;
var G__40368 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40367,G__40368) : helix.core.jsx.call(null,G__40367,G__40368));
})()});
return obj40356;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40351,G__40352) : helix.core.jsx.call(null,G__40351,G__40352));
})(),(function (){var G__40377 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40378 = (function (){var obj40383 = ({"x":(1174),"y":(54),"children":(function (){var G__40386 = app.ui.shared.components.toolbar.btn_divider;
var G__40387 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40386,G__40387) : helix.core.jsx.call(null,G__40386,G__40387));
})()});
return obj40383;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40377,G__40378) : helix.core.jsx.call(null,G__40377,G__40378));
})(),(function (){var G__40400 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40401 = (function (){var obj40404 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__40410 = app.ui.shared.components.toolbar.btn_info;
var G__40411 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40410,G__40411) : helix.core.jsx.call(null,G__40410,G__40411));
})()});
return obj40404;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40400,G__40401) : helix.core.jsx.call(null,G__40400,G__40401));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39979,G__39980) : helix.core.jsxs.call(null,G__39979,G__39980));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__40419 = G__39956;
(G__40419.displayName = "app.ui.kits.connect.NRR-2-60.toolbar-panel/NRR-2-60-toolbar-panel");

return G__40419;
} else {
return G__39956;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_60.toolbar_panel.js.map
