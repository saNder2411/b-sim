goog.provide('app.connect.NRG_26_60.toolbar_panel');

app.connect.NRG_26_60.toolbar_panel.NRG_26_60_toolbar_panel = (function (){var G__61035 = (function app$connect$NRG_26_60$toolbar_panel$NRG_26_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__61036 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"NRG-26-60-show-toolbar","NRG-26-60-show-toolbar",149526372)], null));
if(cljs.core.truth_(show_toolbar)){
var G__61039 = helix.core.Fragment;
var G__61040 = ({"children": [(function (){var G__61041 = app.shared.components.toolbar_title.toolbar_title;
var G__61042 = (function (){var obj61044 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Level Electrode"});
return obj61044;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61041,G__61042) : helix.core.jsx.call(null,G__61041,G__61042));
})(),(function (){var G__61045 = app.shared.components.toolbar_title.toolbar_title;
var G__61046 = (function (){var obj61048 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"NRG 26-60"});
return obj61048;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61045,G__61046) : helix.core.jsx.call(null,G__61045,G__61046));
})(),(function (){var G__61049 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__61050 = (function (){var obj61052 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__61053 = app.shared.components.toolbar_btn_replace.toolbar_btn_replace;
var G__61054 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61053,G__61054) : helix.core.jsx.call(null,G__61053,G__61054));
})()});
return obj61052;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61049,G__61050) : helix.core.jsx.call(null,G__61049,G__61050));
})(),(function (){var G__61055 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__61056 = (function (){var obj61058 = ({"x":(1064),"y":(54),"children":(function (){var G__61059 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__61060 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61059,G__61060) : helix.core.jsx.call(null,G__61059,G__61060));
})()});
return obj61058;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61055,G__61056) : helix.core.jsx.call(null,G__61055,G__61056));
})(),(function (){var G__61061 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__61062 = (function (){var obj61064 = ({"x":(1114),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__61065 = app.shared.components.toolbar_btn_full_screen.toolbar_btn_full_screen;
var G__61066 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61065,G__61066) : helix.core.jsx.call(null,G__61065,G__61066));
})()});
return obj61064;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61061,G__61062) : helix.core.jsx.call(null,G__61061,G__61062));
})(),(function (){var G__61067 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__61068 = (function (){var obj61070 = ({"x":(1174),"y":(54),"children":(function (){var G__61071 = app.shared.components.toolbar_btn_divider.toolbar_btn_divider;
var G__61072 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61071,G__61072) : helix.core.jsx.call(null,G__61071,G__61072));
})()});
return obj61070;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61067,G__61068) : helix.core.jsx.call(null,G__61067,G__61068));
})(),(function (){var G__61073 = app.shared.components.toolbar_btn_wrapper.toolbar_btn_wrapper;
var G__61074 = (function (){var obj61076 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Level Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"The NRG 26-60 level electrode can be used together with an NRR 2-60/NRR 2-61 level controller to continuously measure the water level in steam boiler and hot water installations or in condensate and feedwater tanks. In combination with the NRR 2-60/NRR 2-61 level controller, the electrode can be used as a level control system with MIN/MAX alarm, for example."], null)], null));
}),"children":(function (){var G__61077 = app.shared.components.toolbar_btn_info.toolbar_btn_info;
var G__61078 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61077,G__61078) : helix.core.jsx.call(null,G__61077,G__61078));
})()});
return obj61076;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61073,G__61074) : helix.core.jsx.call(null,G__61073,G__61074));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__61039,G__61040) : helix.core.jsxs.call(null,G__61039,G__61040));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__61079 = G__61035;
(G__61079.displayName = "app.connect.NRG-26-60.toolbar-panel/NRG-26-60-toolbar-panel");

return G__61079;
} else {
return G__61035;
}
})();




//# sourceMappingURL=app.connect.NRG_26_60.toolbar_panel.js.map
