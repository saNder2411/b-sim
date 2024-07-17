goog.provide('app.ui.shared.boiler_plant.actuators.feed.pump.toolbar_panel');

app.ui.shared.boiler_plant.actuators.feed.pump.toolbar_panel.feed_pump_toolbar_panel = (function (){var G__29949 = (function app$ui$shared$boiler_plant$actuators$feed$pump$toolbar_panel$feed_pump_toolbar_panel_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__29958 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_toolbar_panel = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feed-pump-show-toolbar-panel","feed-pump-show-toolbar-panel",595897436)], null));
if(cljs.core.truth_(show_toolbar_panel)){
var G__29975 = helix.core.Fragment;
var G__29976 = ({"children": [(function (){var G__29979 = app.ui.shared.components.toolbar.title;
var G__29980 = (function (){var obj29984 = ({"x":(85),"y":(95),"fill":"#efefef","title":"Feedwater Pump"});
return obj29984;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__29979,G__29980) : helix.core.jsx.call(null,G__29979,G__29980));
})(),(function (){var G__30001 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30002 = (function (){var obj30008 = ({"x":(930),"y":(54),"inactive":true,"on-click":(function (){
return null;
}),"children":(function (){var G__30021 = app.ui.shared.components.toolbar.btn_valve_close;
var G__30022 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30021,G__30022) : helix.core.jsx.call(null,G__30021,G__30022));
})()});
return obj30008;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30001,G__30002) : helix.core.jsx.call(null,G__30001,G__30002));
})(),(function (){var G__30040 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30041 = (function (){var obj30043 = ({"x":(1004),"y":(54),"on-click":(function (){
return null;
}),"children":(function (){var G__30052 = app.ui.shared.components.toolbar.btn_valve_open;
var G__30053 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30052,G__30053) : helix.core.jsx.call(null,G__30052,G__30053));
})()});
return obj30043;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30040,G__30041) : helix.core.jsx.call(null,G__30040,G__30041));
})(),(function (){var G__30061 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30062 = (function (){var obj30064 = ({"x":(1064),"y":(54),"children":(function (){var G__30067 = app.ui.shared.components.toolbar.btn_divider;
var G__30068 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30067,G__30068) : helix.core.jsx.call(null,G__30067,G__30068));
})()});
return obj30064;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30061,G__30062) : helix.core.jsx.call(null,G__30061,G__30062));
})(),(function (){var G__30076 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30077 = (function (){var obj30079 = ({"x":(1114),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null),true], null)], null));
}),"children":(function (){var G__30082 = app.ui.shared.components.toolbar.btn_settings;
var G__30083 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30082,G__30083) : helix.core.jsx.call(null,G__30082,G__30083));
})()});
return obj30079;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30076,G__30077) : helix.core.jsx.call(null,G__30076,G__30077));
})(),(function (){var G__30088 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30089 = (function (){var obj30094 = ({"x":(1174),"y":(54),"children":(function (){var G__30098 = app.ui.shared.components.toolbar.btn_divider;
var G__30099 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30098,G__30099) : helix.core.jsx.call(null,G__30098,G__30099));
})()});
return obj30094;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30088,G__30089) : helix.core.jsx.call(null,G__30088,G__30089));
})(),(function (){var G__30104 = app.ui.shared.components.toolbar.btn_wrapper;
var G__30105 = (function (){var obj30107 = ({"x":(1224),"y":(54),"on-click":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-modal-info","change-modal-info",-2050631306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Feedwater Pump",new cljs.core.Keyword(null,"text","text",-1790561697),"The feedwater pump is an actuator that pumps water into the boiler to keep the water level at the desired value."], null)], null));
}),"children":(function (){var G__30110 = app.ui.shared.components.toolbar.btn_info;
var G__30111 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30110,G__30111) : helix.core.jsx.call(null,G__30110,G__30111));
})()});
return obj30107;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30104,G__30105) : helix.core.jsx.call(null,G__30104,G__30105));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__29975,G__29976) : helix.core.jsxs.call(null,G__29975,G__29976));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__30115 = G__29949;
(G__30115.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.toolbar-panel/feed-pump-toolbar-panel");

return G__30115;
} else {
return G__29949;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.feed.pump.toolbar_panel.js.map
