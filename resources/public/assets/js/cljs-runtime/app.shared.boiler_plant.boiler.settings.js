goog.provide('app.shared.boiler_plant.boiler.settings');

app.shared.boiler_plant.boiler.settings.pressure_hud_settings = (function (){var G__33430 = (function app$shared$boiler_plant$boiler$settings$pressure_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33431 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__33434 = app.shared.components.form.field_row;
var G__33435 = (function (){var obj33437 = ({"label":"PRESSURE","children":[(function (){var G__33438 = app.shared.components.form.select;
var G__33439 = (function (){var obj33441 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__33428_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33428_SHARP_], null)], null));
})});
return obj33441;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33438,G__33439) : helix.core.jsx.call(null,G__33438,G__33439));
})(),(function (){var G__33442 = app.shared.components.form.checkbox;
var G__33443 = (function (){var obj33445 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj33445;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33442,G__33443) : helix.core.jsx.call(null,G__33442,G__33443));
})()]});
return obj33437;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33434,G__33435) : helix.core.jsxs.call(null,G__33434,G__33435));
});
if(goog.DEBUG === true){
var G__33446 = G__33430;
(G__33446.displayName = "app.shared.boiler-plant.boiler.settings/pressure-hud-settings");

return G__33446;
} else {
return G__33430;
}
})();




app.shared.boiler_plant.boiler.settings.temperature_hud_settings = (function (){var G__33449 = (function app$shared$boiler_plant$boiler$settings$temperature_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33450 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__33453 = app.shared.components.form.field_row;
var G__33454 = (function (){var obj33456 = ({"label":"TEMPERATURE","children":[(function (){var G__33457 = app.shared.components.form.select;
var G__33458 = (function (){var obj33460 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B0C",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B0C"], null)], null),"value":unit,"on-change":(function (p1__33447_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33447_SHARP_], null)], null));
})});
return obj33460;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33457,G__33458) : helix.core.jsx.call(null,G__33457,G__33458));
})(),(function (){var G__33461 = app.shared.components.form.checkbox;
var G__33462 = (function (){var obj33464 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj33464;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33461,G__33462) : helix.core.jsx.call(null,G__33461,G__33462));
})()]});
return obj33456;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33453,G__33454) : helix.core.jsxs.call(null,G__33453,G__33454));
});
if(goog.DEBUG === true){
var G__33465 = G__33449;
(G__33465.displayName = "app.shared.boiler-plant.boiler.settings/temperature-hud-settings");

return G__33465;
} else {
return G__33449;
}
})();




app.shared.boiler_plant.boiler.settings.water_level_hud_settings = (function (){var G__33468 = (function app$shared$boiler_plant$boiler$settings$water_level_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33469 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__33472 = app.shared.components.form.field_row;
var G__33473 = (function (){var obj33475 = ({"label":"WATER LEVEL","children":[(function (){var G__33476 = app.shared.components.form.select;
var G__33477 = (function (){var obj33479 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__33466_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33466_SHARP_], null)], null));
})});
return obj33479;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33476,G__33477) : helix.core.jsx.call(null,G__33476,G__33477));
})(),(function (){var G__33480 = app.shared.components.form.checkbox;
var G__33481 = (function (){var obj33483 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj33483;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33480,G__33481) : helix.core.jsx.call(null,G__33480,G__33481));
})()]});
return obj33475;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33472,G__33473) : helix.core.jsxs.call(null,G__33472,G__33473));
});
if(goog.DEBUG === true){
var G__33484 = G__33468;
(G__33484.displayName = "app.shared.boiler-plant.boiler.settings/water-level-hud-settings");

return G__33484;
} else {
return G__33468;
}
})();




app.shared.boiler_plant.boiler.settings.conductivity_hud_settings = (function (){var G__33487 = (function app$shared$boiler_plant$boiler$settings$conductivity_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__33491 = app.shared.components.form.field_row;
var G__33492 = (function (){var obj33494 = ({"label":"WATER CONDUCTIVITY","children":[(function (){var G__33495 = app.shared.components.form.select;
var G__33496 = (function (){var obj33498 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B5S/cm",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B5S/cm"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ppm",new cljs.core.Keyword(null,"label","label",1718410804),"ppm"], null)], null),"value":unit,"on-change":(function (p1__33485_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33485_SHARP_], null)], null));
})});
return obj33498;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33495,G__33496) : helix.core.jsx.call(null,G__33495,G__33496));
})(),(function (){var G__33499 = app.shared.components.form.checkbox;
var G__33500 = (function (){var obj33502 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj33502;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33499,G__33500) : helix.core.jsx.call(null,G__33499,G__33500));
})()]});
return obj33494;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33491,G__33492) : helix.core.jsxs.call(null,G__33491,G__33492));
});
if(goog.DEBUG === true){
var G__33503 = G__33487;
(G__33503.displayName = "app.shared.boiler-plant.boiler.settings/conductivity-hud-settings");

return G__33503;
} else {
return G__33487;
}
})();




app.shared.boiler_plant.boiler.settings.pressure_init_value = (function (){var G__33508 = (function app$shared$boiler_plant$boiler$settings$pressure_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33509 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-settings-pressure-converted-value","boiler-settings-pressure-converted-value",1239412665)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33512 = app.shared.components.form.field_row;
var G__33513 = (function (){var obj33515 = ({"label":"PRESSURE (ABS)","children":[(function (){var G__33516 = app.shared.components.form.input_number;
var G__33517 = helix.impl.props.merge_obj((function (){var obj33519 = ({"value":converted_value,"on-change":(function (p1__33504_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-pressure-value","change-boiler-settings-pressure-value",-383203721),p1__33504_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33505_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-pressure-value","change-boiler-settings-pressure-value",-383203721),p1__33505_SHARP_], null));
}));
})});
return obj33519;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33516,G__33517) : helix.core.jsx.call(null,G__33516,G__33517));
})(),(function (){var G__33520 = app.shared.components.form.select;
var G__33521 = (function (){var obj33523 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__33506_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33506_SHARP_], null)], null));
})});
return obj33523;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33520,G__33521) : helix.core.jsx.call(null,G__33520,G__33521));
})()]});
return obj33515;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33512,G__33513) : helix.core.jsxs.call(null,G__33512,G__33513));
});
if(goog.DEBUG === true){
var G__33524 = G__33508;
(G__33524.displayName = "app.shared.boiler-plant.boiler.settings/pressure-init-value");

return G__33524;
} else {
return G__33508;
}
})();




app.shared.boiler_plant.boiler.settings.water_level_init_value = (function (){var G__33529 = (function app$shared$boiler_plant$boiler$settings$water_level_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33530 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-water-level","boiler-water-level",401888750).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial water level value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33533 = app.shared.components.form.field_row;
var G__33534 = (function (){var obj33536 = ({"label":"WATER LEVEL","children":[(function (){var G__33537 = app.shared.components.form.input_number;
var G__33538 = helix.impl.props.merge_obj((function (){var obj33540 = ({"value":value,"on-change":(function (p1__33525_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__33525_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33526_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__33526_SHARP_], null)], null));
}));
})});
return obj33540;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33537,G__33538) : helix.core.jsx.call(null,G__33537,G__33538));
})(),(function (){var G__33541 = app.shared.components.form.select;
var G__33542 = (function (){var obj33544 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__33527_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33527_SHARP_], null)], null));
})});
return obj33544;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33541,G__33542) : helix.core.jsx.call(null,G__33541,G__33542));
})()]});
return obj33536;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33533,G__33534) : helix.core.jsxs.call(null,G__33533,G__33534));
});
if(goog.DEBUG === true){
var G__33545 = G__33529;
(G__33545.displayName = "app.shared.boiler-plant.boiler.settings/water-level-init-value");

return G__33545;
} else {
return G__33529;
}
})();




app.shared.boiler_plant.boiler.settings.conductivity_init_value = (function (){var G__33550 = (function app$shared$boiler_plant$boiler$settings$conductivity_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-settings-conductivity-converted-value","boiler-settings-conductivity-converted-value",123551450)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-conductivity","boiler-conductivity",-389479257).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial water conductivity value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33554 = app.shared.components.form.field_row;
var G__33555 = (function (){var obj33557 = ({"label":"WATER CONDUCTIVITY","children":[(function (){var G__33558 = app.shared.components.form.input_number;
var G__33559 = helix.impl.props.merge_obj((function (){var obj33561 = ({"value":converted_value,"on-change":(function (p1__33546_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-conductivity-value","change-boiler-settings-conductivity-value",1285073760),p1__33546_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33547_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-conductivity-value","change-boiler-settings-conductivity-value",1285073760),p1__33547_SHARP_], null));
}));
})});
return obj33561;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33558,G__33559) : helix.core.jsx.call(null,G__33558,G__33559));
})(),(function (){var G__33562 = app.shared.components.form.select;
var G__33563 = (function (){var obj33565 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B5S/cm",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B5S/cm"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ppm",new cljs.core.Keyword(null,"label","label",1718410804),"ppm"], null)], null),"value":unit,"on-change":(function (p1__33548_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33548_SHARP_], null)], null));
})});
return obj33565;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33562,G__33563) : helix.core.jsx.call(null,G__33562,G__33563));
})()]});
return obj33557;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33554,G__33555) : helix.core.jsxs.call(null,G__33554,G__33555));
});
if(goog.DEBUG === true){
var G__33566 = G__33550;
(G__33566.displayName = "app.shared.boiler-plant.boiler.settings/conductivity-init-value");

return G__33566;
} else {
return G__33550;
}
})();




app.shared.boiler_plant.boiler.settings.sludge_mass_init_value = (function (){var G__33571 = (function app$shared$boiler_plant$boiler$settings$sludge_mass_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33572 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-sludge-mass","boiler-sludge-mass",-782560792).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial sludge mass must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33575 = app.shared.components.form.field_row;
var G__33576 = (function (){var obj33578 = ({"label":"SLUDGE MASS","children":[(function (){var G__33579 = app.shared.components.form.input_number;
var G__33580 = helix.impl.props.merge_obj((function (){var obj33582 = ({"value":value,"on-change":(function (p1__33567_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__33567_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33568_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__33568_SHARP_], null)], null));
}));
})});
return obj33582;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33579,G__33580) : helix.core.jsx.call(null,G__33579,G__33580));
})(),(function (){var G__33583 = app.shared.components.form.select;
var G__33584 = (function (){var obj33586 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kg",new cljs.core.Keyword(null,"label","label",1718410804),"kg"], null)], null),"value":unit,"on-change":(function (p1__33569_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33569_SHARP_], null)], null));
})});
return obj33586;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33583,G__33584) : helix.core.jsx.call(null,G__33583,G__33584));
})()]});
return obj33578;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33575,G__33576) : helix.core.jsxs.call(null,G__33575,G__33576));
});
if(goog.DEBUG === true){
var G__33587 = G__33571;
(G__33587.displayName = "app.shared.boiler-plant.boiler.settings/sludge-mass-init-value");

return G__33587;
} else {
return G__33571;
}
})();




app.shared.boiler_plant.boiler.settings.volume_init_value = (function (){var G__33592 = (function app$shared$boiler_plant$boiler$settings$volume_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-volume","boiler-volume",171355954).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial total volume must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33596 = app.shared.components.form.field_row;
var G__33597 = (function (){var obj33599 = ({"label":"TOTAL VOLUME","children":[(function (){var G__33600 = app.shared.components.form.input_number;
var G__33601 = helix.impl.props.merge_obj((function (){var obj33603 = ({"value":value,"on-change":(function (p1__33588_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__33588_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33589_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__33589_SHARP_], null)], null));
}));
})});
return obj33603;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33600,G__33601) : helix.core.jsx.call(null,G__33600,G__33601));
})(),(function (){var G__33604 = app.shared.components.form.select;
var G__33605 = (function (){var obj33607 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"m\u00B3",new cljs.core.Keyword(null,"label","label",1718410804),"m\u00B3"], null)], null),"value":unit,"on-change":(function (p1__33590_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33590_SHARP_], null)], null));
})});
return obj33607;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33604,G__33605) : helix.core.jsx.call(null,G__33604,G__33605));
})()]});
return obj33599;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33596,G__33597) : helix.core.jsxs.call(null,G__33596,G__33597));
});
if(goog.DEBUG === true){
var G__33608 = G__33592;
(G__33608.displayName = "app.shared.boiler-plant.boiler.settings/volume-init-value");

return G__33608;
} else {
return G__33592;
}
})();




app.shared.boiler_plant.boiler.settings.max_sludge_mass_init_value = (function (){var G__33613 = (function app$shared$boiler_plant$boiler$settings$max_sludge_mass_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"max","max",61366548)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-sludge-mass","boiler-sludge-mass",-782560792).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial max visible sludge mass must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33617 = app.shared.components.form.field_row;
var G__33618 = (function (){var obj33620 = ({"label":"MAX VISIBLE SLUDGE MASS","children":[(function (){var G__33621 = app.shared.components.form.input_number;
var G__33622 = helix.impl.props.merge_obj((function (){var obj33624 = ({"value":value,"on-change":(function (p1__33609_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"max","max",61366548)], null),p1__33609_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33610_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"max","max",61366548)], null),p1__33610_SHARP_], null)], null));
}));
})});
return obj33624;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33621,G__33622) : helix.core.jsx.call(null,G__33621,G__33622));
})(),(function (){var G__33625 = app.shared.components.form.select;
var G__33626 = (function (){var obj33628 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kg",new cljs.core.Keyword(null,"label","label",1718410804),"kg"], null)], null),"value":unit,"on-change":(function (p1__33611_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings","change-boiler-settings",-222330461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33611_SHARP_], null)], null));
})});
return obj33628;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33625,G__33626) : helix.core.jsx.call(null,G__33625,G__33626));
})()]});
return obj33620;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33617,G__33618) : helix.core.jsxs.call(null,G__33617,G__33618));
});
if(goog.DEBUG === true){
var G__33629 = G__33613;
(G__33629.displayName = "app.shared.boiler-plant.boiler.settings/max-sludge-mass-init-value");

return G__33629;
} else {
return G__33613;
}
})();




app.shared.boiler_plant.boiler.settings.settings_form = (function (){var G__33631 = (function app$shared$boiler_plant$boiler$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33632 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__33635 = helix.core.Fragment;
var G__33636 = ({"children": [(function (){var G__33637 = "div";
var G__33638 = (function (){var obj33640 = ({"className":"divider","style":(function (){var obj33642 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj33642;
})(),"children":"head-up-display"});
return obj33640;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33637,G__33638) : helix.core.jsx.call(null,G__33637,G__33638));
})(),(function (){var G__33643 = app.shared.boiler_plant.boiler.settings.pressure_hud_settings;
var G__33644 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33643,G__33644) : helix.core.jsx.call(null,G__33643,G__33644));
})(),(function (){var G__33645 = app.shared.boiler_plant.boiler.settings.temperature_hud_settings;
var G__33646 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33645,G__33646) : helix.core.jsx.call(null,G__33645,G__33646));
})(),(function (){var G__33647 = app.shared.boiler_plant.boiler.settings.water_level_hud_settings;
var G__33648 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33647,G__33648) : helix.core.jsx.call(null,G__33647,G__33648));
})(),(function (){var G__33649 = app.shared.boiler_plant.boiler.settings.conductivity_hud_settings;
var G__33650 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33649,G__33650) : helix.core.jsx.call(null,G__33649,G__33650));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__33651 = helix.core.Fragment;
var G__33652 = ({"children": [(function (){var G__33653 = "div";
var G__33654 = (function (){var obj33656 = ({"className":"divider","children":"simulation start values"});
return obj33656;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33653,G__33654) : helix.core.jsx.call(null,G__33653,G__33654));
})(),(function (){var G__33657 = app.shared.boiler_plant.boiler.settings.pressure_init_value;
var G__33658 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33657,G__33658) : helix.core.jsx.call(null,G__33657,G__33658));
})(),(function (){var G__33659 = app.shared.boiler_plant.boiler.settings.water_level_init_value;
var G__33660 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33659,G__33660) : helix.core.jsx.call(null,G__33659,G__33660));
})(),(function (){var G__33661 = app.shared.boiler_plant.boiler.settings.conductivity_init_value;
var G__33662 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33661,G__33662) : helix.core.jsx.call(null,G__33661,G__33662));
})(),(function (){var G__33663 = app.shared.boiler_plant.boiler.settings.sludge_mass_init_value;
var G__33664 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33663,G__33664) : helix.core.jsx.call(null,G__33663,G__33664));
})(),(function (){var G__33665 = "div";
var G__33666 = (function (){var obj33668 = ({"className":"divider","children":"specifications"});
return obj33668;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33665,G__33666) : helix.core.jsx.call(null,G__33665,G__33666));
})(),(function (){var G__33669 = app.shared.boiler_plant.boiler.settings.volume_init_value;
var G__33670 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33669,G__33670) : helix.core.jsx.call(null,G__33669,G__33670));
})(),(function (){var G__33671 = app.shared.boiler_plant.boiler.settings.max_sludge_mass_init_value;
var G__33672 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33671,G__33672) : helix.core.jsx.call(null,G__33671,G__33672));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33651,G__33652) : helix.core.jsxs.call(null,G__33651,G__33652));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33635,G__33636) : helix.core.jsxs.call(null,G__33635,G__33636));
});
if(goog.DEBUG === true){
var G__33673 = G__33631;
(G__33673.displayName = "app.shared.boiler-plant.boiler.settings/settings-form");

return G__33673;
} else {
return G__33631;
}
})();




app.shared.boiler_plant.boiler.settings.boiler_settings = (function (){var G__33675 = (function app$shared$boiler_plant$boiler$settings$boiler_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-settings-view","boiler-settings-view",1221821061)], null));
if(cljs.core.truth_(show_settings)){
var G__33679 = app.shared.components.modal.settings;
var G__33680 = (function (){var obj33682 = ({"title":"Boiler Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-boiler-settings","restore-defaults-boiler-settings",-1306485599)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-boiler-settings","apply-boiler-settings",1704610382)], null));
}),"children":(function (){var G__33683 = app.shared.boiler_plant.boiler.settings.settings_form;
var G__33684 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33683,G__33684) : helix.core.jsx.call(null,G__33683,G__33684));
})()});
return obj33682;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33679,G__33680) : helix.core.jsx.call(null,G__33679,G__33680));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__33685 = G__33675;
(G__33685.displayName = "app.shared.boiler-plant.boiler.settings/boiler-settings");

return G__33685;
} else {
return G__33675;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.settings.js.map
