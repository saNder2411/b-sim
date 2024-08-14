goog.provide('app.ui.kits.connect.NRR_2_61_3C.toolbar_panel');

app.ui.kits.connect.NRR_2_61_3C.toolbar_panel.NRR_2_61_3C_toolbar_panel = (function (){var G__34620 = (function app$ui$kits$connect$NRR_2_61_3C$toolbar_panel$NRR_2_61_3C_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34633 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-61-3C-show-toolbar","NRR-2-61-3C-show-toolbar",-171433172)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-61 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__34663 = helix.core.Fragment;
var G__34664 = ({"children": [(function (){var G__34667 = app.ui.shared.components.toolbar.title;
var G__34668 = (function (){var obj34672 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj34672;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34667,G__34668) : helix.core.jsx.call(null,G__34667,G__34668));
})(),(function (){var G__34675 = app.ui.shared.components.toolbar.title;
var G__34676 = (function (){var obj34683 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-61 3C"});
return obj34683;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34675,G__34676) : helix.core.jsx.call(null,G__34675,G__34676));
})(),(function (){var G__34689 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34690 = (function (){var obj34692 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__34699 = app.ui.shared.components.toolbar.btn_replace;
var G__34700 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34699,G__34700) : helix.core.jsx.call(null,G__34699,G__34700));
})()});
return obj34692;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34689,G__34690) : helix.core.jsx.call(null,G__34689,G__34690));
})(),(function (){var G__34712 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34713 = (function (){var obj34715 = ({"x":(648),"y":(54),"children":(function (){var G__34721 = app.ui.shared.components.toolbar.btn_divider;
var G__34722 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34721,G__34722) : helix.core.jsx.call(null,G__34721,G__34722));
})()});
return obj34715;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34712,G__34713) : helix.core.jsx.call(null,G__34712,G__34713));
})(),(function (){var G__34730 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34731 = (function (){var obj34733 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__34736 = app.ui.shared.components.toolbar.btn_error;
var G__34737 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34736,G__34737) : helix.core.jsx.call(null,G__34736,G__34737));
})()});
return obj34733;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34730,G__34731) : helix.core.jsx.call(null,G__34730,G__34731));
})(),(function (){var G__34750 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34751 = (function (){var obj34755 = ({"x":(758),"y":(54),"children":(function (){var G__34762 = app.ui.shared.components.toolbar.btn_divider;
var G__34763 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34762,G__34763) : helix.core.jsx.call(null,G__34762,G__34763));
})()});
return obj34755;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34750,G__34751) : helix.core.jsx.call(null,G__34750,G__34751));
})(),(function (){var G__34768 = app.ui.shared.components.toolbar.switch_panel;
var G__34769 = (function (){var obj34773 = ({"x":(808),"y":(12),"children":[(function (){var G__34778 = app.ui.shared.components.toolbar.switch$;
var G__34779 = (function (){var obj34783 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj34783;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34778,G__34779) : helix.core.jsx.call(null,G__34778,G__34779));
})(),(function (){var G__34802 = app.ui.shared.components.toolbar.switch$;
var G__34803 = (function (){var obj34805 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj34805;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34802,G__34803) : helix.core.jsx.call(null,G__34802,G__34803));
})(),(function (){var G__34814 = app.ui.shared.components.toolbar.switch$;
var G__34815 = (function (){var obj34819 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj34819;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34814,G__34815) : helix.core.jsx.call(null,G__34814,G__34815));
})(),(function (){var G__34832 = app.ui.shared.components.toolbar.switch$;
var G__34833 = (function (){var obj34841 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj34841;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34832,G__34833) : helix.core.jsx.call(null,G__34832,G__34833));
})()]});
return obj34773;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34768,G__34769) : helix.core.jsxs.call(null,G__34768,G__34769));
})(),(function (){var G__34860 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34861 = (function (){var obj34869 = ({"x":(954),"y":(54),"children":(function (){var G__34876 = app.ui.shared.components.toolbar.btn_divider;
var G__34877 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34876,G__34877) : helix.core.jsx.call(null,G__34876,G__34877));
})()});
return obj34869;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34860,G__34861) : helix.core.jsx.call(null,G__34860,G__34861));
})(),(function (){var G__34884 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34885 = (function (){var obj34893 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__34900 = app.ui.shared.components.toolbar.btn_full_screen;
var G__34901 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34900,G__34901) : helix.core.jsx.call(null,G__34900,G__34901));
})()});
return obj34893;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34884,G__34885) : helix.core.jsx.call(null,G__34884,G__34885));
})(),(function (){var G__34913 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34914 = (function (){var obj34920 = ({"x":(1064),"y":(54),"children":(function (){var G__34921 = app.ui.shared.components.toolbar.btn_divider;
var G__34922 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34921,G__34922) : helix.core.jsx.call(null,G__34921,G__34922));
})()});
return obj34920;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34913,G__34914) : helix.core.jsx.call(null,G__34913,G__34914));
})(),(function (){var G__34931 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34933 = (function (){var obj34940 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-61-3C","change-NRR-2-61-3C",-1095298926),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__34947 = app.ui.shared.components.toolbar.btn_settings;
var G__34948 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34947,G__34948) : helix.core.jsx.call(null,G__34947,G__34948));
})()});
return obj34940;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34931,G__34933) : helix.core.jsx.call(null,G__34931,G__34933));
})(),(function (){var G__34957 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34958 = (function (){var obj34966 = ({"x":(1174),"y":(54),"children":(function (){var G__34967 = app.ui.shared.components.toolbar.btn_divider;
var G__34968 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34967,G__34968) : helix.core.jsx.call(null,G__34967,G__34968));
})()});
return obj34966;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34957,G__34958) : helix.core.jsx.call(null,G__34957,G__34958));
})(),(function (){var G__34977 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34978 = (function (){var obj34982 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__34985 = app.ui.shared.components.toolbar.btn_info;
var G__34986 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34985,G__34986) : helix.core.jsx.call(null,G__34985,G__34986));
})()});
return obj34982;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34977,G__34978) : helix.core.jsx.call(null,G__34977,G__34978));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34663,G__34664) : helix.core.jsxs.call(null,G__34663,G__34664));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__34996 = G__34620;
(G__34996.displayName = "app.ui.kits.connect.NRR-2-61-3C.toolbar-panel/NRR-2-61-3C-toolbar-panel");

return G__34996;
} else {
return G__34620;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_61_3C.toolbar_panel.js.map
