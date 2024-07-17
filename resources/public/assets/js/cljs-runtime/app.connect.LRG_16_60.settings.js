goog.provide('app.connect.LRG_16_60.settings');

app.connect.LRG_16_60.settings.correction_dirty_factor = (function (){var G__43025 = (function app$connect$LRG_16_60$settings$correction_dirty_factor_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__43037 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-correction-f","cond-probe-correction-f",1362037938).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),"factor");
var validate_message = ["Initial cell constant value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ","factor"].join('');
var G__43059 = app.shared.components.form.field_row;
var G__43060 = (function (){var obj43066 = ({"label":"CELL CONSTANT","children":[(function (){var G__43074 = app.shared.components.form.input_number;
var G__43075 = helix.impl.props.merge_obj((function (){var obj43083 = ({"value":value,"on-change":(function (p1__42979_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null),p1__42979_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__42984_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"factor","factor",-2103172748)], null),p1__42984_SHARP_], null)], null));
}));
})});
return obj43083;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43074,G__43075) : helix.core.jsx.call(null,G__43074,G__43075));
})(),(function (){var G__43098 = app.shared.components.form.select;
var G__43099 = (function (){var obj43105 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"factor",new cljs.core.Keyword(null,"label","label",1718410804),"factor"], null)], null),"value":"factor","on-change":(function (p1__42989_SHARP_){
return cljs.core.identity(p1__42989_SHARP_);
})});
return obj43105;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43098,G__43099) : helix.core.jsx.call(null,G__43098,G__43099));
})()]});
return obj43066;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__43059,G__43060) : helix.core.jsxs.call(null,G__43059,G__43060));
});
if(goog.DEBUG === true){
var G__43120 = G__43025;
(G__43120.displayName = "app.connect.LRG-16-60.settings/correction-dirty-factor");

return G__43120;
} else {
return G__43025;
}
})();




app.connect.LRG_16_60.settings.correction_dirty_temp_coeff = (function (){var G__43174 = (function app$connect$LRG_16_60$settings$correction_dirty_temp_coeff_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__43191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var value = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null)], null));
var limits = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cond-probe-temperature-coeff","cond-probe-temperature-coeff",1048550902).cljs$core$IFn$_invoke$arity$1(app.units.constants.UNIT_LIMITS),"%/\u00B0C");
var validate_message = ["Initial temperature coefficient value must be within following range: [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits)),"] ","%/\u00B0C"].join('');
var G__43212 = app.shared.components.form.field_row;
var G__43213 = (function (){var obj43222 = ({"label":"TEMPERATURE COEFFICIENT","children":[(function (){var G__43225 = app.shared.components.form.input_number;
var G__43226 = helix.impl.props.merge_obj((function (){var obj43229 = ({"value":value,"on-change":(function (p1__43134_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null),p1__43134_SHARP_], null)], null));
}),"on-blur":(function (){
return app.shared.components.form.validate_input_number(value,new cljs.core.Keyword(null,"min","min",444991522).cljs$core$IFn$_invoke$arity$1(limits),new cljs.core.Keyword(null,"max","max",61366548).cljs$core$IFn$_invoke$arity$1(limits),validate_message,(function (p1__43140_SHARP_){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-LRG-16-60","change-LRG-16-60",186435781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"correction-dirty","correction-dirty",-2052868692),new cljs.core.Keyword(null,"temperature-coeff","temperature-coeff",-1649600028)], null),p1__43140_SHARP_], null)], null));
}));
})});
return obj43229;
})(),helix.impl.props._props.cljs$core$IFn$_invoke$arity$1(limits));
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43225,G__43226) : helix.core.jsx.call(null,G__43225,G__43226));
})(),(function (){var G__43246 = app.shared.components.form.select;
var G__43247 = (function (){var obj43251 = ({"data":new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"%/\u00B0C",new cljs.core.Keyword(null,"label","label",1718410804),"%/\u00B0C"], null)], null),"value":"%/\u00B0C","on-change":(function (p1__43143_SHARP_){
return cljs.core.identity(p1__43143_SHARP_);
})});
return obj43251;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43246,G__43247) : helix.core.jsx.call(null,G__43246,G__43247));
})()]});
return obj43222;
})();
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__43212,G__43213) : helix.core.jsxs.call(null,G__43212,G__43213));
});
if(goog.DEBUG === true){
var G__43286 = G__43174;
(G__43286.displayName = "app.connect.LRG-16-60.settings/correction-dirty-temp-coeff");

return G__43286;
} else {
return G__43174;
}
})();




app.connect.LRG_16_60.settings.settings_form = (function (){var G__43301 = (function app$connect$LRG_16_60$settings$settings_form_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__43306 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var G__43311 = helix.core.Fragment;
var G__43312 = ({"children": [(function (){var G__43313 = "div";
var G__43314 = (function (){var obj43318 = ({"className":"divider","style":(function (){var obj43322 = ({"marginTop":helix.impl.props.__GT_js((0))});
return obj43322;
})(),"children":"specifications"});
return obj43318;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43313,G__43314) : helix.core.jsx.call(null,G__43313,G__43314));
})(),(function (){var G__43325 = app.connect.LRG_16_60.settings.correction_dirty_factor;
var G__43326 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43325,G__43326) : helix.core.jsx.call(null,G__43325,G__43326));
})(),(function (){var G__43327 = app.connect.LRG_16_60.settings.correction_dirty_temp_coeff;
var G__43328 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43327,G__43328) : helix.core.jsx.call(null,G__43327,G__43328));
})()]});
return (helix.core.jsxs.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsxs.cljs$core$IFn$_invoke$arity$2(G__43311,G__43312) : helix.core.jsxs.call(null,G__43311,G__43312));
});
if(goog.DEBUG === true){
var G__43330 = G__43301;
(G__43330.displayName = "app.connect.LRG-16-60.settings/settings-form");

return G__43330;
} else {
return G__43301;
}
})();




app.connect.LRG_16_60.settings.LRG_16_60_settings = (function (){var G__43332 = (function app$connect$LRG_16_60$settings$LRG_16_60_settings_render(props__27584__auto__,maybe_ref__27585__auto__){
var vec__43333 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__27584__auto__),maybe_ref__27585__auto__], null);

var show_settings = refx.alpha.use_sub(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kit-data-by-keywords","kit-data-by-keywords",1397702346),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cond","cond",-33823472),new cljs.core.Keyword(null,"probes","probes",-541753203),(0),"LRG 16-60",new cljs.core.Keyword(null,"settings-view","settings-view",1595275038)], null)], null));
if(cljs.core.truth_(show_settings)){
var G__43336 = app.shared.components.modal.settings;
var G__43337 = (function (){var obj43339 = ({"title":"Dirty Data Settings","on-default":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-defaults-LRG-16-60-settings","restore-defaults-LRG-16-60-settings",84434025)], null));
}),"on-done":(function (){
return refx.alpha.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"apply-LRG-16-60-settings","apply-LRG-16-60-settings",-1842022009)], null));
}),"children":(function (){var G__43340 = app.connect.LRG_16_60.settings.settings_form;
var G__43341 = ({});
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43340,G__43341) : helix.core.jsx.call(null,G__43340,G__43341));
})()});
return obj43339;
})();
return (helix.core.jsx.cljs$core$IFn$_invoke$arity$2 ? helix.core.jsx.cljs$core$IFn$_invoke$arity$2(G__43336,G__43337) : helix.core.jsx.call(null,G__43336,G__43337));
} else {
return null;
}
});
if(goog.DEBUG === true){
var G__43342 = G__43332;
(G__43342.displayName = "app.connect.LRG-16-60.settings/LRG-16-60-settings");

return G__43342;
} else {
return G__43332;
}
})();




//# sourceMappingURL=app.connect.LRG_16_60.settings.js.map
