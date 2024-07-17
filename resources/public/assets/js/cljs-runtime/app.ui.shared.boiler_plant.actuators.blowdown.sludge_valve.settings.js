goog.provide('app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings');

app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.mode_hud_settings = (function (){var G__30701 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30703 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__30792 = app.ui.shared.components.form.field_row;
var G__30793 = (function (){var obj30805 = ({"label":"CONTROL MODE","children":[(function (){var G__30810 = app.ui.shared.components.form.select;
var G__30811 = (function (){var obj30819 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manual",new cljs.core.Keyword(null,"label","label",1718410804),"Manual"], null)], null),"value":value,"on-change":(function (p1__30623_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__30623_SHARP_], null)], null));
})});
return obj30819;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30810,G__30811) : helix.core.jsx.call(null,G__30810,G__30811));
})(),(function (){var G__30848 = app.ui.shared.components.form.checkbox;
var G__30849 = (function (){var obj30855 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj30855;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30848,G__30849) : helix.core.jsx.call(null,G__30848,G__30849));
})()]});
return obj30805;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30792,G__30793) : helix.core.jsxs.call(null,G__30792,G__30793));
});
if(goog.DEBUG === true){
var G__30873 = G__30701;
(G__30873.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/mode-hud-settings");

return G__30873;
} else {
return G__30701;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.damper_hud_settings = (function (){var G__30938 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$damper_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__30942 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__30968 = app.ui.shared.components.form.field_row;
var G__30969 = (function (){var obj30979 = ({"label":"VALVE STATE","children":[(function (){var G__30986 = app.ui.shared.components.form.select;
var G__30987 = (function (){var obj31013 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"open/close",new cljs.core.Keyword(null,"label","label",1718410804),"open/close"], null)], null),"value":unit,"on-change":(function (p1__30903_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__30903_SHARP_], null)], null));
})});
return obj31013;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__30986,G__30987) : helix.core.jsx.call(null,G__30986,G__30987));
})(),(function (){var G__31032 = app.ui.shared.components.form.checkbox;
var G__31033 = (function (){var obj31039 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj31039;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31032,G__31033) : helix.core.jsx.call(null,G__31032,G__31033));
})()]});
return obj30979;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__30968,G__30969) : helix.core.jsxs.call(null,G__30968,G__30969));
});
if(goog.DEBUG === true){
var G__31059 = G__30938;
(G__31059.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/damper-hud-settings");

return G__31059;
} else {
return G__30938;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.flow_rate_hud_settings = (function (){var G__31115 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$flow_rate_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__31145 = app.ui.shared.components.form.field_row;
var G__31146 = (function (){var obj31156 = ({"label":"FLOW-RATE","children":[(function (){var G__31171 = app.ui.shared.components.form.select;
var G__31172 = (function (){var obj31180 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kg/s",new cljs.core.Keyword(null,"label","label",1718410804),"kg/s"], null)], null),"value":unit,"on-change":(function (p1__31073_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31073_SHARP_], null)], null));
})});
return obj31180;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31171,G__31172) : helix.core.jsx.call(null,G__31171,G__31172));
})(),(function (){var G__31213 = app.ui.shared.components.form.checkbox;
var G__31214 = (function (){var obj31216 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj31216;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31213,G__31214) : helix.core.jsx.call(null,G__31213,G__31214));
})()]});
return obj31156;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31145,G__31146) : helix.core.jsxs.call(null,G__31145,G__31146));
});
if(goog.DEBUG === true){
var G__31225 = G__31115;
(G__31225.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/flow-rate-hud-settings");

return G__31225;
} else {
return G__31115;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.countdown_hud_settings = (function (){var G__31272 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$countdown_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31276 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__31286 = app.ui.shared.components.form.field_row;
var G__31289 = (function (){var obj31306 = ({"label":"REMAINING RUNTIME","children":[(function (){var G__31343 = app.ui.shared.components.form.select;
var G__31344 = (function (){var obj31349 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"s",new cljs.core.Keyword(null,"label","label",1718410804),"HH:MM:SS"], null)], null),"value":unit,"on-change":(function (p1__31246_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31246_SHARP_], null)], null));
})});
return obj31349;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31343,G__31344) : helix.core.jsx.call(null,G__31343,G__31344));
})(),(function (){var G__31353 = app.ui.shared.components.form.checkbox;
var G__31354 = (function (){var obj31357 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj31357;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31353,G__31354) : helix.core.jsx.call(null,G__31353,G__31354));
})()]});
return obj31306;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31286,G__31289) : helix.core.jsxs.call(null,G__31286,G__31289));
});
if(goog.DEBUG === true){
var G__31373 = G__31272;
(G__31373.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/countdown-hud-settings");

return G__31373;
} else {
return G__31272;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.countdown_init_value = (function (){var G__31452 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$countdown_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve-init-countdown-converted-value","sludge-valve-init-countdown-converted-value",429137117)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blowdown-countdown-init-value","blowdown-countdown-init-value",-743678411).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial remaining runtime value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__31478 = app.ui.shared.components.form.field_row;
var G__31479 = (function (){var obj31483 = ({"label":"REMAINING RUNTIME","children":[(function (){var G__31486 = app.ui.shared.components.form.input_number;
var G__31487 = helix.impl.props.merge_obj((function (){var obj31491 = ({"value":converted_value,"on-change":(function (p1__31404_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve-init-countdown-value","change-sludge-valve-init-countdown-value",652007406),p1__31404_SHARP_], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__31409_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve-init-countdown-value","change-sludge-valve-init-countdown-value",652007406),p1__31409_SHARP_], null));
}));
})});
return obj31491;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31486,G__31487) : helix.core.jsx.call(null,G__31486,G__31487));
})(),(function (){var G__31508 = app.ui.shared.components.form.select;
var G__31509 = (function (){var obj31515 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"s",new cljs.core.Keyword(null,"label","label",1718410804),"s"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"m",new cljs.core.Keyword(null,"label","label",1718410804),"m"], null)], null),"value":unit,"on-change":(function (p1__31415_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31415_SHARP_], null)], null));
})});
return obj31515;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31508,G__31509) : helix.core.jsx.call(null,G__31508,G__31509));
})()]});
return obj31483;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31478,G__31479) : helix.core.jsxs.call(null,G__31478,G__31479));
});
if(goog.DEBUG === true){
var G__31534 = G__31452;
(G__31534.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/countdown-init-value");

return G__31534;
} else {
return G__31452;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.flow_rate_init_max_value = (function (){var G__31592 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$flow_rate_init_max_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31602 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flow-rate-kg-s","flow-rate-kg-s",1902668845).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial flow rate maximum value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__31627 = app.ui.shared.components.form.field_row;
var G__31628 = (function (){var obj31634 = ({"label":"MAXIMUM FLOW-RATE","children":[(function (){var G__31636 = app.ui.shared.components.form.input_number;
var G__31637 = helix.impl.props.merge_obj((function (){var obj31641 = ({"value":value,"on-change":(function (p1__31553_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__31553_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__31554_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__31554_SHARP_], null)], null));
}));
})});
return obj31641;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31636,G__31637) : helix.core.jsx.call(null,G__31636,G__31637));
})(),(function (){var G__31657 = app.ui.shared.components.form.select;
var G__31658 = (function (){var obj31664 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kg/s",new cljs.core.Keyword(null,"label","label",1718410804),"kg/s"], null)], null),"value":unit,"on-change":(function (p1__31559_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31559_SHARP_], null)], null));
})});
return obj31664;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31657,G__31658) : helix.core.jsx.call(null,G__31657,G__31658));
})()]});
return obj31634;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31627,G__31628) : helix.core.jsxs.call(null,G__31627,G__31628));
});
if(goog.DEBUG === true){
var G__31679 = G__31592;
(G__31679.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/flow-rate-init-max-value");

return G__31679;
} else {
return G__31592;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.settings_form = (function (){var G__31718 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__31733 = helix.core.Fragment;
var G__31734 = ({"children": [(function (){var G__31737 = "div";
var G__31738 = (function (){var obj31744 = ({"className":"divider","style":(function (){var obj31750 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj31750;
})(),"children":"head-up-display"});
return obj31744;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31737,G__31738) : helix.core.jsx.call(null,G__31737,G__31738));
})(),(function (){var G__31760 = app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.mode_hud_settings;
var G__31761 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31760,G__31761) : helix.core.jsx.call(null,G__31760,G__31761));
})(),(function (){var G__31770 = app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.damper_hud_settings;
var G__31771 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31770,G__31771) : helix.core.jsx.call(null,G__31770,G__31771));
})(),(function (){var G__31778 = app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.flow_rate_hud_settings;
var G__31779 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31778,G__31779) : helix.core.jsx.call(null,G__31778,G__31779));
})(),(function (){var G__31789 = app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.countdown_hud_settings;
var G__31790 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31789,G__31790) : helix.core.jsx.call(null,G__31789,G__31790));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__31809 = helix.core.Fragment;
var G__31810 = ({"children": [(function (){var G__31815 = "div";
var G__31816 = (function (){var obj31822 = ({"className":"divider","children":"simulation start values"});
return obj31822;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31815,G__31816) : helix.core.jsx.call(null,G__31815,G__31816));
})(),(function (){var G__31828 = app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.countdown_init_value;
var G__31829 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31828,G__31829) : helix.core.jsx.call(null,G__31828,G__31829));
})(),(function (){var G__31833 = "div";
var G__31834 = (function (){var obj31842 = ({"className":"divider","children":"specifications"});
return obj31842;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31833,G__31834) : helix.core.jsx.call(null,G__31833,G__31834));
})(),(function (){var G__31850 = app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.flow_rate_init_max_value;
var G__31851 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31850,G__31851) : helix.core.jsx.call(null,G__31850,G__31851));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31809,G__31810) : helix.core.jsxs.call(null,G__31809,G__31810));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31733,G__31734) : helix.core.jsxs.call(null,G__31733,G__31734));
});
if(goog.DEBUG === true){
var G__31864 = G__31718;
(G__31864.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/settings-form");

return G__31864;
} else {
return G__31718;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.sludge_valve_settings = (function (){var G__31903 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$sludge_valve_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31938 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__31953 = app.ui.shared.components.modal.settings;
var G__31954 = (function (){var obj31958 = ({"title":"Bottom Blowdown Valve Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-sludge-valve-settings","restore-defaults-sludge-valve-settings",-406134008)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-sludge-valve-settings","apply-sludge-valve-settings",1278915756)], null));
}),"children":(function (){var G__31971 = app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.settings_form;
var G__31972 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31971,G__31972) : helix.core.jsx.call(null,G__31971,G__31972));
})()});
return obj31958;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31953,G__31954) : helix.core.jsx.call(null,G__31953,G__31954));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__31995 = G__31903;
(G__31995.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/sludge-valve-settings");

return G__31995;
} else {
return G__31903;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.js.map
