goog.provide('app.ui.kits.connect.NRR_2_61_3C.toolbar_panel');

app.ui.kits.connect.NRR_2_61_3C.toolbar_panel.NRR_2_61_3C_toolbar_panel = (function (){var G__38631 = (function app$ui$kits$connect$NRR_2_61_3C$toolbar_panel$NRR_2_61_3C_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-61-3C","show-toolbar","NRR-2-61-3C/show-toolbar",-2058773729)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__38667 = helix.core.Fragment;
var G__38668 = ({"children": [(function (){var G__38669 = app.ui.shared.components.toolbar.title;
var G__38670 = (function (){var obj38679 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj38679;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38669,G__38670) : helix.core.jsx.call(null,G__38669,G__38670));
})(),(function (){var G__38695 = app.ui.shared.components.toolbar.title;
var G__38696 = (function (){var obj38702 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61 3C"});
return obj38702;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38695,G__38696) : helix.core.jsx.call(null,G__38695,G__38696));
})(),(function (){var G__38714 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38715 = (function (){var obj38721 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__38730 = app.ui.shared.components.toolbar.btn_replace;
var G__38731 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38730,G__38731) : helix.core.jsx.call(null,G__38730,G__38731));
})()});
return obj38721;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38714,G__38715) : helix.core.jsx.call(null,G__38714,G__38715));
})(),(function (){var G__38749 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38750 = (function (){var obj38756 = ({"x":(648),"y":(54),"children":(function (){var G__38760 = app.ui.shared.components.toolbar.btn_divider;
var G__38761 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38760,G__38761) : helix.core.jsx.call(null,G__38760,G__38761));
})()});
return obj38756;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38749,G__38750) : helix.core.jsx.call(null,G__38749,G__38750));
})(),(function (){var G__38781 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38783 = (function (){var obj38790 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__38812 = app.ui.shared.components.toolbar.btn_error;
var G__38813 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38812,G__38813) : helix.core.jsx.call(null,G__38812,G__38813));
})()});
return obj38790;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38781,G__38783) : helix.core.jsx.call(null,G__38781,G__38783));
})(),(function (){var G__38824 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38825 = (function (){var obj38831 = ({"x":(758),"y":(54),"children":(function (){var G__38840 = app.ui.shared.components.toolbar.btn_divider;
var G__38841 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38840,G__38841) : helix.core.jsx.call(null,G__38840,G__38841));
})()});
return obj38831;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38824,G__38825) : helix.core.jsx.call(null,G__38824,G__38825));
})(),(function (){var G__38862 = app.ui.shared.components.toolbar.switch_panel;
var G__38863 = (function (){var obj38871 = ({"x":(808),"y":(12),"children":[(function (){var G__38883 = app.ui.shared.components.toolbar.switch$;
var G__38884 = (function (){var obj38891 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-61-3C","change","NRR-2-61-3C/change",-1195207214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj38891;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38883,G__38884) : helix.core.jsx.call(null,G__38883,G__38884));
})(),(function (){var G__38914 = app.ui.shared.components.toolbar.switch$;
var G__38915 = (function (){var obj38933 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-61-3C","change","NRR-2-61-3C/change",-1195207214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj38933;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38914,G__38915) : helix.core.jsx.call(null,G__38914,G__38915));
})(),(function (){var G__38960 = app.ui.shared.components.toolbar.switch$;
var G__38961 = (function (){var obj38971 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-61-3C","change","NRR-2-61-3C/change",-1195207214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj38971;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38960,G__38961) : helix.core.jsx.call(null,G__38960,G__38961));
})(),(function (){var G__38989 = app.ui.shared.components.toolbar.switch$;
var G__38990 = (function (){var obj38996 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-61-3C","change","NRR-2-61-3C/change",-1195207214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj38996;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38989,G__38990) : helix.core.jsx.call(null,G__38989,G__38990));
})()]});
return obj38871;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38862,G__38863) : helix.core.jsxs.call(null,G__38862,G__38863));
})(),(function (){var G__39022 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39023 = (function (){var obj39029 = ({"x":(954),"y":(54),"children":(function (){var G__39040 = app.ui.shared.components.toolbar.btn_divider;
var G__39041 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39040,G__39041) : helix.core.jsx.call(null,G__39040,G__39041));
})()});
return obj39029;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39022,G__39023) : helix.core.jsx.call(null,G__39022,G__39023));
})(),(function (){var G__39055 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39056 = (function (){var obj39065 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-61-3C","change","NRR-2-61-3C/change",-1195207214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__39078 = app.ui.shared.components.toolbar.btn_full_screen;
var G__39079 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39078,G__39079) : helix.core.jsx.call(null,G__39078,G__39079));
})()});
return obj39065;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39055,G__39056) : helix.core.jsx.call(null,G__39055,G__39056));
})(),(function (){var G__39098 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39099 = (function (){var obj39105 = ({"x":(1064),"y":(54),"children":(function (){var G__39114 = app.ui.shared.components.toolbar.btn_divider;
var G__39115 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39114,G__39115) : helix.core.jsx.call(null,G__39114,G__39115));
})()});
return obj39105;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39098,G__39099) : helix.core.jsx.call(null,G__39098,G__39099));
})(),(function (){var G__39133 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39134 = (function (){var obj39146 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("NRR-2-61-3C","change","NRR-2-61-3C/change",-1195207214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__39163 = app.ui.shared.components.toolbar.btn_settings;
var G__39164 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39163,G__39164) : helix.core.jsx.call(null,G__39163,G__39164));
})()});
return obj39146;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39133,G__39134) : helix.core.jsx.call(null,G__39133,G__39134));
})(),(function (){var G__39185 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39187 = (function (){var obj39244 = ({"x":(1174),"y":(54),"children":(function (){var G__39245 = app.ui.shared.components.toolbar.btn_divider;
var G__39246 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39245,G__39246) : helix.core.jsx.call(null,G__39245,G__39246));
})()});
return obj39244;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39185,G__39187) : helix.core.jsx.call(null,G__39185,G__39187));
})(),(function (){var G__39257 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39258 = (function (){var obj39269 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__39278 = app.ui.shared.components.toolbar.btn_info;
var G__39279 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39278,G__39279) : helix.core.jsx.call(null,G__39278,G__39279));
})()});
return obj39269;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39257,G__39258) : helix.core.jsx.call(null,G__39257,G__39258));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38667,G__38668) : helix.core.jsxs.call(null,G__38667,G__38668));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__39303 = G__38631;
(G__39303.displayName = "app.ui.kits.connect.NRR-2-61-3C.toolbar-panel/NRR-2-61-3C-toolbar-panel");

return G__39303;
} else {
return G__38631;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_61_3C.toolbar_panel.js.map
