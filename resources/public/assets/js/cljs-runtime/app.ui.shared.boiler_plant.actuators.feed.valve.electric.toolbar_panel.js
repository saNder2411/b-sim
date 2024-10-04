goog.provide('app.ui.shared.boiler_plant.actuators.feed.valve.electric.toolbar_panel');

app.ui.shared.boiler_plant.actuators.feed.valve.electric.toolbar_panel.feed_electric_valve_toolbar_panel = (function (){var G__37904 = (function app$ui$shared$boiler_plant$actuators$feed$valve$electric$toolbar_panel$feed_electric_valve_toolbar_panel_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-electric-valve","show-toolbar-panel","feed-electric-valve/show-toolbar-panel",-1179755807)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__37965 = helix.core.Fragment;
var G__37966 = ({"children": [(function (){var G__37976 = app.ui.shared.components.toolbar.title;
var G__37977 = (function (){var obj37989 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Electric Valve"});
return obj37989;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37976,G__37977) : helix.core.jsx.call(null,G__37976,G__37977));
})(),(function (){var G__38011 = app.ui.shared.sidebar.control_panel.slider.core.slider;
var G__38012 = (function (){var obj38020 = ({"x":(719),"y":(74),"z":0.9,"max-val":(100),"v-%":(0),"next-v-%":(0),"active":false,"value-box":new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),(70),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(24),new cljs.core.Keyword(null,"fraction","fraction",107940680),(0),new cljs.core.Keyword(null,"unit","unit",375175175),"%",new cljs.core.Keyword(null,"fill","fill",883462889),"transparent"], null)});
return obj38020;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38011,G__38012) : helix.core.jsx.call(null,G__38011,G__38012));
})(),(function (){var G__38050 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38051 = (function (){var obj38063 = ({"x":(1064),"y":(54),"children":(function (){var G__38081 = app.ui.shared.components.toolbar.btn_divider;
var G__38082 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38081,G__38082) : helix.core.jsx.call(null,G__38081,G__38082));
})()});
return obj38063;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38050,G__38051) : helix.core.jsx.call(null,G__38050,G__38051));
})(),(function (){var G__38105 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38106 = (function (){var obj38118 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-electric-valve","change","feed-electric-valve/change",1788394127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__38140 = app.ui.shared.components.toolbar.btn_settings;
var G__38143 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38140,G__38143) : helix.core.jsx.call(null,G__38140,G__38143));
})()});
return obj38118;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38105,G__38106) : helix.core.jsx.call(null,G__38105,G__38106));
})(),(function (){var G__38170 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38171 = (function (){var obj38179 = ({"x":(1174),"y":(54),"children":(function (){var G__38195 = app.ui.shared.components.toolbar.btn_divider;
var G__38196 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38195,G__38196) : helix.core.jsx.call(null,G__38195,G__38196));
})()});
return obj38179;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38170,G__38171) : helix.core.jsx.call(null,G__38170,G__38171));
})(),(function (){var G__38215 = app.ui.shared.components.toolbar.btn_wrapper;
var G__38216 = (function (){var obj38229 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal-info","change","modal-info/change",1700200432),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Valve",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater valve is an actuator that feeds water into the boiler to keep the water level at the desired value. continuous blowdown valve is an actuator that blows water out of the boiler to decrease the salt content / conductivity of the boiler water."], null)], null));
}),"children":(function (){var G__38248 = app.ui.shared.components.toolbar.btn_info;
var G__38249 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38248,G__38249) : helix.core.jsx.call(null,G__38248,G__38249));
})()});
return obj38229;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38215,G__38216) : helix.core.jsx.call(null,G__38215,G__38216));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37965,G__37966) : helix.core.jsxs.call(null,G__37965,G__37966));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38282 = G__37904;
(G__38282.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.electric.toolbar-panel/feed-electric-valve-toolbar-panel");

return G__38282;
} else {
return G__37904;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.feed.valve.electric.toolbar_panel.js.map
