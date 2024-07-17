goog.provide('app.ui.shared.boiler_plant.valves.feedwater.settings');

app.ui.shared.boiler_plant.valves.feedwater.settings.mode_hud_settings = (function (){var G__32988 = (function app$ui$shared$boiler_plant$valves$feedwater$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__33008 = app.ui.shared.components.form.field_row;
var G__33009 = (function (){var obj33028 = ({"label":"CONTROL MODE","children":[(function (){var G__33035 = app.ui.shared.components.form.select;
var G__33036 = (function (){var obj33048 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manual",new cljs.core.Keyword(null,"label","label",1718410804),"Manual"], null)], null),"value":value,"on-change":(function (p1__32950_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__32950_SHARP_], null)], null));
})});
return obj33048;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33035,G__33036) : helix.core.jsx.call(null,G__33035,G__33036));
})(),(function (){var G__33062 = app.ui.shared.components.form.checkbox;
var G__33063 = (function (){var obj33075 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj33075;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33062,G__33063) : helix.core.jsx.call(null,G__33062,G__33063));
})()]});
return obj33028;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33008,G__33009) : helix.core.jsxs.call(null,G__33008,G__33009));
});
if(goog.DEBUG === true){
var G__33103 = G__32988;
(G__33103.displayName = "app.ui.shared.boiler-plant.valves.feedwater.settings/mode-hud-settings");

return G__33103;
} else {
return G__32988;
}
})();




app.ui.shared.boiler_plant.valves.feedwater.settings.damper_hud_settings = (function (){var G__33135 = (function app$ui$shared$boiler_plant$valves$feedwater$settings$damper_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33144 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__33170 = app.ui.shared.components.form.field_row;
var G__33171 = (function (){var obj33175 = ({"label":"VALVE STATE","children":[(function (){var G__33178 = app.ui.shared.components.form.select;
var G__33179 = (function (){var obj33181 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__33112_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33112_SHARP_], null)], null));
})});
return obj33181;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33178,G__33179) : helix.core.jsx.call(null,G__33178,G__33179));
})(),(function (){var G__33202 = app.ui.shared.components.form.checkbox;
var G__33203 = (function (){var obj33209 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj33209;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33202,G__33203) : helix.core.jsx.call(null,G__33202,G__33203));
})()]});
return obj33175;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33170,G__33171) : helix.core.jsxs.call(null,G__33170,G__33171));
});
if(goog.DEBUG === true){
var G__33232 = G__33135;
(G__33232.displayName = "app.ui.shared.boiler-plant.valves.feedwater.settings/damper-hud-settings");

return G__33232;
} else {
return G__33135;
}
})();




app.ui.shared.boiler_plant.valves.feedwater.settings.flow_rate_hud_settings = (function (){var G__33312 = (function app$ui$shared$boiler_plant$valves$feedwater$settings$flow_rate_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33325 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__33394 = app.ui.shared.components.form.field_row;
var G__33395 = (function (){var obj33415 = ({"label":"FLOW-RATE","children":[(function (){var G__33421 = app.ui.shared.components.form.select;
var G__33422 = (function (){var obj33426 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__33285_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33285_SHARP_], null)], null));
})});
return obj33426;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33421,G__33422) : helix.core.jsx.call(null,G__33421,G__33422));
})(),(function (){var G__33431 = app.ui.shared.components.form.checkbox;
var G__33432 = (function (){var obj33435 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj33435;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33431,G__33432) : helix.core.jsx.call(null,G__33431,G__33432));
})()]});
return obj33415;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33394,G__33395) : helix.core.jsxs.call(null,G__33394,G__33395));
});
if(goog.DEBUG === true){
var G__33470 = G__33312;
(G__33470.displayName = "app.ui.shared.boiler-plant.valves.feedwater.settings/flow-rate-hud-settings");

return G__33470;
} else {
return G__33312;
}
})();




app.ui.shared.boiler_plant.valves.feedwater.settings.damper_init_value = (function (){var G__33573 = (function app$ui$shared$boiler_plant$valves$feedwater$settings$damper_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33586 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-position","feed-water-elect-valve-position",1487608942).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial valve position value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33623 = app.ui.shared.components.form.field_row;
var G__33641 = (function (){var obj33651 = ({"label":"VALVE POSITION","children":[(function (){var G__33660 = app.ui.shared.components.form.input_number;
var G__33661 = helix.impl.props.merge_obj((function (){var obj33677 = ({"value":value,"on-change":(function (p1__33490_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__33490_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33496_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__33496_SHARP_], null)], null));
}));
})});
return obj33677;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33660,G__33661) : helix.core.jsx.call(null,G__33660,G__33661));
})(),(function (){var G__33715 = app.ui.shared.components.form.select;
var G__33716 = (function (){var obj33722 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__33503_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33503_SHARP_], null)], null));
})});
return obj33722;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33715,G__33716) : helix.core.jsx.call(null,G__33715,G__33716));
})()]});
return obj33651;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33623,G__33641) : helix.core.jsxs.call(null,G__33623,G__33641));
});
if(goog.DEBUG === true){
var G__33745 = G__33573;
(G__33745.displayName = "app.ui.shared.boiler-plant.valves.feedwater.settings/damper-init-value");

return G__33745;
} else {
return G__33573;
}
})();




app.ui.shared.boiler_plant.valves.feedwater.settings.flow_rate_init_max_value = (function (){var G__33882 = (function app$ui$shared$boiler_plant$valves$feedwater$settings$flow_rate_init_max_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve-flow-rate-max-converted-value","feedwater-valve-flow-rate-max-converted-value",-1099033612)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-flow-rate","feed-water-elect-valve-flow-rate",997798988).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial flow rate maximum value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33938 = app.ui.shared.components.form.field_row;
var G__33940 = (function (){var obj33947 = ({"label":"MAXIMUM FLOW-RATE","children":[(function (){var G__33951 = app.ui.shared.components.form.input_number;
var G__33952 = helix.impl.props.merge_obj((function (){var obj33961 = ({"value":converted_value,"on-change":(function (p1__33790_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve-flow-rate-max-value","change-feedwater-valve-flow-rate-max-value",-168488603),p1__33790_SHARP_], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33798_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve-flow-rate-max-value","change-feedwater-valve-flow-rate-max-value",-168488603),p1__33798_SHARP_], null));
}));
})});
return obj33961;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33951,G__33952) : helix.core.jsx.call(null,G__33951,G__33952));
})(),(function (){var G__34007 = app.ui.shared.components.form.select;
var G__34008 = (function (){var obj34013 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__33807_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33807_SHARP_], null)], null));
})});
return obj34013;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34007,G__34008) : helix.core.jsx.call(null,G__34007,G__34008));
})()]});
return obj33947;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33938,G__33940) : helix.core.jsxs.call(null,G__33938,G__33940));
});
if(goog.DEBUG === true){
var G__34023 = G__33882;
(G__34023.displayName = "app.ui.shared.boiler-plant.valves.feedwater.settings/flow-rate-init-max-value");

return G__34023;
} else {
return G__33882;
}
})();




app.ui.shared.boiler_plant.valves.feedwater.settings.travel_time_init_value = (function (){var G__34125 = (function app$ui$shared$boiler_plant$valves$feedwater$settings$travel_time_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34138 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-travel-time","feed-water-elect-valve-travel-time",740616170).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial valve travel time value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__34158 = app.ui.shared.components.form.field_row;
var G__34159 = (function (){var obj34162 = ({"label":"VALVE TRAVEL TIME","children":[(function (){var G__34166 = app.ui.shared.components.form.input_number;
var G__34167 = helix.impl.props.merge_obj((function (){var obj34169 = ({"value":value,"on-change":(function (p1__34044_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__34044_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__34045_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__34045_SHARP_], null)], null));
}));
})});
return obj34169;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34166,G__34167) : helix.core.jsx.call(null,G__34166,G__34167));
})(),(function (){var G__34192 = app.ui.shared.components.form.select;
var G__34193 = (function (){var obj34201 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"s",new cljs.core.Keyword(null,"label","label",1718410804),"s"], null)], null),"value":unit,"on-change":(function (p1__34048_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__34048_SHARP_], null)], null));
})});
return obj34201;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34192,G__34193) : helix.core.jsx.call(null,G__34192,G__34193));
})()]});
return obj34162;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34158,G__34159) : helix.core.jsxs.call(null,G__34158,G__34159));
});
if(goog.DEBUG === true){
var G__34218 = G__34125;
(G__34218.displayName = "app.ui.shared.boiler-plant.valves.feedwater.settings/travel-time-init-value");

return G__34218;
} else {
return G__34125;
}
})();




app.ui.shared.boiler_plant.valves.feedwater.settings.potentiometer_connection_init_value = (function (){var G__34245 = (function app$ui$shared$boiler_plant$valves$feedwater$settings$potentiometer_connection_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34254 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"connection","connection",-123599300)], null)], null));
var G__34266 = app.ui.shared.components.form.field_row;
var G__34267 = (function (){var obj34271 = ({"label":"FEEDBACK POTENTIOMETER","children":(function (){var G__34274 = app.ui.shared.components.form.select;
var G__34275 = (function (){var obj34279 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"connected",new cljs.core.Keyword(null,"label","label",1718410804),"connected"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"disconnected",new cljs.core.Keyword(null,"label","label",1718410804),"disconnected"], null)], null),"value":value,"on-change":(function (p1__34228_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"connection","connection",-123599300)], null),p1__34228_SHARP_], null)], null));
})});
return obj34279;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34274,G__34275) : helix.core.jsx.call(null,G__34274,G__34275));
})()});
return obj34271;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34266,G__34267) : helix.core.jsx.call(null,G__34266,G__34267));
});
if(goog.DEBUG === true){
var G__34287 = G__34245;
(G__34287.displayName = "app.ui.shared.boiler-plant.valves.feedwater.settings/potentiometer-connection-init-value");

return G__34287;
} else {
return G__34245;
}
})();




app.ui.shared.boiler_plant.valves.feedwater.settings.potentiometer_damper_closed_init_value = (function (){var G__34312 = (function app$ui$shared$boiler_plant$valves$feedwater$settings$potentiometer_damper_closed_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34316 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"closed","closed",-919675359)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-potentiometer-closed","feed-water-elect-valve-potentiometer-closed",-792284384).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial potentiometer raw value closed must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__34325 = app.ui.shared.components.form.field_row;
var G__34326 = (function (){var obj34332 = ({"label":"POTENTIOMETER RAW VALUE CLOSED","children":[(function (){var G__34333 = app.ui.shared.components.form.input_number;
var G__34334 = helix.impl.props.merge_obj((function (){var obj34336 = ({"value":value,"on-change":(function (p1__34291_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"closed","closed",-919675359)], null),p1__34291_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__34295_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"closed","closed",-919675359)], null),p1__34295_SHARP_], null)], null));
}));
})});
return obj34336;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34333,G__34334) : helix.core.jsx.call(null,G__34333,G__34334));
})(),(function (){var G__34342 = app.ui.shared.components.form.select;
var G__34343 = (function (){var obj34347 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"byte",new cljs.core.Keyword(null,"label","label",1718410804),"byte"], null)], null),"value":unit,"on-change":(function (p1__34296_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__34296_SHARP_], null)], null));
})});
return obj34347;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34342,G__34343) : helix.core.jsx.call(null,G__34342,G__34343));
})()]});
return obj34332;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34325,G__34326) : helix.core.jsxs.call(null,G__34325,G__34326));
});
if(goog.DEBUG === true){
var G__34362 = G__34312;
(G__34362.displayName = "app.ui.shared.boiler-plant.valves.feedwater.settings/potentiometer-damper-closed-init-value");

return G__34362;
} else {
return G__34312;
}
})();




app.ui.shared.boiler_plant.valves.feedwater.settings.potentiometer_damper_open_init_value = (function (){var G__34384 = (function app$ui$shared$boiler_plant$valves$feedwater$settings$potentiometer_damper_open_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34389 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"open","open",-1763596448)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-potentiometer-open","feed-water-elect-valve-potentiometer-open",-1849123324).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial potentiometer raw value open must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__34396 = app.ui.shared.components.form.field_row;
var G__34400 = (function (){var obj34408 = ({"label":"POTENTIOMETER RAW VALUE OPEN","children":[(function (){var G__34409 = app.ui.shared.components.form.input_number;
var G__34410 = helix.impl.props.merge_obj((function (){var obj34412 = ({"value":value,"on-change":(function (p1__34368_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"open","open",-1763596448)], null),p1__34368_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__34369_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"open","open",-1763596448)], null),p1__34369_SHARP_], null)], null));
}));
})});
return obj34412;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34409,G__34410) : helix.core.jsx.call(null,G__34409,G__34410));
})(),(function (){var G__34422 = app.ui.shared.components.form.select;
var G__34423 = (function (){var obj34430 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"byte",new cljs.core.Keyword(null,"label","label",1718410804),"byte"], null)], null),"value":unit,"on-change":(function (p1__34372_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-valve","change-feedwater-valve",1376523295),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"potentiometer","potentiometer",1820319614),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__34372_SHARP_], null)], null));
})});
return obj34430;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34422,G__34423) : helix.core.jsx.call(null,G__34422,G__34423));
})()]});
return obj34408;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34396,G__34400) : helix.core.jsxs.call(null,G__34396,G__34400));
});
if(goog.DEBUG === true){
var G__34445 = G__34384;
(G__34445.displayName = "app.ui.shared.boiler-plant.valves.feedwater.settings/potentiometer-damper-open-init-value");

return G__34445;
} else {
return G__34384;
}
})();




app.ui.shared.boiler_plant.valves.feedwater.settings.settings_form = (function (){var G__34462 = (function app$ui$shared$boiler_plant$valves$feedwater$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__34471 = helix.core.Fragment;
var G__34472 = ({"children": [(function (){var G__34477 = "div";
var G__34478 = (function (){var obj34480 = ({"className":"divider","style":(function (){var obj34482 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj34482;
})(),"children":"head-up-display"});
return obj34480;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34477,G__34478) : helix.core.jsx.call(null,G__34477,G__34478));
})(),(function (){var G__34486 = app.ui.shared.boiler_plant.valves.feedwater.settings.mode_hud_settings;
var G__34487 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34486,G__34487) : helix.core.jsx.call(null,G__34486,G__34487));
})(),(function (){var G__34490 = app.ui.shared.boiler_plant.valves.feedwater.settings.damper_hud_settings;
var G__34491 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34490,G__34491) : helix.core.jsx.call(null,G__34490,G__34491));
})(),(function (){var G__34493 = app.ui.shared.boiler_plant.valves.feedwater.settings.flow_rate_hud_settings;
var G__34494 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34493,G__34494) : helix.core.jsx.call(null,G__34493,G__34494));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__34500 = helix.core.Fragment;
var G__34501 = ({"children": [(function (){var G__34504 = "div";
var G__34505 = (function (){var obj34507 = ({"className":"divider","children":"simulation start values"});
return obj34507;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34504,G__34505) : helix.core.jsx.call(null,G__34504,G__34505));
})(),(function (){var G__34508 = app.ui.shared.boiler_plant.valves.feedwater.settings.damper_init_value;
var G__34509 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34508,G__34509) : helix.core.jsx.call(null,G__34508,G__34509));
})(),(function (){var G__34510 = "div";
var G__34511 = (function (){var obj34513 = ({"className":"divider","children":"specifications"});
return obj34513;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34510,G__34511) : helix.core.jsx.call(null,G__34510,G__34511));
})(),(function (){var G__34514 = app.ui.shared.boiler_plant.valves.feedwater.settings.flow_rate_init_max_value;
var G__34515 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34514,G__34515) : helix.core.jsx.call(null,G__34514,G__34515));
})(),(function (){var G__34516 = app.ui.shared.boiler_plant.valves.feedwater.settings.travel_time_init_value;
var G__34517 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34516,G__34517) : helix.core.jsx.call(null,G__34516,G__34517));
})(),(function (){var G__34518 = app.ui.shared.boiler_plant.valves.feedwater.settings.potentiometer_connection_init_value;
var G__34519 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34518,G__34519) : helix.core.jsx.call(null,G__34518,G__34519));
})(),(function (){var G__34521 = app.ui.shared.boiler_plant.valves.feedwater.settings.potentiometer_damper_closed_init_value;
var G__34522 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34521,G__34522) : helix.core.jsx.call(null,G__34521,G__34522));
})(),(function (){var G__34527 = app.ui.shared.boiler_plant.valves.feedwater.settings.potentiometer_damper_open_init_value;
var G__34528 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34527,G__34528) : helix.core.jsx.call(null,G__34527,G__34528));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34500,G__34501) : helix.core.jsxs.call(null,G__34500,G__34501));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__34471,G__34472) : helix.core.jsxs.call(null,G__34471,G__34472));
});
if(goog.DEBUG === true){
var G__34532 = G__34462;
(G__34532.displayName = "app.ui.shared.boiler-plant.valves.feedwater.settings/settings-form");

return G__34532;
} else {
return G__34462;
}
})();




app.ui.shared.boiler_plant.valves.feedwater.settings.feedwater_valve_settings = (function (){var G__34550 = (function app$ui$shared$boiler_plant$valves$feedwater$settings$feedwater_valve_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__34552 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-valve","feedwater-valve",-302013912),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__34555 = app.ui.shared.components.modal.settings;
var G__34556 = (function (){var obj34560 = ({"title":"Feedwater Electric Valve Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-feedwater-valve-settings","restore-defaults-feedwater-valve-settings",599174434)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-feedwater-valve-settings","apply-feedwater-valve-settings",764907300)], null));
}),"children":(function (){var G__34567 = app.ui.shared.boiler_plant.valves.feedwater.settings.settings_form;
var G__34568 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34567,G__34568) : helix.core.jsx.call(null,G__34567,G__34568));
})()});
return obj34560;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__34555,G__34556) : helix.core.jsx.call(null,G__34555,G__34556));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__34571 = G__34550;
(G__34571.displayName = "app.ui.shared.boiler-plant.valves.feedwater.settings/feedwater-valve-settings");

return G__34571;
} else {
return G__34550;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.valves.feedwater.settings.js.map
