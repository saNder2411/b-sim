goog.provide('app.ui.kits.connect.URW_60.toolbar_panel');

app.ui.kits.connect.URW_60.toolbar_panel.URW_60_toolbar_panel = (function (){var G__44236 = (function app$ui$kits$connect$URW_60$toolbar_panel$URW_60_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__44237 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"URW-60-show-toolbar","URW-60-show-toolbar",-935397957)], null));
var sim = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sim","sim",-1444922721)], null));
var inactive = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("stopped",sim);
var full_screen = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null)], null));
var switch_1 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null)], null));
var switch_2 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null)], null));
var switch_3 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null)], null));
var switch_4 = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"converter","converter",-34185411),new cljs.core.Keyword(null,"controllers","controllers",-1120410624),"URW 60",new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null)], null));
if(cljs.core.truth_(show_toolbar)){
var G__44240 = helix.core.Fragment;
var G__44241 = ({"children": [(function (){var G__44242 = app.ui.shared.components.toolbar.title;
var G__44243 = (function (){var obj44245 = ({"x":(85),"y":(80),"fill":"#efefef","title":"Universal Converter"});
return obj44245;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44242,G__44243) : helix.core.jsx.call(null,G__44242,G__44243));
})(),(function (){var G__44246 = app.ui.shared.components.toolbar.title;
var G__44247 = (function (){var obj44249 = ({"x":(85),"y":(110),"fill":"#bcbcbc","title":"URW 60"});
return obj44249;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44246,G__44247) : helix.core.jsx.call(null,G__44246,G__44247));
})(),(function (){var G__44250 = app.ui.shared.components.toolbar.btn_wrapper;
var G__44251 = (function (){var obj44253 = ({"x":(807),"y":(54),"inactive":inactive,"on-click":(function (){
return null;
}),"children":(function (){var G__44254 = app.ui.shared.components.toolbar.btn_replace;
var G__44255 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44254,G__44255) : helix.core.jsx.call(null,G__44254,G__44255));
})()});
return obj44253;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44250,G__44251) : helix.core.jsx.call(null,G__44250,G__44251));
})(),(function (){var G__44256 = app.ui.shared.components.toolbar.btn_wrapper;
var G__44257 = (function (){var obj44259 = ({"x":(867),"y":(54),"children":(function (){var G__44260 = app.ui.shared.components.toolbar.btn_divider;
var G__44261 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44260,G__44261) : helix.core.jsx.call(null,G__44260,G__44261));
})()});
return obj44259;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44256,G__44257) : helix.core.jsx.call(null,G__44256,G__44257));
})(),(function (){var G__44262 = app.ui.shared.components.toolbar.switch_panel;
var G__44263 = (function (){var obj44265 = ({"x":(917),"y":(12),"children":[(function (){var G__44266 = app.ui.shared.components.toolbar.switch$;
var G__44267 = (function (){var obj44269 = ({"x":(0),"value":switch_1,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URW-60","change-URW-60",512851008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(1)], null),cljs.core.not(switch_1)], null)], null));
}),"legend":(1),"inactive":inactive});
return obj44269;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44266,G__44267) : helix.core.jsx.call(null,G__44266,G__44267));
})(),(function (){var G__44270 = app.ui.shared.components.toolbar.switch$;
var G__44271 = (function (){var obj44273 = ({"x":(35),"value":switch_2,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URW-60","change-URW-60",512851008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(2)], null),cljs.core.not(switch_2)], null)], null));
}),"legend":(2),"inactive":inactive});
return obj44273;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44270,G__44271) : helix.core.jsx.call(null,G__44270,G__44271));
})(),(function (){var G__44274 = app.ui.shared.components.toolbar.switch$;
var G__44275 = (function (){var obj44277 = ({"x":(70),"value":switch_3,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URW-60","change-URW-60",512851008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(3)], null),cljs.core.not(switch_3)], null)], null));
}),"legend":(3),"inactive":inactive});
return obj44277;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44274,G__44275) : helix.core.jsx.call(null,G__44274,G__44275));
})(),(function (){var G__44278 = app.ui.shared.components.toolbar.switch$;
var G__44279 = (function (){var obj44281 = ({"x":(105),"value":switch_4,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URW-60","change-URW-60",512851008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"switches","switches",2013040888),(4)], null),cljs.core.not(switch_4)], null)], null));
}),"legend":(4),"inactive":inactive});
return obj44281;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44278,G__44279) : helix.core.jsx.call(null,G__44278,G__44279));
})()]});
return obj44265;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__44262,G__44263) : helix.core.jsxs.call(null,G__44262,G__44263));
})(),(function (){var G__44282 = app.ui.shared.components.toolbar.btn_wrapper;
var G__44283 = (function (){var obj44285 = ({"x":(1064),"y":(54),"children":(function (){var G__44286 = app.ui.shared.components.toolbar.btn_divider;
var G__44287 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44286,G__44287) : helix.core.jsx.call(null,G__44286,G__44287));
})()});
return obj44285;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44282,G__44283) : helix.core.jsx.call(null,G__44282,G__44283));
})(),(function (){var G__44288 = app.ui.shared.components.toolbar.btn_wrapper;
var G__44289 = (function (){var obj44291 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-URW-60","change-URW-60",512851008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281)], null),cljs.core.not(full_screen)], null)], null));
}),"children":(function (){var G__44292 = app.ui.shared.components.toolbar.btn_full_screen;
var G__44293 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44292,G__44293) : helix.core.jsx.call(null,G__44292,G__44293));
})()});
return obj44291;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44288,G__44289) : helix.core.jsx.call(null,G__44288,G__44289));
})(),(function (){var G__44294 = app.ui.shared.components.toolbar.btn_wrapper;
var G__44295 = (function (){var obj44297 = ({"x":(1174),"y":(54),"children":(function (){var G__44298 = app.ui.shared.components.toolbar.btn_divider;
var G__44299 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44298,G__44299) : helix.core.jsx.call(null,G__44298,G__44299));
})()});
return obj44297;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44294,G__44295) : helix.core.jsx.call(null,G__44294,G__44295));
})(),(function (){var G__44300 = app.ui.shared.components.toolbar.btn_wrapper;
var G__44301 = (function (){var obj44303 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Universal Converter",new cljs.core.Keyword(null,"text","text",-1790561697),"The universal converter converts the analogue 4-20 mA signals from a connected level electrode into CAN bus telegrams. The data are transferred to an ISO 11898 CAN bus via the CAN open protocol. Function tests and failure diagnosis are performed using the URB 60 visual display and operating unit."], null)], null));
}),"children":(function (){var G__44304 = app.ui.shared.components.toolbar.btn_info;
var G__44305 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44304,G__44305) : helix.core.jsx.call(null,G__44304,G__44305));
})()});
return obj44303;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__44300,G__44301) : helix.core.jsx.call(null,G__44300,G__44301));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__44240,G__44241) : helix.core.jsxs.call(null,G__44240,G__44241));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__44306 = G__44236;
(G__44306.displayName = "app.ui.kits.connect.URW-60.toolbar-panel/URW-60-toolbar-panel");

return G__44306;
} else {
return G__44236;
}
})();




//# sourceMappingURL=app.ui.kits.connect.URW_60.toolbar_panel.js.map
