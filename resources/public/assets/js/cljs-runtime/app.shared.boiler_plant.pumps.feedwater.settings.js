goog.provide('app.shared.boiler_plant.pumps.feedwater.settings');

app.shared.boiler_plant.pumps.feedwater.settings.mode_hud_settings = (function (){var G__39103 = (function app$shared$boiler_plant$pumps$feedwater$settings$mode_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39124 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__39143 = app.shared.components.form.field_row;
var G__39144 = (function (){var obj39149 = ({"label":"CONTROL MODE","children":[(function (){var G__39160 = app.shared.components.form.select;
var G__39161 = (function (){var obj39167 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"auto",new cljs.core.Keyword(null,"label","label",1718410804),"Auto"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"manual",new cljs.core.Keyword(null,"label","label",1718410804),"Manual"], null)], null),"value":value,"on-change":(function (p1__39069_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__39069_SHARP_], null)], null));
})});
return obj39167;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39160,G__39161) : helix.core.jsx.call(null,G__39160,G__39161));
})(),(function (){var G__39191 = app.shared.components.form.checkbox;
var G__39192 = (function (){var obj39197 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj39197;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39191,G__39192) : helix.core.jsx.call(null,G__39191,G__39192));
})()]});
return obj39149;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39143,G__39144) : helix.core.jsxs.call(null,G__39143,G__39144));
});
if(goog.DEBUG === true){
var G__39229 = G__39103;
(G__39229.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/mode-hud-settings");

return G__39229;
} else {
return G__39103;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.performance_hud_settings = (function (){var G__39286 = (function app$shared$boiler_plant$pumps$feedwater$settings$performance_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39301 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__39320 = app.shared.components.form.field_row;
var G__39321 = (function (){var obj39329 = ({"label":"PERFORMANCE","children":[(function (){var G__39339 = app.shared.components.form.select;
var G__39340 = (function (){var obj39347 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__39254_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39254_SHARP_], null)], null));
})});
return obj39347;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39339,G__39340) : helix.core.jsx.call(null,G__39339,G__39340));
})(),(function (){var G__39365 = app.shared.components.form.checkbox;
var G__39366 = (function (){var obj39375 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj39375;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39365,G__39366) : helix.core.jsx.call(null,G__39365,G__39366));
})()]});
return obj39329;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39320,G__39321) : helix.core.jsxs.call(null,G__39320,G__39321));
});
if(goog.DEBUG === true){
var G__39395 = G__39286;
(G__39395.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/performance-hud-settings");

return G__39395;
} else {
return G__39286;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.rotation_hud_settings = (function (){var G__39433 = (function app$shared$boiler_plant$pumps$feedwater$settings$rotation_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39448 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__39457 = app.shared.components.form.field_row;
var G__39458 = (function (){var obj39465 = ({"label":"ROTATIONAL SPEED","children":[(function (){var G__39470 = app.shared.components.form.select;
var G__39471 = (function (){var obj39484 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rpm",new cljs.core.Keyword(null,"label","label",1718410804),"rpm"], null)], null),"value":unit,"on-change":(function (p1__39412_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39412_SHARP_], null)], null));
})});
return obj39484;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39470,G__39471) : helix.core.jsx.call(null,G__39470,G__39471));
})(),(function (){var G__39509 = app.shared.components.form.checkbox;
var G__39510 = (function (){var obj39522 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj39522;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39509,G__39510) : helix.core.jsx.call(null,G__39509,G__39510));
})()]});
return obj39465;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39457,G__39458) : helix.core.jsxs.call(null,G__39457,G__39458));
});
if(goog.DEBUG === true){
var G__39556 = G__39433;
(G__39556.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/rotation-hud-settings");

return G__39556;
} else {
return G__39433;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.flow_rate_hud_settings = (function (){var G__39606 = (function app$shared$boiler_plant$pumps$feedwater$settings$flow_rate_hud_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var view = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
var G__39646 = app.shared.components.form.field_row;
var G__39648 = (function (){var obj39653 = ({"label":"FLOW-RATE","children":[(function (){var G__39659 = app.shared.components.form.select;
var G__39660 = (function (){var obj39665 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__39582_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39582_SHARP_], null)], null));
})});
return obj39665;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39659,G__39660) : helix.core.jsx.call(null,G__39659,G__39660));
})(),(function (){var G__39673 = app.shared.components.form.checkbox;
var G__39674 = (function (){var obj39678 = ({"value":view,"on-change":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"view","view",1247994814)], null),cljs.core.not(view)], null)], null));
})});
return obj39678;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39673,G__39674) : helix.core.jsx.call(null,G__39673,G__39674));
})()]});
return obj39653;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39646,G__39648) : helix.core.jsxs.call(null,G__39646,G__39648));
});
if(goog.DEBUG === true){
var G__39707 = G__39606;
(G__39707.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/flow-rate-hud-settings");

return G__39707;
} else {
return G__39606;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.performance_init_value = (function (){var G__39756 = (function app$shared$boiler_plant$pumps$feedwater$settings$performance_init_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39764 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"value","value",305978217)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-pump-performance","feed-water-pump-performance",1473062074).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pump performance value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__39784 = app.shared.components.form.field_row;
var G__39785 = (function (){var obj39789 = ({"label":"PERFORMANCE","children":[(function (){var G__39794 = app.shared.components.form.input_number;
var G__39795 = helix.impl.props.merge_obj((function (){var obj39797 = ({"value":value,"on-change":(function (p1__39714_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__39714_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__39719_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init-sim-output","init-sim-output",1170737841),new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"value","value",305978217)], null),p1__39719_SHARP_], null)], null));
}));
})});
return obj39797;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39794,G__39795) : helix.core.jsx.call(null,G__39794,G__39795));
})(),(function (){var G__39826 = app.shared.components.form.select;
var G__39827 = (function (){var obj39833 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%",new cljs.core.Keyword(null,"label","label",1718410804),"%"], null)], null),"value":unit,"on-change":(function (p1__39723_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"performance","performance",1987578184),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39723_SHARP_], null)], null));
})});
return obj39833;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39826,G__39827) : helix.core.jsx.call(null,G__39826,G__39827));
})()]});
return obj39789;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39784,G__39785) : helix.core.jsxs.call(null,G__39784,G__39785));
});
if(goog.DEBUG === true){
var G__39855 = G__39756;
(G__39855.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/performance-init-value");

return G__39855;
} else {
return G__39756;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.rotation_init_max_value = (function (){var G__39910 = (function app$shared$boiler_plant$pumps$feedwater$settings$rotation_init_max_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39915 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-pump-rot-speed","feed-water-pump-rot-speed",631778687).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial pump maximum rotational speed value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__39937 = app.shared.components.form.field_row;
var G__39938 = (function (){var obj39943 = ({"label":"MAXIMUM ROTATIONAL SPEED","children":[(function (){var G__39948 = app.shared.components.form.input_number;
var G__39949 = helix.impl.props.merge_obj((function (){var obj39953 = ({"value":value,"on-change":(function (p1__39870_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__39870_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__39873_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"max-value","max-value",687805168)], null),p1__39873_SHARP_], null)], null));
}));
})});
return obj39953;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39948,G__39949) : helix.core.jsx.call(null,G__39948,G__39949));
})(),(function (){var G__39978 = app.shared.components.form.select;
var G__39979 = (function (){var obj39991 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"rpm",new cljs.core.Keyword(null,"label","label",1718410804),"rpm"], null)], null),"value":unit,"on-change":(function (p1__39874_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39874_SHARP_], null)], null));
})});
return obj39991;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39978,G__39979) : helix.core.jsx.call(null,G__39978,G__39979));
})()]});
return obj39943;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39937,G__39938) : helix.core.jsxs.call(null,G__39937,G__39938));
});
if(goog.DEBUG === true){
var G__40018 = G__39910;
(G__40018.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/rotation-init-max-value");

return G__40018;
} else {
return G__39910;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.flow_rate_init_max_value = (function (){var G__40087 = (function app$shared$boiler_plant$pumps$feedwater$settings$flow_rate_init_max_value_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__40097 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var converted_value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump-flow-rate-max-converted-value","feedwater-pump-flow-rate-max-converted-value",1308731877)], null));
var unit = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feed-water-elect-valve-flow-rate","feed-water-elect-valve-flow-rate",997798988).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),unit);
var validate_message = ["Initial flow rate maximum value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(unit)].join('');
var G__40110 = app.shared.components.form.field_row;
var G__40111 = (function (){var obj40120 = ({"label":"MAXIMUM FLOW-RATE","children":[(function (){var G__40124 = app.shared.components.form.input_number;
var G__40125 = helix.impl.props.merge_obj((function (){var obj40129 = ({"value":converted_value,"on-change":(function (p1__40041_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump-flow-rate-max-value","change-feedwater-pump-flow-rate-max-value",-585911599),p1__40041_SHARP_], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(converted_value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__40042_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump-flow-rate-max-value","change-feedwater-pump-flow-rate-max-value",-585911599),p1__40042_SHARP_], null));
}));
})});
return obj40129;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40124,G__40125) : helix.core.jsx.call(null,G__40124,G__40125));
})(),(function (){var G__40156 = app.shared.components.form.select;
var G__40157 = (function (){var obj40165 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":unit,"on-change":(function (p1__40048_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-feedwater-pump","change-feedwater-pump",-528574414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__40048_SHARP_], null)], null));
})});
return obj40165;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40156,G__40157) : helix.core.jsx.call(null,G__40156,G__40157));
})()]});
return obj40120;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40110,G__40111) : helix.core.jsxs.call(null,G__40110,G__40111));
});
if(goog.DEBUG === true){
var G__40174 = G__40087;
(G__40174.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/flow-rate-init-max-value");

return G__40174;
} else {
return G__40087;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.settings_form = (function (){var G__40194 = (function app$shared$boiler_plant$pumps$feedwater$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__40207 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings_form_sim_start_values = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-settings-form-sim-start-values","show-settings-form-sim-start-values",-1672088929)], null));
var G__40218 = helix.core.Fragment;
var G__40219 = ({"children": [(function (){var G__40222 = "div";
var G__40223 = (function (){var obj40226 = ({"className":"divider","style":(function (){var obj40228 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj40228;
})(),"children":"head-up-display"});
return obj40226;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40222,G__40223) : helix.core.jsx.call(null,G__40222,G__40223));
})(),(function (){var G__40242 = app.shared.boiler_plant.pumps.feedwater.settings.mode_hud_settings;
var G__40243 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40242,G__40243) : helix.core.jsx.call(null,G__40242,G__40243));
})(),(function (){var G__40244 = app.shared.boiler_plant.pumps.feedwater.settings.performance_hud_settings;
var G__40245 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40244,G__40245) : helix.core.jsx.call(null,G__40244,G__40245));
})(),(function (){var G__40247 = app.shared.boiler_plant.pumps.feedwater.settings.rotation_hud_settings;
var G__40248 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40247,G__40248) : helix.core.jsx.call(null,G__40247,G__40248));
})(),(function (){var G__40255 = app.shared.boiler_plant.pumps.feedwater.settings.flow_rate_hud_settings;
var G__40256 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40255,G__40256) : helix.core.jsx.call(null,G__40255,G__40256));
})(),(cljs.core.truth_(show_settings_form_sim_start_values)?(function (){var G__40267 = helix.core.Fragment;
var G__40268 = ({"children": [(function (){var G__40269 = "div";
var G__40270 = (function (){var obj40272 = ({"className":"divider","children":"simulation start values"});
return obj40272;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40269,G__40270) : helix.core.jsx.call(null,G__40269,G__40270));
})(),(function (){var G__40278 = app.shared.boiler_plant.pumps.feedwater.settings.performance_init_value;
var G__40279 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40278,G__40279) : helix.core.jsx.call(null,G__40278,G__40279));
})(),(function (){var G__40289 = "div";
var G__40290 = (function (){var obj40294 = ({"className":"divider","children":"specifications"});
return obj40294;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40289,G__40290) : helix.core.jsx.call(null,G__40289,G__40290));
})(),(function (){var G__40296 = app.shared.boiler_plant.pumps.feedwater.settings.rotation_init_max_value;
var G__40297 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40296,G__40297) : helix.core.jsx.call(null,G__40296,G__40297));
})(),(function (){var G__40302 = app.shared.boiler_plant.pumps.feedwater.settings.flow_rate_init_max_value;
var G__40303 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40302,G__40303) : helix.core.jsx.call(null,G__40302,G__40303));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40267,G__40268) : helix.core.jsxs.call(null,G__40267,G__40268));
})():null)]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__40218,G__40219) : helix.core.jsxs.call(null,G__40218,G__40219));
});
if(goog.DEBUG === true){
var G__40313 = G__40194;
(G__40313.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/settings-form");

return G__40313;
} else {
return G__40194;
}
})();




app.shared.boiler_plant.pumps.feedwater.settings.feedwater_pump_settings = (function (){var G__40332 = (function app$shared$boiler_plant$pumps$feedwater$settings$feedwater_pump_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__40340 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feedwater-pump","feedwater-pump",-1102490078),new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__40346 = app.shared.components.modal.settings;
var G__40347 = (function (){var obj40351 = ({"title":"Feedwater Pump Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-feedwater-pump-settings","restore-defaults-feedwater-pump-settings",-1194333909)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-feedwater-pump-settings","apply-feedwater-pump-settings",-1556512642)], null));
}),"children":(function (){var G__40361 = app.shared.boiler_plant.pumps.feedwater.settings.settings_form;
var G__40362 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40361,G__40362) : helix.core.jsx.call(null,G__40361,G__40362));
})()});
return obj40351;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__40346,G__40347) : helix.core.jsx.call(null,G__40346,G__40347));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__40376 = G__40332;
(G__40376.displayName = "app.shared.boiler-plant.pumps.feedwater.settings/feedwater-pump-settings");

return G__40376;
} else {
return G__40332;
}
})();




//# sourceMappingURL=app.shared.boiler_plant.pumps.feedwater.settings.js.map
