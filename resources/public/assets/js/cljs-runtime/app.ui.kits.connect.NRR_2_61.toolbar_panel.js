goog.provide('app.ui.kits.connect.NRR_2_61.toolbar_panel');

app.ui.kits.connect.NRR_2_61.toolbar_panel.NRR_2_61_toolbar_panel = (function (){var G__38663 = (function app$ui$kits$connect$NRR_2_61$toolbar_panel$NRR_2_61_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38673 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-61","show-toolbar","NRR-2-61/show-toolbar",1626880820)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__38857 = helix.core.Fragment;
var G__38858 = ({"children": [(function (){var G__38866 = app.ui.shared.components.toolbar.title;
var G__38867 = (function (){var obj38875 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj38875;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38866,G__38867) : helix.core.jsx.call(null,G__38866,G__38867));
})(),(function (){var G__38910 = app.ui.shared.components.toolbar.title;
var G__38911 = (function (){var obj38925 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61"});
return obj38925;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38910,G__38911) : helix.core.jsx.call(null,G__38910,G__38911));
})(),(function (){var G__38946 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38947 = (function (){var obj38953 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__38972 = app.ui.shared.components.toolbar.btn_replace;
var G__38973 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38972,G__38973) : helix.core.jsx.call(null,G__38972,G__38973));
})()});
return obj38953;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38946,G__38947) : helix.core.jsx.call(null,G__38946,G__38947));
})(),(function (){var G__38986 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38987 = (function (){var obj38992 = ({"x":(648),"y":(54),"children":(function (){var G__38999 = app.ui.shared.components.toolbar.btn_divider;
var G__39000 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38999,G__39000) : helix.core.jsx.call(null,G__38999,G__39000));
})()});
return obj38992;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38986,G__38987) : helix.core.jsx.call(null,G__38986,G__38987));
})(),(function (){var G__39011 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39012 = (function (){var obj39017 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__39034 = app.ui.shared.components.toolbar.btn_error;
var G__39035 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39034,G__39035) : helix.core.jsx.call(null,G__39034,G__39035));
})()});
return obj39017;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39011,G__39012) : helix.core.jsx.call(null,G__39011,G__39012));
})(),(function (){var G__39053 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39054 = (function (){var obj39067 = ({"x":(758),"y":(54),"children":(function (){var G__39072 = app.ui.shared.components.toolbar.btn_divider;
var G__39073 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39072,G__39073) : helix.core.jsx.call(null,G__39072,G__39073));
})()});
return obj39067;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39053,G__39054) : helix.core.jsx.call(null,G__39053,G__39054));
})(),(function (){var G__39087 = app.ui.shared.components.toolbar.switch_panel;
var G__39088 = (function (){var obj39095 = ({"x":(808),"y":(12),"children":[(function (){var G__39100 = app.ui.shared.components.toolbar.switch$;
var G__39101 = (function (){var obj39108 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-61","change","NRR-2-61/change",-443288123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj39108;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39100,G__39101) : helix.core.jsx.call(null,G__39100,G__39101));
})(),(function (){var G__39135 = app.ui.shared.components.toolbar.switch$;
var G__39136 = (function (){var obj39148 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-61","change","NRR-2-61/change",-443288123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj39148;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39135,G__39136) : helix.core.jsx.call(null,G__39135,G__39136));
})(),(function (){var G__39173 = app.ui.shared.components.toolbar.switch$;
var G__39174 = (function (){var obj39190 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-61","change","NRR-2-61/change",-443288123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj39190;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39173,G__39174) : helix.core.jsx.call(null,G__39173,G__39174));
})(),(function (){var G__39200 = app.ui.shared.components.toolbar.switch$;
var G__39201 = (function (){var obj39215 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-61","change","NRR-2-61/change",-443288123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj39215;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39200,G__39201) : helix.core.jsx.call(null,G__39200,G__39201));
})()]});
return obj39095;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39087,G__39088) : helix.core.jsxs.call(null,G__39087,G__39088));
})(),(function (){var G__39220 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39221 = (function (){var obj39227 = ({"x":(954),"y":(54),"children":(function (){var G__39228 = app.ui.shared.components.toolbar.btn_divider;
var G__39229 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39228,G__39229) : helix.core.jsx.call(null,G__39228,G__39229));
})()});
return obj39227;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39220,G__39221) : helix.core.jsx.call(null,G__39220,G__39221));
})(),(function (){var G__39239 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39240 = (function (){var obj39250 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-61","change","NRR-2-61/change",-443288123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__39261 = app.ui.shared.components.toolbar.btn_full_screen;
var G__39262 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39261,G__39262) : helix.core.jsx.call(null,G__39261,G__39262));
})()});
return obj39250;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39239,G__39240) : helix.core.jsx.call(null,G__39239,G__39240));
})(),(function (){var G__39276 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39277 = (function (){var obj39287 = ({"x":(1064),"y":(54),"children":(function (){var G__39294 = app.ui.shared.components.toolbar.btn_divider;
var G__39295 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39294,G__39295) : helix.core.jsx.call(null,G__39294,G__39295));
})()});
return obj39287;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39276,G__39277) : helix.core.jsx.call(null,G__39276,G__39277));
})(),(function (){var G__39304 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39305 = (function (){var obj39311 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-61","change","NRR-2-61/change",-443288123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__39320 = app.ui.shared.components.toolbar.btn_settings;
var G__39321 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39320,G__39321) : helix.core.jsx.call(null,G__39320,G__39321));
})()});
return obj39311;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39304,G__39305) : helix.core.jsx.call(null,G__39304,G__39305));
})(),(function (){var G__39328 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39329 = (function (){var obj39336 = ({"x":(1174),"y":(54),"children":(function (){var G__39339 = app.ui.shared.components.toolbar.btn_divider;
var G__39340 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39339,G__39340) : helix.core.jsx.call(null,G__39339,G__39340));
})()});
return obj39336;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39328,G__39329) : helix.core.jsx.call(null,G__39328,G__39329));
})(),(function (){var G__39346 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39347 = (function (){var obj39351 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__39360 = app.ui.shared.components.toolbar.btn_info;
var G__39361 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39360,G__39361) : helix.core.jsx.call(null,G__39360,G__39361));
})()});
return obj39351;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39346,G__39347) : helix.core.jsx.call(null,G__39346,G__39347));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38857,G__38858) : helix.core.jsxs.call(null,G__38857,G__38858));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__39368 = G__38663;
(G__39368.displayName = "app.ui.kits.connect.NRR-2-61.toolbar-panel/NRR-2-61-toolbar-panel");

return G__39368;
} else {
return G__38663;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_61.toolbar_panel.js.map
