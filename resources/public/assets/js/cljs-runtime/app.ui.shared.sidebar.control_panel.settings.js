goog.provide('app.ui.shared.sidebar.control_panel.settings');

app.ui.shared.sidebar.control_panel.settings.language = (function (){var G__41065 = (function app$ui$shared$sidebar$control_panel$settings$language_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null)], null));
var G__41088 = app.ui.shared.components.form.field_row;
var G__41089 = (function (){var obj41101 = ({"label":"LANGUAGE","children":(function (){var G__41104 = app.ui.shared.components.form.select;
var G__41105 = (function (){var obj41111 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"en",new cljs.core.Keyword(null,"label","label",1718410804),"English"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"de",new cljs.core.Keyword(null,"label","label",1718410804),"German"], null)], null),"value":value,"on-change":(function (p1__41050_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit-data-by-path","change","kit-data-by-path/change",97342319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),p1__41050_SHARP_], null)], null));
})});
return obj41111;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41104,G__41105) : helix.core.jsx.call(null,G__41104,G__41105));
})()});
return obj41101;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41088,G__41089) : helix.core.jsx.call(null,G__41088,G__41089));
});
if(goog.DEBUG === true){
var G__41130 = G__41065;
(G__41130.displayName = "app.ui.shared.sidebar.control-panel.settings/language");

return G__41130;
} else {
return G__41065;
}
})();




app.ui.shared.sidebar.control_panel.settings.intended_use = (function (){var G__41168 = (function app$ui$shared$sidebar$control_panel$settings$intended_use_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41179 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"intended-use","intended-use",2081554370)], null)], null));
var G__41192 = app.ui.shared.components.form.field_row;
var G__41193 = (function (){var obj41209 = ({"label":"INTENDED USE","children":(function (){var G__41216 = app.ui.shared.components.form.select;
var G__41217 = (function (){var obj41223 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"training",new cljs.core.Keyword(null,"label","label",1718410804),"training"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"demonstration",new cljs.core.Keyword(null,"label","label",1718410804),"demonstration"], null)], null),"value":value,"on-change":(function (p1__41151_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit-data-by-path","change","kit-data-by-path/change",97342319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"intended-use","intended-use",2081554370)], null),p1__41151_SHARP_], null)], null));
})});
return obj41223;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41216,G__41217) : helix.core.jsx.call(null,G__41216,G__41217));
})()});
return obj41209;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41192,G__41193) : helix.core.jsx.call(null,G__41192,G__41193));
});
if(goog.DEBUG === true){
var G__41238 = G__41168;
(G__41238.displayName = "app.ui.shared.sidebar.control-panel.settings/intended-use");

return G__41238;
} else {
return G__41168;
}
})();




app.ui.shared.sidebar.control_panel.settings.operation_mode = (function (){var G__41260 = (function app$ui$shared$sidebar$control_panel$settings$operation_mode_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41266 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null)], null));
var G__41273 = app.ui.shared.components.form.field_row;
var G__41274 = (function (){var obj41278 = ({"label":"OPERATION MODE","children":(function (){var G__41285 = app.ui.shared.components.form.select;
var G__41286 = (function (){var obj41292 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"normal",new cljs.core.Keyword(null,"label","label",1718410804),"normal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"standby",new cljs.core.Keyword(null,"label","label",1718410804),"standby"], null)], null),"value":value,"on-change":(function (p1__41245_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit-data-by-path","change","kit-data-by-path/change",97342319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),p1__41245_SHARP_], null)], null));
})});
return obj41292;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41285,G__41286) : helix.core.jsx.call(null,G__41285,G__41286));
})()});
return obj41278;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41273,G__41274) : helix.core.jsx.call(null,G__41273,G__41274));
});
if(goog.DEBUG === true){
var G__41302 = G__41260;
(G__41302.displayName = "app.ui.shared.sidebar.control-panel.settings/operation-mode");

return G__41302;
} else {
return G__41260;
}
})();




app.ui.shared.sidebar.control_panel.settings.steam_unit = (function (){var G__41313 = (function app$ui$shared$sidebar$control_panel$settings$steam_unit_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41315 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var G__41319 = app.ui.shared.components.form.field_row;
var G__41320 = (function (){var obj41322 = ({"label":"STEAM UNIT","children":(function (){var G__41323 = app.ui.shared.components.form.select;
var G__41324 = (function (){var obj41327 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":value,"on-change":(function (p1__41306_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit-data-by-path","change","kit-data-by-path/change",97342319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__41306_SHARP_], null)], null));
})});
return obj41327;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41323,G__41324) : helix.core.jsx.call(null,G__41323,G__41324));
})()});
return obj41322;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41319,G__41320) : helix.core.jsx.call(null,G__41319,G__41320));
});
if(goog.DEBUG === true){
var G__41333 = G__41313;
(G__41333.displayName = "app.ui.shared.sidebar.control-panel.settings/steam-unit");

return G__41333;
} else {
return G__41313;
}
})();




app.ui.shared.sidebar.control_panel.settings.flow_rate_unit = (function (){var G__41391 = (function app$ui$shared$sidebar$control_panel$settings$flow_rate_unit_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41398 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-feed-actuator","data-by-path","current-feed-actuator/data-by-path",-748274584),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var G__41404 = app.ui.shared.components.form.field_row;
var G__41405 = (function (){var obj41407 = ({"label":"FEEDWATER UNIT","children":(function (){var G__41408 = app.ui.shared.components.form.select;
var G__41409 = (function (){var obj41413 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":value,"on-change":(function (p1__41347_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("current-feed-actuator","change","current-feed-actuator/change",-1435356762),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__41347_SHARP_], null)], null));
})});
return obj41413;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41408,G__41409) : helix.core.jsx.call(null,G__41408,G__41409));
})()});
return obj41407;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41404,G__41405) : helix.core.jsx.call(null,G__41404,G__41405));
});
if(goog.DEBUG === true){
var G__41418 = G__41391;
(G__41418.displayName = "app.ui.shared.sidebar.control-panel.settings/flow-rate-unit");

return G__41418;
} else {
return G__41391;
}
})();




app.ui.shared.sidebar.control_panel.settings.settings_form = (function (){var G__41424 = (function app$ui$shared$sidebar$control_panel$settings$settings_form_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41427 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var G__41431 = helix.core.Fragment;
var G__41432 = ({"children": [(function (){var G__41433 = app.ui.shared.sidebar.control_panel.settings.language;
var G__41434 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41433,G__41434) : helix.core.jsx.call(null,G__41433,G__41434));
})(),(function (){var G__41435 = app.ui.shared.sidebar.control_panel.settings.intended_use;
var G__41436 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41435,G__41436) : helix.core.jsx.call(null,G__41435,G__41436));
})(),(function (){var G__41437 = app.ui.shared.sidebar.control_panel.settings.operation_mode;
var G__41438 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41437,G__41438) : helix.core.jsx.call(null,G__41437,G__41438));
})(),(function (){var G__41439 = app.ui.shared.sidebar.control_panel.settings.steam_unit;
var G__41440 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41439,G__41440) : helix.core.jsx.call(null,G__41439,G__41440));
})(),(function (){var G__41441 = app.ui.shared.sidebar.control_panel.settings.flow_rate_unit;
var G__41442 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41441,G__41442) : helix.core.jsx.call(null,G__41441,G__41442));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41431,G__41432) : helix.core.jsxs.call(null,G__41431,G__41432));
});
if(goog.DEBUG === true){
var G__41443 = G__41424;
(G__41443.displayName = "app.ui.shared.sidebar.control-panel.settings/settings-form");

return G__41443;
} else {
return G__41424;
}
})();




app.ui.shared.sidebar.control_panel.settings.general_settings = (function (){var G__41445 = (function app$ui$shared$sidebar$control_panel$settings$general_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41446 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__41449 = app.ui.shared.components.modal.settings;
var G__41450 = (function (){var obj41452 = ({"title":"General Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("general-settings","restore-defaults","general-settings/restore-defaults",981861365)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit-data-by-path","change","kit-data-by-path/change",97342319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"view","view",1247994814)], null),false], null)], null));
}),"children":(function (){var G__41453 = app.ui.shared.sidebar.control_panel.settings.settings_form;
var G__41454 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41453,G__41454) : helix.core.jsx.call(null,G__41453,G__41454));
})()});
return obj41452;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41449,G__41450) : helix.core.jsx.call(null,G__41449,G__41450));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__41455 = G__41445;
(G__41455.displayName = "app.ui.shared.sidebar.control-panel.settings/general-settings");

return G__41455;
} else {
return G__41445;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.control_panel.settings.js.map
