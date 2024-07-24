goog.provide('app.ui.kits.connect.NRR_2_60.toolbar_panel');

app.ui.kits.connect.NRR_2_60.toolbar_panel.NRR_2_60_toolbar_panel = (function (){var G__43871 = (function app$ui$kits$connect$NRR_2_60$toolbar_panel$NRR_2_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__43873 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRR-2-60-show-toolbar","NRR-2-60-show-toolbar",-1378612021)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"NRR 2-60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__43878 = helix.core.Fragment;
var G__43879 = ({"children": [(function (){var G__43882 = app.ui.shared.components.toolbar.title;
var G__43883 = (function (){var obj43887 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Controller"});
return obj43887;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43882,G__43883) : helix.core.jsx.call(null,G__43882,G__43883));
})(),(function (){var G__43890 = app.ui.shared.components.toolbar.title;
var G__43891 = (function (){var obj43895 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRR 2-60"});
return obj43895;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43890,G__43891) : helix.core.jsx.call(null,G__43890,G__43891));
})(),(function (){var G__43900 = app.ui.shared.components.toolbar.btn_wrapper;
var G__43901 = (function (){var obj43903 = ({"x":(588),"y":(54),"inactive":inactive,"on-click":(function (){
return null;
}),"children":(function (){var G__43924 = app.ui.shared.components.toolbar.btn_replace;
var G__43925 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43924,G__43925) : helix.core.jsx.call(null,G__43924,G__43925));
})()});
return obj43903;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43900,G__43901) : helix.core.jsx.call(null,G__43900,G__43901));
})(),(function (){var G__43928 = app.ui.shared.components.toolbar.btn_wrapper;
var G__43929 = (function (){var obj43932 = ({"x":(648),"y":(54),"children":(function (){var G__43934 = app.ui.shared.components.toolbar.btn_divider;
var G__43935 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43934,G__43935) : helix.core.jsx.call(null,G__43934,G__43935));
})()});
return obj43932;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43928,G__43929) : helix.core.jsx.call(null,G__43928,G__43929));
})(),(function (){var G__43938 = app.ui.shared.components.toolbar.btn_wrapper;
var G__43939 = (function (){var obj43941 = ({"x":(698),"y":(54),"inactive":(!(inactive)),"on-click":(function (){
return null;
}),"children":(function (){var G__43946 = app.ui.shared.components.toolbar.btn_error;
var G__43947 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43946,G__43947) : helix.core.jsx.call(null,G__43946,G__43947));
})()});
return obj43941;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43938,G__43939) : helix.core.jsx.call(null,G__43938,G__43939));
})(),(function (){var G__43948 = app.ui.shared.components.toolbar.btn_wrapper;
var G__43949 = (function (){var obj43953 = ({"x":(758),"y":(54),"children":(function (){var G__43956 = app.ui.shared.components.toolbar.btn_divider;
var G__43957 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43956,G__43957) : helix.core.jsx.call(null,G__43956,G__43957));
})()});
return obj43953;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43948,G__43949) : helix.core.jsx.call(null,G__43948,G__43949));
})(),(function (){var G__43960 = app.ui.shared.components.toolbar.switch_panel;
var G__43961 = (function (){var obj43965 = ({"x":(808),"y":(12),"children":[(function (){var G__43968 = app.ui.shared.components.toolbar.switch$;
var G__43969 = (function (){var obj43971 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj43971;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43968,G__43969) : helix.core.jsx.call(null,G__43968,G__43969));
})(),(function (){var G__43976 = app.ui.shared.components.toolbar.switch$;
var G__43977 = (function (){var obj43981 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj43981;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43976,G__43977) : helix.core.jsx.call(null,G__43976,G__43977));
})(),(function (){var G__43984 = app.ui.shared.components.toolbar.switch$;
var G__43985 = (function (){var obj43989 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj43989;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43984,G__43985) : helix.core.jsx.call(null,G__43984,G__43985));
})(),(function (){var G__43994 = app.ui.shared.components.toolbar.switch$;
var G__43995 = (function (){var obj43997 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj43997;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43994,G__43995) : helix.core.jsx.call(null,G__43994,G__43995));
})()]});
return obj43965;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__43960,G__43961) : helix.core.jsxs.call(null,G__43960,G__43961));
})(),(function (){var G__43999 = app.ui.shared.components.toolbar.btn_wrapper;
var G__44000 = (function (){var obj44002 = ({"x":(954),"y":(54),"children":(function (){var G__44003 = app.ui.shared.components.toolbar.btn_divider;
var G__44004 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44003,G__44004) : helix.core.jsx.call(null,G__44003,G__44004));
})()});
return obj44002;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43999,G__44000) : helix.core.jsx.call(null,G__43999,G__44000));
})(),(function (){var G__44005 = app.ui.shared.components.toolbar.btn_wrapper;
var G__44006 = (function (){var obj44008 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__44009 = app.ui.shared.components.toolbar.btn_full_screen;
var G__44010 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44009,G__44010) : helix.core.jsx.call(null,G__44009,G__44010));
})()});
return obj44008;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44005,G__44006) : helix.core.jsx.call(null,G__44005,G__44006));
})(),(function (){var G__44011 = app.ui.shared.components.toolbar.btn_wrapper;
var G__44012 = (function (){var obj44014 = ({"x":(1064),"y":(54),"children":(function (){var G__44015 = app.ui.shared.components.toolbar.btn_divider;
var G__44016 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44015,G__44016) : helix.core.jsx.call(null,G__44015,G__44016));
})()});
return obj44014;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44011,G__44012) : helix.core.jsx.call(null,G__44011,G__44012));
})(),(function (){var G__44017 = app.ui.shared.components.toolbar.btn_wrapper;
var G__44018 = (function (){var obj44020 = ({"x":(1114),"y":(54),"inactive":inactive,"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-NRR-2-60","change-NRR-2-60",1267342877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__44021 = app.ui.shared.components.toolbar.btn_settings;
var G__44022 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44021,G__44022) : helix.core.jsx.call(null,G__44021,G__44022));
})()});
return obj44020;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44017,G__44018) : helix.core.jsx.call(null,G__44017,G__44018));
})(),(function (){var G__44023 = app.ui.shared.components.toolbar.btn_wrapper;
var G__44024 = (function (){var obj44026 = ({"x":(1174),"y":(54),"children":(function (){var G__44027 = app.ui.shared.components.toolbar.btn_divider;
var G__44028 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44027,G__44028) : helix.core.jsx.call(null,G__44027,G__44028));
})()});
return obj44026;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44023,G__44024) : helix.core.jsx.call(null,G__44023,G__44024));
})(),(function (){var G__44029 = app.ui.shared.components.toolbar.btn_wrapper;
var G__44030 = (function (){var obj44032 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Controller",new cljs.core.Keyword(null,"text","text",-1790561697),"The level controller can be used in conjunction with NRG 26-60 and NRG 26-61 level electrodes as a water level controller and limit switch in steam and water boilers and in condensate and feedwater tanks."], null)], null));
}),"children":(function (){var G__44033 = app.ui.shared.components.toolbar.btn_info;
var G__44034 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44033,G__44034) : helix.core.jsx.call(null,G__44033,G__44034));
})()});
return obj44032;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44029,G__44030) : helix.core.jsx.call(null,G__44029,G__44030));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__43878,G__43879) : helix.core.jsxs.call(null,G__43878,G__43879));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__44035 = G__43871;
(G__44035.displayName = "app.ui.kits.connect.NRR-2-60.toolbar-panel/NRR-2-60-toolbar-panel");

return G__44035;
} else {
return G__43871;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRR_2_60.toolbar_panel.js.map
