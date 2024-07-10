goog.provide('app.shared.boiler_plant.boiler.settings');

app.shared.boiler_plant.boiler.settings.pressure_hud_settings = (function (){var G__67618 = (function app$shared$boiler_plant$boiler$settings$pressure_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__67628 = app.shared.components.form.field_row;
var G__67629 = (function (){var obj67634 = ({"label":"PRESSURE","children":[(function (){var G__67635 = app.shared.components.form.select;
var G__67636 = (function (){var obj67638 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__67608_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67608_SHARP_], null)], null));
})});
return obj67638;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67635,G__67636) : helix.core.jsx.call(null,G__67635,G__67636));
})(),(function (){var G__67642 = app.shared.components.form.checkbox;
var G__67643 = (function (){var obj67645 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj67645;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67642,G__67643) : helix.core.jsx.call(null,G__67642,G__67643));
})()]});
return obj67634;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67628,G__67629) : helix.core.jsxs.call(null,G__67628,G__67629));
});
if(goog.DEBUG === true){
var G__67657 = G__67618;
(G__67657.displayName = "app.shared.boiler-plant.boiler.settings/pressure-hud-settings");

return G__67657;
} else {
return G__67618;
}
})();




app.shared.boiler_plant.boiler.settings.temperature_hud_settings = (function (){var G__67694 = (function app$shared$boiler_plant$boiler$settings$temperature_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__67701 = app.shared.components.form.field_row;
var G__67702 = (function (){var obj67706 = ({"label":"TEMPERATURE","children":[(function (){var G__67711 = app.shared.components.form.select;
var G__67712 = (function (){var obj67714 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B0C",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B0C"], null)], null),"value":unit,"on-change":(function (p1__67676_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67676_SHARP_], null)], null));
})});
return obj67714;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67711,G__67712) : helix.core.jsx.call(null,G__67711,G__67712));
})(),(function (){var G__67715 = app.shared.components.form.checkbox;
var G__67716 = (function (){var obj67721 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj67721;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67715,G__67716) : helix.core.jsx.call(null,G__67715,G__67716));
})()]});
return obj67706;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67701,G__67702) : helix.core.jsxs.call(null,G__67701,G__67702));
});
if(goog.DEBUG === true){
var G__67731 = G__67694;
(G__67731.displayName = "app.shared.boiler-plant.boiler.settings/temperature-hud-settings");

return G__67731;
} else {
return G__67694;
}
})();




app.shared.boiler_plant.boiler.settings.water_level_hud_settings = (function (){var G__67770 = (function app$shared$boiler_plant$boiler$settings$water_level_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67771 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__67777 = app.shared.components.form.field_row;
var G__67778 = (function (){var obj67780 = ({"label":"WATER LEVEL","children":[(function (){var G__67783 = app.shared.components.form.select;
var G__67784 = (function (){var obj67790 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__67746_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67746_SHARP_], null)], null));
})});
return obj67790;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67783,G__67784) : helix.core.jsx.call(null,G__67783,G__67784));
})(),(function (){var G__67793 = app.shared.components.form.checkbox;
var G__67794 = (function (){var obj67796 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj67796;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67793,G__67794) : helix.core.jsx.call(null,G__67793,G__67794));
})()]});
return obj67780;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67777,G__67778) : helix.core.jsxs.call(null,G__67777,G__67778));
});
if(goog.DEBUG === true){
var G__67805 = G__67770;
(G__67805.displayName = "app.shared.boiler-plant.boiler.settings/water-level-hud-settings");

return G__67805;
} else {
return G__67770;
}
})();




app.shared.boiler_plant.boiler.settings.conductivity_hud_settings = (function (){var G__67834 = (function app$shared$boiler_plant$boiler$settings$conductivity_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67846 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__67850 = app.shared.components.form.field_row;
var G__67851 = (function (){var obj67854 = ({"label":"WATER CONDUCTIVITY","children":[(function (){var G__67860 = app.shared.components.form.select;
var G__67861 = (function (){var obj67863 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B5S/cm",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B5S/cm"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ppm",new cljs.core.Keyword(null,"label","label",1718410804),"ppm"], null)], null),"value":unit,"on-change":(function (p1__67813_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67813_SHARP_], null)], null));
})});
return obj67863;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67860,G__67861) : helix.core.jsx.call(null,G__67860,G__67861));
})(),(function (){var G__67869 = app.shared.components.form.checkbox;
var G__67870 = (function (){var obj67872 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj67872;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67869,G__67870) : helix.core.jsx.call(null,G__67869,G__67870));
})()]});
return obj67854;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67850,G__67851) : helix.core.jsxs.call(null,G__67850,G__67851));
});
if(goog.DEBUG === true){
var G__67882 = G__67834;
(G__67882.displayName = "app.shared.boiler-plant.boiler.settings/conductivity-hud-settings");

return G__67882;
} else {
return G__67834;
}
})();




app.shared.boiler_plant.boiler.settings.pressure_init_value = (function (){var G__67912 = (function app$shared$boiler_plant$boiler$settings$pressure_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67916 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-init-sim-output-pressure-converted-value","boiler-init-sim-output-pressure-converted-value",362703093)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__67928 = app.shared.components.form.field_row;
var G__67929 = (function (){var obj67934 = ({"label":"PRESSURE (ABS)","children":[(function (){var G__67940 = app.shared.components.form.input_number;
var G__67941 = helix.impl.props.merge_obj((function (){var obj67943 = ({"value":converted_value,"on-change":(function (p1__67894_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-init-sim-output-pressure-value","change-boiler-init-sim-output-pressure-value",-898839490),p1__67894_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__67895_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-init-sim-output-pressure-value","change-boiler-init-sim-output-pressure-value",-898839490),p1__67895_SHARP_], null));
}));
})});
return obj67943;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67940,G__67941) : helix.core.jsx.call(null,G__67940,G__67941));
})(),(function (){var G__67958 = app.shared.components.form.select;
var G__67959 = (function (){var obj67963 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__67896_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67896_SHARP_], null)], null));
})});
return obj67963;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67958,G__67959) : helix.core.jsx.call(null,G__67958,G__67959));
})()]});
return obj67934;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67928,G__67929) : helix.core.jsxs.call(null,G__67928,G__67929));
});
if(goog.DEBUG === true){
var G__67966 = G__67912;
(G__67966.displayName = "app.shared.boiler-plant.boiler.settings/pressure-init-value");

return G__67966;
} else {
return G__67912;
}
})();




app.shared.boiler_plant.boiler.settings.water_level_init_value = (function (){var G__67996 = (function app$shared$boiler_plant$boiler$settings$water_level_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__68000 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-water-level","boiler-water-level",401888750).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial water level value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__68012 = app.shared.components.form.field_row;
var G__68013 = (function (){var obj68021 = ({"label":"WATER LEVEL","children":[(function (){var G__68024 = app.shared.components.form.input_number;
var G__68025 = helix.impl.props.merge_obj((function (){var obj68027 = ({"value":value,"on-change":(function (p1__67978_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__67978_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__67979_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__67979_SHARP_], null)], null));
}));
})});
return obj68027;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68024,G__68025) : helix.core.jsx.call(null,G__68024,G__68025));
})(),(function (){var G__68042 = app.shared.components.form.select;
var G__68043 = (function (){var obj68045 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__67980_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67980_SHARP_], null)], null));
})});
return obj68045;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68042,G__68043) : helix.core.jsx.call(null,G__68042,G__68043));
})()]});
return obj68021;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68012,G__68013) : helix.core.jsxs.call(null,G__68012,G__68013));
});
if(goog.DEBUG === true){
var G__68054 = G__67996;
(G__68054.displayName = "app.shared.boiler-plant.boiler.settings/water-level-init-value");

return G__68054;
} else {
return G__67996;
}
})();




app.shared.boiler_plant.boiler.settings.conductivity_init_value = (function (){var G__68092 = (function app$shared$boiler_plant$boiler$settings$conductivity_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__68102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-init-sim-output-conductivity-converted-value","boiler-init-sim-output-conductivity-converted-value",-712351185)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-conductivity","boiler-conductivity",-389479257).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial water conductivity value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__68121 = app.shared.components.form.field_row;
var G__68122 = (function (){var obj68126 = ({"label":"WATER CONDUCTIVITY","children":[(function (){var G__68129 = app.shared.components.form.input_number;
var G__68130 = helix.impl.props.merge_obj((function (){var obj68135 = ({"value":converted_value,"on-change":(function (p1__68064_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-init-sim-output-conductivity-value","change-boiler-init-sim-output-conductivity-value",420283157),p1__68064_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__68065_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-init-sim-output-conductivity-value","change-boiler-init-sim-output-conductivity-value",420283157),p1__68065_SHARP_], null));
}));
})});
return obj68135;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68129,G__68130) : helix.core.jsx.call(null,G__68129,G__68130));
})(),(function (){var G__68154 = app.shared.components.form.select;
var G__68155 = (function (){var obj68159 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B5S/cm",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B5S/cm"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ppm",new cljs.core.Keyword(null,"label","label",1718410804),"ppm"], null)], null),"value":unit,"on-change":(function (p1__68066_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__68066_SHARP_], null)], null));
})});
return obj68159;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68154,G__68155) : helix.core.jsx.call(null,G__68154,G__68155));
})()]});
return obj68126;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68121,G__68122) : helix.core.jsxs.call(null,G__68121,G__68122));
});
if(goog.DEBUG === true){
var G__68170 = G__68092;
(G__68170.displayName = "app.shared.boiler-plant.boiler.settings/conductivity-init-value");

return G__68170;
} else {
return G__68092;
}
})();




app.shared.boiler_plant.boiler.settings.sludge_mass_init_value = (function (){var G__68194 = (function app$shared$boiler_plant$boiler$settings$sludge_mass_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__68197 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-sludge-mass","boiler-sludge-mass",-782560792).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial sludge mass must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__68205 = app.shared.components.form.field_row;
var G__68206 = (function (){var obj68208 = ({"label":"SLUDGE MASS","children":[(function (){var G__68209 = app.shared.components.form.input_number;
var G__68210 = helix.impl.props.merge_obj((function (){var obj68214 = ({"value":value,"on-change":(function (p1__68176_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__68176_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__68178_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__68178_SHARP_], null)], null));
}));
})});
return obj68214;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68209,G__68210) : helix.core.jsx.call(null,G__68209,G__68210));
})(),(function (){var G__68221 = app.shared.components.form.select;
var G__68222 = (function (){var obj68224 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kg",new cljs.core.Keyword(null,"label","label",1718410804),"kg"], null)], null),"value":unit,"on-change":(function (p1__68179_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__68179_SHARP_], null)], null));
})});
return obj68224;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68221,G__68222) : helix.core.jsx.call(null,G__68221,G__68222));
})()]});
return obj68208;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68205,G__68206) : helix.core.jsxs.call(null,G__68205,G__68206));
});
if(goog.DEBUG === true){
var G__68229 = G__68194;
(G__68229.displayName = "app.shared.boiler-plant.boiler.settings/sludge-mass-init-value");

return G__68229;
} else {
return G__68194;
}
})();




app.shared.boiler_plant.boiler.settings.volume_init_value = (function (){var G__68239 = (function app$shared$boiler_plant$boiler$settings$volume_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__68240 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-volume","boiler-volume",171355954).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial total volume must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__68247 = app.shared.components.form.field_row;
var G__68248 = (function (){var obj68250 = ({"label":"TOTAL VOLUME","children":[(function (){var G__68251 = app.shared.components.form.input_number;
var G__68252 = helix.impl.props.merge_obj((function (){var obj68256 = ({"value":value,"on-change":(function (p1__68231_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__68231_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__68232_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__68232_SHARP_], null)], null));
}));
})});
return obj68256;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68251,G__68252) : helix.core.jsx.call(null,G__68251,G__68252));
})(),(function (){var G__68263 = app.shared.components.form.select;
var G__68264 = (function (){var obj68266 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"m\u00B3",new cljs.core.Keyword(null,"label","label",1718410804),"m\u00B3"], null)], null),"value":unit,"on-change":(function (p1__68233_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__68233_SHARP_], null)], null));
})});
return obj68266;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68263,G__68264) : helix.core.jsx.call(null,G__68263,G__68264));
})()]});
return obj68250;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68247,G__68248) : helix.core.jsxs.call(null,G__68247,G__68248));
});
if(goog.DEBUG === true){
var G__68271 = G__68239;
(G__68271.displayName = "app.shared.boiler-plant.boiler.settings/volume-init-value");

return G__68271;
} else {
return G__68239;
}
})();




app.shared.boiler_plant.boiler.settings.max_sludge_mass_init_value = (function (){var G__68279 = (function app$shared$boiler_plant$boiler$settings$max_sludge_mass_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__68285 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-sludge-mass","boiler-sludge-mass",-782560792).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial max visible sludge mass must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__68296 = app.shared.components.form.field_row;
var G__68297 = (function (){var obj68299 = ({"label":"MAX VISIBLE SLUDGE MASS","children":[(function (){var G__68302 = app.shared.components.form.input_number;
var G__68303 = helix.impl.props.merge_obj((function (){var obj68307 = ({"value":value,"on-change":(function (p1__68273_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__68273_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__68274_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__68274_SHARP_], null)], null));
}));
})});
return obj68307;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68302,G__68303) : helix.core.jsx.call(null,G__68302,G__68303));
})(),(function (){var G__68316 = app.shared.components.form.select;
var G__68317 = (function (){var obj68321 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kg",new cljs.core.Keyword(null,"label","label",1718410804),"kg"], null)], null),"value":unit,"on-change":(function (p1__68275_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler","change-boiler",-549775698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__68275_SHARP_], null)], null));
})});
return obj68321;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68316,G__68317) : helix.core.jsx.call(null,G__68316,G__68317));
})()]});
return obj68299;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68296,G__68297) : helix.core.jsxs.call(null,G__68296,G__68297));
});
if(goog.DEBUG === true){
var G__68328 = G__68279;
(G__68328.displayName = "app.shared.boiler-plant.boiler.settings/max-sludge-mass-init-value");

return G__68328;
} else {
return G__68279;
}
})();




app.shared.boiler_plant.boiler.settings.settings_form = (function (){var G__68338 = (function app$shared$boiler_plant$boiler$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__68340 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__68344 = helix.core.Fragment;
var G__68345 = ({"children": [(function (){var G__68346 = "div";
var G__68347 = (function (){var obj68350 = ({"className":"divider","style":(function (){var obj68352 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj68352;
})(),"children":"head-up-display"});
return obj68350;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68346,G__68347) : helix.core.jsx.call(null,G__68346,G__68347));
})(),(function (){var G__68356 = app.shared.boiler_plant.boiler.settings.pressure_hud_settings;
var G__68357 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68356,G__68357) : helix.core.jsx.call(null,G__68356,G__68357));
})(),(function (){var G__68360 = app.shared.boiler_plant.boiler.settings.temperature_hud_settings;
var G__68361 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68360,G__68361) : helix.core.jsx.call(null,G__68360,G__68361));
})(),(function (){var G__68364 = app.shared.boiler_plant.boiler.settings.water_level_hud_settings;
var G__68365 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68364,G__68365) : helix.core.jsx.call(null,G__68364,G__68365));
})(),(function (){var G__68368 = app.shared.boiler_plant.boiler.settings.conductivity_hud_settings;
var G__68369 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68368,G__68369) : helix.core.jsx.call(null,G__68368,G__68369));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__68370 = helix.core.Fragment;
var G__68371 = ({"children": [(function (){var G__68372 = "div";
var G__68373 = (function (){var obj68376 = ({"className":"divider","children":"simulation start values"});
return obj68376;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68372,G__68373) : helix.core.jsx.call(null,G__68372,G__68373));
})(),(function (){var G__68377 = app.shared.boiler_plant.boiler.settings.pressure_init_value;
var G__68378 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68377,G__68378) : helix.core.jsx.call(null,G__68377,G__68378));
})(),(function (){var G__68379 = app.shared.boiler_plant.boiler.settings.water_level_init_value;
var G__68380 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68379,G__68380) : helix.core.jsx.call(null,G__68379,G__68380));
})(),(function (){var G__68381 = app.shared.boiler_plant.boiler.settings.conductivity_init_value;
var G__68382 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68381,G__68382) : helix.core.jsx.call(null,G__68381,G__68382));
})(),(function (){var G__68383 = app.shared.boiler_plant.boiler.settings.sludge_mass_init_value;
var G__68384 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68383,G__68384) : helix.core.jsx.call(null,G__68383,G__68384));
})(),(function (){var G__68385 = "div";
var G__68386 = (function (){var obj68388 = ({"className":"divider","children":"specifications"});
return obj68388;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68385,G__68386) : helix.core.jsx.call(null,G__68385,G__68386));
})(),(function (){var G__68389 = app.shared.boiler_plant.boiler.settings.volume_init_value;
var G__68390 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68389,G__68390) : helix.core.jsx.call(null,G__68389,G__68390));
})(),(function (){var G__68391 = app.shared.boiler_plant.boiler.settings.max_sludge_mass_init_value;
var G__68392 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68391,G__68392) : helix.core.jsx.call(null,G__68391,G__68392));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68370,G__68371) : helix.core.jsxs.call(null,G__68370,G__68371));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68344,G__68345) : helix.core.jsxs.call(null,G__68344,G__68345));
});
if(goog.DEBUG === true){
var G__68393 = G__68338;
(G__68393.displayName = "app.shared.boiler-plant.boiler.settings/settings-form");

return G__68393;
} else {
return G__68338;
}
})();




app.shared.boiler_plant.boiler.settings.boiler_settings = (function (){var G__68395 = (function app$shared$boiler_plant$boiler$settings$boiler_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__68396 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__68399 = app.shared.components.modal.settings;
var G__68400 = (function (){var obj68402 = ({"title":"Boiler Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-boiler-settings","restore-defaults-boiler-settings",-1306485599)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-boiler-settings","apply-boiler-settings",1704610382)], null));
}),"children":(function (){var G__68403 = app.shared.boiler_plant.boiler.settings.settings_form;
var G__68404 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68403,G__68404) : helix.core.jsx.call(null,G__68403,G__68404));
})()});
return obj68402;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68399,G__68400) : helix.core.jsx.call(null,G__68399,G__68400));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__68405 = G__68395;
(G__68405.displayName = "app.shared.boiler-plant.boiler.settings/boiler-settings");

return G__68405;
} else {
return G__68395;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.settings.js.map
