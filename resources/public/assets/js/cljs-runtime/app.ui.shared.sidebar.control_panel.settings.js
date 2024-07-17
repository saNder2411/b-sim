goog.provide('app.ui.shared.sidebar.control_panel.settings');

app.ui.shared.sidebar.control_panel.settings.language = (function (){var G__39383 = (function app$ui$shared$sidebar$control_panel$settings$language_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39384 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null)], null));
var G__39387 = app.ui.shared.components.form.field_row;
var G__39388 = (function (){var obj39390 = ({"label":"LANGUAGE","children":(function (){var G__39391 = app.ui.shared.components.form.select;
var G__39392 = (function (){var obj39394 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"en",new cljs.core.Keyword(null,"label","label",1718410804),"English"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"de",new cljs.core.Keyword(null,"label","label",1718410804),"German"], null)], null),"value":value,"on-change":(function (p1__39381_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-kit-data-by-path","change-kit-data-by-path",1988332051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"lang","lang",-1819677104)], null),p1__39381_SHARP_], null)], null));
})});
return obj39394;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39391,G__39392) : helix.core.jsx.call(null,G__39391,G__39392));
})()});
return obj39390;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39387,G__39388) : helix.core.jsx.call(null,G__39387,G__39388));
});
if(goog.DEBUG === true){
var G__39395 = G__39383;
(G__39395.displayName = "app.ui.shared.sidebar.control-panel.settings/language");

return G__39395;
} else {
return G__39383;
}
})();




app.ui.shared.sidebar.control_panel.settings.intended_use = (function (){var G__39398 = (function app$ui$shared$sidebar$control_panel$settings$intended_use_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39399 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"intended-use","intended-use",2081554370)], null)], null));
var G__39402 = app.ui.shared.components.form.field_row;
var G__39403 = (function (){var obj39405 = ({"label":"INTENDED USE","children":(function (){var G__39406 = app.ui.shared.components.form.select;
var G__39407 = (function (){var obj39409 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"training",new cljs.core.Keyword(null,"label","label",1718410804),"training"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"demonstration",new cljs.core.Keyword(null,"label","label",1718410804),"demonstration"], null)], null),"value":value,"on-change":(function (p1__39396_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-kit-data-by-path","change-kit-data-by-path",1988332051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"intended-use","intended-use",2081554370)], null),p1__39396_SHARP_], null)], null));
})});
return obj39409;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39406,G__39407) : helix.core.jsx.call(null,G__39406,G__39407));
})()});
return obj39405;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39402,G__39403) : helix.core.jsx.call(null,G__39402,G__39403));
});
if(goog.DEBUG === true){
var G__39410 = G__39398;
(G__39410.displayName = "app.ui.shared.sidebar.control-panel.settings/intended-use");

return G__39410;
} else {
return G__39398;
}
})();




app.ui.shared.sidebar.control_panel.settings.operation_mode = (function (){var G__39413 = (function app$ui$shared$sidebar$control_panel$settings$operation_mode_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39414 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null)], null));
var G__39417 = app.ui.shared.components.form.field_row;
var G__39418 = (function (){var obj39420 = ({"label":"OPERATION MODE","children":(function (){var G__39421 = app.ui.shared.components.form.select;
var G__39422 = (function (){var obj39424 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"normal",new cljs.core.Keyword(null,"label","label",1718410804),"normal"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"standby",new cljs.core.Keyword(null,"label","label",1718410804),"standby"], null)], null),"value":value,"on-change":(function (p1__39411_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-kit-data-by-path","change-kit-data-by-path",1988332051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"operation-mode","operation-mode",1063668791)], null),p1__39411_SHARP_], null)], null));
})});
return obj39424;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39421,G__39422) : helix.core.jsx.call(null,G__39421,G__39422));
})()});
return obj39420;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39417,G__39418) : helix.core.jsx.call(null,G__39417,G__39418));
});
if(goog.DEBUG === true){
var G__39425 = G__39413;
(G__39425.displayName = "app.ui.shared.sidebar.control-panel.settings/operation-mode");

return G__39425;
} else {
return G__39413;
}
})();




app.ui.shared.sidebar.control_panel.settings.steam_unit = (function (){var G__39428 = (function app$ui$shared$sidebar$control_panel$settings$steam_unit_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39429 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var G__39432 = app.ui.shared.components.form.field_row;
var G__39433 = (function (){var obj39435 = ({"label":"STEAM UNIT","children":(function (){var G__39436 = app.ui.shared.components.form.select;
var G__39437 = (function (){var obj39439 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":value,"on-change":(function (p1__39426_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-kit-data-by-path","change-kit-data-by-path",1988332051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"steam","steam",2010684664),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39426_SHARP_], null)], null));
})});
return obj39439;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39436,G__39437) : helix.core.jsx.call(null,G__39436,G__39437));
})()});
return obj39435;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39432,G__39433) : helix.core.jsx.call(null,G__39432,G__39433));
});
if(goog.DEBUG === true){
var G__39440 = G__39428;
(G__39440.displayName = "app.ui.shared.sidebar.control-panel.settings/steam-unit");

return G__39440;
} else {
return G__39428;
}
})();




app.ui.shared.sidebar.control_panel.settings.flow_rate_unit = (function (){var G__39443 = (function app$ui$shared$sidebar$control_panel$settings$flow_rate_unit_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39444 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-feed-actuator-data-by-path","current-feed-actuator-data-by-path",-2035634407),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null)], null));
var G__39447 = app.ui.shared.components.form.field_row;
var G__39448 = (function (){var obj39450 = ({"label":"FEEDWATER UNIT","children":(function (){var G__39451 = app.ui.shared.components.form.select;
var G__39452 = (function (){var obj39454 = ({"data":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"t/h",new cljs.core.Keyword(null,"label","label",1718410804),"t/h"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"T/h",new cljs.core.Keyword(null,"label","label",1718410804),"T/h"], null)], null),"value":value,"on-change":(function (p1__39441_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-current-feed-actuator","change-current-feed-actuator",-143362936),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flow-rate","flow-rate",2143955309),new cljs.core.Keyword(null,"unit","unit",375175175)], null),p1__39441_SHARP_], null)], null));
})});
return obj39454;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39451,G__39452) : helix.core.jsx.call(null,G__39451,G__39452));
})()});
return obj39450;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39447,G__39448) : helix.core.jsx.call(null,G__39447,G__39448));
});
if(goog.DEBUG === true){
var G__39455 = G__39443;
(G__39455.displayName = "app.ui.shared.sidebar.control-panel.settings/flow-rate-unit");

return G__39455;
} else {
return G__39443;
}
})();




app.ui.shared.sidebar.control_panel.settings.settings_form = (function (){var G__39457 = (function app$ui$shared$sidebar$control_panel$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39458 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__39461 = helix.core.Fragment;
var G__39462 = ({"children": [(function (){var G__39463 = app.ui.shared.sidebar.control_panel.settings.language;
var G__39464 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39463,G__39464) : helix.core.jsx.call(null,G__39463,G__39464));
})(),(function (){var G__39465 = app.ui.shared.sidebar.control_panel.settings.intended_use;
var G__39466 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39465,G__39466) : helix.core.jsx.call(null,G__39465,G__39466));
})(),(function (){var G__39467 = app.ui.shared.sidebar.control_panel.settings.operation_mode;
var G__39468 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39467,G__39468) : helix.core.jsx.call(null,G__39467,G__39468));
})(),(function (){var G__39469 = app.ui.shared.sidebar.control_panel.settings.steam_unit;
var G__39470 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39469,G__39470) : helix.core.jsx.call(null,G__39469,G__39470));
})(),(function (){var G__39471 = app.ui.shared.sidebar.control_panel.settings.flow_rate_unit;
var G__39472 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39471,G__39472) : helix.core.jsx.call(null,G__39471,G__39472));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__39461,G__39462) : helix.core.jsxs.call(null,G__39461,G__39462));
});
if(goog.DEBUG === true){
var G__39473 = G__39457;
(G__39473.displayName = "app.ui.shared.sidebar.control-panel.settings/settings-form");

return G__39473;
} else {
return G__39457;
}
})();




app.ui.shared.sidebar.control_panel.settings.general_settings = (function (){var G__39475 = (function app$ui$shared$sidebar$control_panel$settings$general_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__39476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-path","kit-data-by-path",-2104357103),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"view","view",1247994814)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__39479 = app.ui.shared.components.modal.settings;
var G__39480 = (function (){var obj39482 = ({"title":"General Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-general-settings","restore-defaults-general-settings",1552850321)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-kit-data-by-path","change-kit-data-by-path",1988332051),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"general-settings","general-settings",-861361710),new cljs.core.Keyword(null,"view","view",1247994814)], null),false], null)], null));
}),"children":(function (){var G__39483 = app.ui.shared.sidebar.control_panel.settings.settings_form;
var G__39484 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39483,G__39484) : helix.core.jsx.call(null,G__39483,G__39484));
})()});
return obj39482;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__39479,G__39480) : helix.core.jsx.call(null,G__39479,G__39480));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__39485 = G__39475;
(G__39485.displayName = "app.ui.shared.sidebar.control-panel.settings/general-settings");

return G__39485;
} else {
return G__39475;
}
})();




//# sourceMappingURL=app.ui.shared.sidebar.control_panel.settings.js.map
