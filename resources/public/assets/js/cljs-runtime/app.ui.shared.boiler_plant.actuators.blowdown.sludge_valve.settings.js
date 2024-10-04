goog.provide('app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings');

app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.mode_hud_settings = (function (){var G__37976 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$mode_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37980 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__37985 = app.ui.shared.components.form.field_row;
var G__37986 = (function (){var obj37989 = ({"label":"CONTROL MODE","children":[(function (){var G__37992 = app.ui.shared.components.form.select;
var G__37993 = (function (){var obj37995 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manual",new cljs.core.Keyword(null,"label","label",1718410804),"Manual"], null)], null),"value":value,"on-change":(function (p1__37969_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","change","sludge-valve/change",-902580431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__37969_SHARP_], null)], null));
})});
return obj37995;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__37992,G__37993) : helix.core.jsx.call(null,G__37992,G__37993));
})(),(function (){var G__38011 = app.ui.shared.components.form.checkbox;
var G__38012 = (function (){var obj38016 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","change","sludge-valve/change",-902580431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj38016;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38011,G__38012) : helix.core.jsx.call(null,G__38011,G__38012));
})()]});
return obj37989;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__37985,G__37986) : helix.core.jsxs.call(null,G__37985,G__37986));
});
if(goog.DEBUG === true){
var G__38021 = G__37976;
(G__38021.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/mode-hud-settings");

return G__38021;
} else {
return G__37976;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.damper_hud_settings = (function (){var G__38035 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$damper_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38039 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__38051 = app.ui.shared.components.form.field_row;
var G__38052 = (function (){var obj38055 = ({"label":"VALVE STATE","children":[(function (){var G__38056 = app.ui.shared.components.form.select;
var G__38057 = (function (){var obj38074 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"open/close",new cljs.core.Keyword(null,"label","label",1718410804),"open/close"], null)], null),"value":unit,"on-change":(function (p1__38032_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","change","sludge-valve/change",-902580431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38032_SHARP_], null)], null));
})});
return obj38074;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38056,G__38057) : helix.core.jsx.call(null,G__38056,G__38057));
})(),(function (){var G__38076 = app.ui.shared.components.form.checkbox;
var G__38077 = (function (){var obj38082 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","change","sludge-valve/change",-902580431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"damper","damper",870664161),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj38082;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38076,G__38077) : helix.core.jsx.call(null,G__38076,G__38077));
})()]});
return obj38055;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38051,G__38052) : helix.core.jsxs.call(null,G__38051,G__38052));
});
if(goog.DEBUG === true){
var G__38097 = G__38035;
(G__38097.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/damper-hud-settings");

return G__38097;
} else {
return G__38035;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.flow_rate_hud_settings = (function (){var G__38105 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$flow_rate_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38106 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__38111 = app.ui.shared.components.form.field_row;
var G__38112 = (function (){var obj38114 = ({"label":"FLOW-RATE","children":[(function (){var G__38115 = app.ui.shared.components.form.select;
var G__38116 = (function (){var obj38120 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kg/s",new cljs.core.Keyword(null,"label","label",1718410804),"kg/s"], null)], null),"value":unit,"on-change":(function (p1__38102_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","change","sludge-valve/change",-902580431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38102_SHARP_], null)], null));
})});
return obj38120;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38115,G__38116) : helix.core.jsx.call(null,G__38115,G__38116));
})(),(function (){var G__38127 = app.ui.shared.components.form.checkbox;
var G__38128 = (function (){var obj38130 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","change","sludge-valve/change",-902580431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj38130;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38127,G__38128) : helix.core.jsx.call(null,G__38127,G__38128));
})()]});
return obj38114;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38111,G__38112) : helix.core.jsxs.call(null,G__38111,G__38112));
});
if(goog.DEBUG === true){
var G__38143 = G__38105;
(G__38143.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/flow-rate-hud-settings");

return G__38143;
} else {
return G__38105;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.countdown_hud_settings = (function (){var G__38157 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$countdown_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38160 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__38164 = app.ui.shared.components.form.field_row;
var G__38165 = (function (){var obj38167 = ({"label":"REMAINING RUNTIME","children":[(function (){var G__38169 = app.ui.shared.components.form.select;
var G__38170 = (function (){var obj38173 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"s",new cljs.core.Keyword(null,"label","label",1718410804),"HH:MM:SS"], null)], null),"value":unit,"on-change":(function (p1__38153_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","change","sludge-valve/change",-902580431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38153_SHARP_], null)], null));
})});
return obj38173;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38169,G__38170) : helix.core.jsx.call(null,G__38169,G__38170));
})(),(function (){var G__38181 = app.ui.shared.components.form.checkbox;
var G__38182 = (function (){var obj38184 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","change","sludge-valve/change",-902580431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj38184;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38181,G__38182) : helix.core.jsx.call(null,G__38181,G__38182));
})()]});
return obj38167;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38164,G__38165) : helix.core.jsxs.call(null,G__38164,G__38165));
});
if(goog.DEBUG === true){
var G__38203 = G__38157;
(G__38203.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/countdown-hud-settings");

return G__38203;
} else {
return G__38157;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.countdown_init_value = (function (){var G__38233 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$countdown_init_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38241 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","init-countdown-converted-value","sludge-valve/init-countdown-converted-value",-411089552)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blowdown-countdown-init-value","blowdown-countdown-init-value",-743678411).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial remaining runtime value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__38265 = app.ui.shared.components.form.field_row;
var G__38266 = (function (){var obj38270 = ({"label":"REMAINING RUNTIME","children":[(function (){var G__38273 = app.ui.shared.components.form.input_number;
var G__38274 = helix.impl.props.merge_obj((function (){var obj38278 = ({"value":converted_value,"on-change":(function (p1__38211_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","change-init-countdown-value","sludge-valve/change-init-countdown-value",754770684),p1__38211_SHARP_], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__38217_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","change-init-countdown-value","sludge-valve/change-init-countdown-value",754770684),p1__38217_SHARP_], null));
}));
})});
return obj38278;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38273,G__38274) : helix.core.jsx.call(null,G__38273,G__38274));
})(),(function (){var G__38292 = app.ui.shared.components.form.select;
var G__38293 = (function (){var obj38295 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"s",new cljs.core.Keyword(null,"label","label",1718410804),"s"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"m",new cljs.core.Keyword(null,"label","label",1718410804),"m"], null)], null),"value":unit,"on-change":(function (p1__38219_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","change","sludge-valve/change",-902580431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"countdown","countdown",-1468813996),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38219_SHARP_], null)], null));
})});
return obj38295;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38292,G__38293) : helix.core.jsx.call(null,G__38292,G__38293));
})()]});
return obj38270;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38265,G__38266) : helix.core.jsxs.call(null,G__38265,G__38266));
});
if(goog.DEBUG === true){
var G__38326 = G__38233;
(G__38326.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/countdown-init-value");

return G__38326;
} else {
return G__38233;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.flow_rate_init_max_value = (function (){var G__38347 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$flow_rate_init_max_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max","max",61366548)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flow-rate-kg-s","flow-rate-kg-s",1902668845).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial flow rate maximum value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__38382 = app.ui.shared.components.form.field_row;
var G__38383 = (function (){var obj38385 = ({"label":"MAXIMUM FLOW-RATE","children":[(function (){var G__38386 = app.ui.shared.components.form.input_number;
var G__38387 = helix.impl.props.merge_obj((function (){var obj38389 = ({"value":value,"on-change":(function (p1__38334_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","change","sludge-valve/change",-902580431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max","max",61366548)], null),p1__38334_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__38335_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","change","sludge-valve/change",-902580431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"max","max",61366548)], null),p1__38335_SHARP_], null)], null));
}));
})});
return obj38389;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38386,G__38387) : helix.core.jsx.call(null,G__38386,G__38387));
})(),(function (){var G__38410 = app.ui.shared.components.form.select;
var G__38411 = (function (){var obj38413 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"kg/s",new cljs.core.Keyword(null,"label","label",1718410804),"kg/s"], null)], null),"value":unit,"on-change":(function (p1__38336_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","change","sludge-valve/change",-902580431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38336_SHARP_], null)], null));
})});
return obj38413;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38410,G__38411) : helix.core.jsx.call(null,G__38410,G__38411));
})()]});
return obj38385;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38382,G__38383) : helix.core.jsxs.call(null,G__38382,G__38383));
});
if(goog.DEBUG === true){
var G__38418 = G__38347;
(G__38418.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/flow-rate-init-max-value");

return G__38418;
} else {
return G__38347;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.settings_form = (function (){var G__38430 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$settings_form_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38437 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__38448 = helix.core.Fragment;
var G__38449 = ({"children": [(function (){var G__38452 = "div";
var G__38453 = (function (){var obj38455 = ({"className":"divider","style":(function (){var obj38457 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj38457;
})(),"children":"head-up-display"});
return obj38455;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38452,G__38453) : helix.core.jsx.call(null,G__38452,G__38453));
})(),(function (){var G__38458 = app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.mode_hud_settings;
var G__38459 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38458,G__38459) : helix.core.jsx.call(null,G__38458,G__38459));
})(),(function (){var G__38460 = app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.damper_hud_settings;
var G__38461 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38460,G__38461) : helix.core.jsx.call(null,G__38460,G__38461));
})(),(function (){var G__38463 = app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.flow_rate_hud_settings;
var G__38464 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38463,G__38464) : helix.core.jsx.call(null,G__38463,G__38464));
})(),(function (){var G__38469 = app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.countdown_hud_settings;
var G__38470 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38469,G__38470) : helix.core.jsx.call(null,G__38469,G__38470));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__38471 = helix.core.Fragment;
var G__38472 = ({"children": [(function (){var G__38475 = "div";
var G__38476 = (function (){var obj38479 = ({"className":"divider","children":"simulation start values"});
return obj38479;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38475,G__38476) : helix.core.jsx.call(null,G__38475,G__38476));
})(),(function (){var G__38482 = app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.countdown_init_value;
var G__38483 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38482,G__38483) : helix.core.jsx.call(null,G__38482,G__38483));
})(),(function (){var G__38485 = "div";
var G__38486 = (function (){var obj38489 = ({"className":"divider","children":"specifications"});
return obj38489;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38485,G__38486) : helix.core.jsx.call(null,G__38485,G__38486));
})(),(function (){var G__38493 = app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.flow_rate_init_max_value;
var G__38494 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38493,G__38494) : helix.core.jsx.call(null,G__38493,G__38494));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38471,G__38472) : helix.core.jsxs.call(null,G__38471,G__38472));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38448,G__38449) : helix.core.jsxs.call(null,G__38448,G__38449));
});
if(goog.DEBUG === true){
var G__38503 = G__38430;
(G__38503.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/settings-form");

return G__38503;
} else {
return G__38430;
}
})();




app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.sludge_valve_settings = (function (){var G__38519 = (function app$ui$shared$boiler_plant$actuators$blowdown$sludge_valve$settings$sludge_valve_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38524 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"blowdown","blowdown",-2109178671),new cljs.core.Keyword(null,"sludge-valve","sludge-valve",-1035698924),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__38537 = app.ui.shared.components.modal.settings;
var G__38538 = (function (){var obj38546 = ({"title":"Bottom Blowdown Valve Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","restore-defaults-settings","sludge-valve/restore-defaults-settings",-489337210)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sludge-valve","apply-settings","sludge-valve/apply-settings",-697771861)], null));
}),"children":(function (){var G__38549 = app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.settings_form;
var G__38550 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38549,G__38550) : helix.core.jsx.call(null,G__38549,G__38550));
})()});
return obj38546;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38537,G__38538) : helix.core.jsx.call(null,G__38537,G__38538));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38552 = G__38519;
(G__38552.displayName = "app.ui.shared.boiler-plant.actuators.blowdown.sludge-valve.settings/sludge-valve-settings");

return G__38552;
} else {
return G__38519;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.blowdown.sludge_valve.settings.js.map
