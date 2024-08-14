goog.provide('app.ui.kits.connect.NRR_2_60_3C.toolbar_panel');

app.ui.kits.connect.NRR_2_60_3C.toolbar_panel.NRR_2_60_3C_toolbar_panel = (function (){var G__34718 = (function app$ui$kits$connect$NRR_2_60_3C$toolbar_panel$NRR_2_60_3C_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34723 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-3C-show-toolbar","NRR-2-60-3C-show-toolbar",-897814081)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60 3C",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__34740 = helix.core.Fragment;
var G__34741 = ({"children": [(function (){var G__34742 = app.ui.shared.components.toolbar.title;
var G__34743 = (function (){var obj34745 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj34745;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34742,G__34743) : helix.core.jsx.call(null,G__34742,G__34743));
})(),(function (){var G__34746 = app.ui.shared.components.toolbar.title;
var G__34747 = (function (){var obj34749 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60 3C"});
return obj34749;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34746,G__34747) : helix.core.jsx.call(null,G__34746,G__34747));
})(),(function (){var G__34752 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34753 = (function (){var obj34759 = ({"x":(588),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__34766 = app.ui.shared.components.toolbar.btn_replace;
var G__34767 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34766,G__34767) : helix.core.jsx.call(null,G__34766,G__34767));
})()});
return obj34759;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34752,G__34753) : helix.core.jsx.call(null,G__34752,G__34753));
})(),(function (){var G__34780 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34781 = (function (){var obj34787 = ({"x":(648),"y":(54),"children":(function (){var G__34790 = app.ui.shared.components.toolbar.btn_divider;
var G__34791 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34790,G__34791) : helix.core.jsx.call(null,G__34790,G__34791));
})()});
return obj34787;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34780,G__34781) : helix.core.jsx.call(null,G__34780,G__34781));
})(),(function (){var G__34806 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34807 = (function (){var obj34809 = ({"x":(698),"y":(54),"on-click":(function (){
return null;
}),"inactive":(!(inactive)),"children":(function (){var G__34816 = app.ui.shared.components.toolbar.btn_error;
var G__34817 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34816,G__34817) : helix.core.jsx.call(null,G__34816,G__34817));
})()});
return obj34809;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34806,G__34807) : helix.core.jsx.call(null,G__34806,G__34807));
})(),(function (){var G__34824 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34825 = (function (){var obj34831 = ({"x":(758),"y":(54),"children":(function (){var G__34838 = app.ui.shared.components.toolbar.btn_divider;
var G__34839 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34838,G__34839) : helix.core.jsx.call(null,G__34838,G__34839));
})()});
return obj34831;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34824,G__34825) : helix.core.jsx.call(null,G__34824,G__34825));
})(),(function (){var G__34849 = app.ui.shared.components.toolbar.switch_panel;
var G__34851 = (function (){var obj34855 = ({"x":(808),"y":(12),"children":[(function (){var G__34864 = app.ui.shared.components.toolbar.switch$;
var G__34865 = (function (){var obj34873 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj34873;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34864,G__34865) : helix.core.jsx.call(null,G__34864,G__34865));
})(),(function (){var G__34888 = app.ui.shared.components.toolbar.switch$;
var G__34889 = (function (){var obj34895 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj34895;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34888,G__34889) : helix.core.jsx.call(null,G__34888,G__34889));
})(),(function (){var G__34905 = app.ui.shared.components.toolbar.switch$;
var G__34906 = (function (){var obj34912 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj34912;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34905,G__34906) : helix.core.jsx.call(null,G__34905,G__34906));
})(),(function (){var G__34927 = app.ui.shared.components.toolbar.switch$;
var G__34928 = (function (){var obj34934 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj34934;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34927,G__34928) : helix.core.jsx.call(null,G__34927,G__34928));
})()]});
return obj34855;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34849,G__34851) : helix.core.jsxs.call(null,G__34849,G__34851));
})(),(function (){var G__34949 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34950 = (function (){var obj34954 = ({"x":(954),"y":(54),"children":(function (){var G__34961 = app.ui.shared.components.toolbar.btn_divider;
var G__34962 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34961,G__34962) : helix.core.jsx.call(null,G__34961,G__34962));
})()});
return obj34954;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34949,G__34950) : helix.core.jsx.call(null,G__34949,G__34950));
})(),(function (){var G__34971 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34972 = (function (){var obj34976 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__34983 = app.ui.shared.components.toolbar.btn_full_screen;
var G__34984 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34983,G__34984) : helix.core.jsx.call(null,G__34983,G__34984));
})()});
return obj34976;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34971,G__34972) : helix.core.jsx.call(null,G__34971,G__34972));
})(),(function (){var G__34988 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34989 = (function (){var obj34991 = ({"x":(1064),"y":(54),"children":(function (){var G__34994 = app.ui.shared.components.toolbar.btn_divider;
var G__34995 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34994,G__34995) : helix.core.jsx.call(null,G__34994,G__34995));
})()});
return obj34991;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34988,G__34989) : helix.core.jsx.call(null,G__34988,G__34989));
})(),(function (){var G__34999 = app.ui.shared.components.toolbar.btn_wrapper;
var G__35000 = (function (){var obj35002 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60-3C","change-NRR-2-60-3C",-1267876660),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__35005 = app.ui.shared.components.toolbar.btn_settings;
var G__35006 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35005,G__35006) : helix.core.jsx.call(null,G__35005,G__35006));
})()});
return obj35002;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34999,G__35000) : helix.core.jsx.call(null,G__34999,G__35000));
})(),(function (){var G__35011 = app.ui.shared.components.toolbar.btn_wrapper;
var G__35012 = (function (){var obj35014 = ({"x":(1174),"y":(54),"children":(function (){var G__35017 = app.ui.shared.components.toolbar.btn_divider;
var G__35018 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35017,G__35018) : helix.core.jsx.call(null,G__35017,G__35018));
})()});
return obj35014;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35011,G__35012) : helix.core.jsx.call(null,G__35011,G__35012));
})(),(function (){var G__35021 = app.ui.shared.components.toolbar.btn_wrapper;
var G__35022 = (function (){var obj35026 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__35029 = app.ui.shared.components.toolbar.btn_info;
var G__35030 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35029,G__35030) : helix.core.jsx.call(null,G__35029,G__35030));
})()});
return obj35026;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__35021,G__35022) : helix.core.jsx.call(null,G__35021,G__35022));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34740,G__34741) : helix.core.jsxs.call(null,G__34740,G__34741));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__35035 = G__34718;
(G__35035.displayName = "app.ui.kits.connect.NRR-2-60-3C.toolbar-panel/NRR-2-60-3C-toolbar-panel");

return G__35035;
} else {
return G__34718;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_60_3C.toolbar_panel.js.map
