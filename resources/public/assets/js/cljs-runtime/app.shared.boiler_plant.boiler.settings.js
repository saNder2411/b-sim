goog.provide('app.shared.boiler_plant.boiler.settings');

app.shared.boiler_plant.boiler.settings.pressure_hud_settings = (function (){var G__32937 = (function app$shared$boiler_plant$boiler$settings$pressure_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32938 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__32941 = app.shared.components.form.field_row;
var G__32942 = (function (){var obj32944 = ({"label":"PRESSURE","children":[(function (){var G__32945 = app.shared.components.form.select;
var G__32946 = (function (){var obj32948 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__32935_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__32935_SHARP_], null)], null));
})});
return obj32948;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32945,G__32946) : helix.core.jsx.call(null,G__32945,G__32946));
})(),(function (){var G__32949 = app.shared.components.form.checkbox;
var G__32950 = (function (){var obj32952 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj32952;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32949,G__32950) : helix.core.jsx.call(null,G__32949,G__32950));
})()]});
return obj32944;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32941,G__32942) : helix.core.jsxs.call(null,G__32941,G__32942));
});
if(goog.DEBUG === true){
var G__32953 = G__32937;
(G__32953.displayName = "app.shared.boiler-plant.boiler.settings/pressure-hud-settings");

return G__32953;
} else {
return G__32937;
}
})();




app.shared.boiler_plant.boiler.settings.temperature_hud_settings = (function (){var G__32956 = (function app$shared$boiler_plant$boiler$settings$temperature_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32957 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__32960 = app.shared.components.form.field_row;
var G__32961 = (function (){var obj32963 = ({"label":"TEMPERATURE","children":[(function (){var G__32964 = app.shared.components.form.select;
var G__32965 = (function (){var obj32967 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B0C",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B0C"], null)], null),"value":unit,"on-change":(function (p1__32954_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__32954_SHARP_], null)], null));
})});
return obj32967;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32964,G__32965) : helix.core.jsx.call(null,G__32964,G__32965));
})(),(function (){var G__32968 = app.shared.components.form.checkbox;
var G__32969 = (function (){var obj32971 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj32971;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32968,G__32969) : helix.core.jsx.call(null,G__32968,G__32969));
})()]});
return obj32963;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32960,G__32961) : helix.core.jsxs.call(null,G__32960,G__32961));
});
if(goog.DEBUG === true){
var G__32972 = G__32956;
(G__32972.displayName = "app.shared.boiler-plant.boiler.settings/temperature-hud-settings");

return G__32972;
} else {
return G__32956;
}
})();




app.shared.boiler_plant.boiler.settings.water_level_hud_settings = (function (){var G__32975 = (function app$shared$boiler_plant$boiler$settings$water_level_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32976 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__32979 = app.shared.components.form.field_row;
var G__32980 = (function (){var obj32982 = ({"label":"WATER LEVEL","children":[(function (){var G__32983 = app.shared.components.form.select;
var G__32984 = (function (){var obj32986 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__32973_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__32973_SHARP_], null)], null));
})});
return obj32986;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32983,G__32984) : helix.core.jsx.call(null,G__32983,G__32984));
})(),(function (){var G__32987 = app.shared.components.form.checkbox;
var G__32988 = (function (){var obj32990 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj32990;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32987,G__32988) : helix.core.jsx.call(null,G__32987,G__32988));
})()]});
return obj32982;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32979,G__32980) : helix.core.jsxs.call(null,G__32979,G__32980));
});
if(goog.DEBUG === true){
var G__32991 = G__32975;
(G__32991.displayName = "app.shared.boiler-plant.boiler.settings/water-level-hud-settings");

return G__32991;
} else {
return G__32975;
}
})();




app.shared.boiler_plant.boiler.settings.conductivity_hud_settings = (function (){var G__32994 = (function app$shared$boiler_plant$boiler$settings$conductivity_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32995 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__32998 = app.shared.components.form.field_row;
var G__32999 = (function (){var obj33001 = ({"label":"WATER CONDUCTIVITY","children":[(function (){var G__33002 = app.shared.components.form.select;
var G__33003 = (function (){var obj33005 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B5S/cm",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B5S/cm"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ppm",new cljs.core.Keyword(null,"label","label",1718410804),"ppm"], null)], null),"value":unit,"on-change":(function (p1__32992_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__32992_SHARP_], null)], null));
})});
return obj33005;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33002,G__33003) : helix.core.jsx.call(null,G__33002,G__33003));
})(),(function (){var G__33006 = app.shared.components.form.checkbox;
var G__33007 = (function (){var obj33009 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj33009;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33006,G__33007) : helix.core.jsx.call(null,G__33006,G__33007));
})()]});
return obj33001;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32998,G__32999) : helix.core.jsxs.call(null,G__32998,G__32999));
});
if(goog.DEBUG === true){
var G__33010 = G__32994;
(G__33010.displayName = "app.shared.boiler-plant.boiler.settings/conductivity-hud-settings");

return G__33010;
} else {
return G__32994;
}
})();




app.shared.boiler_plant.boiler.settings.pressure_init_value = (function (){var G__33015 = (function app$shared$boiler_plant$boiler$settings$pressure_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33016 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-settings-form-pressure-converted-value","boiler-settings-form-pressure-converted-value",-518045220)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-pressure","boiler-pressure",-653538442).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pressure value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33019 = app.shared.components.form.field_row;
var G__33020 = (function (){var obj33022 = ({"label":"PRESSURE (ABS)","children":[(function (){var G__33023 = app.shared.components.form.input_number;
var G__33024 = helix.impl.props.merge_obj((function (){var obj33026 = ({"value":converted_value,"on-change":(function (p1__33011_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form-pressure-value","change-boiler-settings-form-pressure-value",1354508668),p1__33011_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33012_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form-pressure-value","change-boiler-settings-form-pressure-value",1354508668),p1__33012_SHARP_], null));
}));
})});
return obj33026;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33023,G__33024) : helix.core.jsx.call(null,G__33023,G__33024));
})(),(function (){var G__33027 = app.shared.components.form.select;
var G__33028 = (function (){var obj33030 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"bar",new cljs.core.Keyword(null,"label","label",1718410804),"bar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"psi",new cljs.core.Keyword(null,"label","label",1718410804),"psi"], null)], null),"value":unit,"on-change":(function (p1__33013_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pressure","pressure",505343747),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33013_SHARP_], null)], null));
})});
return obj33030;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33027,G__33028) : helix.core.jsx.call(null,G__33027,G__33028));
})()]});
return obj33022;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33019,G__33020) : helix.core.jsxs.call(null,G__33019,G__33020));
});
if(goog.DEBUG === true){
var G__33031 = G__33015;
(G__33031.displayName = "app.shared.boiler-plant.boiler.settings/pressure-init-value");

return G__33031;
} else {
return G__33015;
}
})();




app.shared.boiler_plant.boiler.settings.water_level_init_value = (function (){var G__33036 = (function app$shared$boiler_plant$boiler$settings$water_level_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33037 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-water-level","boiler-water-level",401888750).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial water level value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33040 = app.shared.components.form.field_row;
var G__33041 = (function (){var obj33043 = ({"label":"WATER LEVEL","children":[(function (){var G__33044 = app.shared.components.form.input_number;
var G__33045 = helix.impl.props.merge_obj((function (){var obj33047 = ({"value":value,"on-change":(function (p1__33032_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__33032_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33033_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__33033_SHARP_], null)], null));
}));
})});
return obj33047;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33044,G__33045) : helix.core.jsx.call(null,G__33044,G__33045));
})(),(function (){var G__33048 = app.shared.components.form.select;
var G__33049 = (function (){var obj33051 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__33034_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"water-level","water-level",-285016653),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33034_SHARP_], null)], null));
})});
return obj33051;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33048,G__33049) : helix.core.jsx.call(null,G__33048,G__33049));
})()]});
return obj33043;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33040,G__33041) : helix.core.jsxs.call(null,G__33040,G__33041));
});
if(goog.DEBUG === true){
var G__33052 = G__33036;
(G__33052.displayName = "app.shared.boiler-plant.boiler.settings/water-level-init-value");

return G__33052;
} else {
return G__33036;
}
})();




app.shared.boiler_plant.boiler.settings.conductivity_init_value = (function (){var G__33057 = (function app$shared$boiler_plant$boiler$settings$conductivity_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33058 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-settings-form-conductivity-converted-value","boiler-settings-form-conductivity-converted-value",1937546719)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-conductivity","boiler-conductivity",-389479257).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial water conductivity value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33061 = app.shared.components.form.field_row;
var G__33062 = (function (){var obj33064 = ({"label":"WATER CONDUCTIVITY","children":[(function (){var G__33065 = app.shared.components.form.input_number;
var G__33066 = helix.impl.props.merge_obj((function (){var obj33068 = ({"value":converted_value,"on-change":(function (p1__33053_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form-conductivity-value","change-boiler-settings-form-conductivity-value",733480725),p1__33053_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33054_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form-conductivity-value","change-boiler-settings-form-conductivity-value",733480725),p1__33054_SHARP_], null));
}));
})});
return obj33068;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33065,G__33066) : helix.core.jsx.call(null,G__33065,G__33066));
})(),(function (){var G__33069 = app.shared.components.form.select;
var G__33070 = (function (){var obj33072 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B5S/cm",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B5S/cm"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ppm",new cljs.core.Keyword(null,"label","label",1718410804),"ppm"], null)], null),"value":unit,"on-change":(function (p1__33055_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33055_SHARP_], null)], null));
})});
return obj33072;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33069,G__33070) : helix.core.jsx.call(null,G__33069,G__33070));
})()]});
return obj33064;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33061,G__33062) : helix.core.jsxs.call(null,G__33061,G__33062));
});
if(goog.DEBUG === true){
var G__33073 = G__33057;
(G__33073.displayName = "app.shared.boiler-plant.boiler.settings/conductivity-init-value");

return G__33073;
} else {
return G__33057;
}
})();




app.shared.boiler_plant.boiler.settings.sludge_mass_init_value = (function (){var G__33078 = (function app$shared$boiler_plant$boiler$settings$sludge_mass_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33079 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-sludge-mass","boiler-sludge-mass",-782560792).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial sludge mass must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33082 = app.shared.components.form.field_row;
var G__33083 = (function (){var obj33085 = ({"label":"SLUDGE MASS","children":[(function (){var G__33086 = app.shared.components.form.input_number;
var G__33087 = helix.impl.props.merge_obj((function (){var obj33089 = ({"value":value,"on-change":(function (p1__33074_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__33074_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33075_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__33075_SHARP_], null)], null));
}));
})});
return obj33089;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33086,G__33087) : helix.core.jsx.call(null,G__33086,G__33087));
})(),(function (){var G__33090 = app.shared.components.form.select;
var G__33091 = (function (){var obj33093 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kg",new cljs.core.Keyword(null,"label","label",1718410804),"kg"], null)], null),"value":unit,"on-change":(function (p1__33076_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33076_SHARP_], null)], null));
})});
return obj33093;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33090,G__33091) : helix.core.jsx.call(null,G__33090,G__33091));
})()]});
return obj33085;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33082,G__33083) : helix.core.jsxs.call(null,G__33082,G__33083));
});
if(goog.DEBUG === true){
var G__33094 = G__33078;
(G__33094.displayName = "app.shared.boiler-plant.boiler.settings/sludge-mass-init-value");

return G__33094;
} else {
return G__33078;
}
})();




app.shared.boiler_plant.boiler.settings.volume_init_value = (function (){var G__33099 = (function app$shared$boiler_plant$boiler$settings$volume_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33100 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-volume","boiler-volume",171355954).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial total volume must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33103 = app.shared.components.form.field_row;
var G__33104 = (function (){var obj33106 = ({"label":"TOTAL VOLUME","children":[(function (){var G__33107 = app.shared.components.form.input_number;
var G__33108 = helix.impl.props.merge_obj((function (){var obj33110 = ({"value":value,"on-change":(function (p1__33095_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__33095_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33096_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__33096_SHARP_], null)], null));
}));
})});
return obj33110;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33107,G__33108) : helix.core.jsx.call(null,G__33107,G__33108));
})(),(function (){var G__33111 = app.shared.components.form.select;
var G__33112 = (function (){var obj33114 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"m\u00B3",new cljs.core.Keyword(null,"label","label",1718410804),"m\u00B3"], null)], null),"value":unit,"on-change":(function (p1__33097_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33097_SHARP_], null)], null));
})});
return obj33114;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33111,G__33112) : helix.core.jsx.call(null,G__33111,G__33112));
})()]});
return obj33106;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33103,G__33104) : helix.core.jsxs.call(null,G__33103,G__33104));
});
if(goog.DEBUG === true){
var G__33115 = G__33099;
(G__33115.displayName = "app.shared.boiler-plant.boiler.settings/volume-init-value");

return G__33115;
} else {
return G__33099;
}
})();




app.shared.boiler_plant.boiler.settings.max_sludge_mass_init_value = (function (){var G__33120 = (function app$shared$boiler_plant$boiler$settings$max_sludge_mass_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"max","max",61366548)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler","boiler",1907528372),new cljs.core.Keyword(null,"settings-form","settings-form",1258607662),new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"boiler-sludge-mass","boiler-sludge-mass",-782560792).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial max visible sludge mass must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33124 = app.shared.components.form.field_row;
var G__33125 = (function (){var obj33127 = ({"label":"MAX VISIBLE SLUDGE MASS","children":[(function (){var G__33128 = app.shared.components.form.input_number;
var G__33129 = helix.impl.props.merge_obj((function (){var obj33131 = ({"value":value,"on-change":(function (p1__33116_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"max","max",61366548)], null),p1__33116_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33117_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"max","max",61366548)], null),p1__33117_SHARP_], null)], null));
}));
})});
return obj33131;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33128,G__33129) : helix.core.jsx.call(null,G__33128,G__33129));
})(),(function (){var G__33132 = app.shared.components.form.select;
var G__33133 = (function (){var obj33135 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kg",new cljs.core.Keyword(null,"label","label",1718410804),"kg"], null)], null),"value":unit,"on-change":(function (p1__33118_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-mass","sludge-mass",-1293837775),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33118_SHARP_], null)], null));
})});
return obj33135;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33132,G__33133) : helix.core.jsx.call(null,G__33132,G__33133));
})()]});
return obj33127;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33124,G__33125) : helix.core.jsxs.call(null,G__33124,G__33125));
});
if(goog.DEBUG === true){
var G__33136 = G__33120;
(G__33136.displayName = "app.shared.boiler-plant.boiler.settings/max-sludge-mass-init-value");

return G__33136;
} else {
return G__33120;
}
})();




app.shared.boiler_plant.boiler.settings.settings_form = (function (){var G__33138 = (function app$shared$boiler_plant$boiler$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__33142 = helix.core.Fragment;
var G__33143 = ({"children": [(function (){var G__33144 = "div";
var G__33145 = (function (){var obj33147 = ({"className":"divider","children":"head-up-display"});
return obj33147;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33144,G__33145) : helix.core.jsx.call(null,G__33144,G__33145));
})(),(function (){var G__33148 = app.shared.boiler_plant.boiler.settings.pressure_hud_settings;
var G__33149 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33148,G__33149) : helix.core.jsx.call(null,G__33148,G__33149));
})(),(function (){var G__33150 = app.shared.boiler_plant.boiler.settings.temperature_hud_settings;
var G__33151 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33150,G__33151) : helix.core.jsx.call(null,G__33150,G__33151));
})(),(function (){var G__33152 = app.shared.boiler_plant.boiler.settings.water_level_hud_settings;
var G__33153 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33152,G__33153) : helix.core.jsx.call(null,G__33152,G__33153));
})(),(function (){var G__33154 = app.shared.boiler_plant.boiler.settings.conductivity_hud_settings;
var G__33155 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33154,G__33155) : helix.core.jsx.call(null,G__33154,G__33155));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__33156 = helix.core.Fragment;
var G__33157 = ({"children": [(function (){var G__33158 = "div";
var G__33159 = (function (){var obj33161 = ({"className":"divider","children":"simulation start values"});
return obj33161;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33158,G__33159) : helix.core.jsx.call(null,G__33158,G__33159));
})(),(function (){var G__33162 = app.shared.boiler_plant.boiler.settings.pressure_init_value;
var G__33163 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33162,G__33163) : helix.core.jsx.call(null,G__33162,G__33163));
})(),(function (){var G__33164 = app.shared.boiler_plant.boiler.settings.water_level_init_value;
var G__33165 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33164,G__33165) : helix.core.jsx.call(null,G__33164,G__33165));
})(),(function (){var G__33166 = app.shared.boiler_plant.boiler.settings.conductivity_init_value;
var G__33167 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33166,G__33167) : helix.core.jsx.call(null,G__33166,G__33167));
})(),(function (){var G__33168 = app.shared.boiler_plant.boiler.settings.sludge_mass_init_value;
var G__33169 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33168,G__33169) : helix.core.jsx.call(null,G__33168,G__33169));
})(),(function (){var G__33170 = "div";
var G__33171 = (function (){var obj33173 = ({"className":"divider","children":"specifications"});
return obj33173;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33170,G__33171) : helix.core.jsx.call(null,G__33170,G__33171));
})(),(function (){var G__33174 = app.shared.boiler_plant.boiler.settings.volume_init_value;
var G__33175 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33174,G__33175) : helix.core.jsx.call(null,G__33174,G__33175));
})(),(function (){var G__33176 = app.shared.boiler_plant.boiler.settings.max_sludge_mass_init_value;
var G__33177 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33176,G__33177) : helix.core.jsx.call(null,G__33176,G__33177));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33156,G__33157) : helix.core.jsxs.call(null,G__33156,G__33157));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33142,G__33143) : helix.core.jsxs.call(null,G__33142,G__33143));
});
if(goog.DEBUG === true){
var G__33178 = G__33138;
(G__33178.displayName = "app.shared.boiler-plant.boiler.settings/settings-form");

return G__33178;
} else {
return G__33138;
}
})();




app.shared.boiler_plant.boiler.settings.boiler_settings = (function (){var G__33180 = (function app$shared$boiler_plant$boiler$settings$boiler_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33181 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-settings-form-view","boiler-settings-form-view",1860359796)], null));
if(cljs.core.truth_(show_settings)){
var G__33184 = app.shared.components.modal.settings;
var G__33185 = (function (){var obj33187 = ({"title":"Boiler Settings","on-close":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-boiler-settings-form","change-boiler-settings-form",-1349598293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null),false], null)], null));
}),"children":(function (){var G__33188 = app.shared.boiler_plant.boiler.settings.settings_form;
var G__33189 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33188,G__33189) : helix.core.jsx.call(null,G__33188,G__33189));
})()});
return obj33187;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33184,G__33185) : helix.core.jsx.call(null,G__33184,G__33185));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__33190 = G__33180;
(G__33190.displayName = "app.shared.boiler-plant.boiler.settings/boiler-settings");

return G__33190;
} else {
return G__33180;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.boiler.settings.js.map
