goog.provide('app.ui.kits.connect.URS_60.toolbar_panel');

app.ui.kits.connect.URS_60.toolbar_panel.URS_60_toolbar_panel = (function (){var G__30268 = (function app$ui$kits$connect$URS_60$toolbar_panel$URS_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30269 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URS-60-show-toolbar","URS-60-show-toolbar",-1403693272)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
var switch_5 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(5)], null)], null));
var switch_6 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(6)], null)], null));
var switch_7 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(7)], null)], null));
var switch_8 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(8)], null)], null));
var switch_9 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(9)], null)], null));
var switch_10 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(10)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__30272 = helix.core.Fragment;
var G__30273 = ({"children": [(function (){var G__30274 = app.ui.shared.components.toolbar.title;
var G__30275 = (function (){var obj30277 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Limiter"});
return obj30277;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30274,G__30275) : helix.core.jsx.call(null,G__30274,G__30275));
})(),(function (){var G__30278 = app.ui.shared.components.toolbar.title;
var G__30279 = (function (){var obj30281 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URS 60"});
return obj30281;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30278,G__30279) : helix.core.jsx.call(null,G__30278,G__30279));
})(),(function (){var G__30282 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30283 = (function (){var obj30285 = ({"x":(597),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__30286 = app.ui.shared.components.toolbar.btn_replace;
var G__30287 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30286,G__30287) : helix.core.jsx.call(null,G__30286,G__30287));
})()});
return obj30285;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30282,G__30283) : helix.core.jsx.call(null,G__30282,G__30283));
})(),(function (){var G__30288 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30289 = (function (){var obj30291 = ({"x":(657),"y":(54),"children":(function (){var G__30292 = app.ui.shared.components.toolbar.btn_divider;
var G__30293 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30292,G__30293) : helix.core.jsx.call(null,G__30292,G__30293));
})()});
return obj30291;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30288,G__30289) : helix.core.jsx.call(null,G__30288,G__30289));
})(),(function (){var G__30294 = app.ui.shared.components.toolbar.switch_panel;
var G__30295 = (function (){var obj30297 = ({"x":(707),"y":(12),"children":[(function (){var G__30298 = app.ui.shared.components.toolbar.switch$;
var G__30299 = (function (){var obj30301 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-60","change-URS-60",-949936985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj30301;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30298,G__30299) : helix.core.jsx.call(null,G__30298,G__30299));
})(),(function (){var G__30302 = app.ui.shared.components.toolbar.switch$;
var G__30303 = (function (){var obj30305 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-60","change-URS-60",-949936985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj30305;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30302,G__30303) : helix.core.jsx.call(null,G__30302,G__30303));
})(),(function (){var G__30306 = app.ui.shared.components.toolbar.switch$;
var G__30307 = (function (){var obj30309 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-60","change-URS-60",-949936985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj30309;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30306,G__30307) : helix.core.jsx.call(null,G__30306,G__30307));
})(),(function (){var G__30310 = app.ui.shared.components.toolbar.switch$;
var G__30311 = (function (){var obj30313 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-60","change-URS-60",-949936985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj30313;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30310,G__30311) : helix.core.jsx.call(null,G__30310,G__30311));
})(),(function (){var G__30314 = app.ui.shared.components.toolbar.switch$;
var G__30315 = (function (){var obj30317 = ({"x":(140),"value":switch_5,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-60","change-URS-60",-949936985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(5)], null),cljs.core.not(switch_5)], null)], null));
}),"legend":(5),"inactive":inactive});
return obj30317;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30314,G__30315) : helix.core.jsx.call(null,G__30314,G__30315));
})(),(function (){var G__30318 = app.ui.shared.components.toolbar.switch$;
var G__30319 = (function (){var obj30321 = ({"x":(175),"value":switch_6,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-60","change-URS-60",-949936985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(6)], null),cljs.core.not(switch_6)], null)], null));
}),"legend":(6),"inactive":inactive});
return obj30321;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30318,G__30319) : helix.core.jsx.call(null,G__30318,G__30319));
})(),(function (){var G__30322 = app.ui.shared.components.toolbar.switch$;
var G__30323 = (function (){var obj30325 = ({"x":(210),"value":switch_7,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-60","change-URS-60",-949936985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(7)], null),cljs.core.not(switch_7)], null)], null));
}),"legend":(7),"inactive":inactive});
return obj30325;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30322,G__30323) : helix.core.jsx.call(null,G__30322,G__30323));
})(),(function (){var G__30326 = app.ui.shared.components.toolbar.switch$;
var G__30327 = (function (){var obj30329 = ({"x":(245),"value":switch_8,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-60","change-URS-60",-949936985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(8)], null),cljs.core.not(switch_8)], null)], null));
}),"legend":(8),"inactive":inactive});
return obj30329;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30326,G__30327) : helix.core.jsx.call(null,G__30326,G__30327));
})(),(function (){var G__30330 = app.ui.shared.components.toolbar.switch$;
var G__30331 = (function (){var obj30333 = ({"x":(280),"value":switch_9,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-60","change-URS-60",-949936985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(9)], null),cljs.core.not(switch_9)], null)], null));
}),"legend":(9),"inactive":inactive});
return obj30333;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30330,G__30331) : helix.core.jsx.call(null,G__30330,G__30331));
})(),(function (){var G__30334 = app.ui.shared.components.toolbar.switch$;
var G__30335 = (function (){var obj30337 = ({"x":(315),"value":switch_10,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-60","change-URS-60",-949936985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(10)], null),cljs.core.not(switch_10)], null)], null));
}),"legend":(10),"inactive":inactive});
return obj30337;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30334,G__30335) : helix.core.jsx.call(null,G__30334,G__30335));
})()]});
return obj30297;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30294,G__30295) : helix.core.jsxs.call(null,G__30294,G__30295));
})(),(function (){var G__30338 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30339 = (function (){var obj30341 = ({"x":(1064),"y":(54),"children":(function (){var G__30342 = app.ui.shared.components.toolbar.btn_divider;
var G__30343 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30342,G__30343) : helix.core.jsx.call(null,G__30342,G__30343));
})()});
return obj30341;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30338,G__30339) : helix.core.jsx.call(null,G__30338,G__30339));
})(),(function (){var G__30344 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30345 = (function (){var obj30347 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-60","change-URS-60",-949936985),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen_QMARK_)], null)], null));
}),"children":(function (){var G__30348 = app.ui.shared.components.toolbar.btn_full_screen;
var G__30349 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30348,G__30349) : helix.core.jsx.call(null,G__30348,G__30349));
})()});
return obj30347;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30344,G__30345) : helix.core.jsx.call(null,G__30344,G__30345));
})(),(function (){var G__30350 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30351 = (function (){var obj30353 = ({"x":(1174),"y":(54),"children":(function (){var G__30354 = app.ui.shared.components.toolbar.btn_divider;
var G__30355 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30354,G__30355) : helix.core.jsx.call(null,G__30354,G__30355));
})()});
return obj30353;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30350,G__30351) : helix.core.jsx.call(null,G__30350,G__30351));
})(),(function (){var G__30356 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30357 = (function (){var obj30359 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Limiter",new cljs.core.Keyword(null,"text","text",-1790561697),"The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2\u2026, LRG 1\u2026 and TRV 5. The data are transferred via ISO 11898 CAN bus using the CAN open protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: \u25A0 Sensor alarms if the limits are exceeded \u25A0 Fault indications on the occurrence of faults in electronic or mechanical parts \u25A0 Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: \u25A0 Fault in sensors (negative self-test, excessively high temperature in terminal box) \u25A0 Fault in control unit (negative self-test) \u25A0 Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."], null)], null));
}),"children":(function (){var G__30360 = app.ui.shared.components.toolbar.btn_info;
var G__30361 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30360,G__30361) : helix.core.jsx.call(null,G__30360,G__30361));
})()});
return obj30359;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30356,G__30357) : helix.core.jsx.call(null,G__30356,G__30357));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30272,G__30273) : helix.core.jsxs.call(null,G__30272,G__30273));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__30362 = G__30268;
(G__30362.displayName = "app.ui.kits.connect.URS-60.toolbar-panel/URS-60-toolbar-panel");

return G__30362;
} else {
return G__30268;
}
})();




//# sourceMappingURL=app.ui.kits.connect.URS_60.toolbar_panel.js.map
