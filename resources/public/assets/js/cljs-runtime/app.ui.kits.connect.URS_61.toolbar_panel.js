goog.provide('app.ui.kits.connect.URS_61.toolbar_panel');

app.ui.kits.connect.URS_61.toolbar_panel.URS_61_toolbar_panel = (function (){var G__31913 = (function app$ui$kits$connect$URS_61$toolbar_panel$URS_61_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31914 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URS-61-show-toolbar","URS-61-show-toolbar",-707856974)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen_QMARK_ = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
var switch_5 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(5)], null)], null));
var switch_6 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(6)], null)], null));
var switch_7 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(7)], null)], null));
var switch_8 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(8)], null)], null));
var switch_9 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(9)], null)], null));
var switch_10 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"high-limiter","high-limiter",-1548641404),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URS 61",new cljs.core.Keyword(null,"switches","switches",2013040888),(10)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__31917 = helix.core.Fragment;
var G__31918 = ({"children": [(function (){var G__31919 = app.ui.shared.components.toolbar.title;
var G__31920 = (function (){var obj31922 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Limiter"});
return obj31922;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31919,G__31920) : helix.core.jsx.call(null,G__31919,G__31920));
})(),(function (){var G__31923 = app.ui.shared.components.toolbar.title;
var G__31924 = (function (){var obj31926 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URS 61"});
return obj31926;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31923,G__31924) : helix.core.jsx.call(null,G__31923,G__31924));
})(),(function (){var G__31927 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31928 = (function (){var obj31930 = ({"x":(597),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__31931 = app.ui.shared.components.toolbar.btn_replace;
var G__31932 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31931,G__31932) : helix.core.jsx.call(null,G__31931,G__31932));
})()});
return obj31930;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31927,G__31928) : helix.core.jsx.call(null,G__31927,G__31928));
})(),(function (){var G__31933 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31934 = (function (){var obj31936 = ({"x":(657),"y":(54),"children":(function (){var G__31937 = app.ui.shared.components.toolbar.btn_divider;
var G__31938 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31937,G__31938) : helix.core.jsx.call(null,G__31937,G__31938));
})()});
return obj31936;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31933,G__31934) : helix.core.jsx.call(null,G__31933,G__31934));
})(),(function (){var G__31939 = app.ui.shared.components.toolbar.switch_panel;
var G__31940 = (function (){var obj31942 = ({"x":(707),"y":(12),"children":[(function (){var G__31943 = app.ui.shared.components.toolbar.switch$;
var G__31944 = (function (){var obj31946 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj31946;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31943,G__31944) : helix.core.jsx.call(null,G__31943,G__31944));
})(),(function (){var G__31947 = app.ui.shared.components.toolbar.switch$;
var G__31948 = (function (){var obj31950 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj31950;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31947,G__31948) : helix.core.jsx.call(null,G__31947,G__31948));
})(),(function (){var G__31951 = app.ui.shared.components.toolbar.switch$;
var G__31952 = (function (){var obj31954 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj31954;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31951,G__31952) : helix.core.jsx.call(null,G__31951,G__31952));
})(),(function (){var G__31956 = app.ui.shared.components.toolbar.switch$;
var G__31957 = (function (){var obj31959 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj31959;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31956,G__31957) : helix.core.jsx.call(null,G__31956,G__31957));
})(),(function (){var G__31964 = app.ui.shared.components.toolbar.switch$;
var G__31965 = (function (){var obj31969 = ({"x":(140),"value":switch_5,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(5)], null),cljs.core.not(switch_5)], null)], null));
}),"legend":(5),"inactive":inactive});
return obj31969;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31964,G__31965) : helix.core.jsx.call(null,G__31964,G__31965));
})(),(function (){var G__31976 = app.ui.shared.components.toolbar.switch$;
var G__31977 = (function (){var obj31981 = ({"x":(175),"value":switch_6,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(6)], null),cljs.core.not(switch_6)], null)], null));
}),"legend":(6),"inactive":inactive});
return obj31981;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31976,G__31977) : helix.core.jsx.call(null,G__31976,G__31977));
})(),(function (){var G__31988 = app.ui.shared.components.toolbar.switch$;
var G__31989 = (function (){var obj31991 = ({"x":(210),"value":switch_7,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(7)], null),cljs.core.not(switch_7)], null)], null));
}),"legend":(7),"inactive":inactive});
return obj31991;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31988,G__31989) : helix.core.jsx.call(null,G__31988,G__31989));
})(),(function (){var G__31996 = app.ui.shared.components.toolbar.switch$;
var G__31997 = (function (){var obj31999 = ({"x":(245),"value":switch_8,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(8)], null),cljs.core.not(switch_8)], null)], null));
}),"legend":(8),"inactive":inactive});
return obj31999;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31996,G__31997) : helix.core.jsx.call(null,G__31996,G__31997));
})(),(function (){var G__32006 = app.ui.shared.components.toolbar.switch$;
var G__32007 = (function (){var obj32011 = ({"x":(280),"value":switch_9,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(9)], null),cljs.core.not(switch_9)], null)], null));
}),"legend":(9),"inactive":inactive});
return obj32011;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32006,G__32007) : helix.core.jsx.call(null,G__32006,G__32007));
})(),(function (){var G__32012 = app.ui.shared.components.toolbar.switch$;
var G__32014 = (function (){var obj32017 = ({"x":(315),"value":switch_10,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(10)], null),cljs.core.not(switch_10)], null)], null));
}),"legend":(10),"inactive":inactive});
return obj32017;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32012,G__32014) : helix.core.jsx.call(null,G__32012,G__32014));
})()]});
return obj31942;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31939,G__31940) : helix.core.jsxs.call(null,G__31939,G__31940));
})(),(function (){var G__32024 = app.ui.shared.components.toolbar.btn_wrapper;
var G__32025 = (function (){var obj32027 = ({"x":(1064),"y":(54),"children":(function (){var G__32032 = app.ui.shared.components.toolbar.btn_divider;
var G__32033 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32032,G__32033) : helix.core.jsx.call(null,G__32032,G__32033));
})()});
return obj32027;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32024,G__32025) : helix.core.jsx.call(null,G__32024,G__32025));
})(),(function (){var G__32034 = app.ui.shared.components.toolbar.btn_wrapper;
var G__32035 = (function (){var obj32039 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URS-61","change-URS-61",690015894),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen_QMARK_)], null)], null));
}),"children":(function (){var G__32042 = app.ui.shared.components.toolbar.btn_full_screen;
var G__32043 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32042,G__32043) : helix.core.jsx.call(null,G__32042,G__32043));
})()});
return obj32039;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32034,G__32035) : helix.core.jsx.call(null,G__32034,G__32035));
})(),(function (){var G__32048 = app.ui.shared.components.toolbar.btn_wrapper;
var G__32049 = (function (){var obj32051 = ({"x":(1174),"y":(54),"children":(function (){var G__32056 = app.ui.shared.components.toolbar.btn_divider;
var G__32057 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32056,G__32057) : helix.core.jsx.call(null,G__32056,G__32057));
})()});
return obj32051;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32048,G__32049) : helix.core.jsx.call(null,G__32048,G__32049));
})(),(function (){var G__32060 = app.ui.shared.components.toolbar.btn_wrapper;
var G__32061 = (function (){var obj32065 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Limiter",new cljs.core.Keyword(null,"text","text",-1790561697),"The URS 60/URS 61 safety control unit cyclically evaluates data telegrams from up to four safety sensors of types NRG 1..., NRG 2\u2026, LRG 1\u2026 and TRV 5. The data are transferred via ISO 11898 CAN bus using the CAN open protocol, and saved. The safety functions are monitored by cyclical self-tests. The two integrated relays are switched off in the event of alarms or errors. Function tests and failure diagnosis can be performed using the control unit or an operating terminal. The data telegrams contain the following information: \u25A0 Sensor alarms if the limits are exceeded \u25A0 Fault indications on the occurrence of faults in electronic or mechanical parts \u25A0 Excessive temperature in the sensor terminal boxes Behaviour in the event of alarms When level, temperature or conductivity alarms occur, both output contacts open after a power-off delay and this interrupts the safety circuit (fail-safe position). The safety control unit does not lock independently; this function must be implemented in the downstream circuit. The URS 60 or URS 61 can only activate one safety circuit (heater or pump) at any one time. The safety circuit is interrupted without a delay if the following fault indications occur: \u25A0 Fault in sensors (negative self-test, excessively high temperature in terminal box) \u25A0 Fault in control unit (negative self-test) \u25A0 Communication failure  Behaviour in the event of fault indications Cyclical self-tests monitor the safety functions of the equipment in the safety control unit and sensors. Fault indications are updated with each self-test. If there are no faults, the message is automatically deleted and the output contacts close once more. Alarms and fault indications are displayed by LEDs or an operating unit. In addition, you can choose to have alarms displayed on an external signalling device via the signalling outputs, either with or without a delay. Faults are always indicated without a delay, however."], null)], null));
}),"children":(function (){var G__32068 = app.ui.shared.components.toolbar.btn_info;
var G__32069 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32068,G__32069) : helix.core.jsx.call(null,G__32068,G__32069));
})()});
return obj32065;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32060,G__32061) : helix.core.jsx.call(null,G__32060,G__32061));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31917,G__31918) : helix.core.jsxs.call(null,G__31917,G__31918));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__32074 = G__31913;
(G__32074.displayName = "app.ui.kits.connect.URS-61.toolbar-panel/URS-61-toolbar-panel");

return G__32074;
} else {
return G__31913;
}
})();




//# sourceMappingURL=app.ui.kits.connect.URS_61.toolbar_panel.js.map
