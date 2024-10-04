goog.provide('app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings');

app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.mode_hud_settings = (function (){var G__39484 = (function app$ui$shared$boiler_plant$actuators$blowdown$continuous_valve$settings$mode_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__39487 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__39499 = app.ui.shared.components.form.field_row;
var G__39500 = (function (){var obj39506 = ({"label":"CONTROL MODE","children":[(function (){var G__39511 = app.ui.shared.components.form.select;
var G__39512 = (function (){var obj39516 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manual",new cljs.core.Keyword(null,"label","label",1718410804),"Manual"], null)], null),"value":value,"on-change":(function (p1__39476_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change","continuous-valve/change",-1492217236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__39476_SHARP_], null)], null));
})});
return obj39516;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39511,G__39512) : helix.core.jsx.call(null,G__39511,G__39512));
})(),(function (){var G__39533 = app.ui.shared.components.form.checkbox;
var G__39534 = (function (){var obj39542 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change","continuous-valve/change",-1492217236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj39542;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39533,G__39534) : helix.core.jsx.call(null,G__39533,G__39534));
})()]});
return obj39506;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39499,G__39500) : helix.core.jsxs.call(null,G__39499,G__39500));
});
if(goog.DEBUG === true){
var G__39549 = G__39484;
(G__39549.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.continuous-valve.settings/mode-hud-settings");

return G__39549;
} else {
return G__39484;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.damper_hud_settings = (function (){var G__39582 = (function app$ui$shared$boiler_plant$actuators$blowdown$continuous_valve$settings$damper_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__39599 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__39615 = app.ui.shared.components.form.field_row;
var G__39616 = (function (){var obj39627 = ({"label":"VALVE STATE","children":[(function (){var G__39636 = app.ui.shared.components.form.select;
var G__39637 = (function (){var obj39641 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__39553_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change","continuous-valve/change",-1492217236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39553_SHARP_], null)], null));
})});
return obj39641;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39636,G__39637) : helix.core.jsx.call(null,G__39636,G__39637));
})(),(function (){var G__39651 = app.ui.shared.components.form.checkbox;
var G__39652 = (function (){var obj39658 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change","continuous-valve/change",-1492217236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj39658;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39651,G__39652) : helix.core.jsx.call(null,G__39651,G__39652));
})()]});
return obj39627;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39615,G__39616) : helix.core.jsxs.call(null,G__39615,G__39616));
});
if(goog.DEBUG === true){
var G__39673 = G__39582;
(G__39673.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.continuous-valve.settings/damper-hud-settings");

return G__39673;
} else {
return G__39582;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.flow_rate_hud_settings = (function (){var G__39707 = (function app$ui$shared$boiler_plant$actuators$blowdown$continuous_valve$settings$flow_rate_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__39727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__39775 = app.ui.shared.components.form.field_row;
var G__39776 = (function (){var obj39782 = ({"label":"FLOW-RATE","children":[(function (){var G__39787 = app.ui.shared.components.form.select;
var G__39788 = (function (){var obj39796 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__39683_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change","continuous-valve/change",-1492217236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39683_SHARP_], null)], null));
})});
return obj39796;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39787,G__39788) : helix.core.jsx.call(null,G__39787,G__39788));
})(),(function (){var G__39807 = app.ui.shared.components.form.checkbox;
var G__39808 = (function (){var obj39814 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change","continuous-valve/change",-1492217236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj39814;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39807,G__39808) : helix.core.jsx.call(null,G__39807,G__39808));
})()]});
return obj39782;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39775,G__39776) : helix.core.jsxs.call(null,G__39775,G__39776));
});
if(goog.DEBUG === true){
var G__39831 = G__39707;
(G__39831.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.continuous-valve.settings/flow-rate-hud-settings");

return G__39831;
} else {
return G__39707;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.damper_init_value = (function (){var G__39902 = (function app$ui$shared$boiler_plant$actuators$blowdown$continuous_valve$settings$damper_init_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__39905 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-position","feed-water-elect-valve-position",1487608942).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial valve position value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__39922 = app.ui.shared.components.form.field_row;
var G__39923 = (function (){var obj39928 = ({"label":"VALVE POSITION","children":[(function (){var G__39936 = app.ui.shared.components.form.input_number;
var G__39937 = helix.impl.props.merge_obj((function (){var obj39949 = ({"value":value,"on-change":(function (p1__39847_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change","continuous-valve/change",-1492217236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__39847_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__39851_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change","continuous-valve/change",-1492217236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__39851_SHARP_], null)], null));
}));
})});
return obj39949;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39936,G__39937) : helix.core.jsx.call(null,G__39936,G__39937));
})(),(function (){var G__39978 = app.ui.shared.components.form.select;
var G__39979 = (function (){var obj39981 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__39858_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change","continuous-valve/change",-1492217236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39858_SHARP_], null)], null));
})});
return obj39981;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39978,G__39979) : helix.core.jsx.call(null,G__39978,G__39979));
})()]});
return obj39928;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39922,G__39923) : helix.core.jsxs.call(null,G__39922,G__39923));
});
if(goog.DEBUG === true){
var G__40008 = G__39902;
(G__40008.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.continuous-valve.settings/damper-init-value");

return G__40008;
} else {
return G__39902;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.flow_rate_init_max_value = (function (){var G__40039 = (function app$ui$shared$boiler_plant$actuators$blowdown$continuous_valve$settings$flow_rate_init_max_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40042 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","flow-rate-converted-max-value","continuous-valve/flow-rate-converted-max-value",-1083840441)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blowdown-elect-valve-flow-rate","blowdown-elect-valve-flow-rate",-1776891494).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial flow rate maximum value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__40066 = app.ui.shared.components.form.field_row;
var G__40067 = (function (){var obj40070 = ({"label":"MAXIMUM FLOW-RATE","children":[(function (){var G__40073 = app.ui.shared.components.form.input_number;
var G__40074 = helix.impl.props.merge_obj((function (){var obj40084 = ({"value":converted_value,"on-change":(function (p1__40016_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change-flow-rate-max-value","continuous-valve/change-flow-rate-max-value",750647924),p1__40016_SHARP_], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__40019_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change-flow-rate-max-value","continuous-valve/change-flow-rate-max-value",750647924),p1__40019_SHARP_], null));
}));
})});
return obj40084;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40073,G__40074) : helix.core.jsx.call(null,G__40073,G__40074));
})(),(function (){var G__40105 = app.ui.shared.components.form.select;
var G__40106 = (function (){var obj40108 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__40024_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change","continuous-valve/change",-1492217236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__40024_SHARP_], null)], null));
})});
return obj40108;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40105,G__40106) : helix.core.jsx.call(null,G__40105,G__40106));
})()]});
return obj40070;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40066,G__40067) : helix.core.jsxs.call(null,G__40066,G__40067));
});
if(goog.DEBUG === true){
var G__40140 = G__40039;
(G__40140.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.continuous-valve.settings/flow-rate-init-max-value");

return G__40140;
} else {
return G__40039;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.travel_time_init_value = (function (){var G__40195 = (function app$ui$shared$boiler_plant$actuators$blowdown$continuous_valve$settings$travel_time_init_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40206 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-travel-time","feed-water-elect-valve-travel-time",740616170).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial valve travel time value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__40232 = app.ui.shared.components.form.field_row;
var G__40233 = (function (){var obj40239 = ({"label":"VALVE TRAVEL TIME","children":[(function (){var G__40244 = app.ui.shared.components.form.input_number;
var G__40245 = helix.impl.props.merge_obj((function (){var obj40255 = ({"value":value,"on-change":(function (p1__40161_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change","continuous-valve/change",-1492217236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__40161_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__40163_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change","continuous-valve/change",-1492217236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__40163_SHARP_], null)], null));
}));
})});
return obj40255;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40244,G__40245) : helix.core.jsx.call(null,G__40244,G__40245));
})(),(function (){var G__40272 = app.ui.shared.components.form.select;
var G__40273 = (function (){var obj40279 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"s",new cljs.core.Keyword(null,"label","label",1718410804),"s"], null)], null),"value":unit,"on-change":(function (p1__40165_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","change","continuous-valve/change",-1492217236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"travel-time","travel-time",1584627263),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__40165_SHARP_], null)], null));
})});
return obj40279;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40272,G__40273) : helix.core.jsx.call(null,G__40272,G__40273));
})()]});
return obj40239;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40232,G__40233) : helix.core.jsxs.call(null,G__40232,G__40233));
});
if(goog.DEBUG === true){
var G__40310 = G__40195;
(G__40310.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.continuous-valve.settings/travel-time-init-value");

return G__40310;
} else {
return G__40195;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.settings_form = (function (){var G__40344 = (function app$ui$shared$boiler_plant$actuators$blowdown$continuous_valve$settings$settings_form_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40354 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__40374 = helix.core.Fragment;
var G__40375 = ({"children": [(function (){var G__40384 = "div";
var G__40385 = (function (){var obj40390 = ({"className":"divider","style":(function (){var obj40394 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj40394;
})(),"children":"head-up-display"});
return obj40390;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40384,G__40385) : helix.core.jsx.call(null,G__40384,G__40385));
})(),(function (){var G__40411 = app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.mode_hud_settings;
var G__40412 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40411,G__40412) : helix.core.jsx.call(null,G__40411,G__40412));
})(),(function (){var G__40424 = app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.damper_hud_settings;
var G__40425 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40424,G__40425) : helix.core.jsx.call(null,G__40424,G__40425));
})(),(function (){var G__40441 = app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.flow_rate_hud_settings;
var G__40442 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40441,G__40442) : helix.core.jsx.call(null,G__40441,G__40442));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__40462 = helix.core.Fragment;
var G__40463 = ({"children": [(function (){var G__40466 = "div";
var G__40467 = (function (){var obj40474 = ({"className":"divider","children":"simulation start values"});
return obj40474;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40466,G__40467) : helix.core.jsx.call(null,G__40466,G__40467));
})(),(function (){var G__40481 = app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.damper_init_value;
var G__40482 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40481,G__40482) : helix.core.jsx.call(null,G__40481,G__40482));
})(),(function (){var G__40496 = "div";
var G__40497 = (function (){var obj40501 = ({"className":"divider","children":"specifications"});
return obj40501;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40496,G__40497) : helix.core.jsx.call(null,G__40496,G__40497));
})(),(function (){var G__40515 = app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.flow_rate_init_max_value;
var G__40516 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40515,G__40516) : helix.core.jsx.call(null,G__40515,G__40516));
})(),(function (){var G__40532 = app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.travel_time_init_value;
var G__40533 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40532,G__40533) : helix.core.jsx.call(null,G__40532,G__40533));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40462,G__40463) : helix.core.jsxs.call(null,G__40462,G__40463));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40374,G__40375) : helix.core.jsxs.call(null,G__40374,G__40375));
});
if(goog.DEBUG === true){
var G__40555 = G__40344;
(G__40555.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.continuous-valve.settings/settings-form");

return G__40555;
} else {
return G__40344;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.continuous_valve_settings = (function (){var G__40591 = (function app$ui$shared$boiler_plant$actuators$blowdown$continuous_valve$settings$continuous_valve_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__40601 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"continuous-valve","continuous-valve",1388441611),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__40614 = app.ui.shared.components.modal.settings;
var G__40615 = (function (){var obj40620 = ({"title":"Continuous Blowdown Valve Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","restore-defaults-settings","continuous-valve/restore-defaults-settings",-1003703491)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("continuous-valve","apply-settings","continuous-valve/apply-settings",2036198900)], null));
}),"children":(function (){var G__40625 = app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.settings_form;
var G__40626 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40625,G__40626) : helix.core.jsx.call(null,G__40625,G__40626));
})()});
return obj40620;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40614,G__40615) : helix.core.jsx.call(null,G__40614,G__40615));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__40643 = G__40591;
(G__40643.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.continuous-valve.settings/continuous-valve-settings");

return G__40643;
} else {
return G__40591;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.blowdown.continuous_valve.settings.js.map
