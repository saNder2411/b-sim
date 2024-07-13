goog.provide('app.shared.boiler_plant.pumps.feedwater.settings');

app.shared.boiler_plant.pumps.feedwater.settings.mode_hud_settings = (function (){var G__85394 = (function app$shared$boiler_plant$pumps$feedwater$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__85395 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__85398 = app.shared.components.form.field_row;
var G__85399 = (function (){var obj85401 = ({"label":"CONTROL MODE","children":[(function (){var G__85402 = app.shared.components.form.select;
var G__85403 = (function (){var obj85405 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manual",new cljs.core.Keyword(null,"label","label",1718410804),"Manual"], null)], null),"value":value,"on-change":(function (p1__85392_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__85392_SHARP_], null)], null));
})});
return obj85405;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85402,G__85403) : helix.core.jsx.call(null,G__85402,G__85403));
})(),(function (){var G__85406 = app.shared.components.form.checkbox;
var G__85407 = (function (){var obj85409 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj85409;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85406,G__85407) : helix.core.jsx.call(null,G__85406,G__85407));
})()]});
return obj85401;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__85398,G__85399) : helix.core.jsxs.call(null,G__85398,G__85399));
});
if(goog.DEBUG === true){
var G__85410 = G__85394;
(G__85410.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/mode-hud-settings");

return G__85410;
} else {
return G__85394;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.performance_hud_settings = (function (){var G__85413 = (function app$shared$boiler_plant$pumps$feedwater$settings$performance_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__85414 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__85417 = app.shared.components.form.field_row;
var G__85418 = (function (){var obj85420 = ({"label":"PERFORMANCE","children":[(function (){var G__85421 = app.shared.components.form.select;
var G__85422 = (function (){var obj85424 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__85411_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__85411_SHARP_], null)], null));
})});
return obj85424;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85421,G__85422) : helix.core.jsx.call(null,G__85421,G__85422));
})(),(function (){var G__85425 = app.shared.components.form.checkbox;
var G__85426 = (function (){var obj85428 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj85428;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85425,G__85426) : helix.core.jsx.call(null,G__85425,G__85426));
})()]});
return obj85420;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__85417,G__85418) : helix.core.jsxs.call(null,G__85417,G__85418));
});
if(goog.DEBUG === true){
var G__85429 = G__85413;
(G__85429.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/performance-hud-settings");

return G__85429;
} else {
return G__85413;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.rotation_hud_settings = (function (){var G__85432 = (function app$shared$boiler_plant$pumps$feedwater$settings$rotation_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__85433 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__85436 = app.shared.components.form.field_row;
var G__85437 = (function (){var obj85439 = ({"label":"ROTATIONAL SPEED","children":[(function (){var G__85440 = app.shared.components.form.select;
var G__85441 = (function (){var obj85443 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rpm",new cljs.core.Keyword(null,"label","label",1718410804),"rpm"], null)], null),"value":unit,"on-change":(function (p1__85430_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__85430_SHARP_], null)], null));
})});
return obj85443;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85440,G__85441) : helix.core.jsx.call(null,G__85440,G__85441));
})(),(function (){var G__85444 = app.shared.components.form.checkbox;
var G__85445 = (function (){var obj85447 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj85447;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85444,G__85445) : helix.core.jsx.call(null,G__85444,G__85445));
})()]});
return obj85439;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__85436,G__85437) : helix.core.jsxs.call(null,G__85436,G__85437));
});
if(goog.DEBUG === true){
var G__85448 = G__85432;
(G__85448.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/rotation-hud-settings");

return G__85448;
} else {
return G__85432;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.flow_rate_hud_settings = (function (){var G__85451 = (function app$shared$boiler_plant$pumps$feedwater$settings$flow_rate_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__85452 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__85455 = app.shared.components.form.field_row;
var G__85456 = (function (){var obj85458 = ({"label":"FLOW-RATE","children":[(function (){var G__85459 = app.shared.components.form.select;
var G__85460 = (function (){var obj85462 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__85449_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__85449_SHARP_], null)], null));
})});
return obj85462;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85459,G__85460) : helix.core.jsx.call(null,G__85459,G__85460));
})(),(function (){var G__85463 = app.shared.components.form.checkbox;
var G__85464 = (function (){var obj85466 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj85466;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85463,G__85464) : helix.core.jsx.call(null,G__85463,G__85464));
})()]});
return obj85458;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__85455,G__85456) : helix.core.jsxs.call(null,G__85455,G__85456));
});
if(goog.DEBUG === true){
var G__85467 = G__85451;
(G__85467.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/flow-rate-hud-settings");

return G__85467;
} else {
return G__85451;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.performance_init_value = (function (){var G__85472 = (function app$shared$boiler_plant$pumps$feedwater$settings$performance_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__85473 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-pump-performance","feed-water-pump-performance",1473062074).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pump performance value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__85476 = app.shared.components.form.field_row;
var G__85477 = (function (){var obj85479 = ({"label":"PERFORMANCE","children":[(function (){var G__85480 = app.shared.components.form.input_number;
var G__85481 = helix.impl.props.merge_obj((function (){var obj85483 = ({"value":value,"on-change":(function (p1__85468_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__85468_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__85469_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__85469_SHARP_], null)], null));
}));
})});
return obj85483;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85480,G__85481) : helix.core.jsx.call(null,G__85480,G__85481));
})(),(function (){var G__85484 = app.shared.components.form.select;
var G__85485 = (function (){var obj85487 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__85470_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__85470_SHARP_], null)], null));
})});
return obj85487;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85484,G__85485) : helix.core.jsx.call(null,G__85484,G__85485));
})()]});
return obj85479;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__85476,G__85477) : helix.core.jsxs.call(null,G__85476,G__85477));
});
if(goog.DEBUG === true){
var G__85488 = G__85472;
(G__85488.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/performance-init-value");

return G__85488;
} else {
return G__85472;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.rotation_init_max_value = (function (){var G__85493 = (function app$shared$boiler_plant$pumps$feedwater$settings$rotation_init_max_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__85494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-pump-rot-speed","feed-water-pump-rot-speed",631778687).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pump maximum rotational speed value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__85497 = app.shared.components.form.field_row;
var G__85498 = (function (){var obj85500 = ({"label":"MAXIMUM ROTATIONAL SPEED","children":[(function (){var G__85501 = app.shared.components.form.input_number;
var G__85502 = helix.impl.props.merge_obj((function (){var obj85504 = ({"value":value,"on-change":(function (p1__85489_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__85489_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__85490_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__85490_SHARP_], null)], null));
}));
})});
return obj85504;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85501,G__85502) : helix.core.jsx.call(null,G__85501,G__85502));
})(),(function (){var G__85505 = app.shared.components.form.select;
var G__85506 = (function (){var obj85508 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rpm",new cljs.core.Keyword(null,"label","label",1718410804),"rpm"], null)], null),"value":unit,"on-change":(function (p1__85491_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__85491_SHARP_], null)], null));
})});
return obj85508;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85505,G__85506) : helix.core.jsx.call(null,G__85505,G__85506));
})()]});
return obj85500;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__85497,G__85498) : helix.core.jsxs.call(null,G__85497,G__85498));
});
if(goog.DEBUG === true){
var G__85509 = G__85493;
(G__85509.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/rotation-init-max-value");

return G__85509;
} else {
return G__85493;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.flow_rate_init_max_value = (function (){var G__85514 = (function app$shared$boiler_plant$pumps$feedwater$settings$flow_rate_init_max_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__85515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump-flow-rate-max-converted-value","feedwater-pump-flow-rate-max-converted-value",1308731877)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-flow-rate","feed-water-elect-valve-flow-rate",997798988).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial flow rate maximum value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__85518 = app.shared.components.form.field_row;
var G__85519 = (function (){var obj85521 = ({"label":"MAXIMUM FLOW-RATE","children":[(function (){var G__85522 = app.shared.components.form.input_number;
var G__85523 = helix.impl.props.merge_obj((function (){var obj85525 = ({"value":converted_value,"on-change":(function (p1__85510_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump-flow-rate-max-value","change-feedwater-pump-flow-rate-max-value",-585911599),p1__85510_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__85511_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump-flow-rate-max-value","change-feedwater-pump-flow-rate-max-value",-585911599),p1__85511_SHARP_], null));
}));
})});
return obj85525;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85522,G__85523) : helix.core.jsx.call(null,G__85522,G__85523));
})(),(function (){var G__85526 = app.shared.components.form.select;
var G__85527 = (function (){var obj85529 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__85512_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__85512_SHARP_], null)], null));
})});
return obj85529;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85526,G__85527) : helix.core.jsx.call(null,G__85526,G__85527));
})()]});
return obj85521;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__85518,G__85519) : helix.core.jsxs.call(null,G__85518,G__85519));
});
if(goog.DEBUG === true){
var G__85530 = G__85514;
(G__85530.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/flow-rate-init-max-value");

return G__85530;
} else {
return G__85514;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.settings_form = (function (){var G__85532 = (function app$shared$boiler_plant$pumps$feedwater$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__85533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__85536 = helix.core.Fragment;
var G__85537 = ({"children": [(function (){var G__85538 = "div";
var G__85539 = (function (){var obj85541 = ({"className":"divider","style":(function (){var obj85543 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj85543;
})(),"children":"head-up-display"});
return obj85541;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85538,G__85539) : helix.core.jsx.call(null,G__85538,G__85539));
})(),(function (){var G__85544 = app.shared.boiler_plant.pumps.feedwater.settings.mode_hud_settings;
var G__85545 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85544,G__85545) : helix.core.jsx.call(null,G__85544,G__85545));
})(),(function (){var G__85546 = app.shared.boiler_plant.pumps.feedwater.settings.performance_hud_settings;
var G__85547 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85546,G__85547) : helix.core.jsx.call(null,G__85546,G__85547));
})(),(function (){var G__85548 = app.shared.boiler_plant.pumps.feedwater.settings.rotation_hud_settings;
var G__85549 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85548,G__85549) : helix.core.jsx.call(null,G__85548,G__85549));
})(),(function (){var G__85550 = app.shared.boiler_plant.pumps.feedwater.settings.flow_rate_hud_settings;
var G__85551 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85550,G__85551) : helix.core.jsx.call(null,G__85550,G__85551));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__85552 = helix.core.Fragment;
var G__85553 = ({"children": [(function (){var G__85554 = "div";
var G__85555 = (function (){var obj85557 = ({"className":"divider","children":"simulation start values"});
return obj85557;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85554,G__85555) : helix.core.jsx.call(null,G__85554,G__85555));
})(),(function (){var G__85558 = app.shared.boiler_plant.pumps.feedwater.settings.performance_init_value;
var G__85559 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85558,G__85559) : helix.core.jsx.call(null,G__85558,G__85559));
})(),(function (){var G__85560 = "div";
var G__85561 = (function (){var obj85563 = ({"className":"divider","children":"specifications"});
return obj85563;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85560,G__85561) : helix.core.jsx.call(null,G__85560,G__85561));
})(),(function (){var G__85564 = app.shared.boiler_plant.pumps.feedwater.settings.rotation_init_max_value;
var G__85565 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85564,G__85565) : helix.core.jsx.call(null,G__85564,G__85565));
})(),(function (){var G__85566 = app.shared.boiler_plant.pumps.feedwater.settings.flow_rate_init_max_value;
var G__85567 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85566,G__85567) : helix.core.jsx.call(null,G__85566,G__85567));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__85552,G__85553) : helix.core.jsxs.call(null,G__85552,G__85553));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__85536,G__85537) : helix.core.jsxs.call(null,G__85536,G__85537));
});
if(goog.DEBUG === true){
var G__85568 = G__85532;
(G__85568.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/settings-form");

return G__85568;
} else {
return G__85532;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.feedwater_pump_settings = (function (){var G__85570 = (function app$shared$boiler_plant$pumps$feedwater$settings$feedwater_pump_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__85571 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__85574 = app.shared.components.modal.settings;
var G__85575 = (function (){var obj85577 = ({"title":"Feedwater Pump Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-feedwater-pump-settings","restore-defaults-feedwater-pump-settings",-1194333909)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-feedwater-pump-settings","apply-feedwater-pump-settings",-1556512642)], null));
}),"children":(function (){var G__85578 = app.shared.boiler_plant.pumps.feedwater.settings.settings_form;
var G__85579 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85578,G__85579) : helix.core.jsx.call(null,G__85578,G__85579));
})()});
return obj85577;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__85574,G__85575) : helix.core.jsx.call(null,G__85574,G__85575));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__85580 = G__85570;
(G__85580.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/feedwater-pump-settings");

return G__85580;
} else {
return G__85570;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.pumps.feedwater.settings.js.map
