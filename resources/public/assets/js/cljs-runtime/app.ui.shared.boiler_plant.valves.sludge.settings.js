goog.provide('app.ui.shared.boiler_plant.valves.sludge.settings');

app.ui.shared.boiler_plant.valves.sludge.settings.mode_hud_settings = (function (){var G__32974 = (function app$ui$shared$boiler_plant$valves$sludge$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__32997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__33064 = app.ui.shared.components.form.field_row;
var G__33065 = (function (){var obj33068 = ({"label":"CONTROL MODE","children":[(function (){var G__33069 = app.ui.shared.components.form.select;
var G__33071 = (function (){var obj33073 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manual",new cljs.core.Keyword(null,"label","label",1718410804),"Manual"], null)], null),"value":value,"on-change":(function (p1__32926_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__32926_SHARP_], null)], null));
})});
return obj33073;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33069,G__33071) : helix.core.jsx.call(null,G__33069,G__33071));
})(),(function (){var G__33082 = app.ui.shared.components.form.checkbox;
var G__33083 = (function (){var obj33090 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj33090;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33082,G__33083) : helix.core.jsx.call(null,G__33082,G__33083));
})()]});
return obj33068;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33064,G__33065) : helix.core.jsxs.call(null,G__33064,G__33065));
});
if(goog.DEBUG === true){
var G__33099 = G__32974;
(G__33099.displayName = "app.ui.shared.boiler-plant.valves.sludge.settings/mode-hud-settings");

return G__33099;
} else {
return G__32974;
}
})();




app.ui.shared.boiler_plant.valves.sludge.settings.damper_hud_settings = (function (){var G__33123 = (function app$ui$shared$boiler_plant$valves$sludge$settings$damper_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33127 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__33136 = app.ui.shared.components.form.field_row;
var G__33137 = (function (){var obj33141 = ({"label":"VALVE STATE","children":[(function (){var G__33151 = app.ui.shared.components.form.select;
var G__33152 = (function (){var obj33157 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"open/close",new cljs.core.Keyword(null,"label","label",1718410804),"open/close"], null)], null),"value":unit,"on-change":(function (p1__33107_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33107_SHARP_], null)], null));
})});
return obj33157;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33151,G__33152) : helix.core.jsx.call(null,G__33151,G__33152));
})(),(function (){var G__33164 = app.ui.shared.components.form.checkbox;
var G__33165 = (function (){var obj33169 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj33169;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33164,G__33165) : helix.core.jsx.call(null,G__33164,G__33165));
})()]});
return obj33141;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33136,G__33137) : helix.core.jsxs.call(null,G__33136,G__33137));
});
if(goog.DEBUG === true){
var G__33182 = G__33123;
(G__33182.displayName = "app.ui.shared.boiler-plant.valves.sludge.settings/damper-hud-settings");

return G__33182;
} else {
return G__33123;
}
})();




app.ui.shared.boiler_plant.valves.sludge.settings.flow_rate_hud_settings = (function (){var G__33207 = (function app$ui$shared$boiler_plant$valves$sludge$settings$flow_rate_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__33230 = app.ui.shared.components.form.field_row;
var G__33231 = (function (){var obj33236 = ({"label":"FLOW-RATE","children":[(function (){var G__33238 = app.ui.shared.components.form.select;
var G__33239 = (function (){var obj33245 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kg/s",new cljs.core.Keyword(null,"label","label",1718410804),"kg/s"], null)], null),"value":unit,"on-change":(function (p1__33189_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33189_SHARP_], null)], null));
})});
return obj33245;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33238,G__33239) : helix.core.jsx.call(null,G__33238,G__33239));
})(),(function (){var G__33260 = app.ui.shared.components.form.checkbox;
var G__33261 = (function (){var obj33264 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj33264;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33260,G__33261) : helix.core.jsx.call(null,G__33260,G__33261));
})()]});
return obj33236;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33230,G__33231) : helix.core.jsxs.call(null,G__33230,G__33231));
});
if(goog.DEBUG === true){
var G__33281 = G__33207;
(G__33281.displayName = "app.ui.shared.boiler-plant.valves.sludge.settings/flow-rate-hud-settings");

return G__33281;
} else {
return G__33207;
}
})();




app.ui.shared.boiler_plant.valves.sludge.settings.countdown_hud_settings = (function (){var G__33314 = (function app$ui$shared$boiler_plant$valves$sludge$settings$countdown_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33328 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__33342 = app.ui.shared.components.form.field_row;
var G__33343 = (function (){var obj33345 = ({"label":"REMAINING RUNTIME","children":[(function (){var G__33351 = app.ui.shared.components.form.select;
var G__33352 = (function (){var obj33354 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"s",new cljs.core.Keyword(null,"label","label",1718410804),"HH:MM:SS"], null)], null),"value":unit,"on-change":(function (p1__33289_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33289_SHARP_], null)], null));
})});
return obj33354;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33351,G__33352) : helix.core.jsx.call(null,G__33351,G__33352));
})(),(function (){var G__33365 = app.ui.shared.components.form.checkbox;
var G__33366 = (function (){var obj33373 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj33373;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33365,G__33366) : helix.core.jsx.call(null,G__33365,G__33366));
})()]});
return obj33345;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33342,G__33343) : helix.core.jsxs.call(null,G__33342,G__33343));
});
if(goog.DEBUG === true){
var G__33393 = G__33314;
(G__33393.displayName = "app.ui.shared.boiler-plant.valves.sludge.settings/countdown-hud-settings");

return G__33393;
} else {
return G__33314;
}
})();




app.ui.shared.boiler_plant.valves.sludge.settings.countdown_init_value = (function (){var G__33428 = (function app$ui$shared$boiler_plant$valves$sludge$settings$countdown_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33436 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve-init-countdown-converted-value","sludge-valve-init-countdown-converted-value",429137117)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blowdown-countdown-init-value","blowdown-countdown-init-value",-743678411).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial remaining runtime value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33453 = app.ui.shared.components.form.field_row;
var G__33454 = (function (){var obj33461 = ({"label":"REMAINING RUNTIME","children":[(function (){var G__33466 = app.ui.shared.components.form.input_number;
var G__33467 = helix.impl.props.merge_obj((function (){var obj33475 = ({"value":converted_value,"on-change":(function (p1__33401_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve-init-countdown-value","change-sludge-valve-init-countdown-value",652007406),p1__33401_SHARP_], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33409_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve-init-countdown-value","change-sludge-valve-init-countdown-value",652007406),p1__33409_SHARP_], null));
}));
})});
return obj33475;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33466,G__33467) : helix.core.jsx.call(null,G__33466,G__33467));
})(),(function (){var G__33497 = app.ui.shared.components.form.select;
var G__33498 = (function (){var obj33507 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"s",new cljs.core.Keyword(null,"label","label",1718410804),"s"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"m",new cljs.core.Keyword(null,"label","label",1718410804),"m"], null)], null),"value":unit,"on-change":(function (p1__33413_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33413_SHARP_], null)], null));
})});
return obj33507;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33497,G__33498) : helix.core.jsx.call(null,G__33497,G__33498));
})()]});
return obj33461;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33453,G__33454) : helix.core.jsxs.call(null,G__33453,G__33454));
});
if(goog.DEBUG === true){
var G__33534 = G__33428;
(G__33534.displayName = "app.ui.shared.boiler-plant.valves.sludge.settings/countdown-init-value");

return G__33534;
} else {
return G__33428;
}
})();




app.ui.shared.boiler_plant.valves.sludge.settings.flow_rate_init_max_value = (function (){var G__33572 = (function app$ui$shared$boiler_plant$valves$sludge$settings$flow_rate_init_max_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33582 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flow-rate-kg-s","flow-rate-kg-s",1902668845).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial flow rate maximum value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__33608 = app.ui.shared.components.form.field_row;
var G__33609 = (function (){var obj33611 = ({"label":"MAXIMUM FLOW-RATE","children":[(function (){var G__33617 = app.ui.shared.components.form.input_number;
var G__33618 = helix.impl.props.merge_obj((function (){var obj33626 = ({"value":value,"on-change":(function (p1__33541_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__33541_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__33547_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__33547_SHARP_], null)], null));
}));
})});
return obj33626;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33617,G__33618) : helix.core.jsx.call(null,G__33617,G__33618));
})(),(function (){var G__33656 = app.ui.shared.components.form.select;
var G__33657 = (function (){var obj33666 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kg/s",new cljs.core.Keyword(null,"label","label",1718410804),"kg/s"], null)], null),"value":unit,"on-change":(function (p1__33552_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-sludge-valve","change-sludge-valve",-664241740),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__33552_SHARP_], null)], null));
})});
return obj33666;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33656,G__33657) : helix.core.jsx.call(null,G__33656,G__33657));
})()]});
return obj33611;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33608,G__33609) : helix.core.jsxs.call(null,G__33608,G__33609));
});
if(goog.DEBUG === true){
var G__33688 = G__33572;
(G__33688.displayName = "app.ui.shared.boiler-plant.valves.sludge.settings/flow-rate-init-max-value");

return G__33688;
} else {
return G__33572;
}
})();




app.ui.shared.boiler_plant.valves.sludge.settings.settings_form = (function (){var G__33723 = (function app$ui$shared$boiler_plant$valves$sludge$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33733 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__33746 = helix.core.Fragment;
var G__33747 = ({"children": [(function (){var G__33752 = "div";
var G__33753 = (function (){var obj33759 = ({"className":"divider","style":(function (){var obj33764 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj33764;
})(),"children":"head-up-display"});
return obj33759;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33752,G__33753) : helix.core.jsx.call(null,G__33752,G__33753));
})(),(function (){var G__33775 = app.ui.shared.boiler_plant.valves.sludge.settings.mode_hud_settings;
var G__33776 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33775,G__33776) : helix.core.jsx.call(null,G__33775,G__33776));
})(),(function (){var G__33781 = app.ui.shared.boiler_plant.valves.sludge.settings.damper_hud_settings;
var G__33782 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33781,G__33782) : helix.core.jsx.call(null,G__33781,G__33782));
})(),(function (){var G__33786 = app.ui.shared.boiler_plant.valves.sludge.settings.flow_rate_hud_settings;
var G__33787 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33786,G__33787) : helix.core.jsx.call(null,G__33786,G__33787));
})(),(function (){var G__33799 = app.ui.shared.boiler_plant.valves.sludge.settings.countdown_hud_settings;
var G__33802 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33799,G__33802) : helix.core.jsx.call(null,G__33799,G__33802));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__33819 = helix.core.Fragment;
var G__33820 = ({"children": [(function (){var G__33824 = "div";
var G__33825 = (function (){var obj33829 = ({"className":"divider","children":"simulation start values"});
return obj33829;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33824,G__33825) : helix.core.jsx.call(null,G__33824,G__33825));
})(),(function (){var G__33838 = app.ui.shared.boiler_plant.valves.sludge.settings.countdown_init_value;
var G__33840 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33838,G__33840) : helix.core.jsx.call(null,G__33838,G__33840));
})(),(function (){var G__33846 = "div";
var G__33847 = (function (){var obj33857 = ({"className":"divider","children":"specifications"});
return obj33857;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33846,G__33847) : helix.core.jsx.call(null,G__33846,G__33847));
})(),(function (){var G__33868 = app.ui.shared.boiler_plant.valves.sludge.settings.flow_rate_init_max_value;
var G__33869 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33868,G__33869) : helix.core.jsx.call(null,G__33868,G__33869));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33819,G__33820) : helix.core.jsxs.call(null,G__33819,G__33820));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__33746,G__33747) : helix.core.jsxs.call(null,G__33746,G__33747));
});
if(goog.DEBUG === true){
var G__33881 = G__33723;
(G__33881.displayName = "app.ui.shared.boiler-plant.valves.sludge.settings/settings-form");

return G__33881;
} else {
return G__33723;
}
})();




app.ui.shared.boiler_plant.valves.sludge.settings.sludge_valve_settings = (function (){var G__33904 = (function app$ui$shared$boiler_plant$valves$sludge$settings$sludge_valve_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__33912 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__33920 = app.ui.shared.components.modal.settings;
var G__33921 = (function (){var obj33927 = ({"title":"Bottom Blowdown Valve Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-sludge-valve-settings","restore-defaults-sludge-valve-settings",-406134008)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-sludge-valve-settings","apply-sludge-valve-settings",1278915756)], null));
}),"children":(function (){var G__33941 = app.ui.shared.boiler_plant.valves.sludge.settings.settings_form;
var G__33942 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33941,G__33942) : helix.core.jsx.call(null,G__33941,G__33942));
})()});
return obj33927;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__33920,G__33921) : helix.core.jsx.call(null,G__33920,G__33921));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__33953 = G__33904;
(G__33953.displayName = "app.ui.shared.boiler-plant.valves.sludge.settings/sludge-valve-settings");

return G__33953;
} else {
return G__33904;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.valves.sludge.settings.js.map
