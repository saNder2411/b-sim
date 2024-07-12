goog.provide('app.shared.boiler_plant.burner.settings');

app.shared.boiler_plant.burner.settings.mode_hud_settings = (function (){var G__75418 = (function app$shared$boiler_plant$burner$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__75419 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__75438 = app.shared.components.form.field_row;
var G__75439 = (function (){var obj75441 = ({"label":"CONTROL MODE","children":[(function (){var G__75454 = app.shared.components.form.select;
var G__75455 = (function (){var obj75461 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null)], null),"value":value,"on-change":(function (p1__75400_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__75400_SHARP_], null)], null));
})});
return obj75461;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__75454,G__75455) : helix.core.jsx.call(null,G__75454,G__75455));
})(),(function (){var G__75466 = app.shared.components.form.checkbox;
var G__75468 = (function (){var obj75472 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj75472;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__75466,G__75468) : helix.core.jsx.call(null,G__75466,G__75468));
})()]});
return obj75441;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__75438,G__75439) : helix.core.jsxs.call(null,G__75438,G__75439));
});
if(goog.DEBUG === true){
var G__75483 = G__75418;
(G__75483.displayName = "app.shared.boiler-plant.burner.settings/mode-hud-settings");

return G__75483;
} else {
return G__75418;
}
})();




app.shared.boiler_plant.burner.settings.status_hud_settings = (function (){var G__75498 = (function app$shared$boiler_plant$burner$settings$status_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__75505 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__75517 = app.shared.components.form.field_row;
var G__75518 = (function (){var obj75528 = ({"label":"BURNER STATE","children":[(function (){var G__75537 = app.shared.components.form.select;
var G__75538 = (function (){var obj75548 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"on/off",new cljs.core.Keyword(null,"label","label",1718410804),"on/off"], null)], null),"value":unit,"on-change":(function (p1__75488_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__75488_SHARP_], null)], null));
})});
return obj75548;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__75537,G__75538) : helix.core.jsx.call(null,G__75537,G__75538));
})(),(function (){var G__75559 = app.shared.components.form.checkbox;
var G__75560 = (function (){var obj75570 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj75570;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__75559,G__75560) : helix.core.jsx.call(null,G__75559,G__75560));
})()]});
return obj75528;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__75517,G__75518) : helix.core.jsxs.call(null,G__75517,G__75518));
});
if(goog.DEBUG === true){
var G__75577 = G__75498;
(G__75577.displayName = "app.shared.boiler-plant.burner.settings/status-hud-settings");

return G__75577;
} else {
return G__75498;
}
})();




app.shared.boiler_plant.burner.settings.power_hud_settings = (function (){var G__75592 = (function app$shared$boiler_plant$burner$settings$power_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__75600 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__75612 = app.shared.components.form.field_row;
var G__75613 = (function (){var obj75621 = ({"label":"POWER","children":[(function (){var G__75634 = app.shared.components.form.select;
var G__75635 = (function (){var obj75643 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kW",new cljs.core.Keyword(null,"label","label",1718410804),"kW"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"MW",new cljs.core.Keyword(null,"label","label",1718410804),"MW"], null)], null),"value":unit,"on-change":(function (p1__75582_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__75582_SHARP_], null)], null));
})});
return obj75643;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__75634,G__75635) : helix.core.jsx.call(null,G__75634,G__75635));
})(),(function (){var G__75654 = app.shared.components.form.checkbox;
var G__75655 = (function (){var obj75662 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj75662;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__75654,G__75655) : helix.core.jsx.call(null,G__75654,G__75655));
})()]});
return obj75621;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__75612,G__75613) : helix.core.jsxs.call(null,G__75612,G__75613));
});
if(goog.DEBUG === true){
var G__75673 = G__75592;
(G__75673.displayName = "app.shared.boiler-plant.burner.settings/power-hud-settings");

return G__75673;
} else {
return G__75592;
}
})();




app.shared.boiler_plant.burner.settings.fuel_consumption_hud_settings = (function (){var G__75690 = (function app$shared$boiler_plant$burner$settings$fuel_consumption_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__75697 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__75706 = app.shared.components.form.field_row;
var G__75707 = (function (){var obj75711 = ({"label":"FUEL CONSUMPTION","children":[(function (){var G__75719 = app.shared.components.form.select;
var G__75720 = (function (){var obj75727 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/s",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/s"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"hnm\u00B3/h",new cljs.core.Keyword(null,"label","label",1718410804),"hnm\u00B3/h"], null)], null),"value":unit,"on-change":(function (p1__75676_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__75676_SHARP_], null)], null));
})});
return obj75727;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__75719,G__75720) : helix.core.jsx.call(null,G__75719,G__75720));
})(),(function (){var G__75737 = app.shared.components.form.checkbox;
var G__75738 = (function (){var obj75748 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj75748;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__75737,G__75738) : helix.core.jsx.call(null,G__75737,G__75738));
})()]});
return obj75711;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__75706,G__75707) : helix.core.jsxs.call(null,G__75706,G__75707));
});
if(goog.DEBUG === true){
var G__75761 = G__75690;
(G__75761.displayName = "app.shared.boiler-plant.burner.settings/fuel-consumption-hud-settings");

return G__75761;
} else {
return G__75690;
}
})();




app.shared.boiler_plant.burner.settings.status_init_value = (function (){var G__75780 = (function app$shared$boiler_plant$burner$settings$status_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__75787 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var G__75792 = app.shared.components.form.field_row;
var G__75793 = (function (){var obj75800 = ({"label":"STATE","children":(function (){var G__75806 = app.shared.components.form.select;
var G__75807 = (function (){var obj75809 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"on",new cljs.core.Keyword(null,"label","label",1718410804),"On"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"off",new cljs.core.Keyword(null,"label","label",1718410804),"Off"], null)], null),"value":value,"on-change":(function (p1__75770_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__75770_SHARP_], null)], null));
})});
return obj75809;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__75806,G__75807) : helix.core.jsx.call(null,G__75806,G__75807));
})()});
return obj75800;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__75792,G__75793) : helix.core.jsx.call(null,G__75792,G__75793));
});
if(goog.DEBUG === true){
var G__75820 = G__75780;
(G__75820.displayName = "app.shared.boiler-plant.burner.settings/status-init-value");

return G__75820;
} else {
return G__75780;
}
})();




app.shared.boiler_plant.burner.settings.pressure_init_value_on = (function (){var G__75857 = (function app$shared$boiler_plant$burner$settings$pressure_init_value_on_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__75862 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-pressure-converted-value-on","burner-pressure-converted-value-on",646734526)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__75885 = app.shared.components.form.field_row;
var G__75886 = (function (){var obj75888 = ({"label":"SWITCH-POINT ON (PRESSURE ABS)","children":[(function (){var G__75889 = app.shared.components.form.input_number;
var G__75890 = helix.impl.props.merge_obj((function (){var obj75892 = ({"value":converted_value,"on-change":(function (p1__75832_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),p1__75832_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__75833_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),p1__75833_SHARP_], null)], null));
}));
})});
return obj75892;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__75889,G__75890) : helix.core.jsx.call(null,G__75889,G__75890));
})(),(function (){var G__75904 = app.shared.components.form.select;
var G__75905 = (function (){var obj75913 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__75837_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__75837_SHARP_], null)], null));
})});
return obj75913;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__75904,G__75905) : helix.core.jsx.call(null,G__75904,G__75905));
})()]});
return obj75888;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__75885,G__75886) : helix.core.jsxs.call(null,G__75885,G__75886));
});
if(goog.DEBUG === true){
var G__75918 = G__75857;
(G__75918.displayName = "app.shared.boiler-plant.burner.settings/pressure-init-value-on");

return G__75918;
} else {
return G__75857;
}
})();




app.shared.boiler_plant.burner.settings.pressure_init_value_off = (function (){var G__75962 = (function app$shared$boiler_plant$burner$settings$pressure_init_value_off_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__75966 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-pressure-converted-value-off","burner-pressure-converted-value-off",-558773916)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__75984 = app.shared.components.form.field_row;
var G__75985 = (function (){var obj75990 = ({"label":"SWITCH-POINT OFF (PRESSURE ABS)","children":[(function (){var G__75991 = app.shared.components.form.input_number;
var G__75992 = helix.impl.props.merge_obj((function (){var obj75994 = ({"value":converted_value,"on-change":(function (p1__75935_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),p1__75935_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__75936_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),p1__75936_SHARP_], null)], null));
}));
})});
return obj75994;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__75991,G__75992) : helix.core.jsx.call(null,G__75991,G__75992));
})(),(function (){var G__76009 = app.shared.components.form.select;
var G__76010 = (function (){var obj76014 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__75939_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__75939_SHARP_], null)], null));
})});
return obj76014;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76009,G__76010) : helix.core.jsx.call(null,G__76009,G__76010));
})()]});
return obj75990;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__75984,G__75985) : helix.core.jsxs.call(null,G__75984,G__75985));
});
if(goog.DEBUG === true){
var G__76028 = G__75962;
(G__76028.displayName = "app.shared.boiler-plant.burner.settings/pressure-init-value-off");

return G__76028;
} else {
return G__75962;
}
})();




app.shared.boiler_plant.burner.settings.power_max_init_value = (function (){var G__76083 = (function app$shared$boiler_plant$burner$settings$power_max_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__76100 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-power-max-converted-value","burner-power-max-converted-value",255123063)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-max-power","burner-max-power",-2009326653).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial maximum power value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__76113 = app.shared.components.form.field_row;
var G__76114 = (function (){var obj76121 = ({"label":"MAXIMUM POWER","children":[(function (){var G__76123 = app.shared.components.form.input_number;
var G__76124 = helix.impl.props.merge_obj((function (){var obj76129 = ({"value":converted_value,"on-change":(function (p1__76045_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),p1__76045_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__76048_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),p1__76048_SHARP_], null));
}));
})});
return obj76129;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76123,G__76124) : helix.core.jsx.call(null,G__76123,G__76124));
})(),(function (){var G__76140 = app.shared.components.form.select;
var G__76141 = (function (){var obj76143 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kW",new cljs.core.Keyword(null,"label","label",1718410804),"kW"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"MW",new cljs.core.Keyword(null,"label","label",1718410804),"MW"], null)], null),"value":unit,"on-change":(function (p1__76051_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__76051_SHARP_], null)], null));
})});
return obj76143;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76140,G__76141) : helix.core.jsx.call(null,G__76140,G__76141));
})()]});
return obj76121;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__76113,G__76114) : helix.core.jsxs.call(null,G__76113,G__76114));
});
if(goog.DEBUG === true){
var G__76153 = G__76083;
(G__76153.displayName = "app.shared.boiler-plant.burner.settings/power-max-init-value");

return G__76153;
} else {
return G__76083;
}
})();




app.shared.boiler_plant.burner.settings.fuel_consumption_coeff_init_value = (function (){var G__76192 = (function app$shared$boiler_plant$burner$settings$fuel_consumption_coeff_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__76195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-fuel-consumption-coeff-converted-value","burner-fuel-consumption-coeff-converted-value",86432573)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-fuel-consumption-coeff","burner-fuel-consumption-coeff",-1586862452).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial fuel consumption coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__76203 = app.shared.components.form.field_row;
var G__76204 = (function (){var obj76209 = ({"label":"FUEL CONSUMPTION COEFFICIENT","children":[(function (){var G__76212 = app.shared.components.form.input_number;
var G__76213 = helix.impl.props.merge_obj((function (){var obj76215 = ({"value":converted_value,"on-change":(function (p1__76166_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),p1__76166_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__76169_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),p1__76169_SHARP_], null));
}));
})});
return obj76215;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76212,G__76213) : helix.core.jsx.call(null,G__76212,G__76213));
})(),(function (){var G__76219 = app.shared.components.form.select;
var G__76220 = (function (){var obj76225 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/kW*h",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/kW*h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/kW*s",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/kW*s"], null)], null),"value":unit,"on-change":(function (p1__76172_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__76172_SHARP_], null)], null));
})});
return obj76225;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76219,G__76220) : helix.core.jsx.call(null,G__76219,G__76220));
})()]});
return obj76209;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__76203,G__76204) : helix.core.jsxs.call(null,G__76203,G__76204));
});
if(goog.DEBUG === true){
var G__76233 = G__76192;
(G__76233.displayName = "app.shared.boiler-plant.burner.settings/fuel-consumption-coeff-init-value");

return G__76233;
} else {
return G__76192;
}
})();




app.shared.boiler_plant.burner.settings.heat_transfer_init_value = (function (){var G__76268 = (function app$shared$boiler_plant$burner$settings$heat_transfer_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__76274 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-heat-transfer-coeff","burner-heat-transfer-coeff",-917720211).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial heat transfer coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__76287 = app.shared.components.form.field_row;
var G__76288 = (function (){var obj76290 = ({"label":"HEAT TRANSFER COEFFICIENT","children":[(function (){var G__76292 = app.shared.components.form.input_number;
var G__76293 = helix.impl.props.merge_obj((function (){var obj76295 = ({"value":value,"on-change":(function (p1__76244_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__76244_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__76247_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__76247_SHARP_], null)], null));
}));
})});
return obj76295;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76292,G__76293) : helix.core.jsx.call(null,G__76292,G__76293));
})(),(function (){var G__76299 = app.shared.components.form.select;
var G__76300 = (function (){var obj76308 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kJ/kW*s",new cljs.core.Keyword(null,"label","label",1718410804),"kJ/kW*s"], null)], null),"value":unit,"on-change":(function (p1__76250_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__76250_SHARP_], null)], null));
})});
return obj76308;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76299,G__76300) : helix.core.jsx.call(null,G__76299,G__76300));
})()]});
return obj76290;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__76287,G__76288) : helix.core.jsxs.call(null,G__76287,G__76288));
});
if(goog.DEBUG === true){
var G__76313 = G__76268;
(G__76313.displayName = "app.shared.boiler-plant.burner.settings/heat-transfer-init-value");

return G__76313;
} else {
return G__76268;
}
})();




app.shared.boiler_plant.burner.settings.settings_form = (function (){var G__76326 = (function app$shared$boiler_plant$burner$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__76329 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__76334 = helix.core.Fragment;
var G__76335 = ({"children": [(function (){var G__76336 = "div";
var G__76337 = (function (){var obj76339 = ({"className":"divider","style":(function (){var obj76342 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj76342;
})(),"children":"head-up-display"});
return obj76339;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76336,G__76337) : helix.core.jsx.call(null,G__76336,G__76337));
})(),(function (){var G__76343 = app.shared.boiler_plant.burner.settings.mode_hud_settings;
var G__76344 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76343,G__76344) : helix.core.jsx.call(null,G__76343,G__76344));
})(),(function (){var G__76345 = app.shared.boiler_plant.burner.settings.status_hud_settings;
var G__76346 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76345,G__76346) : helix.core.jsx.call(null,G__76345,G__76346));
})(),(function (){var G__76348 = app.shared.boiler_plant.burner.settings.power_hud_settings;
var G__76349 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76348,G__76349) : helix.core.jsx.call(null,G__76348,G__76349));
})(),(function (){var G__76350 = app.shared.boiler_plant.burner.settings.fuel_consumption_hud_settings;
var G__76351 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76350,G__76351) : helix.core.jsx.call(null,G__76350,G__76351));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__76353 = helix.core.Fragment;
var G__76354 = ({"children": [(function (){var G__76355 = "div";
var G__76356 = (function (){var obj76358 = ({"className":"divider","children":"simulation start values"});
return obj76358;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76355,G__76356) : helix.core.jsx.call(null,G__76355,G__76356));
})(),(function (){var G__76362 = app.shared.boiler_plant.burner.settings.status_init_value;
var G__76363 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76362,G__76363) : helix.core.jsx.call(null,G__76362,G__76363));
})(),(function (){var G__76366 = "div";
var G__76367 = (function (){var obj76371 = ({"className":"divider","children":"specifications"});
return obj76371;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76366,G__76367) : helix.core.jsx.call(null,G__76366,G__76367));
})(),(function (){var G__76376 = app.shared.boiler_plant.burner.settings.pressure_init_value_on;
var G__76377 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76376,G__76377) : helix.core.jsx.call(null,G__76376,G__76377));
})(),(function (){var G__76378 = app.shared.boiler_plant.burner.settings.pressure_init_value_off;
var G__76379 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76378,G__76379) : helix.core.jsx.call(null,G__76378,G__76379));
})(),(function (){var G__76382 = app.shared.boiler_plant.burner.settings.power_max_init_value;
var G__76383 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76382,G__76383) : helix.core.jsx.call(null,G__76382,G__76383));
})(),(function (){var G__76386 = app.shared.boiler_plant.burner.settings.fuel_consumption_coeff_init_value;
var G__76387 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76386,G__76387) : helix.core.jsx.call(null,G__76386,G__76387));
})(),(function (){var G__76390 = app.shared.boiler_plant.burner.settings.heat_transfer_init_value;
var G__76391 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76390,G__76391) : helix.core.jsx.call(null,G__76390,G__76391));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__76353,G__76354) : helix.core.jsxs.call(null,G__76353,G__76354));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__76334,G__76335) : helix.core.jsxs.call(null,G__76334,G__76335));
});
if(goog.DEBUG === true){
var G__76396 = G__76326;
(G__76396.displayName = "app.shared.boiler-plant.burner.settings/settings-form");

return G__76396;
} else {
return G__76326;
}
})();




app.shared.boiler_plant.burner.settings.burner_settings = (function (){var G__76406 = (function app$shared$boiler_plant$burner$settings$burner_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__76411 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__76418 = app.shared.components.modal.settings;
var G__76419 = (function (){var obj76423 = ({"title":"Burner Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-burner-settings","restore-defaults-burner-settings",652644801)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-burner-settings","apply-burner-settings",-1461084724)], null));
}),"children":(function (){var G__76426 = app.shared.boiler_plant.burner.settings.settings_form;
var G__76427 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76426,G__76427) : helix.core.jsx.call(null,G__76426,G__76427));
})()});
return obj76423;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__76418,G__76419) : helix.core.jsx.call(null,G__76418,G__76419));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__76429 = G__76406;
(G__76429.displayName = "app.shared.boiler-plant.burner.settings/burner-settings");

return G__76429;
} else {
return G__76406;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.burner.settings.js.map
