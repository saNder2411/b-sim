goog.provide('app.ui.kits.connect.URW_60.toolbar_panel');

app.ui.kits.connect.URW_60.toolbar_panel.URW_60_toolbar_panel = (function (){var G__34292 = (function app$ui$kits$connect$URW_60$toolbar_panel$URW_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34293 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URW-60-show-toolbar","URW-60-show-toolbar",-935397957)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__34335 = helix.core.Fragment;
var G__34336 = ({"children": [(function (){var G__34339 = app.ui.shared.components.toolbar.title;
var G__34340 = (function (){var obj34368 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Universal Converter"});
return obj34368;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34339,G__34340) : helix.core.jsx.call(null,G__34339,G__34340));
})(),(function (){var G__34377 = app.ui.shared.components.toolbar.title;
var G__34378 = (function (){var obj34380 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URW 60"});
return obj34380;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34377,G__34378) : helix.core.jsx.call(null,G__34377,G__34378));
})(),(function (){var G__34388 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34389 = (function (){var obj34395 = ({"x":(807),"y":(54),"inactive":inactive,"on-click":(function (){
return null;
}),"children":(function (){var G__34406 = app.ui.shared.components.toolbar.btn_replace;
var G__34407 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34406,G__34407) : helix.core.jsx.call(null,G__34406,G__34407));
})()});
return obj34395;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34388,G__34389) : helix.core.jsx.call(null,G__34388,G__34389));
})(),(function (){var G__34418 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34419 = (function (){var obj34427 = ({"x":(867),"y":(54),"children":(function (){var G__34430 = app.ui.shared.components.toolbar.btn_divider;
var G__34431 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34430,G__34431) : helix.core.jsx.call(null,G__34430,G__34431));
})()});
return obj34427;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34418,G__34419) : helix.core.jsx.call(null,G__34418,G__34419));
})(),(function (){var G__34438 = app.ui.shared.components.toolbar.switch_panel;
var G__34439 = (function (){var obj34443 = ({"x":(917),"y":(12),"children":[(function (){var G__34446 = app.ui.shared.components.toolbar.switch$;
var G__34447 = (function (){var obj34450 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URW-60","change-URW-60",512851008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj34450;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34446,G__34447) : helix.core.jsx.call(null,G__34446,G__34447));
})(),(function (){var G__34457 = app.ui.shared.components.toolbar.switch$;
var G__34458 = (function (){var obj34462 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URW-60","change-URW-60",512851008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj34462;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34457,G__34458) : helix.core.jsx.call(null,G__34457,G__34458));
})(),(function (){var G__34467 = app.ui.shared.components.toolbar.switch$;
var G__34468 = (function (){var obj34472 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URW-60","change-URW-60",512851008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj34472;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34467,G__34468) : helix.core.jsx.call(null,G__34467,G__34468));
})(),(function (){var G__34477 = app.ui.shared.components.toolbar.switch$;
var G__34478 = (function (){var obj34482 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URW-60","change-URW-60",512851008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj34482;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34477,G__34478) : helix.core.jsx.call(null,G__34477,G__34478));
})()]});
return obj34443;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34438,G__34439) : helix.core.jsxs.call(null,G__34438,G__34439));
})(),(function (){var G__34484 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34485 = (function (){var obj34490 = ({"x":(1064),"y":(54),"children":(function (){var G__34493 = app.ui.shared.components.toolbar.btn_divider;
var G__34494 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34493,G__34494) : helix.core.jsx.call(null,G__34493,G__34494));
})()});
return obj34490;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34484,G__34485) : helix.core.jsx.call(null,G__34484,G__34485));
})(),(function (){var G__34498 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34499 = (function (){var obj34503 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URW-60","change-URW-60",512851008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__34506 = app.ui.shared.components.toolbar.btn_full_screen;
var G__34507 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34506,G__34507) : helix.core.jsx.call(null,G__34506,G__34507));
})()});
return obj34503;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34498,G__34499) : helix.core.jsx.call(null,G__34498,G__34499));
})(),(function (){var G__34513 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34514 = (function (){var obj34516 = ({"x":(1174),"y":(54),"children":(function (){var G__34527 = app.ui.shared.components.toolbar.btn_divider;
var G__34528 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34527,G__34528) : helix.core.jsx.call(null,G__34527,G__34528));
})()});
return obj34516;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34513,G__34514) : helix.core.jsx.call(null,G__34513,G__34514));
})(),(function (){var G__34540 = app.ui.shared.components.toolbar.btn_wrapper;
var G__34541 = (function (){var obj34544 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Universal Converter",new cljs.core.Keyword(null,"text","text",-1790561697),"The universal converter converts the analogue 4-20 mA signals from a connected level electrode into CAN bus telegrams. The data are transferred to an ISO 11898 CAN bus via the CAN open protocol. Function tests and failure diagnosis are performed using the URB 60 visual display and operating unit."], null)], null));
}),"children":(function (){var G__34547 = app.ui.shared.components.toolbar.btn_info;
var G__34548 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34547,G__34548) : helix.core.jsx.call(null,G__34547,G__34548));
})()});
return obj34544;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34540,G__34541) : helix.core.jsx.call(null,G__34540,G__34541));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34335,G__34336) : helix.core.jsxs.call(null,G__34335,G__34336));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__34552 = G__34292;
(G__34552.displayName = "app.ui.kits.connect.URW-60.toolbar-panel/URW-60-toolbar-panel");

return G__34552;
} else {
return G__34292;
}
})();




//# sourceMappingURL=app.ui.kits.connect.URW_60.toolbar_panel.js.map
