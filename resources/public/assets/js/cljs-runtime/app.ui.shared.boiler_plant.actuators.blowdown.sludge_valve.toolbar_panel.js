goog.provide('app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.toolbar_panel');

app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.toolbar_panel.sludge_valve_toolbar_panel = (function (){var G__29851 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$toolbar_panel$sludge_valve_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29864 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve-show-toolbar-panel","sludge-valve-show-toolbar-panel",-26377558)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__29876 = helix.core.Fragment;
var G__29877 = ({"children": [(function (){var G__29880 = app.ui.shared.components.toolbar.title;
var G__29881 = (function (){var obj29885 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Bottom Blowdown Valve"});
return obj29885;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29880,G__29881) : helix.core.jsx.call(null,G__29880,G__29881));
})(),(function (){var G__29888 = app.ui.shared.components.toolbar.btn_wrapper;
var G__29889 = (function (){var obj29891 = ({"x":(930),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__29901 = app.ui.shared.components.toolbar.btn_valve_close;
var G__29902 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29901,G__29902) : helix.core.jsx.call(null,G__29901,G__29902));
})()});
return obj29891;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29888,G__29889) : helix.core.jsx.call(null,G__29888,G__29889));
})(),(function (){var G__29909 = app.ui.shared.components.toolbar.btn_wrapper;
var G__29910 = (function (){var obj29917 = ({"x":(1004),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__29929 = app.ui.shared.components.toolbar.btn_valve_open;
var G__29930 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29929,G__29930) : helix.core.jsx.call(null,G__29929,G__29930));
})()});
return obj29917;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29909,G__29910) : helix.core.jsx.call(null,G__29909,G__29910));
})(),(function (){var G__29941 = app.ui.shared.components.toolbar.btn_wrapper;
var G__29942 = (function (){var obj29946 = ({"x":(1064),"y":(54),"children":(function (){var G__29954 = app.ui.shared.components.toolbar.btn_divider;
var G__29955 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29954,G__29955) : helix.core.jsx.call(null,G__29954,G__29955));
})()});
return obj29946;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29941,G__29942) : helix.core.jsx.call(null,G__29941,G__29942));
})(),(function (){var G__29967 = app.ui.shared.components.toolbar.btn_wrapper;
var G__29968 = (function (){var obj29978 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__29989 = app.ui.shared.components.toolbar.btn_settings;
var G__29990 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29989,G__29990) : helix.core.jsx.call(null,G__29989,G__29990));
})()});
return obj29978;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29967,G__29968) : helix.core.jsx.call(null,G__29967,G__29968));
})(),(function (){var G__30009 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30010 = (function (){var obj30016 = ({"x":(1174),"y":(54),"children":(function (){var G__30024 = app.ui.shared.components.toolbar.btn_divider;
var G__30026 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30024,G__30026) : helix.core.jsx.call(null,G__30024,G__30026));
})()});
return obj30016;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30009,G__30010) : helix.core.jsx.call(null,G__30009,G__30010));
})(),(function (){var G__30036 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30037 = (function (){var obj30039 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Bottom Blowdown Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The bottom blowdown valve is an actuator that blows down sludge accumulated on the bottom of the boiler."], null)], null));
}),"children":(function (){var G__30059 = app.ui.shared.components.toolbar.btn_info;
var G__30060 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30059,G__30060) : helix.core.jsx.call(null,G__30059,G__30060));
})()});
return obj30039;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30036,G__30037) : helix.core.jsx.call(null,G__30036,G__30037));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29876,G__29877) : helix.core.jsxs.call(null,G__29876,G__29877));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__30075 = G__29851;
(G__30075.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.toolbar-panel/sludge-valve-toolbar-panel");

return G__30075;
} else {
return G__29851;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.toolbar_panel.js.map
