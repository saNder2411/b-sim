goog.provide('app.ui.kits.connect.LRG_16_61.toolbar_panel');

app.ui.kits.connect.LRG_16_61.toolbar_panel.LRG_16_61_toolbar_panel = (function (){var G__33908 = (function app$ui$kits$connect$LRG_16_61$toolbar_panel$LRG_16_61_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRG-16-61-show-toolbar","LRG-16-61-show-toolbar",1337876699)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
if(cljs.core.truth_(show_toolbar)){
var G__33923 = helix.core.Fragment;
var G__33924 = ({"children": [(function (){var G__33925 = app.ui.shared.components.toolbar.title;
var G__33926 = (function (){var obj33930 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Electrode"});
return obj33930;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33925,G__33926) : helix.core.jsx.call(null,G__33925,G__33926));
})(),(function (){var G__33937 = app.ui.shared.components.toolbar.title;
var G__33938 = (function (){var obj33942 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRG 16-61"});
return obj33942;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33937,G__33938) : helix.core.jsx.call(null,G__33937,G__33938));
})(),(function (){var G__33946 = app.ui.shared.components.toolbar.btn_wrapper;
var G__33947 = (function (){var obj33951 = ({"x":(894),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__33953 = app.ui.shared.components.toolbar.btn_replace;
var G__33954 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33953,G__33954) : helix.core.jsx.call(null,G__33953,G__33954));
})()});
return obj33951;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33946,G__33947) : helix.core.jsx.call(null,G__33946,G__33947));
})(),(function (){var G__33961 = app.ui.shared.components.toolbar.btn_wrapper;
var G__33962 = (function (){var obj33965 = ({"x":(954),"y":(54),"children":(function (){var G__33970 = app.ui.shared.components.toolbar.btn_divider;
var G__33971 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33970,G__33971) : helix.core.jsx.call(null,G__33970,G__33971));
})()});
return obj33965;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33961,G__33962) : helix.core.jsx.call(null,G__33961,G__33962));
})(),(function (){var G__33978 = app.ui.shared.components.toolbar.btn_wrapper;
var G__33979 = (function (){var obj33981 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-61","change-LRG-16-61",819141123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),true], null)], null));
}),"children":(function (){var G__33986 = app.ui.shared.components.toolbar.btn_full_screen;
var G__33987 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33986,G__33987) : helix.core.jsx.call(null,G__33986,G__33987));
})()});
return obj33981;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33978,G__33979) : helix.core.jsx.call(null,G__33978,G__33979));
})(),(function (){var G__33992 = app.ui.shared.components.toolbar.btn_wrapper;
var G__33993 = (function (){var obj33995 = ({"x":(1064),"y":(54),"children":(function (){var G__34008 = app.ui.shared.components.toolbar.btn_divider;
var G__34009 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34008,G__34009) : helix.core.jsx.call(null,G__34008,G__34009));
})()});
return obj33995;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33992,G__33993) : helix.core.jsx.call(null,G__33992,G__33993));
})(),(function (){var G__34014 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34015 = (function (){var obj34019 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-61","change-LRG-16-61",819141123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__34023 = app.ui.shared.components.toolbar.btn_settings;
var G__34024 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34023,G__34024) : helix.core.jsx.call(null,G__34023,G__34024));
})()});
return obj34019;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34014,G__34015) : helix.core.jsx.call(null,G__34014,G__34015));
})(),(function (){var G__34028 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34029 = (function (){var obj34033 = ({"x":(1174),"y":(54),"children":(function (){var G__34034 = app.ui.shared.components.toolbar.btn_divider;
var G__34035 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34034,G__34035) : helix.core.jsx.call(null,G__34034,G__34035));
})()});
return obj34033;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34028,G__34029) : helix.core.jsx.call(null,G__34028,G__34029));
})(),(function (){var G__34038 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34039 = (function (){var obj34041 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"LRG 1x-6x conductivity electrodes are used in combination with the URS 60/URS 61 safety control unit as a conductivity limiter and in combination with an LRR 1-60 control unit as a continuous blowdown regulator in steam boiler systems and hot-water plants."], null)], null));
}),"children":(function (){var G__34043 = app.ui.shared.components.toolbar.btn_info;
var G__34044 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34043,G__34044) : helix.core.jsx.call(null,G__34043,G__34044));
})()});
return obj34041;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34038,G__34039) : helix.core.jsx.call(null,G__34038,G__34039));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33923,G__33924) : helix.core.jsxs.call(null,G__33923,G__33924));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__34046 = G__33908;
(G__34046.displayName = "app.ui.kits.connect.LRG-16-61.toolbar-panel/LRG-16-61-toolbar-panel");

return G__34046;
} else {
return G__33908;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRG_16_61.toolbar_panel.js.map
