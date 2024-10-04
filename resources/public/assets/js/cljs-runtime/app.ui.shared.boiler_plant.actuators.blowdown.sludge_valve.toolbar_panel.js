goog.provide('app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.toolbar_panel');

app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.toolbar_panel.sludge_valve_toolbar_panel = (function (){var G__37877 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$toolbar_panel$sludge_valve_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37883 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","show-toolbar-panel","sludge-valve/show-toolbar-panel",-591934341)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__37887 = helix.core.Fragment;
var G__37889 = ({"children": [(function (){var G__37908 = app.ui.shared.components.toolbar.title;
var G__37909 = (function (){var obj37913 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Bottom Blowdown Valve"});
return obj37913;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37908,G__37909) : helix.core.jsx.call(null,G__37908,G__37909));
})(),(function (){var G__37926 = app.ui.shared.components.toolbar.btn_wrapper;
var G__37927 = (function (){var obj37935 = ({"x":(930),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__37950 = app.ui.shared.components.toolbar.btn_valve_close;
var G__37951 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37950,G__37951) : helix.core.jsx.call(null,G__37950,G__37951));
})()});
return obj37935;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37926,G__37927) : helix.core.jsx.call(null,G__37926,G__37927));
})(),(function (){var G__37970 = app.ui.shared.components.toolbar.btn_wrapper;
var G__37971 = (function (){var obj37979 = ({"x":(1004),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__38005 = app.ui.shared.components.toolbar.btn_valve_open;
var G__38006 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38005,G__38006) : helix.core.jsx.call(null,G__38005,G__38006));
})()});
return obj37979;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37970,G__37971) : helix.core.jsx.call(null,G__37970,G__37971));
})(),(function (){var G__38030 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38031 = (function (){var obj38038 = ({"x":(1064),"y":(54),"children":(function (){var G__38054 = app.ui.shared.components.toolbar.btn_divider;
var G__38055 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38054,G__38055) : helix.core.jsx.call(null,G__38054,G__38055));
})()});
return obj38038;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38030,G__38031) : helix.core.jsx.call(null,G__38030,G__38031));
})(),(function (){var G__38083 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38084 = (function (){var obj38090 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","change","sludge-valve/change",-902580431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__38115 = app.ui.shared.components.toolbar.btn_settings;
var G__38116 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38115,G__38116) : helix.core.jsx.call(null,G__38115,G__38116));
})()});
return obj38090;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38083,G__38084) : helix.core.jsx.call(null,G__38083,G__38084));
})(),(function (){var G__38148 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38149 = (function (){var obj38157 = ({"x":(1174),"y":(54),"children":(function (){var G__38166 = app.ui.shared.components.toolbar.btn_divider;
var G__38167 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38166,G__38167) : helix.core.jsx.call(null,G__38166,G__38167));
})()});
return obj38157;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38148,G__38149) : helix.core.jsx.call(null,G__38148,G__38149));
})(),(function (){var G__38197 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38198 = (function (){var obj38208 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Bottom Blowdown Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The bottom blowdown valve is an actuator that blows down sludge accumulated on the bottom of the boiler."], null)], null));
}),"children":(function (){var G__38230 = app.ui.shared.components.toolbar.btn_info;
var G__38231 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38230,G__38231) : helix.core.jsx.call(null,G__38230,G__38231));
})()});
return obj38208;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38197,G__38198) : helix.core.jsx.call(null,G__38197,G__38198));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37887,G__37889) : helix.core.jsxs.call(null,G__37887,G__37889));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38259 = G__37877;
(G__38259.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.toolbar-panel/sludge-valve-toolbar-panel");

return G__38259;
} else {
return G__37877;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.toolbar_panel.js.map
