goog.provide('app.connect.URB_60.toolbar_panel');

app.connect.URB_60.toolbar_panel.URB_60_toolbar_panel = (function (){var G__42850 = (function app$connect$URB_60$toolbar_panel$URB_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__42857 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URB-60-show-toolbar","URB-60-show-toolbar",-1443227626)], null));
if(cljs.core.truth_(show_toolbar)){
var G__42861 = helix.core.Fragment;
var G__42862 = ({"children": [(function (){var G__42865 = app.shared.components.toolbar.title;
var G__42867 = (function (){var obj42873 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Visual Display and Operating Unit"});
return obj42873;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42865,G__42867) : helix.core.jsx.call(null,G__42865,G__42867));
})(),(function (){var G__42971 = app.shared.components.toolbar.title;
var G__42972 = (function (){var obj42974 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URB 60"});
return obj42974;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42971,G__42972) : helix.core.jsx.call(null,G__42971,G__42972));
})(),(function (){var G__42982 = app.shared.components.toolbar.btn_wrapper;
var G__42983 = (function (){var obj42991 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__43001 = app.shared.components.toolbar.btn_full_screen;
var G__43002 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43001,G__43002) : helix.core.jsx.call(null,G__43001,G__43002));
})()});
return obj42991;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__42982,G__42983) : helix.core.jsx.call(null,G__42982,G__42983));
})(),(function (){var G__43009 = app.shared.components.toolbar.btn_wrapper;
var G__43010 = (function (){var obj43016 = ({"x":(1174),"y":(54),"children":(function (){var G__43023 = app.shared.components.toolbar.btn_divider;
var G__43024 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43023,G__43024) : helix.core.jsx.call(null,G__43023,G__43024));
})()});
return obj43016;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43009,G__43010) : helix.core.jsx.call(null,G__43009,G__43010));
})(),(function (){var G__43035 = app.shared.components.toolbar.btn_wrapper;
var G__43036 = (function (){var obj43047 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Visual Display and Operating Unit",new cljs.core.Keyword(null,"text","text",-1790561697),"The URB 60 visual display and operating unit can be used in conjunction with various GESTRA CAN bus units from the SPECTORconnect series. The URB 60 is designed for installation in a control cabinet door or switch panel. It may only be used when correctly installed."], null)], null));
}),"children":(function (){var G__43050 = app.shared.components.toolbar.btn_info;
var G__43052 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43050,G__43052) : helix.core.jsx.call(null,G__43050,G__43052));
})()});
return obj43047;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43035,G__43036) : helix.core.jsx.call(null,G__43035,G__43036));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__42861,G__42862) : helix.core.jsxs.call(null,G__42861,G__42862));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__43073 = G__42850;
(G__43073.displayName = "app.connect.URB-60.toolbar-panel/URB-60-toolbar-panel");

return G__43073;
} else {
return G__42850;
}
})();




//# sourceMappingURL=app.connect.URB_60.toolbar_panel.js.map
