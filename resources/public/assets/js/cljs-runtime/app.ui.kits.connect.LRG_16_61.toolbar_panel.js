goog.provide('app.ui.kits.connect.LRG_16_61.toolbar_panel');

app.ui.kits.connect.LRG_16_61.toolbar_panel.LRG_16_61_toolbar_panel = (function (){var G__37945 = (function app$ui$kits$connect$LRG_16_61$toolbar_panel$LRG_16_61_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__37947 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRG-16-61-show-toolbar","LRG-16-61-show-toolbar",1337876699)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
if(cljs.core.truth_(show_toolbar)){
var G__37952 = helix.core.Fragment;
var G__37953 = ({"children": [(function (){var G__37954 = app.ui.shared.components.toolbar.title;
var G__37955 = (function (){var obj37957 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Electrode"});
return obj37957;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37954,G__37955) : helix.core.jsx.call(null,G__37954,G__37955));
})(),(function (){var G__37958 = app.ui.shared.components.toolbar.title;
var G__37959 = (function (){var obj37961 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRG 16-61"});
return obj37961;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37958,G__37959) : helix.core.jsx.call(null,G__37958,G__37959));
})(),(function (){var G__37962 = app.ui.shared.components.toolbar.btn_wrapper;
var G__37963 = (function (){var obj37965 = ({"x":(894),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__37966 = app.ui.shared.components.toolbar.btn_replace;
var G__37967 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37966,G__37967) : helix.core.jsx.call(null,G__37966,G__37967));
})()});
return obj37965;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37962,G__37963) : helix.core.jsx.call(null,G__37962,G__37963));
})(),(function (){var G__37968 = app.ui.shared.components.toolbar.btn_wrapper;
var G__37969 = (function (){var obj37971 = ({"x":(954),"y":(54),"children":(function (){var G__37972 = app.ui.shared.components.toolbar.btn_divider;
var G__37973 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37972,G__37973) : helix.core.jsx.call(null,G__37972,G__37973));
})()});
return obj37971;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37968,G__37969) : helix.core.jsx.call(null,G__37968,G__37969));
})(),(function (){var G__37974 = app.ui.shared.components.toolbar.btn_wrapper;
var G__37975 = (function (){var obj37977 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-61","change-LRG-16-61",819141123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),true], null)], null));
}),"children":(function (){var G__37978 = app.ui.shared.components.toolbar.btn_full_screen;
var G__37979 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37978,G__37979) : helix.core.jsx.call(null,G__37978,G__37979));
})()});
return obj37977;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37974,G__37975) : helix.core.jsx.call(null,G__37974,G__37975));
})(),(function (){var G__37980 = app.ui.shared.components.toolbar.btn_wrapper;
var G__37981 = (function (){var obj37983 = ({"x":(1064),"y":(54),"children":(function (){var G__37984 = app.ui.shared.components.toolbar.btn_divider;
var G__37985 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37984,G__37985) : helix.core.jsx.call(null,G__37984,G__37985));
})()});
return obj37983;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37980,G__37981) : helix.core.jsx.call(null,G__37980,G__37981));
})(),(function (){var G__37986 = app.ui.shared.components.toolbar.btn_wrapper;
var G__37987 = (function (){var obj37989 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-61","change-LRG-16-61",819141123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__37990 = app.ui.shared.components.toolbar.btn_settings;
var G__37991 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37990,G__37991) : helix.core.jsx.call(null,G__37990,G__37991));
})()});
return obj37989;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37986,G__37987) : helix.core.jsx.call(null,G__37986,G__37987));
})(),(function (){var G__37992 = app.ui.shared.components.toolbar.btn_wrapper;
var G__37993 = (function (){var obj37995 = ({"x":(1174),"y":(54),"children":(function (){var G__37996 = app.ui.shared.components.toolbar.btn_divider;
var G__37997 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37996,G__37997) : helix.core.jsx.call(null,G__37996,G__37997));
})()});
return obj37995;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37992,G__37993) : helix.core.jsx.call(null,G__37992,G__37993));
})(),(function (){var G__37998 = app.ui.shared.components.toolbar.btn_wrapper;
var G__37999 = (function (){var obj38001 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"LRG 1x-6x conductivity electrodes are used in combination with the URS 60/URS 61 safety control unit as a conductivity limiter and in combination with an LRR 1-60 control unit as a continuous blowdown regulator in steam boiler systems and hot-water plants."], null)], null));
}),"children":(function (){var G__38002 = app.ui.shared.components.toolbar.btn_info;
var G__38003 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38002,G__38003) : helix.core.jsx.call(null,G__38002,G__38003));
})()});
return obj38001;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37998,G__37999) : helix.core.jsx.call(null,G__37998,G__37999));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37952,G__37953) : helix.core.jsxs.call(null,G__37952,G__37953));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38004 = G__37945;
(G__38004.displayName = "app.ui.kits.connect.LRG-16-61.toolbar-panel/LRG-16-61-toolbar-panel");

return G__38004;
} else {
return G__37945;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRG_16_61.toolbar_panel.js.map
