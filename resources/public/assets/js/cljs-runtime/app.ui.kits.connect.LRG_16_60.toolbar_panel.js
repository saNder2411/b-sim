goog.provide('app.ui.kits.connect.LRG_16_60.toolbar_panel');

app.ui.kits.connect.LRG_16_60.toolbar_panel.LRG_16_60_toolbar_panel = (function (){var G__39709 = (function app$ui$kits$connect$LRG_16_60$toolbar_panel$LRG_16_60_toolbar_panel_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__39715 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRG-16-60-show-toolbar","LRG-16-60-show-toolbar",385215925)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
if(cljs.core.truth_(show_toolbar)){
var G__39727 = helix.core.Fragment;
var G__39728 = ({"children": [(function (){var G__39731 = app.ui.shared.components.toolbar.title;
var G__39732 = (function (){var obj39738 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Electrode"});
return obj39738;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39731,G__39732) : helix.core.jsx.call(null,G__39731,G__39732));
})(),(function (){var G__39741 = app.ui.shared.components.toolbar.title;
var G__39742 = (function (){var obj39746 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRG 16-60"});
return obj39746;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39741,G__39742) : helix.core.jsx.call(null,G__39741,G__39742));
})(),(function (){var G__39755 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39756 = (function (){var obj39768 = ({"x":(894),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__39771 = app.ui.shared.components.toolbar.btn_replace;
var G__39772 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39771,G__39772) : helix.core.jsx.call(null,G__39771,G__39772));
})()});
return obj39768;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39755,G__39756) : helix.core.jsx.call(null,G__39755,G__39756));
})(),(function (){var G__39781 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39782 = (function (){var obj39786 = ({"x":(954),"y":(54),"children":(function (){var G__39793 = app.ui.shared.components.toolbar.btn_divider;
var G__39794 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39793,G__39794) : helix.core.jsx.call(null,G__39793,G__39794));
})()});
return obj39786;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39781,G__39782) : helix.core.jsx.call(null,G__39781,G__39782));
})(),(function (){var G__39803 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39804 = (function (){var obj39810 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),true], null)], null));
}),"children":(function (){var G__39814 = app.ui.shared.components.toolbar.btn_full_screen;
var G__39815 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39814,G__39815) : helix.core.jsx.call(null,G__39814,G__39815));
})()});
return obj39810;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39803,G__39804) : helix.core.jsx.call(null,G__39803,G__39804));
})(),(function (){var G__39826 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39827 = (function (){var obj39831 = ({"x":(1064),"y":(54),"children":(function (){var G__39833 = app.ui.shared.components.toolbar.btn_divider;
var G__39834 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39833,G__39834) : helix.core.jsx.call(null,G__39833,G__39834));
})()});
return obj39831;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39826,G__39827) : helix.core.jsx.call(null,G__39826,G__39827));
})(),(function (){var G__39845 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39846 = (function (){var obj39850 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__39855 = app.ui.shared.components.toolbar.btn_settings;
var G__39856 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39855,G__39856) : helix.core.jsx.call(null,G__39855,G__39856));
})()});
return obj39850;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39845,G__39846) : helix.core.jsx.call(null,G__39845,G__39846));
})(),(function (){var G__39863 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39864 = (function (){var obj39868 = ({"x":(1174),"y":(54),"children":(function (){var G__39873 = app.ui.shared.components.toolbar.btn_divider;
var G__39874 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39873,G__39874) : helix.core.jsx.call(null,G__39873,G__39874));
})()});
return obj39868;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39863,G__39864) : helix.core.jsx.call(null,G__39863,G__39864));
})(),(function (){var G__39878 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39879 = (function (){var obj39885 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"LRG 1x-6x conductivity electrodes are used in combination with the URS 60/URS 61 safety control unit as a conductivity limiter and in combination with an LRR 1-60 control unit as a continuous blowdown regulator in steam boiler systems and hot-water plants."], null)], null));
}),"children":(function (){var G__39892 = app.ui.shared.components.toolbar.btn_info;
var G__39893 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39892,G__39893) : helix.core.jsx.call(null,G__39892,G__39893));
})()});
return obj39885;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39878,G__39879) : helix.core.jsx.call(null,G__39878,G__39879));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39727,G__39728) : helix.core.jsxs.call(null,G__39727,G__39728));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__39910 = G__39709;
(G__39910.displayName = "app.ui.kits.connect.LRG-16-60.toolbar-panel/LRG-16-60-toolbar-panel");

return G__39910;
} else {
return G__39709;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRG_16_60.toolbar_panel.js.map
