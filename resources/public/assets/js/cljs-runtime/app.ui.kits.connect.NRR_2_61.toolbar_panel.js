goog.provide('app.ui.kits.connect.NRR_2_61.toolbar_panel');

app.ui.kits.connect.NRR_2_61.toolbar_panel.NRR_2_61_toolbar_panel = (function (){var G__34591 = (function app$ui$kits$connect$NRR_2_61$toolbar_panel$NRR_2_61_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-show-toolbar","NRR-2-61-show-toolbar",-1427340718)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__34610 = helix.core.Fragment;
var G__34611 = ({"children": [(function (){var G__34614 = app.ui.shared.components.toolbar.title;
var G__34615 = (function (){var obj34619 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj34619;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34614,G__34615) : helix.core.jsx.call(null,G__34614,G__34615));
})(),(function (){var G__34623 = app.ui.shared.components.toolbar.title;
var G__34624 = (function (){var obj34630 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61"});
return obj34630;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34623,G__34624) : helix.core.jsx.call(null,G__34623,G__34624));
})(),(function (){var G__34638 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34639 = (function (){var obj34643 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__34649 = app.ui.shared.components.toolbar.btn_replace;
var G__34650 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34649,G__34650) : helix.core.jsx.call(null,G__34649,G__34650));
})()});
return obj34643;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34638,G__34639) : helix.core.jsx.call(null,G__34638,G__34639));
})(),(function (){var G__34655 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34656 = (function (){var obj34660 = ({"x":(648),"y":(54),"children":(function (){var G__34665 = app.ui.shared.components.toolbar.btn_divider;
var G__34666 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34665,G__34666) : helix.core.jsx.call(null,G__34665,G__34666));
})()});
return obj34660;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34655,G__34656) : helix.core.jsx.call(null,G__34655,G__34656));
})(),(function (){var G__34673 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34674 = (function (){var obj34678 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__34685 = app.ui.shared.components.toolbar.btn_error;
var G__34686 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34685,G__34686) : helix.core.jsx.call(null,G__34685,G__34686));
})()});
return obj34678;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34673,G__34674) : helix.core.jsx.call(null,G__34673,G__34674));
})(),(function (){var G__34695 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34696 = (function (){var obj34703 = ({"x":(758),"y":(54),"children":(function (){var G__34706 = app.ui.shared.components.toolbar.btn_divider;
var G__34707 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34706,G__34707) : helix.core.jsx.call(null,G__34706,G__34707));
})()});
return obj34703;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34695,G__34696) : helix.core.jsx.call(null,G__34695,G__34696));
})(),(function (){var G__34716 = app.ui.shared.components.toolbar.switch_panel;
var G__34717 = (function (){var obj34720 = ({"x":(808),"y":(12),"children":[(function (){var G__34726 = app.ui.shared.components.toolbar.switch$;
var G__34727 = (function (){var obj34729 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj34729;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34726,G__34727) : helix.core.jsx.call(null,G__34726,G__34727));
})(),(function (){var G__34734 = app.ui.shared.components.toolbar.switch$;
var G__34735 = (function (){var obj34739 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj34739;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34734,G__34735) : helix.core.jsx.call(null,G__34734,G__34735));
})(),(function (){var G__34756 = app.ui.shared.components.toolbar.switch$;
var G__34757 = (function (){var obj34765 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj34765;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34756,G__34757) : helix.core.jsx.call(null,G__34756,G__34757));
})(),(function (){var G__34774 = app.ui.shared.components.toolbar.switch$;
var G__34775 = (function (){var obj34777 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj34777;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34774,G__34775) : helix.core.jsx.call(null,G__34774,G__34775));
})()]});
return obj34720;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34716,G__34717) : helix.core.jsxs.call(null,G__34716,G__34717));
})(),(function (){var G__34796 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34797 = (function (){var obj34829 = ({"x":(954),"y":(54),"children":(function (){var G__34836 = app.ui.shared.components.toolbar.btn_divider;
var G__34837 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34836,G__34837) : helix.core.jsx.call(null,G__34836,G__34837));
})()});
return obj34829;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34796,G__34797) : helix.core.jsx.call(null,G__34796,G__34797));
})(),(function (){var G__34848 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34850 = (function (){var obj34857 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__34874 = app.ui.shared.components.toolbar.btn_full_screen;
var G__34875 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34874,G__34875) : helix.core.jsx.call(null,G__34874,G__34875));
})()});
return obj34857;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34848,G__34850) : helix.core.jsx.call(null,G__34848,G__34850));
})(),(function (){var G__34886 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34887 = (function (){var obj34891 = ({"x":(1064),"y":(54),"children":(function (){var G__34898 = app.ui.shared.components.toolbar.btn_divider;
var G__34899 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34898,G__34899) : helix.core.jsx.call(null,G__34898,G__34899));
})()});
return obj34891;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34886,G__34887) : helix.core.jsx.call(null,G__34886,G__34887));
})(),(function (){var G__34907 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34908 = (function (){var obj34916 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61","change-NRR-2-61",-369021089),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__34923 = app.ui.shared.components.toolbar.btn_settings;
var G__34924 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34923,G__34924) : helix.core.jsx.call(null,G__34923,G__34924));
})()});
return obj34916;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34907,G__34908) : helix.core.jsx.call(null,G__34907,G__34908));
})(),(function (){var G__34935 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34936 = (function (){var obj34942 = ({"x":(1174),"y":(54),"children":(function (){var G__34945 = app.ui.shared.components.toolbar.btn_divider;
var G__34946 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34945,G__34946) : helix.core.jsx.call(null,G__34945,G__34946));
})()});
return obj34942;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34935,G__34936) : helix.core.jsx.call(null,G__34935,G__34936));
})(),(function (){var G__34951 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34952 = (function (){var obj34960 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__34969 = app.ui.shared.components.toolbar.btn_info;
var G__34970 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34969,G__34970) : helix.core.jsx.call(null,G__34969,G__34970));
})()});
return obj34960;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34951,G__34952) : helix.core.jsx.call(null,G__34951,G__34952));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34610,G__34611) : helix.core.jsxs.call(null,G__34610,G__34611));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__34987 = G__34591;
(G__34987.displayName = "app.ui.kits.connect.NRR-2-61.toolbar-panel/NRR-2-61-toolbar-panel");

return G__34987;
} else {
return G__34591;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_61.toolbar_panel.js.map
