goog.provide('app.shared.boiler_plant.valves.feedwater.settings');

app.shared.boiler_plant.valves.feedwater.settings.mode_hud_settings = (function (){var G__81245 = (function app$shared$boiler_plant$valves$feedwater$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__81253 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__81264 = app.shared.components.form.field_row;
var G__81265 = (function (){var obj81271 = ({"label":"CONTROL MODE","children":[(function (){var G__81276 = app.shared.components.form.select;
var G__81277 = (function (){var obj81283 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manual",new cljs.core.Keyword(null,"label","label",1718410804),"Manual"], null)], null),"value":value,"on-change":(function (p1__81237_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__81237_SHARP_], null)], null));
})});
return obj81283;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81276,G__81277) : helix.core.jsx.call(null,G__81276,G__81277));
})(),(function (){var G__81304 = app.shared.components.form.checkbox;
var G__81305 = (function (){var obj81311 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj81311;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81304,G__81305) : helix.core.jsx.call(null,G__81304,G__81305));
})()]});
return obj81271;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__81264,G__81265) : helix.core.jsxs.call(null,G__81264,G__81265));
});
if(goog.DEBUG === true){
var G__81326 = G__81245;
(G__81326.displayName = "app.shared.boiler-plant.valves.feedwater.settings/mode-hud-settings");

return G__81326;
} else {
return G__81245;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.damper_hud_settings = (function (){var G__81358 = (function app$shared$boiler_plant$valves$feedwater$settings$damper_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__81371 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__81380 = app.shared.components.form.field_row;
var G__81383 = (function (){var obj81385 = ({"label":"VALVE STATE","children":[(function (){var G__81389 = app.shared.components.form.select;
var G__81392 = (function (){var obj81396 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__81336_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__81336_SHARP_], null)], null));
})});
return obj81396;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81389,G__81392) : helix.core.jsx.call(null,G__81389,G__81392));
})(),(function (){var G__81398 = app.shared.components.form.checkbox;
var G__81399 = (function (){var obj81402 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj81402;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81398,G__81399) : helix.core.jsx.call(null,G__81398,G__81399));
})()]});
return obj81385;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__81380,G__81383) : helix.core.jsxs.call(null,G__81380,G__81383));
});
if(goog.DEBUG === true){
var G__81405 = G__81358;
(G__81405.displayName = "app.shared.boiler-plant.valves.feedwater.settings/damper-hud-settings");

return G__81405;
} else {
return G__81358;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.flow_rate_hud_settings = (function (){var G__81412 = (function app$shared$boiler_plant$valves$feedwater$settings$flow_rate_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__81419 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__81426 = app.shared.components.form.field_row;
var G__81427 = (function (){var obj81431 = ({"label":"FLOW-RATE","children":[(function (){var G__81432 = app.shared.components.form.select;
var G__81433 = (function (){var obj81435 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__81406_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__81406_SHARP_], null)], null));
})});
return obj81435;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81432,G__81433) : helix.core.jsx.call(null,G__81432,G__81433));
})(),(function (){var G__81439 = app.shared.components.form.checkbox;
var G__81440 = (function (){var obj81444 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj81444;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81439,G__81440) : helix.core.jsx.call(null,G__81439,G__81440));
})()]});
return obj81431;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__81426,G__81427) : helix.core.jsxs.call(null,G__81426,G__81427));
});
if(goog.DEBUG === true){
var G__81445 = G__81412;
(G__81445.displayName = "app.shared.boiler-plant.valves.feedwater.settings/flow-rate-hud-settings");

return G__81445;
} else {
return G__81412;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.damper_init_value = (function (){var G__81454 = (function app$shared$boiler_plant$valves$feedwater$settings$damper_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__81459 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-position","feed-water-elect-valve-position",1487608942).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial valve position value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__81466 = app.shared.components.form.field_row;
var G__81467 = (function (){var obj81469 = ({"label":"VALVE POSITION","children":[(function (){var G__81470 = app.shared.components.form.input_number;
var G__81471 = helix.impl.props.merge_obj((function (){var obj81475 = ({"value":value,"on-change":(function (p1__81446_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__81446_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__81448_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__81448_SHARP_], null)], null));
}));
})});
return obj81475;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81470,G__81471) : helix.core.jsx.call(null,G__81470,G__81471));
})(),(function (){var G__81482 = app.shared.components.form.select;
var G__81483 = (function (){var obj81486 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__81449_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__81449_SHARP_], null)], null));
})});
return obj81486;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81482,G__81483) : helix.core.jsx.call(null,G__81482,G__81483));
})()]});
return obj81469;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__81466,G__81467) : helix.core.jsxs.call(null,G__81466,G__81467));
});
if(goog.DEBUG === true){
var G__81490 = G__81454;
(G__81490.displayName = "app.shared.boiler-plant.valves.feedwater.settings/damper-init-value");

return G__81490;
} else {
return G__81454;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.flow_rate_init_max_value = (function (){var G__81519 = (function app$shared$boiler_plant$valves$feedwater$settings$flow_rate_init_max_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__81528 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve-flow-rate-max-converted-value","feedwater-valve-flow-rate-max-converted-value",-1099033612)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-flow-rate","feed-water-elect-valve-flow-rate",997798988).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial flow rate maximum value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__81537 = app.shared.components.form.field_row;
var G__81538 = (function (){var obj81540 = ({"label":"MAXIMUM FLOW-RATE","children":[(function (){var G__81542 = app.shared.components.form.input_number;
var G__81543 = helix.impl.props.merge_obj((function (){var obj81545 = ({"value":converted_value,"on-change":(function (p1__81494_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve-flow-rate-max-value","change-feedwater-valve-flow-rate-max-value",-168488603),p1__81494_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__81495_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve-flow-rate-max-value","change-feedwater-valve-flow-rate-max-value",-168488603),p1__81495_SHARP_], null));
}));
})});
return obj81545;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81542,G__81543) : helix.core.jsx.call(null,G__81542,G__81543));
})(),(function (){var G__81558 = app.shared.components.form.select;
var G__81559 = (function (){var obj81563 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__81497_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__81497_SHARP_], null)], null));
})});
return obj81563;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81558,G__81559) : helix.core.jsx.call(null,G__81558,G__81559));
})()]});
return obj81540;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__81537,G__81538) : helix.core.jsxs.call(null,G__81537,G__81538));
});
if(goog.DEBUG === true){
var G__81575 = G__81519;
(G__81575.displayName = "app.shared.boiler-plant.valves.feedwater.settings/flow-rate-init-max-value");

return G__81575;
} else {
return G__81519;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.travel_time_init_value = (function (){var G__81615 = (function app$shared$boiler_plant$valves$feedwater$settings$travel_time_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__81626 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-travel-time","feed-water-elect-valve-travel-time",740616170).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial valve travel time value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__81637 = app.shared.components.form.field_row;
var G__81638 = (function (){var obj81642 = ({"label":"VALVE TRAVEL TIME","children":[(function (){var G__81646 = app.shared.components.form.input_number;
var G__81647 = helix.impl.props.merge_obj((function (){var obj81658 = ({"value":value,"on-change":(function (p1__81585_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__81585_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__81588_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__81588_SHARP_], null)], null));
}));
})});
return obj81658;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81646,G__81647) : helix.core.jsx.call(null,G__81646,G__81647));
})(),(function (){var G__81673 = app.shared.components.form.select;
var G__81674 = (function (){var obj81676 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"s",new cljs.core.Keyword(null,"label","label",1718410804),"s"], null)], null),"value":unit,"on-change":(function (p1__81589_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__81589_SHARP_], null)], null));
})});
return obj81676;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81673,G__81674) : helix.core.jsx.call(null,G__81673,G__81674));
})()]});
return obj81642;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__81637,G__81638) : helix.core.jsxs.call(null,G__81637,G__81638));
});
if(goog.DEBUG === true){
var G__81684 = G__81615;
(G__81684.displayName = "app.shared.boiler-plant.valves.feedwater.settings/travel-time-init-value");

return G__81684;
} else {
return G__81615;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.potentiometer_connection_init_value = (function (){var G__81700 = (function app$shared$boiler_plant$valves$feedwater$settings$potentiometer_connection_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__81705 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"connection","connection",-123599300)], null)], null));
var G__81709 = app.shared.components.form.field_row;
var G__81710 = (function (){var obj81712 = ({"label":"FEEDBACK POTENTIOMETER","children":(function (){var G__81714 = app.shared.components.form.select;
var G__81715 = (function (){var obj81718 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"connected",new cljs.core.Keyword(null,"label","label",1718410804),"connected"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"disconnected",new cljs.core.Keyword(null,"label","label",1718410804),"disconnected"], null)], null),"value":value,"on-change":(function (p1__81688_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"connection","connection",-123599300)], null),p1__81688_SHARP_], null)], null));
})});
return obj81718;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81714,G__81715) : helix.core.jsx.call(null,G__81714,G__81715));
})()});
return obj81712;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81709,G__81710) : helix.core.jsx.call(null,G__81709,G__81710));
});
if(goog.DEBUG === true){
var G__81727 = G__81700;
(G__81727.displayName = "app.shared.boiler-plant.valves.feedwater.settings/potentiometer-connection-init-value");

return G__81727;
} else {
return G__81700;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.potentiometer_damper_closed_init_value = (function (){var G__81746 = (function app$shared$boiler_plant$valves$feedwater$settings$potentiometer_damper_closed_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__81751 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"closed","closed",-919675359)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-potentiometer-closed","feed-water-elect-valve-potentiometer-closed",-792284384).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial potentiometer raw value closed must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__81760 = app.shared.components.form.field_row;
var G__81761 = (function (){var obj81763 = ({"label":"POTENTIOMETER RAW VALUE CLOSED","children":[(function (){var G__81766 = app.shared.components.form.input_number;
var G__81767 = helix.impl.props.merge_obj((function (){var obj81771 = ({"value":value,"on-change":(function (p1__81728_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"closed","closed",-919675359)], null),p1__81728_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__81730_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"closed","closed",-919675359)], null),p1__81730_SHARP_], null)], null));
}));
})});
return obj81771;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81766,G__81767) : helix.core.jsx.call(null,G__81766,G__81767));
})(),(function (){var G__81776 = app.shared.components.form.select;
var G__81777 = (function (){var obj81782 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"byte",new cljs.core.Keyword(null,"label","label",1718410804),"byte"], null)], null),"value":unit,"on-change":(function (p1__81731_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__81731_SHARP_], null)], null));
})});
return obj81782;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81776,G__81777) : helix.core.jsx.call(null,G__81776,G__81777));
})()]});
return obj81763;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__81760,G__81761) : helix.core.jsxs.call(null,G__81760,G__81761));
});
if(goog.DEBUG === true){
var G__81787 = G__81746;
(G__81787.displayName = "app.shared.boiler-plant.valves.feedwater.settings/potentiometer-damper-closed-init-value");

return G__81787;
} else {
return G__81746;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.potentiometer_damper_open_init_value = (function (){var G__81804 = (function app$shared$boiler_plant$valves$feedwater$settings$potentiometer_damper_open_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__81813 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"open","open",-1763596448)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-potentiometer-open","feed-water-elect-valve-potentiometer-open",-1849123324).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial potentiometer raw value open must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__81826 = app.shared.components.form.field_row;
var G__81827 = (function (){var obj81829 = ({"label":"POTENTIOMETER RAW VALUE OPEN","children":[(function (){var G__81830 = app.shared.components.form.input_number;
var G__81831 = helix.impl.props.merge_obj((function (){var obj81835 = ({"value":value,"on-change":(function (p1__81795_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"open","open",-1763596448)], null),p1__81795_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__81796_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"open","open",-1763596448)], null),p1__81796_SHARP_], null)], null));
}));
})});
return obj81835;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81830,G__81831) : helix.core.jsx.call(null,G__81830,G__81831));
})(),(function (){var G__81846 = app.shared.components.form.select;
var G__81847 = (function (){var obj81849 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"byte",new cljs.core.Keyword(null,"label","label",1718410804),"byte"], null)], null),"value":unit,"on-change":(function (p1__81797_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__81797_SHARP_], null)], null));
})});
return obj81849;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81846,G__81847) : helix.core.jsx.call(null,G__81846,G__81847));
})()]});
return obj81829;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__81826,G__81827) : helix.core.jsxs.call(null,G__81826,G__81827));
});
if(goog.DEBUG === true){
var G__81857 = G__81804;
(G__81857.displayName = "app.shared.boiler-plant.valves.feedwater.settings/potentiometer-damper-open-init-value");

return G__81857;
} else {
return G__81804;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.settings_form = (function (){var G__81867 = (function app$shared$boiler_plant$valves$feedwater$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__81868 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__81871 = helix.core.Fragment;
var G__81872 = ({"children": [(function (){var G__81875 = "div";
var G__81876 = (function (){var obj81880 = ({"className":"divider","style":(function (){var obj81882 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj81882;
})(),"children":"head-up-display"});
return obj81880;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81875,G__81876) : helix.core.jsx.call(null,G__81875,G__81876));
})(),(function (){var G__81885 = app.shared.boiler_plant.valves.feedwater.settings.mode_hud_settings;
var G__81886 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81885,G__81886) : helix.core.jsx.call(null,G__81885,G__81886));
})(),(function (){var G__81889 = app.shared.boiler_plant.valves.feedwater.settings.damper_hud_settings;
var G__81890 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81889,G__81890) : helix.core.jsx.call(null,G__81889,G__81890));
})(),(function (){var G__81891 = app.shared.boiler_plant.valves.feedwater.settings.flow_rate_hud_settings;
var G__81892 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81891,G__81892) : helix.core.jsx.call(null,G__81891,G__81892));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__81895 = helix.core.Fragment;
var G__81896 = ({"children": [(function (){var G__81897 = "div";
var G__81898 = (function (){var obj81902 = ({"className":"divider","children":"simulation start values"});
return obj81902;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81897,G__81898) : helix.core.jsx.call(null,G__81897,G__81898));
})(),(function (){var G__81907 = app.shared.boiler_plant.valves.feedwater.settings.damper_init_value;
var G__81908 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81907,G__81908) : helix.core.jsx.call(null,G__81907,G__81908));
})(),(function (){var G__81911 = "div";
var G__81912 = (function (){var obj81916 = ({"className":"divider","children":"specifications"});
return obj81916;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81911,G__81912) : helix.core.jsx.call(null,G__81911,G__81912));
})(),(function (){var G__81921 = app.shared.boiler_plant.valves.feedwater.settings.flow_rate_init_max_value;
var G__81922 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81921,G__81922) : helix.core.jsx.call(null,G__81921,G__81922));
})(),(function (){var G__81925 = app.shared.boiler_plant.valves.feedwater.settings.travel_time_init_value;
var G__81926 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81925,G__81926) : helix.core.jsx.call(null,G__81925,G__81926));
})(),(function (){var G__81927 = app.shared.boiler_plant.valves.feedwater.settings.potentiometer_connection_init_value;
var G__81928 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81927,G__81928) : helix.core.jsx.call(null,G__81927,G__81928));
})(),(function (){var G__81930 = app.shared.boiler_plant.valves.feedwater.settings.potentiometer_damper_closed_init_value;
var G__81931 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81930,G__81931) : helix.core.jsx.call(null,G__81930,G__81931));
})(),(function (){var G__81932 = app.shared.boiler_plant.valves.feedwater.settings.potentiometer_damper_open_init_value;
var G__81933 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81932,G__81933) : helix.core.jsx.call(null,G__81932,G__81933));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__81895,G__81896) : helix.core.jsxs.call(null,G__81895,G__81896));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__81871,G__81872) : helix.core.jsxs.call(null,G__81871,G__81872));
});
if(goog.DEBUG === true){
var G__81935 = G__81867;
(G__81935.displayName = "app.shared.boiler-plant.valves.feedwater.settings/settings-form");

return G__81935;
} else {
return G__81867;
}
})();




app.shared.boiler_plant.valves.feedwater.settings.feedwater_valve_settings = (function (){var G__81943 = (function app$shared$boiler_plant$valves$feedwater$settings$feedwater_valve_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__81948 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__81952 = app.shared.components.modal.settings;
var G__81953 = (function (){var obj81955 = ({"title":"Feedwater Electric Valve Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-feedwater-valve-settings","restore-defaults-feedwater-valve-settings",599174434)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-feedwater-valve-settings","apply-feedwater-valve-settings",764907300)], null));
}),"children":(function (){var G__81956 = app.shared.boiler_plant.valves.feedwater.settings.settings_form;
var G__81957 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81956,G__81957) : helix.core.jsx.call(null,G__81956,G__81957));
})()});
return obj81955;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__81952,G__81953) : helix.core.jsx.call(null,G__81952,G__81953));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__81958 = G__81943;
(G__81958.displayName = "app.shared.boiler-plant.valves.feedwater.settings/feedwater-valve-settings");

return G__81958;
} else {
return G__81943;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.valves.feedwater.settings.js.map
