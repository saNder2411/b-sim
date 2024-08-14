goog.provide('app.ui.kits.connect.LRG_16_60.toolbar_panel');

app.ui.kits.connect.LRG_16_60.toolbar_panel.LRG_16_60_toolbar_panel = (function (){var G__33902 = (function app$ui$kits$connect$LRG_16_60$toolbar_panel$LRG_16_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33904 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRG-16-60-show-toolbar","LRG-16-60-show-toolbar",385215925)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
if(cljs.core.truth_(show_toolbar)){
var G__33913 = helix.core.Fragment;
var G__33914 = ({"children": [(function (){var G__33918 = app.ui.shared.components.toolbar.title;
var G__33919 = (function (){var obj33922 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Electrode"});
return obj33922;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33918,G__33919) : helix.core.jsx.call(null,G__33918,G__33919));
})(),(function (){var G__33927 = app.ui.shared.components.toolbar.title;
var G__33928 = (function (){var obj33934 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRG 16-60"});
return obj33934;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33927,G__33928) : helix.core.jsx.call(null,G__33927,G__33928));
})(),(function (){var G__33939 = app.ui.shared.components.toolbar.btn_wrapper;
var G__33940 = (function (){var obj33944 = ({"x":(894),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__33948 = app.ui.shared.components.toolbar.btn_replace;
var G__33949 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33948,G__33949) : helix.core.jsx.call(null,G__33948,G__33949));
})()});
return obj33944;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33939,G__33940) : helix.core.jsx.call(null,G__33939,G__33940));
})(),(function (){var G__33955 = app.ui.shared.components.toolbar.btn_wrapper;
var G__33956 = (function (){var obj33958 = ({"x":(954),"y":(54),"children":(function (){var G__33959 = app.ui.shared.components.toolbar.btn_divider;
var G__33960 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33959,G__33960) : helix.core.jsx.call(null,G__33959,G__33960));
})()});
return obj33958;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33955,G__33956) : helix.core.jsx.call(null,G__33955,G__33956));
})(),(function (){var G__33966 = app.ui.shared.components.toolbar.btn_wrapper;
var G__33967 = (function (){var obj33969 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),true], null)], null));
}),"children":(function (){var G__33976 = app.ui.shared.components.toolbar.btn_full_screen;
var G__33977 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33976,G__33977) : helix.core.jsx.call(null,G__33976,G__33977));
})()});
return obj33969;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33966,G__33967) : helix.core.jsx.call(null,G__33966,G__33967));
})(),(function (){var G__33982 = app.ui.shared.components.toolbar.btn_wrapper;
var G__33983 = (function (){var obj33985 = ({"x":(1064),"y":(54),"children":(function (){var G__33988 = app.ui.shared.components.toolbar.btn_divider;
var G__33989 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33988,G__33989) : helix.core.jsx.call(null,G__33988,G__33989));
})()});
return obj33985;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33982,G__33983) : helix.core.jsx.call(null,G__33982,G__33983));
})(),(function (){var G__33996 = app.ui.shared.components.toolbar.btn_wrapper;
var G__33997 = (function (){var obj34001 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__34004 = app.ui.shared.components.toolbar.btn_settings;
var G__34005 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34004,G__34005) : helix.core.jsx.call(null,G__34004,G__34005));
})()});
return obj34001;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33996,G__33997) : helix.core.jsx.call(null,G__33996,G__33997));
})(),(function (){var G__34012 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34013 = (function (){var obj34017 = ({"x":(1174),"y":(54),"children":(function (){var G__34021 = app.ui.shared.components.toolbar.btn_divider;
var G__34022 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34021,G__34022) : helix.core.jsx.call(null,G__34021,G__34022));
})()});
return obj34017;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34012,G__34013) : helix.core.jsx.call(null,G__34012,G__34013));
})(),(function (){var G__34025 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34026 = (function (){var obj34031 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"LRG 1x-6x conductivity electrodes are used in combination with the URS 60/URS 61 safety control unit as a conductivity limiter and in combination with an LRR 1-60 control unit as a continuous blowdown regulator in steam boiler systems and hot-water plants."], null)], null));
}),"children":(function (){var G__34036 = app.ui.shared.components.toolbar.btn_info;
var G__34037 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34036,G__34037) : helix.core.jsx.call(null,G__34036,G__34037));
})()});
return obj34031;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34025,G__34026) : helix.core.jsx.call(null,G__34025,G__34026));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33913,G__33914) : helix.core.jsxs.call(null,G__33913,G__33914));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__34042 = G__33902;
(G__34042.displayName = "app.ui.kits.connect.LRG-16-60.toolbar-panel/LRG-16-60-toolbar-panel");

return G__34042;
} else {
return G__33902;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRG_16_60.toolbar_panel.js.map
