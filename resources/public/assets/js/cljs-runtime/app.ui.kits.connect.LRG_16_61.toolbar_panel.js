goog.provide('app.ui.kits.connect.LRG_16_61.toolbar_panel');

app.ui.kits.connect.LRG_16_61.toolbar_panel.LRG_16_61_toolbar_panel = (function (){var G__37895 = (function app$ui$kits$connect$LRG_16_61$toolbar_panel$LRG_16_61_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-61","show-toolbar","LRG-16-61/show-toolbar",1107312562)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
if(cljs.core.truth_(show_toolbar)){
var G__37918 = helix.core.Fragment;
var G__37920 = ({"children": [(function (){var G__37930 = app.ui.shared.components.toolbar.title;
var G__37933 = (function (){var obj37939 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Electrode"});
return obj37939;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37930,G__37933) : helix.core.jsx.call(null,G__37930,G__37933));
})(),(function (){var G__37954 = app.ui.shared.components.toolbar.title;
var G__37955 = (function (){var obj37962 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRG 16-61"});
return obj37962;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37954,G__37955) : helix.core.jsx.call(null,G__37954,G__37955));
})(),(function (){var G__37984 = app.ui.shared.components.toolbar.btn_wrapper;
var G__37985 = (function (){var obj37995 = ({"x":(894),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__38017 = app.ui.shared.components.toolbar.btn_replace;
var G__38018 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38017,G__38018) : helix.core.jsx.call(null,G__38017,G__38018));
})()});
return obj37995;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37984,G__37985) : helix.core.jsx.call(null,G__37984,G__37985));
})(),(function (){var G__38123 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38124 = (function (){var obj38134 = ({"x":(954),"y":(54),"children":(function (){var G__38150 = app.ui.shared.components.toolbar.btn_divider;
var G__38151 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38150,G__38151) : helix.core.jsx.call(null,G__38150,G__38151));
})()});
return obj38134;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38123,G__38124) : helix.core.jsx.call(null,G__38123,G__38124));
})(),(function (){var G__38172 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38173 = (function (){var obj38187 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-61","change","LRG-16-61/change",1150022471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),true], null)], null));
}),"children":(function (){var G__38205 = app.ui.shared.components.toolbar.btn_full_screen;
var G__38206 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38205,G__38206) : helix.core.jsx.call(null,G__38205,G__38206));
})()});
return obj38187;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38172,G__38173) : helix.core.jsx.call(null,G__38172,G__38173));
})(),(function (){var G__38226 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38227 = (function (){var obj38237 = ({"x":(1064),"y":(54),"children":(function (){var G__38244 = app.ui.shared.components.toolbar.btn_divider;
var G__38245 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38244,G__38245) : helix.core.jsx.call(null,G__38244,G__38245));
})()});
return obj38237;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38226,G__38227) : helix.core.jsx.call(null,G__38226,G__38227));
})(),(function (){var G__38257 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38258 = (function (){var obj38267 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-61","change","LRG-16-61/change",1150022471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__38280 = app.ui.shared.components.toolbar.btn_settings;
var G__38281 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38280,G__38281) : helix.core.jsx.call(null,G__38280,G__38281));
})()});
return obj38267;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38257,G__38258) : helix.core.jsx.call(null,G__38257,G__38258));
})(),(function (){var G__38294 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38295 = (function (){var obj38303 = ({"x":(1174),"y":(54),"children":(function (){var G__38310 = app.ui.shared.components.toolbar.btn_divider;
var G__38311 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38310,G__38311) : helix.core.jsx.call(null,G__38310,G__38311));
})()});
return obj38303;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38294,G__38295) : helix.core.jsx.call(null,G__38294,G__38295));
})(),(function (){var G__38323 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38325 = (function (){var obj38333 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"LRG 1x-6x conductivity electrodes are used in combination with the URS 60/URS 61 safety control unit as a conductivity limiter and in combination with an LRR 1-60 control unit as a continuous blowdown regulator in steam boiler systems and hot-water plants."], null)], null));
}),"children":(function (){var G__38348 = app.ui.shared.components.toolbar.btn_info;
var G__38349 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38348,G__38349) : helix.core.jsx.call(null,G__38348,G__38349));
})()});
return obj38333;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38323,G__38325) : helix.core.jsx.call(null,G__38323,G__38325));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37918,G__37920) : helix.core.jsxs.call(null,G__37918,G__37920));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38371 = G__37895;
(G__38371.displayName = "app.ui.kits.connect.LRG-16-61.toolbar-panel/LRG-16-61-toolbar-panel");

return G__38371;
} else {
return G__37895;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRG_16_61.toolbar_panel.js.map
