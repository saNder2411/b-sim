goog.provide('app.ui.kits.connect.URW_60.toolbar_panel');

app.ui.kits.connect.URW_60.toolbar_panel.URW_60_toolbar_panel = (function (){var G__39950 = (function app$ui$kits$connect$URW_60$toolbar_panel$URW_60_toolbar_panel_render(props__27613__auto__,maybe_ref__27614__auto__){
var vec__39953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27613__auto__),maybe_ref__27614__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URW-60-show-toolbar","URW-60-show-toolbar",-935397957)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stop",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__39971 = helix.core.Fragment;
var G__39972 = ({"children": [(function (){var G__39975 = app.ui.shared.components.toolbar.title;
var G__39976 = (function (){var obj39988 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Universal Converter"});
return obj39988;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39975,G__39976) : helix.core.jsx.call(null,G__39975,G__39976));
})(),(function (){var G__40000 = app.ui.shared.components.toolbar.title;
var G__40001 = (function (){var obj40009 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URW 60"});
return obj40009;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40000,G__40001) : helix.core.jsx.call(null,G__40000,G__40001));
})(),(function (){var G__40015 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40016 = (function (){var obj40024 = ({"x":(807),"y":(54),"inactive":inactive,"on-click":(function (){
return null;
}),"children":(function (){var G__40035 = app.ui.shared.components.toolbar.btn_replace;
var G__40036 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40035,G__40036) : helix.core.jsx.call(null,G__40035,G__40036));
})()});
return obj40024;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40015,G__40016) : helix.core.jsx.call(null,G__40015,G__40016));
})(),(function (){var G__40050 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40051 = (function (){var obj40059 = ({"x":(867),"y":(54),"children":(function (){var G__40065 = app.ui.shared.components.toolbar.btn_divider;
var G__40067 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40065,G__40067) : helix.core.jsx.call(null,G__40065,G__40067));
})()});
return obj40059;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40050,G__40051) : helix.core.jsx.call(null,G__40050,G__40051));
})(),(function (){var G__40085 = app.ui.shared.components.toolbar.switch_panel;
var G__40086 = (function (){var obj40092 = ({"x":(917),"y":(12),"children":[(function (){var G__40097 = app.ui.shared.components.toolbar.switch$;
var G__40098 = (function (){var obj40104 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URW-60","change-URW-60",512851008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj40104;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40097,G__40098) : helix.core.jsx.call(null,G__40097,G__40098));
})(),(function (){var G__40123 = app.ui.shared.components.toolbar.switch$;
var G__40124 = (function (){var obj40130 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URW-60","change-URW-60",512851008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj40130;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40123,G__40124) : helix.core.jsx.call(null,G__40123,G__40124));
})(),(function (){var G__40149 = app.ui.shared.components.toolbar.switch$;
var G__40150 = (function (){var obj40154 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URW-60","change-URW-60",512851008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj40154;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40149,G__40150) : helix.core.jsx.call(null,G__40149,G__40150));
})(),(function (){var G__40173 = app.ui.shared.components.toolbar.switch$;
var G__40174 = (function (){var obj40182 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URW-60","change-URW-60",512851008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj40182;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40173,G__40174) : helix.core.jsx.call(null,G__40173,G__40174));
})()]});
return obj40092;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40085,G__40086) : helix.core.jsxs.call(null,G__40085,G__40086));
})(),(function (){var G__40196 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40197 = (function (){var obj40199 = ({"x":(1064),"y":(54),"children":(function (){var G__40206 = app.ui.shared.components.toolbar.btn_divider;
var G__40207 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40206,G__40207) : helix.core.jsx.call(null,G__40206,G__40207));
})()});
return obj40199;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40196,G__40197) : helix.core.jsx.call(null,G__40196,G__40197));
})(),(function (){var G__40216 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40217 = (function (){var obj40221 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URW-60","change-URW-60",512851008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen?","full-screen?",-1681227426)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__40234 = app.ui.shared.components.toolbar.btn_full_screen;
var G__40235 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40234,G__40235) : helix.core.jsx.call(null,G__40234,G__40235));
})()});
return obj40221;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40216,G__40217) : helix.core.jsx.call(null,G__40216,G__40217));
})(),(function (){var G__40239 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40240 = (function (){var obj40248 = ({"x":(1174),"y":(54),"children":(function (){var G__40253 = app.ui.shared.components.toolbar.btn_divider;
var G__40254 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40253,G__40254) : helix.core.jsx.call(null,G__40253,G__40254));
})()});
return obj40248;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40239,G__40240) : helix.core.jsx.call(null,G__40239,G__40240));
})(),(function (){var G__40265 = app.ui.shared.components.toolbar.btn_wrapper;
var G__40266 = (function (){var obj40270 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Universal Converter",new cljs.core.Keyword(null,"text","text",-1790561697),"The universal converter converts the analogue 4-20 mA signals from a connected level electrode into CAN bus telegrams. The data are transferred to an ISO 11898 CAN bus via the CAN open protocol. Function tests and failure diagnosis are performed using the URB 60 visual display and operating unit."], null)], null));
}),"children":(function (){var G__40288 = app.ui.shared.components.toolbar.btn_info;
var G__40289 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40288,G__40289) : helix.core.jsx.call(null,G__40288,G__40289));
})()});
return obj40270;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40265,G__40266) : helix.core.jsx.call(null,G__40265,G__40266));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39971,G__39972) : helix.core.jsxs.call(null,G__39971,G__39972));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__40311 = G__39950;
(G__40311.displayName = "app.ui.kits.connect.URW-60.toolbar-panel/URW-60-toolbar-panel");

return G__40311;
} else {
return G__39950;
}
})();




//# sourceMappingURL=app.ui.kits.connect.URW_60.toolbar_panel.js.map
