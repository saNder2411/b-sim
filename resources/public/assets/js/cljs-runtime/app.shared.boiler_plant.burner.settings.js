goog.provide('app.shared.boiler_plant.burner.settings');

app.shared.boiler_plant.burner.settings.mode_hud_settings = (function (){var G__39090 = (function app$shared$boiler_plant$burner$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39100 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__39115 = app.shared.components.form.field_row;
var G__39116 = (function (){var obj39123 = ({"label":"CONTROL MODE","children":[(function (){var G__39130 = app.shared.components.form.select;
var G__39131 = (function (){var obj39134 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null)], null),"value":value,"on-change":(function (p1__39063_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__39063_SHARP_], null)], null));
})});
return obj39134;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39130,G__39131) : helix.core.jsx.call(null,G__39130,G__39131));
})(),(function (){var G__39146 = app.shared.components.form.checkbox;
var G__39148 = (function (){var obj39154 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj39154;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39146,G__39148) : helix.core.jsx.call(null,G__39146,G__39148));
})()]});
return obj39123;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39115,G__39116) : helix.core.jsxs.call(null,G__39115,G__39116));
});
if(goog.DEBUG === true){
var G__39178 = G__39090;
(G__39178.displayName = "app.shared.boiler-plant.burner.settings/mode-hud-settings");

return G__39178;
} else {
return G__39090;
}
})();




app.shared.boiler_plant.burner.settings.status_hud_settings = (function (){var G__39228 = (function app$shared$boiler_plant$burner$settings$status_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39239 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__39255 = app.shared.components.form.field_row;
var G__39256 = (function (){var obj39263 = ({"label":"BURNER STATE","children":[(function (){var G__39272 = app.shared.components.form.select;
var G__39273 = (function (){var obj39281 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"on/off",new cljs.core.Keyword(null,"label","label",1718410804),"on/off"], null)], null),"value":unit,"on-change":(function (p1__39195_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39195_SHARP_], null)], null));
})});
return obj39281;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39272,G__39273) : helix.core.jsx.call(null,G__39272,G__39273));
})(),(function (){var G__39291 = app.shared.components.form.checkbox;
var G__39292 = (function (){var obj39295 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj39295;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39291,G__39292) : helix.core.jsx.call(null,G__39291,G__39292));
})()]});
return obj39263;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39255,G__39256) : helix.core.jsxs.call(null,G__39255,G__39256));
});
if(goog.DEBUG === true){
var G__39315 = G__39228;
(G__39315.displayName = "app.shared.boiler-plant.burner.settings/status-hud-settings");

return G__39315;
} else {
return G__39228;
}
})();




app.shared.boiler_plant.burner.settings.power_hud_settings = (function (){var G__39386 = (function app$shared$boiler_plant$burner$settings$power_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__39408 = app.shared.components.form.field_row;
var G__39409 = (function (){var obj39418 = ({"label":"POWER","children":[(function (){var G__39423 = app.shared.components.form.select;
var G__39424 = (function (){var obj39429 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kW",new cljs.core.Keyword(null,"label","label",1718410804),"kW"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"MW",new cljs.core.Keyword(null,"label","label",1718410804),"MW"], null)], null),"value":unit,"on-change":(function (p1__39338_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39338_SHARP_], null)], null));
})});
return obj39429;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39423,G__39424) : helix.core.jsx.call(null,G__39423,G__39424));
})(),(function (){var G__39435 = app.shared.components.form.checkbox;
var G__39436 = (function (){var obj39445 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj39445;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39435,G__39436) : helix.core.jsx.call(null,G__39435,G__39436));
})()]});
return obj39418;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39408,G__39409) : helix.core.jsxs.call(null,G__39408,G__39409));
});
if(goog.DEBUG === true){
var G__39467 = G__39386;
(G__39467.displayName = "app.shared.boiler-plant.burner.settings/power-hud-settings");

return G__39467;
} else {
return G__39386;
}
})();




app.shared.boiler_plant.burner.settings.fuel_consumption_hud_settings = (function (){var G__39500 = (function app$shared$boiler_plant$burner$settings$fuel_consumption_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__39534 = app.shared.components.form.field_row;
var G__39535 = (function (){var obj39541 = ({"label":"FUEL CONSUMPTION","children":[(function (){var G__39560 = app.shared.components.form.select;
var G__39561 = (function (){var obj39569 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/s",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/s"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"hnm\u00B3/h",new cljs.core.Keyword(null,"label","label",1718410804),"hnm\u00B3/h"], null)], null),"value":unit,"on-change":(function (p1__39474_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39474_SHARP_], null)], null));
})});
return obj39569;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39560,G__39561) : helix.core.jsx.call(null,G__39560,G__39561));
})(),(function (){var G__39586 = app.shared.components.form.checkbox;
var G__39587 = (function (){var obj39590 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj39590;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39586,G__39587) : helix.core.jsx.call(null,G__39586,G__39587));
})()]});
return obj39541;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39534,G__39535) : helix.core.jsxs.call(null,G__39534,G__39535));
});
if(goog.DEBUG === true){
var G__39614 = G__39500;
(G__39614.displayName = "app.shared.boiler-plant.burner.settings/fuel-consumption-hud-settings");

return G__39614;
} else {
return G__39500;
}
})();




app.shared.boiler_plant.burner.settings.status_init_value = (function (){var G__39658 = (function app$shared$boiler_plant$burner$settings$status_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39669 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var G__39679 = app.shared.components.form.field_row;
var G__39680 = (function (){var obj39689 = ({"label":"STATE","children":(function (){var G__39695 = app.shared.components.form.select;
var G__39696 = (function (){var obj39703 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"on",new cljs.core.Keyword(null,"label","label",1718410804),"On"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"off",new cljs.core.Keyword(null,"label","label",1718410804),"Off"], null)], null),"value":value,"on-change":(function (p1__39630_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__39630_SHARP_], null)], null));
})});
return obj39703;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39695,G__39696) : helix.core.jsx.call(null,G__39695,G__39696));
})()});
return obj39689;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39679,G__39680) : helix.core.jsx.call(null,G__39679,G__39680));
});
if(goog.DEBUG === true){
var G__39716 = G__39658;
(G__39716.displayName = "app.shared.boiler-plant.burner.settings/status-init-value");

return G__39716;
} else {
return G__39658;
}
})();




app.shared.boiler_plant.burner.settings.pressure_init_value_on = (function (){var G__39770 = (function app$shared$boiler_plant$burner$settings$pressure_init_value_on_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39773 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-pressure-converted-value-on","burner-pressure-converted-value-on",646734526)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__39798 = app.shared.components.form.field_row;
var G__39799 = (function (){var obj39804 = ({"label":"SWITCH-POINT ON (PRESSURE ABS)","children":[(function (){var G__39814 = app.shared.components.form.input_number;
var G__39815 = helix.impl.props.merge_obj((function (){var obj39821 = ({"value":converted_value,"on-change":(function (p1__39737_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),p1__39737_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__39743_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),p1__39743_SHARP_], null)], null));
}));
})});
return obj39821;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39814,G__39815) : helix.core.jsx.call(null,G__39814,G__39815));
})(),(function (){var G__39846 = app.shared.components.form.select;
var G__39847 = (function (){var obj39851 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__39744_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39744_SHARP_], null)], null));
})});
return obj39851;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39846,G__39847) : helix.core.jsx.call(null,G__39846,G__39847));
})()]});
return obj39804;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39798,G__39799) : helix.core.jsxs.call(null,G__39798,G__39799));
});
if(goog.DEBUG === true){
var G__39869 = G__39770;
(G__39869.displayName = "app.shared.boiler-plant.burner.settings/pressure-init-value-on");

return G__39869;
} else {
return G__39770;
}
})();




app.shared.boiler_plant.burner.settings.pressure_init_value_off = (function (){var G__39914 = (function app$shared$boiler_plant$burner$settings$pressure_init_value_off_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39929 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-pressure-converted-value-off","burner-pressure-converted-value-off",-558773916)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__39946 = app.shared.components.form.field_row;
var G__39947 = (function (){var obj39951 = ({"label":"SWITCH-POINT OFF (PRESSURE ABS)","children":[(function (){var G__39955 = app.shared.components.form.input_number;
var G__39956 = helix.impl.props.merge_obj((function (){var obj39960 = ({"value":converted_value,"on-change":(function (p1__39881_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),p1__39881_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__39888_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),p1__39888_SHARP_], null)], null));
}));
})});
return obj39960;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39955,G__39956) : helix.core.jsx.call(null,G__39955,G__39956));
})(),(function (){var G__39973 = app.shared.components.form.select;
var G__39974 = (function (){var obj39981 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__39891_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39891_SHARP_], null)], null));
})});
return obj39981;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39973,G__39974) : helix.core.jsx.call(null,G__39973,G__39974));
})()]});
return obj39951;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39946,G__39947) : helix.core.jsxs.call(null,G__39946,G__39947));
});
if(goog.DEBUG === true){
var G__40000 = G__39914;
(G__40000.displayName = "app.shared.boiler-plant.burner.settings/pressure-init-value-off");

return G__40000;
} else {
return G__39914;
}
})();




app.shared.boiler_plant.burner.settings.power_max_init_value = (function (){var G__40054 = (function app$shared$boiler_plant$burner$settings$power_max_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__40065 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-power-max-converted-value","burner-power-max-converted-value",255123063)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-max-power","burner-max-power",-2009326653).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial maximum power value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__40083 = app.shared.components.form.field_row;
var G__40084 = (function (){var obj40089 = ({"label":"MAXIMUM POWER","children":[(function (){var G__40092 = app.shared.components.form.input_number;
var G__40093 = helix.impl.props.merge_obj((function (){var obj40096 = ({"value":converted_value,"on-change":(function (p1__40020_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),p1__40020_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__40024_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),p1__40024_SHARP_], null));
}));
})});
return obj40096;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40092,G__40093) : helix.core.jsx.call(null,G__40092,G__40093));
})(),(function (){var G__40117 = app.shared.components.form.select;
var G__40118 = (function (){var obj40123 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kW",new cljs.core.Keyword(null,"label","label",1718410804),"kW"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"MW",new cljs.core.Keyword(null,"label","label",1718410804),"MW"], null)], null),"value":unit,"on-change":(function (p1__40029_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__40029_SHARP_], null)], null));
})});
return obj40123;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40117,G__40118) : helix.core.jsx.call(null,G__40117,G__40118));
})()]});
return obj40089;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40083,G__40084) : helix.core.jsxs.call(null,G__40083,G__40084));
});
if(goog.DEBUG === true){
var G__40137 = G__40054;
(G__40137.displayName = "app.shared.boiler-plant.burner.settings/power-max-init-value");

return G__40137;
} else {
return G__40054;
}
})();




app.shared.boiler_plant.burner.settings.fuel_consumption_coeff_init_value = (function (){var G__40185 = (function app$shared$boiler_plant$burner$settings$fuel_consumption_coeff_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__40188 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-fuel-consumption-coeff-converted-value","burner-fuel-consumption-coeff-converted-value",86432573)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-fuel-consumption-coeff","burner-fuel-consumption-coeff",-1586862452).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial fuel consumption coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__40199 = app.shared.components.form.field_row;
var G__40200 = (function (){var obj40206 = ({"label":"FUEL CONSUMPTION COEFFICIENT","children":[(function (){var G__40214 = app.shared.components.form.input_number;
var G__40215 = helix.impl.props.merge_obj((function (){var obj40217 = ({"value":converted_value,"on-change":(function (p1__40158_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),p1__40158_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__40163_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),p1__40163_SHARP_], null));
}));
})});
return obj40217;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40214,G__40215) : helix.core.jsx.call(null,G__40214,G__40215));
})(),(function (){var G__40231 = app.shared.components.form.select;
var G__40232 = (function (){var obj40236 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/kW*h",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/kW*h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/kW*s",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/kW*s"], null)], null),"value":unit,"on-change":(function (p1__40166_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__40166_SHARP_], null)], null));
})});
return obj40236;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40231,G__40232) : helix.core.jsx.call(null,G__40231,G__40232));
})()]});
return obj40206;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40199,G__40200) : helix.core.jsxs.call(null,G__40199,G__40200));
});
if(goog.DEBUG === true){
var G__40246 = G__40185;
(G__40246.displayName = "app.shared.boiler-plant.burner.settings/fuel-consumption-coeff-init-value");

return G__40246;
} else {
return G__40185;
}
})();




app.shared.boiler_plant.burner.settings.heat_transfer_init_value = (function (){var G__40277 = (function app$shared$boiler_plant$burner$settings$heat_transfer_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__40286 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-heat-transfer-coeff","burner-heat-transfer-coeff",-917720211).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial heat transfer coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__40298 = app.shared.components.form.field_row;
var G__40299 = (function (){var obj40301 = ({"label":"HEAT TRANSFER COEFFICIENT","children":[(function (){var G__40304 = app.shared.components.form.input_number;
var G__40305 = helix.impl.props.merge_obj((function (){var obj40310 = ({"value":value,"on-change":(function (p1__40254_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__40254_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__40259_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__40259_SHARP_], null)], null));
}));
})});
return obj40310;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40304,G__40305) : helix.core.jsx.call(null,G__40304,G__40305));
})(),(function (){var G__40320 = app.shared.components.form.select;
var G__40321 = (function (){var obj40323 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kJ/kW*s",new cljs.core.Keyword(null,"label","label",1718410804),"kJ/kW*s"], null)], null),"value":unit,"on-change":(function (p1__40260_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__40260_SHARP_], null)], null));
})});
return obj40323;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40320,G__40321) : helix.core.jsx.call(null,G__40320,G__40321));
})()]});
return obj40301;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40298,G__40299) : helix.core.jsxs.call(null,G__40298,G__40299));
});
if(goog.DEBUG === true){
var G__40337 = G__40277;
(G__40337.displayName = "app.shared.boiler-plant.burner.settings/heat-transfer-init-value");

return G__40337;
} else {
return G__40277;
}
})();




app.shared.boiler_plant.burner.settings.settings_form = (function (){var G__40352 = (function app$shared$boiler_plant$burner$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__40356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__40365 = helix.core.Fragment;
var G__40366 = ({"children": [(function (){var G__40370 = "div";
var G__40371 = (function (){var obj40375 = ({"className":"divider","style":(function (){var obj40378 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj40378;
})(),"children":"head-up-display"});
return obj40375;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40370,G__40371) : helix.core.jsx.call(null,G__40370,G__40371));
})(),(function (){var G__40383 = app.shared.boiler_plant.burner.settings.mode_hud_settings;
var G__40384 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40383,G__40384) : helix.core.jsx.call(null,G__40383,G__40384));
})(),(function (){var G__40387 = app.shared.boiler_plant.burner.settings.status_hud_settings;
var G__40388 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40387,G__40388) : helix.core.jsx.call(null,G__40387,G__40388));
})(),(function (){var G__40393 = app.shared.boiler_plant.burner.settings.power_hud_settings;
var G__40394 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40393,G__40394) : helix.core.jsx.call(null,G__40393,G__40394));
})(),(function (){var G__40399 = app.shared.boiler_plant.burner.settings.fuel_consumption_hud_settings;
var G__40400 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40399,G__40400) : helix.core.jsx.call(null,G__40399,G__40400));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__40405 = helix.core.Fragment;
var G__40406 = ({"children": [(function (){var G__40409 = "div";
var G__40410 = (function (){var obj40412 = ({"className":"divider","children":"simulation start values"});
return obj40412;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40409,G__40410) : helix.core.jsx.call(null,G__40409,G__40410));
})(),(function (){var G__40415 = app.shared.boiler_plant.burner.settings.status_init_value;
var G__40416 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40415,G__40416) : helix.core.jsx.call(null,G__40415,G__40416));
})(),(function (){var G__40417 = "div";
var G__40419 = (function (){var obj40423 = ({"className":"divider","children":"specifications"});
return obj40423;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40417,G__40419) : helix.core.jsx.call(null,G__40417,G__40419));
})(),(function (){var G__40426 = app.shared.boiler_plant.burner.settings.pressure_init_value_on;
var G__40427 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40426,G__40427) : helix.core.jsx.call(null,G__40426,G__40427));
})(),(function (){var G__40429 = app.shared.boiler_plant.burner.settings.pressure_init_value_off;
var G__40430 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40429,G__40430) : helix.core.jsx.call(null,G__40429,G__40430));
})(),(function (){var G__40432 = app.shared.boiler_plant.burner.settings.power_max_init_value;
var G__40433 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40432,G__40433) : helix.core.jsx.call(null,G__40432,G__40433));
})(),(function (){var G__40435 = app.shared.boiler_plant.burner.settings.fuel_consumption_coeff_init_value;
var G__40436 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40435,G__40436) : helix.core.jsx.call(null,G__40435,G__40436));
})(),(function (){var G__40437 = app.shared.boiler_plant.burner.settings.heat_transfer_init_value;
var G__40438 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40437,G__40438) : helix.core.jsx.call(null,G__40437,G__40438));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40405,G__40406) : helix.core.jsxs.call(null,G__40405,G__40406));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40365,G__40366) : helix.core.jsxs.call(null,G__40365,G__40366));
});
if(goog.DEBUG === true){
var G__40445 = G__40352;
(G__40445.displayName = "app.shared.boiler-plant.burner.settings/settings-form");

return G__40445;
} else {
return G__40352;
}
})();




app.shared.boiler_plant.burner.settings.burner_settings = (function (){var G__40455 = (function app$shared$boiler_plant$burner$settings$burner_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__40459 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__40468 = app.shared.components.modal.settings;
var G__40469 = (function (){var obj40471 = ({"title":"Burner Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-burner-settings","restore-defaults-burner-settings",652644801)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-burner-settings","apply-burner-settings",-1461084724)], null));
}),"children":(function (){var G__40476 = app.shared.boiler_plant.burner.settings.settings_form;
var G__40477 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40476,G__40477) : helix.core.jsx.call(null,G__40476,G__40477));
})()});
return obj40471;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40468,G__40469) : helix.core.jsx.call(null,G__40468,G__40469));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__40482 = G__40455;
(G__40482.displayName = "app.shared.boiler-plant.burner.settings/burner-settings");

return G__40482;
} else {
return G__40455;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.burner.settings.js.map
