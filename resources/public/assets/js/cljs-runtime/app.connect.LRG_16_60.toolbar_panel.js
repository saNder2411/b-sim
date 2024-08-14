goog.provide('app.connect.LRG_16_60.toolbar_panel');

app.connect.LRG_16_60.toolbar_panel.LRG_16_60_toolbar_panel = (function (){var G__41704 = (function app$connect$LRG_16_60$toolbar_panel$LRG_16_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__41714 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRG-16-60-show-toolbar","LRG-16-60-show-toolbar",385215925)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
if(cljs.core.truth_(show_toolbar)){
var G__41729 = helix.core.Fragment;
var G__41730 = ({"children": [(function (){var G__41737 = app.shared.components.toolbar.title;
var G__41738 = (function (){var obj41742 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Electrode"});
return obj41742;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41737,G__41738) : helix.core.jsx.call(null,G__41737,G__41738));
})(),(function (){var G__41751 = app.shared.components.toolbar.title;
var G__41752 = (function (){var obj41758 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRG 16-60"});
return obj41758;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41751,G__41752) : helix.core.jsx.call(null,G__41751,G__41752));
})(),(function (){var G__41767 = app.shared.components.toolbar.btn_wrapper;
var G__41768 = (function (){var obj41770 = ({"x":(894),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__41779 = app.shared.components.toolbar.btn_replace;
var G__41780 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41779,G__41780) : helix.core.jsx.call(null,G__41779,G__41780));
})()});
return obj41770;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41767,G__41768) : helix.core.jsx.call(null,G__41767,G__41768));
})(),(function (){var G__41791 = app.shared.components.toolbar.btn_wrapper;
var G__41792 = (function (){var obj41795 = ({"x":(954),"y":(54),"children":(function (){var G__41799 = app.shared.components.toolbar.btn_divider;
var G__41800 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41799,G__41800) : helix.core.jsx.call(null,G__41799,G__41800));
})()});
return obj41795;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41791,G__41792) : helix.core.jsx.call(null,G__41791,G__41792));
})(),(function (){var G__41808 = app.shared.components.toolbar.btn_wrapper;
var G__41809 = (function (){var obj41813 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,":full-screen?",":full-screen?",-1144598281)], null),true], null)], null));
}),"children":(function (){var G__41818 = app.shared.components.toolbar.btn_full_screen;
var G__41819 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41818,G__41819) : helix.core.jsx.call(null,G__41818,G__41819));
})()});
return obj41813;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41808,G__41809) : helix.core.jsx.call(null,G__41808,G__41809));
})(),(function (){var G__41828 = app.shared.components.toolbar.btn_wrapper;
var G__41829 = (function (){var obj41833 = ({"x":(1064),"y":(54),"children":(function (){var G__41838 = app.shared.components.toolbar.btn_divider;
var G__41839 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41838,G__41839) : helix.core.jsx.call(null,G__41838,G__41839));
})()});
return obj41833;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41828,G__41829) : helix.core.jsx.call(null,G__41828,G__41829));
})(),(function (){var G__41848 = app.shared.components.toolbar.btn_wrapper;
var G__41849 = (function (){var obj41857 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__41862 = app.shared.components.toolbar.btn_settings;
var G__41863 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41862,G__41863) : helix.core.jsx.call(null,G__41862,G__41863));
})()});
return obj41857;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41848,G__41849) : helix.core.jsx.call(null,G__41848,G__41849));
})(),(function (){var G__41872 = app.shared.components.toolbar.btn_wrapper;
var G__41873 = (function (){var obj41877 = ({"x":(1174),"y":(54),"children":(function (){var G__41880 = app.shared.components.toolbar.btn_divider;
var G__41881 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41880,G__41881) : helix.core.jsx.call(null,G__41880,G__41881));
})()});
return obj41877;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41872,G__41873) : helix.core.jsx.call(null,G__41872,G__41873));
})(),(function (){var G__41895 = app.shared.components.toolbar.btn_wrapper;
var G__41896 = (function (){var obj41900 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"LRG 1x-6x conductivity electrodes are used in combination with the URS 60/URS 61 safety control unit as a conductivity limiter and in combination with an LRR 1-60 control unit as a continuous blowdown regulator in steam boiler systems and hot-water plants."], null)], null));
}),"children":(function (){var G__41926 = app.shared.components.toolbar.btn_info;
var G__41927 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41926,G__41927) : helix.core.jsx.call(null,G__41926,G__41927));
})()});
return obj41900;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41895,G__41896) : helix.core.jsx.call(null,G__41895,G__41896));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41729,G__41730) : helix.core.jsxs.call(null,G__41729,G__41730));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__41932 = G__41704;
(G__41932.displayName = "app.connect.LRG-16-60.toolbar-panel/LRG-16-60-toolbar-panel");

return G__41932;
} else {
return G__41704;
}
})();




//# sourceMappingURL=app.connect.LRG_16_60.toolbar_panel.js.map
