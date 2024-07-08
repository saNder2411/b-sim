goog.provide('app.shared.boiler_plant.burner.settings');

app.shared.boiler_plant.burner.settings.mode_hud_settings = (function (){var G__48940 = (function app$shared$boiler_plant$burner$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__48941 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__48944 = app.shared.components.form.field_row;
var G__48945 = (function (){var obj48947 = ({"label":"CONTROL MODE","children":[(function (){var G__48948 = app.shared.components.form.select;
var G__48949 = (function (){var obj48951 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null)], null),"value":value,"on-change":(function (p1__48938_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__48938_SHARP_], null)], null));
})});
return obj48951;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__48948,G__48949) : helix.core.jsx.call(null,G__48948,G__48949));
})(),(function (){var G__48952 = app.shared.components.form.checkbox;
var G__48953 = (function (){var obj48955 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj48955;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__48952,G__48953) : helix.core.jsx.call(null,G__48952,G__48953));
})()]});
return obj48947;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__48944,G__48945) : helix.core.jsxs.call(null,G__48944,G__48945));
});
if(goog.DEBUG === true){
var G__48956 = G__48940;
(G__48956.displayName = "app.shared.boiler-plant.burner.settings/mode-hud-settings");

return G__48956;
} else {
return G__48940;
}
})();




app.shared.boiler_plant.burner.settings.status_hud_settings = (function (){var G__48959 = (function app$shared$boiler_plant$burner$settings$status_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__48960 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__48963 = app.shared.components.form.field_row;
var G__48964 = (function (){var obj48966 = ({"label":"BURNER STATE","children":[(function (){var G__48967 = app.shared.components.form.select;
var G__48968 = (function (){var obj48970 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"on/off",new cljs.core.Keyword(null,"label","label",1718410804),"on/off"], null)], null),"value":unit,"on-change":(function (p1__48957_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__48957_SHARP_], null)], null));
})});
return obj48970;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__48967,G__48968) : helix.core.jsx.call(null,G__48967,G__48968));
})(),(function (){var G__48971 = app.shared.components.form.checkbox;
var G__48972 = (function (){var obj48974 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj48974;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__48971,G__48972) : helix.core.jsx.call(null,G__48971,G__48972));
})()]});
return obj48966;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__48963,G__48964) : helix.core.jsxs.call(null,G__48963,G__48964));
});
if(goog.DEBUG === true){
var G__48975 = G__48959;
(G__48975.displayName = "app.shared.boiler-plant.burner.settings/status-hud-settings");

return G__48975;
} else {
return G__48959;
}
})();




app.shared.boiler_plant.burner.settings.power_hud_settings = (function (){var G__48978 = (function app$shared$boiler_plant$burner$settings$power_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__48979 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__48982 = app.shared.components.form.field_row;
var G__48983 = (function (){var obj48985 = ({"label":"POWER","children":[(function (){var G__48986 = app.shared.components.form.select;
var G__48987 = (function (){var obj48989 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kW",new cljs.core.Keyword(null,"label","label",1718410804),"kW"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"MW",new cljs.core.Keyword(null,"label","label",1718410804),"MW"], null)], null),"value":unit,"on-change":(function (p1__48976_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__48976_SHARP_], null)], null));
})});
return obj48989;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__48986,G__48987) : helix.core.jsx.call(null,G__48986,G__48987));
})(),(function (){var G__48990 = app.shared.components.form.checkbox;
var G__48991 = (function (){var obj48993 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj48993;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__48990,G__48991) : helix.core.jsx.call(null,G__48990,G__48991));
})()]});
return obj48985;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__48982,G__48983) : helix.core.jsxs.call(null,G__48982,G__48983));
});
if(goog.DEBUG === true){
var G__48994 = G__48978;
(G__48994.displayName = "app.shared.boiler-plant.burner.settings/power-hud-settings");

return G__48994;
} else {
return G__48978;
}
})();




app.shared.boiler_plant.burner.settings.fuel_consumption_hud_settings = (function (){var G__48997 = (function app$shared$boiler_plant$burner$settings$fuel_consumption_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__48998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__49001 = app.shared.components.form.field_row;
var G__49002 = (function (){var obj49004 = ({"label":"FUEL CONSUMPTION","children":[(function (){var G__49005 = app.shared.components.form.select;
var G__49006 = (function (){var obj49008 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/s",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/s"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"hnm\u00B3/h",new cljs.core.Keyword(null,"label","label",1718410804),"hnm\u00B3/h"], null)], null),"value":unit,"on-change":(function (p1__48995_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__48995_SHARP_], null)], null));
})});
return obj49008;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49005,G__49006) : helix.core.jsx.call(null,G__49005,G__49006));
})(),(function (){var G__49009 = app.shared.components.form.checkbox;
var G__49010 = (function (){var obj49012 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj49012;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49009,G__49010) : helix.core.jsx.call(null,G__49009,G__49010));
})()]});
return obj49004;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49001,G__49002) : helix.core.jsxs.call(null,G__49001,G__49002));
});
if(goog.DEBUG === true){
var G__49013 = G__48997;
(G__49013.displayName = "app.shared.boiler-plant.burner.settings/fuel-consumption-hud-settings");

return G__49013;
} else {
return G__48997;
}
})();




app.shared.boiler_plant.burner.settings.status_init_value = (function (){var G__49016 = (function app$shared$boiler_plant$burner$settings$status_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49017 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var G__49020 = app.shared.components.form.field_row;
var G__49021 = (function (){var obj49023 = ({"label":"STATE","children":(function (){var G__49024 = app.shared.components.form.select;
var G__49025 = (function (){var obj49027 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"on",new cljs.core.Keyword(null,"label","label",1718410804),"On"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"off",new cljs.core.Keyword(null,"label","label",1718410804),"Off"], null)], null),"value":value,"on-change":(function (p1__49014_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__49014_SHARP_], null)], null));
})});
return obj49027;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49024,G__49025) : helix.core.jsx.call(null,G__49024,G__49025));
})()});
return obj49023;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49020,G__49021) : helix.core.jsx.call(null,G__49020,G__49021));
});
if(goog.DEBUG === true){
var G__49028 = G__49016;
(G__49028.displayName = "app.shared.boiler-plant.burner.settings/status-init-value");

return G__49028;
} else {
return G__49016;
}
})();




app.shared.boiler_plant.burner.settings.pressure_init_value_on = (function (){var G__49033 = (function app$shared$boiler_plant$burner$settings$pressure_init_value_on_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49034 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-settings-pressure-converted-value-on","burner-settings-pressure-converted-value-on",2056202056)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__49037 = app.shared.components.form.field_row;
var G__49038 = (function (){var obj49040 = ({"label":"SWITCH-POINT ON (PRESSURE ABS)","children":[(function (){var G__49041 = app.shared.components.form.input_number;
var G__49042 = helix.impl.props.merge_obj((function (){var obj49044 = ({"value":converted_value,"on-change":(function (p1__49029_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings-pressure-value","change-burner-settings-pressure-value",-781351115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),p1__49029_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__49030_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings-pressure-value","change-burner-settings-pressure-value",-781351115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),p1__49030_SHARP_], null)], null));
}));
})});
return obj49044;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49041,G__49042) : helix.core.jsx.call(null,G__49041,G__49042));
})(),(function (){var G__49045 = app.shared.components.form.select;
var G__49046 = (function (){var obj49048 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__49031_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__49031_SHARP_], null)], null));
})});
return obj49048;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49045,G__49046) : helix.core.jsx.call(null,G__49045,G__49046));
})()]});
return obj49040;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49037,G__49038) : helix.core.jsxs.call(null,G__49037,G__49038));
});
if(goog.DEBUG === true){
var G__49049 = G__49033;
(G__49049.displayName = "app.shared.boiler-plant.burner.settings/pressure-init-value-on");

return G__49049;
} else {
return G__49033;
}
})();




app.shared.boiler_plant.burner.settings.pressure_init_value_off = (function (){var G__49054 = (function app$shared$boiler_plant$burner$settings$pressure_init_value_off_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49055 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-settings-pressure-converted-value-off","burner-settings-pressure-converted-value-off",943067971)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__49058 = app.shared.components.form.field_row;
var G__49059 = (function (){var obj49061 = ({"label":"SWITCH-POINT OFF (PRESSURE ABS)","children":[(function (){var G__49062 = app.shared.components.form.input_number;
var G__49063 = helix.impl.props.merge_obj((function (){var obj49065 = ({"value":converted_value,"on-change":(function (p1__49050_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings-pressure-value","change-burner-settings-pressure-value",-781351115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),p1__49050_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__49051_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings-pressure-value","change-burner-settings-pressure-value",-781351115),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),p1__49051_SHARP_], null)], null));
}));
})});
return obj49065;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49062,G__49063) : helix.core.jsx.call(null,G__49062,G__49063));
})(),(function (){var G__49066 = app.shared.components.form.select;
var G__49067 = (function (){var obj49069 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__49052_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__49052_SHARP_], null)], null));
})});
return obj49069;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49066,G__49067) : helix.core.jsx.call(null,G__49066,G__49067));
})()]});
return obj49061;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49058,G__49059) : helix.core.jsxs.call(null,G__49058,G__49059));
});
if(goog.DEBUG === true){
var G__49070 = G__49054;
(G__49070.displayName = "app.shared.boiler-plant.burner.settings/pressure-init-value-off");

return G__49070;
} else {
return G__49054;
}
})();




app.shared.boiler_plant.burner.settings.power_max_init_value = (function (){var G__49075 = (function app$shared$boiler_plant$burner$settings$power_max_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-settings-power-max-converted-value","burner-settings-power-max-converted-value",1915146318)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-max-power","burner-max-power",-2009326653).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial maximum power value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__49079 = app.shared.components.form.field_row;
var G__49080 = (function (){var obj49082 = ({"label":"MAXIMUM POWER","children":[(function (){var G__49083 = app.shared.components.form.input_number;
var G__49084 = helix.impl.props.merge_obj((function (){var obj49086 = ({"value":converted_value,"on-change":(function (p1__49071_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings-power-max-value","change-burner-settings-power-max-value",1222236293),p1__49071_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__49072_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings-power-max-value","change-burner-settings-power-max-value",1222236293),p1__49072_SHARP_], null));
}));
})});
return obj49086;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49083,G__49084) : helix.core.jsx.call(null,G__49083,G__49084));
})(),(function (){var G__49087 = app.shared.components.form.select;
var G__49088 = (function (){var obj49090 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kW",new cljs.core.Keyword(null,"label","label",1718410804),"kW"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"MW",new cljs.core.Keyword(null,"label","label",1718410804),"MW"], null)], null),"value":unit,"on-change":(function (p1__49073_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__49073_SHARP_], null)], null));
})});
return obj49090;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49087,G__49088) : helix.core.jsx.call(null,G__49087,G__49088));
})()]});
return obj49082;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49079,G__49080) : helix.core.jsxs.call(null,G__49079,G__49080));
});
if(goog.DEBUG === true){
var G__49091 = G__49075;
(G__49091.displayName = "app.shared.boiler-plant.burner.settings/power-max-init-value");

return G__49091;
} else {
return G__49075;
}
})();




app.shared.boiler_plant.burner.settings.fuel_consumption_coeff_init_value = (function (){var G__49096 = (function app$shared$boiler_plant$burner$settings$fuel_consumption_coeff_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49097 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-settings-fuel-consumption-coeff-converted-value","burner-settings-fuel-consumption-coeff-converted-value",-1047866955)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-fuel-consumption-coeff","burner-fuel-consumption-coeff",-1586862452).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial fuel consumption coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__49100 = app.shared.components.form.field_row;
var G__49101 = (function (){var obj49103 = ({"label":"FUEL CONSUMPTION COEFFICIENT","children":[(function (){var G__49104 = app.shared.components.form.input_number;
var G__49105 = helix.impl.props.merge_obj((function (){var obj49107 = ({"value":converted_value,"on-change":(function (p1__49092_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings-fuel-consumption-coeff-value","change-burner-settings-fuel-consumption-coeff-value",-123664681),p1__49092_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__49093_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings-fuel-consumption-coeff-value","change-burner-settings-fuel-consumption-coeff-value",-123664681),p1__49093_SHARP_], null));
}));
})});
return obj49107;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49104,G__49105) : helix.core.jsx.call(null,G__49104,G__49105));
})(),(function (){var G__49108 = app.shared.components.form.select;
var G__49109 = (function (){var obj49111 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/kW*h",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/kW*h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/kW*s",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/kW*s"], null)], null),"value":unit,"on-change":(function (p1__49094_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__49094_SHARP_], null)], null));
})});
return obj49111;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49108,G__49109) : helix.core.jsx.call(null,G__49108,G__49109));
})()]});
return obj49103;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49100,G__49101) : helix.core.jsxs.call(null,G__49100,G__49101));
});
if(goog.DEBUG === true){
var G__49112 = G__49096;
(G__49112.displayName = "app.shared.boiler-plant.burner.settings/fuel-consumption-coeff-init-value");

return G__49112;
} else {
return G__49096;
}
})();




app.shared.boiler_plant.burner.settings.heat_transfer_init_value = (function (){var G__49117 = (function app$shared$boiler_plant$burner$settings$heat_transfer_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-heat-transfer-coeff","burner-heat-transfer-coeff",-917720211).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial heat transfer coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__49121 = app.shared.components.form.field_row;
var G__49122 = (function (){var obj49124 = ({"label":"HEAT TRANSFER COEFFICIENT","children":[(function (){var G__49125 = app.shared.components.form.input_number;
var G__49126 = helix.impl.props.merge_obj((function (){var obj49128 = ({"value":value,"on-change":(function (p1__49113_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__49113_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__49114_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__49114_SHARP_], null)], null));
}));
})});
return obj49128;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49125,G__49126) : helix.core.jsx.call(null,G__49125,G__49126));
})(),(function (){var G__49129 = app.shared.components.form.select;
var G__49130 = (function (){var obj49132 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kJ/kW*s",new cljs.core.Keyword(null,"label","label",1718410804),"kJ/kW*s"], null)], null),"value":unit,"on-change":(function (p1__49115_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-burner-settings","change-burner-settings",1412240062),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer","heat-transfer",7058306),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__49115_SHARP_], null)], null));
})});
return obj49132;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49129,G__49130) : helix.core.jsx.call(null,G__49129,G__49130));
})()]});
return obj49124;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49121,G__49122) : helix.core.jsxs.call(null,G__49121,G__49122));
});
if(goog.DEBUG === true){
var G__49133 = G__49117;
(G__49133.displayName = "app.shared.boiler-plant.burner.settings/heat-transfer-init-value");

return G__49133;
} else {
return G__49117;
}
})();




app.shared.boiler_plant.burner.settings.settings_form = (function (){var G__49135 = (function app$shared$boiler_plant$burner$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49136 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__49139 = helix.core.Fragment;
var G__49140 = ({"children": [(function (){var G__49141 = "div";
var G__49142 = (function (){var obj49144 = ({"className":"divider","style":(function (){var obj49146 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj49146;
})(),"children":"head-up-display"});
return obj49144;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49141,G__49142) : helix.core.jsx.call(null,G__49141,G__49142));
})(),(function (){var G__49147 = app.shared.boiler_plant.burner.settings.mode_hud_settings;
var G__49148 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49147,G__49148) : helix.core.jsx.call(null,G__49147,G__49148));
})(),(function (){var G__49149 = app.shared.boiler_plant.burner.settings.status_hud_settings;
var G__49150 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49149,G__49150) : helix.core.jsx.call(null,G__49149,G__49150));
})(),(function (){var G__49151 = app.shared.boiler_plant.burner.settings.power_hud_settings;
var G__49152 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49151,G__49152) : helix.core.jsx.call(null,G__49151,G__49152));
})(),(function (){var G__49153 = app.shared.boiler_plant.burner.settings.fuel_consumption_hud_settings;
var G__49154 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49153,G__49154) : helix.core.jsx.call(null,G__49153,G__49154));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__49155 = helix.core.Fragment;
var G__49156 = ({"children": [(function (){var G__49157 = "div";
var G__49158 = (function (){var obj49160 = ({"className":"divider","children":"simulation start values"});
return obj49160;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49157,G__49158) : helix.core.jsx.call(null,G__49157,G__49158));
})(),(function (){var G__49161 = app.shared.boiler_plant.burner.settings.status_init_value;
var G__49162 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49161,G__49162) : helix.core.jsx.call(null,G__49161,G__49162));
})(),(function (){var G__49163 = "div";
var G__49164 = (function (){var obj49166 = ({"className":"divider","children":"specifications"});
return obj49166;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49163,G__49164) : helix.core.jsx.call(null,G__49163,G__49164));
})(),(function (){var G__49167 = app.shared.boiler_plant.burner.settings.pressure_init_value_on;
var G__49168 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49167,G__49168) : helix.core.jsx.call(null,G__49167,G__49168));
})(),(function (){var G__49169 = app.shared.boiler_plant.burner.settings.pressure_init_value_off;
var G__49170 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49169,G__49170) : helix.core.jsx.call(null,G__49169,G__49170));
})(),(function (){var G__49171 = app.shared.boiler_plant.burner.settings.power_max_init_value;
var G__49172 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49171,G__49172) : helix.core.jsx.call(null,G__49171,G__49172));
})(),(function (){var G__49173 = app.shared.boiler_plant.burner.settings.fuel_consumption_coeff_init_value;
var G__49174 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49173,G__49174) : helix.core.jsx.call(null,G__49173,G__49174));
})(),(function (){var G__49175 = app.shared.boiler_plant.burner.settings.heat_transfer_init_value;
var G__49176 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49175,G__49176) : helix.core.jsx.call(null,G__49175,G__49176));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49155,G__49156) : helix.core.jsxs.call(null,G__49155,G__49156));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__49139,G__49140) : helix.core.jsxs.call(null,G__49139,G__49140));
});
if(goog.DEBUG === true){
var G__49177 = G__49135;
(G__49177.displayName = "app.shared.boiler-plant.burner.settings/settings-form");

return G__49177;
} else {
return G__49135;
}
})();




app.shared.boiler_plant.burner.settings.burner_settings = (function (){var G__49179 = (function app$shared$boiler_plant$burner$settings$burner_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__49180 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"burner-settings-view","burner-settings-view",-962368094)], null));
if(cljs.core.truth_(show_settings)){
var G__49183 = app.shared.components.modal.settings;
var G__49184 = (function (){var obj49186 = ({"title":"Burner Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-burner-settings","restore-defaults-burner-settings",652644801)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-burner-settings","apply-burner-settings",-1461084724)], null));
}),"children":(function (){var G__49187 = app.shared.boiler_plant.burner.settings.settings_form;
var G__49188 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49187,G__49188) : helix.core.jsx.call(null,G__49187,G__49188));
})()});
return obj49186;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__49183,G__49184) : helix.core.jsx.call(null,G__49183,G__49184));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__49189 = G__49179;
(G__49189.displayName = "app.shared.boiler-plant.burner.settings/burner-settings");

return G__49189;
} else {
return G__49179;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.burner.settings.js.map
