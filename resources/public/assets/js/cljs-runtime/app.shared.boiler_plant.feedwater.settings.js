goog.provide('app.shared.boiler_plant.feedwater.settings');

app.shared.boiler_plant.feedwater.settings.temperature_init_value = (function (){var G__80884 = (function app$shared$boiler_plant$feedwater$settings$temperature_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__80885 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-temperature","feed-water-temperature",-108593952).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial temperature value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__80888 = app.shared.components.form.field_row;
var G__80889 = (function (){var obj80891 = ({"label":"TEMPERATURE","children":[(function (){var G__80892 = app.shared.components.form.input_number;
var G__80893 = helix.impl.props.merge_obj((function (){var obj80895 = ({"value":value,"on-change":(function (p1__80880_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__80880_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__80881_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__80881_SHARP_], null)], null));
}));
})});
return obj80895;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80892,G__80893) : helix.core.jsx.call(null,G__80892,G__80893));
})(),(function (){var G__80896 = app.shared.components.form.select;
var G__80897 = (function (){var obj80899 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B0C",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B0C"], null)], null),"value":unit,"on-change":(function (p1__80882_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temperature","temperature",899018429),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__80882_SHARP_], null)], null));
})});
return obj80899;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80896,G__80897) : helix.core.jsx.call(null,G__80896,G__80897));
})()]});
return obj80891;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__80888,G__80889) : helix.core.jsxs.call(null,G__80888,G__80889));
});
if(goog.DEBUG === true){
var G__80900 = G__80884;
(G__80900.displayName = "app.shared.boiler-plant.feedwater.settings/temperature-init-value");

return G__80900;
} else {
return G__80884;
}
})();




app.shared.boiler_plant.feedwater.settings.conductivity_init_value = (function (){var G__80905 = (function app$shared$boiler_plant$feedwater$settings$conductivity_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__80906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-conductivity-converted-value","feedwater-conductivity-converted-value",-429769709)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-conductivity","feed-water-conductivity",1257670550).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial conductivity value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__80909 = app.shared.components.form.field_row;
var G__80910 = (function (){var obj80912 = ({"label":"CONDUCTIVITY","children":[(function (){var G__80913 = app.shared.components.form.input_number;
var G__80914 = helix.impl.props.merge_obj((function (){var obj80916 = ({"value":converted_value,"on-change":(function (p1__80901_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-conductivity-value","change-feedwater-conductivity-value",-765973140),p1__80901_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__80902_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-conductivity-value","change-feedwater-conductivity-value",-765973140),p1__80902_SHARP_], null));
}));
})});
return obj80916;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80913,G__80914) : helix.core.jsx.call(null,G__80913,G__80914));
})(),(function (){var G__80917 = app.shared.components.form.select;
var G__80918 = (function (){var obj80920 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"\u00B5S/cm",new cljs.core.Keyword(null,"label","label",1718410804),"\u00B5S/cm"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ppm",new cljs.core.Keyword(null,"label","label",1718410804),"ppm"], null)], null),"value":unit,"on-change":(function (p1__80903_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conductivity","conductivity",-431850496),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__80903_SHARP_], null)], null));
})});
return obj80920;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80917,G__80918) : helix.core.jsx.call(null,G__80917,G__80918));
})()]});
return obj80912;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__80909,G__80910) : helix.core.jsxs.call(null,G__80909,G__80910));
});
if(goog.DEBUG === true){
var G__80921 = G__80905;
(G__80921.displayName = "app.shared.boiler-plant.feedwater.settings/conductivity-init-value");

return G__80921;
} else {
return G__80905;
}
})();




app.shared.boiler_plant.feedwater.settings.sludge_ratio_init_value = (function (){var G__80926 = (function app$shared$boiler_plant$feedwater$settings$sludge_ratio_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__80927 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-sludge-ratio","feed-water-sludge-ratio",-2036492663).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial sludge ratio value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__80930 = app.shared.components.form.field_row;
var G__80931 = (function (){var obj80933 = ({"label":"SLUDGE RATIO","children":[(function (){var G__80934 = app.shared.components.form.input_number;
var G__80935 = helix.impl.props.merge_obj((function (){var obj80937 = ({"value":value,"on-change":(function (p1__80922_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__80922_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__80923_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__80923_SHARP_], null)], null));
}));
})});
return obj80937;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80934,G__80935) : helix.core.jsx.call(null,G__80934,G__80935));
})(),(function (){var G__80938 = app.shared.components.form.select;
var G__80939 = (function (){var obj80941 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"ratio",new cljs.core.Keyword(null,"label","label",1718410804),"ratio"], null)], null),"value":unit,"on-change":(function (p1__80924_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater","change-feedwater",-123827387),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-ratio","sludge-ratio",-1317267132),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__80924_SHARP_], null)], null));
})});
return obj80941;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80938,G__80939) : helix.core.jsx.call(null,G__80938,G__80939));
})()]});
return obj80933;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__80930,G__80931) : helix.core.jsxs.call(null,G__80930,G__80931));
});
if(goog.DEBUG === true){
var G__80942 = G__80926;
(G__80942.displayName = "app.shared.boiler-plant.feedwater.settings/sludge-ratio-init-value");

return G__80942;
} else {
return G__80926;
}
})();




app.shared.boiler_plant.feedwater.settings.settings_form = (function (){var G__80944 = (function app$shared$boiler_plant$feedwater$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__80945 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__80948 = helix.core.Fragment;
var G__80949 = ({"children": [(function (){var G__80950 = "div";
var G__80951 = (function (){var obj80953 = ({"className":"divider","children":"specifications"});
return obj80953;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80950,G__80951) : helix.core.jsx.call(null,G__80950,G__80951));
})(),(function (){var G__80954 = app.shared.boiler_plant.feedwater.settings.temperature_init_value;
var G__80955 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80954,G__80955) : helix.core.jsx.call(null,G__80954,G__80955));
})(),(function (){var G__80956 = app.shared.boiler_plant.feedwater.settings.conductivity_init_value;
var G__80957 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80956,G__80957) : helix.core.jsx.call(null,G__80956,G__80957));
})(),(function (){var G__80958 = app.shared.boiler_plant.feedwater.settings.sludge_ratio_init_value;
var G__80959 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80958,G__80959) : helix.core.jsx.call(null,G__80958,G__80959));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__80948,G__80949) : helix.core.jsxs.call(null,G__80948,G__80949));
});
if(goog.DEBUG === true){
var G__80960 = G__80944;
(G__80960.displayName = "app.shared.boiler-plant.feedwater.settings/settings-form");

return G__80960;
} else {
return G__80944;
}
})();




app.shared.boiler_plant.feedwater.settings.feedwater_settings = (function (){var G__80962 = (function app$shared$boiler_plant$feedwater$settings$feedwater_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__80963 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater","feedwater",-18185413),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
if(cljs.core.truth_((function (){var and__5043__auto__ = show_settings;
if(cljs.core.truth_(and__5043__auto__)){
return show_settings_form_sim_start_values;
} else {
return and__5043__auto__;
}
})())){
var G__80966 = app.shared.components.modal.settings;
var G__80967 = (function (){var obj80969 = ({"title":"Feedwater","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-feedwater-settings","restore-defaults-feedwater-settings",-753838139)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-feedwater-settings","apply-feedwater-settings",595883518)], null));
}),"children":(function (){var G__80970 = app.shared.boiler_plant.feedwater.settings.settings_form;
var G__80971 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80970,G__80971) : helix.core.jsx.call(null,G__80970,G__80971));
})()});
return obj80969;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__80966,G__80967) : helix.core.jsx.call(null,G__80966,G__80967));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__80972 = G__80962;
(G__80972.displayName = "app.shared.boiler-plant.feedwater.settings/feedwater-settings");

return G__80972;
} else {
return G__80962;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.feedwater.settings.js.map
