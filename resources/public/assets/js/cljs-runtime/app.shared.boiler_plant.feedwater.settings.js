goog.provide('app.shared.boiler_plant.feedwater.settings');

app.shared.boiler_plant.feedwater.settings.temperature_init_value = (function (){var G__39104 = (function app$shared$boiler_plant$feedwater$settings$temperature_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39119 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-temperature","feed-water-temperature",-108593952).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial temperature value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__39150 = app.shared.components.form.field_row;
var G__39151 = (function (){var obj39156 = ({"label":"TEMPERATURE","children":[(function (){var G__39163 = app.shared.components.form.input_number;
var G__39164 = helix.impl.props.merge_obj((function (){var obj39172 = ({"value":value,"on-change":(function (p1__39058_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__39058_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__39061_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__39061_SHARP_], null)], null));
}));
})});
return obj39172;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39163,G__39164) : helix.core.jsx.call(null,G__39163,G__39164));
})(),(function (){var G__39206 = app.shared.components.form.select;
var G__39207 = (function (){var obj39213 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B0C",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B0C"], null)], null),"value":unit,"on-change":(function (p1__39062_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39062_SHARP_], null)], null));
})});
return obj39213;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39206,G__39207) : helix.core.jsx.call(null,G__39206,G__39207));
})()]});
return obj39156;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39150,G__39151) : helix.core.jsxs.call(null,G__39150,G__39151));
});
if(goog.DEBUG === true){
var G__39234 = G__39104;
(G__39234.displayName = "app.shared.boiler-plant.feedwater.settings/temperature-init-value");

return G__39234;
} else {
return G__39104;
}
})();




app.shared.boiler_plant.feedwater.settings.conductivity_init_value = (function (){var G__39293 = (function app$shared$boiler_plant$feedwater$settings$conductivity_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39309 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-conductivity-converted-value","feedwater-conductivity-converted-value",-429769709)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-conductivity","feed-water-conductivity",1257670550).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial conductivity value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__39335 = app.shared.components.form.field_row;
var G__39336 = (function (){var obj39344 = ({"label":"CONDUCTIVITY","children":[(function (){var G__39354 = app.shared.components.form.input_number;
var G__39355 = helix.impl.props.merge_obj((function (){var obj39362 = ({"value":converted_value,"on-change":(function (p1__39261_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-conductivity-value","change-feedwater-conductivity-value",-765973140),p1__39261_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__39266_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-conductivity-value","change-feedwater-conductivity-value",-765973140),p1__39266_SHARP_], null));
}));
})});
return obj39362;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39354,G__39355) : helix.core.jsx.call(null,G__39354,G__39355));
})(),(function (){var G__39398 = app.shared.components.form.select;
var G__39399 = (function (){var obj39405 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B5S/cm",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B5S/cm"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ppm",new cljs.core.Keyword(null,"label","label",1718410804),"ppm"], null)], null),"value":unit,"on-change":(function (p1__39269_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39269_SHARP_], null)], null));
})});
return obj39405;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39398,G__39399) : helix.core.jsx.call(null,G__39398,G__39399));
})()]});
return obj39344;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39335,G__39336) : helix.core.jsxs.call(null,G__39335,G__39336));
});
if(goog.DEBUG === true){
var G__39430 = G__39293;
(G__39430.displayName = "app.shared.boiler-plant.feedwater.settings/conductivity-init-value");

return G__39430;
} else {
return G__39293;
}
})();




app.shared.boiler_plant.feedwater.settings.sludge_ratio_init_value = (function (){var G__39473 = (function app$shared$boiler_plant$feedwater$settings$sludge_ratio_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39485 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-sludge-ratio","feed-water-sludge-ratio",-2036492663).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial sludge ratio value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__39514 = app.shared.components.form.field_row;
var G__39515 = (function (){var obj39520 = ({"label":"SLUDGE RATIO","children":[(function (){var G__39528 = app.shared.components.form.input_number;
var G__39529 = helix.impl.props.merge_obj((function (){var obj39533 = ({"value":value,"on-change":(function (p1__39440_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__39440_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__39446_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__39446_SHARP_], null)], null));
}));
})});
return obj39533;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39528,G__39529) : helix.core.jsx.call(null,G__39528,G__39529));
})(),(function (){var G__39572 = app.shared.components.form.select;
var G__39573 = (function (){var obj39577 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ratio",new cljs.core.Keyword(null,"label","label",1718410804),"ratio"], null)], null),"value":unit,"on-change":(function (p1__39449_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39449_SHARP_], null)], null));
})});
return obj39577;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39572,G__39573) : helix.core.jsx.call(null,G__39572,G__39573));
})()]});
return obj39520;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39514,G__39515) : helix.core.jsxs.call(null,G__39514,G__39515));
});
if(goog.DEBUG === true){
var G__39593 = G__39473;
(G__39593.displayName = "app.shared.boiler-plant.feedwater.settings/sludge-ratio-init-value");

return G__39593;
} else {
return G__39473;
}
})();




app.shared.boiler_plant.feedwater.settings.settings_form = (function (){var G__39605 = (function app$shared$boiler_plant$feedwater$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39615 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__39618 = helix.core.Fragment;
var G__39619 = ({"children": [(function (){var G__39627 = "div";
var G__39628 = (function (){var obj39639 = ({"className":"divider","children":"specifications"});
return obj39639;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39627,G__39628) : helix.core.jsx.call(null,G__39627,G__39628));
})(),(function (){var G__39645 = app.shared.boiler_plant.feedwater.settings.temperature_init_value;
var G__39647 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39645,G__39647) : helix.core.jsx.call(null,G__39645,G__39647));
})(),(function (){var G__39656 = app.shared.boiler_plant.feedwater.settings.conductivity_init_value;
var G__39657 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39656,G__39657) : helix.core.jsx.call(null,G__39656,G__39657));
})(),(function (){var G__39666 = app.shared.boiler_plant.feedwater.settings.sludge_ratio_init_value;
var G__39667 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39666,G__39667) : helix.core.jsx.call(null,G__39666,G__39667));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39618,G__39619) : helix.core.jsxs.call(null,G__39618,G__39619));
});
if(goog.DEBUG === true){
var G__39675 = G__39605;
(G__39675.displayName = "app.shared.boiler-plant.feedwater.settings/settings-form");

return G__39675;
} else {
return G__39605;
}
})();




app.shared.boiler_plant.feedwater.settings.feedwater_settings = (function (){var G__39715 = (function app$shared$boiler_plant$feedwater$settings$feedwater_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
if(cljs.core.truth_((function (){var and__5043__auto__ = show_settings;
if(cljs.core.truth_(and__5043__auto__)){
return show_settings_form_sim_start_values;
} else {
return and__5043__auto__;
}
})())){
var G__39762 = app.shared.components.modal.settings;
var G__39763 = (function (){var obj39768 = ({"title":"Feedwater","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-feedwater-settings","restore-defaults-feedwater-settings",-753838139)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-feedwater-settings","apply-feedwater-settings",595883518)], null));
}),"children":(function (){var G__39781 = app.shared.boiler_plant.feedwater.settings.settings_form;
var G__39782 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39781,G__39782) : helix.core.jsx.call(null,G__39781,G__39782));
})()});
return obj39768;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39762,G__39763) : helix.core.jsx.call(null,G__39762,G__39763));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__39813 = G__39715;
(G__39813.displayName = "app.shared.boiler-plant.feedwater.settings/feedwater-settings");

return G__39813;
} else {
return G__39715;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.feedwater.settings.js.map
