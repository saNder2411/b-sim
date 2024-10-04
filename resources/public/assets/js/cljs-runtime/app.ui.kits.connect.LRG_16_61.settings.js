goog.provide('app.ui.kits.connect.LRG_16_61.settings');

app.ui.kits.connect.LRG_16_61.settings.correction_dirty_factor = (function (){var G__41021 = (function app$ui$kits$connect$LRG_16_61$settings$correction_dirty_factor_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41029 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61",new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-correction-f","cond-probe-correction-f",1362037938).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),"factor");
var validate_message = ["Initial cell constant value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ","factor"].join('');
var G__41058 = app.ui.shared.components.form.field_row;
var G__41059 = (function (){var obj41064 = ({"label":"CELL CONSTANT","children":[(function (){var G__41122 = app.ui.shared.components.form.input_number;
var G__41123 = helix.impl.props.merge_obj((function (){var obj41132 = ({"value":value,"on-change":(function (p1__40990_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-61","change","LRG-16-61/change",1150022471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null),p1__40990_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__40995_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-61","change","LRG-16-61/change",1150022471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null),p1__40995_SHARP_], null)], null));
}));
})});
return obj41132;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41122,G__41123) : helix.core.jsx.call(null,G__41122,G__41123));
})(),(function (){var G__41166 = app.ui.shared.components.form.select;
var G__41167 = (function (){var obj41172 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"factor",new cljs.core.Keyword(null,"label","label",1718410804),"factor"], null)], null),"value":"factor","on-change":(function (p1__40996_SHARP_){
return cljs.core.identity(p1__40996_SHARP_);
})});
return obj41172;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41166,G__41167) : helix.core.jsx.call(null,G__41166,G__41167));
})()]});
return obj41064;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41058,G__41059) : helix.core.jsxs.call(null,G__41058,G__41059));
});
if(goog.DEBUG === true){
var G__41197 = G__41021;
(G__41197.displayName = "app.ui.kits.connect.LRG-16-61.settings/correction-dirty-factor");

return G__41197;
} else {
return G__41021;
}
})();




app.ui.kits.connect.LRG_16_61.settings.correction_dirty_temp_coeff = (function (){var G__41243 = (function app$ui$kits$connect$LRG_16_61$settings$correction_dirty_temp_coeff_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41250 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61",new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-temperature-coeff","cond-probe-temperature-coeff",1048550902).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),"%/\u00B0C");
var validate_message = ["Initial temperature coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ","%/\u00B0C"].join('');
var G__41264 = app.ui.shared.components.form.field_row;
var G__41265 = (function (){var obj41270 = ({"label":"TEMPERATURE COEFFICIENT","children":[(function (){var G__41271 = app.ui.shared.components.form.input_number;
var G__41272 = helix.impl.props.merge_obj((function (){var obj41280 = ({"value":value,"on-change":(function (p1__41211_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-61","change","LRG-16-61/change",1150022471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null),p1__41211_SHARP_], null)], null));
}),"on-blur":(function (){
return app.ui.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__41215_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-61","change","LRG-16-61/change",1150022471),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null),p1__41215_SHARP_], null)], null));
}));
})});
return obj41280;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41271,G__41272) : helix.core.jsx.call(null,G__41271,G__41272));
})(),(function (){var G__41300 = app.ui.shared.components.form.select;
var G__41301 = (function (){var obj41305 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%/\u00B0C",new cljs.core.Keyword(null,"label","label",1718410804),"%/\u00B0C"], null)], null),"value":"%/\u00B0C","on-change":(function (p1__41218_SHARP_){
return cljs.core.identity(p1__41218_SHARP_);
})});
return obj41305;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41300,G__41301) : helix.core.jsx.call(null,G__41300,G__41301));
})()]});
return obj41270;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41264,G__41265) : helix.core.jsxs.call(null,G__41264,G__41265));
});
if(goog.DEBUG === true){
var G__41310 = G__41243;
(G__41310.displayName = "app.ui.kits.connect.LRG-16-61.settings/correction-dirty-temp-coeff");

return G__41310;
} else {
return G__41243;
}
})();




app.ui.kits.connect.LRG_16_61.settings.settings_form = (function (){var G__41328 = (function app$ui$kits$connect$LRG_16_61$settings$settings_form_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41330 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var G__41337 = helix.core.Fragment;
var G__41338 = ({"children": [(function (){var G__41339 = "div";
var G__41340 = (function (){var obj41344 = ({"className":"divider","style":(function (){var obj41346 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj41346;
})(),"children":"specifications"});
return obj41344;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41339,G__41340) : helix.core.jsx.call(null,G__41339,G__41340));
})(),(function (){var G__41355 = app.ui.kits.connect.LRG_16_61.settings.correction_dirty_factor;
var G__41356 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41355,G__41356) : helix.core.jsx.call(null,G__41355,G__41356));
})(),(function (){var G__41357 = app.ui.kits.connect.LRG_16_61.settings.correction_dirty_temp_coeff;
var G__41358 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41357,G__41358) : helix.core.jsx.call(null,G__41357,G__41358));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__41337,G__41338) : helix.core.jsxs.call(null,G__41337,G__41338));
});
if(goog.DEBUG === true){
var G__41363 = G__41328;
(G__41363.displayName = "app.ui.kits.connect.LRG-16-61.settings/settings-form");

return G__41363;
} else {
return G__41328;
}
})();




app.ui.kits.connect.LRG_16_61.settings.LRG_16_61_settings = (function (){var G__41373 = (function app$ui$kits$connect$LRG_16_61$settings$LRG_16_61_settings_render(props__27592__auto__,maybe_ref__27593__auto__){
var vec__41376 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27592__auto__),maybe_ref__27593__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kit","data-by-path","kit/data-by-path",-1003782842),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-61",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__41383 = app.ui.shared.components.modal.settings;
var G__41384 = (function (){var obj41388 = ({"title":"Dirty Data Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-61","restore-defaults-settings","LRG-16-61/restore-defaults-settings",-1850633708)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("LRG-16-61","apply-settings","LRG-16-61/apply-settings",739284153)], null));
}),"children":(function (){var G__41392 = app.ui.kits.connect.LRG_16_61.settings.settings_form;
var G__41393 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41392,G__41393) : helix.core.jsx.call(null,G__41392,G__41393));
})()});
return obj41388;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__41383,G__41384) : helix.core.jsx.call(null,G__41383,G__41384));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__41401 = G__41373;
(G__41401.displayName = "app.ui.kits.connect.LRG-16-61.settings/LRG-16-61-settings");

return G__41401;
} else {
return G__41373;
}
})();




//# sourceMappingURL=app.ui.kits.connect.LRG_16_61.settings.js.map
