goog.provide('app.ui.kits.connect.LRG_16_60.toolbar_panel');

app.ui.kits.connect.LRG_16_60.toolbar_panel.LRG_16_60_toolbar_panel = (function (){var G__31512 = (function app$ui$kits$connect$LRG_16_60$toolbar_panel$LRG_16_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31529 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRG-16-60-show-toolbar","LRG-16-60-show-toolbar",385215925)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
if(cljs.core.truth_(show_toolbar)){
var G__31598 = helix.core.Fragment;
var G__31599 = ({"children": [(function (){var G__31611 = app.ui.shared.components.toolbar.title;
var G__31612 = (function (){var obj31621 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Electrode"});
return obj31621;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31611,G__31612) : helix.core.jsx.call(null,G__31611,G__31612));
})(),(function (){var G__31632 = app.ui.shared.components.toolbar.title;
var G__31633 = (function (){var obj31639 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRG 16-60"});
return obj31639;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31632,G__31633) : helix.core.jsx.call(null,G__31632,G__31633));
})(),(function (){var G__31646 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31647 = (function (){var obj31651 = ({"x":(894),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__31656 = app.ui.shared.components.toolbar.btn_replace;
var G__31657 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31656,G__31657) : helix.core.jsx.call(null,G__31656,G__31657));
})()});
return obj31651;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31646,G__31647) : helix.core.jsx.call(null,G__31646,G__31647));
})(),(function (){var G__31665 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31666 = (function (){var obj31670 = ({"x":(954),"y":(54),"children":(function (){var G__31673 = app.ui.shared.components.toolbar.btn_divider;
var G__31674 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31673,G__31674) : helix.core.jsx.call(null,G__31673,G__31674));
})()});
return obj31670;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31665,G__31666) : helix.core.jsx.call(null,G__31665,G__31666));
})(),(function (){var G__31685 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31686 = (function (){var obj31692 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),true], null)], null));
}),"children":(function (){var G__31701 = app.ui.shared.components.toolbar.btn_full_screen;
var G__31702 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31701,G__31702) : helix.core.jsx.call(null,G__31701,G__31702));
})()});
return obj31692;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31685,G__31686) : helix.core.jsx.call(null,G__31685,G__31686));
})(),(function (){var G__31711 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31712 = (function (){var obj31716 = ({"x":(1064),"y":(54),"children":(function (){var G__31719 = app.ui.shared.components.toolbar.btn_divider;
var G__31720 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31719,G__31720) : helix.core.jsx.call(null,G__31719,G__31720));
})()});
return obj31716;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31711,G__31712) : helix.core.jsx.call(null,G__31711,G__31712));
})(),(function (){var G__31727 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31728 = (function (){var obj31737 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__31742 = app.ui.shared.components.toolbar.btn_settings;
var G__31743 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31742,G__31743) : helix.core.jsx.call(null,G__31742,G__31743));
})()});
return obj31737;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31727,G__31728) : helix.core.jsx.call(null,G__31727,G__31728));
})(),(function (){var G__31754 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31755 = (function (){var obj31763 = ({"x":(1174),"y":(54),"children":(function (){var G__31766 = app.ui.shared.components.toolbar.btn_divider;
var G__31767 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31766,G__31767) : helix.core.jsx.call(null,G__31766,G__31767));
})()});
return obj31763;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31754,G__31755) : helix.core.jsx.call(null,G__31754,G__31755));
})(),(function (){var G__31789 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31790 = (function (){var obj31801 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"LRG 1x-6x conductivity electrodes are used in combination with the URS 60/URS 61 safety control unit as a conductivity limiter and in combination with an LRR 1-60 control unit as a continuous blowdown regulator in steam boiler systems and hot-water plants."], null)], null));
}),"children":(function (){var G__31804 = app.ui.shared.components.toolbar.btn_info;
var G__31805 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31804,G__31805) : helix.core.jsx.call(null,G__31804,G__31805));
})()});
return obj31801;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31789,G__31790) : helix.core.jsx.call(null,G__31789,G__31790));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31598,G__31599) : helix.core.jsxs.call(null,G__31598,G__31599));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31811 = G__31512;
(G__31811.displayName = "app.ui.kits.connect.LRG-16-60.toolbar-panel/LRG-16-60-toolbar-panel");

return G__31811;
} else {
return G__31512;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRG_16_60.toolbar_panel.js.map
