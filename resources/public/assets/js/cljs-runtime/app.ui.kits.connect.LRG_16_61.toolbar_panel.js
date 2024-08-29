goog.provide('app.ui.kits.connect.LRG_16_61.toolbar_panel');

app.ui.kits.connect.LRG_16_61.toolbar_panel.LRG_16_61_toolbar_panel = (function (){var G__39747 = (function app$ui$kits$connect$LRG_16_61$toolbar_panel$LRG_16_61_toolbar_panel_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__39764 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"LRG-16-61-show-toolbar","LRG-16-61-show-toolbar",1337876699)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
if(cljs.core.truth_(show_toolbar)){
var G__39777 = helix.core.Fragment;
var G__39778 = ({"children": [(function (){var G__39783 = app.ui.shared.components.toolbar.title;
var G__39784 = (function (){var obj39788 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Electrode"});
return obj39788;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39783,G__39784) : helix.core.jsx.call(null,G__39783,G__39784));
})(),(function (){var G__39798 = app.ui.shared.components.toolbar.title;
var G__39799 = (function (){var obj39808 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRG 16-61"});
return obj39808;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39798,G__39799) : helix.core.jsx.call(null,G__39798,G__39799));
})(),(function (){var G__39816 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39817 = (function (){var obj39821 = ({"x":(894),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__39828 = app.ui.shared.components.toolbar.btn_replace;
var G__39829 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39828,G__39829) : helix.core.jsx.call(null,G__39828,G__39829));
})()});
return obj39821;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39816,G__39817) : helix.core.jsx.call(null,G__39816,G__39817));
})(),(function (){var G__39839 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39840 = (function (){var obj39844 = ({"x":(954),"y":(54),"children":(function (){var G__39847 = app.ui.shared.components.toolbar.btn_divider;
var G__39848 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39847,G__39848) : helix.core.jsx.call(null,G__39847,G__39848));
})()});
return obj39844;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39839,G__39840) : helix.core.jsx.call(null,G__39839,G__39840));
})(),(function (){var G__39859 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39860 = (function (){var obj39862 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-61","change-LRG-16-61",819141123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),true], null)], null));
}),"children":(function (){var G__39871 = app.ui.shared.components.toolbar.btn_full_screen;
var G__39872 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39871,G__39872) : helix.core.jsx.call(null,G__39871,G__39872));
})()});
return obj39862;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39859,G__39860) : helix.core.jsx.call(null,G__39859,G__39860));
})(),(function (){var G__39880 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39881 = (function (){var obj39887 = ({"x":(1064),"y":(54),"children":(function (){var G__39890 = app.ui.shared.components.toolbar.btn_divider;
var G__39891 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39890,G__39891) : helix.core.jsx.call(null,G__39890,G__39891));
})()});
return obj39887;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39880,G__39881) : helix.core.jsx.call(null,G__39880,G__39881));
})(),(function (){var G__39902 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39903 = (function (){var obj39908 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-61","change-LRG-16-61",819141123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__39913 = app.ui.shared.components.toolbar.btn_settings;
var G__39914 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39913,G__39914) : helix.core.jsx.call(null,G__39913,G__39914));
})()});
return obj39908;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39902,G__39903) : helix.core.jsx.call(null,G__39902,G__39903));
})(),(function (){var G__39924 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39925 = (function (){var obj39936 = ({"x":(1174),"y":(54),"children":(function (){var G__39939 = app.ui.shared.components.toolbar.btn_divider;
var G__39940 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39939,G__39940) : helix.core.jsx.call(null,G__39939,G__39940));
})()});
return obj39936;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39924,G__39925) : helix.core.jsx.call(null,G__39924,G__39925));
})(),(function (){var G__39941 = app.ui.shared.components.toolbar.btn_wrapper;
var G__39942 = (function (){var obj39944 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"LRG 1x-6x conductivity electrodes are used in combination with the URS 60/URS 61 safety control unit as a conductivity limiter and in combination with an LRR 1-60 control unit as a continuous blowdown regulator in steam boiler systems and hot-water plants."], null)], null));
}),"children":(function (){var G__39945 = app.ui.shared.components.toolbar.btn_info;
var G__39946 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39945,G__39946) : helix.core.jsx.call(null,G__39945,G__39946));
})()});
return obj39944;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39941,G__39942) : helix.core.jsx.call(null,G__39941,G__39942));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39777,G__39778) : helix.core.jsxs.call(null,G__39777,G__39778));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__39952 = G__39747;
(G__39952.displayName = "app.ui.kits.connect.LRG-16-61.toolbar-panel/LRG-16-61-toolbar-panel");

return G__39952;
} else {
return G__39747;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRG_16_61.toolbar_panel.js.map
