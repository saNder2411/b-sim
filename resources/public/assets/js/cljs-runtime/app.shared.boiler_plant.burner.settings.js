goog.provide('app.shared.boiler_plant.burner.settings');

app.shared.boiler_plant.burner.settings.mode_hud_settings = (function (){var G__67569 = (function app$shared$boiler_plant$burner$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67571 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__67580 = app.shared.components.form.field_row;
var G__67582 = (function (){var obj67588 = ({"label":"CONTROL MODE","children":[(function (){var G__67593 = app.shared.components.form.select;
var G__67596 = (function (){var obj67599 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null)], null),"value":value,"on-change":(function (p1__67563_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__67563_SHARP_], null)], null));
})});
return obj67599;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67593,G__67596) : helix.core.jsx.call(null,G__67593,G__67596));
})(),(function (){var G__67605 = app.shared.components.form.checkbox;
var G__67607 = (function (){var obj67613 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj67613;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67605,G__67607) : helix.core.jsx.call(null,G__67605,G__67607));
})()]});
return obj67588;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67580,G__67582) : helix.core.jsxs.call(null,G__67580,G__67582));
});
if(goog.DEBUG === true){
var G__67620 = G__67569;
(G__67620.displayName = "app.shared.boiler-plant.burner.settings/mode-hud-settings");

return G__67620;
} else {
return G__67569;
}
})();




app.shared.boiler_plant.burner.settings.status_hud_settings = (function (){var G__67640 = (function app$shared$boiler_plant$burner$settings$status_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67652 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__67658 = app.shared.components.form.field_row;
var G__67660 = (function (){var obj67665 = ({"label":"BURNER STATE","children":[(function (){var G__67670 = app.shared.components.form.select;
var G__67673 = (function (){var obj67680 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"on/off",new cljs.core.Keyword(null,"label","label",1718410804),"on/off"], null)], null),"value":unit,"on-change":(function (p1__67625_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67625_SHARP_], null)], null));
})});
return obj67680;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67670,G__67673) : helix.core.jsx.call(null,G__67670,G__67673));
})(),(function (){var G__67686 = app.shared.components.form.checkbox;
var G__67687 = (function (){var obj67693 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj67693;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67686,G__67687) : helix.core.jsx.call(null,G__67686,G__67687));
})()]});
return obj67665;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67658,G__67660) : helix.core.jsxs.call(null,G__67658,G__67660));
});
if(goog.DEBUG === true){
var G__67700 = G__67640;
(G__67700.displayName = "app.shared.boiler-plant.burner.settings/status-hud-settings");

return G__67700;
} else {
return G__67640;
}
})();




app.shared.boiler_plant.burner.settings.power_hud_settings = (function (){var G__67719 = (function app$shared$boiler_plant$burner$settings$power_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67728 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__67736 = app.shared.components.form.field_row;
var G__67737 = (function (){var obj67743 = ({"label":"POWER","children":[(function (){var G__67749 = app.shared.components.form.select;
var G__67750 = (function (){var obj67757 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kW",new cljs.core.Keyword(null,"label","label",1718410804),"kW"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"MW",new cljs.core.Keyword(null,"label","label",1718410804),"MW"], null)], null),"value":unit,"on-change":(function (p1__67707_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67707_SHARP_], null)], null));
})});
return obj67757;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67749,G__67750) : helix.core.jsx.call(null,G__67749,G__67750));
})(),(function (){var G__67762 = app.shared.components.form.checkbox;
var G__67763 = (function (){var obj67769 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj67769;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67762,G__67763) : helix.core.jsx.call(null,G__67762,G__67763));
})()]});
return obj67743;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67736,G__67737) : helix.core.jsxs.call(null,G__67736,G__67737));
});
if(goog.DEBUG === true){
var G__67776 = G__67719;
(G__67776.displayName = "app.shared.boiler-plant.burner.settings/power-hud-settings");

return G__67776;
} else {
return G__67719;
}
})();




app.shared.boiler_plant.burner.settings.fuel_consumption_hud_settings = (function (){var G__67798 = (function app$shared$boiler_plant$burner$settings$fuel_consumption_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67802 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__67809 = app.shared.components.form.field_row;
var G__67810 = (function (){var obj67815 = ({"label":"FUEL CONSUMPTION","children":[(function (){var G__67822 = app.shared.components.form.select;
var G__67823 = (function (){var obj67827 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/s",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/s"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"hnm\u00B3/h",new cljs.core.Keyword(null,"label","label",1718410804),"hnm\u00B3/h"], null)], null),"value":unit,"on-change":(function (p1__67782_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67782_SHARP_], null)], null));
})});
return obj67827;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67822,G__67823) : helix.core.jsx.call(null,G__67822,G__67823));
})(),(function (){var G__67830 = app.shared.components.form.checkbox;
var G__67831 = (function (){var obj67838 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj67838;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67830,G__67831) : helix.core.jsx.call(null,G__67830,G__67831));
})()]});
return obj67815;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67809,G__67810) : helix.core.jsxs.call(null,G__67809,G__67810));
});
if(goog.DEBUG === true){
var G__67849 = G__67798;
(G__67849.displayName = "app.shared.boiler-plant.burner.settings/fuel-consumption-hud-settings");

return G__67849;
} else {
return G__67798;
}
})();




app.shared.boiler_plant.burner.settings.status_init_value = (function (){var G__67868 = (function app$shared$boiler_plant$burner$settings$status_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67873 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var G__67878 = app.shared.components.form.field_row;
var G__67879 = (function (){var obj67881 = ({"label":"STATE","children":(function (){var G__67887 = app.shared.components.form.select;
var G__67888 = (function (){var obj67891 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"on",new cljs.core.Keyword(null,"label","label",1718410804),"On"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"off",new cljs.core.Keyword(null,"label","label",1718410804),"Off"], null)], null),"value":value,"on-change":(function (p1__67855_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__67855_SHARP_], null)], null));
})});
return obj67891;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67887,G__67888) : helix.core.jsx.call(null,G__67887,G__67888));
})()});
return obj67881;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67878,G__67879) : helix.core.jsx.call(null,G__67878,G__67879));
});
if(goog.DEBUG === true){
var G__67900 = G__67868;
(G__67900.displayName = "app.shared.boiler-plant.burner.settings/status-init-value");

return G__67900;
} else {
return G__67868;
}
})();




app.shared.boiler_plant.burner.settings.pressure_init_value_on = (function (){var G__67925 = (function app$shared$boiler_plant$burner$settings$pressure_init_value_on_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67937 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-pressure-converted-value-on","burner-pressure-converted-value-on",646734526)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__67948 = app.shared.components.form.field_row;
var G__67949 = (function (){var obj67953 = ({"label":"SWITCH-POINT ON (PRESSURE ABS)","children":[(function (){var G__67956 = app.shared.components.form.input_number;
var G__67957 = helix.impl.props.merge_obj((function (){var obj67961 = ({"value":converted_value,"on-change":(function (p1__67907_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),p1__67907_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__67909_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),p1__67909_SHARP_], null)], null));
}));
})});
return obj67961;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67956,G__67957) : helix.core.jsx.call(null,G__67956,G__67957));
})(),(function (){var G__67968 = app.shared.components.form.select;
var G__67969 = (function (){var obj67976 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__67910_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67910_SHARP_], null)], null));
})});
return obj67976;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67968,G__67969) : helix.core.jsx.call(null,G__67968,G__67969));
})()]});
return obj67953;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67948,G__67949) : helix.core.jsxs.call(null,G__67948,G__67949));
});
if(goog.DEBUG === true){
var G__67982 = G__67925;
(G__67982.displayName = "app.shared.boiler-plant.burner.settings/pressure-init-value-on");

return G__67982;
} else {
return G__67925;
}
})();




app.shared.boiler_plant.burner.settings.pressure_init_value_off = (function (){var G__68009 = (function app$shared$boiler_plant$burner$settings$pressure_init_value_off_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__68017 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-pressure-converted-value-off","burner-pressure-converted-value-off",-558773916)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__68029 = app.shared.components.form.field_row;
var G__68030 = (function (){var obj68032 = ({"label":"SWITCH-POINT OFF (PRESSURE ABS)","children":[(function (){var G__68033 = app.shared.components.form.input_number;
var G__68034 = helix.impl.props.merge_obj((function (){var obj68041 = ({"value":converted_value,"on-change":(function (p1__67989_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),p1__67989_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__67992_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-pressure-value","change-burner-pressure-value",1055446886),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),p1__67992_SHARP_], null)], null));
}));
})});
return obj68041;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68033,G__68034) : helix.core.jsx.call(null,G__68033,G__68034));
})(),(function (){var G__68052 = app.shared.components.form.select;
var G__68053 = (function (){var obj68058 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__67994_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67994_SHARP_], null)], null));
})});
return obj68058;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68052,G__68053) : helix.core.jsx.call(null,G__68052,G__68053));
})()]});
return obj68032;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68029,G__68030) : helix.core.jsxs.call(null,G__68029,G__68030));
});
if(goog.DEBUG === true){
var G__68067 = G__68009;
(G__68067.displayName = "app.shared.boiler-plant.burner.settings/pressure-init-value-off");

return G__68067;
} else {
return G__68009;
}
})();




app.shared.boiler_plant.burner.settings.power_max_init_value = (function (){var G__68107 = (function app$shared$boiler_plant$burner$settings$power_max_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__68114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-power-max-converted-value","burner-power-max-converted-value",255123063)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-max-power","burner-max-power",-2009326653).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial maximum power value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__68136 = app.shared.components.form.field_row;
var G__68137 = (function (){var obj68141 = ({"label":"MAXIMUM POWER","children":[(function (){var G__68142 = app.shared.components.form.input_number;
var G__68143 = helix.impl.props.merge_obj((function (){var obj68150 = ({"value":converted_value,"on-change":(function (p1__68074_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),p1__68074_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__68080_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-power-max-value","change-burner-power-max-value",655693267),p1__68080_SHARP_], null));
}));
})});
return obj68150;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68142,G__68143) : helix.core.jsx.call(null,G__68142,G__68143));
})(),(function (){var G__68163 = app.shared.components.form.select;
var G__68164 = (function (){var obj68167 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kW",new cljs.core.Keyword(null,"label","label",1718410804),"kW"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"MW",new cljs.core.Keyword(null,"label","label",1718410804),"MW"], null)], null),"value":unit,"on-change":(function (p1__68081_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__68081_SHARP_], null)], null));
})});
return obj68167;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68163,G__68164) : helix.core.jsx.call(null,G__68163,G__68164));
})()]});
return obj68141;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68136,G__68137) : helix.core.jsxs.call(null,G__68136,G__68137));
});
if(goog.DEBUG === true){
var G__68174 = G__68107;
(G__68174.displayName = "app.shared.boiler-plant.burner.settings/power-max-init-value");

return G__68174;
} else {
return G__68107;
}
})();




app.shared.boiler_plant.burner.settings.fuel_consumption_coeff_init_value = (function (){var G__68200 = (function app$shared$boiler_plant$burner$settings$fuel_consumption_coeff_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__68202 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-fuel-consumption-coeff-converted-value","burner-fuel-consumption-coeff-converted-value",86432573)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-fuel-consumption-coeff","burner-fuel-consumption-coeff",-1586862452).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial fuel consumption coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__68211 = app.shared.components.form.field_row;
var G__68212 = (function (){var obj68216 = ({"label":"FUEL CONSUMPTION COEFFICIENT","children":[(function (){var G__68217 = app.shared.components.form.input_number;
var G__68218 = helix.impl.props.merge_obj((function (){var obj68220 = ({"value":converted_value,"on-change":(function (p1__68183_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),p1__68183_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__68184_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-fuel-consumption-coeff-value","change-burner-fuel-consumption-coeff-value",448543764),p1__68184_SHARP_], null));
}));
})});
return obj68220;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68217,G__68218) : helix.core.jsx.call(null,G__68217,G__68218));
})(),(function (){var G__68225 = app.shared.components.form.select;
var G__68226 = (function (){var obj68228 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/kW*h",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/kW*h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/kW*s",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/kW*s"], null)], null),"value":unit,"on-change":(function (p1__68185_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__68185_SHARP_], null)], null));
})});
return obj68228;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68225,G__68226) : helix.core.jsx.call(null,G__68225,G__68226));
})()]});
return obj68216;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68211,G__68212) : helix.core.jsxs.call(null,G__68211,G__68212));
});
if(goog.DEBUG === true){
var G__68230 = G__68200;
(G__68230.displayName = "app.shared.boiler-plant.burner.settings/fuel-consumption-coeff-init-value");

return G__68230;
} else {
return G__68200;
}
})();




app.shared.boiler_plant.burner.settings.heat_transfer_init_value = (function (){var G__68243 = (function app$shared$boiler_plant$burner$settings$heat_transfer_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__68244 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-heat-transfer-coeff","burner-heat-transfer-coeff",-917720211).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial heat transfer coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__68253 = app.shared.components.form.field_row;
var G__68254 = (function (){var obj68258 = ({"label":"HEAT TRANSFER COEFFICIENT","children":[(function (){var G__68259 = app.shared.components.form.input_number;
var G__68260 = helix.impl.props.merge_obj((function (){var obj68262 = ({"value":value,"on-change":(function (p1__68235_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__68235_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__68236_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__68236_SHARP_], null)], null));
}));
})});
return obj68262;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68259,G__68260) : helix.core.jsx.call(null,G__68259,G__68260));
})(),(function (){var G__68267 = app.shared.components.form.select;
var G__68268 = (function (){var obj68270 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kJ/kW*s",new cljs.core.Keyword(null,"label","label",1718410804),"kJ/kW*s"], null)], null),"value":unit,"on-change":(function (p1__68237_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner","change-burner",1480559520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__68237_SHARP_], null)], null));
})});
return obj68270;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68267,G__68268) : helix.core.jsx.call(null,G__68267,G__68268));
})()]});
return obj68258;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68253,G__68254) : helix.core.jsxs.call(null,G__68253,G__68254));
});
if(goog.DEBUG === true){
var G__68272 = G__68243;
(G__68272.displayName = "app.shared.boiler-plant.burner.settings/heat-transfer-init-value");

return G__68272;
} else {
return G__68243;
}
})();




app.shared.boiler_plant.burner.settings.settings_form = (function (){var G__68278 = (function app$shared$boiler_plant$burner$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__68280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__68283 = helix.core.Fragment;
var G__68284 = ({"children": [(function (){var G__68288 = "div";
var G__68289 = (function (){var obj68291 = ({"className":"divider","style":(function (){var obj68293 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj68293;
})(),"children":"head-up-display"});
return obj68291;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68288,G__68289) : helix.core.jsx.call(null,G__68288,G__68289));
})(),(function (){var G__68294 = app.shared.boiler_plant.burner.settings.mode_hud_settings;
var G__68295 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68294,G__68295) : helix.core.jsx.call(null,G__68294,G__68295));
})(),(function (){var G__68300 = app.shared.boiler_plant.burner.settings.status_hud_settings;
var G__68301 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68300,G__68301) : helix.core.jsx.call(null,G__68300,G__68301));
})(),(function (){var G__68304 = app.shared.boiler_plant.burner.settings.power_hud_settings;
var G__68305 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68304,G__68305) : helix.core.jsx.call(null,G__68304,G__68305));
})(),(function (){var G__68308 = app.shared.boiler_plant.burner.settings.fuel_consumption_hud_settings;
var G__68309 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68308,G__68309) : helix.core.jsx.call(null,G__68308,G__68309));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__68310 = helix.core.Fragment;
var G__68311 = ({"children": [(function (){var G__68312 = "div";
var G__68313 = (function (){var obj68315 = ({"className":"divider","children":"simulation start values"});
return obj68315;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68312,G__68313) : helix.core.jsx.call(null,G__68312,G__68313));
})(),(function (){var G__68318 = app.shared.boiler_plant.burner.settings.status_init_value;
var G__68319 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68318,G__68319) : helix.core.jsx.call(null,G__68318,G__68319));
})(),(function (){var G__68322 = "div";
var G__68323 = (function (){var obj68325 = ({"className":"divider","children":"specifications"});
return obj68325;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68322,G__68323) : helix.core.jsx.call(null,G__68322,G__68323));
})(),(function (){var G__68326 = app.shared.boiler_plant.burner.settings.pressure_init_value_on;
var G__68327 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68326,G__68327) : helix.core.jsx.call(null,G__68326,G__68327));
})(),(function (){var G__68329 = app.shared.boiler_plant.burner.settings.pressure_init_value_off;
var G__68330 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68329,G__68330) : helix.core.jsx.call(null,G__68329,G__68330));
})(),(function (){var G__68331 = app.shared.boiler_plant.burner.settings.power_max_init_value;
var G__68332 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68331,G__68332) : helix.core.jsx.call(null,G__68331,G__68332));
})(),(function (){var G__68334 = app.shared.boiler_plant.burner.settings.fuel_consumption_coeff_init_value;
var G__68335 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68334,G__68335) : helix.core.jsx.call(null,G__68334,G__68335));
})(),(function (){var G__68336 = app.shared.boiler_plant.burner.settings.heat_transfer_init_value;
var G__68337 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68336,G__68337) : helix.core.jsx.call(null,G__68336,G__68337));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68310,G__68311) : helix.core.jsxs.call(null,G__68310,G__68311));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68283,G__68284) : helix.core.jsxs.call(null,G__68283,G__68284));
});
if(goog.DEBUG === true){
var G__68339 = G__68278;
(G__68339.displayName = "app.shared.boiler-plant.burner.settings/settings-form");

return G__68339;
} else {
return G__68278;
}
})();




app.shared.boiler_plant.burner.settings.burner_settings = (function (){var G__68348 = (function app$shared$boiler_plant$burner$settings$burner_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__68353 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__68358 = app.shared.components.modal.settings;
var G__68359 = (function (){var obj68363 = ({"title":"Burner Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-burner-settings","restore-defaults-burner-settings",652644801)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-burner-settings","apply-burner-settings",-1461084724)], null));
}),"children":(function (){var G__68366 = app.shared.boiler_plant.burner.settings.settings_form;
var G__68367 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68366,G__68367) : helix.core.jsx.call(null,G__68366,G__68367));
})()});
return obj68363;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68358,G__68359) : helix.core.jsx.call(null,G__68358,G__68359));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__68374 = G__68348;
(G__68374.displayName = "app.shared.boiler-plant.burner.settings/burner-settings");

return G__68374;
} else {
return G__68348;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.burner.settings.js.map
