goog.provide('app.ui.shared.boiler_plant.feedwater.settings');

app.ui.shared.boiler_plant.feedwater.settings.temperature_init_value = (function (){var G__40146 = (function app$ui$shared$boiler_plant$feedwater$settings$temperature_init_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40158 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-temperature","feed-water-temperature",-108593952).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial temperature value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__40183 = app.ui.shared.components.form.field_row;
var G__40184 = (function (){var obj40191 = ({"label":"TEMPERATURE","children":[(function (){var G__40196 = app.ui.shared.components.form.input_number;
var G__40197 = helix.impl.props.merge_obj((function (){var obj40205 = ({"value":value,"on-change":(function (p1__40113_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feedwater","change","feedwater/change",-1644588191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__40113_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__40121_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feedwater","change","feedwater/change",-1644588191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__40121_SHARP_], null)], null));
}));
})});
return obj40205;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40196,G__40197) : helix.core.jsx.call(null,G__40196,G__40197));
})(),(function (){var G__40236 = app.ui.shared.components.form.select;
var G__40237 = (function (){var obj40243 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B0C",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B0C"], null)], null),"value":unit,"on-change":(function (p1__40124_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feedwater","change","feedwater/change",-1644588191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__40124_SHARP_], null)], null));
})});
return obj40243;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40236,G__40237) : helix.core.jsx.call(null,G__40236,G__40237));
})()]});
return obj40191;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40183,G__40184) : helix.core.jsxs.call(null,G__40183,G__40184));
});
if(goog.DEBUG === true){
var G__40266 = G__40146;
(G__40266.displayName = "app.ui.shared.boiler-plant.feedwater.settings/temperature-init-value");

return G__40266;
} else {
return G__40146;
}
})();




app.ui.shared.boiler_plant.feedwater.settings.conductivity_init_value = (function (){var G__40318 = (function app$ui$shared$boiler_plant$feedwater$settings$conductivity_init_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40329 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feedwater","conductivity-converted-value","feedwater/conductivity-converted-value",-855934586)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-conductivity","feed-water-conductivity",1257670550).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial conductivity value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__40362 = app.ui.shared.components.form.field_row;
var G__40363 = (function (){var obj40369 = ({"label":"CONDUCTIVITY","children":[(function (){var G__40379 = app.ui.shared.components.form.input_number;
var G__40380 = helix.impl.props.merge_obj((function (){var obj40391 = ({"value":converted_value,"on-change":(function (p1__40277_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feedwater","change-conductivity-value","feedwater/change-conductivity-value",504856167),p1__40277_SHARP_], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__40280_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feedwater","change-conductivity-value","feedwater/change-conductivity-value",504856167),p1__40280_SHARP_], null));
}));
})});
return obj40391;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40379,G__40380) : helix.core.jsx.call(null,G__40379,G__40380));
})(),(function (){var G__40437 = app.ui.shared.components.form.select;
var G__40438 = (function (){var obj40446 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B5S/cm",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B5S/cm"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ppm",new cljs.core.Keyword(null,"label","label",1718410804),"ppm"], null)], null),"value":unit,"on-change":(function (p1__40287_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feedwater","change","feedwater/change",-1644588191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__40287_SHARP_], null)], null));
})});
return obj40446;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40437,G__40438) : helix.core.jsx.call(null,G__40437,G__40438));
})()]});
return obj40369;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40362,G__40363) : helix.core.jsxs.call(null,G__40362,G__40363));
});
if(goog.DEBUG === true){
var G__40475 = G__40318;
(G__40475.displayName = "app.ui.shared.boiler-plant.feedwater.settings/conductivity-init-value");

return G__40475;
} else {
return G__40318;
}
})();




app.ui.shared.boiler_plant.feedwater.settings.sludge_ratio_init_value = (function (){var G__40686 = (function app$ui$shared$boiler_plant$feedwater$settings$sludge_ratio_init_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40698 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-sludge-ratio","feed-water-sludge-ratio",-2036492663).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial sludge ratio value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__40719 = app.ui.shared.components.form.field_row;
var G__40720 = (function (){var obj40722 = ({"label":"SLUDGE RATIO","children":[(function (){var G__40727 = app.ui.shared.components.form.input_number;
var G__40728 = helix.impl.props.merge_obj((function (){var obj40731 = ({"value":value,"on-change":(function (p1__40502_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feedwater","change","feedwater/change",-1644588191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__40502_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__40508_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feedwater","change","feedwater/change",-1644588191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__40508_SHARP_], null)], null));
}));
})});
return obj40731;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40727,G__40728) : helix.core.jsx.call(null,G__40727,G__40728));
})(),(function (){var G__40807 = app.ui.shared.components.form.select;
var G__40808 = (function (){var obj40812 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ratio",new cljs.core.Keyword(null,"label","label",1718410804),"ratio"], null)], null),"value":unit,"on-change":(function (p1__40514_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feedwater","change","feedwater/change",-1644588191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__40514_SHARP_], null)], null));
})});
return obj40812;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40807,G__40808) : helix.core.jsx.call(null,G__40807,G__40808));
})()]});
return obj40722;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40719,G__40720) : helix.core.jsxs.call(null,G__40719,G__40720));
});
if(goog.DEBUG === true){
var G__40831 = G__40686;
(G__40831.displayName = "app.ui.shared.boiler-plant.feedwater.settings/sludge-ratio-init-value");

return G__40831;
} else {
return G__40686;
}
})();




app.ui.shared.boiler_plant.feedwater.settings.settings_form = (function (){var G__40845 = (function app$ui$shared$boiler_plant$feedwater$settings$settings_form_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var G__40952 = helix.core.Fragment;
var G__40953 = ({"children": [(function (){var G__40958 = "div";
var G__40959 = (function (){var obj40970 = ({"className":"divider","children":"specifications"});
return obj40970;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40958,G__40959) : helix.core.jsx.call(null,G__40958,G__40959));
})(),(function (){var G__40975 = app.ui.shared.boiler_plant.feedwater.settings.temperature_init_value;
var G__40976 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40975,G__40976) : helix.core.jsx.call(null,G__40975,G__40976));
})(),(function (){var G__40983 = app.ui.shared.boiler_plant.feedwater.settings.conductivity_init_value;
var G__40984 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40983,G__40984) : helix.core.jsx.call(null,G__40983,G__40984));
})(),(function (){var G__40993 = app.ui.shared.boiler_plant.feedwater.settings.sludge_ratio_init_value;
var G__40994 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40993,G__40994) : helix.core.jsx.call(null,G__40993,G__40994));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40952,G__40953) : helix.core.jsxs.call(null,G__40952,G__40953));
});
if(goog.DEBUG === true){
var G__41006 = G__40845;
(G__41006.displayName = "app.ui.shared.boiler-plant.feedwater.settings/settings-form");

return G__41006;
} else {
return G__40845;
}
})();




app.ui.shared.boiler_plant.feedwater.settings.feedwater_settings = (function (){var G__41028 = (function app$ui$shared$boiler_plant$feedwater$settings$feedwater_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
if(cljs.core.truth_((function (){var and__5043__auto__ = show_settings;
if(cljs.core.truth_(and__5043__auto__)){
return show_settings_form_sim_start_values;
} else {
return and__5043__auto__;
}
})())){
var G__41066 = app.ui.shared.components.modal.settings;
var G__41067 = (function (){var obj41073 = ({"title":"Feedwater","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feedwater","restore-defaults-settings","feedwater/restore-defaults-settings",654291510)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feedwater","apply-settings","feedwater/apply-settings",310572251)], null));
}),"children":(function (){var G__41084 = app.ui.shared.boiler_plant.feedwater.settings.settings_form;
var G__41086 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41084,G__41086) : helix.core.jsx.call(null,G__41084,G__41086));
})()});
return obj41073;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41066,G__41067) : helix.core.jsx.call(null,G__41066,G__41067));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__41113 = G__41028;
(G__41113.displayName = "app.ui.shared.boiler-plant.feedwater.settings/feedwater-settings");

return G__41113;
} else {
return G__41028;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.feedwater.settings.js.map
