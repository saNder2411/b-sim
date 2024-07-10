goog.provide('app.shared.boiler_plant.burner.settings');

app.shared.boiler_plant.burner.settings.mode_hud_settings = (function (){var G__60385 = (function app$shared$boiler_plant$burner$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60386 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__60390 = app.shared.components.form.field_row;
var G__60391 = (function (){var obj60393 = ({"label":"CONTROL MODE","children":[(function (){var G__60395 = app.shared.components.form.select;
var G__60396 = (function (){var obj60399 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null)], null),"value":value,"on-change":(function (p1__60379_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__60379_SHARP_], null)], null));
})});
return obj60399;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60395,G__60396) : helix.core.jsx.call(null,G__60395,G__60396));
})(),(function (){var G__60400 = app.shared.components.form.checkbox;
var G__60401 = (function (){var obj60403 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj60403;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60400,G__60401) : helix.core.jsx.call(null,G__60400,G__60401));
})()]});
return obj60393;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60390,G__60391) : helix.core.jsxs.call(null,G__60390,G__60391));
});
if(goog.DEBUG === true){
var G__60408 = G__60385;
(G__60408.displayName = "app.shared.boiler-plant.burner.settings/mode-hud-settings");

return G__60408;
} else {
return G__60385;
}
})();




app.shared.boiler_plant.burner.settings.status_hud_settings = (function (){var G__60423 = (function app$shared$boiler_plant$burner$settings$status_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60425 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__60429 = app.shared.components.form.field_row;
var G__60430 = (function (){var obj60433 = ({"label":"BURNER STATE","children":[(function (){var G__60434 = app.shared.components.form.select;
var G__60435 = (function (){var obj60437 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"on/off",new cljs.core.Keyword(null,"label","label",1718410804),"on/off"], null)], null),"value":unit,"on-change":(function (p1__60417_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60417_SHARP_], null)], null));
})});
return obj60437;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60434,G__60435) : helix.core.jsx.call(null,G__60434,G__60435));
})(),(function (){var G__60439 = app.shared.components.form.checkbox;
var G__60440 = (function (){var obj60444 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj60444;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60439,G__60440) : helix.core.jsx.call(null,G__60439,G__60440));
})()]});
return obj60433;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60429,G__60430) : helix.core.jsxs.call(null,G__60429,G__60430));
});
if(goog.DEBUG === true){
var G__60448 = G__60423;
(G__60448.displayName = "app.shared.boiler-plant.burner.settings/status-hud-settings");

return G__60448;
} else {
return G__60423;
}
})();




app.shared.boiler_plant.burner.settings.power_hud_settings = (function (){var G__60471 = (function app$shared$boiler_plant$burner$settings$power_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__60482 = app.shared.components.form.field_row;
var G__60483 = (function (){var obj60487 = ({"label":"POWER","children":[(function (){var G__60489 = app.shared.components.form.select;
var G__60490 = (function (){var obj60493 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kW",new cljs.core.Keyword(null,"label","label",1718410804),"kW"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"MW",new cljs.core.Keyword(null,"label","label",1718410804),"MW"], null)], null),"value":unit,"on-change":(function (p1__60457_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60457_SHARP_], null)], null));
})});
return obj60493;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60489,G__60490) : helix.core.jsx.call(null,G__60489,G__60490));
})(),(function (){var G__60497 = app.shared.components.form.checkbox;
var G__60498 = (function (){var obj60500 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj60500;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60497,G__60498) : helix.core.jsx.call(null,G__60497,G__60498));
})()]});
return obj60487;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60482,G__60483) : helix.core.jsxs.call(null,G__60482,G__60483));
});
if(goog.DEBUG === true){
var G__60504 = G__60471;
(G__60504.displayName = "app.shared.boiler-plant.burner.settings/power-hud-settings");

return G__60504;
} else {
return G__60471;
}
})();




app.shared.boiler_plant.burner.settings.fuel_consumption_hud_settings = (function (){var G__60522 = (function app$shared$boiler_plant$burner$settings$fuel_consumption_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60531 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__60536 = app.shared.components.form.field_row;
var G__60537 = (function (){var obj60541 = ({"label":"FUEL CONSUMPTION","children":[(function (){var G__60542 = app.shared.components.form.select;
var G__60543 = (function (){var obj60547 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/s",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/s"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"hnm\u00B3/h",new cljs.core.Keyword(null,"label","label",1718410804),"hnm\u00B3/h"], null)], null),"value":unit,"on-change":(function (p1__60509_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60509_SHARP_], null)], null));
})});
return obj60547;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60542,G__60543) : helix.core.jsx.call(null,G__60542,G__60543));
})(),(function (){var G__60551 = app.shared.components.form.checkbox;
var G__60552 = (function (){var obj60554 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj60554;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60551,G__60552) : helix.core.jsx.call(null,G__60551,G__60552));
})()]});
return obj60541;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60536,G__60537) : helix.core.jsxs.call(null,G__60536,G__60537));
});
if(goog.DEBUG === true){
var G__60559 = G__60522;
(G__60559.displayName = "app.shared.boiler-plant.burner.settings/fuel-consumption-hud-settings");

return G__60559;
} else {
return G__60522;
}
})();




app.shared.boiler_plant.burner.settings.status_init_value = (function (){var G__60571 = (function app$shared$boiler_plant$burner$settings$status_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60579 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var G__60585 = app.shared.components.form.field_row;
var G__60586 = (function (){var obj60590 = ({"label":"STATE","children":(function (){var G__60593 = app.shared.components.form.select;
var G__60594 = (function (){var obj60596 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"on",new cljs.core.Keyword(null,"label","label",1718410804),"On"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"off",new cljs.core.Keyword(null,"label","label",1718410804),"Off"], null)], null),"value":value,"on-change":(function (p1__60564_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__60564_SHARP_], null)], null));
})});
return obj60596;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60593,G__60594) : helix.core.jsx.call(null,G__60593,G__60594));
})()});
return obj60590;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60585,G__60586) : helix.core.jsx.call(null,G__60585,G__60586));
});
if(goog.DEBUG === true){
var G__60602 = G__60571;
(G__60602.displayName = "app.shared.boiler-plant.burner.settings/status-init-value");

return G__60602;
} else {
return G__60571;
}
})();




app.shared.boiler_plant.burner.settings.pressure_init_value_on = (function (){var G__60621 = (function app$shared$boiler_plant$burner$settings$pressure_init_value_on_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-pressure-converted-value-on","burner-pressure-converted-value-on",646734526)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__60635 = app.shared.components.form.field_row;
var G__60636 = (function (){var obj60639 = ({"label":"SWITCH-POINT ON (PRESSURE ABS)","children":[(function (){var G__60642 = app.shared.components.form.input_number;
var G__60643 = helix.impl.props.merge_obj((function (){var obj60645 = ({"value":converted_value,"on-change":(function (p1__60609_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),p1__60609_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__60610_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),p1__60610_SHARP_], null)], null));
}));
})});
return obj60645;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60642,G__60643) : helix.core.jsx.call(null,G__60642,G__60643));
})(),(function (){var G__60650 = app.shared.components.form.select;
var G__60651 = (function (){var obj60654 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__60611_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60611_SHARP_], null)], null));
})});
return obj60654;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60650,G__60651) : helix.core.jsx.call(null,G__60650,G__60651));
})()]});
return obj60639;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60635,G__60636) : helix.core.jsxs.call(null,G__60635,G__60636));
});
if(goog.DEBUG === true){
var G__60659 = G__60621;
(G__60659.displayName = "app.shared.boiler-plant.burner.settings/pressure-init-value-on");

return G__60659;
} else {
return G__60621;
}
})();




app.shared.boiler_plant.burner.settings.pressure_init_value_off = (function (){var G__60679 = (function app$shared$boiler_plant$burner$settings$pressure_init_value_off_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-pressure-converted-value-off","burner-pressure-converted-value-off",-558773916)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__60693 = app.shared.components.form.field_row;
var G__60694 = (function (){var obj60698 = ({"label":"SWITCH-POINT OFF (PRESSURE ABS)","children":[(function (){var G__60701 = app.shared.components.form.input_number;
var G__60702 = helix.impl.props.merge_obj((function (){var obj60705 = ({"value":converted_value,"on-change":(function (p1__60666_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),p1__60666_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__60669_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),p1__60669_SHARP_], null)], null));
}));
})});
return obj60705;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60701,G__60702) : helix.core.jsx.call(null,G__60701,G__60702));
})(),(function (){var G__60714 = app.shared.components.form.select;
var G__60715 = (function (){var obj60717 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__60670_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60670_SHARP_], null)], null));
})});
return obj60717;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60714,G__60715) : helix.core.jsx.call(null,G__60714,G__60715));
})()]});
return obj60698;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60693,G__60694) : helix.core.jsxs.call(null,G__60693,G__60694));
});
if(goog.DEBUG === true){
var G__60725 = G__60679;
(G__60725.displayName = "app.shared.boiler-plant.burner.settings/pressure-init-value-off");

return G__60725;
} else {
return G__60679;
}
})();




app.shared.boiler_plant.burner.settings.power_max_init_value = (function (){var G__60751 = (function app$shared$boiler_plant$burner$settings$power_max_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60759 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-power-max-converted-value","burner-power-max-converted-value",255123063)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-max-power","burner-max-power",-2009326653).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial maximum power value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__60768 = app.shared.components.form.field_row;
var G__60769 = (function (){var obj60773 = ({"label":"MAXIMUM POWER","children":[(function (){var G__60777 = app.shared.components.form.input_number;
var G__60778 = helix.impl.props.merge_obj((function (){var obj60782 = ({"value":converted_value,"on-change":(function (p1__60732_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),p1__60732_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__60735_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),p1__60735_SHARP_], null));
}));
})});
return obj60782;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60777,G__60778) : helix.core.jsx.call(null,G__60777,G__60778));
})(),(function (){var G__60787 = app.shared.components.form.select;
var G__60788 = (function (){var obj60792 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kW",new cljs.core.Keyword(null,"label","label",1718410804),"kW"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"MW",new cljs.core.Keyword(null,"label","label",1718410804),"MW"], null)], null),"value":unit,"on-change":(function (p1__60738_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60738_SHARP_], null)], null));
})});
return obj60792;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60787,G__60788) : helix.core.jsx.call(null,G__60787,G__60788));
})()]});
return obj60773;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60768,G__60769) : helix.core.jsxs.call(null,G__60768,G__60769));
});
if(goog.DEBUG === true){
var G__60801 = G__60751;
(G__60801.displayName = "app.shared.boiler-plant.burner.settings/power-max-init-value");

return G__60801;
} else {
return G__60751;
}
})();




app.shared.boiler_plant.burner.settings.fuel_consumption_coeff_init_value = (function (){var G__60814 = (function app$shared$boiler_plant$burner$settings$fuel_consumption_coeff_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-fuel-consumption-coeff-converted-value","burner-fuel-consumption-coeff-converted-value",86432573)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-fuel-consumption-coeff","burner-fuel-consumption-coeff",-1586862452).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial fuel consumption coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__60821 = app.shared.components.form.field_row;
var G__60822 = (function (){var obj60824 = ({"label":"FUEL CONSUMPTION COEFFICIENT","children":[(function (){var G__60829 = app.shared.components.form.input_number;
var G__60830 = helix.impl.props.merge_obj((function (){var obj60834 = ({"value":converted_value,"on-change":(function (p1__60805_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),p1__60805_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__60808_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),p1__60808_SHARP_], null));
}));
})});
return obj60834;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60829,G__60830) : helix.core.jsx.call(null,G__60829,G__60830));
})(),(function (){var G__60837 = app.shared.components.form.select;
var G__60838 = (function (){var obj60840 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/kW*h",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/kW*h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/kW*s",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/kW*s"], null)], null),"value":unit,"on-change":(function (p1__60810_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60810_SHARP_], null)], null));
})});
return obj60840;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60837,G__60838) : helix.core.jsx.call(null,G__60837,G__60838));
})()]});
return obj60824;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60821,G__60822) : helix.core.jsxs.call(null,G__60821,G__60822));
});
if(goog.DEBUG === true){
var G__60845 = G__60814;
(G__60845.displayName = "app.shared.boiler-plant.burner.settings/fuel-consumption-coeff-init-value");

return G__60845;
} else {
return G__60814;
}
})();




app.shared.boiler_plant.burner.settings.heat_transfer_init_value = (function (){var G__60855 = (function app$shared$boiler_plant$burner$settings$heat_transfer_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60857 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-heat-transfer-coeff","burner-heat-transfer-coeff",-917720211).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial heat transfer coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__60864 = app.shared.components.form.field_row;
var G__60866 = (function (){var obj60869 = ({"label":"HEAT TRANSFER COEFFICIENT","children":[(function (){var G__60872 = app.shared.components.form.input_number;
var G__60873 = helix.impl.props.merge_obj((function (){var obj60877 = ({"value":value,"on-change":(function (p1__60847_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__60847_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__60849_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__60849_SHARP_], null)], null));
}));
})});
return obj60877;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60872,G__60873) : helix.core.jsx.call(null,G__60872,G__60873));
})(),(function (){var G__60879 = app.shared.components.form.select;
var G__60880 = (function (){var obj60884 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kJ/kW*s",new cljs.core.Keyword(null,"label","label",1718410804),"kJ/kW*s"], null)], null),"value":unit,"on-change":(function (p1__60850_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60850_SHARP_], null)], null));
})});
return obj60884;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60879,G__60880) : helix.core.jsx.call(null,G__60879,G__60880));
})()]});
return obj60869;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60864,G__60866) : helix.core.jsxs.call(null,G__60864,G__60866));
});
if(goog.DEBUG === true){
var G__60888 = G__60855;
(G__60888.displayName = "app.shared.boiler-plant.burner.settings/heat-transfer-init-value");

return G__60888;
} else {
return G__60855;
}
})();




app.shared.boiler_plant.burner.settings.settings_form = (function (){var G__60894 = (function app$shared$boiler_plant$burner$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60895 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__60899 = helix.core.Fragment;
var G__60900 = ({"children": [(function (){var G__60901 = "div";
var G__60902 = (function (){var obj60907 = ({"className":"divider","style":(function (){var obj60909 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj60909;
})(),"children":"head-up-display"});
return obj60907;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60901,G__60902) : helix.core.jsx.call(null,G__60901,G__60902));
})(),(function (){var G__60910 = app.shared.boiler_plant.burner.settings.mode_hud_settings;
var G__60911 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60910,G__60911) : helix.core.jsx.call(null,G__60910,G__60911));
})(),(function (){var G__60914 = app.shared.boiler_plant.burner.settings.status_hud_settings;
var G__60915 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60914,G__60915) : helix.core.jsx.call(null,G__60914,G__60915));
})(),(function (){var G__60918 = app.shared.boiler_plant.burner.settings.power_hud_settings;
var G__60919 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60918,G__60919) : helix.core.jsx.call(null,G__60918,G__60919));
})(),(function (){var G__60922 = app.shared.boiler_plant.burner.settings.fuel_consumption_hud_settings;
var G__60923 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60922,G__60923) : helix.core.jsx.call(null,G__60922,G__60923));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__60926 = helix.core.Fragment;
var G__60927 = ({"children": [(function (){var G__60928 = "div";
var G__60929 = (function (){var obj60931 = ({"className":"divider","children":"simulation start values"});
return obj60931;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60928,G__60929) : helix.core.jsx.call(null,G__60928,G__60929));
})(),(function (){var G__60932 = app.shared.boiler_plant.burner.settings.status_init_value;
var G__60933 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60932,G__60933) : helix.core.jsx.call(null,G__60932,G__60933));
})(),(function (){var G__60936 = "div";
var G__60937 = (function (){var obj60941 = ({"className":"divider","children":"specifications"});
return obj60941;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60936,G__60937) : helix.core.jsx.call(null,G__60936,G__60937));
})(),(function (){var G__60942 = app.shared.boiler_plant.burner.settings.pressure_init_value_on;
var G__60943 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60942,G__60943) : helix.core.jsx.call(null,G__60942,G__60943));
})(),(function (){var G__60944 = app.shared.boiler_plant.burner.settings.pressure_init_value_off;
var G__60945 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60944,G__60945) : helix.core.jsx.call(null,G__60944,G__60945));
})(),(function (){var G__60947 = app.shared.boiler_plant.burner.settings.power_max_init_value;
var G__60948 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60947,G__60948) : helix.core.jsx.call(null,G__60947,G__60948));
})(),(function (){var G__60949 = app.shared.boiler_plant.burner.settings.fuel_consumption_coeff_init_value;
var G__60950 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60949,G__60950) : helix.core.jsx.call(null,G__60949,G__60950));
})(),(function (){var G__60951 = app.shared.boiler_plant.burner.settings.heat_transfer_init_value;
var G__60952 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60951,G__60952) : helix.core.jsx.call(null,G__60951,G__60952));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60926,G__60927) : helix.core.jsxs.call(null,G__60926,G__60927));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60899,G__60900) : helix.core.jsxs.call(null,G__60899,G__60900));
});
if(goog.DEBUG === true){
var G__60957 = G__60894;
(G__60957.displayName = "app.shared.boiler-plant.burner.settings/settings-form");

return G__60957;
} else {
return G__60894;
}
})();




app.shared.boiler_plant.burner.settings.burner_settings = (function (){var G__60959 = (function app$shared$boiler_plant$burner$settings$burner_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60961 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__60967 = app.shared.components.modal.settings;
var G__60968 = (function (){var obj60970 = ({"title":"Burner Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-burner-settings","restore-defaults-burner-settings",652644801)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-burner-settings","apply-burner-settings",-1461084724)], null));
}),"children":(function (){var G__60973 = app.shared.boiler_plant.burner.settings.settings_form;
var G__60974 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60973,G__60974) : helix.core.jsx.call(null,G__60973,G__60974));
})()});
return obj60970;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60967,G__60968) : helix.core.jsx.call(null,G__60967,G__60968));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__60981 = G__60959;
(G__60981.displayName = "app.shared.boiler-plant.burner.settings/burner-settings");

return G__60981;
} else {
return G__60959;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.burner.settings.js.map
