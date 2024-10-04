goog.provide('app.ui.shared.boiler_plant.burner.settings');

app.ui.shared.boiler_plant.burner.settings.mode_hud_settings = (function (){var G__37940 = (function app$ui$shared$boiler_plant$burner$settings$mode_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37947 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__37959 = app.ui.shared.components.form.field_row;
var G__37960 = (function (){var obj37964 = ({"label":"CONTROL MODE","children":[(function (){var G__37965 = app.ui.shared.components.form.select;
var G__37966 = (function (){var obj37968 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null)], null),"value":value,"on-change":(function (p1__37934_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__37934_SHARP_], null)], null));
})});
return obj37968;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37965,G__37966) : helix.core.jsx.call(null,G__37965,G__37966));
})(),(function (){var G__37972 = app.ui.shared.components.form.checkbox;
var G__37973 = (function (){var obj37975 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj37975;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37972,G__37973) : helix.core.jsx.call(null,G__37972,G__37973));
})()]});
return obj37964;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37959,G__37960) : helix.core.jsxs.call(null,G__37959,G__37960));
});
if(goog.DEBUG === true){
var G__37983 = G__37940;
(G__37983.displayName = "app.ui.shared.boiler-plant.burner.settings/mode-hud-settings");

return G__37983;
} else {
return G__37940;
}
})();




app.ui.shared.boiler_plant.burner.settings.status_hud_settings = (function (){var G__38001 = (function app$ui$shared$boiler_plant$burner$settings$status_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38046 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__38060 = app.ui.shared.components.form.field_row;
var G__38061 = (function (){var obj38070 = ({"label":"BURNER STATE","children":[(function (){var G__38071 = app.ui.shared.components.form.select;
var G__38072 = (function (){var obj38092 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"on/off",new cljs.core.Keyword(null,"label","label",1718410804),"on/off"], null)], null),"value":unit,"on-change":(function (p1__37987_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__37987_SHARP_], null)], null));
})});
return obj38092;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38071,G__38072) : helix.core.jsx.call(null,G__38071,G__38072));
})(),(function (){var G__38133 = app.ui.shared.components.form.checkbox;
var G__38134 = (function (){var obj38138 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj38138;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38133,G__38134) : helix.core.jsx.call(null,G__38133,G__38134));
})()]});
return obj38070;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38060,G__38061) : helix.core.jsxs.call(null,G__38060,G__38061));
});
if(goog.DEBUG === true){
var G__38144 = G__38001;
(G__38144.displayName = "app.ui.shared.boiler-plant.burner.settings/status-hud-settings");

return G__38144;
} else {
return G__38001;
}
})();




app.ui.shared.boiler_plant.burner.settings.power_hud_settings = (function (){var G__38171 = (function app$ui$shared$boiler_plant$burner$settings$power_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38178 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__38189 = app.ui.shared.components.form.field_row;
var G__38190 = (function (){var obj38192 = ({"label":"POWER","children":[(function (){var G__38198 = app.ui.shared.components.form.select;
var G__38199 = (function (){var obj38202 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kW",new cljs.core.Keyword(null,"label","label",1718410804),"kW"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"MW",new cljs.core.Keyword(null,"label","label",1718410804),"MW"], null)], null),"value":unit,"on-change":(function (p1__38156_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38156_SHARP_], null)], null));
})});
return obj38202;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38198,G__38199) : helix.core.jsx.call(null,G__38198,G__38199));
})(),(function (){var G__38208 = app.ui.shared.components.form.checkbox;
var G__38209 = (function (){var obj38213 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj38213;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38208,G__38209) : helix.core.jsx.call(null,G__38208,G__38209));
})()]});
return obj38192;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38189,G__38190) : helix.core.jsxs.call(null,G__38189,G__38190));
});
if(goog.DEBUG === true){
var G__38223 = G__38171;
(G__38223.displayName = "app.ui.shared.boiler-plant.burner.settings/power-hud-settings");

return G__38223;
} else {
return G__38171;
}
})();




app.ui.shared.boiler_plant.burner.settings.fuel_consumption_hud_settings = (function (){var G__38244 = (function app$ui$shared$boiler_plant$burner$settings$fuel_consumption_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38245 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__38253 = app.ui.shared.components.form.field_row;
var G__38254 = (function (){var obj38256 = ({"label":"FUEL CONSUMPTION","children":[(function (){var G__38257 = app.ui.shared.components.form.select;
var G__38258 = (function (){var obj38260 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/s",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/s"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"hnm\u00B3/h",new cljs.core.Keyword(null,"label","label",1718410804),"hnm\u00B3/h"], null)], null),"value":unit,"on-change":(function (p1__38231_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38231_SHARP_], null)], null));
})});
return obj38260;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38257,G__38258) : helix.core.jsx.call(null,G__38257,G__38258));
})(),(function (){var G__38271 = app.ui.shared.components.form.checkbox;
var G__38272 = (function (){var obj38276 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj38276;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38271,G__38272) : helix.core.jsx.call(null,G__38271,G__38272));
})()]});
return obj38256;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38253,G__38254) : helix.core.jsxs.call(null,G__38253,G__38254));
});
if(goog.DEBUG === true){
var G__38287 = G__38244;
(G__38287.displayName = "app.ui.shared.boiler-plant.burner.settings/fuel-consumption-hud-settings");

return G__38287;
} else {
return G__38244;
}
})();




app.ui.shared.boiler_plant.burner.settings.state_init_value = (function (){var G__38306 = (function app$ui$shared$boiler_plant$burner$settings$state_init_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38307 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var G__38314 = app.ui.shared.components.form.field_row;
var G__38315 = (function (){var obj38317 = ({"label":"STATE","children":(function (){var G__38318 = app.ui.shared.components.form.select;
var G__38319 = (function (){var obj38321 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"on",new cljs.core.Keyword(null,"label","label",1718410804),"On"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"off",new cljs.core.Keyword(null,"label","label",1718410804),"Off"], null)], null),"value":value,"on-change":(function (p1__38296_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__38296_SHARP_], null)], null));
})});
return obj38321;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38318,G__38319) : helix.core.jsx.call(null,G__38318,G__38319));
})()});
return obj38317;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38314,G__38315) : helix.core.jsx.call(null,G__38314,G__38315));
});
if(goog.DEBUG === true){
var G__38323 = G__38306;
(G__38323.displayName = "app.ui.shared.boiler-plant.burner.settings/state-init-value");

return G__38323;
} else {
return G__38306;
}
})();




app.ui.shared.boiler_plant.burner.settings.pressure_init_value_on = (function (){var G__38338 = (function app$ui$shared$boiler_plant$burner$settings$pressure_init_value_on_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38340 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","pressure-converted-value-on","burner/pressure-converted-value-on",22829571)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__38352 = app.ui.shared.components.form.field_row;
var G__38353 = (function (){var obj38355 = ({"label":"SWITCH-POINT ON (PRESSURE ABS)","children":[(function (){var G__38356 = app.ui.shared.components.form.input_number;
var G__38357 = helix.impl.props.merge_obj((function (){var obj38364 = ({"value":converted_value,"on-change":(function (p1__38325_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change-pressure-value","burner/change-pressure-value",-443660491),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),p1__38325_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__38327_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change-pressure-value","burner/change-pressure-value",-443660491),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on","on",173873944),p1__38327_SHARP_], null)], null));
}));
})});
return obj38364;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38356,G__38357) : helix.core.jsx.call(null,G__38356,G__38357));
})(),(function (){var G__38373 = app.ui.shared.components.form.select;
var G__38374 = (function (){var obj38378 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__38329_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38329_SHARP_], null)], null));
})});
return obj38378;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38373,G__38374) : helix.core.jsx.call(null,G__38373,G__38374));
})()]});
return obj38355;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38352,G__38353) : helix.core.jsxs.call(null,G__38352,G__38353));
});
if(goog.DEBUG === true){
var G__38392 = G__38338;
(G__38392.displayName = "app.ui.shared.boiler-plant.burner.settings/pressure-init-value-on");

return G__38392;
} else {
return G__38338;
}
})();




app.ui.shared.boiler_plant.burner.settings.pressure_init_value_off = (function (){var G__38406 = (function app$ui$shared$boiler_plant$burner$settings$pressure_init_value_off_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38407 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","pressure-converted-value-off","burner/pressure-converted-value-off",-1463727669)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__38416 = app.ui.shared.components.form.field_row;
var G__38417 = (function (){var obj38420 = ({"label":"SWITCH-POINT OFF (PRESSURE ABS)","children":[(function (){var G__38421 = app.ui.shared.components.form.input_number;
var G__38422 = helix.impl.props.merge_obj((function (){var obj38425 = ({"value":converted_value,"on-change":(function (p1__38396_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change-pressure-value","burner/change-pressure-value",-443660491),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),p1__38396_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__38398_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change-pressure-value","burner/change-pressure-value",-443660491),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"off","off",606440789),p1__38398_SHARP_], null)], null));
}));
})});
return obj38425;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38421,G__38422) : helix.core.jsx.call(null,G__38421,G__38422));
})(),(function (){var G__38435 = app.ui.shared.components.form.select;
var G__38436 = (function (){var obj38445 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__38401_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38401_SHARP_], null)], null));
})});
return obj38445;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38435,G__38436) : helix.core.jsx.call(null,G__38435,G__38436));
})()]});
return obj38420;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38416,G__38417) : helix.core.jsxs.call(null,G__38416,G__38417));
});
if(goog.DEBUG === true){
var G__38462 = G__38406;
(G__38462.displayName = "app.ui.shared.boiler-plant.burner.settings/pressure-init-value-off");

return G__38462;
} else {
return G__38406;
}
})();




app.ui.shared.boiler_plant.burner.settings.power_max_init_value = (function (){var G__38492 = (function app$ui$shared$boiler_plant$burner$settings$power_max_init_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","power-max-converted-value","burner/power-max-converted-value",1674333359)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-max-power","burner-max-power",-2009326653).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial maximum power value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__38505 = app.ui.shared.components.form.field_row;
var G__38506 = (function (){var obj38510 = ({"label":"MAXIMUM POWER","children":[(function (){var G__38514 = app.ui.shared.components.form.input_number;
var G__38515 = helix.impl.props.merge_obj((function (){var obj38521 = ({"value":converted_value,"on-change":(function (p1__38473_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change-power-max-value","burner/change-power-max-value",-1301084469),p1__38473_SHARP_], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__38477_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change-power-max-value","burner/change-power-max-value",-1301084469),p1__38477_SHARP_], null));
}));
})});
return obj38521;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38514,G__38515) : helix.core.jsx.call(null,G__38514,G__38515));
})(),(function (){var G__38541 = app.ui.shared.components.form.select;
var G__38542 = (function (){var obj38548 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kW",new cljs.core.Keyword(null,"label","label",1718410804),"kW"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"MW",new cljs.core.Keyword(null,"label","label",1718410804),"MW"], null)], null),"value":unit,"on-change":(function (p1__38481_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38481_SHARP_], null)], null));
})});
return obj38548;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38541,G__38542) : helix.core.jsx.call(null,G__38541,G__38542));
})()]});
return obj38510;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38505,G__38506) : helix.core.jsxs.call(null,G__38505,G__38506));
});
if(goog.DEBUG === true){
var G__38551 = G__38492;
(G__38551.displayName = "app.ui.shared.boiler-plant.burner.settings/power-max-init-value");

return G__38551;
} else {
return G__38492;
}
})();




app.ui.shared.boiler_plant.burner.settings.fuel_consumption_coeff_init_value = (function (){var G__38569 = (function app$ui$shared$boiler_plant$burner$settings$fuel_consumption_coeff_init_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38571 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","fuel-consumption-coeff-converted-value","burner/fuel-consumption-coeff-converted-value",-1231090231)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-fuel-consumption-coeff","burner-fuel-consumption-coeff",-1586862452).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial fuel consumption coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__38588 = app.ui.shared.components.form.field_row;
var G__38589 = (function (){var obj38593 = ({"label":"FUEL CONSUMPTION COEFFICIENT","children":[(function (){var G__38594 = app.ui.shared.components.form.input_number;
var G__38595 = helix.impl.props.merge_obj((function (){var obj38601 = ({"value":converted_value,"on-change":(function (p1__38559_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change-fuel-consumption-coeff-value","burner/change-fuel-consumption-coeff-value",2130582804),p1__38559_SHARP_], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__38562_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change-fuel-consumption-coeff-value","burner/change-fuel-consumption-coeff-value",2130582804),p1__38562_SHARP_], null));
}));
})});
return obj38601;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38594,G__38595) : helix.core.jsx.call(null,G__38594,G__38595));
})(),(function (){var G__38616 = app.ui.shared.components.form.select;
var G__38617 = (function (){var obj38621 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/kW*h",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/kW*h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"nm\u00B3/kW*s",new cljs.core.Keyword(null,"label","label",1718410804),"nm\u00B3/kW*s"], null)], null),"value":unit,"on-change":(function (p1__38563_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fuel-consumption","fuel-consumption",-182983586),new cljs.core.Keyword(null,"coeff","coeff",-914800710),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38563_SHARP_], null)], null));
})});
return obj38621;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38616,G__38617) : helix.core.jsx.call(null,G__38616,G__38617));
})()]});
return obj38593;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38588,G__38589) : helix.core.jsxs.call(null,G__38588,G__38589));
});
if(goog.DEBUG === true){
var G__38628 = G__38569;
(G__38628.displayName = "app.ui.shared.boiler-plant.burner.settings/fuel-consumption-coeff-init-value");

return G__38628;
} else {
return G__38569;
}
})();




app.ui.shared.boiler_plant.burner.settings.heat_transfer_coeff_init_value = (function (){var G__38651 = (function app$ui$shared$boiler_plant$burner$settings$heat_transfer_coeff_init_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38653 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"heat-transfer-coeff","heat-transfer-coeff",448009987),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"heat-transfer-coeff","heat-transfer-coeff",448009987),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"burner-heat-transfer-coeff","burner-heat-transfer-coeff",-917720211).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial heat transfer coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__38664 = app.ui.shared.components.form.field_row;
var G__38665 = (function (){var obj38667 = ({"label":"HEAT TRANSFER COEFFICIENT","children":[(function (){var G__38670 = app.ui.shared.components.form.input_number;
var G__38671 = helix.impl.props.merge_obj((function (){var obj38675 = ({"value":value,"on-change":(function (p1__38639_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer-coeff","heat-transfer-coeff",448009987),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__38639_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__38641_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer-coeff","heat-transfer-coeff",448009987),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__38641_SHARP_], null)], null));
}));
})});
return obj38675;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38670,G__38671) : helix.core.jsx.call(null,G__38670,G__38671));
})(),(function (){var G__38686 = app.ui.shared.components.form.select;
var G__38687 = (function (){var obj38689 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kJ/kW*s",new cljs.core.Keyword(null,"label","label",1718410804),"kJ/kW*s"], null)], null),"value":unit,"on-change":(function (p1__38644_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","change","burner/change",1821116126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"heat-transfer-coeff","heat-transfer-coeff",448009987),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38644_SHARP_], null)], null));
})});
return obj38689;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38686,G__38687) : helix.core.jsx.call(null,G__38686,G__38687));
})()]});
return obj38667;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38664,G__38665) : helix.core.jsxs.call(null,G__38664,G__38665));
});
if(goog.DEBUG === true){
var G__38691 = G__38651;
(G__38691.displayName = "app.ui.shared.boiler-plant.burner.settings/heat-transfer-coeff-init-value");

return G__38691;
} else {
return G__38651;
}
})();




app.ui.shared.boiler_plant.burner.settings.settings_form = (function (){var G__38697 = (function app$ui$shared$boiler_plant$burner$settings$settings_form_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38699 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__38702 = helix.core.Fragment;
var G__38703 = ({"children": [(function (){var G__38705 = "div";
var G__38706 = (function (){var obj38709 = ({"className":"divider","style":(function (){var obj38712 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj38712;
})(),"children":"head-up-display"});
return obj38709;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38705,G__38706) : helix.core.jsx.call(null,G__38705,G__38706));
})(),(function (){var G__38714 = app.ui.shared.boiler_plant.burner.settings.mode_hud_settings;
var G__38715 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38714,G__38715) : helix.core.jsx.call(null,G__38714,G__38715));
})(),(function (){var G__38716 = app.ui.shared.boiler_plant.burner.settings.status_hud_settings;
var G__38717 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38716,G__38717) : helix.core.jsx.call(null,G__38716,G__38717));
})(),(function (){var G__38718 = app.ui.shared.boiler_plant.burner.settings.power_hud_settings;
var G__38719 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38718,G__38719) : helix.core.jsx.call(null,G__38718,G__38719));
})(),(function (){var G__38720 = app.ui.shared.boiler_plant.burner.settings.fuel_consumption_hud_settings;
var G__38721 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38720,G__38721) : helix.core.jsx.call(null,G__38720,G__38721));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__38723 = helix.core.Fragment;
var G__38724 = ({"children": [(function (){var G__38725 = "div";
var G__38726 = (function (){var obj38731 = ({"className":"divider","children":"simulation start values"});
return obj38731;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38725,G__38726) : helix.core.jsx.call(null,G__38725,G__38726));
})(),(function (){var G__38732 = app.ui.shared.boiler_plant.burner.settings.state_init_value;
var G__38733 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38732,G__38733) : helix.core.jsx.call(null,G__38732,G__38733));
})(),(function (){var G__38734 = "div";
var G__38735 = (function (){var obj38739 = ({"className":"divider","children":"specifications"});
return obj38739;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38734,G__38735) : helix.core.jsx.call(null,G__38734,G__38735));
})(),(function (){var G__38742 = app.ui.shared.boiler_plant.burner.settings.pressure_init_value_on;
var G__38743 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38742,G__38743) : helix.core.jsx.call(null,G__38742,G__38743));
})(),(function (){var G__38746 = app.ui.shared.boiler_plant.burner.settings.pressure_init_value_off;
var G__38747 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38746,G__38747) : helix.core.jsx.call(null,G__38746,G__38747));
})(),(function (){var G__38750 = app.ui.shared.boiler_plant.burner.settings.power_max_init_value;
var G__38751 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38750,G__38751) : helix.core.jsx.call(null,G__38750,G__38751));
})(),(function (){var G__38752 = app.ui.shared.boiler_plant.burner.settings.fuel_consumption_coeff_init_value;
var G__38753 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38752,G__38753) : helix.core.jsx.call(null,G__38752,G__38753));
})(),(function (){var G__38754 = app.ui.shared.boiler_plant.burner.settings.heat_transfer_coeff_init_value;
var G__38755 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38754,G__38755) : helix.core.jsx.call(null,G__38754,G__38755));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38723,G__38724) : helix.core.jsxs.call(null,G__38723,G__38724));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38702,G__38703) : helix.core.jsxs.call(null,G__38702,G__38703));
});
if(goog.DEBUG === true){
var G__38758 = G__38697;
(G__38758.displayName = "app.ui.shared.boiler-plant.burner.settings/settings-form");

return G__38758;
} else {
return G__38697;
}
})();




app.ui.shared.boiler_plant.burner.settings.burner_settings = (function (){var G__38763 = (function app$ui$shared$boiler_plant$burner$settings$burner_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38764 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"burner","burner",-712918379),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__38768 = app.ui.shared.components.modal.settings;
var G__38769 = (function (){var obj38772 = ({"title":"Burner Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","restore-defaults-settings","burner/restore-defaults-settings",967966391)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("burner","apply-settings","burner/apply-settings",68225118)], null));
}),"children":(function (){var G__38776 = app.ui.shared.boiler_plant.burner.settings.settings_form;
var G__38777 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38776,G__38777) : helix.core.jsx.call(null,G__38776,G__38777));
})()});
return obj38772;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38768,G__38769) : helix.core.jsx.call(null,G__38768,G__38769));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38784 = G__38763;
(G__38784.displayName = "app.ui.shared.boiler-plant.burner.settings/burner-settings");

return G__38784;
} else {
return G__38763;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.burner.settings.js.map
