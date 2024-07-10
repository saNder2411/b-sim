goog.provide('app.shared.boiler_plant.boiler.settings');

app.shared.boiler_plant.boiler.settings.pressure_hud_settings = (function (){var G__60449 = (function app$shared$boiler_plant$boiler$settings$pressure_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60454 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__60463 = app.shared.components.form.field_row;
var G__60464 = (function (){var obj60466 = ({"label":"PRESSURE","children":[(function (){var G__60472 = app.shared.components.form.select;
var G__60473 = (function (){var obj60475 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__60438_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60438_SHARP_], null)], null));
})});
return obj60475;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60472,G__60473) : helix.core.jsx.call(null,G__60472,G__60473));
})(),(function (){var G__60480 = app.shared.components.form.checkbox;
var G__60481 = (function (){var obj60485 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj60485;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60480,G__60481) : helix.core.jsx.call(null,G__60480,G__60481));
})()]});
return obj60466;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60463,G__60464) : helix.core.jsxs.call(null,G__60463,G__60464));
});
if(goog.DEBUG === true){
var G__60496 = G__60449;
(G__60496.displayName = "app.shared.boiler-plant.boiler.settings/pressure-hud-settings");

return G__60496;
} else {
return G__60449;
}
})();




app.shared.boiler_plant.boiler.settings.temperature_hud_settings = (function (){var G__60505 = (function app$shared$boiler_plant$boiler$settings$temperature_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60511 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__60516 = app.shared.components.form.field_row;
var G__60517 = (function (){var obj60520 = ({"label":"TEMPERATURE","children":[(function (){var G__60523 = app.shared.components.form.select;
var G__60524 = (function (){var obj60528 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B0C",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B0C"], null)], null),"value":unit,"on-change":(function (p1__60501_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60501_SHARP_], null)], null));
})});
return obj60528;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60523,G__60524) : helix.core.jsx.call(null,G__60523,G__60524));
})(),(function (){var G__60534 = app.shared.components.form.checkbox;
var G__60535 = (function (){var obj60539 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj60539;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60534,G__60535) : helix.core.jsx.call(null,G__60534,G__60535));
})()]});
return obj60520;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60516,G__60517) : helix.core.jsxs.call(null,G__60516,G__60517));
});
if(goog.DEBUG === true){
var G__60550 = G__60505;
(G__60550.displayName = "app.shared.boiler-plant.boiler.settings/temperature-hud-settings");

return G__60550;
} else {
return G__60505;
}
})();




app.shared.boiler_plant.boiler.settings.water_level_hud_settings = (function (){var G__60562 = (function app$shared$boiler_plant$boiler$settings$water_level_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60566 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__60569 = app.shared.components.form.field_row;
var G__60570 = (function (){var obj60573 = ({"label":"WATER LEVEL","children":[(function (){var G__60574 = app.shared.components.form.select;
var G__60575 = (function (){var obj60578 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__60555_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60555_SHARP_], null)], null));
})});
return obj60578;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60574,G__60575) : helix.core.jsx.call(null,G__60574,G__60575));
})(),(function (){var G__60587 = app.shared.components.form.checkbox;
var G__60588 = (function (){var obj60592 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj60592;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60587,G__60588) : helix.core.jsx.call(null,G__60587,G__60588));
})()]});
return obj60573;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60569,G__60570) : helix.core.jsxs.call(null,G__60569,G__60570));
});
if(goog.DEBUG === true){
var G__60599 = G__60562;
(G__60599.displayName = "app.shared.boiler-plant.boiler.settings/water-level-hud-settings");

return G__60599;
} else {
return G__60562;
}
})();




app.shared.boiler_plant.boiler.settings.conductivity_hud_settings = (function (){var G__60613 = (function app$shared$boiler_plant$boiler$settings$conductivity_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__60625 = app.shared.components.form.field_row;
var G__60626 = (function (){var obj60629 = ({"label":"WATER CONDUCTIVITY","children":[(function (){var G__60630 = app.shared.components.form.select;
var G__60631 = (function (){var obj60633 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B5S/cm",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B5S/cm"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ppm",new cljs.core.Keyword(null,"label","label",1718410804),"ppm"], null)], null),"value":unit,"on-change":(function (p1__60607_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60607_SHARP_], null)], null));
})});
return obj60633;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60630,G__60631) : helix.core.jsx.call(null,G__60630,G__60631));
})(),(function (){var G__60646 = app.shared.components.form.checkbox;
var G__60647 = (function (){var obj60649 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj60649;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60646,G__60647) : helix.core.jsx.call(null,G__60646,G__60647));
})()]});
return obj60629;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60625,G__60626) : helix.core.jsxs.call(null,G__60625,G__60626));
});
if(goog.DEBUG === true){
var G__60655 = G__60613;
(G__60655.displayName = "app.shared.boiler-plant.boiler.settings/conductivity-hud-settings");

return G__60655;
} else {
return G__60613;
}
})();




app.shared.boiler_plant.boiler.settings.pressure_init_value = (function (){var G__60676 = (function app$shared$boiler_plant$boiler$settings$pressure_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-init-sim-output-pressure-converted-value","boiler-init-sim-output-pressure-converted-value",362703093)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__60689 = app.shared.components.form.field_row;
var G__60690 = (function (){var obj60692 = ({"label":"PRESSURE (ABS)","children":[(function (){var G__60695 = app.shared.components.form.input_number;
var G__60696 = helix.impl.props.merge_obj((function (){var obj60700 = ({"value":converted_value,"on-change":(function (p1__60660_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-init-sim-output-pressure-value","change-boiler-init-sim-output-pressure-value",-898839490),p1__60660_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__60661_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-init-sim-output-pressure-value","change-boiler-init-sim-output-pressure-value",-898839490),p1__60661_SHARP_], null));
}));
})});
return obj60700;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60695,G__60696) : helix.core.jsx.call(null,G__60695,G__60696));
})(),(function (){var G__60707 = app.shared.components.form.select;
var G__60708 = (function (){var obj60710 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__60662_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60662_SHARP_], null)], null));
})});
return obj60710;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60707,G__60708) : helix.core.jsx.call(null,G__60707,G__60708));
})()]});
return obj60692;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60689,G__60690) : helix.core.jsxs.call(null,G__60689,G__60690));
});
if(goog.DEBUG === true){
var G__60722 = G__60676;
(G__60722.displayName = "app.shared.boiler-plant.boiler.settings/pressure-init-value");

return G__60722;
} else {
return G__60676;
}
})();




app.shared.boiler_plant.boiler.settings.water_level_init_value = (function (){var G__60748 = (function app$shared$boiler_plant$boiler$settings$water_level_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-water-level","boiler-water-level",401888750).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial water level value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__60766 = app.shared.components.form.field_row;
var G__60767 = (function (){var obj60771 = ({"label":"WATER LEVEL","children":[(function (){var G__60775 = app.shared.components.form.input_number;
var G__60776 = helix.impl.props.merge_obj((function (){var obj60780 = ({"value":value,"on-change":(function (p1__60728_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__60728_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__60731_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__60731_SHARP_], null)], null));
}));
})});
return obj60780;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60775,G__60776) : helix.core.jsx.call(null,G__60775,G__60776));
})(),(function (){var G__60785 = app.shared.components.form.select;
var G__60786 = (function (){var obj60790 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__60733_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60733_SHARP_], null)], null));
})});
return obj60790;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60785,G__60786) : helix.core.jsx.call(null,G__60785,G__60786));
})()]});
return obj60771;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60766,G__60767) : helix.core.jsxs.call(null,G__60766,G__60767));
});
if(goog.DEBUG === true){
var G__60800 = G__60748;
(G__60800.displayName = "app.shared.boiler-plant.boiler.settings/water-level-init-value");

return G__60800;
} else {
return G__60748;
}
})();




app.shared.boiler_plant.boiler.settings.conductivity_init_value = (function (){var G__60813 = (function app$shared$boiler_plant$boiler$settings$conductivity_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-init-sim-output-conductivity-converted-value","boiler-init-sim-output-conductivity-converted-value",-712351185)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-conductivity","boiler-conductivity",-389479257).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial water conductivity value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__60825 = app.shared.components.form.field_row;
var G__60826 = (function (){var obj60828 = ({"label":"WATER CONDUCTIVITY","children":[(function (){var G__60831 = app.shared.components.form.input_number;
var G__60832 = helix.impl.props.merge_obj((function (){var obj60836 = ({"value":converted_value,"on-change":(function (p1__60804_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-init-sim-output-conductivity-value","change-boiler-init-sim-output-conductivity-value",420283157),p1__60804_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__60806_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-init-sim-output-conductivity-value","change-boiler-init-sim-output-conductivity-value",420283157),p1__60806_SHARP_], null));
}));
})});
return obj60836;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60831,G__60832) : helix.core.jsx.call(null,G__60831,G__60832));
})(),(function (){var G__60841 = app.shared.components.form.select;
var G__60842 = (function (){var obj60844 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B5S/cm",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B5S/cm"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ppm",new cljs.core.Keyword(null,"label","label",1718410804),"ppm"], null)], null),"value":unit,"on-change":(function (p1__60807_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60807_SHARP_], null)], null));
})});
return obj60844;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60841,G__60842) : helix.core.jsx.call(null,G__60841,G__60842));
})()]});
return obj60828;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60825,G__60826) : helix.core.jsxs.call(null,G__60825,G__60826));
});
if(goog.DEBUG === true){
var G__60846 = G__60813;
(G__60846.displayName = "app.shared.boiler-plant.boiler.settings/conductivity-init-value");

return G__60846;
} else {
return G__60813;
}
})();




app.shared.boiler_plant.boiler.settings.sludge_mass_init_value = (function (){var G__60856 = (function app$shared$boiler_plant$boiler$settings$sludge_mass_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-sludge-mass","boiler-sludge-mass",-782560792).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial sludge mass must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__60863 = app.shared.components.form.field_row;
var G__60865 = (function (){var obj60870 = ({"label":"SLUDGE MASS","children":[(function (){var G__60871 = app.shared.components.form.input_number;
var G__60874 = helix.impl.props.merge_obj((function (){var obj60878 = ({"value":value,"on-change":(function (p1__60848_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__60848_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__60851_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__60851_SHARP_], null)], null));
}));
})});
return obj60878;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60871,G__60874) : helix.core.jsx.call(null,G__60871,G__60874));
})(),(function (){var G__60881 = app.shared.components.form.select;
var G__60882 = (function (){var obj60886 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kg",new cljs.core.Keyword(null,"label","label",1718410804),"kg"], null)], null),"value":unit,"on-change":(function (p1__60853_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60853_SHARP_], null)], null));
})});
return obj60886;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60881,G__60882) : helix.core.jsx.call(null,G__60881,G__60882));
})()]});
return obj60870;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60863,G__60865) : helix.core.jsxs.call(null,G__60863,G__60865));
});
if(goog.DEBUG === true){
var G__60887 = G__60856;
(G__60887.displayName = "app.shared.boiler-plant.boiler.settings/sludge-mass-init-value");

return G__60887;
} else {
return G__60856;
}
})();




app.shared.boiler_plant.boiler.settings.volume_init_value = (function (){var G__60898 = (function app$shared$boiler_plant$boiler$settings$volume_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60903 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-volume","boiler-volume",171355954).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial total volume must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__60912 = app.shared.components.form.field_row;
var G__60913 = (function (){var obj60917 = ({"label":"TOTAL VOLUME","children":[(function (){var G__60920 = app.shared.components.form.input_number;
var G__60921 = helix.impl.props.merge_obj((function (){var obj60925 = ({"value":value,"on-change":(function (p1__60889_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__60889_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__60891_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__60891_SHARP_], null)], null));
}));
})});
return obj60925;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60920,G__60921) : helix.core.jsx.call(null,G__60920,G__60921));
})(),(function (){var G__60934 = app.shared.components.form.select;
var G__60935 = (function (){var obj60939 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"m\u00B3",new cljs.core.Keyword(null,"label","label",1718410804),"m\u00B3"], null)], null),"value":unit,"on-change":(function (p1__60892_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60892_SHARP_], null)], null));
})});
return obj60939;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60934,G__60935) : helix.core.jsx.call(null,G__60934,G__60935));
})()]});
return obj60917;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60912,G__60913) : helix.core.jsxs.call(null,G__60912,G__60913));
});
if(goog.DEBUG === true){
var G__60946 = G__60898;
(G__60946.displayName = "app.shared.boiler-plant.boiler.settings/volume-init-value");

return G__60946;
} else {
return G__60898;
}
})();




app.shared.boiler_plant.boiler.settings.max_sludge_mass_init_value = (function (){var G__60960 = (function app$shared$boiler_plant$boiler$settings$max_sludge_mass_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60964 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-sludge-mass","boiler-sludge-mass",-782560792).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial max visible sludge mass must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__60971 = app.shared.components.form.field_row;
var G__60972 = (function (){var obj60976 = ({"label":"MAX VISIBLE SLUDGE MASS","children":[(function (){var G__60977 = app.shared.components.form.input_number;
var G__60978 = helix.impl.props.merge_obj((function (){var obj60980 = ({"value":value,"on-change":(function (p1__60953_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__60953_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__60954_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__60954_SHARP_], null)], null));
}));
})});
return obj60980;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60977,G__60978) : helix.core.jsx.call(null,G__60977,G__60978));
})(),(function (){var G__60982 = app.shared.components.form.select;
var G__60983 = (function (){var obj60985 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kg",new cljs.core.Keyword(null,"label","label",1718410804),"kg"], null)], null),"value":unit,"on-change":(function (p1__60955_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__60955_SHARP_], null)], null));
})});
return obj60985;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60982,G__60983) : helix.core.jsx.call(null,G__60982,G__60983));
})()]});
return obj60976;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60971,G__60972) : helix.core.jsxs.call(null,G__60971,G__60972));
});
if(goog.DEBUG === true){
var G__60986 = G__60960;
(G__60986.displayName = "app.shared.boiler-plant.boiler.settings/max-sludge-mass-init-value");

return G__60986;
} else {
return G__60960;
}
})();




app.shared.boiler_plant.boiler.settings.settings_form = (function (){var G__60988 = (function app$shared$boiler_plant$boiler$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__60989 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__60992 = helix.core.Fragment;
var G__60993 = ({"children": [(function (){var G__60994 = "div";
var G__60995 = (function (){var obj60997 = ({"className":"divider","style":(function (){var obj60999 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj60999;
})(),"children":"head-up-display"});
return obj60997;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__60994,G__60995) : helix.core.jsx.call(null,G__60994,G__60995));
})(),(function (){var G__61000 = app.shared.boiler_plant.boiler.settings.pressure_hud_settings;
var G__61001 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61000,G__61001) : helix.core.jsx.call(null,G__61000,G__61001));
})(),(function (){var G__61002 = app.shared.boiler_plant.boiler.settings.temperature_hud_settings;
var G__61003 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61002,G__61003) : helix.core.jsx.call(null,G__61002,G__61003));
})(),(function (){var G__61004 = app.shared.boiler_plant.boiler.settings.water_level_hud_settings;
var G__61005 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61004,G__61005) : helix.core.jsx.call(null,G__61004,G__61005));
})(),(function (){var G__61006 = app.shared.boiler_plant.boiler.settings.conductivity_hud_settings;
var G__61007 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61006,G__61007) : helix.core.jsx.call(null,G__61006,G__61007));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__61008 = helix.core.Fragment;
var G__61009 = ({"children": [(function (){var G__61010 = "div";
var G__61011 = (function (){var obj61013 = ({"className":"divider","children":"simulation start values"});
return obj61013;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61010,G__61011) : helix.core.jsx.call(null,G__61010,G__61011));
})(),(function (){var G__61014 = app.shared.boiler_plant.boiler.settings.pressure_init_value;
var G__61015 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61014,G__61015) : helix.core.jsx.call(null,G__61014,G__61015));
})(),(function (){var G__61016 = app.shared.boiler_plant.boiler.settings.water_level_init_value;
var G__61017 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61016,G__61017) : helix.core.jsx.call(null,G__61016,G__61017));
})(),(function (){var G__61018 = app.shared.boiler_plant.boiler.settings.conductivity_init_value;
var G__61019 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61018,G__61019) : helix.core.jsx.call(null,G__61018,G__61019));
})(),(function (){var G__61020 = app.shared.boiler_plant.boiler.settings.sludge_mass_init_value;
var G__61021 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61020,G__61021) : helix.core.jsx.call(null,G__61020,G__61021));
})(),(function (){var G__61022 = "div";
var G__61023 = (function (){var obj61025 = ({"className":"divider","children":"specifications"});
return obj61025;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61022,G__61023) : helix.core.jsx.call(null,G__61022,G__61023));
})(),(function (){var G__61026 = app.shared.boiler_plant.boiler.settings.volume_init_value;
var G__61027 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61026,G__61027) : helix.core.jsx.call(null,G__61026,G__61027));
})(),(function (){var G__61028 = app.shared.boiler_plant.boiler.settings.max_sludge_mass_init_value;
var G__61029 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61028,G__61029) : helix.core.jsx.call(null,G__61028,G__61029));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__61008,G__61009) : helix.core.jsxs.call(null,G__61008,G__61009));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__60992,G__60993) : helix.core.jsxs.call(null,G__60992,G__60993));
});
if(goog.DEBUG === true){
var G__61030 = G__60988;
(G__61030.displayName = "app.shared.boiler-plant.boiler.settings/settings-form");

return G__61030;
} else {
return G__60988;
}
})();




app.shared.boiler_plant.boiler.settings.boiler_settings = (function (){var G__61032 = (function app$shared$boiler_plant$boiler$settings$boiler_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__61033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__61036 = app.shared.components.modal.settings;
var G__61037 = (function (){var obj61039 = ({"title":"Boiler Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-boiler-settings","restore-defaults-boiler-settings",-1306485599)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-boiler-settings","apply-boiler-settings",1704610382)], null));
}),"children":(function (){var G__61040 = app.shared.boiler_plant.boiler.settings.settings_form;
var G__61041 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61040,G__61041) : helix.core.jsx.call(null,G__61040,G__61041));
})()});
return obj61039;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__61036,G__61037) : helix.core.jsx.call(null,G__61036,G__61037));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__61042 = G__61032;
(G__61042.displayName = "app.shared.boiler-plant.boiler.settings/boiler-settings");

return G__61042;
} else {
return G__61032;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.settings.js.map
