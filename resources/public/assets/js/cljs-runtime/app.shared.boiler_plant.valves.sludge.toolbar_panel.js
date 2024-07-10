goog.provide('app.shared.boiler_plant.valves.sludge.toolbar_panel');

app.shared.boiler_plant.valves.sludge.toolbar_panel.valve_sludge_toolbar_panel = (function (){var G__63843 = (function app$shared$boiler_plant$valves$sludge$toolbar_panel$valve_sludge_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__63847 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve-show-toolbar-panel","sludge-valve-show-toolbar-panel",-26377558)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__63854 = helix.core.Fragment;
var G__63855 = ({"children": [(function (){var G__63856 = app.shared.components.toolbar.title;
var G__63857 = (function (){var obj63860 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Bottom Blowdown Valve"});
return obj63860;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__63856,G__63857) : helix.core.jsx.call(null,G__63856,G__63857));
})(),(function (){var G__63861 = app.shared.components.toolbar.btn_wrapper;
var G__63862 = (function (){var obj63864 = ({"x":(930),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__63867 = app.shared.components.toolbar.btn_valve_close;
var G__63868 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__63867,G__63868) : helix.core.jsx.call(null,G__63867,G__63868));
})()});
return obj63864;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__63861,G__63862) : helix.core.jsx.call(null,G__63861,G__63862));
})(),(function (){var G__63870 = app.shared.components.toolbar.btn_wrapper;
var G__63871 = (function (){var obj63873 = ({"x":(1004),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__63874 = app.shared.components.toolbar.btn_valve_open;
var G__63875 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__63874,G__63875) : helix.core.jsx.call(null,G__63874,G__63875));
})()});
return obj63873;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__63870,G__63871) : helix.core.jsx.call(null,G__63870,G__63871));
})(),(function (){var G__63876 = app.shared.components.toolbar.btn_wrapper;
var G__63877 = (function (){var obj63880 = ({"x":(1064),"y":(54),"children":(function (){var G__63882 = app.shared.components.toolbar.btn_divider;
var G__63883 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__63882,G__63883) : helix.core.jsx.call(null,G__63882,G__63883));
})()});
return obj63880;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__63876,G__63877) : helix.core.jsx.call(null,G__63876,G__63877));
})(),(function (){var G__63884 = app.shared.components.toolbar.btn_wrapper;
var G__63885 = (function (){var obj63887 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__63888 = app.shared.components.toolbar.btn_settings;
var G__63889 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__63888,G__63889) : helix.core.jsx.call(null,G__63888,G__63889));
})()});
return obj63887;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__63884,G__63885) : helix.core.jsx.call(null,G__63884,G__63885));
})(),(function (){var G__63890 = app.shared.components.toolbar.btn_wrapper;
var G__63891 = (function (){var obj63893 = ({"x":(1174),"y":(54),"children":(function (){var G__63894 = app.shared.components.toolbar.btn_divider;
var G__63895 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__63894,G__63895) : helix.core.jsx.call(null,G__63894,G__63895));
})()});
return obj63893;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__63890,G__63891) : helix.core.jsx.call(null,G__63890,G__63891));
})(),(function (){var G__63896 = app.shared.components.toolbar.btn_wrapper;
var G__63897 = (function (){var obj63899 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Bottom Blowdown Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The bottom blowdown valve is an actuator that blows down sludge accumulated on the bottom of the boiler."], null)], null));
}),"children":(function (){var G__63900 = app.shared.components.toolbar.btn_info;
var G__63901 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__63900,G__63901) : helix.core.jsx.call(null,G__63900,G__63901));
})()});
return obj63899;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__63896,G__63897) : helix.core.jsx.call(null,G__63896,G__63897));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__63854,G__63855) : helix.core.jsxs.call(null,G__63854,G__63855));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__63902 = G__63843;
(G__63902.displayName = "app.shared.boiler-plant.valves.sludge.toolbar-panel/valve-sludge-toolbar-panel");

return G__63902;
} else {
return G__63843;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.valves.sludge.toolbar_panel.js.map
