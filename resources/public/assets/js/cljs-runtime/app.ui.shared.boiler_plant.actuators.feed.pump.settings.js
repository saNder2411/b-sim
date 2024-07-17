goog.provide('app.ui.shared.boiler_plant.actuators.feed.pump.settings');

app.ui.shared.boiler_plant.actuators.feed.pump.settings.mode_hud_settings = (function (){var G__30939 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30943 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__30990 = app.ui.shared.components.form.field_row;
var G__30991 = (function (){var obj31015 = ({"label":"CONTROL MODE","children":[(function (){var G__31018 = app.ui.shared.components.form.select;
var G__31019 = (function (){var obj31024 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manual",new cljs.core.Keyword(null,"label","label",1718410804),"Manual"], null)], null),"value":value,"on-change":(function (p1__30894_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__30894_SHARP_], null)], null));
})});
return obj31024;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31018,G__31019) : helix.core.jsx.call(null,G__31018,G__31019));
})(),(function (){var G__31047 = app.ui.shared.components.form.checkbox;
var G__31048 = (function (){var obj31051 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj31051;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31047,G__31048) : helix.core.jsx.call(null,G__31047,G__31048));
})()]});
return obj31015;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30990,G__30991) : helix.core.jsxs.call(null,G__30990,G__30991));
});
if(goog.DEBUG === true){
var G__31065 = G__30939;
(G__31065.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/mode-hud-settings");

return G__31065;
} else {
return G__30939;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.performance_hud_settings = (function (){var G__31118 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$performance_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31134 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__31165 = app.ui.shared.components.form.field_row;
var G__31166 = (function (){var obj31176 = ({"label":"PERFORMANCE","children":[(function (){var G__31184 = app.ui.shared.components.form.select;
var G__31185 = (function (){var obj31191 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__31083_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31083_SHARP_], null)], null));
})});
return obj31191;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31184,G__31185) : helix.core.jsx.call(null,G__31184,G__31185));
})(),(function (){var G__31205 = app.ui.shared.components.form.checkbox;
var G__31206 = (function (){var obj31209 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj31209;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31205,G__31206) : helix.core.jsx.call(null,G__31205,G__31206));
})()]});
return obj31176;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31165,G__31166) : helix.core.jsxs.call(null,G__31165,G__31166));
});
if(goog.DEBUG === true){
var G__31218 = G__31118;
(G__31218.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/performance-hud-settings");

return G__31218;
} else {
return G__31118;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.rotation_hud_settings = (function (){var G__31279 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$rotation_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31285 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__31297 = app.ui.shared.components.form.field_row;
var G__31298 = (function (){var obj31313 = ({"label":"ROTATIONAL SPEED","children":[(function (){var G__31320 = app.ui.shared.components.form.select;
var G__31321 = (function (){var obj31325 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rpm",new cljs.core.Keyword(null,"label","label",1718410804),"rpm"], null)], null),"value":unit,"on-change":(function (p1__31226_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31226_SHARP_], null)], null));
})});
return obj31325;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31320,G__31321) : helix.core.jsx.call(null,G__31320,G__31321));
})(),(function (){var G__31337 = app.ui.shared.components.form.checkbox;
var G__31338 = (function (){var obj31340 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj31340;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31337,G__31338) : helix.core.jsx.call(null,G__31337,G__31338));
})()]});
return obj31313;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31297,G__31298) : helix.core.jsxs.call(null,G__31297,G__31298));
});
if(goog.DEBUG === true){
var G__31387 = G__31279;
(G__31387.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/rotation-hud-settings");

return G__31387;
} else {
return G__31279;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.flow_rate_hud_settings = (function (){var G__31412 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$flow_rate_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31420 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__31428 = app.ui.shared.components.form.field_row;
var G__31429 = (function (){var obj31434 = ({"label":"FLOW-RATE","children":[(function (){var G__31439 = app.ui.shared.components.form.select;
var G__31441 = (function (){var obj31446 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__31392_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31392_SHARP_], null)], null));
})});
return obj31446;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31439,G__31441) : helix.core.jsx.call(null,G__31439,G__31441));
})(),(function (){var G__31460 = app.ui.shared.components.form.checkbox;
var G__31461 = (function (){var obj31466 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj31466;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31460,G__31461) : helix.core.jsx.call(null,G__31460,G__31461));
})()]});
return obj31434;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31428,G__31429) : helix.core.jsxs.call(null,G__31428,G__31429));
});
if(goog.DEBUG === true){
var G__31480 = G__31412;
(G__31480.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/flow-rate-hud-settings");

return G__31480;
} else {
return G__31412;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.performance_init_value = (function (){var G__31544 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$performance_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-pump-performance","feed-water-pump-performance",1473062074).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pump performance value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__31572 = app.ui.shared.components.form.field_row;
var G__31573 = (function (){var obj31577 = ({"label":"PERFORMANCE","children":[(function (){var G__31581 = app.ui.shared.components.form.input_number;
var G__31582 = helix.impl.props.merge_obj((function (){var obj31587 = ({"value":value,"on-change":(function (p1__31498_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__31498_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__31504_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__31504_SHARP_], null)], null));
}));
})});
return obj31587;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31581,G__31582) : helix.core.jsx.call(null,G__31581,G__31582));
})(),(function (){var G__31704 = app.ui.shared.components.form.select;
var G__31706 = (function (){var obj31720 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__31507_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31507_SHARP_], null)], null));
})});
return obj31720;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31704,G__31706) : helix.core.jsx.call(null,G__31704,G__31706));
})()]});
return obj31577;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31572,G__31573) : helix.core.jsxs.call(null,G__31572,G__31573));
});
if(goog.DEBUG === true){
var G__31752 = G__31544;
(G__31752.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/performance-init-value");

return G__31752;
} else {
return G__31544;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.rotation_init_max_value = (function (){var G__31859 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$rotation_init_max_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31870 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-pump-rot-speed","feed-water-pump-rot-speed",631778687).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pump maximum rotational speed value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__31907 = app.ui.shared.components.form.field_row;
var G__31908 = (function (){var obj31914 = ({"label":"MAXIMUM ROTATIONAL SPEED","children":[(function (){var G__31915 = app.ui.shared.components.form.input_number;
var G__31916 = helix.impl.props.merge_obj((function (){var obj31920 = ({"value":value,"on-change":(function (p1__31784_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__31784_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__31799_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__31799_SHARP_], null)], null));
}));
})});
return obj31920;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31915,G__31916) : helix.core.jsx.call(null,G__31915,G__31916));
})(),(function (){var G__31963 = app.ui.shared.components.form.select;
var G__31964 = (function (){var obj31968 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rpm",new cljs.core.Keyword(null,"label","label",1718410804),"rpm"], null)], null),"value":unit,"on-change":(function (p1__31808_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31808_SHARP_], null)], null));
})});
return obj31968;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31963,G__31964) : helix.core.jsx.call(null,G__31963,G__31964));
})()]});
return obj31914;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31907,G__31908) : helix.core.jsxs.call(null,G__31907,G__31908));
});
if(goog.DEBUG === true){
var G__32027 = G__31859;
(G__32027.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/rotation-init-max-value");

return G__32027;
} else {
return G__31859;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.flow_rate_init_max_value = (function (){var G__32076 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$flow_rate_init_max_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32081 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feed-pump-flow-rate-max-converted-value","feed-pump-flow-rate-max-converted-value",1376840154)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-flow-rate","feed-water-elect-valve-flow-rate",997798988).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial flow rate maximum value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__32097 = app.ui.shared.components.form.field_row;
var G__32098 = (function (){var obj32105 = ({"label":"MAXIMUM FLOW-RATE","children":[(function (){var G__32106 = app.ui.shared.components.form.input_number;
var G__32107 = helix.impl.props.merge_obj((function (){var obj32111 = ({"value":converted_value,"on-change":(function (p1__32038_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump-flow-rate-max-value","change-feed-pump-flow-rate-max-value",-637364524),p1__32038_SHARP_], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__32044_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump-flow-rate-max-value","change-feed-pump-flow-rate-max-value",-637364524),p1__32044_SHARP_], null));
}));
})});
return obj32111;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32106,G__32107) : helix.core.jsx.call(null,G__32106,G__32107));
})(),(function (){var G__32121 = app.ui.shared.components.form.select;
var G__32122 = (function (){var obj32124 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__32047_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feed-pump","change-feed-pump",-1888620602),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__32047_SHARP_], null)], null));
})});
return obj32124;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32121,G__32122) : helix.core.jsx.call(null,G__32121,G__32122));
})()]});
return obj32105;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32097,G__32098) : helix.core.jsxs.call(null,G__32097,G__32098));
});
if(goog.DEBUG === true){
var G__32132 = G__32076;
(G__32132.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/flow-rate-init-max-value");

return G__32132;
} else {
return G__32076;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.settings_form = (function (){var G__32170 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32179 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__32184 = helix.core.Fragment;
var G__32185 = ({"children": [(function (){var G__32186 = "div";
var G__32187 = (function (){var obj32193 = ({"className":"divider","style":(function (){var obj32195 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj32195;
})(),"children":"head-up-display"});
return obj32193;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32186,G__32187) : helix.core.jsx.call(null,G__32186,G__32187));
})(),(function (){var G__32205 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.mode_hud_settings;
var G__32206 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32205,G__32206) : helix.core.jsx.call(null,G__32205,G__32206));
})(),(function (){var G__32210 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.performance_hud_settings;
var G__32211 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32210,G__32211) : helix.core.jsx.call(null,G__32210,G__32211));
})(),(function (){var G__32218 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.rotation_hud_settings;
var G__32220 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32218,G__32220) : helix.core.jsx.call(null,G__32218,G__32220));
})(),(function (){var G__32221 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.flow_rate_hud_settings;
var G__32222 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32221,G__32222) : helix.core.jsx.call(null,G__32221,G__32222));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__32225 = helix.core.Fragment;
var G__32226 = ({"children": [(function (){var G__32230 = "div";
var G__32231 = (function (){var obj32238 = ({"className":"divider","children":"simulation start values"});
return obj32238;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32230,G__32231) : helix.core.jsx.call(null,G__32230,G__32231));
})(),(function (){var G__32248 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.performance_init_value;
var G__32249 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32248,G__32249) : helix.core.jsx.call(null,G__32248,G__32249));
})(),(function (){var G__32258 = "div";
var G__32259 = (function (){var obj32263 = ({"className":"divider","children":"specifications"});
return obj32263;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32258,G__32259) : helix.core.jsx.call(null,G__32258,G__32259));
})(),(function (){var G__32264 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.rotation_init_max_value;
var G__32265 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32264,G__32265) : helix.core.jsx.call(null,G__32264,G__32265));
})(),(function (){var G__32266 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.flow_rate_init_max_value;
var G__32267 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32266,G__32267) : helix.core.jsx.call(null,G__32266,G__32267));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32225,G__32226) : helix.core.jsxs.call(null,G__32225,G__32226));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32184,G__32185) : helix.core.jsxs.call(null,G__32184,G__32185));
});
if(goog.DEBUG === true){
var G__32277 = G__32170;
(G__32277.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/settings-form");

return G__32277;
} else {
return G__32170;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.feed_pump_settings = (function (){var G__32290 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$feed_pump_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32310 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__32319 = app.ui.shared.components.modal.settings;
var G__32320 = (function (){var obj32330 = ({"title":"Feedwater Pump Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-feed-pump-settings","restore-defaults-feed-pump-settings",-144854733)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-feed-pump-settings","apply-feed-pump-settings",-216900434)], null));
}),"children":(function (){var G__32337 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.settings_form;
var G__32338 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32337,G__32338) : helix.core.jsx.call(null,G__32337,G__32338));
})()});
return obj32330;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32319,G__32320) : helix.core.jsx.call(null,G__32319,G__32320));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__32350 = G__32290;
(G__32350.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/feed-pump-settings");

return G__32350;
} else {
return G__32290;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.feed.pump.settings.js.map
