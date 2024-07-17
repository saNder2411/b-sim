goog.provide('app.ui.kits.connect.NRG_26_60.toolbar_panel');

app.ui.kits.connect.NRG_26_60.toolbar_panel.NRG_26_60_toolbar_panel = (function (){var G__31163 = (function app$ui$kits$connect$NRG_26_60$toolbar_panel$NRG_26_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31168 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRG-26-60-show-toolbar","NRG-26-60-show-toolbar",149526372)], null));
if(cljs.core.truth_(show_toolbar)){
var G__31173 = helix.core.Fragment;
var G__31174 = ({"children": [(function (){var G__31179 = app.ui.shared.components.toolbar.title;
var G__31180 = (function (){var obj31183 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Electrode"});
return obj31183;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31179,G__31180) : helix.core.jsx.call(null,G__31179,G__31180));
})(),(function (){var G__31187 = app.ui.shared.components.toolbar.title;
var G__31190 = (function (){var obj31195 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRG 26-60"});
return obj31195;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31187,G__31190) : helix.core.jsx.call(null,G__31187,G__31190));
})(),(function (){var G__31203 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31204 = (function (){var obj31206 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__31240 = app.ui.shared.components.toolbar.btn_replace;
var G__31241 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31240,G__31241) : helix.core.jsx.call(null,G__31240,G__31241));
})()});
return obj31206;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31203,G__31204) : helix.core.jsx.call(null,G__31203,G__31204));
})(),(function (){var G__31250 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31251 = (function (){var obj31256 = ({"x":(1064),"y":(54),"children":(function (){var G__31259 = app.ui.shared.components.toolbar.btn_divider;
var G__31260 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31259,G__31260) : helix.core.jsx.call(null,G__31259,G__31260));
})()});
return obj31256;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31250,G__31251) : helix.core.jsx.call(null,G__31250,G__31251));
})(),(function (){var G__31276 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31277 = (function (){var obj31291 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__31305 = app.ui.shared.components.toolbar.btn_full_screen;
var G__31306 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31305,G__31306) : helix.core.jsx.call(null,G__31305,G__31306));
})()});
return obj31291;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31276,G__31277) : helix.core.jsx.call(null,G__31276,G__31277));
})(),(function (){var G__31596 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31597 = (function (){var obj31606 = ({"x":(1174),"y":(54),"children":(function (){var G__31618 = app.ui.shared.components.toolbar.btn_divider;
var G__31619 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31618,G__31619) : helix.core.jsx.call(null,G__31618,G__31619));
})()});
return obj31606;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31596,G__31597) : helix.core.jsx.call(null,G__31596,G__31597));
})(),(function (){var G__31634 = app.ui.shared.components.toolbar.btn_wrapper;
var G__31635 = (function (){var obj31643 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"The NRG 26-60 level electrode can be used together with an NRR 2-60/NRR 2-61 level controller to continuously measure the water level in steam boiler and hot water installations or in condensate and feedwater tanks. In combination with the NRR 2-60/NRR 2-61 level controller, the electrode can be used as a level control system with MIN/MAX alarm, for example."], null)], null));
}),"children":(function (){var G__31648 = app.ui.shared.components.toolbar.btn_info;
var G__31649 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31648,G__31649) : helix.core.jsx.call(null,G__31648,G__31649));
})()});
return obj31643;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31634,G__31635) : helix.core.jsx.call(null,G__31634,G__31635));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31173,G__31174) : helix.core.jsxs.call(null,G__31173,G__31174));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31723 = G__31163;
(G__31723.displayName = "app.ui.kits.connect.NRG-26-60.toolbar-panel/NRG-26-60-toolbar-panel");

return G__31723;
} else {
return G__31163;
}
})();




//# sourceMappingURL=app.ui.kits.connect.NRG_26_60.toolbar_panel.js.map
