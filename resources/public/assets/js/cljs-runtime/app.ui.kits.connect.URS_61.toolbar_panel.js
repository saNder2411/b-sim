goog.provide('app.ui.kits.connect.URS_61.toolbar_panel');

app.ui.kits.connect.URS_61.toolbar_panel.URS_61_toolbar_panel = (function (){var G__38780 = (function app$ui$kits$connect$URS_61$toolbar_panel$URS_61_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38799 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-61","show-toolbar","URS-61/show-toolbar",-294354379)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
var full_screen_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
var switch_5 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(5)], null)], null));
var switch_6 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(6)], null)], null));
var switch_7 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(7)], null)], null));
var switch_8 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(8)], null)], null));
var switch_9 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(9)], null)], null));
var switch_10 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(10)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__38868 = helix.core.Fragment;
var G__38869 = ({"children": [(function (){var G__38876 = app.ui.shared.components.toolbar.title;
var G__38877 = (function (){var obj38889 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Limiter"});
return obj38889;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38876,G__38877) : helix.core.jsx.call(null,G__38876,G__38877));
})(),(function (){var G__38906 = app.ui.shared.components.toolbar.title;
var G__38907 = (function (){var obj38922 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URS 61"});
return obj38922;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38906,G__38907) : helix.core.jsx.call(null,G__38906,G__38907));
})(),(function (){var G__38944 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38945 = (function (){var obj38949 = ({"x":(597),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__38962 = app.ui.shared.components.toolbar.btn_replace;
var G__38965 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38962,G__38965) : helix.core.jsx.call(null,G__38962,G__38965));
})()});
return obj38949;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38944,G__38945) : helix.core.jsx.call(null,G__38944,G__38945));
})(),(function (){var G__38984 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38985 = (function (){var obj39008 = ({"x":(657),"y":(54),"children":(function (){var G__39009 = app.ui.shared.components.toolbar.btn_divider;
var G__39010 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39009,G__39010) : helix.core.jsx.call(null,G__39009,G__39010));
})()});
return obj39008;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38984,G__38985) : helix.core.jsx.call(null,G__38984,G__38985));
})(),(function (){var G__39030 = app.ui.shared.components.toolbar.switch_panel;
var G__39031 = (function (){var obj39039 = ({"x":(707),"y":(12),"children":[(function (){var G__39047 = app.ui.shared.components.toolbar.switch$;
var G__39048 = (function (){var obj39052 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-61","change","URS-61/change",-2014335188),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj39052;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39047,G__39048) : helix.core.jsx.call(null,G__39047,G__39048));
})(),(function (){var G__39076 = app.ui.shared.components.toolbar.switch$;
var G__39077 = (function (){var obj39084 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-61","change","URS-61/change",-2014335188),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj39084;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39076,G__39077) : helix.core.jsx.call(null,G__39076,G__39077));
})(),(function (){var G__39106 = app.ui.shared.components.toolbar.switch$;
var G__39109 = (function (){var obj39122 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-61","change","URS-61/change",-2014335188),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj39122;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39106,G__39109) : helix.core.jsx.call(null,G__39106,G__39109));
})(),(function (){var G__39143 = app.ui.shared.components.toolbar.switch$;
var G__39144 = (function (){var obj39153 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-61","change","URS-61/change",-2014335188),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj39153;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39143,G__39144) : helix.core.jsx.call(null,G__39143,G__39144));
})(),(function (){var G__39179 = app.ui.shared.components.toolbar.switch$;
var G__39180 = (function (){var obj39198 = ({"x":(140),"value":switch_5,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-61","change","URS-61/change",-2014335188),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(5)], null),cljs.core.not(switch_5)], null)], null));
}),"legend":(5),"inactive":inactive});
return obj39198;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39179,G__39180) : helix.core.jsx.call(null,G__39179,G__39180));
})(),(function (){var G__39209 = app.ui.shared.components.toolbar.switch$;
var G__39210 = (function (){var obj39213 = ({"x":(175),"value":switch_6,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-61","change","URS-61/change",-2014335188),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(6)], null),cljs.core.not(switch_6)], null)], null));
}),"legend":(6),"inactive":inactive});
return obj39213;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39209,G__39210) : helix.core.jsx.call(null,G__39209,G__39210));
})(),(function (){var G__39222 = app.ui.shared.components.toolbar.switch$;
var G__39223 = (function (){var obj39252 = ({"x":(210),"value":switch_7,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-61","change","URS-61/change",-2014335188),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(7)], null),cljs.core.not(switch_7)], null)], null));
}),"legend":(7),"inactive":inactive});
return obj39252;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39222,G__39223) : helix.core.jsx.call(null,G__39222,G__39223));
})(),(function (){var G__39264 = app.ui.shared.components.toolbar.switch$;
var G__39265 = (function (){var obj39271 = ({"x":(245),"value":switch_8,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-61","change","URS-61/change",-2014335188),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(8)], null),cljs.core.not(switch_8)], null)], null));
}),"legend":(8),"inactive":inactive});
return obj39271;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39264,G__39265) : helix.core.jsx.call(null,G__39264,G__39265));
})(),(function (){var G__39282 = app.ui.shared.components.toolbar.switch$;
var G__39283 = (function (){var obj39289 = ({"x":(280),"value":switch_9,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-61","change","URS-61/change",-2014335188),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(9)], null),cljs.core.not(switch_9)], null)], null));
}),"legend":(9),"inactive":inactive});
return obj39289;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39282,G__39283) : helix.core.jsx.call(null,G__39282,G__39283));
})(),(function (){var G__39297 = app.ui.shared.components.toolbar.switch$;
var G__39298 = (function (){var obj39302 = ({"x":(315),"value":switch_10,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-61","change","URS-61/change",-2014335188),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(10)], null),cljs.core.not(switch_10)], null)], null));
}),"legend":(10),"inactive":inactive});
return obj39302;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39297,G__39298) : helix.core.jsx.call(null,G__39297,G__39298));
})()]});
return obj39039;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39030,G__39031) : helix.core.jsxs.call(null,G__39030,G__39031));
})(),(function (){var G__39314 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39315 = (function (){var obj39319 = ({"x":(1064),"y":(54),"children":(function (){var G__39322 = app.ui.shared.components.toolbar.btn_divider;
var G__39323 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39322,G__39323) : helix.core.jsx.call(null,G__39322,G__39323));
})()});
return obj39319;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39314,G__39315) : helix.core.jsx.call(null,G__39314,G__39315));
})(),(function (){var G__39326 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39327 = (function (){var obj39331 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("URS-61","change","URS-61/change",-2014335188),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen_QMARK_)], null)], null));
}),"children":(function (){var G__39337 = app.ui.shared.components.toolbar.btn_full_screen;
var G__39338 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39337,G__39338) : helix.core.jsx.call(null,G__39337,G__39338));
})()});
return obj39331;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39326,G__39327) : helix.core.jsx.call(null,G__39326,G__39327));
})(),(function (){var G__39341 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39342 = (function (){var obj39349 = ({"x":(1174),"y":(54),"children":(function (){var G__39354 = app.ui.shared.components.toolbar.btn_divider;
var G__39355 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39354,G__39355) : helix.core.jsx.call(null,G__39354,G__39355));
})()});
return obj39349;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39341,G__39342) : helix.core.jsx.call(null,G__39341,G__39342));
})(),(function (){var G__39362 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39363 = (function (){var obj39367 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Limiter",new cljs.core.Keyword(null,"text","text",-1790561697),"The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2\u2026, LRG 1\u2026 and TRV 5. The data are transferred via ISO 11898 CAN bus using the CAN open protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: \u25A0 Sensor alarms if the limits are exceeded \u25A0 Fault indications on the occurrence of faults in electronic or mechanical parts \u25A0 Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: \u25A0 Fault in sensors (negative self-test, excessively high temperature in terminal box) \u25A0 Fault in control unit (negative self-test) \u25A0 Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."], null)], null));
}),"children":(function (){var G__39377 = app.ui.shared.components.toolbar.btn_info;
var G__39378 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39377,G__39378) : helix.core.jsx.call(null,G__39377,G__39378));
})()});
return obj39367;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39362,G__39363) : helix.core.jsx.call(null,G__39362,G__39363));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38868,G__38869) : helix.core.jsxs.call(null,G__38868,G__38869));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__39387 = G__38780;
(G__39387.displayName = "app.ui.kits.connect.URS-61.toolbar-panel/URS-61-toolbar-panel");

return G__39387;
} else {
return G__38780;
}
})();




//# sourceMappingURL=app.ui.kits.connect.URS_61.toolbar_panel.js.map
