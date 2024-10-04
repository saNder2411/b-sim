goog.provide('app.ui.kits.connect.URS_60.toolbar_panel');

app.ui.kits.connect.URS_60.toolbar_panel.URS_60_toolbar_panel = (function (){var G__39015 = (function app$ui$kits$connect$URS_60$toolbar_panel$URS_60_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__39042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-60","show-toolbar","URS-60/show-toolbar",-294354376)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
var full_screen_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
var switch_5 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(5)], null)], null));
var switch_6 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(6)], null)], null));
var switch_7 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(7)], null)], null));
var switch_8 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(8)], null)], null));
var switch_9 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(9)], null)], null));
var switch_10 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"low-limiter","low-limiter",219318558),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(10)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__39119 = helix.core.Fragment;
var G__39120 = ({"children": [(function (){var G__39127 = app.ui.shared.components.toolbar.title;
var G__39128 = (function (){var obj39132 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Limiter"});
return obj39132;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39127,G__39128) : helix.core.jsx.call(null,G__39127,G__39128));
})(),(function (){var G__39156 = app.ui.shared.components.toolbar.title;
var G__39158 = (function (){var obj39160 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URS 60"});
return obj39160;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39156,G__39158) : helix.core.jsx.call(null,G__39156,G__39158));
})(),(function (){var G__39175 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39176 = (function (){var obj39217 = ({"x":(597),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__39233 = app.ui.shared.components.toolbar.btn_replace;
var G__39234 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39233,G__39234) : helix.core.jsx.call(null,G__39233,G__39234));
})()});
return obj39217;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39175,G__39176) : helix.core.jsx.call(null,G__39175,G__39176));
})(),(function (){var G__39241 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39242 = (function (){var obj39248 = ({"x":(657),"y":(54),"children":(function (){var G__39255 = app.ui.shared.components.toolbar.btn_divider;
var G__39256 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39255,G__39256) : helix.core.jsx.call(null,G__39255,G__39256));
})()});
return obj39248;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39241,G__39242) : helix.core.jsx.call(null,G__39241,G__39242));
})(),(function (){var G__39266 = app.ui.shared.components.toolbar.switch_panel;
var G__39267 = (function (){var obj39273 = ({"x":(707),"y":(12),"children":[(function (){var G__39280 = app.ui.shared.components.toolbar.switch$;
var G__39281 = (function (){var obj39291 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-60","change","URS-60/change",-2014335191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj39291;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39280,G__39281) : helix.core.jsx.call(null,G__39280,G__39281));
})(),(function (){var G__39306 = app.ui.shared.components.toolbar.switch$;
var G__39307 = (function (){var obj39313 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-60","change","URS-60/change",-2014335191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj39313;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39306,G__39307) : helix.core.jsx.call(null,G__39306,G__39307));
})(),(function (){var G__39324 = app.ui.shared.components.toolbar.switch$;
var G__39325 = (function (){var obj39333 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-60","change","URS-60/change",-2014335191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj39333;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39324,G__39325) : helix.core.jsx.call(null,G__39324,G__39325));
})(),(function (){var G__39343 = app.ui.shared.components.toolbar.switch$;
var G__39344 = (function (){var obj39353 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-60","change","URS-60/change",-2014335191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj39353;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39343,G__39344) : helix.core.jsx.call(null,G__39343,G__39344));
})(),(function (){var G__39364 = app.ui.shared.components.toolbar.switch$;
var G__39365 = (function (){var obj39372 = ({"x":(140),"value":switch_5,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-60","change","URS-60/change",-2014335191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(5)], null),cljs.core.not(switch_5)], null)], null));
}),"legend":(5),"inactive":inactive});
return obj39372;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39364,G__39365) : helix.core.jsx.call(null,G__39364,G__39365));
})(),(function (){var G__39383 = app.ui.shared.components.toolbar.switch$;
var G__39384 = (function (){var obj39386 = ({"x":(175),"value":switch_6,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-60","change","URS-60/change",-2014335191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(6)], null),cljs.core.not(switch_6)], null)], null));
}),"legend":(6),"inactive":inactive});
return obj39386;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39383,G__39384) : helix.core.jsx.call(null,G__39383,G__39384));
})(),(function (){var G__39394 = app.ui.shared.components.toolbar.switch$;
var G__39395 = (function (){var obj39401 = ({"x":(210),"value":switch_7,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-60","change","URS-60/change",-2014335191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(7)], null),cljs.core.not(switch_7)], null)], null));
}),"legend":(7),"inactive":inactive});
return obj39401;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39394,G__39395) : helix.core.jsx.call(null,G__39394,G__39395));
})(),(function (){var G__39408 = app.ui.shared.components.toolbar.switch$;
var G__39409 = (function (){var obj39411 = ({"x":(245),"value":switch_8,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-60","change","URS-60/change",-2014335191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(8)], null),cljs.core.not(switch_8)], null)], null));
}),"legend":(8),"inactive":inactive});
return obj39411;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39408,G__39409) : helix.core.jsx.call(null,G__39408,G__39409));
})(),(function (){var G__39420 = app.ui.shared.components.toolbar.switch$;
var G__39421 = (function (){var obj39423 = ({"x":(280),"value":switch_9,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-60","change","URS-60/change",-2014335191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(9)], null),cljs.core.not(switch_9)], null)], null));
}),"legend":(9),"inactive":inactive});
return obj39423;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39420,G__39421) : helix.core.jsx.call(null,G__39420,G__39421));
})(),(function (){var G__39426 = app.ui.shared.components.toolbar.switch$;
var G__39427 = (function (){var obj39431 = ({"x":(315),"value":switch_10,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-60","change","URS-60/change",-2014335191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(10)], null),cljs.core.not(switch_10)], null)], null));
}),"legend":(10),"inactive":inactive});
return obj39431;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39426,G__39427) : helix.core.jsx.call(null,G__39426,G__39427));
})()]});
return obj39273;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39266,G__39267) : helix.core.jsxs.call(null,G__39266,G__39267));
})(),(function (){var G__39433 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39434 = (function (){var obj39436 = ({"x":(1064),"y":(54),"children":(function (){var G__39438 = app.ui.shared.components.toolbar.btn_divider;
var G__39439 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39438,G__39439) : helix.core.jsx.call(null,G__39438,G__39439));
})()});
return obj39436;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39433,G__39434) : helix.core.jsx.call(null,G__39433,G__39434));
})(),(function (){var G__39441 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39442 = (function (){var obj39445 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-60","change","URS-60/change",-2014335191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen_QMARK_)], null)], null));
}),"children":(function (){var G__39450 = app.ui.shared.components.toolbar.btn_full_screen;
var G__39451 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39450,G__39451) : helix.core.jsx.call(null,G__39450,G__39451));
})()});
return obj39445;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39441,G__39442) : helix.core.jsx.call(null,G__39441,G__39442));
})(),(function (){var G__39452 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39453 = (function (){var obj39455 = ({"x":(1174),"y":(54),"children":(function (){var G__39456 = app.ui.shared.components.toolbar.btn_divider;
var G__39457 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39456,G__39457) : helix.core.jsx.call(null,G__39456,G__39457));
})()});
return obj39455;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39452,G__39453) : helix.core.jsx.call(null,G__39452,G__39453));
})(),(function (){var G__39462 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39463 = (function (){var obj39467 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Limiter",new cljs.core.Keyword(null,"text","text",-1790561697),"The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2\u2026, LRG 1\u2026 and TRV 5. The data are transferred via ISO 11898 CAN bus using the CAN open protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: \u25A0 Sensor alarms if the limits are exceeded \u25A0 Fault indications on the occurrence of faults in electronic or mechanical parts \u25A0 Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: \u25A0 Fault in sensors (negative self-test, excessively high temperature in terminal box) \u25A0 Fault in control unit (negative self-test) \u25A0 Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."], null)], null));
}),"children":(function (){var G__39470 = app.ui.shared.components.toolbar.btn_info;
var G__39471 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39470,G__39471) : helix.core.jsx.call(null,G__39470,G__39471));
})()});
return obj39467;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39462,G__39463) : helix.core.jsx.call(null,G__39462,G__39463));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39119,G__39120) : helix.core.jsxs.call(null,G__39119,G__39120));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__39473 = G__39015;
(G__39473.displayName = "app.ui.kits.connect.URS-60.toolbar-panel/URS-60-toolbar-panel");

return G__39473;
} else {
return G__39015;
}
})();




//# sourceMappingURL=app.ui.kits.connect.URS_60.toolbar_panel.js.map
