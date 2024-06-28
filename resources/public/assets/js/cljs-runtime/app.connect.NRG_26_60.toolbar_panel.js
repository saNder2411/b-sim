goog.provide('app.connect.NRG_26_60.toolbar_panel');

app.connect.NRG_26_60.toolbar_panel.NRG_26_60_toolbar_panel = (function (){var G__66776 = (function app$connect$NRG_26_60$toolbar_panel$NRG_26_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__66779 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRG-26-60-show-toolbar","NRG-26-60-show-toolbar",149526372)], null));
if(cljs.core.truth_(show_toolbar)){
var G__66790 = helix.core.Fragment;
var G__66791 = ({"children": [(function (){var G__66792 = app.shared.components.toolbar.title;
var G__66793 = (function (){var obj66805 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Electrode"});
return obj66805;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66792,G__66793) : helix.core.jsx.call(null,G__66792,G__66793));
})(),(function (){var G__66810 = app.shared.components.toolbar.title;
var G__66811 = (function (){var obj66834 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRG 26-60"});
return obj66834;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66810,G__66811) : helix.core.jsx.call(null,G__66810,G__66811));
})(),(function (){var G__66857 = app.shared.components.toolbar.btn_wrapper;
var G__66858 = (function (){var obj66870 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__66882 = app.shared.components.toolbar.btn_replace;
var G__66883 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66882,G__66883) : helix.core.jsx.call(null,G__66882,G__66883));
})()});
return obj66870;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66857,G__66858) : helix.core.jsx.call(null,G__66857,G__66858));
})(),(function (){var G__66944 = app.shared.components.toolbar.btn_wrapper;
var G__66945 = (function (){var obj66951 = ({"x":(1064),"y":(54),"children":(function (){var G__66962 = app.shared.components.toolbar.btn_divider;
var G__66963 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66962,G__66963) : helix.core.jsx.call(null,G__66962,G__66963));
})()});
return obj66951;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66944,G__66945) : helix.core.jsx.call(null,G__66944,G__66945));
})(),(function (){var G__66982 = app.shared.components.toolbar.btn_wrapper;
var G__66983 = (function (){var obj66993 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__67020 = app.shared.components.toolbar.btn_full_screen;
var G__67021 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67020,G__67021) : helix.core.jsx.call(null,G__67020,G__67021));
})()});
return obj66993;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__66982,G__66983) : helix.core.jsx.call(null,G__66982,G__66983));
})(),(function (){var G__67046 = app.shared.components.toolbar.btn_wrapper;
var G__67047 = (function (){var obj67059 = ({"x":(1174),"y":(54),"children":(function (){var G__67074 = app.shared.components.toolbar.btn_divider;
var G__67075 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67074,G__67075) : helix.core.jsx.call(null,G__67074,G__67075));
})()});
return obj67059;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67046,G__67047) : helix.core.jsx.call(null,G__67046,G__67047));
})(),(function (){var G__67100 = app.shared.components.toolbar.btn_wrapper;
var G__67102 = (function (){var obj67113 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"The NRG 26-60 level electrode can be used together with an NRR 2-60/NRR 2-61 level controller to continuously measure the water level in steam boiler and hot water installations or in condensate and feedwater tanks. In combination with the NRR 2-60/NRR 2-61 level controller, the electrode can be used as a level control system with MIN/MAX alarm, for example."], null)], null));
}),"children":(function (){var G__67139 = app.shared.components.toolbar.btn_info;
var G__67141 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67139,G__67141) : helix.core.jsx.call(null,G__67139,G__67141));
})()});
return obj67113;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67100,G__67102) : helix.core.jsx.call(null,G__67100,G__67102));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__66790,G__66791) : helix.core.jsxs.call(null,G__66790,G__66791));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__67177 = G__66776;
(G__67177.displayName = "app.connect.NRG-26-60.toolbar-panel/NRG-26-60-toolbar-panel");

return G__67177;
} else {
return G__66776;
}
})();




//# sourceMappingURL=app.connect.NRG_26_60.toolbar_panel.js.map
