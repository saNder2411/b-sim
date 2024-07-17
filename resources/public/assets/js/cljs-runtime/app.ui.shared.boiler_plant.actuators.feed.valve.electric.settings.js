goog.provide('app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings');

app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.mode_hud_settings = (function (){var G__30679 = (function app$ui$shared$boiler_plant$actuators$feed$valve$electric$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30706 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__30890 = app.ui.shared.components.form.field_row;
var G__30891 = (function (){var obj30896 = ({"label":"CONTROL MODE","children":[(function (){var G__30900 = app.ui.shared.components.form.select;
var G__30901 = (function (){var obj30907 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manual",new cljs.core.Keyword(null,"label","label",1718410804),"Manual"], null)], null),"value":value,"on-change":(function (p1__30644_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__30644_SHARP_], null)], null));
})});
return obj30907;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30900,G__30901) : helix.core.jsx.call(null,G__30900,G__30901));
})(),(function (){var G__30924 = app.ui.shared.components.form.checkbox;
var G__30925 = (function (){var obj30930 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj30930;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30924,G__30925) : helix.core.jsx.call(null,G__30924,G__30925));
})()]});
return obj30896;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30890,G__30891) : helix.core.jsxs.call(null,G__30890,G__30891));
});
if(goog.DEBUG === true){
var G__31017 = G__30679;
(G__31017.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.electric.settings/mode-hud-settings");

return G__31017;
} else {
return G__30679;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.damper_hud_settings = (function (){var G__31070 = (function app$ui$shared$boiler_plant$actuators$feed$valve$electric$settings$damper_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31077 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__31091 = app.ui.shared.components.form.field_row;
var G__31092 = (function (){var obj31096 = ({"label":"VALVE STATE","children":[(function (){var G__31102 = app.ui.shared.components.form.select;
var G__31103 = (function (){var obj31108 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__31049_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31049_SHARP_], null)], null));
})});
return obj31108;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31102,G__31103) : helix.core.jsx.call(null,G__31102,G__31103));
})(),(function (){var G__31130 = app.ui.shared.components.form.checkbox;
var G__31131 = (function (){var obj31138 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj31138;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31130,G__31131) : helix.core.jsx.call(null,G__31130,G__31131));
})()]});
return obj31096;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31091,G__31092) : helix.core.jsxs.call(null,G__31091,G__31092));
});
if(goog.DEBUG === true){
var G__31183 = G__31070;
(G__31183.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.electric.settings/damper-hud-settings");

return G__31183;
} else {
return G__31070;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.flow_rate_hud_settings = (function (){var G__31219 = (function app$ui$shared$boiler_plant$actuators$feed$valve$electric$settings$flow_rate_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31222 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__31227 = app.ui.shared.components.form.field_row;
var G__31228 = (function (){var obj31234 = ({"label":"FLOW-RATE","children":[(function (){var G__31241 = app.ui.shared.components.form.select;
var G__31242 = (function (){var obj31244 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__31202_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31202_SHARP_], null)], null));
})});
return obj31244;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31241,G__31242) : helix.core.jsx.call(null,G__31241,G__31242));
})(),(function (){var G__31257 = app.ui.shared.components.form.checkbox;
var G__31258 = (function (){var obj31264 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj31264;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31257,G__31258) : helix.core.jsx.call(null,G__31257,G__31258));
})()]});
return obj31234;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31227,G__31228) : helix.core.jsxs.call(null,G__31227,G__31228));
});
if(goog.DEBUG === true){
var G__31281 = G__31219;
(G__31281.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.electric.settings/flow-rate-hud-settings");

return G__31281;
} else {
return G__31219;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.damper_init_value = (function (){var G__31347 = (function app$ui$shared$boiler_plant$actuators$feed$valve$electric$settings$damper_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31350 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-position","feed-water-elect-valve-position",1487608942).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial valve position value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__31364 = app.ui.shared.components.form.field_row;
var G__31366 = (function (){var obj31372 = ({"label":"VALVE POSITION","children":[(function (){var G__31379 = app.ui.shared.components.form.input_number;
var G__31380 = helix.impl.props.merge_obj((function (){var obj31386 = ({"value":value,"on-change":(function (p1__31316_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__31316_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__31319_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__31319_SHARP_], null)], null));
}));
})});
return obj31386;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31379,G__31380) : helix.core.jsx.call(null,G__31379,G__31380));
})(),(function (){var G__31395 = app.ui.shared.components.form.select;
var G__31396 = (function (){var obj31398 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__31322_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31322_SHARP_], null)], null));
})});
return obj31398;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31395,G__31396) : helix.core.jsx.call(null,G__31395,G__31396));
})()]});
return obj31372;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31364,G__31366) : helix.core.jsxs.call(null,G__31364,G__31366));
});
if(goog.DEBUG === true){
var G__31410 = G__31347;
(G__31410.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.electric.settings/damper-init-value");

return G__31410;
} else {
return G__31347;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.flow_rate_init_max_value = (function (){var G__31485 = (function app$ui$shared$boiler_plant$actuators$feed$valve$electric$settings$flow_rate_init_max_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31492 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feed-electric-valve-flow-rate-max-converted-value","feed-electric-valve-flow-rate-max-converted-value",551544300)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-flow-rate","feed-water-elect-valve-flow-rate",997798988).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial flow rate maximum value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__31512 = app.ui.shared.components.form.field_row;
var G__31513 = (function (){var obj31517 = ({"label":"MAXIMUM FLOW-RATE","children":[(function (){var G__31519 = app.ui.shared.components.form.input_number;
var G__31520 = helix.impl.props.merge_obj((function (){var obj31525 = ({"value":converted_value,"on-change":(function (p1__31431_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve-flow-rate-max-value","change-feed-electric-valve-flow-rate-max-value",1245312477),p1__31431_SHARP_], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__31438_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve-flow-rate-max-value","change-feed-electric-valve-flow-rate-max-value",1245312477),p1__31438_SHARP_], null));
}));
})});
return obj31525;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31519,G__31520) : helix.core.jsx.call(null,G__31519,G__31520));
})(),(function (){var G__31557 = app.ui.shared.components.form.select;
var G__31558 = (function (){var obj31563 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__31450_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31450_SHARP_], null)], null));
})});
return obj31563;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31557,G__31558) : helix.core.jsx.call(null,G__31557,G__31558));
})()]});
return obj31517;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31512,G__31513) : helix.core.jsxs.call(null,G__31512,G__31513));
});
if(goog.DEBUG === true){
var G__31589 = G__31485;
(G__31589.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.electric.settings/flow-rate-init-max-value");

return G__31589;
} else {
return G__31485;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.travel_time_init_value = (function (){var G__31670 = (function app$ui$shared$boiler_plant$actuators$feed$valve$electric$settings$travel_time_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-travel-time","feed-water-elect-valve-travel-time",740616170).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial valve travel time value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__31694 = app.ui.shared.components.form.field_row;
var G__31695 = (function (){var obj31703 = ({"label":"VALVE TRAVEL TIME","children":[(function (){var G__31724 = app.ui.shared.components.form.input_number;
var G__31725 = helix.impl.props.merge_obj((function (){var obj31729 = ({"value":value,"on-change":(function (p1__31609_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__31609_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__31620_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__31620_SHARP_], null)], null));
}));
})});
return obj31729;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31724,G__31725) : helix.core.jsx.call(null,G__31724,G__31725));
})(),(function (){var G__31780 = app.ui.shared.components.form.select;
var G__31781 = (function (){var obj31788 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"s",new cljs.core.Keyword(null,"label","label",1718410804),"s"], null)], null),"value":unit,"on-change":(function (p1__31629_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31629_SHARP_], null)], null));
})});
return obj31788;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31780,G__31781) : helix.core.jsx.call(null,G__31780,G__31781));
})()]});
return obj31703;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31694,G__31695) : helix.core.jsxs.call(null,G__31694,G__31695));
});
if(goog.DEBUG === true){
var G__31823 = G__31670;
(G__31823.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.electric.settings/travel-time-init-value");

return G__31823;
} else {
return G__31670;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.potentiometer_connection_init_value = (function (){var G__31858 = (function app$ui$shared$boiler_plant$actuators$feed$valve$electric$settings$potentiometer_connection_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31867 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"connection","connection",-123599300)], null)], null));
var G__31893 = app.ui.shared.components.form.field_row;
var G__31894 = (function (){var obj31899 = ({"label":"FEEDBACK POTENTIOMETER","children":(function (){var G__31905 = app.ui.shared.components.form.select;
var G__31906 = (function (){var obj31910 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"connected",new cljs.core.Keyword(null,"label","label",1718410804),"connected"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"disconnected",new cljs.core.Keyword(null,"label","label",1718410804),"disconnected"], null)], null),"value":value,"on-change":(function (p1__31840_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"connection","connection",-123599300)], null),p1__31840_SHARP_], null)], null));
})});
return obj31910;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31905,G__31906) : helix.core.jsx.call(null,G__31905,G__31906));
})()});
return obj31899;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31893,G__31894) : helix.core.jsx.call(null,G__31893,G__31894));
});
if(goog.DEBUG === true){
var G__31935 = G__31858;
(G__31935.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.electric.settings/potentiometer-connection-init-value");

return G__31935;
} else {
return G__31858;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.potentiometer_damper_closed_init_value = (function (){var G__32018 = (function app$ui$shared$boiler_plant$actuators$feed$valve$electric$settings$potentiometer_damper_closed_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32021 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"closed","closed",-919675359)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-potentiometer-closed","feed-water-elect-valve-potentiometer-closed",-792284384).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial potentiometer raw value closed must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__32029 = app.ui.shared.components.form.field_row;
var G__32030 = (function (){var obj32032 = ({"label":"POTENTIOMETER RAW VALUE CLOSED","children":[(function (){var G__32034 = app.ui.shared.components.form.input_number;
var G__32035 = helix.impl.props.merge_obj((function (){var obj32037 = ({"value":value,"on-change":(function (p1__31981_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"closed","closed",-919675359)], null),p1__31981_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__31994_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"closed","closed",-919675359)], null),p1__31994_SHARP_], null)], null));
}));
})});
return obj32037;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32034,G__32035) : helix.core.jsx.call(null,G__32034,G__32035));
})(),(function (){var G__32059 = app.ui.shared.components.form.select;
var G__32062 = (function (){var obj32064 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"byte",new cljs.core.Keyword(null,"label","label",1718410804),"byte"], null)], null),"value":unit,"on-change":(function (p1__31996_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31996_SHARP_], null)], null));
})});
return obj32064;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32059,G__32062) : helix.core.jsx.call(null,G__32059,G__32062));
})()]});
return obj32032;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32029,G__32030) : helix.core.jsxs.call(null,G__32029,G__32030));
});
if(goog.DEBUG === true){
var G__32080 = G__32018;
(G__32080.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.electric.settings/potentiometer-damper-closed-init-value");

return G__32080;
} else {
return G__32018;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.potentiometer_damper_open_init_value = (function (){var G__32150 = (function app$ui$shared$boiler_plant$actuators$feed$valve$electric$settings$potentiometer_damper_open_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32154 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"open","open",-1763596448)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-potentiometer-open","feed-water-elect-valve-potentiometer-open",-1849123324).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial potentiometer raw value open must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__32160 = app.ui.shared.components.form.field_row;
var G__32162 = (function (){var obj32164 = ({"label":"POTENTIOMETER RAW VALUE OPEN","children":[(function (){var G__32167 = app.ui.shared.components.form.input_number;
var G__32168 = helix.impl.props.merge_obj((function (){var obj32172 = ({"value":value,"on-change":(function (p1__32125_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"open","open",-1763596448)], null),p1__32125_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__32134_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"open","open",-1763596448)], null),p1__32134_SHARP_], null)], null));
}));
})});
return obj32172;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32167,G__32168) : helix.core.jsx.call(null,G__32167,G__32168));
})(),(function (){var G__32190 = app.ui.shared.components.form.select;
var G__32191 = (function (){var obj32199 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"byte",new cljs.core.Keyword(null,"label","label",1718410804),"byte"], null)], null),"value":unit,"on-change":(function (p1__32137_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-electric-valve","change-feed-electric-valve",-1093534398),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__32137_SHARP_], null)], null));
})});
return obj32199;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32190,G__32191) : helix.core.jsx.call(null,G__32190,G__32191));
})()]});
return obj32164;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32160,G__32162) : helix.core.jsxs.call(null,G__32160,G__32162));
});
if(goog.DEBUG === true){
var G__32215 = G__32150;
(G__32215.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.electric.settings/potentiometer-damper-open-init-value");

return G__32215;
} else {
return G__32150;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.settings_form = (function (){var G__32295 = (function app$ui$shared$boiler_plant$actuators$feed$valve$electric$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32305 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__32315 = helix.core.Fragment;
var G__32316 = ({"children": [(function (){var G__32317 = "div";
var G__32318 = (function (){var obj32322 = ({"className":"divider","style":(function (){var obj32327 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj32327;
})(),"children":"head-up-display"});
return obj32322;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32317,G__32318) : helix.core.jsx.call(null,G__32317,G__32318));
})(),(function (){var G__32335 = app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.mode_hud_settings;
var G__32336 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32335,G__32336) : helix.core.jsx.call(null,G__32335,G__32336));
})(),(function (){var G__32343 = app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.damper_hud_settings;
var G__32344 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32343,G__32344) : helix.core.jsx.call(null,G__32343,G__32344));
})(),(function (){var G__32348 = app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.flow_rate_hud_settings;
var G__32349 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32348,G__32349) : helix.core.jsx.call(null,G__32348,G__32349));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__32355 = helix.core.Fragment;
var G__32357 = ({"children": [(function (){var G__32358 = "div";
var G__32359 = (function (){var obj32361 = ({"className":"divider","children":"simulation start values"});
return obj32361;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32358,G__32359) : helix.core.jsx.call(null,G__32358,G__32359));
})(),(function (){var G__32362 = app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.damper_init_value;
var G__32363 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32362,G__32363) : helix.core.jsx.call(null,G__32362,G__32363));
})(),(function (){var G__32365 = "div";
var G__32366 = (function (){var obj32372 = ({"className":"divider","children":"specifications"});
return obj32372;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32365,G__32366) : helix.core.jsx.call(null,G__32365,G__32366));
})(),(function (){var G__32373 = app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.flow_rate_init_max_value;
var G__32374 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32373,G__32374) : helix.core.jsx.call(null,G__32373,G__32374));
})(),(function (){var G__32375 = app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.travel_time_init_value;
var G__32376 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32375,G__32376) : helix.core.jsx.call(null,G__32375,G__32376));
})(),(function (){var G__32378 = app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.potentiometer_connection_init_value;
var G__32379 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32378,G__32379) : helix.core.jsx.call(null,G__32378,G__32379));
})(),(function (){var G__32383 = app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.potentiometer_damper_closed_init_value;
var G__32384 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32383,G__32384) : helix.core.jsx.call(null,G__32383,G__32384));
})(),(function (){var G__32388 = app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.potentiometer_damper_open_init_value;
var G__32389 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32388,G__32389) : helix.core.jsx.call(null,G__32388,G__32389));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32355,G__32357) : helix.core.jsxs.call(null,G__32355,G__32357));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32315,G__32316) : helix.core.jsxs.call(null,G__32315,G__32316));
});
if(goog.DEBUG === true){
var G__32399 = G__32295;
(G__32399.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.electric.settings/settings-form");

return G__32399;
} else {
return G__32295;
}
})();




app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.feed_electric_valve_settings = (function (){var G__32419 = (function app$ui$shared$boiler_plant$actuators$feed$valve$electric$settings$feed_electric_valve_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32429 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"electric-valve","electric-valve",21394077),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__32441 = app.ui.shared.components.modal.settings;
var G__32442 = (function (){var obj32446 = ({"title":"Feedwater Electric Valve Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-feed-electric-valve-settings","restore-defaults-feed-electric-valve-settings",-824392428)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-feed-electric-valve-settings","apply-feed-electric-valve-settings",-448696509)], null));
}),"children":(function (){var G__32452 = app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.settings_form;
var G__32453 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32452,G__32453) : helix.core.jsx.call(null,G__32452,G__32453));
})()});
return obj32446;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32441,G__32442) : helix.core.jsx.call(null,G__32441,G__32442));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__32460 = G__32419;
(G__32460.displayName = "app.ui.shared.boiler-plant.actuators.feed.valve.electric.settings/feed-electric-valve-settings");

return G__32460;
} else {
return G__32419;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.feed.valve.electric.settings.js.map
