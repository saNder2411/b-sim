goog.provide('app.shared.boiler_plant.valves.continuous.settings');

app.shared.boiler_plant.valves.continuous.settings.mode_hud_settings = (function (){var G__67570 = (function app$shared$boiler_plant$valves$continuous$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67577 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__67584 = app.shared.components.form.field_row;
var G__67585 = (function (){var obj67591 = ({"label":"CONTROL MODE","children":[(function (){var G__67594 = app.shared.components.form.select;
var G__67595 = (function (){var obj67603 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manual",new cljs.core.Keyword(null,"label","label",1718410804),"Manual"], null)], null),"value":value,"on-change":(function (p1__67566_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__67566_SHARP_], null)], null));
})});
return obj67603;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67594,G__67595) : helix.core.jsx.call(null,G__67594,G__67595));
})(),(function (){var G__67609 = app.shared.components.form.checkbox;
var G__67610 = (function (){var obj67617 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj67617;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67609,G__67610) : helix.core.jsx.call(null,G__67609,G__67610));
})()]});
return obj67591;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67584,G__67585) : helix.core.jsxs.call(null,G__67584,G__67585));
});
if(goog.DEBUG === true){
var G__67621 = G__67570;
(G__67621.displayName = "app.shared.boiler-plant.valves.continuous.settings/mode-hud-settings");

return G__67621;
} else {
return G__67570;
}
})();




app.shared.boiler_plant.valves.continuous.settings.damper_hud_settings = (function (){var G__67639 = (function app$shared$boiler_plant$valves$continuous$settings$damper_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__67655 = app.shared.components.form.field_row;
var G__67656 = (function (){var obj67663 = ({"label":"VALVE STATE","children":[(function (){var G__67668 = app.shared.components.form.select;
var G__67669 = (function (){var obj67675 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__67627_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67627_SHARP_], null)], null));
})});
return obj67675;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67668,G__67669) : helix.core.jsx.call(null,G__67668,G__67669));
})(),(function (){var G__67682 = app.shared.components.form.checkbox;
var G__67683 = (function (){var obj67689 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj67689;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67682,G__67683) : helix.core.jsx.call(null,G__67682,G__67683));
})()]});
return obj67663;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67655,G__67656) : helix.core.jsxs.call(null,G__67655,G__67656));
});
if(goog.DEBUG === true){
var G__67695 = G__67639;
(G__67695.displayName = "app.shared.boiler-plant.valves.continuous.settings/damper-hud-settings");

return G__67695;
} else {
return G__67639;
}
})();




app.shared.boiler_plant.valves.continuous.settings.flow_rate_hud_settings = (function (){var G__67717 = (function app$shared$boiler_plant$valves$continuous$settings$flow_rate_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__67732 = app.shared.components.form.field_row;
var G__67733 = (function (){var obj67739 = ({"label":"FLOW-RATE","children":[(function (){var G__67744 = app.shared.components.form.select;
var G__67745 = (function (){var obj67753 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__67703_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67703_SHARP_], null)], null));
})});
return obj67753;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67744,G__67745) : helix.core.jsx.call(null,G__67744,G__67745));
})(),(function (){var G__67758 = app.shared.components.form.checkbox;
var G__67759 = (function (){var obj67765 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj67765;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67758,G__67759) : helix.core.jsx.call(null,G__67758,G__67759));
})()]});
return obj67739;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67732,G__67733) : helix.core.jsxs.call(null,G__67732,G__67733));
});
if(goog.DEBUG === true){
var G__67774 = G__67717;
(G__67774.displayName = "app.shared.boiler-plant.valves.continuous.settings/flow-rate-hud-settings");

return G__67774;
} else {
return G__67717;
}
})();




app.shared.boiler_plant.valves.continuous.settings.damper_init_value = (function (){var G__67806 = (function app$shared$boiler_plant$valves$continuous$settings$damper_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67816 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-position","feed-water-elect-valve-position",1487608942).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial valve position value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__67832 = app.shared.components.form.field_row;
var G__67833 = (function (){var obj67840 = ({"label":"VALVE POSITION","children":[(function (){var G__67841 = app.shared.components.form.input_number;
var G__67842 = helix.impl.props.merge_obj((function (){var obj67845 = ({"value":value,"on-change":(function (p1__67785_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__67785_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__67788_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__67788_SHARP_], null)], null));
}));
})});
return obj67845;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67841,G__67842) : helix.core.jsx.call(null,G__67841,G__67842));
})(),(function (){var G__67864 = app.shared.components.form.select;
var G__67865 = (function (){var obj67867 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__67791_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67791_SHARP_], null)], null));
})});
return obj67867;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67864,G__67865) : helix.core.jsx.call(null,G__67864,G__67865));
})()]});
return obj67840;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67832,G__67833) : helix.core.jsxs.call(null,G__67832,G__67833));
});
if(goog.DEBUG === true){
var G__67876 = G__67806;
(G__67876.displayName = "app.shared.boiler-plant.valves.continuous.settings/damper-init-value");

return G__67876;
} else {
return G__67806;
}
})();




app.shared.boiler_plant.valves.continuous.settings.flow_rate_init_max_value = (function (){var G__67908 = (function app$shared$boiler_plant$valves$continuous$settings$flow_rate_init_max_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67913 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve-flow-rate-max-converted-value","continuous-valve-flow-rate-max-converted-value",847366446)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blowdown-elect-valve-flow-rate","blowdown-elect-valve-flow-rate",-1776891494).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial flow rate maximum value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__67923 = app.shared.components.form.field_row;
var G__67924 = (function (){var obj67927 = ({"label":"MAXIMUM FLOW-RATE","children":[(function (){var G__67930 = app.shared.components.form.input_number;
var G__67931 = helix.impl.props.merge_obj((function (){var obj67936 = ({"value":converted_value,"on-change":(function (p1__67886_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve-flow-rate-max-value","change-continuous-valve-flow-rate-max-value",637447126),p1__67886_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__67889_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve-flow-rate-max-value","change-continuous-valve-flow-rate-max-value",637447126),p1__67889_SHARP_], null));
}));
})});
return obj67936;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67930,G__67931) : helix.core.jsx.call(null,G__67930,G__67931));
})(),(function (){var G__67950 = app.shared.components.form.select;
var G__67951 = (function (){var obj67955 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__67892_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67892_SHARP_], null)], null));
})});
return obj67955;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__67950,G__67951) : helix.core.jsx.call(null,G__67950,G__67951));
})()]});
return obj67927;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__67923,G__67924) : helix.core.jsxs.call(null,G__67923,G__67924));
});
if(goog.DEBUG === true){
var G__67964 = G__67908;
(G__67964.displayName = "app.shared.boiler-plant.valves.continuous.settings/flow-rate-init-max-value");

return G__67964;
} else {
return G__67908;
}
})();




app.shared.boiler_plant.valves.continuous.settings.travel_time_init_value = (function (){var G__67993 = (function app$shared$boiler_plant$valves$continuous$settings$travel_time_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__67997 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-travel-time","feed-water-elect-valve-travel-time",740616170).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial valve travel time value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__68007 = app.shared.components.form.field_row;
var G__68008 = (function (){var obj68011 = ({"label":"VALVE TRAVEL TIME","children":[(function (){var G__68014 = app.shared.components.form.input_number;
var G__68015 = helix.impl.props.merge_obj((function (){var obj68023 = ({"value":value,"on-change":(function (p1__67967_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__67967_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__67973_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__67973_SHARP_], null)], null));
}));
})});
return obj68023;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68014,G__68015) : helix.core.jsx.call(null,G__68014,G__68015));
})(),(function (){var G__68035 = app.shared.components.form.select;
var G__68036 = (function (){var obj68039 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"s",new cljs.core.Keyword(null,"label","label",1718410804),"s"], null)], null),"value":unit,"on-change":(function (p1__67974_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-continuous-valve","change-continuous-valve",197127232),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__67974_SHARP_], null)], null));
})});
return obj68039;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68035,G__68036) : helix.core.jsx.call(null,G__68035,G__68036));
})()]});
return obj68011;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68007,G__68008) : helix.core.jsxs.call(null,G__68007,G__68008));
});
if(goog.DEBUG === true){
var G__68049 = G__67993;
(G__68049.displayName = "app.shared.boiler-plant.valves.continuous.settings/travel-time-init-value");

return G__68049;
} else {
return G__67993;
}
})();




app.shared.boiler_plant.valves.continuous.settings.settings_form = (function (){var G__68071 = (function app$shared$boiler_plant$valves$continuous$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__68077 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__68085 = helix.core.Fragment;
var G__68086 = ({"children": [(function (){var G__68089 = "div";
var G__68090 = (function (){var obj68095 = ({"className":"divider","style":(function (){var obj68099 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj68099;
})(),"children":"head-up-display"});
return obj68095;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68089,G__68090) : helix.core.jsx.call(null,G__68089,G__68090));
})(),(function (){var G__68105 = app.shared.boiler_plant.valves.continuous.settings.mode_hud_settings;
var G__68106 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68105,G__68106) : helix.core.jsx.call(null,G__68105,G__68106));
})(),(function (){var G__68110 = app.shared.boiler_plant.valves.continuous.settings.damper_hud_settings;
var G__68111 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68110,G__68111) : helix.core.jsx.call(null,G__68110,G__68111));
})(),(function (){var G__68117 = app.shared.boiler_plant.valves.continuous.settings.flow_rate_hud_settings;
var G__68118 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68117,G__68118) : helix.core.jsx.call(null,G__68117,G__68118));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__68123 = helix.core.Fragment;
var G__68124 = ({"children": [(function (){var G__68127 = "div";
var G__68128 = (function (){var obj68133 = ({"className":"divider","children":"simulation start values"});
return obj68133;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68127,G__68128) : helix.core.jsx.call(null,G__68127,G__68128));
})(),(function (){var G__68138 = app.shared.boiler_plant.valves.continuous.settings.damper_init_value;
var G__68139 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68138,G__68139) : helix.core.jsx.call(null,G__68138,G__68139));
})(),(function (){var G__68145 = "div";
var G__68146 = (function (){var obj68148 = ({"className":"divider","children":"specifications"});
return obj68148;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68145,G__68146) : helix.core.jsx.call(null,G__68145,G__68146));
})(),(function (){var G__68151 = app.shared.boiler_plant.valves.continuous.settings.flow_rate_init_max_value;
var G__68152 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68151,G__68152) : helix.core.jsx.call(null,G__68151,G__68152));
})(),(function (){var G__68156 = app.shared.boiler_plant.valves.continuous.settings.travel_time_init_value;
var G__68157 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68156,G__68157) : helix.core.jsx.call(null,G__68156,G__68157));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68123,G__68124) : helix.core.jsxs.call(null,G__68123,G__68124));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__68085,G__68086) : helix.core.jsxs.call(null,G__68085,G__68086));
});
if(goog.DEBUG === true){
var G__68165 = G__68071;
(G__68165.displayName = "app.shared.boiler-plant.valves.continuous.settings/settings-form");

return G__68165;
} else {
return G__68071;
}
})();




app.shared.boiler_plant.valves.continuous.settings.continuous_valve_settings = (function (){var G__68181 = (function app$shared$boiler_plant$valves$continuous$settings$continuous_valve_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__68187 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__68190 = app.shared.components.modal.settings;
var G__68191 = (function (){var obj68193 = ({"title":"Continuous Blowdown Valve Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-continuous-valve-settings","restore-defaults-continuous-valve-settings",1964427588)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-continuous-valve-settings","apply-continuous-valve-settings",541401155)], null));
}),"children":(function (){var G__68195 = app.shared.boiler_plant.valves.continuous.settings.settings_form;
var G__68196 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68195,G__68196) : helix.core.jsx.call(null,G__68195,G__68196));
})()});
return obj68193;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__68190,G__68191) : helix.core.jsx.call(null,G__68190,G__68191));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__68201 = G__68181;
(G__68201.displayName = "app.shared.boiler-plant.valves.continuous.settings/continuous-valve-settings");

return G__68201;
} else {
return G__68181;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.valves.continuous.settings.js.map
