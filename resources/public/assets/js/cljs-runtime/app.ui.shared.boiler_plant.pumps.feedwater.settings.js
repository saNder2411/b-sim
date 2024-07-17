goog.provide('app.ui.shared.boiler_plant.pumps.feedwater.settings');

app.ui.shared.boiler_plant.pumps.feedwater.settings.mode_hud_settings = (function (){var G__33420 = (function app$ui$shared$boiler_plant$pumps$feedwater$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33486 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__33491 = app.ui.shared.components.form.field_row;
var G__33492 = (function (){var obj33500 = ({"label":"CONTROL MODE","children":[(function (){var G__33510 = app.ui.shared.components.form.select;
var G__33511 = (function (){var obj33561 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manual",new cljs.core.Keyword(null,"label","label",1718410804),"Manual"], null)], null),"value":value,"on-change":(function (p1__33246_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__33246_SHARP_], null)], null));
})});
return obj33561;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33510,G__33511) : helix.core.jsx.call(null,G__33510,G__33511));
})(),(function (){var G__33689 = app.ui.shared.components.form.checkbox;
var G__33690 = (function (){var obj33701 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj33701;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33689,G__33690) : helix.core.jsx.call(null,G__33689,G__33690));
})()]});
return obj33500;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33491,G__33492) : helix.core.jsxs.call(null,G__33491,G__33492));
});
if(goog.DEBUG === true){
var G__33739 = G__33420;
(G__33739.displayName = "app.ui.shared.boiler-plant.pumps.feedwater.settings/mode-hud-settings");

return G__33739;
} else {
return G__33420;
}
})();




app.ui.shared.boiler_plant.pumps.feedwater.settings.performance_hud_settings = (function (){var G__33884 = (function app$ui$shared$boiler_plant$pumps$feedwater$settings$performance_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33905 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__34129 = app.ui.shared.components.form.field_row;
var G__34130 = (function (){var obj34173 = ({"label":"PERFORMANCE","children":[(function (){var G__34181 = app.ui.shared.components.form.select;
var G__34182 = (function (){var obj34208 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__33839_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33839_SHARP_], null)], null));
})});
return obj34208;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34181,G__34182) : helix.core.jsx.call(null,G__34181,G__34182));
})(),(function (){var G__34237 = app.ui.shared.components.form.checkbox;
var G__34238 = (function (){var obj34242 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj34242;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34237,G__34238) : helix.core.jsx.call(null,G__34237,G__34238));
})()]});
return obj34173;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34129,G__34130) : helix.core.jsxs.call(null,G__34129,G__34130));
});
if(goog.DEBUG === true){
var G__34284 = G__33884;
(G__34284.displayName = "app.ui.shared.boiler-plant.pumps.feedwater.settings/performance-hud-settings");

return G__34284;
} else {
return G__33884;
}
})();




app.ui.shared.boiler_plant.pumps.feedwater.settings.rotation_hud_settings = (function (){var G__34329 = (function app$ui$shared$boiler_plant$pumps$feedwater$settings$rotation_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__34349 = app.ui.shared.components.form.field_row;
var G__34350 = (function (){var obj34354 = ({"label":"ROTATIONAL SPEED","children":[(function (){var G__34356 = app.ui.shared.components.form.select;
var G__34357 = (function (){var obj34360 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rpm",new cljs.core.Keyword(null,"label","label",1718410804),"rpm"], null)], null),"value":unit,"on-change":(function (p1__34309_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__34309_SHARP_], null)], null));
})});
return obj34360;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34356,G__34357) : helix.core.jsx.call(null,G__34356,G__34357));
})(),(function (){var G__34366 = app.ui.shared.components.form.checkbox;
var G__34367 = (function (){var obj34371 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj34371;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34366,G__34367) : helix.core.jsx.call(null,G__34366,G__34367));
})()]});
return obj34354;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34349,G__34350) : helix.core.jsxs.call(null,G__34349,G__34350));
});
if(goog.DEBUG === true){
var G__34394 = G__34329;
(G__34394.displayName = "app.ui.shared.boiler-plant.pumps.feedwater.settings/rotation-hud-settings");

return G__34394;
} else {
return G__34329;
}
})();




app.ui.shared.boiler_plant.pumps.feedwater.settings.flow_rate_hud_settings = (function (){var G__34414 = (function app$ui$shared$boiler_plant$pumps$feedwater$settings$flow_rate_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34424 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__34435 = app.ui.shared.components.form.field_row;
var G__34436 = (function (){var obj34438 = ({"label":"FLOW-RATE","children":[(function (){var G__34443 = app.ui.shared.components.form.select;
var G__34444 = (function (){var obj34447 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__34395_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__34395_SHARP_], null)], null));
})});
return obj34447;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34443,G__34444) : helix.core.jsx.call(null,G__34443,G__34444));
})(),(function (){var G__34454 = app.ui.shared.components.form.checkbox;
var G__34455 = (function (){var obj34474 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj34474;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34454,G__34455) : helix.core.jsx.call(null,G__34454,G__34455));
})()]});
return obj34438;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34435,G__34436) : helix.core.jsxs.call(null,G__34435,G__34436));
});
if(goog.DEBUG === true){
var G__34488 = G__34414;
(G__34488.displayName = "app.ui.shared.boiler-plant.pumps.feedwater.settings/flow-rate-hud-settings");

return G__34488;
} else {
return G__34414;
}
})();




app.ui.shared.boiler_plant.pumps.feedwater.settings.performance_init_value = (function (){var G__34523 = (function app$ui$shared$boiler_plant$pumps$feedwater$settings$performance_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34529 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-pump-performance","feed-water-pump-performance",1473062074).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pump performance value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__34533 = app.ui.shared.components.form.field_row;
var G__34534 = (function (){var obj34538 = ({"label":"PERFORMANCE","children":[(function (){var G__34542 = app.ui.shared.components.form.input_number;
var G__34543 = helix.impl.props.merge_obj((function (){var obj34547 = ({"value":value,"on-change":(function (p1__34496_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__34496_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__34499_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__34499_SHARP_], null)], null));
}));
})});
return obj34547;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34542,G__34543) : helix.core.jsx.call(null,G__34542,G__34543));
})(),(function (){var G__34557 = app.ui.shared.components.form.select;
var G__34558 = (function (){var obj34564 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__34502_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__34502_SHARP_], null)], null));
})});
return obj34564;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34557,G__34558) : helix.core.jsx.call(null,G__34557,G__34558));
})()]});
return obj34538;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34533,G__34534) : helix.core.jsxs.call(null,G__34533,G__34534));
});
if(goog.DEBUG === true){
var G__34570 = G__34523;
(G__34570.displayName = "app.ui.shared.boiler-plant.pumps.feedwater.settings/performance-init-value");

return G__34570;
} else {
return G__34523;
}
})();




app.ui.shared.boiler_plant.pumps.feedwater.settings.rotation_init_max_value = (function (){var G__34585 = (function app$ui$shared$boiler_plant$pumps$feedwater$settings$rotation_init_max_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34593 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-pump-rot-speed","feed-water-pump-rot-speed",631778687).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pump maximum rotational speed value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__34650 = app.ui.shared.components.form.field_row;
var G__34651 = (function (){var obj34664 = ({"label":"MAXIMUM ROTATIONAL SPEED","children":[(function (){var G__34673 = app.ui.shared.components.form.input_number;
var G__34674 = helix.impl.props.merge_obj((function (){var obj34684 = ({"value":value,"on-change":(function (p1__34572_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__34572_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__34574_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__34574_SHARP_], null)], null));
}));
})});
return obj34684;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34673,G__34674) : helix.core.jsx.call(null,G__34673,G__34674));
})(),(function (){var G__34710 = app.ui.shared.components.form.select;
var G__34711 = (function (){var obj34714 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rpm",new cljs.core.Keyword(null,"label","label",1718410804),"rpm"], null)], null),"value":unit,"on-change":(function (p1__34575_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__34575_SHARP_], null)], null));
})});
return obj34714;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34710,G__34711) : helix.core.jsx.call(null,G__34710,G__34711));
})()]});
return obj34664;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34650,G__34651) : helix.core.jsxs.call(null,G__34650,G__34651));
});
if(goog.DEBUG === true){
var G__34724 = G__34585;
(G__34724.displayName = "app.ui.shared.boiler-plant.pumps.feedwater.settings/rotation-init-max-value");

return G__34724;
} else {
return G__34585;
}
})();




app.ui.shared.boiler_plant.pumps.feedwater.settings.flow_rate_init_max_value = (function (){var G__34754 = (function app$ui$shared$boiler_plant$pumps$feedwater$settings$flow_rate_init_max_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34759 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump-flow-rate-max-converted-value","feedwater-pump-flow-rate-max-converted-value",1308731877)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-flow-rate","feed-water-elect-valve-flow-rate",997798988).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial flow rate maximum value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__34769 = app.ui.shared.components.form.field_row;
var G__34771 = (function (){var obj34776 = ({"label":"MAXIMUM FLOW-RATE","children":[(function (){var G__34777 = app.ui.shared.components.form.input_number;
var G__34778 = helix.impl.props.merge_obj((function (){var obj34782 = ({"value":converted_value,"on-change":(function (p1__34731_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump-flow-rate-max-value","change-feedwater-pump-flow-rate-max-value",-585911599),p1__34731_SHARP_], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__34734_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump-flow-rate-max-value","change-feedwater-pump-flow-rate-max-value",-585911599),p1__34734_SHARP_], null));
}));
})});
return obj34782;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34777,G__34778) : helix.core.jsx.call(null,G__34777,G__34778));
})(),(function (){var G__34793 = app.ui.shared.components.form.select;
var G__34794 = (function (){var obj34798 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__34740_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__34740_SHARP_], null)], null));
})});
return obj34798;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34793,G__34794) : helix.core.jsx.call(null,G__34793,G__34794));
})()]});
return obj34776;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34769,G__34771) : helix.core.jsxs.call(null,G__34769,G__34771));
});
if(goog.DEBUG === true){
var G__34807 = G__34754;
(G__34807.displayName = "app.ui.shared.boiler-plant.pumps.feedwater.settings/flow-rate-init-max-value");

return G__34807;
} else {
return G__34754;
}
})();




app.ui.shared.boiler_plant.pumps.feedwater.settings.settings_form = (function (){var G__34821 = (function app$ui$shared$boiler_plant$pumps$feedwater$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34826 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__34833 = helix.core.Fragment;
var G__34834 = ({"children": [(function (){var G__34837 = "div";
var G__34838 = (function (){var obj34840 = ({"className":"divider","style":(function (){var obj34842 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj34842;
})(),"children":"head-up-display"});
return obj34840;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34837,G__34838) : helix.core.jsx.call(null,G__34837,G__34838));
})(),(function (){var G__34847 = app.ui.shared.boiler_plant.pumps.feedwater.settings.mode_hud_settings;
var G__34848 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34847,G__34848) : helix.core.jsx.call(null,G__34847,G__34848));
})(),(function (){var G__34853 = app.ui.shared.boiler_plant.pumps.feedwater.settings.performance_hud_settings;
var G__34854 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34853,G__34854) : helix.core.jsx.call(null,G__34853,G__34854));
})(),(function (){var G__34857 = app.ui.shared.boiler_plant.pumps.feedwater.settings.rotation_hud_settings;
var G__34858 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34857,G__34858) : helix.core.jsx.call(null,G__34857,G__34858));
})(),(function (){var G__34861 = app.ui.shared.boiler_plant.pumps.feedwater.settings.flow_rate_hud_settings;
var G__34862 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34861,G__34862) : helix.core.jsx.call(null,G__34861,G__34862));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__34867 = helix.core.Fragment;
var G__34868 = ({"children": [(function (){var G__34869 = "div";
var G__34870 = (function (){var obj34872 = ({"className":"divider","children":"simulation start values"});
return obj34872;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34869,G__34870) : helix.core.jsx.call(null,G__34869,G__34870));
})(),(function (){var G__34874 = app.ui.shared.boiler_plant.pumps.feedwater.settings.performance_init_value;
var G__34875 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34874,G__34875) : helix.core.jsx.call(null,G__34874,G__34875));
})(),(function (){var G__34876 = "div";
var G__34877 = (function (){var obj34879 = ({"className":"divider","children":"specifications"});
return obj34879;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34876,G__34877) : helix.core.jsx.call(null,G__34876,G__34877));
})(),(function (){var G__34880 = app.ui.shared.boiler_plant.pumps.feedwater.settings.rotation_init_max_value;
var G__34881 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34880,G__34881) : helix.core.jsx.call(null,G__34880,G__34881));
})(),(function (){var G__34882 = app.ui.shared.boiler_plant.pumps.feedwater.settings.flow_rate_init_max_value;
var G__34883 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34882,G__34883) : helix.core.jsx.call(null,G__34882,G__34883));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34867,G__34868) : helix.core.jsxs.call(null,G__34867,G__34868));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34833,G__34834) : helix.core.jsxs.call(null,G__34833,G__34834));
});
if(goog.DEBUG === true){
var G__34884 = G__34821;
(G__34884.displayName = "app.ui.shared.boiler-plant.pumps.feedwater.settings/settings-form");

return G__34884;
} else {
return G__34821;
}
})();




app.ui.shared.boiler_plant.pumps.feedwater.settings.feedwater_pump_settings = (function (){var G__34886 = (function app$ui$shared$boiler_plant$pumps$feedwater$settings$feedwater_pump_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34887 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__34890 = app.ui.shared.components.modal.settings;
var G__34891 = (function (){var obj34893 = ({"title":"Feedwater Pump Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-feedwater-pump-settings","restore-defaults-feedwater-pump-settings",-1194333909)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-feedwater-pump-settings","apply-feedwater-pump-settings",-1556512642)], null));
}),"children":(function (){var G__34895 = app.ui.shared.boiler_plant.pumps.feedwater.settings.settings_form;
var G__34896 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34895,G__34896) : helix.core.jsx.call(null,G__34895,G__34896));
})()});
return obj34893;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34890,G__34891) : helix.core.jsx.call(null,G__34890,G__34891));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__34898 = G__34886;
(G__34898.displayName = "app.ui.shared.boiler-plant.pumps.feedwater.settings/feedwater-pump-settings");

return G__34898;
} else {
return G__34886;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.pumps.feedwater.settings.js.map
