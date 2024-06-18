goog.provide('app.connect.URB_60.toolbar_panel');

app.connect.URB_60.toolbar_panel.URB_60_toolbar_panel = (function (){var G__59619 = (function app$connect$URB_60$toolbar_panel$URB_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__59620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URB-60-show-toolbar","URB-60-show-toolbar",-1443227626)], null));
if(cljs.core.truth_(show_toolbar)){
var G__59623 = helix.core.Fragment;
var G__59624 = ({"children": [(function (){var G__59625 = app.shared.components.toolbar_title.toolbar_title;
var G__59626 = (function (){var obj59628 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Visual Display and Operating Unit"});
return obj59628;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__59625,G__59626) : helix.core.jsx.call(null,G__59625,G__59626));
})(),(function (){var G__59629 = app.shared.components.toolbar_title.toolbar_title;
var G__59630 = (function (){var obj59632 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URB 60"});
return obj59632;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__59629,G__59630) : helix.core.jsx.call(null,G__59629,G__59630));
})(),(function (){var G__59633 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__59634 = (function (){var obj59636 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__59637 = app.shared.components.toolbar_btn_full_screen.toolbar_btn_full_screen;
var G__59638 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__59637,G__59638) : helix.core.jsx.call(null,G__59637,G__59638));
})()});
return obj59636;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__59633,G__59634) : helix.core.jsx.call(null,G__59633,G__59634));
})(),(function (){var G__59639 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__59640 = (function (){var obj59642 = ({"x":(1174),"y":(54),"children":(function (){var G__59643 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__59644 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__59643,G__59644) : helix.core.jsx.call(null,G__59643,G__59644));
})()});
return obj59642;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__59639,G__59640) : helix.core.jsx.call(null,G__59639,G__59640));
})(),(function (){var G__59645 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__59646 = (function (){var obj59648 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Visual Display and Operating Unit",new cljs.core.Keyword(null,"text","text",-1790561697),"The URB 60 visual display and operating unit can be used in conjunction with various GESTRA CAN bus units from the SPECTORconnect series. The URB 60 is designed for installation in a control cabinet door or switch panel. It may only be used when correctly installed."], null)], null));
}),"children":(function (){var G__59649 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__59650 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__59649,G__59650) : helix.core.jsx.call(null,G__59649,G__59650));
})()});
return obj59648;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__59645,G__59646) : helix.core.jsx.call(null,G__59645,G__59646));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__59623,G__59624) : helix.core.jsxs.call(null,G__59623,G__59624));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__59651 = G__59619;
(G__59651.displayName = "app.connect.URB-60.toolbar-panel/URB-60-toolbar-panel");

return G__59651;
} else {
return G__59619;
}
})();




//# sourceMappingURL=app.connect.URB_60.toolbar_panel.js.map
