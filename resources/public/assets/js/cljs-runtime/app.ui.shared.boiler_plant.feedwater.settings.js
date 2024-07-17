goog.provide('app.ui.shared.boiler_plant.feedwater.settings');

app.ui.shared.boiler_plant.feedwater.settings.temperature_init_value = (function (){var G__31569 = (function app$ui$shared$boiler_plant$feedwater$settings$temperature_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-temperature","feed-water-temperature",-108593952).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial temperature value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__31593 = app.ui.shared.components.form.field_row;
var G__31594 = (function (){var obj31596 = ({"label":"TEMPERATURE","children":[(function (){var G__31605 = app.ui.shared.components.form.input_number;
var G__31606 = helix.impl.props.merge_obj((function (){var obj31613 = ({"value":value,"on-change":(function (p1__31511_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__31511_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__31518_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__31518_SHARP_], null)], null));
}));
})});
return obj31613;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31605,G__31606) : helix.core.jsx.call(null,G__31605,G__31606));
})(),(function (){var G__31642 = app.ui.shared.components.form.select;
var G__31643 = (function (){var obj31645 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B0C",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B0C"], null)], null),"value":unit,"on-change":(function (p1__31521_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31521_SHARP_], null)], null));
})});
return obj31645;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31642,G__31643) : helix.core.jsx.call(null,G__31642,G__31643));
})()]});
return obj31596;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31593,G__31594) : helix.core.jsxs.call(null,G__31593,G__31594));
});
if(goog.DEBUG === true){
var G__31652 = G__31569;
(G__31652.displayName = "app.ui.shared.boiler-plant.feedwater.settings/temperature-init-value");

return G__31652;
} else {
return G__31569;
}
})();




app.ui.shared.boiler_plant.feedwater.settings.conductivity_init_value = (function (){var G__31741 = (function app$ui$shared$boiler_plant$feedwater$settings$conductivity_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31753 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-conductivity-converted-value","feedwater-conductivity-converted-value",-429769709)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-conductivity","feed-water-conductivity",1257670550).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial conductivity value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__31785 = app.ui.shared.components.form.field_row;
var G__31786 = (function (){var obj31792 = ({"label":"CONDUCTIVITY","children":[(function (){var G__31803 = app.ui.shared.components.form.input_number;
var G__31804 = helix.impl.props.merge_obj((function (){var obj31812 = ({"value":converted_value,"on-change":(function (p1__31680_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-conductivity-value","change-feedwater-conductivity-value",-765973140),p1__31680_SHARP_], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__31681_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-conductivity-value","change-feedwater-conductivity-value",-765973140),p1__31681_SHARP_], null));
}));
})});
return obj31812;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31803,G__31804) : helix.core.jsx.call(null,G__31803,G__31804));
})(),(function (){var G__31838 = app.ui.shared.components.form.select;
var G__31839 = (function (){var obj31846 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B5S/cm",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B5S/cm"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ppm",new cljs.core.Keyword(null,"label","label",1718410804),"ppm"], null)], null),"value":unit,"on-change":(function (p1__31682_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31682_SHARP_], null)], null));
})});
return obj31846;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__31838,G__31839) : helix.core.jsx.call(null,G__31838,G__31839));
})()]});
return obj31792;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__31785,G__31786) : helix.core.jsxs.call(null,G__31785,G__31786));
});
if(goog.DEBUG === true){
var G__31860 = G__31741;
(G__31860.displayName = "app.ui.shared.boiler-plant.feedwater.settings/conductivity-init-value");

return G__31860;
} else {
return G__31741;
}
})();




app.ui.shared.boiler_plant.feedwater.settings.sludge_ratio_init_value = (function (){var G__31979 = (function app$ui$shared$boiler_plant$feedwater$settings$sludge_ratio_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__31991 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-sludge-ratio","feed-water-sludge-ratio",-2036492663).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial sludge ratio value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__32006 = app.ui.shared.components.form.field_row;
var G__32007 = (function (){var obj32010 = ({"label":"SLUDGE RATIO","children":[(function (){var G__32012 = app.ui.shared.components.form.input_number;
var G__32013 = helix.impl.props.merge_obj((function (){var obj32017 = ({"value":value,"on-change":(function (p1__31883_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__31883_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__31895_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__31895_SHARP_], null)], null));
}));
})});
return obj32017;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32012,G__32013) : helix.core.jsx.call(null,G__32012,G__32013));
})(),(function (){var G__32045 = app.ui.shared.components.form.select;
var G__32046 = (function (){var obj32055 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ratio",new cljs.core.Keyword(null,"label","label",1718410804),"ratio"], null)], null),"value":unit,"on-change":(function (p1__31900_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__31900_SHARP_], null)], null));
})});
return obj32055;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32045,G__32046) : helix.core.jsx.call(null,G__32045,G__32046));
})()]});
return obj32010;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32006,G__32007) : helix.core.jsxs.call(null,G__32006,G__32007));
});
if(goog.DEBUG === true){
var G__32066 = G__31979;
(G__32066.displayName = "app.ui.shared.boiler-plant.feedwater.settings/sludge-ratio-init-value");

return G__32066;
} else {
return G__31979;
}
})();




app.ui.shared.boiler_plant.feedwater.settings.settings_form = (function (){var G__32084 = (function app$ui$shared$boiler_plant$feedwater$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32085 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__32089 = helix.core.Fragment;
var G__32090 = ({"children": [(function (){var G__32095 = "div";
var G__32096 = (function (){var obj32103 = ({"className":"divider","children":"specifications"});
return obj32103;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32095,G__32096) : helix.core.jsx.call(null,G__32095,G__32096));
})(),(function (){var G__32108 = app.ui.shared.boiler_plant.feedwater.settings.temperature_init_value;
var G__32109 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32108,G__32109) : helix.core.jsx.call(null,G__32108,G__32109));
})(),(function (){var G__32112 = app.ui.shared.boiler_plant.feedwater.settings.conductivity_init_value;
var G__32113 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32112,G__32113) : helix.core.jsx.call(null,G__32112,G__32113));
})(),(function (){var G__32126 = app.ui.shared.boiler_plant.feedwater.settings.sludge_ratio_init_value;
var G__32127 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32126,G__32127) : helix.core.jsx.call(null,G__32126,G__32127));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__32089,G__32090) : helix.core.jsxs.call(null,G__32089,G__32090));
});
if(goog.DEBUG === true){
var G__32128 = G__32084;
(G__32128.displayName = "app.ui.shared.boiler-plant.feedwater.settings/settings-form");

return G__32128;
} else {
return G__32084;
}
})();




app.ui.shared.boiler_plant.feedwater.settings.feedwater_settings = (function (){var G__32144 = (function app$ui$shared$boiler_plant$feedwater$settings$feedwater_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
if(cljs.core.truth_((function (){var and__5043__auto__ = show_settings;
if(cljs.core.truth_(and__5043__auto__)){
return show_settings_form_sim_start_values;
} else {
return and__5043__auto__;
}
})())){
var G__32182 = app.ui.shared.components.modal.settings;
var G__32183 = (function (){var obj32189 = ({"title":"Feedwater","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-feedwater-settings","restore-defaults-feedwater-settings",-753838139)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-feedwater-settings","apply-feedwater-settings",595883518)], null));
}),"children":(function (){var G__32200 = app.ui.shared.boiler_plant.feedwater.settings.settings_form;
var G__32203 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32200,G__32203) : helix.core.jsx.call(null,G__32200,G__32203));
})()});
return obj32189;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__32182,G__32183) : helix.core.jsx.call(null,G__32182,G__32183));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__32213 = G__32144;
(G__32213.displayName = "app.ui.shared.boiler-plant.feedwater.settings/feedwater-settings");

return G__32213;
} else {
return G__32144;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.feedwater.settings.js.map
