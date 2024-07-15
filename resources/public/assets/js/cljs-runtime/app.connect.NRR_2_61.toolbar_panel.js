goog.provide('app.connect.NRR_2_61.toolbar_panel');

app.connect.NRR_2_61.toolbar_panel.NRR_2_61_toolbar_panel = (function (){var G__30670 = (function app$connect$NRR_2_61$toolbar_panel$NRR_2_61_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-show-toolbar","NRR-2-61-show-toolbar",-1427340718)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__30674 = helix.core.Fragment;
var G__30675 = ({"children": [(function (){var G__30676 = app.shared.components.toolbar.title;
var G__30677 = (function (){var obj30679 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj30679;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30676,G__30677) : helix.core.jsx.call(null,G__30676,G__30677));
})(),(function (){var G__30680 = app.shared.components.toolbar.title;
var G__30681 = (function (){var obj30683 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61"});
return obj30683;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30680,G__30681) : helix.core.jsx.call(null,G__30680,G__30681));
})(),(function (){var G__30684 = app.shared.components.toolbar.btn_wrapper;
var G__30685 = (function (){var obj30687 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__30688 = app.shared.components.toolbar.btn_replace;
var G__30689 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30688,G__30689) : helix.core.jsx.call(null,G__30688,G__30689));
})()});
return obj30687;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30684,G__30685) : helix.core.jsx.call(null,G__30684,G__30685));
})(),(function (){var G__30690 = app.shared.components.toolbar.btn_wrapper;
var G__30691 = (function (){var obj30693 = ({"x":(648),"y":(54),"children":(function (){var G__30694 = app.shared.components.toolbar.btn_divider;
var G__30695 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30694,G__30695) : helix.core.jsx.call(null,G__30694,G__30695));
})()});
return obj30693;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30690,G__30691) : helix.core.jsx.call(null,G__30690,G__30691));
})(),(function (){var G__30696 = app.shared.components.toolbar.btn_wrapper;
var G__30697 = (function (){var obj30699 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__30700 = app.shared.components.toolbar.btn_error;
var G__30701 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30700,G__30701) : helix.core.jsx.call(null,G__30700,G__30701));
})()});
return obj30699;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30696,G__30697) : helix.core.jsx.call(null,G__30696,G__30697));
})(),(function (){var G__30702 = app.shared.components.toolbar.btn_wrapper;
var G__30703 = (function (){var obj30705 = ({"x":(758),"y":(54),"children":(function (){var G__30706 = app.shared.components.toolbar.btn_divider;
var G__30707 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30706,G__30707) : helix.core.jsx.call(null,G__30706,G__30707));
})()});
return obj30705;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30702,G__30703) : helix.core.jsx.call(null,G__30702,G__30703));
})(),(function (){var G__30708 = app.shared.components.toolbar.switch_panel;
var G__30709 = (function (){var obj30711 = ({"x":(808),"y":(12),"children":[(function (){var G__30712 = app.shared.components.toolbar.switch$;
var G__30713 = (function (){var obj30715 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj30715;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30712,G__30713) : helix.core.jsx.call(null,G__30712,G__30713));
})(),(function (){var G__30716 = app.shared.components.toolbar.switch$;
var G__30717 = (function (){var obj30719 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj30719;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30716,G__30717) : helix.core.jsx.call(null,G__30716,G__30717));
})(),(function (){var G__30720 = app.shared.components.toolbar.switch$;
var G__30721 = (function (){var obj30723 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj30723;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30720,G__30721) : helix.core.jsx.call(null,G__30720,G__30721));
})(),(function (){var G__30724 = app.shared.components.toolbar.switch$;
var G__30725 = (function (){var obj30727 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj30727;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30724,G__30725) : helix.core.jsx.call(null,G__30724,G__30725));
})()]});
return obj30711;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30708,G__30709) : helix.core.jsxs.call(null,G__30708,G__30709));
})(),(function (){var G__30728 = app.shared.components.toolbar.btn_wrapper;
var G__30729 = (function (){var obj30731 = ({"x":(954),"y":(54),"children":(function (){var G__30732 = app.shared.components.toolbar.btn_divider;
var G__30733 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30732,G__30733) : helix.core.jsx.call(null,G__30732,G__30733));
})()});
return obj30731;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30728,G__30729) : helix.core.jsx.call(null,G__30728,G__30729));
})(),(function (){var G__30734 = app.shared.components.toolbar.btn_wrapper;
var G__30735 = (function (){var obj30737 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__30738 = app.shared.components.toolbar.btn_full_screen;
var G__30739 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30738,G__30739) : helix.core.jsx.call(null,G__30738,G__30739));
})()});
return obj30737;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30734,G__30735) : helix.core.jsx.call(null,G__30734,G__30735));
})(),(function (){var G__30740 = app.shared.components.toolbar.btn_wrapper;
var G__30741 = (function (){var obj30743 = ({"x":(1064),"y":(54),"children":(function (){var G__30744 = app.shared.components.toolbar.btn_divider;
var G__30745 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30744,G__30745) : helix.core.jsx.call(null,G__30744,G__30745));
})()});
return obj30743;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30740,G__30741) : helix.core.jsx.call(null,G__30740,G__30741));
})(),(function (){var G__30746 = app.shared.components.toolbar.btn_wrapper;
var G__30747 = (function (){var obj30749 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__30750 = app.shared.components.toolbar.btn_settings;
var G__30751 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30750,G__30751) : helix.core.jsx.call(null,G__30750,G__30751));
})()});
return obj30749;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30746,G__30747) : helix.core.jsx.call(null,G__30746,G__30747));
})(),(function (){var G__30752 = app.shared.components.toolbar.btn_wrapper;
var G__30753 = (function (){var obj30755 = ({"x":(1174),"y":(54),"children":(function (){var G__30756 = app.shared.components.toolbar.btn_divider;
var G__30757 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30756,G__30757) : helix.core.jsx.call(null,G__30756,G__30757));
})()});
return obj30755;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30752,G__30753) : helix.core.jsx.call(null,G__30752,G__30753));
})(),(function (){var G__30758 = app.shared.components.toolbar.btn_wrapper;
var G__30759 = (function (){var obj30761 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__30762 = app.shared.components.toolbar.btn_info;
var G__30763 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30762,G__30763) : helix.core.jsx.call(null,G__30762,G__30763));
})()});
return obj30761;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30758,G__30759) : helix.core.jsx.call(null,G__30758,G__30759));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30674,G__30675) : helix.core.jsxs.call(null,G__30674,G__30675));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__30764 = G__30670;
(G__30764.displayName = "app.connect.NRR-2-61.toolbar-panel/NRR-2-61-toolbar-panel");

return G__30764;
} else {
return G__30670;
}
})();




//# sourceMappingURL=app.connect.NRR_2_61.toolbar_panel.js.map
