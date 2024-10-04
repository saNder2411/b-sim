goog.provide('app.ui.kits.connect.LRG_16_60.toolbar_panel');

app.ui.kits.connect.LRG_16_60.toolbar_panel.LRG_16_60_toolbar_panel = (function (){var G__37925 = (function app$ui$kits$connect$LRG_16_60$toolbar_panel$LRG_16_60_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37996 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-60","show-toolbar","LRG-16-60/show-toolbar",1107312561)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
if(cljs.core.truth_(show_toolbar)){
var G__38042 = helix.core.Fragment;
var G__38043 = ({"children": [(function (){var G__38066 = app.ui.shared.components.toolbar.title;
var G__38067 = (function (){var obj38080 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Conductivity Electrode"});
return obj38080;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38066,G__38067) : helix.core.jsx.call(null,G__38066,G__38067));
})(),(function (){var G__38097 = app.ui.shared.components.toolbar.title;
var G__38098 = (function (){var obj38139 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"LRG 16-60"});
return obj38139;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38097,G__38098) : helix.core.jsx.call(null,G__38097,G__38098));
})(),(function (){var G__38160 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38161 = (function (){var obj38177 = ({"x":(894),"y":(54),"on-click":(function (){
return null;
}),"inactive":inactive,"children":(function (){var G__38199 = app.ui.shared.components.toolbar.btn_replace;
var G__38200 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38199,G__38200) : helix.core.jsx.call(null,G__38199,G__38200));
})()});
return obj38177;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38160,G__38161) : helix.core.jsx.call(null,G__38160,G__38161));
})(),(function (){var G__38222 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38224 = (function (){var obj38235 = ({"x":(954),"y":(54),"children":(function (){var G__38240 = app.ui.shared.components.toolbar.btn_divider;
var G__38242 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38240,G__38242) : helix.core.jsx.call(null,G__38240,G__38242));
})()});
return obj38235;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38222,G__38224) : helix.core.jsx.call(null,G__38222,G__38224));
})(),(function (){var G__38272 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38273 = (function (){var obj38275 = ({"x":(1004),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-60","change","LRG-16-60/change",1150022472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),true], null)], null));
}),"children":(function (){var G__38286 = app.ui.shared.components.toolbar.btn_full_screen;
var G__38287 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38286,G__38287) : helix.core.jsx.call(null,G__38286,G__38287));
})()});
return obj38275;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38272,G__38273) : helix.core.jsx.call(null,G__38272,G__38273));
})(),(function (){var G__38304 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38305 = (function (){var obj38313 = ({"x":(1064),"y":(54),"children":(function (){var G__38316 = app.ui.shared.components.toolbar.btn_divider;
var G__38317 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38316,G__38317) : helix.core.jsx.call(null,G__38316,G__38317));
})()});
return obj38313;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38304,G__38305) : helix.core.jsx.call(null,G__38304,G__38305));
})(),(function (){var G__38334 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38335 = (function (){var obj38341 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-60","change","LRG-16-60/change",1150022472),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__38354 = app.ui.shared.components.toolbar.btn_settings;
var G__38355 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38354,G__38355) : helix.core.jsx.call(null,G__38354,G__38355));
})()});
return obj38341;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38334,G__38335) : helix.core.jsx.call(null,G__38334,G__38335));
})(),(function (){var G__38367 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38368 = (function (){var obj38375 = ({"x":(1174),"y":(54),"children":(function (){var G__38388 = app.ui.shared.components.toolbar.btn_divider;
var G__38389 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38388,G__38389) : helix.core.jsx.call(null,G__38388,G__38389));
})()});
return obj38375;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38367,G__38368) : helix.core.jsx.call(null,G__38367,G__38368));
})(),(function (){var G__38400 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38401 = (function (){var obj38405 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Conductivity Electrode",new cljs.core.Keyword(null,"text","text",-1790561697),"LRG 1x-6x conductivity electrodes are used in combination with the URS 60/URS 61 safety control unit as a conductivity limiter and in combination with an LRR 1-60 control unit as a continuous blowdown regulator in steam boiler systems and hot-water plants."], null)], null));
}),"children":(function (){var G__38415 = app.ui.shared.components.toolbar.btn_info;
var G__38416 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38415,G__38416) : helix.core.jsx.call(null,G__38415,G__38416));
})()});
return obj38405;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38400,G__38401) : helix.core.jsx.call(null,G__38400,G__38401));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38042,G__38043) : helix.core.jsxs.call(null,G__38042,G__38043));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38426 = G__37925;
(G__38426.displayName = "app.ui.kits.connect.LRG-16-60.toolbar-panel/LRG-16-60-toolbar-panel");

return G__38426;
} else {
return G__37925;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRG_16_60.toolbar_panel.js.map
