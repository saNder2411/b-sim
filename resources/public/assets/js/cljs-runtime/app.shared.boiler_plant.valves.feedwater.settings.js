goog.provide('app.shared.boiler_plant.valves.feedwater.settings');

app.shared.boiler_plant.valves.feedwater.settings.mode_hud_settings = (function (){var G__77991 = (function app$shared$boiler_plant$valves$feedwater$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__77994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__77999 = app.shared.components.form.field_row;
var G__78001 = (function (){var obj78006 = ({"label":"CONTROL MODE","children":[(function (){var G__78009 = app.shared.components.form.select;
var G__78010 = (function (){var obj78014 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manual",new cljs.core.Keyword(null,"label","label",1718410804),"Manual"], null)], null),"value":value,"on-change":(function (p1__77988_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__77988_SHARP_], null)], null));
})});
return obj78014;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78009,G__78010) : helix.core.jsx.call(null,G__78009,G__78010));
})(),(function (){var G__78017 = app.shared.components.form.checkbox;
var G__78018 = (function (){var obj78022 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj78022;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78017,G__78018) : helix.core.jsx.call(null,G__78017,G__78018));
})()]});
return obj78006;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__77999,G__78001) : helix.core.jsxs.call(null,G__77999,G__78001));
});
if(goog.DEBUG === true){
var G__78024 = G__77991;
(G__78024.displayName = "app.shared.boiler-plant.valves.feedwater.settings/mode-hud-settings");

return G__78024;
} else {
return G__77991;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.damper_hud_settings = (function (){var G__78029 = (function app$shared$boiler_plant$valves$feedwater$settings$damper_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__78031 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__78037 = app.shared.components.form.field_row;
var G__78038 = (function (){var obj78042 = ({"label":"VALVE STATE","children":[(function (){var G__78045 = app.shared.components.form.select;
var G__78046 = (function (){var obj78050 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__78026_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__78026_SHARP_], null)], null));
})});
return obj78050;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78045,G__78046) : helix.core.jsx.call(null,G__78045,G__78046));
})(),(function (){var G__78053 = app.shared.components.form.checkbox;
var G__78054 = (function (){var obj78058 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj78058;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78053,G__78054) : helix.core.jsx.call(null,G__78053,G__78054));
})()]});
return obj78042;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__78037,G__78038) : helix.core.jsxs.call(null,G__78037,G__78038));
});
if(goog.DEBUG === true){
var G__78061 = G__78029;
(G__78061.displayName = "app.shared.boiler-plant.valves.feedwater.settings/damper-hud-settings");

return G__78061;
} else {
return G__78029;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.flow_rate_hud_settings = (function (){var G__78068 = (function app$shared$boiler_plant$valves$feedwater$settings$flow_rate_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__78072 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__78079 = app.shared.components.form.field_row;
var G__78080 = (function (){var obj78084 = ({"label":"FLOW-RATE","children":[(function (){var G__78087 = app.shared.components.form.select;
var G__78088 = (function (){var obj78090 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__78064_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__78064_SHARP_], null)], null));
})});
return obj78090;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78087,G__78088) : helix.core.jsx.call(null,G__78087,G__78088));
})(),(function (){var G__78095 = app.shared.components.form.checkbox;
var G__78096 = (function (){var obj78098 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj78098;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78095,G__78096) : helix.core.jsx.call(null,G__78095,G__78096));
})()]});
return obj78084;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__78079,G__78080) : helix.core.jsxs.call(null,G__78079,G__78080));
});
if(goog.DEBUG === true){
var G__78100 = G__78068;
(G__78100.displayName = "app.shared.boiler-plant.valves.feedwater.settings/flow-rate-hud-settings");

return G__78100;
} else {
return G__78068;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.damper_init_value = (function (){var G__78110 = (function app$shared$boiler_plant$valves$feedwater$settings$damper_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__78114 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-position","feed-water-elect-valve-position",1487608942).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial valve position value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__78121 = app.shared.components.form.field_row;
var G__78122 = (function (){var obj78126 = ({"label":"VALVE POSITION","children":[(function (){var G__78129 = app.shared.components.form.input_number;
var G__78130 = helix.impl.props.merge_obj((function (){var obj78132 = ({"value":value,"on-change":(function (p1__78105_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__78105_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__78106_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__78106_SHARP_], null)], null));
}));
})});
return obj78132;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78129,G__78130) : helix.core.jsx.call(null,G__78129,G__78130));
})(),(function (){var G__78137 = app.shared.components.form.select;
var G__78138 = (function (){var obj78140 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__78107_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__78107_SHARP_], null)], null));
})});
return obj78140;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78137,G__78138) : helix.core.jsx.call(null,G__78137,G__78138));
})()]});
return obj78126;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__78121,G__78122) : helix.core.jsxs.call(null,G__78121,G__78122));
});
if(goog.DEBUG === true){
var G__78142 = G__78110;
(G__78142.displayName = "app.shared.boiler-plant.valves.feedwater.settings/damper-init-value");

return G__78142;
} else {
return G__78110;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.flow_rate_init_max_value = (function (){var G__78152 = (function app$shared$boiler_plant$valves$feedwater$settings$flow_rate_init_max_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__78156 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve-flow-rate-max-converted-value","feedwater-valve-flow-rate-max-converted-value",-1099033612)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-flow-rate","feed-water-elect-valve-flow-rate",997798988).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial flow rate maximum value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__78161 = app.shared.components.form.field_row;
var G__78162 = (function (){var obj78166 = ({"label":"MAXIMUM FLOW-RATE","children":[(function (){var G__78169 = app.shared.components.form.input_number;
var G__78170 = helix.impl.props.merge_obj((function (){var obj78174 = ({"value":converted_value,"on-change":(function (p1__78145_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve-flow-rate-max-value","change-feedwater-valve-flow-rate-max-value",-168488603),p1__78145_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__78148_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve-flow-rate-max-value","change-feedwater-valve-flow-rate-max-value",-168488603),p1__78148_SHARP_], null));
}));
})});
return obj78174;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78169,G__78170) : helix.core.jsx.call(null,G__78169,G__78170));
})(),(function (){var G__78175 = app.shared.components.form.select;
var G__78176 = (function (){var obj78180 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__78149_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__78149_SHARP_], null)], null));
})});
return obj78180;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78175,G__78176) : helix.core.jsx.call(null,G__78175,G__78176));
})()]});
return obj78166;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__78161,G__78162) : helix.core.jsxs.call(null,G__78161,G__78162));
});
if(goog.DEBUG === true){
var G__78183 = G__78152;
(G__78183.displayName = "app.shared.boiler-plant.valves.feedwater.settings/flow-rate-init-max-value");

return G__78183;
} else {
return G__78152;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.travel_time_init_value = (function (){var G__78193 = (function app$shared$boiler_plant$valves$feedwater$settings$travel_time_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__78195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-travel-time","feed-water-elect-valve-travel-time",740616170).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial valve travel time value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__78201 = app.shared.components.form.field_row;
var G__78202 = (function (){var obj78204 = ({"label":"VALVE TRAVEL TIME","children":[(function (){var G__78205 = app.shared.components.form.input_number;
var G__78206 = helix.impl.props.merge_obj((function (){var obj78210 = ({"value":value,"on-change":(function (p1__78185_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__78185_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__78187_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__78187_SHARP_], null)], null));
}));
})});
return obj78210;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78205,G__78206) : helix.core.jsx.call(null,G__78205,G__78206));
})(),(function (){var G__78217 = app.shared.components.form.select;
var G__78218 = (function (){var obj78220 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"s",new cljs.core.Keyword(null,"label","label",1718410804),"s"], null)], null),"value":unit,"on-change":(function (p1__78188_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__78188_SHARP_], null)], null));
})});
return obj78220;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78217,G__78218) : helix.core.jsx.call(null,G__78217,G__78218));
})()]});
return obj78204;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__78201,G__78202) : helix.core.jsxs.call(null,G__78201,G__78202));
});
if(goog.DEBUG === true){
var G__78225 = G__78193;
(G__78225.displayName = "app.shared.boiler-plant.valves.feedwater.settings/travel-time-init-value");

return G__78225;
} else {
return G__78193;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.potentiometer_connection_init_value = (function (){var G__78229 = (function app$shared$boiler_plant$valves$feedwater$settings$potentiometer_connection_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__78231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"connection","connection",-123599300)], null)], null));
var G__78235 = app.shared.components.form.field_row;
var G__78236 = (function (){var obj78238 = ({"label":"FEEDBACK POTENTIOMETER","children":(function (){var G__78239 = app.shared.components.form.select;
var G__78243 = (function (){var obj78245 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"connected",new cljs.core.Keyword(null,"label","label",1718410804),"connected"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"disconnected",new cljs.core.Keyword(null,"label","label",1718410804),"disconnected"], null)], null),"value":value,"on-change":(function (p1__78227_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"connection","connection",-123599300)], null),p1__78227_SHARP_], null)], null));
})});
return obj78245;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78239,G__78243) : helix.core.jsx.call(null,G__78239,G__78243));
})()});
return obj78238;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78235,G__78236) : helix.core.jsx.call(null,G__78235,G__78236));
});
if(goog.DEBUG === true){
var G__78250 = G__78229;
(G__78250.displayName = "app.shared.boiler-plant.valves.feedwater.settings/potentiometer-connection-init-value");

return G__78250;
} else {
return G__78229;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.potentiometer_damper_closed_init_value = (function (){var G__78277 = (function app$shared$boiler_plant$valves$feedwater$settings$potentiometer_damper_closed_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__78280 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"closed","closed",-919675359)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-potentiometer-closed","feed-water-elect-valve-potentiometer-closed",-792284384).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial potentiometer raw value closed must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__78286 = app.shared.components.form.field_row;
var G__78287 = (function (){var obj78289 = ({"label":"POTENTIOMETER RAW VALUE CLOSED","children":[(function (){var G__78291 = app.shared.components.form.input_number;
var G__78292 = helix.impl.props.merge_obj((function (){var obj78294 = ({"value":value,"on-change":(function (p1__78257_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"closed","closed",-919675359)], null),p1__78257_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__78260_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"closed","closed",-919675359)], null),p1__78260_SHARP_], null)], null));
}));
})});
return obj78294;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78291,G__78292) : helix.core.jsx.call(null,G__78291,G__78292));
})(),(function (){var G__78299 = app.shared.components.form.select;
var G__78300 = (function (){var obj78304 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"byte",new cljs.core.Keyword(null,"label","label",1718410804),"byte"], null)], null),"value":unit,"on-change":(function (p1__78261_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__78261_SHARP_], null)], null));
})});
return obj78304;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78299,G__78300) : helix.core.jsx.call(null,G__78299,G__78300));
})()]});
return obj78289;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__78286,G__78287) : helix.core.jsxs.call(null,G__78286,G__78287));
});
if(goog.DEBUG === true){
var G__78309 = G__78277;
(G__78309.displayName = "app.shared.boiler-plant.valves.feedwater.settings/potentiometer-damper-closed-init-value");

return G__78309;
} else {
return G__78277;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.potentiometer_damper_open_init_value = (function (){var G__78315 = (function app$shared$boiler_plant$valves$feedwater$settings$potentiometer_damper_open_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__78316 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"open","open",-1763596448)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-potentiometer-open","feed-water-elect-valve-potentiometer-open",-1849123324).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial potentiometer raw value open must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__78319 = app.shared.components.form.field_row;
var G__78320 = (function (){var obj78322 = ({"label":"POTENTIOMETER RAW VALUE OPEN","children":[(function (){var G__78323 = app.shared.components.form.input_number;
var G__78324 = helix.impl.props.merge_obj((function (){var obj78326 = ({"value":value,"on-change":(function (p1__78311_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"open","open",-1763596448)], null),p1__78311_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__78312_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"open","open",-1763596448)], null),p1__78312_SHARP_], null)], null));
}));
})});
return obj78326;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78323,G__78324) : helix.core.jsx.call(null,G__78323,G__78324));
})(),(function (){var G__78327 = app.shared.components.form.select;
var G__78328 = (function (){var obj78330 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"byte",new cljs.core.Keyword(null,"label","label",1718410804),"byte"], null)], null),"value":unit,"on-change":(function (p1__78313_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__78313_SHARP_], null)], null));
})});
return obj78330;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78327,G__78328) : helix.core.jsx.call(null,G__78327,G__78328));
})()]});
return obj78322;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__78319,G__78320) : helix.core.jsxs.call(null,G__78319,G__78320));
});
if(goog.DEBUG === true){
var G__78331 = G__78315;
(G__78331.displayName = "app.shared.boiler-plant.valves.feedwater.settings/potentiometer-damper-open-init-value");

return G__78331;
} else {
return G__78315;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.settings_form = (function (){var G__78333 = (function app$shared$boiler_plant$valves$feedwater$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__78334 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__78337 = helix.core.Fragment;
var G__78338 = ({"children": [(function (){var G__78339 = "div";
var G__78340 = (function (){var obj78342 = ({"className":"divider","style":(function (){var obj78344 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj78344;
})(),"children":"head-up-display"});
return obj78342;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78339,G__78340) : helix.core.jsx.call(null,G__78339,G__78340));
})(),(function (){var G__78345 = app.shared.boiler_plant.valves.feedwater.settings.mode_hud_settings;
var G__78346 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78345,G__78346) : helix.core.jsx.call(null,G__78345,G__78346));
})(),(function (){var G__78347 = app.shared.boiler_plant.valves.feedwater.settings.damper_hud_settings;
var G__78348 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78347,G__78348) : helix.core.jsx.call(null,G__78347,G__78348));
})(),(function (){var G__78349 = app.shared.boiler_plant.valves.feedwater.settings.flow_rate_hud_settings;
var G__78350 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78349,G__78350) : helix.core.jsx.call(null,G__78349,G__78350));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__78351 = helix.core.Fragment;
var G__78352 = ({"children": [(function (){var G__78353 = "div";
var G__78354 = (function (){var obj78356 = ({"className":"divider","children":"simulation start values"});
return obj78356;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78353,G__78354) : helix.core.jsx.call(null,G__78353,G__78354));
})(),(function (){var G__78357 = app.shared.boiler_plant.valves.feedwater.settings.damper_init_value;
var G__78358 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78357,G__78358) : helix.core.jsx.call(null,G__78357,G__78358));
})(),(function (){var G__78359 = "div";
var G__78360 = (function (){var obj78362 = ({"className":"divider","children":"specifications"});
return obj78362;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78359,G__78360) : helix.core.jsx.call(null,G__78359,G__78360));
})(),(function (){var G__78363 = app.shared.boiler_plant.valves.feedwater.settings.flow_rate_init_max_value;
var G__78364 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78363,G__78364) : helix.core.jsx.call(null,G__78363,G__78364));
})(),(function (){var G__78365 = app.shared.boiler_plant.valves.feedwater.settings.travel_time_init_value;
var G__78366 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78365,G__78366) : helix.core.jsx.call(null,G__78365,G__78366));
})(),(function (){var G__78367 = app.shared.boiler_plant.valves.feedwater.settings.potentiometer_connection_init_value;
var G__78368 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78367,G__78368) : helix.core.jsx.call(null,G__78367,G__78368));
})(),(function (){var G__78369 = app.shared.boiler_plant.valves.feedwater.settings.potentiometer_damper_closed_init_value;
var G__78370 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78369,G__78370) : helix.core.jsx.call(null,G__78369,G__78370));
})(),(function (){var G__78371 = app.shared.boiler_plant.valves.feedwater.settings.potentiometer_damper_open_init_value;
var G__78372 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78371,G__78372) : helix.core.jsx.call(null,G__78371,G__78372));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__78351,G__78352) : helix.core.jsxs.call(null,G__78351,G__78352));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__78337,G__78338) : helix.core.jsxs.call(null,G__78337,G__78338));
});
if(goog.DEBUG === true){
var G__78373 = G__78333;
(G__78373.displayName = "app.shared.boiler-plant.valves.feedwater.settings/settings-form");

return G__78373;
} else {
return G__78333;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.feedwater_valve_settings = (function (){var G__78375 = (function app$shared$boiler_plant$valves$feedwater$settings$feedwater_valve_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__78376 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__78379 = app.shared.components.modal.settings;
var G__78380 = (function (){var obj78382 = ({"title":"Feedwater Electric Valve Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-feedwater-valve-settings","restore-defaults-feedwater-valve-settings",599174434)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-feedwater-valve-settings","apply-feedwater-valve-settings",764907300)], null));
}),"children":(function (){var G__78383 = app.shared.boiler_plant.valves.feedwater.settings.settings_form;
var G__78384 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78383,G__78384) : helix.core.jsx.call(null,G__78383,G__78384));
})()});
return obj78382;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__78379,G__78380) : helix.core.jsx.call(null,G__78379,G__78380));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__78385 = G__78375;
(G__78385.displayName = "app.shared.boiler-plant.valves.feedwater.settings/feedwater-valve-settings");

return G__78385;
} else {
return G__78375;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.valves.feedwater.settings.js.map
