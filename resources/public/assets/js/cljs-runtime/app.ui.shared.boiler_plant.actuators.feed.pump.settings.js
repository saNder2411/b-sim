goog.provide('app.ui.shared.boiler_plant.actuators.feed.pump.settings');

app.ui.shared.boiler_plant.actuators.feed.pump.settings.mode_hud_settings = (function (){var G__37990 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$mode_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__37996 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__38009 = app.ui.shared.components.form.field_row;
var G__38010 = (function (){var obj38014 = ({"label":"CONTROL MODE","children":[(function (){var G__38017 = app.ui.shared.components.form.select;
var G__38018 = (function (){var obj38020 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manual",new cljs.core.Keyword(null,"label","label",1718410804),"Manual"], null)], null),"value":value,"on-change":(function (p1__37978_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__37978_SHARP_], null)], null));
})});
return obj38020;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38017,G__38018) : helix.core.jsx.call(null,G__38017,G__38018));
})(),(function (){var G__38022 = app.ui.shared.components.form.checkbox;
var G__38023 = (function (){var obj38025 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj38025;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38022,G__38023) : helix.core.jsx.call(null,G__38022,G__38023));
})()]});
return obj38014;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38009,G__38010) : helix.core.jsxs.call(null,G__38009,G__38010));
});
if(goog.DEBUG === true){
var G__38034 = G__37990;
(G__38034.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/mode-hud-settings");

return G__38034;
} else {
return G__37990;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.performance_hud_settings = (function (){var G__38075 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$performance_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__38083 = app.ui.shared.components.form.field_row;
var G__38084 = (function (){var obj38086 = ({"label":"PERFORMANCE","children":[(function (){var G__38087 = app.ui.shared.components.form.select;
var G__38088 = (function (){var obj38094 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__38050_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38050_SHARP_], null)], null));
})});
return obj38094;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38087,G__38088) : helix.core.jsx.call(null,G__38087,G__38088));
})(),(function (){var G__38098 = app.ui.shared.components.form.checkbox;
var G__38099 = (function (){var obj38101 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj38101;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38098,G__38099) : helix.core.jsx.call(null,G__38098,G__38099));
})()]});
return obj38086;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38083,G__38084) : helix.core.jsxs.call(null,G__38083,G__38084));
});
if(goog.DEBUG === true){
var G__38104 = G__38075;
(G__38104.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/performance-hud-settings");

return G__38104;
} else {
return G__38075;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.rotation_hud_settings = (function (){var G__38121 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$rotation_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__38131 = app.ui.shared.components.form.field_row;
var G__38132 = (function (){var obj38136 = ({"label":"ROTATIONAL SPEED","children":[(function (){var G__38139 = app.ui.shared.components.form.select;
var G__38140 = (function (){var obj38142 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rpm",new cljs.core.Keyword(null,"label","label",1718410804),"rpm"], null)], null),"value":unit,"on-change":(function (p1__38109_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38109_SHARP_], null)], null));
})});
return obj38142;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38139,G__38140) : helix.core.jsx.call(null,G__38139,G__38140));
})(),(function (){var G__38145 = app.ui.shared.components.form.checkbox;
var G__38146 = (function (){var obj38148 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj38148;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38145,G__38146) : helix.core.jsx.call(null,G__38145,G__38146));
})()]});
return obj38136;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38131,G__38132) : helix.core.jsxs.call(null,G__38131,G__38132));
});
if(goog.DEBUG === true){
var G__38155 = G__38121;
(G__38155.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/rotation-hud-settings");

return G__38155;
} else {
return G__38121;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.flow_rate_hud_settings = (function (){var G__38168 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$flow_rate_hud_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38174 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__38185 = app.ui.shared.components.form.field_row;
var G__38186 = (function (){var obj38188 = ({"label":"FLOW-RATE","children":[(function (){var G__38193 = app.ui.shared.components.form.select;
var G__38194 = (function (){var obj38197 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__38159_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38159_SHARP_], null)], null));
})});
return obj38197;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38193,G__38194) : helix.core.jsx.call(null,G__38193,G__38194));
})(),(function (){var G__38204 = app.ui.shared.components.form.checkbox;
var G__38205 = (function (){var obj38207 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj38207;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38204,G__38205) : helix.core.jsx.call(null,G__38204,G__38205));
})()]});
return obj38188;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38185,G__38186) : helix.core.jsxs.call(null,G__38185,G__38186));
});
if(goog.DEBUG === true){
var G__38218 = G__38168;
(G__38218.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/flow-rate-hud-settings");

return G__38218;
} else {
return G__38168;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.performance_init_value = (function (){var G__38248 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$performance_init_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38250 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-pump-performance","feed-water-pump-performance",1473062074).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pump performance value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__38262 = app.ui.shared.components.form.field_row;
var G__38263 = (function (){var obj38268 = ({"label":"PERFORMANCE","children":[(function (){var G__38279 = app.ui.shared.components.form.input_number;
var G__38280 = helix.impl.props.merge_obj((function (){var obj38283 = ({"value":value,"on-change":(function (p1__38229_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__38229_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__38232_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__38232_SHARP_], null)], null));
}));
})});
return obj38283;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38279,G__38280) : helix.core.jsx.call(null,G__38279,G__38280));
})(),(function (){var G__38299 = app.ui.shared.components.form.select;
var G__38300 = (function (){var obj38303 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__38237_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38237_SHARP_], null)], null));
})});
return obj38303;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38299,G__38300) : helix.core.jsx.call(null,G__38299,G__38300));
})()]});
return obj38268;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38262,G__38263) : helix.core.jsxs.call(null,G__38262,G__38263));
});
if(goog.DEBUG === true){
var G__38328 = G__38248;
(G__38328.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/performance-init-value");

return G__38328;
} else {
return G__38248;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.rotation_init_max_value = (function (){var G__38370 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$rotation_init_max_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38379 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max","max",61366548)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-pump-rot-speed","feed-water-pump-rot-speed",631778687).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pump maximum rotational speed value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__38390 = app.ui.shared.components.form.field_row;
var G__38391 = (function (){var obj38395 = ({"label":"MAXIMUM ROTATIONAL SPEED","children":[(function (){var G__38404 = app.ui.shared.components.form.input_number;
var G__38405 = helix.impl.props.merge_obj((function (){var obj38415 = ({"value":value,"on-change":(function (p1__38346_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max","max",61366548)], null),p1__38346_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__38351_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max","max",61366548)], null),p1__38351_SHARP_], null)], null));
}));
})});
return obj38415;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38404,G__38405) : helix.core.jsx.call(null,G__38404,G__38405));
})(),(function (){var G__38433 = app.ui.shared.components.form.select;
var G__38434 = (function (){var obj38443 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rpm",new cljs.core.Keyword(null,"label","label",1718410804),"rpm"], null)], null),"value":unit,"on-change":(function (p1__38360_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38360_SHARP_], null)], null));
})});
return obj38443;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38433,G__38434) : helix.core.jsx.call(null,G__38433,G__38434));
})()]});
return obj38395;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38390,G__38391) : helix.core.jsxs.call(null,G__38390,G__38391));
});
if(goog.DEBUG === true){
var G__38474 = G__38370;
(G__38474.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/rotation-init-max-value");

return G__38474;
} else {
return G__38370;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.flow_rate_init_max_value = (function (){var G__38508 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$flow_rate_init_max_value_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38516 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","flow-rate-converted-max-value","feed-pump/flow-rate-converted-max-value",755428430)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-flow-rate","feed-water-elect-valve-flow-rate",997798988).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial flow rate maximum value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__38527 = app.ui.shared.components.form.field_row;
var G__38528 = (function (){var obj38532 = ({"label":"MAXIMUM FLOW-RATE","children":[(function (){var G__38535 = app.ui.shared.components.form.input_number;
var G__38536 = helix.impl.props.merge_obj((function (){var obj38540 = ({"value":converted_value,"on-change":(function (p1__38490_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change-flow-rate-max-value","feed-pump/change-flow-rate-max-value",-2045249959),p1__38490_SHARP_], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__38497_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change-flow-rate-max-value","feed-pump/change-flow-rate-max-value",-2045249959),p1__38497_SHARP_], null));
}));
})});
return obj38540;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38535,G__38536) : helix.core.jsx.call(null,G__38535,G__38536));
})(),(function (){var G__38553 = app.ui.shared.components.form.select;
var G__38554 = (function (){var obj38556 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__38501_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","change","feed-pump/change",-1855091097),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__38501_SHARP_], null)], null));
})});
return obj38556;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38553,G__38554) : helix.core.jsx.call(null,G__38553,G__38554));
})()]});
return obj38532;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38527,G__38528) : helix.core.jsxs.call(null,G__38527,G__38528));
});
if(goog.DEBUG === true){
var G__38565 = G__38508;
(G__38565.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/flow-rate-init-max-value");

return G__38565;
} else {
return G__38508;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.settings_form = (function (){var G__38574 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$settings_form_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38577 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__38581 = helix.core.Fragment;
var G__38582 = ({"children": [(function (){var G__38586 = "div";
var G__38587 = (function (){var obj38591 = ({"className":"divider","style":(function (){var obj38597 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj38597;
})(),"children":"head-up-display"});
return obj38591;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38586,G__38587) : helix.core.jsx.call(null,G__38586,G__38587));
})(),(function (){var G__38598 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.mode_hud_settings;
var G__38599 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38598,G__38599) : helix.core.jsx.call(null,G__38598,G__38599));
})(),(function (){var G__38604 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.performance_hud_settings;
var G__38605 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38604,G__38605) : helix.core.jsx.call(null,G__38604,G__38605));
})(),(function (){var G__38608 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.rotation_hud_settings;
var G__38609 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38608,G__38609) : helix.core.jsx.call(null,G__38608,G__38609));
})(),(function (){var G__38612 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.flow_rate_hud_settings;
var G__38613 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38612,G__38613) : helix.core.jsx.call(null,G__38612,G__38613));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__38618 = helix.core.Fragment;
var G__38620 = ({"children": [(function (){var G__38622 = "div";
var G__38623 = (function (){var obj38625 = ({"className":"divider","children":"simulation start values"});
return obj38625;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38622,G__38623) : helix.core.jsx.call(null,G__38622,G__38623));
})(),(function (){var G__38626 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.performance_init_value;
var G__38627 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38626,G__38627) : helix.core.jsx.call(null,G__38626,G__38627));
})(),(function (){var G__38631 = "div";
var G__38632 = (function (){var obj38636 = ({"className":"divider","children":"specifications"});
return obj38636;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38631,G__38632) : helix.core.jsx.call(null,G__38631,G__38632));
})(),(function (){var G__38637 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.rotation_init_max_value;
var G__38638 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38637,G__38638) : helix.core.jsx.call(null,G__38637,G__38638));
})(),(function (){var G__38642 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.flow_rate_init_max_value;
var G__38643 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38642,G__38643) : helix.core.jsx.call(null,G__38642,G__38643));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38618,G__38620) : helix.core.jsxs.call(null,G__38618,G__38620));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__38581,G__38582) : helix.core.jsxs.call(null,G__38581,G__38582));
});
if(goog.DEBUG === true){
var G__38648 = G__38574;
(G__38648.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/settings-form");

return G__38648;
} else {
return G__38574;
}
})();




app.ui.shared.boiler_plant.actuators.feed.pump.settings.feed_pump_settings = (function (){var G__38657 = (function app$ui$shared$boiler_plant$actuators$feed$pump$settings$feed_pump_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__38661 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"boiler-plant","boiler-plant",-2141778734),new cljs.core.Keyword(null,"actuators","actuators",-1940435442),new cljs.core.Keyword(null,"feed","feed",-1566486205),new cljs.core.Keyword(null,"pump","pump",-453885150),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__38668 = app.ui.shared.components.modal.settings;
var G__38669 = (function (){var obj38673 = ({"title":"Feedwater Pump Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","restore-defaults-settings","feed-pump/restore-defaults-settings",722183988)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("feed-pump","apply-settings","feed-pump/apply-settings",243194329)], null));
}),"children":(function (){var G__38680 = app.ui.shared.boiler_plant.actuators.feed.pump.settings.settings_form;
var G__38681 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38680,G__38681) : helix.core.jsx.call(null,G__38680,G__38681));
})()});
return obj38673;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__38668,G__38669) : helix.core.jsx.call(null,G__38668,G__38669));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__38690 = G__38657;
(G__38690.displayName = "app.ui.shared.boiler-plant.actuators.feed.pump.settings/feed-pump-settings");

return G__38690;
} else {
return G__38657;
}
})();




//# sourceMappingURL=app.ui.shared.boiler_plant.actuators.feed.pump.settings.js.map
